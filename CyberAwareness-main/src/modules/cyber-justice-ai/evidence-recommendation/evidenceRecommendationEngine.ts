import type { CrimeCategory } from '../../../data/legalProfiles/types';
import i18n from '../../../i18n';

const t = i18n.getFixedT(null, 'translation');
import type { CyberJusticeCase } from '../types/cyberJustice.types';
import type { EvidenceType, EvidenceVaultItem } from '../types/evidenceVault.types';

export type EvidenceRecommendationPriority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface MissingEvidenceRecommendation {
  id: string;
  evidenceType: EvidenceType;
  title: string;
  description: string;
  reason: string;
  priority: EvidenceRecommendationPriority;
  required: boolean;
  satisfiedBy: EvidenceType[];
}

export interface EvidenceSatisfiedItem {
  ruleId: string;
  evidenceType: EvidenceType;
  evidenceIds: string[];
  title: string;
}

export interface EvidenceRecommendationResult {
  crimeCategory: CrimeCategory | null;
  missingEvidence: MissingEvidenceRecommendation[];
  satisfiedEvidence: EvidenceSatisfiedItem[];
  completenessScore: number;
}

interface EvidenceRecommendationRule {
  id: string;
  crimeCategories: CrimeCategory[];
  acceptedEvidenceTypes: EvidenceType[];
  title: string;
  description: string;
  reason: string;
  priority: EvidenceRecommendationPriority;
  required: boolean;
  condition?: (caseData: CyberJusticeCase) => boolean;
}

const rules: EvidenceRecommendationRule[] = [
  {
    id: 'upi-transaction-screenshot',
    crimeCategories: ['UPI_FRAUD', 'OTP_FRAUD', 'QR_SCAM'],
    acceptedEvidenceTypes: ['SCREENSHOT'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.upi-transaction-screenshot.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.upi-transaction-screenshot.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.upi-transaction-screenshot.reason'),
    priority: 'CRITICAL',
    required: true,
  },
  {
    id: 'upi-bank-statement',
    crimeCategories: ['UPI_FRAUD', 'OTP_FRAUD', 'QR_SCAM', 'INVESTMENT_SCAM'],
    acceptedEvidenceTypes: ['BANK_STATEMENT', 'PDF'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.upi-bank-statement.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.upi-bank-statement.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.upi-bank-statement.reason'),
    priority: 'HIGH',
    required: true,
  },
  {
    id: 'phishing-page-record',
    crimeCategories: ['PHISHING', 'IDENTITY_THEFT', 'DATA_BREACH'],
    acceptedEvidenceTypes: ['SCREENSHOT', 'PDF', 'EMAIL'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.phishing-page-record.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.phishing-page-record.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.phishing-page-record.reason'),
    priority: 'CRITICAL',
    required: true,
  },
  {
    id: 'sextortion-threat-record',
    crimeCategories: ['SEXTORTION', 'CYBER_STALKING'],
    acceptedEvidenceTypes: ['CHAT', 'SCREENSHOT', 'VIDEO', 'AUDIO'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.sextortion-threat-record.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.sextortion-threat-record.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.sextortion-threat-record.reason'),
    priority: 'CRITICAL',
    required: true,
  },
  {
    id: 'profile-impersonation-proof',
    crimeCategories: ['DEEPFAKE_IMPERSONATION', 'IDENTITY_THEFT', 'JOB_SCAM'],
    acceptedEvidenceTypes: ['SCREENSHOT', 'PDF'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.profile-impersonation-proof.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.profile-impersonation-proof.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.profile-impersonation-proof.reason'),
    priority: 'HIGH',
    required: true,
  },
  {
    id: 'crypto-wallet-transaction',
    crimeCategories: ['CRYPTO_FRAUD', 'INVESTMENT_SCAM'],
    acceptedEvidenceTypes: ['SCREENSHOT', 'PDF', 'BANK_STATEMENT'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.crypto-wallet-transaction.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.crypto-wallet-transaction.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.crypto-wallet-transaction.reason'),
    priority: 'HIGH',
    required: true,
  },
  {
    id: 'communication-history',
    crimeCategories: [
      'UPI_FRAUD',
      'OTP_FRAUD',
      'PHISHING',
      'INVESTMENT_SCAM',
      'CRYPTO_FRAUD',
      'JOB_SCAM',
      'SIM_SWAP',
      'OTHER',
    ],
    acceptedEvidenceTypes: ['CHAT', 'EMAIL', 'SCREENSHOT'],
    title: t('cyberJustice.ui.engines.evidence.recommendations.communication-history.title'),
    description: t('cyberJustice.ui.engines.evidence.recommendations.communication-history.description'),
    reason: t('cyberJustice.ui.engines.evidence.recommendations.communication-history.reason'),
    priority: 'MEDIUM',
    required: false,
  },
];

const priorityRank: Record<EvidenceRecommendationPriority, number> = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

export function getEvidenceRecommendations(input: {
  crimeCategory: CrimeCategory | null;
  caseData: CyberJusticeCase;
  uploadedEvidence: EvidenceVaultItem[];
}): EvidenceRecommendationResult {
  const activeRules = rules.filter((rule) => {
    if (!input.crimeCategory) return rule.id === 'communication-history';
    return rule.crimeCategories.includes(input.crimeCategory) && (!rule.condition || rule.condition(input.caseData));
  });
  const missingEvidence: MissingEvidenceRecommendation[] = [];
  const satisfiedEvidence: EvidenceSatisfiedItem[] = [];

  activeRules.forEach((rule) => {
    const matches = input.uploadedEvidence.filter((item) => rule.acceptedEvidenceTypes.includes(item.type));
    if (matches.length) {
      satisfiedEvidence.push({
        ruleId: rule.id,
        evidenceType: matches[0].type,
        evidenceIds: matches.map((item) => item.id),
        title: rule.title,
      });
      return;
    }

    missingEvidence.push({
      id: rule.id,
      evidenceType: rule.acceptedEvidenceTypes[0],
      title: rule.title,
      description: rule.description,
      reason: rule.reason,
      priority: rule.priority,
      required: rule.required,
      satisfiedBy: rule.acceptedEvidenceTypes,
    });
  });

  const requiredRules = activeRules.filter((rule) => rule.required);
  const satisfiedRequired = requiredRules.filter((rule) => satisfiedEvidence.some((item) => item.ruleId === rule.id));

  return {
    crimeCategory: input.crimeCategory,
    missingEvidence: missingEvidence.sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority]),
    satisfiedEvidence,
    completenessScore: requiredRules.length ? Math.round((satisfiedRequired.length / requiredRules.length) * 100) : 100,
  };
}
