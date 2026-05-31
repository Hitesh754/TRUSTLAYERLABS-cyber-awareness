import type { ScamCategory } from '../scamDatabase';
import type { CategoryDefaultProfile } from './types';

export const CATEGORY_DEFAULTS: Record<ScamCategory, CategoryDefaultProfile> = {
  'Financial-Fraud': {
    scamCategory: 'Financial-Fraud',
    crimeCategory: 'OTHER',
    keywords: ['money', 'transfer', 'bank', 'payment', 'loan', 'investment', 'transaction', 'insurance', 'claim'],
    urgencyLevel: 'high',
  },
  'Phishing-Social-Engineering': {
    scamCategory: 'Phishing-Social-Engineering',
    crimeCategory: 'PHISHING',
    keywords: ['phishing', 'link', 'email', 'sms', 'otp', 'login', 'password', 'fake', 'impersonation'],
    urgencyLevel: 'high',
  },
  'Technical-Attacks': {
    scamCategory: 'Technical-Attacks',
    crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
    keywords: ['hack', 'malware', 'ransomware', 'virus', 'breach', 'unauthorized', 'exploit'],
    urgencyLevel: 'high',
  },
  'Crypto-Fraud': {
    scamCategory: 'Crypto-Fraud',
    crimeCategory: 'CRYPTO_FRAUD',
    keywords: ['crypto', 'bitcoin', 'wallet', 'blockchain', 'token', 'nft', 'defi', 'web3'],
    urgencyLevel: 'high',
  },
  'Identity-Crimes': {
    scamCategory: 'Identity-Crimes',
    crimeCategory: 'IDENTITY_THEFT',
    keywords: ['identity', 'aadhaar', 'pan', 'kyc', 'credential', 'sim', 'impersonation'],
    urgencyLevel: 'high',
  },
};

export function getCategoryDefault(scamCategory: ScamCategory): CategoryDefaultProfile {
  return CATEGORY_DEFAULTS[scamCategory];
}
