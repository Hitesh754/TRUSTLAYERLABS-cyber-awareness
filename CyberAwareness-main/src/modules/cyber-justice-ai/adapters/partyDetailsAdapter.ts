import type { AccusedInfo, VictimInfo } from '../../../sentinel-legal/generators/complaintGenerator';
import type { CyberJusticeCase } from '../types/cyberJustice.types';

function joinList(label: string, values: string[] | undefined): string | null {
  const clean = (values ?? []).map((value) => value.trim()).filter(Boolean);
  return clean.length ? `${label}: ${clean.join(', ')}` : null;
}

export function buildVictimInfo(caseFile: CyberJusticeCase): VictimInfo {
  return {
    name: caseFile.victim.name?.trim() || '',
    email: caseFile.victim.email?.trim() || '',
    phone: caseFile.victim.phone?.trim() || '',
    address: caseFile.victim.address?.trim() || '',
  };
}

export function buildAccusedInfo(caseFile: CyberJusticeCase): AccusedInfo {
  const suspect = caseFile.suspect;
  const entities = caseFile.evidence.extractedEntities;
  const lines = [
    suspect.name ? `Name: ${suspect.name}` : null,
    suspect.knownDetails ? `Known Details: ${suspect.knownDetails}` : null,
    joinList('Phone Numbers', [...suspect.phoneNumbers, ...entities.phoneNumbers]),
    joinList('Emails', [...suspect.emails, ...entities.emails]),
    joinList('UPI IDs', [...suspect.upiIds, ...entities.upiIds]),
    joinList('URLs', [...suspect.urls, ...entities.urls]),
    joinList('Wallet Addresses', [...suspect.walletAddresses, ...entities.walletAddresses]),
    joinList('Social Profiles', suspect.socialProfiles),
    joinList('UTR/RRN References', entities.utrIds),
    joinList('IFSC Codes', entities.ifscCodes),
  ].filter(Boolean);

  return {
    knownDetails: lines.length ? lines.join('\n') : 'No specific accused details known beyond the provided narrative and evidence.',
  };
}
