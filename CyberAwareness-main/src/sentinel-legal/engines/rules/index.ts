export { extractEntities, createEmptyEntities } from './entityExtractor';
export { scoreKeywords } from './keywordClassifier';
export { matchScamDatabase } from './scamDbMatcher';
export {
  mergeCategoryScores,
  rankCategories,
  pickPrimaryCategory,
  computePrimaryConfidence,
  SCORE_WEIGHTS,
} from './categoryScorer';
export {
  applyConfidenceGate,
  evaluateConfidence,
  AUTO_CLASSIFY_THRESHOLD,
} from './confidenceGate';
export { classifyIncident } from './classifyIncident';
export type { ClassifyIncidentInput } from './classifyIncident';
