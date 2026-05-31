import { mapLawsForCrimeCategory, getLawRefsForCrimeCategory } from '../../../data/lawMappings';
import { getProfileByCrimeCategory } from '../../../data/legalProfiles/profiles';
import { applicableLawsFromCanonical } from '../../../data/legalProfiles/shared/applicableLaws';
import type { CrimeCategory } from '../../../data/legalProfiles/types';
import type { LawMappingResult } from '../../../data/lawMappings/types';
import type { LegalProfile } from '../../../data/legalProfiles/types';
import { enrichLawMappingWithIpcBns } from './ipcBnsResolver';

export interface LawMappingEngineResult {
  crimeCategory: CrimeCategory;
  lawMapping: LawMappingResult;
  applicableLawRefs: ReturnType<typeof getLawRefsForCrimeCategory>;
  profile: LegalProfile;
  ipcBnsResolution: ReturnType<typeof enrichLawMappingWithIpcBns>['ipcBnsResolution'];
}

/**
 * Maps applicable laws for a crime category using canonical Sprint 1 databases only.
 */
export function mapLawsForIncident(crimeCategory: CrimeCategory): LawMappingEngineResult {
  const baseMapping = mapLawsForCrimeCategory(crimeCategory);
  const enriched = enrichLawMappingWithIpcBns(baseMapping);
  const profile = getProfileByCrimeCategory(crimeCategory);

  return {
    crimeCategory,
    lawMapping: enriched,
    applicableLawRefs: getLawRefsForCrimeCategory(crimeCategory),
    profile: {
      ...profile,
      applicableLaws: applicableLawsFromCanonical(crimeCategory),
    },
    ipcBnsResolution: enriched.ipcBnsResolution,
  };
}
