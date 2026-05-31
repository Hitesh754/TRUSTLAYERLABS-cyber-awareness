import { generateComplaint, type GeneratedComplaint } from '../../../sentinel-legal/generators/complaintGenerator';
import i18n from '../../../i18n';
import type { ComplaintAnnexure, OfficialComplaintPacket } from '../types/complaintPacket.types';
import type { CyberJusticeCase } from '../types/cyberJustice.types';
import { buildComplaintDataFromCase } from './complaintDataAdapter';
import { buildEvidenceComplaintAnnexure } from './evidenceAnnexureAdapter';
import { buildFinancialLossComplaintAnnexure } from './financialLossAdapter';
import { buildLawExplanationComplaintAnnexure } from './lawExplanationAnnexureAdapter';
import { buildTimelineComplaintAnnexure } from './timelineAnnexureAdapter';

function compactId(id: string) {
  return id.replace(/[^a-zA-Z0-9]/g, '').slice(-8).toUpperCase() || 'CASEFILE';
}

export function buildComplaintPacketNumber(caseFile: CyberJusticeCase, generatedAt = new Date().toISOString()): string {
  const date = generatedAt.slice(0, 10).replace(/-/g, '');
  return `CJ-${date}-${compactId(caseFile.id)}`;
}

function appendAnnexuresToComplaint(complaint: GeneratedComplaint, annexures: ComplaintAnnexure[]): GeneratedComplaint {
  return {
    ...complaint,
    sections: [
      ...complaint.sections,
      ...annexures.map((annexure) => ({
        heading: annexure.title,
        content: annexure.content,
      })),
    ],
  };
}

export function buildOfficialComplaintPacket(caseFile: CyberJusticeCase, lang?: string): OfficialComplaintPacket | null {
  const data = buildComplaintDataFromCase(caseFile);
  if (!data) return null;

  const generatedAt = new Date().toISOString();
  const packetNumber = buildComplaintPacketNumber(caseFile, generatedAt);
  const baseComplaint = generateComplaint(data, lang);
  const annexures = [
    buildEvidenceComplaintAnnexure(caseFile.evidence.vaultItems, lang),
    buildTimelineComplaintAnnexure(caseFile.timeline.events, lang),
    buildFinancialLossComplaintAnnexure(caseFile.financialLoss, lang),
    buildLawExplanationComplaintAnnexure(caseFile.laws.mapping, lang),
  ];
  const complaint = appendAnnexuresToComplaint(baseComplaint, annexures);
  const lawCount = caseFile.laws.mapping
    ? caseFile.laws.mapping.lawMapping.bnsSections.length +
      caseFile.laws.mapping.lawMapping.itActSections.length +
      caseFile.laws.mapping.lawMapping.ipcSections.length
    : 0;

  return {
    packetNumber,
    generatedAt,
    complaint,
    annexures,
    exportSummary: {
      packetNumber,
      generatedAt,
      evidenceCount: caseFile.evidence.vaultItems.length,
      timelineEventCount: caseFile.timeline.events.length,
      lawCount,
      hasFinancialLoss: Boolean(caseFile.financialLoss),
      annexureCount: annexures.length,
      pdfReady: false,
    },
    pdf: null,
    lang,
  };
}

export function formatPacketForPreview(packet: OfficialComplaintPacket): string {
  const t = i18n.getFixedT(packet.lang ? packet.lang : null, 'translation');
  const annexureIndex = packet.annexures
    .map((annexure) => `- ${annexure.title} (${annexure.itemCount} ${annexure.itemCount === 1 ? t('cyberJustice.adapters.item') : t('cyberJustice.adapters.items')})`)
    .join('\n');

  return `${t('cyberJustice.adapters.packetHeader') || 'OFFICIAL CYBERCRIME COMPLAINT PACKET'}
${t('cyberJustice.adapters.packetNumber') || 'Packet Number'}: ${packet.packetNumber}
${t('cyberJustice.adapters.generatedAt') || 'Generated At'}: ${packet.generatedAt}

${t('cyberJustice.adapters.subject') || 'Subject'}: ${packet.complaint.subject}

${t('cyberJustice.adapters.annexureIndex') || 'Annexure Index'}:
${annexureIndex}

${packet.complaint.salutation}

${packet.complaint.bodyIntro}

${packet.complaint.sections.map((section) => `${section.heading}\n${section.content}`).join('\n\n')}

${t('cyberJustice.adapters.signatureBlock') || 'Signature Block'}:
${t('cyberJustice.adapters.complainantSignature') || 'Complainant Signature'}: ______________________
${t('cyberJustice.adapters.name') || 'Name'}: ______________________
${t('cyberJustice.adapters.date') || 'Date'}: ______________________`;
}
