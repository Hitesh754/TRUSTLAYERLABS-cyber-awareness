import type { ExtractedEntities } from '../../../sentinel-legal';
import type { CyberJusticeConversationState } from '../types/conversation.types';
import type { EvidenceVaultItem } from '../types/evidenceVault.types';
import type { TimelineEventSource } from '../types/timeline.types';
import i18n from '../../../i18n';

const t = i18n.getFixedT(null, 'translation');

export type TimelineSuggestionStatus = 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED' | 'EDITED';

export interface TimelineSuggestion {
  id: string;
  title: string;
  description: string;
  timestamp: string | null;
  source: TimelineEventSource;
  confidenceScore: number;
  reason: string;
  linkedEvidenceIds: string[];
  linkedMessageIds: string[];
  linkedEntityValues: string[];
  status: TimelineSuggestionStatus;
}

export interface TimelineSuggestionInput {
  conversation: CyberJusticeConversationState;
  evidence: EvidenceVaultItem[];
  extractedEntities: ExtractedEntities;
}

function uid(prefix: string, value: string) {
  return `${prefix}-${value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 18)}`;
}

export function generateTimelineSuggestions(input: TimelineSuggestionInput): TimelineSuggestion[] {
  const suggestions: TimelineSuggestion[] = [];
  const narrativeMessage = input.conversation.messages.find((message) => message.role === 'user' && message.content.trim().length > 20);
  const narrativeText = narrativeMessage?.content ?? '';

  const eventPatterns = [
    {
      title: t('cyberJustice.ui.engines.timeline.suggestions.instagram.title'),
      regex: /\binstagram\b/i,
      description: t('cyberJustice.ui.engines.timeline.suggestions.instagram.description'),
      confidenceScore: 0.82,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.instagram.reason'),
    },
    {
      title: t('cyberJustice.ui.engines.timeline.suggestions.videoCall.title'),
      regex: /\bvideo\s*call\b/i,
      description: t('cyberJustice.ui.engines.timeline.suggestions.videoCall.description'),
      confidenceScore: 0.8,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.videoCall.reason'),
    },
    {
      title: t('cyberJustice.ui.engines.timeline.suggestions.recording.title'),
      regex: /\brecording\b|\bfootage\b|\bscreencast\b/i,
      description: t('cyberJustice.ui.engines.timeline.suggestions.recording.description'),
      confidenceScore: 0.78,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.recording.reason'),
    },
    {
      title: t('cyberJustice.ui.engines.timeline.suggestions.threat.title'),
      regex: /\bthreat\b|\bblackmail\b|\bextortion\b|\bdemand\b/i,
      description: t('cyberJustice.ui.engines.timeline.suggestions.threat.description'),
      confidenceScore: 0.86,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.threat.reason'),
    },
    {
      title: t('cyberJustice.ui.engines.timeline.suggestions.paymentDemand.title'),
      regex: /\b(inr|rs\.?|₹)\s*[0-9][0-9,]*(?:\.\d{1,2})?|asked me to pay|demanding|requested.*payment/i,
      description: t('cyberJustice.ui.engines.timeline.suggestions.paymentDemand.description'),
      confidenceScore: 0.8,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.paymentDemand.reason'),
    },
  ];

  if (narrativeMessage) {
    suggestions.push({
      id: uid('suggestion-conversation', narrativeMessage.id),
      title: t('cyberJustice.ui.engines.timeline.suggestions.narrative.title'),
      description: narrativeMessage.content,
      timestamp: narrativeMessage.createdAt,
      source: 'CONVERSATION',
      confidenceScore: 0.72,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.narrative.reason'),
      linkedEvidenceIds: [],
      linkedMessageIds: [narrativeMessage.id],
      linkedEntityValues: [],
      status: 'PENDING_APPROVAL',
    });

    eventPatterns.forEach((pattern) => {
      if (!pattern.regex.test(narrativeText)) return;
      suggestions.push({
        id: uid('suggestion-narrative', pattern.title),
        title: pattern.title,
        description: pattern.description,
        timestamp: narrativeMessage.createdAt,
        source: 'CONVERSATION',
        confidenceScore: pattern.confidenceScore,
        reason: pattern.reason,
        linkedEvidenceIds: [],
        linkedMessageIds: [narrativeMessage.id],
        linkedEntityValues: [],
        status: 'PENDING_APPROVAL',
      });
    });
  }

  input.evidence.forEach((item) => {
    suggestions.push({
      id: uid('suggestion-evidence', item.id),
      title: t('cyberJustice.ui.engines.timeline.suggestions.evidence.title', { type: item.type.replace(/_/g, ' ') }),
      description: t('cyberJustice.ui.engines.timeline.suggestions.evidence.description', { name: item.name, desc: item.description || t('cyberJustice.ui.engines.timeline.suggestions.evidence.defaultDescription') }),
      timestamp: item.timestamp,
      source: 'UPLOADED_EVIDENCE',
      confidenceScore: item.verified ? 0.9 : 0.76,
      reason: t('cyberJustice.ui.engines.timeline.suggestions.evidence.reason'),
      linkedEvidenceIds: [item.id],
      linkedMessageIds: [],
      linkedEntityValues: [],
      status: 'PENDING_APPROVAL',
    });
  });

  const entityGroups = [
    { title: t('cyberJustice.ui.engines.timeline.entityGroups.utr.title'), values: input.extractedEntities.utrIds },
    { title: t('cyberJustice.ui.engines.timeline.entityGroups.upi.title'), values: input.extractedEntities.upiIds },
    { title: t('cyberJustice.ui.engines.timeline.entityGroups.url.title'), values: input.extractedEntities.urls },
    { title: t('cyberJustice.ui.engines.timeline.entityGroups.contact.title'), values: [...input.extractedEntities.phoneNumbers, ...input.extractedEntities.emails] },
    { title: t('cyberJustice.ui.engines.timeline.entityGroups.wallet.title'), values: input.extractedEntities.walletAddresses },
  ];

  entityGroups.forEach((group) => {
    if (!group.values.length) return;
    suggestions.push({
      id: uid('suggestion-entity', group.title),
      title: group.title,
      description: group.values.join(', '),
      timestamp: null,
      source: 'EXTRACTED_ENTITY',
      confidenceScore: 0.68,
      reason: 'The deterministic entity extractor found identifiers that may belong on the incident timeline.',
      linkedEvidenceIds: [],
      linkedMessageIds: [],
      linkedEntityValues: group.values,
      status: 'PENDING_APPROVAL',
    });
  });

  const seen = new Set<string>();
  return suggestions.filter((suggestion) => {
    const key = `${suggestion.source}-${suggestion.title}-${suggestion.description}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
