import type { CrimeCategory } from '../../data/legalProfiles/types';

export type ChannelType = 'portal' | 'phone' | 'email' | 'local' | 'other';

export interface ReportingChannel {
  name: string;
  type: ChannelType;
  endpoint?: string;
  notes?: string;
}

export interface AuthorityRecommendationResult {
  primary: ReportingChannel[];
  secondary: ReportingChannel[];
}

import i18n from '../../i18n';

const t = i18n.getFixedT(null, 'translation');

const DEFAULT: AuthorityRecommendationResult = {
  primary: [
    { name: t('cyberJustice.ui.engines.authority.nationalPortal.name'), type: 'portal', endpoint: 'https://cybercrime.gov.in', notes: t('cyberJustice.ui.engines.authority.nationalPortal.notes') },
    { name: t('cyberJustice.ui.engines.authority.cyberPolice.name'), type: 'local', notes: t('cyberJustice.ui.engines.authority.cyberPolice.notes') },
    { name: t('cyberJustice.ui.engines.authority.nationalHelpline.name'), type: 'phone', endpoint: '1930', notes: t('cyberJustice.ui.engines.authority.nationalHelpline.notes') },
  ],
  secondary: [{ name: t('cyberJustice.ui.engines.authority.cert.name'), type: 'portal', endpoint: 'https://www.cert-in.org.in', notes: t('cyberJustice.ui.engines.authority.cert.notes') }],
};

const MAP: Partial<Record<CrimeCategory, AuthorityRecommendationResult>> = {
  UPI_FRAUD: DEFAULT,
  OTP_FRAUD: DEFAULT,
  PHISHING: {
    primary: [
      { name: t('cyberJustice.ui.engines.authority.nationalPortal.name'), type: 'portal', endpoint: 'https://cybercrime.gov.in', notes: t('cyberJustice.ui.engines.authority.phishing.notes') },
      { name: t('cyberJustice.ui.engines.authority.cyberPolice.name'), type: 'local', notes: t('cyberJustice.ui.engines.authority.phishing.localNotes') },
      { name: t('cyberJustice.ui.engines.authority.cert.name'), type: 'portal', endpoint: 'https://www.cert-in.org.in', notes: t('cyberJustice.ui.engines.authority.cert.phishingNotes') },
      { name: t('cyberJustice.ui.engines.authority.nationalHelpline.name'), type: 'phone', endpoint: '1930' },
    ],
    secondary: DEFAULT.secondary,
  },
  SEXTORTION: DEFAULT,
  CYBER_STALKING: DEFAULT,
  DEEPFAKE_IMPERSONATION: DEFAULT,
  IDENTITY_THEFT: DEFAULT,
  DATA_BREACH: {
    primary: [
      { name: t('cyberJustice.ui.engines.authority.cert.name'), type: 'portal', endpoint: 'https://www.cert-in.org.in', notes: t('cyberJustice.ui.engines.authority.dataBreach.certNotes') },
      { name: t('cyberJustice.ui.engines.authority.nationalPortal.name'), type: 'portal', endpoint: 'https://cybercrime.gov.in' },
      { name: t('cyberJustice.ui.engines.authority.cyberPolice.name'), type: 'local', notes: t('cyberJustice.ui.engines.authority.dataBreach.localNotes') },
    ],
    secondary: DEFAULT.secondary,
  },
  HACKING_UNAUTHORIZED_ACCESS: {
    primary: [
      { name: t('cyberJustice.ui.engines.authority.cert.name'), type: 'portal', endpoint: 'https://www.cert-in.org.in', notes: t('cyberJustice.ui.engines.authority.hacking.certNotes') },
      { name: t('cyberJustice.ui.engines.authority.nationalPortal.name'), type: 'portal', endpoint: 'https://cybercrime.gov.in' },
      { name: t('cyberJustice.ui.engines.authority.cyberPolice.name'), type: 'local', notes: t('cyberJustice.ui.engines.authority.hacking.localNotes') },
    ],
    secondary: DEFAULT.secondary,
  },
};

export function getAuthorityRecommendations(category: CrimeCategory | null): AuthorityRecommendationResult {
  if (!category) return DEFAULT;
  return MAP[category] ?? DEFAULT;
}
