import type { ClassificationResult } from '../types/classification.types';
import type { ExtractedEntities } from '../types/entity.types';
import type { LawMappingEngineResult } from '../engines/law/lawMappingEngine';
import { formatEvidence } from './evidenceFormatter';
import { buildTimeline, IncidentTimelineEvent } from './timelineBuilder';
import { buildLegalSections } from './legalSectionBuilder';
import { generateDeclaration } from './declarationBuilder';
import { getComplaintTemplate } from '../templates/multiLangComplaint';
import i18n from '../../i18n';

export interface VictimInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface AccusedInfo {
  knownDetails: string;
}

export interface FinancialLoss {
  amount: number;
  currency: string;
  demandedAmount?: number;
  transactionId?: string;
  bankName?: string;
}

export interface ComplaintData {
  victim: VictimInfo;
  accused: AccusedInfo;
  narrative: string;
  timeline: IncidentTimelineEvent[];
  financialLoss?: FinancialLoss;
  entities: ExtractedEntities;
  classification: ClassificationResult;
  laws: LawMappingEngineResult;
}

export interface GeneratedComplaint {
  subject: string;
  salutation: string;
  bodyIntro: string;
  sections: {
    heading: string;
    content: string;
  }[];
  declaration: string;
  declarationHeading?: string;
  subjectLabel?: string;
  signatureLabel?: string;
  signOff: string;
}

export const generateComplaint = (data: ComplaintData, lang?: string): GeneratedComplaint => {
  const identityProvided = Boolean(
    data.victim.name?.trim() || data.victim.email?.trim() || data.victim.phone?.trim() || data.victim.address?.trim(),
  );
  const victimName = data.victim.name?.trim()
    ? data.victim.name.trim()
    : identityProvided
      ? 'Victim'
      : 'Unknown Victim';
  const victim = {
    ...data.victim,
    name: victimName,
  };
  const accused = data.accused || { knownDetails: '' };
  const narrative = data.narrative || 'No incident narrative provided.';
  const timeline = data.timeline || [];
  const financialLoss = data.financialLoss;
  const entities = data.entities || ({} as ExtractedEntities);
  const classification = data.classification;
  const laws = data.laws;

  const language = lang || i18n.language || 'en';
  const tpl = getComplaintTemplate(language);
  
  const categoryName = classification?.primaryCategory ? classification.primaryCategory.replace(/_/g, ' ') : 'UNKNOWN CATEGORY';

  const sections = [];

  // Narrative
  sections.push({
    heading: tpl.narrativeHeading,
    content: narrative
  });

  // Timeline
  sections.push({
    heading: tpl.timelineHeading,
    content: buildTimeline(timeline).join('\n')
  });

  // Financial Loss
  if (financialLoss) {
    const actualAmount = financialLoss.amount ?? 0;
    let lossText = `Actual Loss: ${financialLoss.currency || 'INR'} ${actualAmount}`;
    if (financialLoss.demandedAmount !== undefined && financialLoss.demandedAmount !== actualAmount) {
      lossText += `\nDemanded Amount: ${financialLoss.currency || 'INR'} ${financialLoss.demandedAmount}`;
    }
    if (financialLoss.bankName) lossText += `\nBank: ${financialLoss.bankName}`;
    if (financialLoss.transactionId) lossText += `\nTransaction ID: ${financialLoss.transactionId}`;
    if (actualAmount === 0 && financialLoss.demandedAmount !== undefined) {
      lossText += '\nNo actual payment was made.';
    }
    sections.push({
      heading: tpl.lossHeading,
      content: lossText
    });
  }

  // Evidence
  sections.push({
    heading: tpl.evidenceHeading,
    content: formatEvidence(entities).join('\n')
  });

  // Accused
  sections.push({
    heading: tpl.accusedHeading,
    content: accused.knownDetails || 'No specific details known beyond provided identifiers.'
  });

  // Legal
  sections.push({
    heading: tpl.legalHeading,
    content: laws ? buildLegalSections(laws).join('\n') : 'No legal mapping available.'
  });

  const today = new Date().toLocaleDateString();

  return {
    subject: tpl.subjectTemplate(categoryName),
    salutation: tpl.salutation,
    bodyIntro: tpl.bodyIntroTemplate(victim.name),
    sections,
    declaration: generateDeclaration(victim.name, today, language),
    declarationHeading: tpl.declarationHeading,
    subjectLabel: tpl.subjectLabel,
    signatureLabel: tpl.signatureLabel,
    signOff: tpl.signOff
  };
};

export const formatComplaintForDisplay = (complaint: GeneratedComplaint): string => {
  let doc = `${complaint.salutation}\n\nSubject: ${complaint.subject}\n\n${complaint.bodyIntro}\n\n`;

  complaint.sections.forEach(sec => {
    doc += `${sec.heading}\n${sec.content}\n\n`;
  });

  const declHeading = complaint.declarationHeading || '7. Declaration';
  doc += `${declHeading}\n${complaint.declaration}\n\n${complaint.signOff}\n\n[Signature]`;

  return doc;
};
