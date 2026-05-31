import type { ClassificationPath } from '../../types/classification.types';

/** Auto-lock threshold per rules-first architecture (no AI fallback in Sprint 2). */
export const AUTO_CLASSIFY_THRESHOLD = 0.75;

export interface ConfidenceGateResult {
  confidence: number;
  locked: boolean;
  classificationPath: ClassificationPath;
  requiresManualSelection: boolean;
}

export function evaluateConfidence(confidence: number): ConfidenceGateResult {
  const locked = confidence >= AUTO_CLASSIFY_THRESHOLD;
  return {
    confidence,
    locked,
    classificationPath: locked ? 'auto' : 'manual',
    requiresManualSelection: !locked,
  };
}

export function applyConfidenceGate(primaryConfidence: number): ConfidenceGateResult {
  return evaluateConfidence(primaryConfidence);
}
