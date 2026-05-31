import type { LegalProfileCore } from '../types';
import { buildStandardReportingGuidance, NATIONAL_EMERGENCY_ACTIONS } from '../shared/reportingDefaults';

export const sextortionProfileCore: LegalProfileCore = {
  id: 'SEXTORTION',
  crimeCategory: 'SEXTORTION',
  scamCategory: 'Phishing-Social-Engineering',
  displayName: 'Sextortion / Online Blackmail',
  description: 'Coercion using intimate images, video calls, or threats of exposure to demand money.',
  keywords: [
    'sextortion', 'blackmail', 'nude', 'intimate', 'webcam', 'video call trap',
    'expose', 'morphed', 'revenge', 'extortion', ' compromising',
  ],
  keywordWeights: { sextortion: 0.35, blackmail: 0.25, extortion: 0.2, intimate: 0.15 },
  evidenceRequirements: [
    { type: 'CHAT_LOG', label: 'Extortion messages', required: true, description: 'All threatening messages and payment demands.' },
    { type: 'SCREENSHOT', label: 'Accused profiles/accounts', required: true, description: 'Social media or messaging profiles used.' },
    { type: 'TRANSACTION_RECEIPT', label: 'Payment proof if paid', required: false, description: 'Any payments made under coercion.' },
    { type: 'VIDEO_RECORDING', label: 'Recording of trap call', required: false, description: 'If video call was recorded by victim.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: NATIONAL_EMERGENCY_ACTIONS.harassmentUrgent,
  reportingGuidance: buildStandardReportingGuidance({
    timeSensitiveNote: 'Do not delete evidence or pay — report immediately to cybercrime.gov.in.',
    extraChannels: [{ name: 'Platform safety/report', when: 'Report profiles and content on Facebook, Instagram, WhatsApp' }],
  }),
  interviewExtensions: [
    { id: 'extortion-platform', prompt: 'Platform where contact began', fieldKey: 'extortionPlatform', inputType: 'text', required: true },
    { id: 'payment-demanded', prompt: 'Was payment demanded?', fieldKey: 'paymentDemanded', inputType: 'select', required: true, options: ['Yes', 'No', 'Threat only'] },
  ],
  complaintTemplateId: 'sextortion',
};

export const cyberStalkingProfileCore: LegalProfileCore = {
  id: 'CYBER_STALKING',
  crimeCategory: 'CYBER_STALKING',
  scamCategory: 'Phishing-Social-Engineering',
  displayName: 'Cyber Stalking / Online Harassment',
  description: 'Repeated unwanted contact, monitoring, threats, or harassment through digital channels.',
  keywords: [
    'stalking', 'harassment', 'cyber bullying', 'threatening messages', 'following online',
    'repeated calls', 'fake profiles', 'doxxing', 'abuse', 'trolling',
  ],
  keywordWeights: { stalking: 0.3, harassment: 0.25, bullying: 0.2, threatening: 0.15 },
  evidenceRequirements: [
    { type: 'CHAT_LOG', label: 'Harassment message history', required: true, description: 'Complete chat history showing pattern of harassment.' },
    { type: 'CALL_RECORDING', label: 'Threatening call logs/recordings', required: false, description: 'Call logs and recordings if available.' },
    { type: 'SCREENSHOT', label: 'Fake profiles/posts', required: true, description: 'Screenshots of harassing posts or impersonation profiles.' },
    { type: 'PLATFORM_REPORT', label: 'Platform complaint IDs', required: false, description: 'Reference numbers from social media abuse reports.' },
  ],
  urgencyLevel: 'high',
  immediateActions: [
    'Block accounts but preserve evidence via screenshots and exports before blocking.',
    'Enable privacy settings and restrict unknown contact.',
    'File cybercrime.gov.in complaint with chronological harassment log.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraTips: ['Maintain a dated log of each harassing incident.', 'Report violating content to platform trust & safety teams.'],
  }),
  interviewExtensions: [
    { id: 'harassment-duration', prompt: 'How long has harassment continued?', fieldKey: 'harassmentDuration', inputType: 'text', required: true },
    { id: 'know-accused', prompt: 'Do you know the harasser?', fieldKey: 'knowAccused', inputType: 'select', required: true, options: ['Yes', 'No', 'Suspect only'] },
  ],
  complaintTemplateId: 'cyberStalking',
};

export const dataBreachProfileCore: LegalProfileCore = {
  id: 'DATA_BREACH',
  crimeCategory: 'DATA_BREACH',
  scamCategory: 'Identity-Crimes',
  displayName: 'Data Breach / Unauthorized Data Misuse',
  description: 'Unauthorized access, leak, sale, or misuse of personal or organizational data.',
  keywords: [
    'data breach', 'leak', 'database', 'personal data exposed', 'privacy violation',
    'dark web', 'credentials leaked', 'insider', 'unauthorized access data',
  ],
  keywordWeights: { 'data breach': 0.35, leak: 0.25, 'personal data': 0.2 },
  evidenceRequirements: [
    { type: 'EMAIL', label: 'Breach notification', required: true, description: 'Emails or notices about data exposure.' },
    { type: 'SCREENSHOT', label: 'Evidence of leaked data', required: true, description: 'Screenshots showing your data on unauthorized sites.' },
    { type: 'PLATFORM_REPORT', label: 'Organization breach report', required: false, description: 'Ticket with data fiduciary or company.' },
    { type: 'OTHER', label: 'Affected data categories', required: true, description: 'List of data types exposed (email, Aadhaar, health, etc.).' },
  ],
  urgencyLevel: 'high',
  immediateActions: [
    'Change passwords for all affected services immediately.',
    'Enable fraud alerts on bank and credit accounts.',
    'Notify the data fiduciary in writing and file cybercrime.gov.in complaint.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraChannels: [{ name: 'CERT-In', url: 'https://www.cert-in.org.in', when: 'For significant organizational or infrastructure breaches' }],
  }),
  interviewExtensions: [
    { id: 'data-types', prompt: 'What data was exposed or misused?', fieldKey: 'dataTypes', inputType: 'textarea', required: true },
    { id: 'organization', prompt: 'Organization that held the data', fieldKey: 'organization', inputType: 'text', required: false },
  ],
  complaintTemplateId: 'dataBreach',
};

