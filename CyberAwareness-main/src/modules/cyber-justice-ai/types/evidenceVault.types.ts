import type { ExtractedEntities } from '../../../sentinel-legal';

export type EvidenceType =
  | 'SCREENSHOT'
  | 'PDF'
  | 'AUDIO'
  | 'VIDEO'
  | 'CHAT'
  | 'EMAIL'
  | 'BANK_STATEMENT';

export type EvidenceProcessingStatus = 'PENDING' | 'EXTRACTING' | 'READY' | 'FAILED' | 'NEEDS_REVIEW';

export type EvidenceMetadataSource =
  | 'OCR_TEXT'
  | 'PDF_TEXT'
  | 'AUDIO_TRANSCRIPT'
  | 'VIDEO_TRANSCRIPT'
  | 'CHAT_EXPORT'
  | 'EMAIL_BODY'
  | 'BANK_STATEMENT_TEXT'
  | 'MANUAL_TEXT';

export interface EvidenceExtractedMetadata {
  source: EvidenceMetadataSource;
  sourceTextLength: number;
  extractedAt: string;
  upiIds: string[];
  phoneNumbers: string[];
  emails: string[];
  urls: string[];
  ifscCodes: string[];
  utrIds: string[];
  walletAddresses: string[];
  confidence: 'DETERMINISTIC';
}

export interface EvidenceVaultItem {
  id: string;
  type: EvidenceType;
  name: string;
  description: string;
  timestamp: string;
  extractedMetadata: EvidenceExtractedMetadata;
  createdAt: string;
  updatedAt: string;
  verified: boolean;
  requiredForComplaint: boolean;
  processingStatus: EvidenceProcessingStatus;
  tags: string[];
  storage?: {
    fileName?: string;
    fileSizeBytes?: number;
    mimeType?: string;
    objectUrl?: string;
    checksum?: string;
  };
}

export interface EvidenceVaultDraft {
  type: EvidenceType;
  name: string;
  description: string;
  timestamp: string;
  sourceText: string;
  metadataSource: EvidenceMetadataSource;
  verified?: boolean;
  requiredForComplaint?: boolean;
  tags?: string[];
  storage?: EvidenceVaultItem['storage'];
}

export interface EvidenceVaultFilters {
  type: EvidenceType | 'ALL';
  query: string;
  verified: 'ALL' | 'VERIFIED' | 'UNVERIFIED';
  processingStatus: EvidenceProcessingStatus | 'ALL';
}

export interface EvidenceEntityMergeResult {
  mergedEntities: ExtractedEntities;
  evidenceEntityMap: Record<string, ExtractedEntities>;
}
