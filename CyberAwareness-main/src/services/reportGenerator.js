import { v4 as uuidv4 } from 'uuid';

/**
 * @typedef {import('../types/incident').Incident} Incident
 * @typedef {import('../types/report').Law} Law
 * @typedef {import('../types/report').ComplianceReport} ComplianceReport
 */

/**
 * Generates a compliance report from the analyzed incident data.
 *
 * @param {object} analysisResult
 * @param {Incident} analysisResult.incident - The original incident object.
 * @param {string} analysisResult.incidentType - The classified type of the incident.
 * @param {Record<string, any[]>} analysisResult.entities - Extracted entities.
 * @param {Law[]} analysisResult.mappedLaws - Mapped legal frameworks.
 * @returns {ComplianceReport} The generated compliance report.
 */
export function generateComplianceReport(analysisResult) {
  const { incident, incidentType, entities, mappedLaws } = analysisResult;

  const recommendations = generateInitialRecommendations(mappedLaws);

  const report = {
    reportId: uuidv4(),
    generatedAt: new Date(),
    incidentSummary: {
      id: incident.id,
      type: incidentType,
      description: incident.description,
    },
    extractedEntities: entities,
    applicableLaws: mappedLaws,
    initialRecommendations: recommendations,
  };

  console.log(`[ReportGenerator] Generated report ${report.reportId} for incident ${incident.id}`);
  return report;
}

/**
 * Generates a set of initial recommendations based on the applicable laws.
 * @param {Law[]} laws
 * @returns {string[]} A list of recommendation strings.
 */
function generateInitialRecommendations(laws) {
    if (laws.length === 0) {
        return ["No specific legal frameworks were matched. Follow standard internal incident response procedures."];
    }

    const recommendations = new Set(laws.map(law => `Review obligations and reporting timelines under ${law.name}.`));
    return Array.from(recommendations);
}