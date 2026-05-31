import type { CrimeCategory } from './types';

export interface CrimeCategoryMeta {
  id: CrimeCategory;
  label: string;
  shortDescription: string;
  complaintTemplateId: string;
}

export const CRIME_CATEGORIES: CrimeCategory[] = [
  'UPI_FRAUD',
  'OTP_FRAUD',
  'PHISHING',
  'INVESTMENT_SCAM',
  'CRYPTO_FRAUD',
  'DEEPFAKE_IMPERSONATION',
  'IDENTITY_THEFT',
  'QR_SCAM',
  'SIM_SWAP',
  'JOB_SCAM',
  'SEXTORTION',
  'CYBER_STALKING',
  'DATA_BREACH',
  'HACKING_UNAUTHORIZED_ACCESS',
  'ORGANIZED_CRIME',
  'OTHER',
];

export const CRIME_CATEGORY_META: Record<CrimeCategory, CrimeCategoryMeta> = {
  UPI_FRAUD: {
    id: 'UPI_FRAUD',
    label: 'UPI / Digital Payment Fraud',
    shortDescription: 'Unauthorized UPI transfers, collect requests, or payment app fraud.',
    complaintTemplateId: 'upiFraud',
  },
  OTP_FRAUD: {
    id: 'OTP_FRAUD',
    label: 'OTP / SIM Fraud',
    shortDescription: 'OTP interception, SIM swap, or authentication bypass leading to theft.',
    complaintTemplateId: 'otpFraud',
  },
  PHISHING: {
    id: 'PHISHING',
    label: 'Phishing & Social Engineering',
    shortDescription: 'Deceptive links, fake portals, or impersonation to steal credentials or money.',
    complaintTemplateId: 'phishing',
  },
  INVESTMENT_SCAM: {
    id: 'INVESTMENT_SCAM',
    label: 'Investment / Ponzi Fraud',
    shortDescription: 'Fake investment schemes, trading apps, or guaranteed-return fraud.',
    complaintTemplateId: 'investmentScam',
  },
  CRYPTO_FRAUD: {
    id: 'CRYPTO_FRAUD',
    label: 'Cryptocurrency Fraud',
    shortDescription: 'Wallet drains, fake exchanges, crypto investment, or Web3 scams.',
    complaintTemplateId: 'cryptoFraud',
  },
  DEEPFAKE_IMPERSONATION: {
    id: 'DEEPFAKE_IMPERSONATION',
    label: 'Deepfake / Impersonation',
    shortDescription: 'AI voice/video impersonation or identity misuse for fraud.',
    complaintTemplateId: 'deepfakeImpersonation',
  },
  IDENTITY_THEFT: {
    id: 'IDENTITY_THEFT',
    label: 'Identity Theft',
    shortDescription: 'Misuse of Aadhaar, PAN, credentials, or personal data.',
    complaintTemplateId: 'identityTheft',
  },
  QR_SCAM: {
    id: 'QR_SCAM',
    label: 'QR Code Fraud',
    shortDescription: 'Tampered QR codes or malicious payment QR substitution.',
    complaintTemplateId: 'qrScam',
  },
  SIM_SWAP: {
    id: 'SIM_SWAP',
    label: 'SIM Swap Attack',
    shortDescription: 'Unauthorized SIM replacement to hijack OTP and accounts.',
    complaintTemplateId: 'simSwap',
  },
  JOB_SCAM: {
    id: 'JOB_SCAM',
    label: 'Job / Employment Fraud',
    shortDescription: 'Fake job offers, work-from-home schemes, or recruitment fees.',
    complaintTemplateId: 'jobScam',
  },
  SEXTORTION: {
    id: 'SEXTORTION',
    label: 'Sextortion / Blackmail',
    shortDescription: 'Coercion using intimate images or recorded calls.',
    complaintTemplateId: 'sextortion',
  },
  CYBER_STALKING: {
    id: 'CYBER_STALKING',
    label: 'Cyber Stalking / Harassment',
    shortDescription: 'Online harassment, stalking, or repeated threatening contact.',
    complaintTemplateId: 'cyberStalking',
  },
  DATA_BREACH: {
    id: 'DATA_BREACH',
    label: 'Data Breach / Misuse',
    shortDescription: 'Unauthorized access, leak, or misuse of personal or business data.',
    complaintTemplateId: 'dataBreach',
  },
  HACKING_UNAUTHORIZED_ACCESS: {
    id: 'HACKING_UNAUTHORIZED_ACCESS',
    label: 'Hacking / Unauthorized Access',
    shortDescription: 'Malware, account takeover, ransomware, or system intrusion.',
    complaintTemplateId: 'hackingUnauthorizedAccess',
  },
  ORGANIZED_CRIME: {
    id: 'ORGANIZED_CRIME',
    label: 'Organized Crime / Syndicates',
    shortDescription: 'Coordinated criminal syndicates, fraud rings, and organized conspiracies.',
    complaintTemplateId: 'organizedCrime',
  },
  OTHER: {
    id: 'OTHER',
    label: 'Other Cybercrime',
    shortDescription: 'Cyber incidents not matching a specific category above.',
    complaintTemplateId: 'generic',
  },
};

export function isCrimeCategory(value: string): value is CrimeCategory {
  return (CRIME_CATEGORIES as string[]).includes(value);
}
