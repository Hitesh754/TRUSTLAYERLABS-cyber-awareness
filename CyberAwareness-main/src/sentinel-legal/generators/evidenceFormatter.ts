import type { ExtractedEntities } from '../types/entity.types';

export const formatEvidence = (entities: ExtractedEntities): string[] => {
  const lines: string[] = [];
  
  if (entities.phoneNumbers && entities.phoneNumbers.length > 0) {
    lines.push(`Phone Numbers: ${entities.phoneNumbers.join(', ')}`);
  }
  if (entities.upiIds && entities.upiIds.length > 0) {
    lines.push(`UPI IDs: ${entities.upiIds.join(', ')}`);
  }
  if (entities.urls && entities.urls.length > 0) {
    lines.push(`URLs: ${entities.urls.join(', ')}`);
  }
  if (entities.emails && entities.emails.length > 0) {
    lines.push(`Emails: ${entities.emails.join(', ')}`);
  }
  if (entities.walletAddresses && entities.walletAddresses.length > 0) {
    lines.push(`Crypto Wallets: ${entities.walletAddresses.join(', ')}`);
  }
  if (entities.utrIds && entities.utrIds.length > 0) {
    lines.push(`UTR IDs: ${entities.utrIds.join(', ')}`);
  }
  if (entities.ifscCodes && entities.ifscCodes.length > 0) {
    lines.push(`IFSC Codes: ${entities.ifscCodes.join(', ')}`);
  }
  
  if (lines.length === 0) {
    lines.push('No automatically extracted identifiers. Refer to narrative and attached evidence.');
  }
  
  return lines;
};
