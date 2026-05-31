import type {
  ClassificationResult,
  ExtractedEntities,
  GeneratedComplaint,
  LawMappingEngineResult,
  PdfExportResult,
} from '../../../sentinel-legal';
import type { CrimeCategory } from '../../../data/legalProfiles/types';
import type {
  AccusedInfo,
  FinancialLoss,
  VictimInfo,
} from '../../../sentinel-legal/generators/complaintGenerator';
import type { EvidenceVaultFilters, EvidenceVaultItem } from './evidenceVault.types';
import type { CyberJusticeTimelineEvent, TimelineBuilderFilters } from './timeline.types';
import type { OfficialComplaintPacket } from './complaintPacket.types';

export type CyberJusticeCaseStatus =
  | 'DRAFT'
  | 'ANALYZED'
  | 'EVIDENCE_REVIEW'
  | 'COMPLAINT_READY'
  | 'EXPORTED';

export type CyberJusticeConversationRole = 'assistant' | 'user' | 'system';

export type CyberJusticeConversationStage =
  | 'GREETING'
  | 'NARRATIVE'
  | 'ANALYSIS'
  | 'EVIDENCE'
  | 'TIMELINE'
  | 'REVIEW'
  | 'COMPLAINT';

export type CyberJusticeWizardStep = 'NARRATIVE' | 'ANALYSIS' | 'EVIDENCE' | 'TIMELINE' | 'REVIEW';

export type CyberJusticeEvidenceSource =
  | 'AUTO_EXTRACTED'
  | 'USER_ENTERED'
  | 'UPLOADED_FILE'
  | 'SCREENSHOT'
  | 'CHAT'
  | 'EMAIL'
  | 'TRANSACTION'
  | 'OTHER';

export interface CyberJusticeConversationMessage {
  id: string;
  role: CyberJusticeConversationRole;
  content: string;
  createdAt: string;
  stage?: CyberJusticeConversationStage;
}

export interface CyberJusticeVictim extends Partial<VictimInfo> {
  preferredLanguage?: string;
  city?: string;
  state?: string;
  consentToGenerateComplaint: boolean;
}

export interface CyberJusticeSuspect extends Partial<AccusedInfo> {
  name?: string;
  phoneNumbers: string[];
  emails: string[];
  upiIds: string[];
  urls: string[];
  walletAddresses: string[];
  socialProfiles: string[];
}

export interface CyberJusticeIncident {
  narrative: string;
  category: CrimeCategory | null;
  userSelectedCategory: CrimeCategory | null;
  occurredAt?: string;
  discoveredAt?: string;
  platform?: string;
  urgencyLevel?: 'low' | 'medium' | 'high' | 'critical';
}

export interface CyberJusticeEvidenceItem {
  id: string;
  label: string;
  source: CyberJusticeEvidenceSource;
  value?: string;
  notes?: string;
  required: boolean;
  verified: boolean;
  createdAt: string;
}

export interface CyberJusticeEvidence {
  extractedEntities: ExtractedEntities;
  items: CyberJusticeEvidenceItem[];
  vaultItems: EvidenceVaultItem[];
  selectedEvidenceId: string | null;
  filters: EvidenceVaultFilters;
}

export interface CyberJusticeTimeline {
  events: CyberJusticeTimelineEvent[];
  selectedEventId: string | null;
  filters: TimelineBuilderFilters;
}

export interface CyberJusticeFinancialLoss extends Partial<FinancialLoss> {
  demandedAmount?: number;
  demandedCurrency?: string;
  paymentMade?: boolean;
  occurredAt?: string;
  paymentMethod?: 'UPI' | 'BANK_TRANSFER' | 'CARD' | 'WALLET' | 'CRYPTO' | 'OTHER';
  recoveryStatus?: 'NOT_REPORTED' | 'REPORTED_TO_BANK' | 'FROZEN' | 'REFUNDED' | 'UNKNOWN';
}

export interface CyberJusticeLaws {
  classification: ClassificationResult | null;
  mapping: LawMappingEngineResult | null;
  plainLanguageSummary?: string;
}

export interface CyberJusticeComplaint {
  generated: GeneratedComplaint | null;
  previewText: string;
  pdf: PdfExportResult | null;
  generatedAt?: string;
  packet: OfficialComplaintPacket | null;
}

export interface CyberJusticeCase {
  id: string;
  status: CyberJusticeCaseStatus;
  createdAt: string;
  updatedAt: string;
  victim: CyberJusticeVictim;
  incident: CyberJusticeIncident;
  suspect: CyberJusticeSuspect;
  evidence: CyberJusticeEvidence;
  timeline: CyberJusticeTimeline;
  financialLoss: CyberJusticeFinancialLoss | null;
  classification: ClassificationResult | null;
  laws: CyberJusticeLaws;
  complaint: CyberJusticeComplaint;
}

export type { EvidenceVaultDraft, EvidenceVaultItem, EvidenceType } from './evidenceVault.types';
export type { CyberJusticeTimelineEvent, TimelineEventDraft, TimelineEventSource } from './timeline.types';
export type { ComplaintAnnexure, OfficialComplaintPacket } from './complaintPacket.types';
