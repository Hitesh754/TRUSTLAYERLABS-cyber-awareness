import type { ReportingGuidance } from '../types';

const CYBER_CRIME_PORTAL = {
  name: 'National Cyber Crime Reporting Portal',
  url: 'https://cybercrime.gov.in',
};

const HELPLINE_1930 = '1930';

export function buildStandardReportingGuidance(options: {
  timeSensitiveNote?: string;
  extraChannels?: ReportingGuidance['secondaryChannels'];
  extraTips?: string[];
  extraSteps?: string[];
}): ReportingGuidance {
  return {
    primaryPortal: CYBER_CRIME_PORTAL,
    helpline: HELPLINE_1930,
    secondaryChannels: [
      {
        name: 'Nearest Cyber Crime Police Station',
        when: 'For FIR registration, seizures, or amounts exceeding portal limits',
      },
      {
        name: 'NPCI Dispute Portal',
        url: 'https://www.npci.org.in',
        when: 'For UPI/NEFT/IMPS transaction disputes within bank timelines',
      },
      ...(options.extraChannels ?? []),
    ],
    timeSensitiveNote: options.timeSensitiveNote,
    evidencePackagingTips: [
      'Save original screenshots with date, time, and sender details visible.',
      'Export chat logs and emails as PDF with headers intact.',
      'List all transaction IDs (UTR/RRN) in chronological order.',
      'Do not edit or crop evidence; provide originals where possible.',
      ...(options.extraTips ?? []),
    ],
    filingSteps: [
      'Register or log in at cybercrime.gov.in and select the appropriate complaint category.',
      'Upload evidence files under 5 MB each; split larger files if required.',
      'Note the acknowledgement number and save the PDF receipt.',
      'For financial fraud, simultaneously notify your bank fraud desk and request written complaint reference.',
      'Visit the nearest cyber cell with printed complaint, ID proof, and evidence if FIR is required.',
      ...(options.extraSteps ?? []),
    ],
  };
}

export const NATIONAL_EMERGENCY_ACTIONS = {
  financialUrgent: [
    'Call your bank fraud helpline immediately and request transaction hold.',
    'Dial National Cyber Crime Helpline 1930 for financial fraud guidance.',
    'File complaint at cybercrime.gov.in within 24 hours for best recovery prospects.',
  ],
  identityUrgent: [
    'Freeze or change passwords on all linked accounts from a clean device.',
    'Report SIM swap to your telecom provider and request SIM lock.',
    'File cybercrime.gov.in complaint and attach account takeover evidence.',
  ],
  harassmentUrgent: [
    'Do not pay extortion demands; payment rarely stops further demands.',
    'Preserve all messages, calls, and profiles without deleting.',
    'Report content to the platform and file cybercrime.gov.in complaint.',
  ],
};
