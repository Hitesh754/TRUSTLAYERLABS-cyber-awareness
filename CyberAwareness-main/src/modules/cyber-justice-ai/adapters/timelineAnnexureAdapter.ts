import i18n from '../../../i18n';
import type { ComplaintAnnexure } from '../types/complaintPacket.types';
import type { CyberJusticeTimelineEvent } from '../types/timeline.types';

export function buildTimelineAnnexure(events: CyberJusticeTimelineEvent[], lang?: string): string {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  if (!events.length) return t('complaint.timelineNone') || 'No timeline events were added to the case file.';

  return [...events]
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
    .map((event, index) => {
      const linkedEvidence = event.linkedEvidenceIds.length ? event.linkedEvidenceIds.join(', ') : (t('complaint.none') || 'None');
      return `${index + 1}. ${t('complaint.timeline.eventLabel') || 'Event'}: ${event.title}\n${t('complaint.timeline.timeLabel') || 'Time'}: ${event.timestamp}\n${t('complaint.timeline.sourceLabel') || 'Source'}: ${event.source.replace(/_/g, ' ')}\n${t('complaint.timeline.linkedEvidence') || 'Linked Evidence'}: ${linkedEvidence}\n${t('complaint.timeline.descriptionLabel') || 'Description'}: ${event.description}`;
    })
    .join('\n\n');
}

export function buildTimelineComplaintAnnexure(events: CyberJusticeTimelineEvent[], lang?: string): ComplaintAnnexure {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  return {
    id: 'annexure-b-timeline',
    kind: 'TIMELINE',
    title: `${t('complaint.annexurePrefix') || 'Annexure B'} - ${t('complaint.timelineAnnexureTitle') || 'Incident Timeline'}`,
    content: buildTimelineAnnexure(events, lang),
    itemCount: events.length,
  };
}
