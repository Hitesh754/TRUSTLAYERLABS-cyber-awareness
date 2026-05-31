import type { IncidentTimelineEvent } from '../../../sentinel-legal/generators/timelineBuilder';
import type { CyberJusticeTimelineEvent } from '../types/timeline.types';

export function toIncidentTimelineEvents(events: CyberJusticeTimelineEvent[]): IncidentTimelineEvent[] {
  return events
    .filter((event) => event.verified || event.confidence !== 'NEEDS_REVIEW')
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
    .map((event) => {
      const linkedEvidence = event.linkedEvidenceIds.length
        ? `\nLinked Evidence: ${event.linkedEvidenceIds.join(', ')}`
        : '';
      const linkedEntities = event.linkedEntityValues.length
        ? `\nLinked Entities: ${event.linkedEntityValues.join(', ')}`
        : '';

      return {
        date: event.timestamp,
        description: `${event.title}: ${event.description}\nSource: ${event.source.replace(/_/g, ' ')}${linkedEvidence}${linkedEntities}`,
      };
    });
}
