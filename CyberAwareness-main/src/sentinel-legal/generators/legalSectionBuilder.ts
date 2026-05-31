import type { LawMappingEngineResult } from '../engines/law/lawMappingEngine';

export const buildLegalSections = (laws: LawMappingEngineResult): string[] => {
  const sections: string[] = [];
  
  if (laws.lawMapping.bnsSections && laws.lawMapping.bnsSections.length > 0) {
    sections.push('Bharatiya Nyaya Sanhita (BNS):');
    laws.lawMapping.bnsSections.forEach(law => {
      sections.push(`- Section ${law.section}: ${law.title}`);
    });
  }

  if (laws.lawMapping.ipcSections && laws.lawMapping.ipcSections.length > 0) {
    sections.push('\nIndian Penal Code (IPC) [Legacy]:');
    laws.lawMapping.ipcSections.forEach(law => {
      sections.push(`- Section ${law.section}: ${law.title}`);
    });
  }
  
  if (laws.lawMapping.itActSections && laws.lawMapping.itActSections.length > 0) {
    sections.push('\nInformation Technology (IT) Act:');
    laws.lawMapping.itActSections.forEach(law => {
      sections.push(`- Section ${law.section}: ${law.title}`);
    });
  }

  if (sections.length === 0) {
    sections.push('No specific sections automatically mapped for this category.');
  }

  return sections;
};
