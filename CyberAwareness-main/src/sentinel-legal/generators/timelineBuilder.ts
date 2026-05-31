export interface IncidentTimelineEvent {
  date: string;
  description: string;
}

export const buildTimeline = (timeline: IncidentTimelineEvent[]): string[] => {
  if (!timeline || timeline.length === 0) {
    return ['No specific timeline events provided.'];
  }

  return timeline.map(event => `- [${event.date}] ${event.description}`);
};
