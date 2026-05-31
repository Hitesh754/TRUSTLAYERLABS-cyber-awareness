import type { CrimeCategory } from '../../../data/legalProfiles/types';
import type { CyberJusticeExtractedFacts } from '../types/conversation.types';

export type CaseFieldTarget =
  | 'incident.narrative'
  | 'incident.occurredAt'
  | 'incident.platform'
  | 'financialLoss.amount'
  | 'financialLoss.transactionId'
  | 'financialLoss.bankName'
  | 'financialLoss.recoveryStatus'
  | 'suspect.name'
  | 'suspect.phoneNumbers'
  | 'suspect.emails'
  | 'suspect.upiIds'
  | 'suspect.urls'
  | 'suspect.walletAddresses'
  | 'evidence.references';

export interface DynamicQuestionInput {
  crimeCategory: CrimeCategory | null;
  extractedFacts: CyberJusticeExtractedFacts;
  missingFields: CaseFieldTarget[];
  answeredQuestionIds: string[];
}

export interface NextBestQuestion {
  id: string;
  prompt: string;
  targetField: CaseFieldTarget;
  reason: string;
  priority: number;
  required: boolean;
  quickReplies?: string[];
}

interface QuestionRule {
  id: string;
  crimeCategories: CrimeCategory[];
  targetField: CaseFieldTarget;
  reason: string;
  priority: number;
  required: boolean;
  promptKey?: string; // translation key
  quickReplies?: string[];
}

import i18n from '../../../i18n';

const t = i18n.getFixedT(null, 'translation');

const rules: QuestionRule[] = [
  {
    id: 'upi-utr',
    crimeCategories: ['UPI_FRAUD', 'OTP_FRAUD', 'QR_SCAM'],
    targetField: 'financialLoss.transactionId',
    promptKey: 'cyberJustice.questions.upi-utr',
    reason: 'cyberJustice.ui.engines.questions.reasons.upi-utr',
    priority: 100,
    required: true,
  },
  {
    id: 'upi-amount',
    crimeCategories: ['UPI_FRAUD', 'OTP_FRAUD', 'QR_SCAM', 'INVESTMENT_SCAM', 'CRYPTO_FRAUD'],
    targetField: 'financialLoss.amount',
    promptKey: 'cyberJustice.questions.upi-amount',
    reason: 'cyberJustice.ui.engines.questions.reasons.upi-amount',
    priority: 95,
    required: true,
  },
  {
    id: 'phishing-url',
    crimeCategories: ['PHISHING', 'IDENTITY_THEFT', 'DATA_BREACH'],
    targetField: 'suspect.urls',
    promptKey: 'cyberJustice.questions.phishing-url',
    reason: 'cyberJustice.ui.engines.questions.reasons.phishing-url',
    priority: 100,
    required: true,
  },
  {
    id: 'phishing-email',
    crimeCategories: ['PHISHING', 'JOB_SCAM', 'IDENTITY_THEFT'],
    targetField: 'suspect.emails',
    promptKey: 'cyberJustice.questions.phishing-email',
    reason: 'cyberJustice.ui.engines.questions.reasons.phishing-email',
    priority: 85,
    required: false,
  },
  {
    id: 'sextortion-platform',
    crimeCategories: ['SEXTORTION', 'CYBER_STALKING', 'DEEPFAKE_IMPERSONATION'],
    targetField: 'incident.platform',
    promptKey: 'cyberJustice.questions.sextortion-platform',
    reason: 'cyberJustice.ui.engines.questions.reasons.sextortion-platform',
    priority: 100,
    required: true,
    quickReplies: ['WhatsApp', 'Instagram', 'Facebook', 'Telegram', 'Email'],
  },
  {
    id: 'suspect-phone',
    crimeCategories: ['UPI_FRAUD', 'OTP_FRAUD', 'SIM_SWAP', 'JOB_SCAM', 'OTHER'],
    targetField: 'suspect.phoneNumbers',
    promptKey: 'cyberJustice.questions.suspect-phone',
    reason: 'cyberJustice.ui.engines.questions.reasons.suspect-phone',
    priority: 80,
    required: false,
  },
  {
    id: 'bank-name',
    crimeCategories: ['UPI_FRAUD', 'OTP_FRAUD', 'INVESTMENT_SCAM', 'QR_SCAM'],
    targetField: 'financialLoss.bankName',
    promptKey: 'cyberJustice.questions.bank-name',
    reason: 'cyberJustice.ui.engines.questions.reasons.bank-name',
    priority: 75,
    required: false,
  },
  {
    id: 'evidence-refs',
    crimeCategories: [
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
      'OTHER',
    ],
    targetField: 'evidence.references',
    promptKey: 'cyberJustice.questions.evidence-refs',
    reason: 'cyberJustice.ui.engines.questions.reasons.evidence-refs',
    priority: 70,
    required: false,
  },
];

