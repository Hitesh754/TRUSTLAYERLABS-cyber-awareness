import type { CrimeCategory } from '../legalProfiles/types';
import type { LawMappingResult, LawSection, ResolvedLawSection } from './types';
import { IPC_SECTIONS } from './ipc/sections';
import { BNS_SECTIONS } from './bns/sections';
import { IT_ACT_SECTIONS } from './itAct/sections';
import { SCAM_TYPE_TO_LAWS } from './scamTypeToLaws';
import { buildIpcToBnsNotes } from './ipcToBnsBridge';

function resolveSection(
  section: LawSection,
  crimeCategory: CrimeCategory,
): ResolvedLawSection {
  return {
    ...section,
    relevanceReason: section.relevanceTemplate.replace(/\.$/, '') + ` (${crimeCategory.replace(/_/g, ' ').toLowerCase()}).`,
  };
}

function resolveSections(
  act: 'ipc' | 'bns' | 'itAct',
  sectionIds: string[],
  crimeCategory: CrimeCategory,
): ResolvedLawSection[] {
  const db =
    act === 'ipc' ? IPC_SECTIONS : act === 'bns' ? BNS_SECTIONS : IT_ACT_SECTIONS;
  const resolved: ResolvedLawSection[] = [];
  for (const id of sectionIds) {
    const section = db[id];
    if (section) {
      resolved.push(resolveSection(section, crimeCategory));
    }
  }
  return resolved;
}

export function getLawSection(act: 'IPC' | 'BNS' | 'IT_ACT', sectionId: string): LawSection | undefined {
  if (act === 'IPC') return IPC_SECTIONS[sectionId];
  if (act === 'BNS') return BNS_SECTIONS[sectionId];
  return IT_ACT_SECTIONS[sectionId];
}

export function getAllLawSections(): LawSection[] {
  return [
    ...Object.values(IPC_SECTIONS),
    ...Object.values(BNS_SECTIONS),
    ...Object.values(IT_ACT_SECTIONS),
  ];
}

export function mapLawsForCrimeCategory(crimeCategory: CrimeCategory): LawMappingResult {
  const refs = SCAM_TYPE_TO_LAWS[crimeCategory];
  const ipcSections = resolveSections('ipc', refs.ipc, crimeCategory);
  const bnsSections = resolveSections('bns', refs.bns, crimeCategory);
  const itActSections = resolveSections('itAct', refs.itAct, crimeCategory);

  const primaryParts: string[] = [];
  if (ipcSections.length > 0) {
    primaryParts.push(`IPC Sections ${ipcSections.map((s) => s.section).join(', ')}`);
  }
  if (bnsSections.length > 0) {
    primaryParts.push(`BNS Sections ${bnsSections.map((s) => s.section).join(', ')}`);
  }
  if (itActSections.length > 0) {
    primaryParts.push(`IT Act Sections ${itActSections.map((s) => s.section).join(', ')}`);
  }

  return {
    ipcSections,
    bnsSections,
    itActSections,
    primaryChargeSummary: primaryParts.join('; ') || 'General cybercrime provisions may apply.',
    ipcToBnsNotes: buildIpcToBnsNotes(refs.ipc),
  };
}

export { IPC_SECTIONS, BNS_SECTIONS, IT_ACT_SECTIONS };
export { SCAM_TYPE_TO_LAWS, getLawRefsForCrimeCategory } from './scamTypeToLaws';
export { IPC_TO_BNS_BRIDGE, getBnsEquivalentForIpc, buildIpcToBnsNotes } from './ipcToBnsBridge';
