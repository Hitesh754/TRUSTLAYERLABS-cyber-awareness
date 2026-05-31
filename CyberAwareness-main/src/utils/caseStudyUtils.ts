import { CASE_STUDIES } from '../data/casestudies/caseStudies';
import type {
  CaseStudy,
  CaseStudyID,
} from '../data/casestudies/types';
import { CaseStudyCategory, CaseStudySeverity } from '../data/casestudies/types';

function normalize(text?: string): string {
  return (text || '').toString().trim().toLowerCase();
}

/** Get a case study by its id */
export function getCaseStudyById(id: CaseStudyID): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.id === id);
}

/** Get case studies that match a category (enum or string) */
export function getCaseStudiesByCategory(category: CaseStudyCategory | string): CaseStudy[] {
  const cat = normalize(String(category));
  return CASE_STUDIES.filter((c) => normalize(String(c.category)) === cat);
}

/** Get case studies that match a severity (enum or string) */
export function getCaseStudiesBySeverity(severity: CaseStudySeverity | string): CaseStudy[] {
  const sev = normalize(String(severity));
  return CASE_STUDIES.filter((c) => normalize(String(c.severity)) === sev);
}

/**
 * Search case studies by a free-text query. Returns results ordered by a simple relevance score.
 * Matches title, summary, scenario, tags, sources.title, warningSigns.sign and preventionTips.tip.
 */
export function searchCaseStudies(query: string, limit = 25): CaseStudy[] {
  const q = normalize(query);
  if (!q) return [];

  type Scored = { item: CaseStudy; score: number };

  const results: Scored[] = CASE_STUDIES.map((cs) => {
    let score = 0;
    const title = normalize(cs.title);
    const summary = normalize(cs.summary);
    const scenario = normalize(cs.scenario);
    const tags = (cs.tags || []).map(normalize);

    if (title.includes(q)) score += 40;
    if (summary.includes(q)) score += 20;
    if (scenario.includes(q)) score += 10;

    for (const t of tags) {
      if (t.includes(q)) score += 25;
    }

    if (cs.sources) {
      for (const s of cs.sources) {
        if (normalize(s.title).includes(q) || normalize(s.url).includes(q)) score += 5;
      }
    }

    if (cs.warningSigns) {
      for (const w of cs.warningSigns) {
        if (normalize(w.sign).includes(q) || normalize(w.details).includes(q)) score += 8;
      }
    }

    if (cs.preventionTips) {
      for (const p of cs.preventionTips) {
        if (normalize(p.tip).includes(q) || normalize(p.reference).includes(q)) score += 6;
      }
    }

    // small boost for tag/category/locale matches
    if (normalize(String(cs.category)).includes(q)) score += 6;
    if ((cs.locale && normalize(cs.locale).includes(q)) || (cs.tags || []).some((t) => t.toLowerCase().includes(q))) score += 3;

    return { item: cs, score };
  });

  return results
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
}

/**
 * Return related case studies for a given case study. Relatedness is computed by
 * tag overlap and category match. The source case study is excluded.
 */
export function getRelatedCaseStudies(sourceId: CaseStudyID, limit = 5): CaseStudy[] {
  const source = getCaseStudyById(sourceId);
  if (!source) return [];

  const sourceTags = new Set((source.tags || []).map((t) => normalize(t)));
  const sourceCategory = normalize(String(source.category));

  type Scored = { item: CaseStudy; score: number };

  const scored: Scored[] = CASE_STUDIES
    .filter((c) => c.id !== sourceId)
    .map((c) => {
      let score = 0;
      // tag overlap
      for (const t of c.tags || []) {
        if (sourceTags.has(normalize(t))) score += 10;
      }
      // category match
      if (normalize(String(c.category)) === sourceCategory) score += 4;
      // severity proximity (closer severity gets a small boost)
      if (source.severity && c.severity && normalize(String(source.severity)) === normalize(String(c.severity))) score += 2;
      return { item: c, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.item);
}

export default {
  getCaseStudyById,
  getCaseStudiesByCategory,
  getCaseStudiesBySeverity,
  searchCaseStudies,
  getRelatedCaseStudies,
};
