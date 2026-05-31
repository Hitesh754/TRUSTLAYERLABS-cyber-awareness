import type { CrimeCategory } from '../../data/legalProfiles/types';
import i18n from '../../i18n';

const t = i18n.getFixedT(null, 'translation');

export interface EmergencyAction {
  id: string;
  title: string;
  detail: string;
  urgent: boolean;
}

const DEFAULT: EmergencyAction[] = [
  { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preserveEvidence.title'), detail: t('cyberJustice.ui.engines.emergency.preserveEvidence.detail'), urgent: true },
  { id: 'contact-helpline', title: t('cyberJustice.ui.engines.emergency.contactHelpline.title'), detail: t('cyberJustice.ui.engines.emergency.contactHelpline.detail'), urgent: true },
];

const MAP: Partial<Record<CrimeCategory, EmergencyAction[]>> = {
  UPI_FRAUD: [
    { id: 'call-1930', title: t('cyberJustice.ui.engines.emergency.call1930.title'), detail: t('cyberJustice.ui.engines.emergency.call1930.detail'), urgent: true },
    { id: 'contact-bank', title: t('cyberJustice.ui.engines.emergency.contactBank.title'), detail: t('cyberJustice.ui.engines.emergency.contactBank.detail'), urgent: true },
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preserveEvidence.title'), detail: t('cyberJustice.ui.engines.emergency.preserveEvidence.detail'), urgent: true },
  ],
  OTP_FRAUD: [
    { id: 'call-1930', title: t('cyberJustice.ui.engines.emergency.call1930.title'), detail: t('cyberJustice.ui.engines.emergency.otpCall.detail'), urgent: true },
    { id: 'contact-bank', title: t('cyberJustice.ui.engines.emergency.notifyBank.title'), detail: t('cyberJustice.ui.engines.emergency.notifyBank.detail'), urgent: true },
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preserveEvidence.title'), detail: t('cyberJustice.ui.engines.emergency.preserveEvidence.detail'), urgent: true },
  ],
  PHISHING: [
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preservePhishing.title'), detail: t('cyberJustice.ui.engines.emergency.preservePhishing.detail'), urgent: true },
    { id: 'do-not-click', title: t('cyberJustice.ui.engines.emergency.doNotClick.title'), detail: t('cyberJustice.ui.engines.emergency.doNotClick.detail'), urgent: true },
    { id: 'report-platform', title: t('cyberJustice.ui.engines.emergency.reportPlatform.title'), detail: t('cyberJustice.ui.engines.emergency.reportPlatform.detail'), urgent: false },
  ],
  SEXTORTION: [
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preserveEvidence.title'), detail: t('cyberJustice.ui.engines.emergency.preserveEvidence.detail'), urgent: true },
    { id: 'do-not-pay', title: t('cyberJustice.ui.engines.emergency.doNotPay.title'), detail: t('cyberJustice.ui.engines.emergency.doNotPay.detail'), urgent: true },
    { id: 'contact-police', title: t('cyberJustice.ui.engines.emergency.contactPolice.title'), detail: t('cyberJustice.ui.engines.emergency.contactPolice.detail'), urgent: true },
  ],
  CYBER_STALKING: [
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preserveEvidence.title'), detail: t('cyberJustice.ui.engines.emergency.preserveEvidence.detail'), urgent: true },
    { id: 'block-report', title: t('cyberJustice.ui.engines.emergency.blockReport.title'), detail: t('cyberJustice.ui.engines.emergency.blockReport.detail'), urgent: false },
    { id: 'contact-police', title: t('cyberJustice.ui.engines.emergency.contactPolice.title'), detail: t('cyberJustice.ui.engines.emergency.contactPolice.detail'), urgent: true },
  ],
  DEEPFAKE_IMPERSONATION: [
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.preserveEvidence.title'), detail: t('cyberJustice.ui.engines.emergency.preserveEvidence.detail'), urgent: true },
    { id: 'report-platform', title: t('cyberJustice.ui.engines.emergency.reportPlatform.title'), detail: t('cyberJustice.ui.engines.emergency.reportPlatform.detail'), urgent: true },
    { id: 'contact-police', title: t('cyberJustice.ui.engines.emergency.contactPolice.title'), detail: t('cyberJustice.ui.engines.emergency.contactPolice.detail'), urgent: true },
  ],
  IDENTITY_THEFT: [
    { id: 'freeze-accounts', title: t('cyberJustice.ui.engines.emergency.freezeAccounts.title'), detail: t('cyberJustice.ui.engines.emergency.freezeAccounts.detail'), urgent: true },
    { id: 'contact-police', title: t('cyberJustice.ui.engines.emergency.contactPolice.title'), detail: t('cyberJustice.ui.engines.emergency.contactPolice.detail'), urgent: true },
    { id: 'preserve-evidence', title: t('cyberJustice.ui.engines.emergency.collectProof.title'), detail: t('cyberJustice.ui.engines.emergency.collectProof.detail'), urgent: true },
  ],
  DATA_BREACH: [
    { id: 'change-credentials', title: t('cyberJustice.ui.engines.emergency.changeCredentials.title'), detail: t('cyberJustice.ui.engines.emergency.changeCredentials.detail'), urgent: true },
    { id: 'notify-platforms', title: t('cyberJustice.ui.engines.emergency.notifyPlatforms.title'), detail: t('cyberJustice.ui.engines.emergency.notifyPlatforms.detail'), urgent: true },
    { id: 'report-cert', title: t('cyberJustice.ui.engines.emergency.reportCert.title'), detail: t('cyberJustice.ui.engines.emergency.reportCert.detail'), urgent: true },
  ],
  HACKING_UNAUTHORIZED_ACCESS: [
    { id: 'isolate-systems', title: t('cyberJustice.ui.engines.emergency.isolateSystems.title'), detail: t('cyberJustice.ui.engines.emergency.isolateSystems.detail'), urgent: true },
    { id: 'preserve-logs', title: t('cyberJustice.ui.engines.emergency.preserveLogs.title'), detail: t('cyberJustice.ui.engines.emergency.preserveLogs.detail'), urgent: true },
    { id: 'report-cert', title: t('cyberJustice.ui.engines.emergency.reportCert.title'), detail: t('cyberJustice.ui.engines.emergency.reportCert.detail'), urgent: true },
  ],
};

export function getEmergencyActions(category: CrimeCategory | null): EmergencyAction[] {
  if (!category) return DEFAULT;
  return MAP[category] ?? DEFAULT;
}
