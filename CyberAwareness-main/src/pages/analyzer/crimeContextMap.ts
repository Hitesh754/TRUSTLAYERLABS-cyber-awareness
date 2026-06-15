import type { CrimeContext } from './types';

/**
 * Maps the scam category detected by heuristics to a CrimeContext.
 * The CrimeContext drives which conditional form sections appear.
 */

const categoryToContext: Record<string, CrimeContext> = {
  'OTP Fraud': 'financial',
  'UPI Fraud': 'financial',
  'Bank Impersonation': 'financial',
  'Crypto Scam': 'financial',
  'Reward Scam': 'financial',
  'Sextortion': 'harassment',
  'Deepfake Scam': 'harassment',
  'AI Voice Scam': 'harassment',
  'Phishing Link': 'data_theft',
  'Remote Access Scam': 'data_theft',
  'Fake Job Scam': 'data_theft',
  'Ransomware': 'ransomware',
  'Urgency Scam': 'general',
  'QR Scam': 'financial',
};

export function getCrimeContext(category: string): CrimeContext {
  return categoryToContext[category] ?? 'general';
}

export interface CrimeContextMeta {
  label: string;
  icon: string;
  description: string;
  color: string;
}

const contextMeta: Record<CrimeContext, CrimeContextMeta> = {
  financial: {
    label: 'Financial Fraud Detected',
    icon: '💰',
    description: 'This appears to involve financial loss. Please provide transaction and banking details below.',
    color: 'amber',
  },
  harassment: {
    label: 'Harassment / Blackmail Detected',
    icon: '🚨',
    description: 'This appears to involve threats or blackmail. Please describe the harassment details below.',
    color: 'red',
  },
  data_theft: {
    label: 'Data Theft / Phishing Detected',
    icon: '🔓',
    description: 'This appears to involve data compromise. Please describe what information was stolen or accessed.',
    color: 'orange',
  },
  ransomware: {
    label: 'Ransomware Attack Detected',
    icon: '🔒',
    description: 'This appears to involve ransomware. Please provide details about affected systems and demands.',
    color: 'red',
  },
  general: {
    label: 'Suspicious Activity Detected',
    icon: '⚠️',
    description: 'Please provide any relevant details about this incident.',
    color: 'cyan',
  },
};

export function getCrimeContextMeta(context: CrimeContext): CrimeContextMeta {
  return contextMeta[context];
}

/**
 * Maps a CrimeContext to the cybercrime.gov.in crime category string
 * used in the official complaint form.
 */
export function getOfficialCrimeCategory(context: CrimeContext, _subCategory?: string): string {
  switch (context) {
    case 'financial':
      return 'Online Financial Fraud';
    case 'harassment':
      return 'Women/Child Related Crime';
    case 'data_theft':
      return 'Other Cyber Crime';
    case 'ransomware':
      return 'Ransomware/Malware Attack';
    default:
      return 'Other Cyber Crime';
  }
}

/** Indian states for the location dropdown */
export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

export const ID_PROOF_TYPES = ['Aadhaar Card', 'PAN Card', 'Voter ID', 'Passport', 'Driving License'];

export const PAYMENT_METHODS = ['UPI', 'Net Banking', 'Debit Card', 'Credit Card', 'Digital Wallet', 'Cryptocurrency', 'Cash Deposit', 'Other'];

export const HARASSMENT_TYPES = ['Blackmail', 'Threats', 'Morphed Images/Videos', 'Sextortion', 'Cyberstalking', 'Defamation', 'Other'];

export const PLATFORMS = ['WhatsApp', 'Instagram', 'Facebook', 'Telegram', 'X (Twitter)', 'Snapchat', 'Email', 'Phone Call', 'SMS', 'Dating App', 'Other'];

export const DATA_TYPES = ['Aadhaar Details', 'PAN Details', 'Bank Account Info', 'Passwords', 'Personal Photos', 'OTP / PIN', 'Email Access', 'Social Media Access', 'Other'];

export const ACCESS_METHODS = ['Phishing Link', 'Remote Access App (AnyDesk/TeamViewer)', 'Fake Website / Form', 'Malware / Virus', 'Social Engineering', 'SIM Swap', 'Other'];
