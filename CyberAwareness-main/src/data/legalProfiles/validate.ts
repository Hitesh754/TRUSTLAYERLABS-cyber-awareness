/**
 * Sprint 1 validation utilities — run from devtools or a future test suite.
 * Example: import { runSprint1Validation } from './data/legalProfiles/validate';
 */
import { getScamById } from '../scamDatabase';
import {
  mapLawsForCrimeCategory,
  getLawSection,
  getBnsEquivalentForIpc,
  IPC_TO_BNS_BRIDGE,
} from '../lawMappings';
import { BNS_SECTIONS } from '../lawMappings/bns/sections';
import { IPC_SECTIONS } from '../lawMappings/ipc/sections';
import { IT_ACT_SECTIONS } from '../lawMappings/itAct/sections';
import { getLawRefsForCrimeCategory } from '../lawMappings/scamTypeToLaws';
import { CRIME_CATEGORIES } from './crimeCategories';
import {
  getLegalProfileByScamId,
  getLegalProfileByCrimeCategory,
  inferCrimeCategoryFromScam,
  validateAllScamProfiles,
} from './index';
import { applicableLawsFromCanonical } from './shared/applicableLaws';

export interface ValidationExampleResult {
  name: string;
  passed: boolean;
  detail: string;
}

export function runSprint1Validation(): ValidationExampleResult[] {
  const results: ValidationExampleResult[] = [];

  const upiScam = getScamById('upi-fraud');
  if (upiScam) {
    const category = inferCrimeCategoryFromScam(upiScam);
    results.push({
      name: 'inferCrimeCategoryFromScam(upi-fraud)',
      passed: category === 'UPI_FRAUD',
      detail: `Expected UPI_FRAUD, got ${category}`,
    });
  }

  const upiProfile = getLegalProfileByScamId('upi-fraud');
  results.push({
    name: 'getLegalProfileByScamId(upi-fraud)',
    passed: upiProfile?.crimeCategory === 'UPI_FRAUD' && upiProfile.resolutionPath.includes('scam_override'),
    detail: upiProfile
      ? `category=${upiProfile.crimeCategory}, path=${upiProfile.resolutionPath.join('→')}`
      : 'Profile not found',
  });

  const cryptoScam = getScamById('fake-airdrop');
  if (cryptoScam) {
    const category = inferCrimeCategoryFromScam(cryptoScam);
    results.push({
      name: 'inferCrimeCategoryFromScam(fake-airdrop)',
      passed: category === 'CRYPTO_FRAUD',
      detail: `Expected CRYPTO_FRAUD, got ${category}`,
    });
  }

  const lawMapping = mapLawsForCrimeCategory('UPI_FRAUD');
  results.push({
    name: 'mapLawsForCrimeCategory(UPI_FRAUD)',
    passed:
      lawMapping.ipcSections.length >= 2 &&
      lawMapping.bnsSections.length >= 2 &&
      lawMapping.itActSections.length >= 2,
    detail: `IPC=${lawMapping.ipcSections.length}, BNS=${lawMapping.bnsSections.length}, IT=${lawMapping.itActSections.length}`,
  });

  const ipc419 = getLawSection('IPC', '419');
  results.push({
    name: 'getLawSection(IPC, 419)',
    passed: ipc419?.section === '419' && ipc419.act === 'IPC',
    detail: ipc419?.title ?? 'Section not found',
  });

  const ipc504 = getLawSection('IPC', '504');
  const bns352 = BNS_SECTIONS['352'];
  results.push({
    name: 'IPC 504 ↔ BNS 352 bridge consistency',
    passed:
      ipc504?.section === '504' &&
      ipc504.supersededBy === '352' &&
      getBnsEquivalentForIpc('504') === '352' &&
      bns352?.ipcEquivalent === '504' &&
      IPC_TO_BNS_BRIDGE['504'] === '352',
    detail: ipc504
      ? `IPC 504 supersededBy=${ipc504.supersededBy}, bridge=${IPC_TO_BNS_BRIDGE['504']}, BNS352.ipc=${bns352?.ipcEquivalent}`
      : 'IPC Section 504 not found',
  });

  const bridgeOrphans: string[] = [];
  for (const [ipcId, bnsId] of Object.entries(IPC_TO_BNS_BRIDGE)) {
    if (!IPC_SECTIONS[ipcId]) bridgeOrphans.push(`missing IPC ${ipcId}`);
    if (!BNS_SECTIONS[bnsId]) bridgeOrphans.push(`missing BNS ${bnsId}`);
  }
  for (const sec of Object.values(BNS_SECTIONS)) {
    if (sec.ipcEquivalent && !IPC_SECTIONS[sec.ipcEquivalent]) {
      bridgeOrphans.push(`BNS ${sec.id} ipcEquivalent ${sec.ipcEquivalent} missing`);
    }
  }
  results.push({
    name: 'ipcToBnsBridge integrity',
    passed: bridgeOrphans.length === 0,
    detail: bridgeOrphans.length === 0 ? 'All bridge endpoints valid' : bridgeOrphans.join('; '),
  });

  const phishingProfile = getLegalProfileByCrimeCategory('PHISHING');
  results.push({
    name: 'getLegalProfileByCrimeCategory(PHISHING)',
    passed: phishingProfile.keywords.length > 5 && phishingProfile.evidenceRequirements.length > 0,
    detail: `keywords=${phishingProfile.keywords.length}, evidence=${phishingProfile.evidenceRequirements.length}`,
  });

  const bulk = validateAllScamProfiles();
  results.push({
    name: 'validateAllScamProfiles()',
    passed: bulk.valid,
    detail: `resolved ${bulk.profilesResolved}/${bulk.totalScams}, missing laws: ${bulk.missingLawSections.length}`,
  });

  const lawDrift: string[] = [];
  for (const category of CRIME_CATEGORIES) {
    const profile = getLegalProfileByCrimeCategory(category);
    const canonical = applicableLawsFromCanonical(category);
    const refs = getLawRefsForCrimeCategory(category);
    const same = (a: string[], b: string[]) =>
      JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
    if (!same(profile.applicableLaws.ipc, canonical.ipc) || !same(profile.applicableLaws.ipc, refs.ipc)) {
      lawDrift.push(`${category} ipc mismatch`);
    }
    if (!same(profile.applicableLaws.bns, canonical.bns) || !same(profile.applicableLaws.bns, refs.bns)) {
      lawDrift.push(`${category} bns mismatch`);
    }
    if (!same(profile.applicableLaws.itAct, canonical.itAct) || !same(profile.applicableLaws.itAct, refs.itAct)) {
      lawDrift.push(`${category} itAct mismatch`);
    }
  }
  results.push({
    name: 'profiles use canonical scamTypeToLaws',
    passed: lawDrift.length === 0,
    detail: lawDrift.length === 0 ? '15/15 categories aligned' : lawDrift.join('; '),
  });

  // Detect cross-act mapping mistakes: IT Act IDs placed inside IPC lists
  const crossActIssues: string[] = [];
  for (const category of CRIME_CATEGORIES) {
    const refs = getLawRefsForCrimeCategory(category);
    for (const ipcId of refs.ipc) {
      if (IT_ACT_SECTIONS[ipcId]) {
        crossActIssues.push(`${category} ipc contains IT Act id ${ipcId}`);
      }
    }
  }
  results.push({
    name: 'no IT Act ids inside IPC refs',
    passed: crossActIssues.length === 0,
    detail: crossActIssues.length === 0 ? 'no cross-act issues' : crossActIssues.join('; '),
  });

  return results;
}

export function assertSprint1Validation(): void {
  const results = runSprint1Validation();
  const failed = results.filter((r) => !r.passed);
  if (failed.length > 0) {
    throw new Error(
      `Sprint 1 validation failed:\n${failed.map((f) => `- ${f.name}: ${f.detail}`).join('\n')}`,
    );
  }
}
