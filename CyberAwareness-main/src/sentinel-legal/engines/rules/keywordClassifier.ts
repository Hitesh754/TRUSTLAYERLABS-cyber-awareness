import { CRIME_CATEGORIES } from '../../../data/legalProfiles/crimeCategories';
import type { CrimeCategory } from '../../../data/legalProfiles/types';
import { getProfileByCrimeCategory } from '../../../data/legalProfiles/profiles';

/** Increased from 0.1 to improve weak keyword matching. Each keyword now contributes more meaningfully. */
const DEFAULT_KEYWORD_WEIGHT = 0.25;

function createEmptyScoreMap(): Record<CrimeCategory, number> {
  const map = {} as Record<CrimeCategory, number>;
  for (const category of CRIME_CATEGORIES) {
    map[category] = 0;
  }
  return map;
}

function normalizeScoreMap(scores: Record<CrimeCategory, number>): Record<CrimeCategory, number> {
  const max = Math.max(...Object.values(scores), 0);
  if (max === 0) {
    return scores;
  }
  const normalized = createEmptyScoreMap();
  for (const category of CRIME_CATEGORIES) {
    normalized[category] = scores[category] / max;
  }
  return normalized;
}

/**
 * Scores all 15 crime categories from profile keyword lists (Sprint 1 data).
 */
export function scoreKeywords(text: string): {
  scores: Record<CrimeCategory, number>;
  matchedKeywords: string[];
} {
  const lower = text.toLowerCase();
  const rawScores = createEmptyScoreMap();
  const matchedKeywords: string[] = [];

  for (const category of CRIME_CATEGORIES) {
    const profile = getProfileByCrimeCategory(category);
    const weights = profile.keywordWeights ?? {};

    for (const keyword of profile.keywords) {
      const key = keyword.toLowerCase();
      if (!key || !lower.includes(key)) {
        continue;
      }
      const weight = weights[key] ?? weights[keyword] ?? DEFAULT_KEYWORD_WEIGHT;
      rawScores[category] += weight;
      matchedKeywords.push(keyword);
    }
  }

  return {
    scores: normalizeScoreMap(rawScores),
    matchedKeywords: Array.from(new Set(matchedKeywords)),
  };
}
