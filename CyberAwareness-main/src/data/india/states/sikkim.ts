// ============================================================
// STATE INTELLIGENCE FILE — SIKKIM
// Schema Version: 1.0 | Data Vintage: Census 2011 / NCRB 2022
// ============================================================

export interface StateProfile {
  name: string;
  capital: string;
  largestCity: string;
  statehood: string;
  officialLanguages: string[];
  area_km2: number;
  districts: number;
  population: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number;
  literacyRate: number;
  maleLiteracyRate: number;
  femaleLiteracyRate: number;
  urbanizationPercent: number;
  workforceParticipationRate: number;
  maleWPR: number;
  femaleWPR: number;
}

export interface CrimeStatistics {
  year: number;
  totalIPC: number;
  totalSLL: number;
  murderRate: number;
  robberyRate: number;
  burglaryRate: number;
  crimeAgainstWomen: number;
  crimeAgainstChildren: number;
  source: string;
}

export interface CyberCrimeStatistics {
  year: number;
  totalCyberCrimes: number;
  financialFraud: number;
  socialMediaCrimes: number;
  onlineStalking: number;
  ransomwareIncidents: number;
  phishingCases: number;
  chargeSheetingRate: number;
  source: string;
}

export interface CyberThreat {
  type: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  description: string;
  affectedSectors: string[];
  trend: "Increasing" | "Stable" | "Decreasing";
}

export interface CommonScam {
  name: string;
  modus: string;
  targetDemographic: string;
  reportedLossINR?: number;
  prevalence: "Very High" | "High" | "Medium" | "Low";
}

export interface HighRiskDistrict {
  district: string;
  riskLevel: "Critical" | "High" | "Medium";
  primaryThreats: string[];
  remarks: string;
}

export interface CyberPoliceStation {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  jurisdictionDistricts: string[];
  operationalHours: string;
  reportingLink: string;
}

export interface CyberCell {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  nodal: boolean;
}

export interface LawEnforcementContact {
  designation: string;
  name?: string;
  phone: string;
  email?: string;
  address: string;
}

export interface EmergencyContact {
  service: string;
  number: string;
  remarks?: string;
}

export interface ReportingResource {
  name: string;
  url: string;
  type: "National" | "State" | "Portal" | "Helpline";
  description: string;
}

export interface ImportantCity {
  name: string;
  district: string;
  population: number;
  significance: string;
  cyberRiskProfile: "High" | "Medium" | "Low";
}

