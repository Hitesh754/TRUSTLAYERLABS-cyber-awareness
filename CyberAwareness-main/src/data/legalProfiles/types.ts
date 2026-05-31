import type { ScamCategory } from '../scamDatabase';

/** Sentinel Legal AI crime taxonomy (15 categories). */
export type CrimeCategory =
  | 'UPI_FRAUD'
  | 'OTP_FRAUD'
  | 'PHISHING'
  | 'INVESTMENT_SCAM'
  | 'CRYPTO_FRAUD'
  | 'DEEPFAKE_IMPERSONATION'
  | 'IDENTITY_THEFT'
  | 'QR_SCAM'
  | 'SIM_SWAP'
  | 'JOB_SCAM'
  | 'SEXTORTION'
  | 'CYBER_STALKING'
  | 'DATA_BREACH'
  | 'HACKING_UNAUTHORIZED_ACCESS'
  | 'ORGANIZED_CRIME'
  | 'OTHER';

export type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';

export type EvidenceType =
  | 'SCREENSHOT'
  | 'CHAT_LOG'
  | 'EMAIL'
  | 'SMS'
  | 'CALL_RECORDING'
  | 'BANK_STATEMENT'
  | 'TRANSACTION_RECEIPT'
  | 'POLICE_ACKNOWLEDGEMENT'
  | 'VIDEO_RECORDING'
  | 'PLATFORM_REPORT'
  | 'OTHER';

export interface EvidenceRequirement {
  type: EvidenceType;
  label: string;
  required: boolean;
  description: string;
}

export interface ReportingChannel {
  name: string;
  url?: string;
  phone?: string;
  when: string;
}

export interface ReportingGuidance {
  primaryPortal: { name: string; url: string };
  helpline: string;
  secondaryChannels: ReportingChannel[];
  timeSensitiveNote?: string;
  evidencePackagingTips: string[];
  filingSteps: string[];
}

export interface InterviewQuestion {
  id: string;
  prompt: string;
  fieldKey: string;
  inputType: 'text' | 'textarea' | 'date' | 'number' | 'select' | 'multiselect';
  required: boolean;
  options?: string[];
  helpText?: string;
}

/** Full legal intelligence profile for a crime category or scam override. */
export interface LegalProfile {
  id: string;
  crimeCategory: CrimeCategory;
  scamCategory: ScamCategory;
  displayName: string;
  description: string;
  keywords: string[];
  keywordWeights?: Partial<Record<string, number>>;
  applicableLaws: {
    ipc: string[];
    bns: string[];
    itAct: string[];
  };
  evidenceRequirements: EvidenceRequirement[];
  urgencyLevel: UrgencyLevel;
  immediateActions: string[];
  reportingGuidance: ReportingGuidance;
  interviewExtensions: InterviewQuestion[];
  complaintTemplateId: string;
}

/** Profile fields excluding law refs (sourced from lawMappings/scamTypeToLaws). */
export type LegalProfileCore = Omit<LegalProfile, 'applicableLaws'>;

/** Partial override merged onto a category base profile. */
export interface LegalProfileOverride {
  scamId: string;
  crimeCategory?: CrimeCategory;
  keywords?: string[];
  keywordWeights?: Partial<Record<string, number>>;
  applicableLaws?: Partial<LegalProfile['applicableLaws']>;
  evidenceRequirements?: EvidenceRequirement[];
  urgencyLevel?: UrgencyLevel;
  immediateActions?: string[];
  reportingGuidance?: Partial<ReportingGuidance>;
  interviewExtensions?: InterviewQuestion[];
  complaintTemplateId?: string;
}

export interface ResolvedLegalProfile extends LegalProfile {
  sourceScamId?: string;
  resolutionPath: ('scam_override' | 'crime_category' | 'scam_category_default')[];
}

export interface CategoryDefaultProfile {
  scamCategory: ScamCategory;
  crimeCategory: CrimeCategory;
  keywords: string[];
  urgencyLevel: UrgencyLevel;
}
