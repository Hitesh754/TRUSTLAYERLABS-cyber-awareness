export type TimelineEventSource =
  | 'CONVERSATION'
  | 'EXTRACTED_ENTITY'
  | 'UPLOADED_EVIDENCE'
  | 'MANUAL_ENTRY';

export type TimelineEventConfidence = 'USER_CONFIRMED' | 'AUTO_INFERRED' | 'NEEDS_REVIEW';

export interface CyberJusticeTimelineEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  source: TimelineEventSource;
  createdAt: string;
  updatedAt: string;
  verified: boolean;
  confidence: TimelineEventConfidence;
  linkedEvidenceIds: string[];
  linkedMessageIds: string[];
  linkedEntityValues: string[];
  originalSourceId?: string;
}

export interface TimelineEventDraft {
  title: string;
  description: string;
  timestamp: string;
  source: TimelineEventSource;
  verified?: boolean;
  confidence?: TimelineEventConfidence;
  linkedEvidenceIds?: string[];
  linkedMessageIds?: string[];
  linkedEntityValues?: string[];
  originalSourceId?: string;
}

export interface TimelineBuilderFilters {
  source: TimelineEventSource | 'ALL';
  sortOrder: 'ASC' | 'DESC';
}
