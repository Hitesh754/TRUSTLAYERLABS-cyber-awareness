import type { LawMappingEngineResult } from '../../../sentinel-legal';
import type { CrimeCategory } from '../../../data/legalProfiles/types';
import type { EvidenceType } from '../types/evidenceVault.types';

export interface LawEvidenceNeed {
  id: string;
  label: string;
  description: string;
  evidenceTypes: EvidenceType[];
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface LawExplanationItem {
  id: string;
  act: string;
  section: string;
  title: string;
  whyApplied: string;
  whatItMeans: string;
  evidenceNeeded: LawEvidenceNeed[];
}

export interface LawExplanationResult {
  crimeCategory: CrimeCategory | null;
  explanations: LawExplanationItem[];
}

type ResolvedLaw = LawMappingEngineResult['lawMapping']['bnsSections'][number];
import i18n from '../../../i18n';

const t = i18n.getFixedT(null, 'translation');

const evidenceNeeds: Record<string, LawEvidenceNeed> = {
  financial: {
    id: 'financial-proof',
    label: t('cyberJustice.ui.law.evidenceNeeds.financial.label'),
    description: t('cyberJustice.ui.law.evidenceNeeds.financial.description'),
    evidenceTypes: ['SCREENSHOT', 'BANK_STATEMENT', 'PDF'],
    priority: 'CRITICAL',
  },
  communication: {
    id: 'communication-proof',
    label: t('cyberJustice.ui.law.evidenceNeeds.communication.label'),
    description: t('cyberJustice.ui.law.evidenceNeeds.communication.description'),
    evidenceTypes: ['CHAT', 'EMAIL', 'SCREENSHOT', 'AUDIO', 'VIDEO'],
    priority: 'HIGH',
  },
  identity: {
    id: 'identity-proof',
    label: t('cyberJustice.ui.law.evidenceNeeds.identity.label'),
    description: t('cyberJustice.ui.law.evidenceNeeds.identity.description'),
    evidenceTypes: ['SCREENSHOT', 'PDF', 'EMAIL'],
    priority: 'HIGH',
  },
  platform: {
    id: 'platform-proof',
    label: t('cyberJustice.ui.law.evidenceNeeds.platform.label'),
    description: t('cyberJustice.ui.law.evidenceNeeds.platform.description'),
    evidenceTypes: ['SCREENSHOT', 'CHAT', 'PDF'],
    priority: 'MEDIUM',
  },
};

function needsForLaw(law: ResolvedLaw, crimeCategory: CrimeCategory | null): LawEvidenceNeed[] {
  const tags = new Set(law.tags);
  const needs: LawEvidenceNeed[] = [];
  if (tags.has('financial-fraud') || tags.has('upi') || tags.has('crypto') || crimeCategory === 'UPI_FRAUD') needs.push(evidenceNeeds.financial);
  if (tags.has('phishing') || tags.has('otp') || tags.has('personation') || tags.has('extortion')) needs.push(evidenceNeeds.communication);
  if (tags.has('identity-theft') || tags.has('forgery') || tags.has('deepfake')) needs.push(evidenceNeeds.identity);
  if (tags.has('cyber-stalking') || tags.has('harassment') || crimeCategory === 'SEXTORTION') needs.push(evidenceNeeds.platform);
  return needs.length ? needs : [evidenceNeeds.communication];
}

export function explainMappedLaws(mappedLaws: LawMappingEngineResult | null, crimeCategory: CrimeCategory | null): LawExplanationResult {
  if (!mappedLaws) return { crimeCategory, explanations: [] };

  const laws: ResolvedLaw[] = [
    ...mappedLaws.lawMapping.bnsSections,
    ...mappedLaws.lawMapping.itActSections,
    ...mappedLaws.lawMapping.ipcSections,
  ];

  return {
    crimeCategory,
    explanations: laws.map((law) => ({
      id: `${law.act}-${law.section}`,
      act: law.act,
      section: law.section,
      title: law.title,
      whyApplied: law.relevanceReason || law.relevanceTemplate || t('cyberJustice.ui.law.whyMapped', { category: mappedLaws.crimeCategory.replace(/_/g, ' ') }),
      whatItMeans: law.description,
      evidenceNeeded: needsForLaw(law, crimeCategory),
    })),
  };
}
