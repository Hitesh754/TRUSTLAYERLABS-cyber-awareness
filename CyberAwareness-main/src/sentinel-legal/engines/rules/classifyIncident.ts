import { resolveLegalProfileForScam, getLegalProfileByCrimeCategory } from '../../../data/legalProfiles';
import { getScamById } from '../../../data/scamDatabase';
import type { CrimeCategory, ResolvedLegalProfile } from '../../../data/legalProfiles/types';
import type {
  ClassificationResult,
  FormClassificationSignals,
} from '../../types/classification.types';
import { scoreKeywords } from './keywordClassifier';
import { matchScamDatabase } from './scamDbMatcher';
import { extractEntities } from './entityExtractor';
import {
  computePrimaryConfidence,
  mergeCategoryScores,
  pickPrimaryCategory,
  rankCategories,
} from './categoryScorer';
import { applyConfidenceGate } from './confidenceGate';

export interface ClassifyIncidentInput {
  narrative: string;
  formSignals?: FormClassificationSignals;
  /** Manual path: user-selected category when confidence < 75% */
  manualCategory?: CrimeCategory;
}

/**
 * Full rules-only classification pipeline (zero AI, zero network).
 */
export function classifyIncident(input: ClassifyIncidentInput): ClassificationResult {
  const narrative = input.narrative.trim();

  const { scores: keywordScore, matchedKeywords } = scoreKeywords(narrative);
  const { scores: scamDbScore, matches: scamDbMatches, matchedScamIds } = matchScamDatabase(narrative);
  const { entities } = extractEntities(narrative);
  const scoreBreakdown = mergeCategoryScores(keywordScore, scamDbScore, input.formSignals, entities);
  const rankedCategories = rankCategories(scoreBreakdown.mergedScore);

  const keywordRanked = rankCategories(scoreBreakdown.keywordScore);
  const keywordConfidence = computePrimaryConfidence(keywordRanked);

  let primaryCategory = pickPrimaryCategory(rankedCategories);
  let confidence = Math.max(computePrimaryConfidence(rankedCategories), keywordConfidence);

  if (input.manualCategory) {
    primaryCategory = input.manualCategory;
    confidence = Math.max(confidence, computePrimaryConfidence(rankedCategories));
  }

  const gate = applyConfidenceGate(confidence);
  if (!gate.locked && input.manualCategory) {
    gate.classificationPath = 'manual';
    gate.locked = false;
  }

  const topScam = scamDbMatches[0];
  const scamForProfile = topScam ? getScamById(topScam.scamId) : undefined;
  let legalProfile: ResolvedLegalProfile;

  if (scamForProfile) {
    legalProfile = {
      ...resolveLegalProfileForScam(scamForProfile),
      crimeCategory: primaryCategory,
    };
  } else {
    legalProfile = {
      ...getLegalProfileByCrimeCategory(primaryCategory),
      id: `${primaryCategory}:inferred`,
      crimeCategory: primaryCategory,
      resolutionPath: ['crime_category'],
    };
  }

  return {
    primaryCategory,
    confidence,
    locked: gate.locked,
    classificationPath: gate.classificationPath,
    scoreBreakdown,
    rankedCategories,
    matchedKeywords,
    matchedScamIds,
    scamDbMatches,
    legalProfile,
  };
}
