import type { LegalProfileOverride } from '../types';

/** Scam-specific profile overrides keyed by scamDatabase.id */
export const SCAM_PROFILE_OVERRIDES: Record<string, LegalProfileOverride> = {
  'upi-fraud': {
    scamId: 'upi-fraud',
    keywords: ['upi', 'vpa', 'collect', 'phonepe', 'gpay', 'paytm', 'bhim'],
    urgencyLevel: 'critical',
    immediateActions: [
      'Call bank fraud helpline and request transaction hold immediately.',
      'Dial 1930 and report within 1 hour for financial fraud.',
      'File at cybercrime.gov.in with UTR and beneficiary VPA.',
    ],
  },
  'otp-fraud': {
    scamId: 'otp-fraud',
    crimeCategory: 'OTP_FRAUD',
    keywords: ['otp', 'verification code', 'bank otp', 'sms code'],
    urgencyLevel: 'critical',
  },
  'sim-swap-attack': {
    scamId: 'sim-swap-attack',
    crimeCategory: 'SIM_SWAP',
    urgencyLevel: 'critical',
    immediateActions: [
      'Visit telecom store immediately with ID to block unauthorized SIM.',
      'File cybercrime.gov.in complaint and notify all banks.',
    ],
  },
  'sim-swap-fraud': {
    scamId: 'sim-swap-fraud',
    crimeCategory: 'SIM_SWAP',
    urgencyLevel: 'critical',
  },
  'fake-crypto-exchange': {
    scamId: 'fake-crypto-exchange',
    crimeCategory: 'CRYPTO_FRAUD',
    keywords: ['fake exchange', 'withdrawal blocked', 'deposit only'],
    urgencyLevel: 'critical',
  },
  'seed-phrase-theft': {
    scamId: 'seed-phrase-theft',
    crimeCategory: 'CRYPTO_FRAUD',
    keywords: ['seed phrase', 'recovery phrase', 'private key', '12 words', '24 words'],
    urgencyLevel: 'critical',
    immediateActions: [
      'Transfer remaining assets to a new wallet immediately if seed was exposed.',
      'Revoke all token approvals on affected chains.',
    ],
  },
  'investment-scam': {
    scamId: 'investment-scam',
    crimeCategory: 'INVESTMENT_SCAM',
    keywords: ['guaranteed returns', 'trading platform', 'withdrawal fee'],
    urgencyLevel: 'high',
  },
  'telegram-signal-group': {
    scamId: 'telegram-signal-group',
    crimeCategory: 'INVESTMENT_SCAM',
    keywords: ['telegram', 'signal group', 'stock tips', 'paid group'],
  },
  'deepfake-scam': {
    scamId: 'deepfake-scam',
    crimeCategory: 'DEEPFAKE_IMPERSONATION',
    urgencyLevel: 'critical',
  },
  'sextortion': {
    scamId: 'sextortion',
    crimeCategory: 'SEXTORTION',
    urgencyLevel: 'critical',
    immediateActions: [
      'Do not pay — payment rarely ends extortion.',
      'Preserve all chats and profiles; file cybercrime.gov.in complaint.',
      'Report content to platform for takedown.',
    ],
  },
  'phishing': {
    scamId: 'phishing',
    crimeCategory: 'PHISHING',
    keywords: ['phishing email', 'fake login', 'credential harvest'],
  },
  'qr-scam': {
    scamId: 'qr-scam',
    crimeCategory: 'QR_SCAM',
    keywords: ['tampered qr', 'replaced qr', 'wrong beneficiary'],
    urgencyLevel: 'high',
  },
  'fake-job': {
    scamId: 'fake-job',
    crimeCategory: 'JOB_SCAM',
    keywords: ['registration fee', 'fake offer letter', 'interview fee'],
  },
  'ransomware': {
    scamId: 'ransomware',
    crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
    urgencyLevel: 'critical',
    immediateActions: [
      'Isolate infected systems from network immediately.',
      'Do not pay ransom without law enforcement guidance.',
      'Preserve ransom note and file hashes for investigation.',
    ],
  },
  'data-breach': {
    scamId: 'data-breach',
    crimeCategory: 'DATA_BREACH',
    keywords: ['data leak', 'breach notification', 'exposed records'],
  },
  'child-exploitation': {
    scamId: 'child-exploitation',
    crimeCategory: 'SEXTORTION',
    urgencyLevel: 'critical',
    immediateActions: [
      'Preserve all chats, images and URLs; do not delete evidence.',
      'Report to NCMEC CyberTipline and file with local police/NCRB CCTNS portal immediately.',
      'Contact platform abuse team for expedited takedown of material.',
    ],
  },
  'cyber-terrorism': {
    scamId: 'cyber-terrorism',
    crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
    urgencyLevel: 'critical',
    immediateActions: [
      'Preserve system logs and isolate affected infrastructure.',
      'Notify CERT-In and refer to NIA/CBI as required for national-security incidents.',
    ],
    complaintTemplateId: 'cyberTerrorism',
  },
  'human-trafficking': {
    scamId: 'human-trafficking',
    crimeCategory: 'OTHER',
    urgencyLevel: 'critical',
    immediateActions: [
      'Preserve all communications and location data.',
      'Contact NHRC and local police; escalate to anti-trafficking units where available.',
    ],
  },
  'bec': {
    scamId: 'bec',
    crimeCategory: 'PHISHING',
    urgencyLevel: 'critical',
    immediateActions: [
      'Contact bank immediately and request SWIFT recall if international transfer.',
      'Notify RBI fraud cell and preserve all email headers and payment instructions.',
    ],
  },
  'atm-skimming': {
    scamId: 'atm-skimming',
    crimeCategory: 'UPI_FRAUD',
    urgencyLevel: 'critical',
    immediateActions: [
      'Block card immediately and contact issuing bank for chargeback options.',
      'File FIR and notify bank fraud desk with ATM location and timestamps.',
    ],
  },
  'card-cloning': {
    scamId: 'card-cloning',
    crimeCategory: 'UPI_FRAUD',
    urgencyLevel: 'critical',
    immediateActions: ['Block card immediately and contact bank for dispute and chargeback.'],
  },
  'fake-loan-app': {
    scamId: 'fake-loan-app',
    crimeCategory: 'UPI_FRAUD',
    urgencyLevel: 'high',
    immediateActions: [
      'Report app to Play Store/App Store and to RBI Sachet portal where applicable.',
      'Preserve screenshots of the app and transaction attempts.',
    ],
  },
  'internet-banking-fraud': {
    scamId: 'internet-banking-fraud',
    crimeCategory: 'UPI_FRAUD',
    urgencyLevel: 'critical',
    immediateActions: [
      'Freeze net-banking access with the bank and change all credentials.',
      'File complaint with bank fraud cell and cybercrime portal.',
    ],
  },
  'romance-scam': {
    scamId: 'romance-scam',
    crimeCategory: 'IDENTITY_THEFT',
    urgencyLevel: 'high',
    immediateActions: [
      'Preserve chat logs and bank/payment evidence.',
      'Notify platform and bank; consider reporting to local police.',
    ],
  },
  'supply-chain-attack': {
    scamId: 'supply-chain-attack',
    crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
    urgencyLevel: 'high',
    immediateActions: [
      'Notify CERT-In and affected vendors; preserve software/artifact hashes.',
      'Isolate affected build systems and revoke compromised keys.',
    ],
  },
  'courier-parcel': {
    scamId: 'courier-parcel',
    crimeCategory: 'OTHER',
    urgencyLevel: 'medium',
    immediateActions: ['Report to I4C portal and local police; preserve shipment details and messages.'],
  },
  'electricity-bill': {
    scamId: 'electricity-bill',
    crimeCategory: 'OTHER',
    urgencyLevel: 'medium',
    immediateActions: ['Contact DISCOM fraud helpline and preserve bill copies and transaction records.'],
  },
  'fake-government-scheme': {
    scamId: 'fake-government-scheme',
    crimeCategory: 'OTHER',
    urgencyLevel: 'high',
    immediateActions: ['Refer to PIB fact-check and report to platform for takedown; file complaint with local police.'],
  },
  'dark-web-crime': {
    scamId: 'dark-web-crime',
    crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
    urgencyLevel: 'high',
    immediateActions: ['Notify NCB and CERT-In; preserve marketplace links and payment trails.'],
  },
  'social-engineering': {
    scamId: 'social-engineering',
    crimeCategory: 'PHISHING',
    urgencyLevel: 'medium',
    immediateActions: ['Report phishing attempts to platform and affected organizations; preserve messages.'],
  },
};

export function getScamProfileOverride(scamId: string): LegalProfileOverride | undefined {
  return SCAM_PROFILE_OVERRIDES[scamId];
}
