import type { LawMappingEngineResult } from '../../../sentinel-legal';
import type { ComplaintAnnexure } from '../types/complaintPacket.types';

import i18n from '../../../i18n';

type ResolvedLaw = LawMappingEngineResult['lawMapping']['bnsSections'][number];

function formatLaw(law: ResolvedLaw, index: number, categoryLabel: string, t: any): string {
  return `${index + 1}. ${t('complaint.law.sectionLabel') || 'Section'}: ${law.act} ${law.section}\n${t('complaint.law.titleLabel') || 'Title'}: ${law.title}\n${t('complaint.law.whyApplied') || 'Why Applied'}: ${law.relevanceReason || law.relevanceTemplate || `${t('complaint.law.mappedTo') || 'Mapped to'} ${categoryLabel}.`}\n${t('complaint.law.shortExplanation') || 'Short Explanation'}: ${law.description}`;
}

export function buildLawExplanationAnnexure(mapping: LawMappingEngineResult | null, lang?: string): string {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  if (!mapping) return t('complaint.law.none') || 'No law mapping is available.';

  const laws: ResolvedLaw[] = [
    ...mapping.lawMapping.bnsSections,
    ...mapping.lawMapping.itActSections,
    ...mapping.lawMapping.ipcSections,
  ];
  if (!laws.length) return t('complaint.law.noneMapped') || 'No statutory sections were mapped for this incident.';

  const categoryLabel = mapping.crimeCategory.replace(/_/g, ' ');
  return laws.map((law, index) => formatLaw(law, index, categoryLabel, t)).join('\n\n');
}

export function buildLawExplanationComplaintAnnexure(mapping: LawMappingEngineResult | null, lang?: string): ComplaintAnnexure {
  const lawCount = mapping
    ? mapping.lawMapping.bnsSections.length + mapping.lawMapping.itActSections.length + mapping.lawMapping.ipcSections.length
    : 0;

  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  return {
    id: 'annexure-d-law-explanation',
    kind: 'LAW_EXPLANATION',
    title: `${t('complaint.annexurePrefix') || 'Annexure D'} - ${t('complaint.law.annexureTitle') || 'Law Explanation'}`,
    content: buildLawExplanationAnnexure(mapping, lang),
    itemCount: lawCount,
  };
}