// ─────────────────────────────────────────────
// STATE PROFILE
// ─────────────────────────────────────────────
export const SIKKIM_PROFILE: StateProfile = {
  name: "Sikkim",
  capital: "Gangtok",
  largestCity: "Gangtok",
  statehood: "16 May 1975",
  officialLanguages: ["Nepali", "Sikkimese", "Lepcha", "English"],
  area_km2: 7096,
  districts: 6,
  population: 610577,
  malePopulation: 321661,
  femalePopulation: 288916,
  sexRatio: 890,
  literacyRate: 81.42,
  maleLiteracyRate: 86.55,
  femaleLiteracyRate: 75.61,
  urbanizationPercent: 25.15,
  workforceParticipationRate: 43.0,
  maleWPR: 52.6,
  femaleWPR: 32.2,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const SIKKIM_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 1842,
  totalSLL: 612,
  murderRate: 2.9,
  robberyRate: 0.5,
  burglaryRate: 8.7,
  crimeAgainstWomen: 321,
  crimeAgainstChildren: 88,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const SIKKIM_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 312,
  financialFraud: 189,
  socialMediaCrimes: 68,
  onlineStalking: 21,
  ransomwareIncidents: 4,
  phishingCases: 30,
  chargeSheetingRate: 41.0,
  source: "NCRB Crime in India 2022 / Sikkim Police Annual Report 2022",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const SIKKIM_CYBER_THREATS: CyberThreat[] = [
  {
    type: "Online Financial Fraud",
    severity: "High",
    description:
      "UPI and internet banking fraud targeting state government employees and Armed Forces personnel stationed in Sikkim.",
    affectedSectors: ["Banking", "Government"],
    trend: "Increasing",
  },
  {
    type: "Social Media Impersonation",
    severity: "High",
    description:
      "Fake social media profiles impersonating local officials, politicians, and army officers to extract money and personal data.",
    affectedSectors: ["Individuals", "Government"],
    trend: "Increasing",
  },
  {
    type: "Tourism-related Online Fraud",
    severity: "Medium",
    description:
      "Fake travel and homestay booking portals targeting tourists planning visits to Sikkim, collecting advance payments without delivering services.",
    affectedSectors: ["Tourism", "Hospitality"],
    trend: "Increasing",
  },
  {
    type: "OTP & Mobile Banking Fraud",
    severity: "High",
    description:
      "Fraudsters posing as bank representatives extract OTPs to drain accounts; common among less digitally literate rural population.",
    affectedSectors: ["Banking", "Rural Population"],
    trend: "Stable",
  },
  {
    type: "Fake Job & Scholarship Portal",
    severity: "Medium",
    description:
      "Youth targeted with fraudulent government job advertisements and scholarship portals collecting application fees.",
    affectedSectors: ["Education", "Employment"],
    trend: "Stable",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const SIKKIM_COMMON_SCAMS: CommonScam[] = [
  {
    name: "Army Impersonation Scam",
    modus:
      "Fraudsters pose as Army officers or defence ministry officials, contact families of jawans, claim emergency and demand money transfers.",
    targetDemographic: "Families of defence personnel",
    reportedLossINR: 3500000,
    prevalence: "High",
  },
  {
    name: "Fake Tourism Booking Fraud",
    modus:
      "Fake homestay and tour package websites collect advance payments but provide no services; common during peak tourist season.",
    targetDemographic: "Tourists, travel agents",
    reportedLossINR: 2000000,
    prevalence: "Medium",
  },
  {
    name: "KYC Update Fraud",
    modus:
      "Fraudulent calls claiming bank/mobile KYC is expiring; victims share OTP or install remote-access apps, leading to account compromise.",
    targetDemographic: "Bank account holders, mobile users",
    reportedLossINR: 1800000,
    prevalence: "High",
  },
  {
    name: "Lottery / Lucky Draw Scam",
    modus:
      "SMS and WhatsApp messages announcing lottery wins, demanding GST/processing fee before releasing prize money.",
    targetDemographic: "General public",
    prevalence: "Medium",
  },
  {
    name: "Online Shopping Fraud",
    modus:
      "Non-delivery of goods ordered on social media marketplace platforms; particularly affecting remote districts with limited retail access.",
    targetDemographic: "Online shoppers in remote areas",
    prevalence: "Medium",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const SIKKIM_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "East Sikkim",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "Social Media Impersonation", "Online Shopping Fraud"],
    remarks:
      "Gangtok district; highest digital penetration and population concentration; accounts for majority of state cyber complaints.",
  },
  {
    district: "South Sikkim",
    riskLevel: "Medium",
    primaryThreats: ["OTP Fraud", "Fake Job Portal", "Lottery Scam"],
    remarks: "Namchi district; increasing connectivity driving cyber crime exposure.",
  },
  {
    district: "West Sikkim",
    riskLevel: "Medium",
    primaryThreats: ["Tourism Fraud", "Army Impersonation"],
    remarks: "Gyalshing (Gezing) district; tourist corridor; growing hospitality-sector fraud.",
  },
  {
    district: "North Sikkim",
    riskLevel: "Medium",
    primaryThreats: ["Army Impersonation", "Fake Job Portal"],
    remarks:
      "Mangan district; significant defence presence; army impersonation scams reported.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const SIKKIM_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "SK-CPS-001",
    name: "Sikkim Police Cyber Crime Cell, Gangtok",
    district: "East Sikkim",
    address: "SP Office, Gangtok, Sikkim 737101",
    phone: "03592-202033",
    email: "cybercrime.sikkim@sikkimpolice.gov.in",
    jurisdictionDistricts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim", "Soreng", "Pakyong"],
    operationalHours: "10:00–17:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const SIKKIM_CYBER_CELLS: CyberCell[] = [
  {
    id: "SK-CC-001",
    name: "Sikkim Police Cyber Crime & Technical Cell",
    district: "East Sikkim",
    address: "Police Headquarters, Tadong, Gangtok, Sikkim 737102",
    phone: "03592-231600",
    email: "phq.sikkim@sikkimpolice.gov.in",
    nodal: true,
  },
  {
    id: "SK-CC-002",
    name: "Namchi District Cyber Crime Cell",
    district: "South Sikkim",
    address: "SP Office, Namchi, Sikkim 737126",
    phone: "03595-263222",
    email: "sp.south@sikkimpolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const SIKKIM_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Sikkim",
    phone: "03592-231600",
    email: "dgp.sikkim@sikkimpolice.gov.in",
    address: "Police Headquarters, Tadong, Gangtok, Sikkim 737102",
  },
  {
    designation: "Inspector General of Police, Sikkim",
    phone: "03592-231601",
    email: "igp.sikkim@sikkimpolice.gov.in",
    address: "Police Headquarters, Tadong, Gangtok 737102",
  },
  {
    designation: "Superintendent of Police, East Sikkim",
    phone: "03592-202300",
    email: "sp.east@sikkimpolice.gov.in",
    address: "SP Office, Gangtok, East Sikkim 737101",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const SIKKIM_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "Sikkim Police Control Room", number: "03592-202200" },
  { service: "Women Helpline", number: "181" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
  { service: "State Disaster Management", number: "03592-270002" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const SIKKIM_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering all cyber crime complaints.",
  },
  {
    name: "Sikkim Police Official Website",
    url: "https://sikkimpolice.gov.in",
    type: "State",
    description: "State police portal for citizen services and complaint registration.",
  },
  {
    name: "Cyber Crime Helpline",
    url: "tel:1930",
    type: "Helpline",
    description: "National helpline 1930 for immediate cyber financial fraud reporting.",
  },
];

// ─────────────────────────────────────────────
// IMPORTANT CITIES
// ─────────────────────────────────────────────
export const SIKKIM_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Gangtok",
    district: "East Sikkim",
    population: 100286,
    significance: "State capital; tourism, administration, commerce",
    cyberRiskProfile: "High",
  },
  {
    name: "Namchi",
    district: "South Sikkim",
    population: 14368,
    significance: "Headquarters South Sikkim; religious tourism",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Gyalshing",
    district: "West Sikkim",
    population: 8500,
    significance: "Headquarters West Sikkim; Pelling gateway",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Mangan",
    district: "North Sikkim",
    population: 5000,
    significance: "Headquarters North Sikkim; border area",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Rangpo",
    district: "East Sikkim",
    population: 14000,
    significance: "Entry point to Sikkim; trade town",
    cyberRiskProfile: "Medium",
  },
];export default {
  profile: SIKKIM_PROFILE,
  crimeStatistics: SIKKIM_CRIME_STATISTICS,
  cyberCrimeStatistics: SIKKIM_CYBER_CRIME_STATISTICS,
  cyberThreats: SIKKIM_CYBER_THREATS,
  commonScams: SIKKIM_COMMON_SCAMS,
  highRiskDistricts: SIKKIM_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: SIKKIM_CYBER_POLICE_STATIONS,
  cyberCells: SIKKIM_CYBER_CELLS,
  lawEnforcementContacts: SIKKIM_LAW_ENFORCEMENT,
  emergencyContacts: SIKKIM_EMERGENCY_CONTACTS,
  reportingResources: SIKKIM_REPORTING_RESOURCES,
  importantCities: SIKKIM_IMPORTANT_CITIES,
};
