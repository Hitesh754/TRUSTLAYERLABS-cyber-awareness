import { CRIME_CATEGORIES } from '../../../data/legalProfiles/crimeCategories';
import type { CrimeCategory } from '../../../data/legalProfiles/types';
import type { ExtractedEntities } from '../../types/entity.types';
import type {
  CategoryScoreMap,
  FormClassificationSignals,
  RankedCategory,
} from '../../types/classification.types';

/**
 * Enhanced weights to give more credit to strong keyword and scamDb matches.
 * Increased keyword weight to prioritize direct textual evidence.
 */
export const SCORE_WEIGHTS = {
  keyword: 0.55,  // increased from 0.4
  scamDb: 0.30,   // decreased slightly from 0.35
  form: 0.15,     // decreased from 0.25 (less reliance on form signals alone)
} as const;

function createEmptyScoreMap(): Record<CrimeCategory, number> {
  const map = {} as Record<CrimeCategory, number>;
  for (const category of CRIME_CATEGORIES) {
    map[category] = 0;
  }
  return map;
}

function buildFormSignalScores(signals?: FormClassificationSignals): Record<CrimeCategory, number> {
  const scores = createEmptyScoreMap();
  if (!signals) {
    return scores;
  }

  if (signals.selectedCategory) {
    scores[signals.selectedCategory] = 1;
    return scores;
  }

  if (signals.hasUpiTransaction) {
    scores.UPI_FRAUD += 0.8;
    scores.OTP_FRAUD += 0.3;
  }
  if (signals.hasOtpMention) {
    scores.OTP_FRAUD += 0.8;
    scores.SIM_SWAP += 0.4;
  }
  if (signals.hasCryptoMention) {
    scores.CRYPTO_FRAUD += 0.9;
    scores.INVESTMENT_SCAM += 0.3;
  }
  if (signals.hasFinancialLoss && !signals.hasCryptoMention) {
    scores.UPI_FRAUD += 0.4;
    scores.INVESTMENT_SCAM += 0.3;
  }

  const max = Math.max(...Object.values(scores), 0);
  if (max === 0) {
    return scores;
  }
  for (const category of CRIME_CATEGORIES) {
    scores[category] /= max;
  }
  return scores;
}

/**
 * Category-specific boosts based on extracted entities.
 * E.g., UPI_FRAUD gets boosted when UPI ID + UTR + amount are present together.
 */
function buildEntitySignalScores(entities?: ExtractedEntities): Record<CrimeCategory, number> {
  const scores = createEmptyScoreMap();
  if (!entities) {
    return scores;
  }

  // UPI_FRAUD: UPI ID + UTR + phone indicates strong UPI transaction fraud
  if (entities.upiIds.length > 0 && entities.utrIds.length > 0) {
    scores.UPI_FRAUD += 1.2; // strong combination
  } else if (entities.upiIds.length > 0) {
    scores.UPI_FRAUD += 0.7;
  } else if (entities.utrIds.length > 0) {
    scores.UPI_FRAUD += 0.5;
  }

  // CRYPTO_FRAUD: wallet addresses indicate crypto involvement
  if (entities.walletAddresses.length > 0) {
    scores.CRYPTO_FRAUD += 1.0;
    scores.INVESTMENT_SCAM += 0.4;
  }

  // PHISHING: URLs + emails often indicate phishing attempts
  if (entities.urls.length > 0 && entities.emails.length > 0) {
    scores.PHISHING += 0.9;
  } else if (entities.urls.length > 0) {
    scores.PHISHING += 0.6;
  } else if (entities.emails.length > 0) {
    scores.PHISHING += 0.4;
  }

  // SEXTORTION: threat + demand + phone numbers (profile sharing context)
  if (entities.phoneNumbers.length > 0) {
    scores.SEXTORTION += 0.3;
    scores.CYBER_STALKING += 0.2;
  }

  // QR_SCAM: URLs (especially shortened) indicate QR scams
  if (entities.urls.length > 1) {
    scores.QR_SCAM += 0.4;
  }

  // JOB_SCAM: emails (job applications) or payment demand
  if (entities.emails.length >= 2) {
    scores.JOB_SCAM += 0.3;
  }

  // INVESTMENT_SCAM: crypto wallets or large financial entities
  if (entities.walletAddresses.length > 0) {
    scores.INVESTMENT_SCAM += 0.5;
  }

  // Normalize only if any scores were set
  const max = Math.max(...Object.values(scores), 0);
  if (max === 0) {
    return scores;
  }
  for (const category of CRIME_CATEGORIES) {
    scores[category] /= max;
  }
  return scores;
}


export function mergeCategoryScores(
  keywordScore: Record<CrimeCategory, number>,
  scamDbScore: Record<CrimeCategory, number>,
  formSignals?: FormClassificationSignals,
  entities?: ExtractedEntities,
): CategoryScoreMap {
  const formSignalScore = buildFormSignalScores(formSignals);
  const entitySignalScore = buildEntitySignalScores(entities);
  const mergedScore = createEmptyScoreMap();

  for (const category of CRIME_CATEGORIES) {
    // Entity signals get 10% weight to boost category-specific combinations
    mergedScore[category] =
      keywordScore[category] * SCORE_WEIGHTS.keyword +
      scamDbScore[category] * SCORE_WEIGHTS.scamDb +
      formSignalScore[category] * SCORE_WEIGHTS.form +
      entitySignalScore[category] * 0.1;  // entity boosts are weighted less, but still meaningful
  }

  return { keywordScore, scamDbScore, formSignalScore, mergedScore };
}

export function rankCategories(mergedScore: Record<CrimeCategory, number>): RankedCategory[] {
  const total = Object.values(mergedScore).reduce((sum, value) => sum + value, 0);
  const safeTotal = total > 0 ? total : 1;

  return CRIME_CATEGORIES.map((category) => ({
    category,
    score: mergedScore[category],
    confidence: mergedScore[category] / safeTotal,
  })).sort((a, b) => b.score - a.score);
}

/**
 * Improved confidence calculation that avoids dilution across 15 categories.
 * Uses absolute score strength + margin boost to better reflect certainty.
 */
export function computePrimaryConfidence(ranked: RankedCategory[]): number {
  const top = ranked[0];
  const second = ranked[1];
  if (!top || top.score <= 0) {
    return 0;
  }

  // Base confidence from the top category's score strength (not diluted by all others)
  // Score of 0.7+ is strong, 0.5+ is moderate, <0.3 is weak
  const scoreStrength = Math.min(1, top.score / 0.7);
  
  // Margin bonus: how much better is top vs second?
  const margin = top.score - (second?.score ?? 0);
  const marginStrength = Math.min(1, margin / 0.4);
  
  // Confidence is 70% score strength + 30% margin
  const baseConfidence = scoreStrength * 0.7 + marginStrength * 0.3;
  
  return Math.min(1, baseConfidence);
}

export function pickPrimaryCategory(ranked: RankedCategory[]): CrimeCategory {
  if (ranked.length === 0 || ranked[0].score === 0) {
    return 'OTHER';
  }
  return ranked[0].category;
}
