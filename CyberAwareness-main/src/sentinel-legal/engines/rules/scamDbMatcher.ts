import { scamDatabase, searchScams } from '../../../data/scamDatabase';
import { inferCrimeCategoryFromScam } from '../../../data/legalProfiles/scamIdToCrimeCategory';
import { CRIME_CATEGORIES } from '../../../data/legalProfiles/crimeCategories';
import type { CrimeCategory } from '../../../data/legalProfiles/types';
import type { ScamDbMatch } from '../../types/classification.types';

const MAX_SEARCH_HITS = 15;
const MAX_MATCHES_RETURNED = 20;

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

function scoreScamAgainstText(
  scam: (typeof scamDatabase)[number],
  lower: string,
): number {
  let score = 0;
  const name = scam.name.toLowerCase();
  const idPhrase = scam.id.replace(/-/g, ' ');

  if (lower.includes(name)) {
    score += 4;
  }
  if (lower.includes(idPhrase)) {
    score += 3;
  }
  if (lower.includes(scam.id)) {
    score += 2;
  }

  const descWords = scam.description.toLowerCase().split(/\s+/).slice(0, 8);
  for (const word of descWords) {
    if (word.length > 4 && lower.includes(word)) {
      score += 0.5;
    }
  }

  for (const indicator of scam.commonIndicators) {
    const snippet = indicator.toLowerCase().slice(0, 24);
    if (snippet.length > 6 && lower.includes(snippet)) {
      score += 1;
    }
  }

  return score;
}

/**
 * Matches narrative against scamDatabase and aggregates scores by inferred crime category.
 */
export function matchScamDatabase(text: string): {
  scores: Record<CrimeCategory, number>;
  matches: ScamDbMatch[];
  matchedScamIds: string[];
} {
  const lower = text.toLowerCase().trim();
  const rawCategoryScores = createEmptyScoreMap();
  const matchMap = new Map<string, ScamDbMatch>();

  if (!lower) {
    return { scores: rawCategoryScores, matches: [], matchedScamIds: [] };
  }

  const searchHits = searchScams(text).slice(0, MAX_SEARCH_HITS);
  for (let i = 0; i < searchHits.length; i += 1) {
    const scam = searchHits[i];
    const rankBoost = MAX_SEARCH_HITS - i;
    const category = inferCrimeCategoryFromScam(scam);
    rawCategoryScores[category] += 3 + rankBoost * 0.2;
    matchMap.set(scam.id, {
      scamId: scam.id,
      name: scam.name,
      score: 3 + rankBoost * 0.2,
      crimeCategory: category,
    });
  }

  if (searchHits.length === 0) {
    for (const scam of scamDatabase) {
      const score = scoreScamAgainstText(scam, lower);
      if (score <= 0) {
        continue;
      }
      const category = inferCrimeCategoryFromScam(scam);
      rawCategoryScores[category] += score;
      const existing = matchMap.get(scam.id);
      if (!existing || score > existing.score) {
        matchMap.set(scam.id, {
          scamId: scam.id,
          name: scam.name,
          score,
          crimeCategory: category,
        });
      }
    }
  }

  const matches = Array.from(matchMap.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_MATCHES_RETURNED);

  return {
    scores: normalizeScoreMap(rawCategoryScores),
    matches,
    matchedScamIds: matches.map((m) => m.scamId),
  };
}