export const hackingUnauthorizedAccessProfileCore: LegalProfileCore = {
  id: 'HACKING_UNAUTHORIZED_ACCESS',
  crimeCategory: 'HACKING_UNAUTHORIZED_ACCESS',
  scamCategory: 'Technical-Attacks',
  displayName: 'Hacking / Unauthorized Access',
  description: 'Malware, ransomware, account takeover, or unauthorized system access.',
  keywords: [
    'hacked', 'malware', 'ransomware', 'virus', 'trojan', 'unauthorized access',
    'account takeover', 'rootkit', 'exploit', 'brute force', 'keylogger', 'phishing malware',
  ],
  keywordWeights: { hacked: 0.25, ransomware: 0.25, malware: 0.2, 'unauthorized access': 0.2 },
  evidenceRequirements: [
    { type: 'OTHER', label: 'Malware sample or hash', required: false, description: 'File hash or quarantined sample if safely available.' },
    { type: 'EMAIL', label: 'Ransom/threat emails', required: false, description: 'Ransom notes or attacker communications.' },
    { type: 'SCREENSHOT', label: 'Compromise indicators', required: true, description: 'Login alerts, ransomware screens, or defaced pages.' },
    { type: 'PLATFORM_REPORT', label: 'Access logs', required: false, description: 'Server or account access logs showing intrusion.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: [
    'Disconnect affected device from network immediately.',
    'Do not pay ransomware without law enforcement consultation.',
    'Preserve logs and file cybercrime.gov.in complaint; consider CERT-In reporting for organizations.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraChannels: [{ name: 'CERT-In Incident Reporting', url: 'https://www.cert-in.org.in', when: 'For organizational systems or critical infrastructure' }],
  }),
  interviewExtensions: [
    { id: 'attack-type', prompt: 'Type of attack observed', fieldKey: 'attackType', inputType: 'select', required: true, options: ['Ransomware', 'Account takeover', 'Malware infection', 'Website defacement', 'Unauthorized remote access', 'Other'] },
  ],
  complaintTemplateId: 'hackingUnauthorizedAccess',
};

