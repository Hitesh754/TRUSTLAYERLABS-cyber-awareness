/* @deprecated Legacy Legal AI workflow retained for Reporting Center compatibility. Replaced by Cyber Justice AI. */
import type { CrimeCategory } from '../../../data/legalProfiles/types';

export interface RequiredDetails {
  needsUpi: boolean;
  needsPhone: boolean;
  needsUrl: boolean;
  needsEmail: boolean;
  needsWallet: boolean;
}

export function getRequiredDetails(category: CrimeCategory | undefined): RequiredDetails {
  return {
    needsUpi: category === 'UPI_FRAUD' || category === 'QR_SCAM',
    needsPhone: category === 'OTP_FRAUD' || category === 'SIM_SWAP',
    needsUrl: category === 'PHISHING' || category === 'JOB_SCAM' || category === 'INVESTMENT_SCAM',
    needsEmail: category === 'PHISHING' || category === 'DATA_BREACH',
    needsWallet: category === 'CRYPTO_FRAUD',
  };
}
