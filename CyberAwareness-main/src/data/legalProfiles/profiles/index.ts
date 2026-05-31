import type { CrimeCategory, LegalProfile, LegalProfileCore } from '../types';
import { attachCanonicalLaws } from '../shared/applicableLaws';
import {
  upiFraudProfileCore,
  otpFraudProfileCore,
  phishingProfileCore,
  investmentScamProfileCore,
  cryptoFraudProfileCore,
} from './batch1';
import {
  deepfakeImpersonationProfileCore,
  identityTheftProfileCore,
  qrScamProfileCore,
  simSwapProfileCore,
  jobScamProfileCore,
} from './batch2';
import {
  sextortionProfileCore,
  cyberStalkingProfileCore,
  dataBreachProfileCore,
  hackingUnauthorizedAccessProfileCore,
  otherProfileCore,
  organizedCrimeProfileCore,
} from './batch3';

const PROFILE_CORES: Record<CrimeCategory, LegalProfileCore> = {
  UPI_FRAUD: upiFraudProfileCore,
  OTP_FRAUD: otpFraudProfileCore,
  PHISHING: phishingProfileCore,
  INVESTMENT_SCAM: investmentScamProfileCore,
  CRYPTO_FRAUD: cryptoFraudProfileCore,
  DEEPFAKE_IMPERSONATION: deepfakeImpersonationProfileCore,
  IDENTITY_THEFT: identityTheftProfileCore,
  QR_SCAM: qrScamProfileCore,
  SIM_SWAP: simSwapProfileCore,
  JOB_SCAM: jobScamProfileCore,
  SEXTORTION: sextortionProfileCore,
  CYBER_STALKING: cyberStalkingProfileCore,
  DATA_BREACH: dataBreachProfileCore,
  HACKING_UNAUTHORIZED_ACCESS: hackingUnauthorizedAccessProfileCore,
  ORGANIZED_CRIME: organizedCrimeProfileCore,
  OTHER: otherProfileCore,
};

export const CRIME_CATEGORY_PROFILES: Record<CrimeCategory, LegalProfile> = {
  UPI_FRAUD: attachCanonicalLaws(PROFILE_CORES.UPI_FRAUD),
  OTP_FRAUD: attachCanonicalLaws(PROFILE_CORES.OTP_FRAUD),
  PHISHING: attachCanonicalLaws(PROFILE_CORES.PHISHING),
  INVESTMENT_SCAM: attachCanonicalLaws(PROFILE_CORES.INVESTMENT_SCAM),
  CRYPTO_FRAUD: attachCanonicalLaws(PROFILE_CORES.CRYPTO_FRAUD),
  DEEPFAKE_IMPERSONATION: attachCanonicalLaws(PROFILE_CORES.DEEPFAKE_IMPERSONATION),
  IDENTITY_THEFT: attachCanonicalLaws(PROFILE_CORES.IDENTITY_THEFT),
  QR_SCAM: attachCanonicalLaws(PROFILE_CORES.QR_SCAM),
  SIM_SWAP: attachCanonicalLaws(PROFILE_CORES.SIM_SWAP),
  JOB_SCAM: attachCanonicalLaws(PROFILE_CORES.JOB_SCAM),
  SEXTORTION: attachCanonicalLaws(PROFILE_CORES.SEXTORTION),
  CYBER_STALKING: attachCanonicalLaws(PROFILE_CORES.CYBER_STALKING),
  DATA_BREACH: attachCanonicalLaws(PROFILE_CORES.DATA_BREACH),
  HACKING_UNAUTHORIZED_ACCESS: attachCanonicalLaws(PROFILE_CORES.HACKING_UNAUTHORIZED_ACCESS),
  ORGANIZED_CRIME: attachCanonicalLaws(PROFILE_CORES.ORGANIZED_CRIME),
  OTHER: attachCanonicalLaws(PROFILE_CORES.OTHER),
};

export function getProfileByCrimeCategory(category: CrimeCategory): LegalProfile {
  return CRIME_CATEGORY_PROFILES[category];
}

export const ALL_CATEGORY_PROFILES: LegalProfile[] = Object.values(CRIME_CATEGORY_PROFILES);