export function getMissingFieldsForCase(input: {
  crimeCategory: CrimeCategory | null;
  facts: CyberJusticeExtractedFacts;
}): CaseFieldTarget[] {
  const missing: CaseFieldTarget[] = [];
  const { crimeCategory, facts } = input;
  const entities = facts.extractedEntities;

  if (!facts.incident?.narrative) missing.push('incident.narrative');
  if (!facts.incident?.platform && ['SEXTORTION', 'CYBER_STALKING', 'DEEPFAKE_IMPERSONATION'].includes(crimeCategory ?? '')) {
    missing.push('incident.platform');
  }
  if (!facts.financialLoss?.amount && ['UPI_FRAUD', 'OTP_FRAUD', 'QR_SCAM', 'INVESTMENT_SCAM', 'CRYPTO_FRAUD'].includes(crimeCategory ?? '')) {
    missing.push('financialLoss.amount');
  }
  if (!facts.financialLoss?.transactionId && !(entities?.utrIds?.length ?? 0)) missing.push('financialLoss.transactionId');
  if (!facts.financialLoss?.bankName && ['UPI_FRAUD', 'OTP_FRAUD', 'QR_SCAM'].includes(crimeCategory ?? '')) missing.push('financialLoss.bankName');
  if (!(entities?.urls?.length ?? 0) && ['PHISHING', 'IDENTITY_THEFT', 'DATA_BREACH'].includes(crimeCategory ?? '')) missing.push('suspect.urls');
  if (!(entities?.emails?.length ?? 0) && ['PHISHING', 'JOB_SCAM', 'IDENTITY_THEFT'].includes(crimeCategory ?? '')) missing.push('suspect.emails');
  if (!(entities?.phoneNumbers?.length ?? 0)) missing.push('suspect.phoneNumbers');
  if (!facts.evidence?.references.length) missing.push('evidence.references');

  return Array.from(new Set(missing));
}

export function getNextBestQuestion(input: DynamicQuestionInput): NextBestQuestion | null {
  if (!input.crimeCategory) {
    return {
      id: 'general-narrative',
      prompt: t('cyberJustice.questions.general-narrative'),
      targetField: 'incident.narrative',
      reason: t('cyberJustice.ui.engines.questions.reasons.general-narrative'),
      priority: 100,
      required: true,
    };
  }

  const candidates = rules
    .filter((rule) => rule.crimeCategories.includes(input.crimeCategory as CrimeCategory))
    .filter((rule) => input.missingFields.includes(rule.targetField))
    .filter((rule) => !input.answeredQuestionIds.includes(rule.id))
    .sort((a, b) => b.priority - a.priority);

  const selected = candidates[0] ?? null;
  if (!selected) return null;

  return {
    id: selected.id,
    prompt: t((selected as any).promptKey || 'cyberJustice.questions.general-narrative'),
    targetField: selected.targetField,
    reason: t(selected.reason as string),
    priority: selected.priority,
    required: selected.required,
    quickReplies: (selected as any).quickReplies,
  };
}
