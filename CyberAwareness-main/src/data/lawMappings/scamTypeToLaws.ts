import type { CrimeCategory } from '../legalProfiles/types';
import type { ScamTypeLawRefs } from './types';

export const SCAM_TYPE_TO_LAWS: Record<CrimeCategory, ScamTypeLawRefs> = {
  UPI_FRAUD: {
    crimeCategory: 'UPI_FRAUD',
    ipc: ['419', '420'],
    bns: ['318', '319'],
    itAct: ['66C', '66D'],
  },
  OTP_FRAUD: {
    crimeCategory: 'OTP_FRAUD',
    ipc: ['419', '420'],
    bns: ['318', '319'],
    itAct: ['66C', '66D'],
  },
  PHISHING: {
    crimeCategory: 'PHISHING',
    ipc: ['419', '420', '482'],
    bns: ['318', '319'],
    itAct: ['66C', '66D', '66', '84B', '84C'],
  },
  INVESTMENT_SCAM: {
    crimeCategory: 'INVESTMENT_SCAM',
    ipc: ['420', '406', '120B'],
    bns: ['318', '316', '61'],
    itAct: ['66D', '43A'],
  },
  CRYPTO_FRAUD: {
    crimeCategory: 'CRYPTO_FRAUD',
    ipc: ['420', '419', '120B'],
    bns: ['318', '319', '61'],
    itAct: ['66C', '66D', '43A'],
  },
  DEEPFAKE_IMPERSONATION: {
    crimeCategory: 'DEEPFAKE_IMPERSONATION',
    ipc: ['419', '499', '292'],
    bns: ['319', '356', '295'],
    itAct: ['66D', '66E', '67B'],
  },
  IDENTITY_THEFT: {
    crimeCategory: 'IDENTITY_THEFT',
    ipc: ['419', '468', '471', '472'],
    bns: ['319', '336', '338'],
    itAct: ['66C', '66D', '70'],
  },
  QR_SCAM: {
    crimeCategory: 'QR_SCAM',
    ipc: ['419', '420'],
    bns: ['318', '319'],
    itAct: ['66C', '66D'],
  },
  SIM_SWAP: {
    crimeCategory: 'SIM_SWAP',
    ipc: ['419', '420'],
    bns: ['318', '319'],
    itAct: ['66C', '66D'],
  },
  JOB_SCAM: {
    crimeCategory: 'JOB_SCAM',
    ipc: ['420', '419'],
    bns: ['318', '319'],
    itAct: ['66D'],
  },
  SEXTORTION: {
    crimeCategory: 'SEXTORTION',
    ipc: ['384', '506', '354A', '354B'],
    bns: ['127', '351'],
    itAct: ['66E', '67', '67A', '67B'],
  },
  CYBER_STALKING: {
    crimeCategory: 'CYBER_STALKING',
    ipc: ['354D', '509', '506', '354A', '354B'],
    bns: ['78', '79', '351'],
    itAct: ['66E', '67'],
  },
  DATA_BREACH: {
    crimeCategory: 'DATA_BREACH',
    ipc: ['406', '420'],
    bns: ['316', '318'],
    itAct: ['43', '43A', '66', '72', '72A'],
  },
  HACKING_UNAUTHORIZED_ACCESS: {
    crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
    ipc: ['378', '424', '120B'],
    bns: ['303', '316', '61'],
    itAct: ['43', '66', '66B', '69', '69B'],
  },
  ORGANIZED_CRIME: {
    crimeCategory: 'ORGANIZED_CRIME',
    ipc: ['120B', '34'],
    bns: ['111', '111(1)(i)'],
    itAct: ['43', '66', '69', '69B', '70', '70B'],
  },
  OTHER: {
    crimeCategory: 'OTHER',
    ipc: ['420'],
    bns: ['318'],
    itAct: ['66'],
  },
};

export function getLawRefsForCrimeCategory(category: CrimeCategory): ScamTypeLawRefs {
  return SCAM_TYPE_TO_LAWS[category];
}
