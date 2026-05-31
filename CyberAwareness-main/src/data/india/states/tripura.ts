// ============================================================
// STATE INTELLIGENCE FILE — TRIPURA
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
export const TRIPURA_PROFILE: StateProfile = {
  name: "Tripura",
  capital: "Agartala",
  largestCity: "Agartala",
  statehood: "21 January 1972",
  officialLanguages: ["Bengali", "Kokborok", "English"],
  area_km2: 10486,
  districts: 8,
  population: 3673917,
  malePopulation: 1874376,
  femalePopulation: 1799541,
  sexRatio: 960,
  literacyRate: 87.75,
  maleLiteracyRate: 91.53,
  femaleLiteracyRate: 83.15,
  urbanizationPercent: 26.18,
  workforceParticipationRate: 37.8,
  maleWPR: 53.7,
  femaleWPR: 21.2,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const TRIPURA_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 12841,
  totalSLL: 5123,
  murderRate: 3.8,
  robberyRate: 0.4,
  burglaryRate: 11.2,
  crimeAgainstWomen: 2410,
  crimeAgainstChildren: 720,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const TRIPURA_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 748,
  financialFraud: 412,
  socialMediaCrimes: 168,
  onlineStalking: 52,
  ransomwareIncidents: 8,
  phishingCases: 78,
  chargeSheetingRate: 36.0,
  source: "NCRB Crime in India 2022 / Tripura Police Annual Report 2022",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const TRIPURA_CYBER_THREATS: CyberThreat[] = [
  {
    type: "Social Media Misinformation & Hate Speech",
    severity: "Critical",
    description:
      "Tripura's ethnic diversity and cross-border media environment make it highly susceptible to communal misinformation spread through WhatsApp and Facebook, occasionally sparking violence.",
    affectedSectors: ["Public Safety", "Government", "Civil Society"],
    trend: "Stable",
  },
  {
    type: "Online Financial Fraud",
    severity: "High",
    description:
      "UPI and mobile banking fraud targeting government employees and urban population in Agartala; OTP phishing common.",
    affectedSectors: ["Banking", "Government", "Urban Population"],
    trend: "Increasing",
  },
  {
    type: "Cross-Border Cyber Threat (Bangladesh)",
    severity: "High",
    description:
      "Geographic proximity to Bangladesh creates exposure to cross-border cybercrime including SIM-based fraud and hacking attempts on government portals.",
    affectedSectors: ["Government", "Telecom", "Banking"],
    trend: "Stable",
  },
  {
    type: "Fake Job & Migration Fraud",
    severity: "High",
    description:
      "Fraudsters target youth with fake job offers abroad (particularly Gulf, Southeast Asia), collect visa/processing fees and disappear; many victims end up in scam compounds.",
    affectedSectors: ["Employment", "Youth"],
    trend: "Increasing",
  },
  {
    type: "Online Shopping Fraud",
    severity: "Medium",
    description:
      "Non-delivery of goods ordered on social media platforms; disproportionately affects rural and semi-urban populations with limited retail access.",
    affectedSectors: ["E-Commerce", "Rural Population"],
    trend: "Increasing",
  },
  {
    type: "Phishing of Government Scheme Beneficiaries",
    severity: "Medium",
    description:
      "Fraudsters impersonate state government officials and send fake SMS/WhatsApp messages about scheme benefits, collecting Aadhaar and bank details.",
    affectedSectors: ["Government Schemes", "Rural Population"],
    trend: "Increasing",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const TRIPURA_COMMON_SCAMS: CommonScam[] = [
  {
    name: "Overseas Job Trafficking Fraud",
    modus:
      "Victims lured with promises of high-paying jobs in Malaysia, UAE, or Myanmar. Agents collect Rs 2–5 lakh; many victims trafficked or stranded.",
    targetDemographic: "Unemployed youth, school dropouts",
    reportedLossINR: 18000000,
    prevalence: "High",
  },
  {
    name: "KYC / Bank Account Fraud",
    modus:
      "Fraudulent calls claiming bank KYC is expiring; victims share OTP leading to account compromise.",
    targetDemographic: "Bank account holders",
    reportedLossINR: 8000000,
    prevalence: "High",
  },
  {
    name: "Fake Social Media Investment",
    modus:
      "Facebook and WhatsApp groups promise high returns on stock/gold investments; victims invest and lose entire amount.",
    targetDemographic: "Salaried employees, traders",
    reportedLossINR: 6000000,
    prevalence: "Medium",
  },
  {
    name: "Lottery / Lucky Draw Scam",
    modus:
      "SMS or WhatsApp messages announcing prize wins; victims asked to pay taxes/fees to claim prize.",
    targetDemographic: "General public",
    prevalence: "Medium",
  },
  {
    name: "Online Marketplace Fraud",
    modus:
      "Goods advertised on OLX/Facebook Marketplace collected as advance payment; items never delivered.",
    targetDemographic: "Online shoppers",
    prevalence: "Medium",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const TRIPURA_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "West Tripura",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "Social Media Misinformation", "KYC Fraud", "Online Shopping Fraud"],
    remarks:
      "Agartala district; state capital; highest digital penetration; accounts for majority of cyber complaints.",
  },
  {
    district: "Gomati",
    riskLevel: "Medium",
    primaryThreats: ["Job Fraud", "OTP Fraud", "Lottery Scam"],
    remarks: "Udaipur subdivision; growing connectivity; rural youth increasingly targeted.",
  },
  {
    district: "Sipahijala",
    riskLevel: "Medium",
    primaryThreats: ["Social Media Fraud", "Financial Fraud"],
    remarks: "Bishalgarh area; border proximity increases cross-border fraud exposure.",
  },
  {
    district: "North Tripura",
    riskLevel: "Medium",
    primaryThreats: ["Overseas Job Fraud", "Phishing"],
    remarks: "Dharmanagar; remote area; youth migration-related fraud prevalent.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const TRIPURA_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "TR-CPS-001",
    name: "Tripura Police Cyber Crime Cell, Agartala",
    district: "West Tripura",
    address: "SP Office West, Agartala, Tripura 799001",
    phone: "0381-2325252",
    email: "cybercrime.tripura@tripurapolice.gov.in",
    jurisdictionDistricts: [
      "West Tripura",
      "Sipahijala",
      "Gomati",
      "Khowai",
      "Dhalai",
      "North Tripura",
      "Unakoti",
      "South Tripura",
    ],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const TRIPURA_CYBER_CELLS: CyberCell[] = [
  {
    id: "TR-CC-001",
    name: "Tripura Police Cyber Crime Investigation Unit",
    district: "West Tripura",
    address: "Police Headquarters, P.O. Kunjaban, Agartala, Tripura 799006",
    phone: "0381-2324100",
    email: "phq.tripura@tripurapolice.gov.in",
    nodal: true,
  },
  {
    id: "TR-CC-002",
    name: "South Tripura District Cyber Cell",
    district: "South Tripura",
    address: "SP Office, Belonia, South Tripura 799155",
    phone: "03463-222200",
    email: "sp.south@tripurapolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const TRIPURA_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Tripura",
    phone: "0381-2324100",
    email: "dgp.tripura@tripurapolice.gov.in",
    address: "Police Headquarters, Kunjaban, Agartala, Tripura 799006",
  },
  {
    designation: "Inspector General of Police (CID/SB)",
    phone: "0381-2324200",
    email: "igp.cid@tripurapolice.gov.in",
    address: "CID/SB Office, Agartala, Tripura 799001",
  },
  {
    designation: "Superintendent of Police, West Tripura",
    phone: "0381-2325500",
    email: "sp.west@tripurapolice.gov.in",
    address: "SP Office, Agartala, Tripura 799001",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const TRIPURA_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "Tripura Police Control Room", number: "0381-2322222" },
  { service: "Women Helpline", number: "181" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const TRIPURA_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering cyber crime complaints.",
  },
  {
    name: "Tripura Police Official Website",
    url: "https://tripurapolice.gov.in",
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
export const TRIPURA_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Agartala",
    district: "West Tripura",
    population: 400004,
    significance: "State capital; commerce, administration, border trade with Bangladesh",
    cyberRiskProfile: "High",
  },
  {
    name: "Dharmanagar",
    district: "North Tripura",
    population: 67967,
    significance: "Northern commercial hub; border area",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Udaipur",
    district: "Gomati",
    population: 53128,
    significance: "Religious tourism; commerce",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Kailashahar",
    district: "Unakoti",
    population: 57025,
    significance: "Administrative centre; trade",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Belonia",
    district: "South Tripura",
    population: 42829,
    significance: "Border town; Bangladesh trade gateway",
    cyberRiskProfile: "Medium",
  },
];export default {
  profile: TRIPURA_PROFILE,
  crimeStatistics: TRIPURA_CRIME_STATISTICS,
  cyberCrimeStatistics: TRIPURA_CYBER_CRIME_STATISTICS,
  cyberThreats: TRIPURA_CYBER_THREATS,
  commonScams: TRIPURA_COMMON_SCAMS,
  highRiskDistricts: TRIPURA_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: TRIPURA_CYBER_POLICE_STATIONS,
  cyberCells: TRIPURA_CYBER_CELLS,
  lawEnforcementContacts: TRIPURA_LAW_ENFORCEMENT,
  emergencyContacts: TRIPURA_EMERGENCY_CONTACTS,
  reportingResources: TRIPURA_REPORTING_RESOURCES,
  importantCities: TRIPURA_IMPORTANT_CITIES,
};
