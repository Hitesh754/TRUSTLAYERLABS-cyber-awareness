import type { CrimeCategory } from '../../data/legalProfiles/types';
import type { ResolvedLegalProfile } from '../../data/legalProfiles/types';

export type ClassificationPath = 'auto' | 'manual';

export interface ScamDbMatch {
  scamId: string;
  name: string;
  score: number;
  crimeCategory: CrimeCategory;
}

export interface CategoryScoreMap {
  keywordScore: Record<CrimeCategory, number>;
  scamDbScore: Record<CrimeCategory, number>;
  formSignalScore: Record<CrimeCategory, number>;
  mergedScore: Record<CrimeCategory, number>;
}

export interface RankedCategory {
  category: CrimeCategory;
  score: number;
  confidence: number;
}

export interface ClassificationResult {
  primaryCategory: CrimeCategory;
  confidence: number;
  locked: boolean;
  classificationPath: ClassificationPath;
  scoreBreakdown: CategoryScoreMap;
  rankedCategories: RankedCategory[];
  matchedKeywords: string[];
  matchedScamIds: string[];
  scamDbMatches: ScamDbMatch[];
  legalProfile: ResolvedLegalProfile;
}

export interface FormClassificationSignals {
  hasFinancialLoss?: boolean;
  hasUpiTransaction?: boolean;
  hasOtpMention?: boolean;
  hasCryptoMention?: boolean;
  hasEvidenceUpload?: boolean;
  selectedCategory?: CrimeCategory;
}