export const otherProfileCore: LegalProfileCore = {
  id: 'OTHER',
  crimeCategory: 'OTHER',
  scamCategory: 'Phishing-Social-Engineering',
  displayName: 'Other Cybercrime',
  description: 'Cyber incidents not matching a specific category; general cheating and IT Act provisions apply.',
  keywords: ['cyber', 'online fraud', 'internet crime', 'digital fraud', 'scam'],
  evidenceRequirements: [
    { type: 'SCREENSHOT', label: 'Incident screenshots', required: true, description: 'Any visual evidence of the incident.' },
    { type: 'CHAT_LOG', label: 'Communications with accused', required: false, description: 'Messages, emails, or call logs.' },
    { type: 'TRANSACTION_RECEIPT', label: 'Financial loss proof', required: false, description: 'If monetary loss occurred.' },
  ],
  urgencyLevel: 'medium',
  immediateActions: [
    'Preserve all digital evidence without alteration.',
    'File complaint at cybercrime.gov.in or call 1930.',
    'Contact local cyber crime cell if in-person FIR is needed.',
  ],
  reportingGuidance: buildStandardReportingGuidance({}),
  interviewExtensions: [
    { id: 'incident-summary', prompt: 'Briefly describe what happened', fieldKey: 'incidentSummary', inputType: 'textarea', required: true },
  ],
  complaintTemplateId: 'generic',
};

export const organizedCrimeProfileCore: LegalProfileCore = {
  id: 'ORGANIZED_CRIME',
  crimeCategory: 'ORGANIZED_CRIME',
  scamCategory: 'Financial-Fraud',
  displayName: 'Organized Crime / Syndicates',
  description: 'Coordinated criminal syndicates, fraud rings, and organized conspiracies targeting multiple victims or institutions.',
  keywords: ['organized', 'syndicate', 'ring', 'conspiracy', 'fraud ring', 'organized fraud'],
  keywordWeights: { organized: 0.3, syndicate: 0.25, conspiracy: 0.2 },
  evidenceRequirements: [
    { type: 'CHAT_LOG', label: 'Coordinator communications', required: false, description: 'Messages or channels used to coordinate the syndicate.' },
    { type: 'TRANSACTION_RECEIPT', label: 'Payment trails', required: true, description: 'Payment rails showing aggregated flows or mule accounts.' },
    { type: 'OTHER', label: 'Organizational evidence', required: true, description: 'Vendor relationships, server hosts, or repeated MO linking incidents.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: [
    'Preserve all communications and transaction trails; document patterns of coordinated activity.',
    'Escalate to national investigative agencies (CBI/NIA/ED) where cross-jurisdictional or large-scale fraud is suspected.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    timeSensitiveNote: 'Organized operations may require rapid escalation to national agencies and CERT-In.',
    extraChannels: [{ name: 'CBI/NIA escalation', when: 'For cross-state or national-level syndicates' }],
  }),
  interviewExtensions: [
    { id: 'syndicate-scope', prompt: 'How many victims/entities impacted?', fieldKey: 'syndicateScope', inputType: 'text', required: false },
    { id: 'known-operators', prompt: 'Any known operators or accounts?', fieldKey: 'knownOperators', inputType: 'textarea', required: false },
  ],
  complaintTemplateId: 'organizedCrime',
};
