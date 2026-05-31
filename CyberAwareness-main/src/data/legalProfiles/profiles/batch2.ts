import type { LegalProfileCore } from '../types';
import { buildStandardReportingGuidance, NATIONAL_EMERGENCY_ACTIONS } from '../shared/reportingDefaults';

export const deepfakeImpersonationProfileCore: LegalProfileCore = {
  id: 'DEEPFAKE_IMPERSONATION',
  crimeCategory: 'DEEPFAKE_IMPERSONATION',
  scamCategory: 'Phishing-Social-Engineering',
  displayName: 'Deepfake / Impersonation Fraud',
  description: 'AI-generated voice/video or impersonation of officials, family, or executives to induce action or payment.',
  keywords: [
    'deepfake', 'voice clone', 'ai voice', 'video call', 'impersonation', 'fake call',
    'ceo fraud', 'family emergency', 'police impersonation', 'officer', 'video scam',
  ],
  keywordWeights: { deepfake: 0.3, impersonation: 0.25, 'voice clone': 0.25, 'video call': 0.15 },
  evidenceRequirements: [
    { type: 'VIDEO_RECORDING', label: 'Suspicious video/voice recording', required: true, description: 'Recording of deepfake call or impersonation attempt.' },
    { type: 'CALL_RECORDING', label: 'Call recording', required: false, description: 'Audio recording if video unavailable.' },
    { type: 'SCREENSHOT', label: 'Caller ID / profile screenshots', required: true, description: 'Screenshots showing impersonated identity.' },
    { type: 'TRANSACTION_RECEIPT', label: 'Payment proof if transferred', required: false, description: 'Transfer records if money was sent.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: [
    'Verify identity through a separate known channel before any transfer.',
    'Alert contacts that your identity may be cloned.',
    'Preserve recordings and file cybercrime.gov.in complaint immediately.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraTips: ['Note AI/deepfake indicators: lip sync issues, unnatural blinking, robotic voice.'],
  }),
  interviewExtensions: [
    { id: 'impersonated-as', prompt: 'Who was impersonated?', fieldKey: 'impersonatedAs', inputType: 'text', required: true },
    { id: 'media-type', prompt: 'Type of impersonation', fieldKey: 'mediaType', inputType: 'select', required: true, options: ['Voice call', 'Video call', 'Voice message', 'Deepfake video', 'Profile impersonation'] },
  ],
  complaintTemplateId: 'deepfakeImpersonation',
};

export const identityTheftProfileCore: LegalProfileCore = {
  id: 'IDENTITY_THEFT',
  crimeCategory: 'IDENTITY_THEFT',
  scamCategory: 'Identity-Crimes',
  displayName: 'Identity Theft',
  description: 'Unauthorized use of Aadhaar, PAN, KYC documents, or digital credentials.',
  keywords: [
    'identity theft', 'aadhaar', 'pan', 'kyc', 'credential', 'document misuse',
    'fake account', 'loan in my name', 'sim registered', 'profile hacked',
  ],
  keywordWeights: { aadhaar: 0.25, kyc: 0.2, 'identity theft': 0.3, pan: 0.15 },
  evidenceRequirements: [
    { type: 'PLATFORM_REPORT', label: 'Unauthorized account/loan details', required: true, description: 'Details of accounts opened or loans taken in your name.' },
    { type: 'EMAIL', label: 'Notification emails/SMS', required: true, description: 'Alerts about new accounts, KYC, or credit inquiries.' },
    { type: 'OTHER', label: 'ID misuse proof', required: false, description: 'UIDAI/PAN misuse report or credit bureau report.' },
    { type: 'SCREENSHOT', label: 'Fake profile or portal screenshots', required: false, description: 'Evidence of impersonation accounts.' },
  ],
  urgencyLevel: 'high',
  immediateActions: NATIONAL_EMERGENCY_ACTIONS.identityUrgent,
  reportingGuidance: buildStandardReportingGuidance({
    extraChannels: [
      { name: 'UIDAI', url: 'https://uidai.gov.in', when: 'If Aadhaar was misused for authentication or accounts' },
      { name: 'Credit Bureau Dispute', when: 'If fraudulent loans appear on credit report' },
    ],
  }),
  interviewExtensions: [
    { id: 'id-type', prompt: 'Which identity document was misused?', fieldKey: 'idType', inputType: 'multiselect', required: true, options: ['Aadhaar', 'PAN', 'Passport', 'Bank KYC', 'Social media profile', 'Other'] },
  ],
  complaintTemplateId: 'identityTheft',
};

