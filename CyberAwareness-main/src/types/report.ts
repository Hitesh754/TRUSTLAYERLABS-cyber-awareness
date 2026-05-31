// Assuming a Law type is defined based on your legalFrameworks data
export interface Law {
  name: string;
  jurisdiction: string;
  reportingTimeframe?: string;
}

export interface ComplianceReport {
  reportId: string;
  generatedAt: Date;
  incidentSummary: { id: string; type: string; description: string; };
  extractedEntities: Record<string, any[]>;
  applicableLaws: Law[];
  initialRecommendations: string[];
}
