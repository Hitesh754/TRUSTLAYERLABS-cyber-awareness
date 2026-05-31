import type { ScamType } from '../scamDatabase';
import { scamDatabase, getScamById } from '../scamDatabase';
import type { CrimeCategory, LegalProfile, LegalProfileOverride, ResolvedLegalProfile } from './types';
import { getCategoryDefault } from './categoryDefaults';
import { applicableLawsFromCanonical } from './shared/applicableLaws';
import { getProfileByCrimeCategory, CRIME_CATEGORY_PROFILES } from './profiles';
import { inferCrimeCategoryFromScam } from './scamIdToCrimeCategory';
import { getScamProfileOverride } from './scamOverrides';
import { mapLawsForCrimeCategory } from '../lawMappings';
import type { LawMappingResult } from '../lawMappings/types';

function mergeStringArrays(base: string[], extra?: string[]): string[] {
  if (!extra?.length) {
    return [...base];
  }
  const set = new Set([...base, ...extra]);
  return Array.from(set);
}

function mergeProfile(
  base: LegalProfile,
  override: LegalProfileOverride,
  sourceScamId: string,
  resolutionPath: ResolvedLegalProfile['resolutionPath'],
): ResolvedLegalProfile {
  const crimeCategory = override.crimeCategory ?? base.crimeCategory;
  const canonicalLaws = applicableLawsFromCanonical(crimeCategory);
  const applicableLaws = {
    ipc: override.applicableLaws?.ipc ?? canonicalLaws.ipc,
    bns: override.applicableLaws?.bns ?? canonicalLaws.bns,
    itAct: override.applicableLaws?.itAct ?? canonicalLaws.itAct,
  };

  const reportingGuidance = override.reportingGuidance
    ? {
        ...base.reportingGuidance,
        ...override.reportingGuidance,
        secondaryChannels: override.reportingGuidance.secondaryChannels ?? base.reportingGuidance.secondaryChannels,
        evidencePackagingTips: mergeStringArrays(
          base.reportingGuidance.evidencePackagingTips,
          override.reportingGuidance.evidencePackagingTips,
        ),
        filingSteps: mergeStringArrays(
          base.reportingGuidance.filingSteps,
          override.reportingGuidance.filingSteps,
        ),
      }
    : base.reportingGuidance;

  return {
    ...base,
    id: `${crimeCategory}:${sourceScamId}`,
    crimeCategory,
    keywords: mergeStringArrays(base.keywords, override.keywords),
    keywordWeights: { ...base.keywordWeights, ...override.keywordWeights },
    applicableLaws,
    evidenceRequirements: override.evidenceRequirements ?? base.evidenceRequirements,
    urgencyLevel: override.urgencyLevel ?? base.urgencyLevel,
    immediateActions: override.immediateActions ?? base.immediateActions,
    reportingGuidance,
    interviewExtensions: override.interviewExtensions ?? base.interviewExtensions,
    complaintTemplateId: override.complaintTemplateId ?? base.complaintTemplateId,
    sourceScamId,
    resolutionPath,
  };
}

/**
 * Resolution chain:
 * 1. scamOverrides[scamId] merged onto crime category profile
 * 2. profiles[crimeCategory] from inferred or explicit category
 * 3. categoryDefaults[scamCategory] keywords merged as fallback enrichment
 */
export function resolveLegalProfileForScam(scam: ScamType): ResolvedLegalProfile {
  const override = getScamProfileOverride(scam.id);
  const crimeCategory = override?.crimeCategory ?? inferCrimeCategoryFromScam(scam);
  const baseProfile = getProfileByCrimeCategory(crimeCategory);

  if (override) {
    return mergeProfile(baseProfile, override, scam.id, ['scam_override', 'crime_category']);
  }

  const categoryDefault = getCategoryDefault(scam.category);
  const enriched: LegalProfile = {
    ...baseProfile,
    keywords: mergeStringArrays(baseProfile.keywords, categoryDefault.keywords),
    urgencyLevel:
      baseProfile.urgencyLevel === 'medium' && categoryDefault.urgencyLevel === 'high'
        ? 'high'
        : baseProfile.urgencyLevel,
  };

  return {
    ...enriched,
    id: `${crimeCategory}:${scam.id}`,
    sourceScamId: scam.id,
    resolutionPath: ['crime_category', 'scam_category_default'],
  };
}

export function getLegalProfileByScamId(scamId: string): ResolvedLegalProfile | undefined {
  const scam = getScamById(scamId);
  if (!scam) {
    return undefined;
  }
  return resolveLegalProfileForScam(scam);
}

export function getLegalProfileByCrimeCategory(category: CrimeCategory): LegalProfile {
  return getProfileByCrimeCategory(category);
}

export function getLegalProfileWithLawsForScam(
  scamId: string,
): { profile: ResolvedLegalProfile; lawMapping: LawMappingResult } | undefined {
  const profile = getLegalProfileByScamId(scamId);
  if (!profile) {
    return undefined;
  }
  const lawMapping = mapLawsForCrimeCategory(profile.crimeCategory);
  return { profile, lawMapping };
}

export function getAllScamLegalProfiles(): ResolvedLegalProfile[] {
  return scamDatabase.map((scam) => resolveLegalProfileForScam(scam));
}

export function validateAllScamProfiles(): {
  valid: boolean;
  totalScams: number;
  profilesResolved: number;
  missingLawSections: string[];
} {
  const missingLawSections: string[] = [];
  let profilesResolved = 0;

  for (const scam of scamDatabase) {
    const resolved = resolveLegalProfileForScam(scam);
    profilesResolved += 1;
    const mapping = mapLawsForCrimeCategory(resolved.crimeCategory);
    const expectedIpc = resolved.applicableLaws.ipc.length;
    const expectedBns = resolved.applicableLaws.bns.length;
    const expectedIt = resolved.applicableLaws.itAct.length;
    if (
      mapping.ipcSections.length < expectedIpc ||
      mapping.bnsSections.length < expectedBns ||
      mapping.itActSections.length < expectedIt
    ) {
      missingLawSections.push(
        `${scam.id}: ipc ${mapping.ipcSections.length}/${expectedIpc}, bns ${mapping.bnsSections.length}/${expectedBns}, it ${mapping.itActSections.length}/${expectedIt}`,
      );
    }
  }

  return {
    valid: missingLawSections.length === 0 && profilesResolved === scamDatabase.length,
    totalScams: scamDatabase.length,
    profilesResolved,
    missingLawSections,
  };
}

export {
  CRIME_CATEGORY_PROFILES,
  inferCrimeCategoryFromScam,
  getScamProfileOverride,
};
export type { CrimeCategory, LegalProfile, ResolvedLegalProfile, LegalProfileOverride };
export { CRIME_CATEGORIES, CRIME_CATEGORY_META, isCrimeCategory } from './crimeCategories';
export { CATEGORY_DEFAULTS, getCategoryDefault } from './categoryDefaults';
export { applicableLawsFromCanonical, attachCanonicalLaws } from './shared/applicableLaws';
export { runSprint1Validation, assertSprint1Validation } from './validate';
export type { ValidationExampleResult } from './validate';