export const qrScamProfileCore: LegalProfileCore = {
  id: 'QR_SCAM',
  crimeCategory: 'QR_SCAM',
  scamCategory: 'Financial-Fraud',
  displayName: 'QR Code Fraud',
  description: 'Tampered, replaced, or malicious QR codes causing unauthorized debits or wrong beneficiary payments.',
  keywords: [
    'qr', 'qr code', 'scan', 'merchant qr', 'payment qr', 'tampered', 'replaced qr',
    'parking qr', 'fuel pump qr', 'shop qr',
  ],
  keywordWeights: { qr: 0.35, 'qr code': 0.35, scan: 0.15 },
  evidenceRequirements: [
    { type: 'SCREENSHOT', label: 'QR code photo at location', required: true, description: 'Photo of tampered QR at merchant/parking/fuel pump.' },
    { type: 'TRANSACTION_RECEIPT', label: 'Payment receipt after scan', required: true, description: 'Transaction showing wrong beneficiary after QR scan.' },
    { type: 'OTHER', label: 'Location details', required: true, description: 'Exact address/shop name where QR was scanned.' },
  ],
  urgencyLevel: 'high',
  immediateActions: [
    'Notify merchant/establishment where QR was tampered.',
    'Call bank/UPI app fraud line and file dispute immediately.',
    'File cybercrime.gov.in complaint with QR photo and transaction proof.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraTips: ['Photograph both original and tampered QR side by side if possible.'],
  }),
  interviewExtensions: [
    { id: 'qr-location', prompt: 'Where was the QR code scanned?', fieldKey: 'qrLocation', inputType: 'text', required: true },
  ],
  complaintTemplateId: 'qrScam',
};

export const simSwapProfileCore: LegalProfileCore = {
  id: 'SIM_SWAP',
  crimeCategory: 'SIM_SWAP',
  scamCategory: 'Identity-Crimes',
  displayName: 'SIM Swap Attack',
  description: 'Unauthorized SIM replacement enabling OTP interception and account takeover.',
  keywords: [
    'sim swap', 'sim replaced', 'no network', 'sim deactivated', 'duplicate sim',
    'telecom fraud', 'number ported', 'sim lost',
  ],
  keywordWeights: { 'sim swap': 0.4, 'sim replaced': 0.3, 'no network': 0.15 },
  evidenceRequirements: [
    { type: 'SMS', label: 'SIM change notification SMS', required: false, description: 'SMS from operator about SIM change if received.' },
    { type: 'PLATFORM_REPORT', label: 'Telecom complaint reference', required: true, description: 'Reference from telecom store/helpline about SIM swap.' },
    { type: 'BANK_STATEMENT', label: 'Post-SIM-swap transactions', required: true, description: 'Unauthorized transactions after SIM stopped working.' },
    { type: 'CALL_RECORDING', label: 'Calls to telecom/bank', required: false, description: 'Records of reporting to operator.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: [
    'Visit telecom provider immediately with ID to block duplicate SIM.',
    'Enable SIM lock / eSIM protection with operator.',
    'Change all account passwords and notify banks of SIM compromise.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    timeSensitiveNote: 'SIM swap fraud window is typically minutes to hours — act immediately.',
    extraSteps: ['Obtain written confirmation from telecom provider about unauthorized SIM issuance.'],
  }),
  interviewExtensions: [
    { id: 'sim-operator', prompt: 'Mobile network operator', fieldKey: 'simOperator', inputType: 'select', required: true, options: ['Jio', 'Airtel', 'Vi', 'BSNL', 'Other'] },
    { id: 'sim-down-time', prompt: 'When did your SIM stop working?', fieldKey: 'simDownTime', inputType: 'date', required: true },
  ],
  complaintTemplateId: 'simSwap',
};

export const jobScamProfileCore: LegalProfileCore = {
  id: 'JOB_SCAM',
  crimeCategory: 'JOB_SCAM',
  scamCategory: 'Phishing-Social-Engineering',
  displayName: 'Job / Employment Fraud',
  description: 'Fake job offers, registration fees, or work-from-home schemes extracting money or data.',
  keywords: [
    'job', 'employment', 'work from home', 'wfh', 'registration fee', 'offer letter',
    'recruitment', 'interview fee', 'training fee', 'task scam', 'part time',
  ],
  keywordWeights: { job: 0.25, 'work from home': 0.25, 'registration fee': 0.25, recruitment: 0.15 },
  evidenceRequirements: [
    { type: 'EMAIL', label: 'Fake offer emails', required: true, description: 'Job offer or interview emails from fraudsters.' },
    { type: 'CHAT_LOG', label: 'Recruiter chat logs', required: true, description: 'WhatsApp/Telegram with fake recruiters.' },
    { type: 'TRANSACTION_RECEIPT', label: 'Fee payment receipts', required: false, description: 'Payments for registration, training, or tasks.' },
    { type: 'SCREENSHOT', label: 'Fake company/portals', required: true, description: 'Websites or apps used in the scam.' },
  ],
  urgencyLevel: 'medium',
  immediateActions: [
    'Do not pay further fees expecting job confirmation.',
    'Report fake job posts on the platform where found.',
    'File cybercrime.gov.in complaint with offer letters and payment proof.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraChannels: [{ name: 'Platform abuse/report', when: 'Report fake listings on LinkedIn, Naukri, WhatsApp groups' }],
  }),
  interviewExtensions: [
    { id: 'job-platform', prompt: 'Where did you find the job posting?', fieldKey: 'jobPlatform', inputType: 'text', required: true },
    { id: 'fee-paid', prompt: 'Did you pay any registration/training fee?', fieldKey: 'feePaid', inputType: 'select', required: true, options: ['Yes', 'No'] },
  ],
  complaintTemplateId: 'jobScam',
};
