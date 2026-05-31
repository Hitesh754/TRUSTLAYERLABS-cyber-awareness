// ============================================================
// STATE INTELLIGENCE FILE — UTTARAKHAND
// Schema Version: 1.0 | Data Vintage: Census 2011 / NCRB 2022
// ============================================================

export interface StateProfile {
  name: string;
  capital: string;
  legislativeCapital: string;
  largestCity: string;
  statehood: string;
  officialLanguage: string;
  area_km2: number;
  districts: number;
  divisions: number;
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
export const UTTARAKHAND_PROFILE: StateProfile = {
  name: "Uttarakhand",
  capital: "Dehradun (Provisional)",
  legislativeCapital: "Gairsain (Summer) / Dehradun (Winter)",
  largestCity: "Dehradun",
  statehood: "9 November 2000",
  officialLanguage: "Hindi",
  area_km2: 53483,
  districts: 13,
  divisions: 2,
  population: 10086292,
  malePopulation: 5154178,
  femalePopulation: 4932114,
  sexRatio: 963,
  literacyRate: 78.82,
  maleLiteracyRate: 87.4,
  femaleLiteracyRate: 70.0,
  urbanizationPercent: 30.55,
  workforceParticipationRate: 38.9,
  maleWPR: 52.4,
  femaleWPR: 24.7,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const UTTARAKHAND_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 28912,
  totalSLL: 9812,
  murderRate: 2.6,
  robberyRate: 0.9,
  burglaryRate: 16.8,
  crimeAgainstWomen: 5410,
  crimeAgainstChildren: 1820,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const UTTARAKHAND_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 4128,
  financialFraud: 2710,
  socialMediaCrimes: 612,
  onlineStalking: 148,
  ransomwareIncidents: 32,
  phishingCases: 418,
  chargeSheetingRate: 39.4,
  source: "NCRB Crime in India 2022 / Uttarakhand Police Cyber Crime Cell 2022",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const UTTARAKHAND_CYBER_THREATS: CyberThreat[] = [
  {
    type: "OTP / Vishing / SIM Swap Fraud",
    severity: "Critical",
    description:
      "Spillover from UP's fraud belt; Haridwar and Roorkee see high volumes of bank fraud through OTP extraction and SIM swap attacks.",
    affectedSectors: ["Banking", "Telecom"],
    trend: "Increasing",
  },
  {
    type: "Tourism-related Online Fraud",
    severity: "High",
    description:
      "Fake hotel/resort booking websites, bogus Char Dham yatra operators, and fraudulent adventure tourism portals collecting advance payments from pilgrims and tourists.",
    affectedSectors: ["Tourism", "Hospitality", "Pilgrimage"],
    trend: "Increasing",
  },
  {
    type: "Digital Arrest Scam",
    severity: "High",
    description:
      "Fake law enforcement officials contact victims via video call claiming involvement in drug/money-laundering cases; extort large sums under 'digital arrest'.",
    affectedSectors: ["Individuals", "Business"],
    trend: "Increasing",
  },
  {
    type: "Investment & Crypto Scam",
    severity: "High",
    description:
      "WhatsApp and Telegram groups operate fake investment schemes targeting salaried individuals and retirees in Dehradun and Haridwar.",
    affectedSectors: ["Finance", "Retail Investors"],
    trend: "Increasing",
  },
  {
    type: "Fake Recruitment / Defence Job Fraud",
    severity: "High",
    description:
      "Uttarakhand's high defence personnel density makes it a target for fake Army/paramilitary recruitment fraud; advance fees collected for fake enlistment.",
    affectedSectors: ["Defence", "Youth", "Employment"],
    trend: "Stable",
  },
  {
    type: "Cyber Crime Against Women — Morphing & Stalking",
    severity: "Medium",
    description:
      "Online harassment, morphed image sharing, and stalking via social media affecting women in urban areas of Dehradun and Haridwar.",
    affectedSectors: ["Individuals", "Women"],
    trend: "Stable",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const UTTARAKHAND_COMMON_SCAMS: CommonScam[] = [
  {
    name: "Fake Char Dham / Pilgrimage Booking Fraud",
    modus:
      "Fake websites mimicking official GMVN and Char Dham yatra portals collect advance booking amounts; no services provided.",
    targetDemographic: "Pilgrims, religious tourists",
    reportedLossINR: 22000000,
    prevalence: "High",
  },
  {
    name: "Fake Army Recruitment Fraud",
    modus:
      "Fraudsters impersonate Army Recruitment Rally officials; collect registration fees and bribe money from aspirants citing guaranteed selection.",
    targetDemographic: "Youth aspiring to join defence services",
    reportedLossINR: 18000000,
    prevalence: "High",
  },
  {
    name: "Digital Arrest / CBI Impersonation",
    modus:
      "Video call from fake CBI/TRAI official; victim held for hours under fabricated charges and extorted.",
    targetDemographic: "Businesspersons, retired government employees",
    reportedLossINR: 35000000,
    prevalence: "High",
  },
  {
    name: "OTP / Bank Account Fraud",
    modus:
      "Fraudulent calls from bank/telecom impersonators; OTP extracted; accounts drained instantly.",
    targetDemographic: "Bank customers",
    reportedLossINR: 28000000,
    prevalence: "High",
  },
  {
    name: "Fake Adventure Tourism / Homestay Portal",
    modus:
      "Fraudulent portals for trekking, river rafting, and homestay bookings in Rishikesh, Mussoorie, Jim Corbett areas collect advance with no service delivery.",
    targetDemographic: "Domestic and foreign adventure tourists",
    reportedLossINR: 12000000,
    prevalence: "Medium",
  },
  {
    name: "Online Loan App Harassment",
    modus:
      "Predatory apps disburse small loans then blackmail borrowers with morphed intimate images shared to contacts.",
    targetDemographic: "Low-income earners, daily wage workers",
    prevalence: "Medium",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const UTTARAKHAND_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "Dehradun",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "Digital Arrest Scam", "Fake Recruitment", "Investment Fraud"],
    remarks:
      "State capital; highest complaint volume; large student and government employee population; IT sector growing.",
  },
  {
    district: "Haridwar",
    riskLevel: "High",
    primaryThreats: ["OTP Fraud", "Pilgrimage Booking Fraud", "Digital Arrest Scam", "SIM Swap"],
    remarks:
      "Major pilgrimage and industrial city; pilgrims targeted via fake yatra booking portals; industrial worker base.",
  },
  {
    district: "Udham Singh Nagar",
    riskLevel: "High",
    primaryThreats: ["OTP Fraud", "Fake Job Portal", "Social Media Crime"],
    remarks: "Industrial belt in Terai; high labour migration; close to UP fraud corridor.",
  },
  {
    district: "Nainital",
    riskLevel: "Medium",
    primaryThreats: ["Tourism Fraud", "Fake Homestay Portal", "Investment Scam"],
    remarks: "Major tourist destination; Kumaon headquarters; tourism-fraud correlation.",
  },
  {
    district: "Pauri Garhwal",
    riskLevel: "Medium",
    primaryThreats: ["Army Recruitment Fraud", "Government Scheme Impersonation"],
    remarks: "High out-migration; families of defence personnel targeted with impersonation fraud.",
  },
  {
    district: "Uttarkashi",
    riskLevel: "Medium",
    primaryThreats: ["Fake Pilgrimage Booking", "Disaster Relief Fraud"],
    remarks: "Char Dham route; pilgrimage fraud spikes May–June; post-disaster relief scams reported.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const UTTARAKHAND_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "UK-CPS-001",
    name: "Dehradun Cyber Crime Police Station",
    district: "Dehradun",
    address: "SSP Office, New Road, Dehradun, Uttarakhand 248001",
    phone: "0135-2712100",
    email: "cybercrime.dehradun@uttarakhandpolice.gov.in",
    jurisdictionDistricts: ["Dehradun", "Tehri Garhwal", "Uttarkashi"],
    operationalHours: "24x7",
    reportingLink: "https://uttarakhandpolice.uk.gov.in",
  },
  {
    id: "UK-CPS-002",
    name: "Haridwar District Cyber Crime Cell",
    district: "Haridwar",
    address: "SP Office, Haridwar, Uttarakhand 249401",
    phone: "01334-224100",
    email: "cybercrime.haridwar@uttarakhandpolice.gov.in",
    jurisdictionDistricts: ["Haridwar"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UK-CPS-003",
    name: "Udham Singh Nagar District Cyber Crime Cell",
    district: "Udham Singh Nagar",
    address: "SSP Office, Rudrapur, Udham Singh Nagar, Uttarakhand 263153",
    phone: "05944-250100",
    email: "cybercrime.usnagar@uttarakhandpolice.gov.in",
    jurisdictionDistricts: ["Udham Singh Nagar"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UK-CPS-004",
    name: "Nainital District Cyber Crime Cell",
    district: "Nainital",
    address: "SSP Office, Nainital, Uttarakhand 263001",
    phone: "05942-235100",
    email: "cybercrime.nainital@uttarakhandpolice.gov.in",
    jurisdictionDistricts: ["Nainital", "Almora", "Champawat", "Bageshwar", "Pithoragarh"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const UTTARAKHAND_CYBER_CELLS: CyberCell[] = [
  {
    id: "UK-CC-001",
    name: "Uttarakhand Police Cyber Crime Cell — State Nodal",
    district: "Dehradun",
    address: "Police Headquarters, Rajpur Road, Dehradun, Uttarakhand 248001",
    phone: "0135-2752120",
    email: "igcid.ukhq@uttarakhandpolice.gov.in",
    nodal: true,
  },
  {
    id: "UK-CC-002",
    name: "Kumaon Range Cyber Crime Cell",
    district: "Nainital",
    address: "IG Kumaon Range, Nainital, Uttarakhand 263001",
    phone: "05942-235200",
    email: "ig.kumaon@uttarakhandpolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const UTTARAKHAND_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Uttarakhand",
    phone: "0135-2752120",
    email: "dgp.ukhq@uttarakhandpolice.gov.in",
    address: "Police Headquarters, Rajpur Road, Dehradun 248001",
  },
  {
    designation: "Inspector General of Police (CID)",
    phone: "0135-2752200",
    email: "igcid.ukhq@uttarakhandpolice.gov.in",
    address: "CID Office, Dehradun 248001",
  },
  {
    designation: "Senior Superintendent of Police, Dehradun",
    phone: "0135-2712100",
    email: "ssp.ddn@uttarakhandpolice.gov.in",
    address: "SSP Office, New Road, Dehradun 248001",
  },
  {
    designation: "Superintendent of Police, Haridwar",
    phone: "01334-224100",
    email: "sp.haridwar@uttarakhandpolice.gov.in",
    address: "SP Office, Haridwar 249401",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const UTTARAKHAND_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "Uttarakhand Police Dial 112", number: "112" },
  { service: "Women Helpline", number: "181" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
  { service: "SDRF / Disaster Response", number: "1070" },
  { service: "Char Dham Yatra Helpline", number: "0135-2559898" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const UTTARAKHAND_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering cyber crime complaints.",
  },
  {
    name: "Uttarakhand Police Official Website",
    url: "https://uttarakhandpolice.uk.gov.in",
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
export const UTTARAKHAND_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Dehradun",
    district: "Dehradun",
    population: 578420,
    significance: "State capital; education, IT, DRDO, tourism gateway",
    cyberRiskProfile: "High",
  },
  {
    name: "Haridwar",
    district: "Haridwar",
    population: 310891,
    significance: "Pilgrimage city; BHEL, Sidcul industries",
    cyberRiskProfile: "High",
  },
  {
    name: "Rudrapur",
    district: "Udham Singh Nagar",
    population: 138270,
    significance: "Industrial city; SIDCUL manufacturing hub",
    cyberRiskProfile: "High",
  },
  {
    name: "Rishikesh",
    district: "Dehradun",
    population: 102138,
    significance: "Adventure tourism; yoga capital; pilgrimage gateway",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Roorkee",
    district: "Haridwar",
    population: 118528,
    significance: "IIT Roorkee; technical education",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Haldwani",
    district: "Nainital",
    population: 222100,
    significance: "Commercial hub of Kumaon",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Nainital",
    district: "Nainital",
    population: 41000,
    significance: "Hill tourism; High Court",
    cyberRiskProfile: "Medium",
  },
];export default {
  profile: UTTARAKHAND_PROFILE,
  crimeStatistics: UTTARAKHAND_CRIME_STATISTICS,
  cyberCrimeStatistics: UTTARAKHAND_CYBER_CRIME_STATISTICS,
  cyberThreats: UTTARAKHAND_CYBER_THREATS,
  commonScams: UTTARAKHAND_COMMON_SCAMS,
  highRiskDistricts: UTTARAKHAND_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: UTTARAKHAND_CYBER_POLICE_STATIONS,
  cyberCells: UTTARAKHAND_CYBER_CELLS,
  lawEnforcementContacts: UTTARAKHAND_LAW_ENFORCEMENT,
  emergencyContacts: UTTARAKHAND_EMERGENCY_CONTACTS,
  reportingResources: UTTARAKHAND_REPORTING_RESOURCES,
  importantCities: UTTARAKHAND_IMPORTANT_CITIES,
};
