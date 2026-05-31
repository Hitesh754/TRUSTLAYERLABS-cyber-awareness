import {
  generateComplaint,
  type ComplaintData,
  type GeneratedComplaint,
} from '../../../sentinel-legal/generators/complaintGenerator';
import i18n from '../../../i18n';
import type { CyberJusticeCase } from '../types/cyberJustice.types';
import { appendEvidenceAnnexure } from './evidenceAnnexureAdapter';
import { buildFinancialLoss, buildFinancialLossSummary } from './financialLossAdapter';
import { buildAccusedInfo, buildVictimInfo } from './partyDetailsAdapter';
import { toIncidentTimelineEvents } from './timelineAdapter';

export function buildComplaintDataFromCase(caseFile: CyberJusticeCase): ComplaintData | null {
  const classification = caseFile.laws.classification ?? caseFile.classification;
  const laws = caseFile.laws.mapping;
  if (!classification || !laws) return null;

  return {
    victim: buildVictimInfo(caseFile),
    accused: buildAccusedInfo(caseFile),
    narrative: caseFile.incident.narrative,
    timeline: toIncidentTimelineEvents(caseFile.timeline.events),
    financialLoss: buildFinancialLoss(caseFile.financialLoss),
    entities: caseFile.evidence.extractedEntities,
    classification,
    laws,
  };
}

export function buildPhase2Complaint(caseFile: CyberJusticeCase): GeneratedComplaint | null {
  const data = buildComplaintDataFromCase(caseFile);
  if (!data) return null;

  const generated = generateComplaint(data);
  const withAnnexure = appendEvidenceAnnexure(generated, caseFile.evidence.vaultItems);

  if (!caseFile.financialLoss) return withAnnexure;

  const t = i18n.getFixedT(null, 'translation');
  return {
    ...withAnnexure,
    sections: [
      ...withAnnexure.sections,
      {
        heading: t('cyberJustice.adapters.financialLossHeading') || 'Expanded Financial Loss Details',
        content: buildFinancialLossSummary(caseFile.financialLoss),
      },
    ],
  };
}
