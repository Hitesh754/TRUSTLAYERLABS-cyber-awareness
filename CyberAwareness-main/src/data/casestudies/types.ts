/**
 * Case study typings for TRUSTLAYERLABS Cyber Awareness
 *
 * Designed for scalability and strong typing to support hundreds of case studies.
 * Keep fields explicit and small, prefer arrays of structured items over large freeform blobs.
 */

export enum CaseStudyCategory {
  PHISHING = 'phishing',
  SOCIAL_ENGINEERING = 'social_engineering',
  DEEPFAKE = 'deepfake',
  UPI_FRAUD = 'upi_fraud',
  MALWARE = 'malware',
  SCAM = 'scam',
  IDENTITY_THEFT = 'identity_theft',
  OTHER = 'other',
}

export enum CaseStudySeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export type CaseStudySourceType =
  | 'government'
  | 'news'
  | 'report'
  | 'user_submission'
  | 'academic'
  | 'industry'
  | 'other'
  | string;

/** Lightweight reference to an external source */
export interface CaseStudySource {
  title: string;
  url?: string;
  type?: CaseStudySourceType;
  publishedAt?: string; // ISO date string
}

export interface TimelineEvent {
  /** ISO date/time string or a short descriptor (e.g. "T+2 days") */
  time?: string;
  /** Short description of the event */
  description: string;
  /** Optional longer details */
  details?: string;
}

export interface WarningSign {
  /** Short headline for the warning sign */
  sign: string;
  /** Human-friendly explanation */
  details?: string;
  /** Optional confidence or severity of this sign */
  confidence?: 'low' | 'medium' | 'high' | number;
}

export interface PreventionTip {
  /** Actionable tip text */
  tip: string;
  /** Intended audience (e.g. "end-user", "admin", "business") */
  audience?: string;
  /** Optional priority order when displaying multiple tips */
  priority?: number;
  /** Optional reference to an external source (title or url) */
  reference?: string;
}

export interface ReportingContact {
  agency?: string;
  phone?: string;
  email?: string;
  url?: string;
}

export interface ReportingStep {
  /** Human readable instruction for this reporting step */
  step: string;
  /** Optional contact information for this step */
  contact?: ReportingContact;
  /** What the reporter should expect after completing this step */
  expectedOutcome?: string;
  notes?: string;
}

export interface LawReference {
  /** Short code or section number (e.g. "Section 66A") */
  code?: string;
  /** Full law name */
  name: string;
  /** Jurisdiction (country/state) */
  jurisdiction?: string;
  /** Optional link to authoritative text */
  link?: string;
  description?: string;
}

/**
 * Primary CaseStudy interface. All core fields are required to encourage
 * consistent records; optional metadata is available for richer apps.
 */
export interface CaseStudy {
  /** Unique identifier (slug or code) */
  id: string;

  /** Title for list views */
  title: string;

  /** Semantic category; prefer values from CaseStudyCategory enum */
  category: CaseStudyCategory | string;

  /** Severity indicator (enum or custom string) */
  severity: CaseStudySeverity | string;

  /** Optional numeric severity score (1-10) for sorting or filtering */
  severityScore?: number;

  /** Short summary suitable for cards and lists (max ~280 chars) */
  summary: string;

  /** Full scenario narrative describing the case */
  scenario: string;

  /** Ordered timeline of events */
  timeline: TimelineEvent[];

  /** Observable warning signs to look for */
  warningSigns: WarningSign[];

  /** Actionable prevention tips */
  preventionTips: PreventionTip[];

  /** Step-by-step reporting/investigation guidance */
  reportingSteps: ReportingStep[];

  /** Laws and regulations that apply to the case */
  applicableLaws: LawReference[];

  /** Origin/type of the source material */
  sourceType: CaseStudySourceType;

  /** Optional list of sources/references */
  sources?: CaseStudySource[];

  /** Keyword tags useful for faceted search */
  tags: string[];

  /** Metadata */
  createdAt?: string; // ISO date
  updatedAt?: string; // ISO date
  published?: boolean;
  locale?: string; // e.g. 'en-IN'
}

export type CaseStudyID = CaseStudy['id'];

export interface CaseStudyIndexEntry {
  id: CaseStudyID;
  title: string;
  category: CaseStudy['category'];
  severity: CaseStudy['severity'];
  summary: string;
  tags: string[];
}

export default CaseStudy;
