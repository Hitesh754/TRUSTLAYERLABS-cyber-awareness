export interface AnalysisResult {
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  score: number;
  category: string;
  confidence: number;
  indicators: string[];
  suspiciousUrls: string[];
  recommendation: string;
  explanation: string;
}

// Drives which conditional form sections are shown
export type CrimeContext =
  | 'financial'    // UPI fraud, bank impersonation, crypto scam, reward scam, OTP fraud
  | 'harassment'   // Sextortion, blackmail, deepfake, AI voice scam
  | 'data_theft'   // Phishing, remote access, fake job (data harvesting)
  | 'ransomware'   // Ransomware / file encryption
  | 'general';     // Fallback — no extra conditional section

export interface CrimeReportData {
  // ── Always shown ──────────────────────────────────

  // Victim Information
  victimName: string;
  victimPhone: string;
  victimEmail: string;
  victimAddress: string;
  victimIdType: string;       // Aadhaar / PAN / Voter ID / Passport
  victimIdNumber: string;

  // Incident Details (auto-filled from analysis)
  incidentDate: string;
  incidentTime: string;
  crimeCategory: string;
  crimeSubCategory: string;
  incidentDescription: string;

  // Suspect Details (always shown, all optional)
  suspectName: string;
  suspectPhone: string;
  suspectEmail: string;
  suspectSocialMedia: string;

  // Evidence & Location (always shown)
  evidenceDescription: string;
  suspiciousUrls: string[];
  screenshotAttached: boolean;
  state: string;
  district: string;

  // ── Conditionally shown based on CrimeContext ─────

  // financial context only
  lossAmount: string;
  transactionId: string;
  bankName: string;
  paymentMethod: string;        // UPI / Net Banking / Card / Wallet / Crypto
  suspectAccountDetails: string;

  // harassment context only (sextortion, blackmail, deepfake)
  harassmentType: string;       // Blackmail / Threats / Morphed images / Sextortion
  platformUsed: string;         // WhatsApp / Instagram / Telegram / Other
  relationToSuspect: string;    // Known / Unknown / Online acquaintance
  contentDescription: string;   // Nature of threatening content

  // data_theft context only (phishing, remote access, fake job)
  dataCompromised: string;      // Aadhaar / PAN / Passwords / Photos / Bank details
  accessMethod: string;         // Phishing link / Remote access app / Fake form
  devicesAffected: string;      // Phone / Laptop / Both

  // ransomware context only
  ransomDemand: string;         // Amount or crypto demanded
  filesAffected: string;        // Description of locked files/systems
  ransomNote: string;           // Text of ransom message
}

export function createEmptyReportData(): CrimeReportData {
  return {
    victimName: '',
    victimPhone: '',
    victimEmail: '',
    victimAddress: '',
    victimIdType: '',
    victimIdNumber: '',
    incidentDate: '',
    incidentTime: '',
    crimeCategory: '',
    crimeSubCategory: '',
    incidentDescription: '',
    suspectName: '',
    suspectPhone: '',
    suspectEmail: '',
    suspectSocialMedia: '',
    evidenceDescription: '',
    suspiciousUrls: [],
    screenshotAttached: false,
    state: '',
    district: '',
    lossAmount: '',
    transactionId: '',
    bankName: '',
    paymentMethod: '',
    suspectAccountDetails: '',
    harassmentType: '',
    platformUsed: '',
    relationToSuspect: '',
    contentDescription: '',
    dataCompromised: '',
    accessMethod: '',
    devicesAffected: '',
    ransomDemand: '',
    filesAffected: '',
    ransomNote: '',
  };
}