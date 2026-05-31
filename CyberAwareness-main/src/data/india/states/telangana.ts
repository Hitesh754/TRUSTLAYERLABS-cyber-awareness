// ============================================================
// STATE INTELLIGENCE FILE — TELANGANA
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
export const TELANGANA_PROFILE: StateProfile = {
  name: "Telangana",
  capital: "Hyderabad",
  largestCity: "Hyderabad",
  statehood: "2 June 2014",
  officialLanguages: ["Telugu", "Urdu"],
  area_km2: 112077,
  districts: 33,
  population: 35003674,
  malePopulation: 17611633,
  femalePopulation: 17392041,
  sexRatio: 988,
  literacyRate: 66.46,
  maleLiteracyRate: 75.0,
  femaleLiteracyRate: 57.92,
  urbanizationPercent: 38.88,
  workforceParticipationRate: 44.9,
  maleWPR: 58.1,
  femaleWPR: 31.5,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const TELANGANA_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 97842,
  totalSLL: 28910,
  murderRate: 2.8,
  robberyRate: 0.6,
  burglaryRate: 14.1,
  crimeAgainstWomen: 21340,
  crimeAgainstChildren: 6821,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const TELANGANA_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 15297,
  financialFraud: 9812,
  socialMediaCrimes: 2241,
  onlineStalking: 510,
  ransomwareIncidents: 198,
  phishingCases: 1874,
  chargeSheetingRate: 37.9,
  source: "NCRB Crime in India 2022 / Telangana Police Cyber Crime Wing",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const TELANGANA_CYBER_THREATS: CyberThreat[] = [
  {
    type: "APT & Corporate Cyber Espionage",
    severity: "Critical",
    description:
      "Hyderabad's HITEC City and Cyberabad corridor face advanced persistent threats targeting pharma, IT, defence, and biotech firms.",
    affectedSectors: ["IT/ITES", "Pharma", "Defence", "Biotech"],
    trend: "Increasing",
  },
  {
    type: "Financial / UPI / Net Banking Fraud",
    severity: "Critical",
    description:
      "High-volume digital payment fraud exploiting UPI apps, internet banking, and QR code mechanisms; Hyderabad records the highest loss volumes in the state.",
    affectedSectors: ["Banking", "Finance", "E-Commerce"],
    trend: "Increasing",
  },
  {
    type: "Ransomware on Pharma & Healthcare",
    severity: "High",
    description:
      "Pharmaceutical companies and hospital networks in Hyderabad targeted with sophisticated ransomware, causing operational disruptions and data exfiltration.",
    affectedSectors: ["Pharma", "Healthcare", "Biotech"],
    trend: "Increasing",
  },
  {
    type: "Online Investment & Crypto Fraud",
    severity: "High",
    description:
      "Fraudulent investment platforms, fake crypto exchanges, and WhatsApp/Telegram group scams lure victims with guaranteed returns.",
    affectedSectors: ["Finance", "Retail Investors"],
    trend: "Increasing",
  },
  {
    type: "Sextortion & Digital Blackmail",
    severity: "High",
    description:
      "Honey-trap sextortion operations; victims approached via social media, video-called, footage recorded and used for extortion.",
    affectedSectors: ["Individuals"],
    trend: "Stable",
  },
  {
    type: "Supply Chain Compromise",
    severity: "High",
    description:
      "IT and software vendors in Hyderabad used as entry points to compromise their enterprise customers; third-party risk prevalent.",
    affectedSectors: ["IT Services", "Software", "Cloud"],
    trend: "Increasing",
  },
  {
    type: "Job Scam — IT/Tech Sector",
    severity: "Medium",
    description:
      "Fake job placement agencies and fraudulent H-1B/onsite placement portals targeting IT professionals; collect fees for fake visas.",
    affectedSectors: ["IT", "Employment"],
    trend: "Stable",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const TELANGANA_COMMON_SCAMS: CommonScam[] = [
  {
    name: "Fake IT Job / Visa Placement Fraud",
    modus:
      "Fraudulent placement agencies promise onsite IT jobs in USA/Australia; collect lakhs in processing fees, provide fake offer letters.",
    targetDemographic: "IT professionals, fresh engineering graduates",
    reportedLossINR: 120000000,
    prevalence: "Very High",
  },
  {
    name: "Digital Arrest Scam",
    modus:
      "Fake CBI/ED/Narcotics officials contact victims over video call, allege money-laundering involvement, 'digitally arrest' and extort.",
    targetDemographic: "Business owners, senior executives, NRIs",
    reportedLossINR: 180000000,
    prevalence: "High",
  },
  {
    name: "Investment App / Pig Butchering Scam",
    modus:
      "Victims befriended on LinkedIn or WhatsApp; introduced to fake investment platforms showing artificial profits; exit blocked when large sums are invested.",
    targetDemographic: "IT employees, HNIs, professionals",
    reportedLossINR: 250000000,
    prevalence: "High",
  },
  {
    name: "OTP / SIM Swap Fraud",
    modus:
      "Fraudsters impersonate bank or telecom staff, obtain OTPs and SIM swap approvals; accounts drained in minutes.",
    targetDemographic: "Bank account holders",
    reportedLossINR: 75000000,
    prevalence: "High",
  },
  {
    name: "Real Estate Online Fraud",
    modus:
      "Fake property listings on portals and social media for Hyderabad properties; advance token money collected and perpetrators disappear.",
    targetDemographic: "Property buyers, NRIs",
    reportedLossINR: 60000000,
    prevalence: "Medium",
  },
  {
    name: "Fake Pharma / Drug Export Portal",
    modus:
      "Fraudulent portals mimic legitimate pharma exporters; lure buyers with below-market drug prices, collect advance payments.",
    targetDemographic: "Pharma buyers, international traders",
    prevalence: "Medium",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const TELANGANA_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "Hyderabad",
    riskLevel: "Critical",
    primaryThreats: ["APT", "BEC", "Investment Fraud", "Digital Arrest", "Ransomware"],
    remarks:
      "IT megacity; highest cyber crime volume in the state; major financial and pharmaceutical sector exposure.",
  },
  {
    district: "Cyberabad (Rangareddy)",
    riskLevel: "Critical",
    primaryThreats: ["Corporate Espionage", "Supply Chain Attack", "Data Breach", "Fake Job Scam"],
    remarks:
      "HITEC City and Cyberabad zone; concentration of IT/ITES companies; frequent data breach and IP theft incidents.",
  },
  {
    district: "Medchal-Malkajgiri",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "Real Estate Fraud", "Social Media Scam"],
    remarks: "Rapidly urbanising northern Hyderabad suburb; high complaint volumes.",
  },
  {
    district: "Warangal",
    riskLevel: "High",
    primaryThreats: ["OTP Fraud", "Sextortion", "Fake Loan App"],
    remarks: "Second urban agglomeration; growing digital penetration driving fraud.",
  },
  {
    district: "Nizamabad",
    riskLevel: "Medium",
    primaryThreats: ["Agricultural Credit Fraud", "OTP Fraud", "Lottery Scam"],
    remarks: "Agricultural district; farmers targeted with agri-loan and subsidy scams.",
  },
  {
    district: "Karimnagar",
    riskLevel: "Medium",
    primaryThreats: ["Job Scam", "Financial Fraud", "Social Media Fraud"],
    remarks: "Growing town; youth targeted with fraudulent employment portals.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const TELANGANA_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "TS-CPS-001",
    name: "Hyderabad City Cyber Crime Police Station",
    district: "Hyderabad",
    address: "CCS, Basheerbagh, Hyderabad, Telangana 500001",
    phone: "040-27852343",
    email: "cybercrime.hyd@tspolice.gov.in",
    jurisdictionDistricts: ["Hyderabad"],
    operationalHours: "24x7",
    reportingLink: "https://www.tspolice.gov.in",
  },
  {
    id: "TS-CPS-002",
    name: "Cyberabad Cyber Crime Police Station",
    district: "Rangareddy",
    address: "Cyberabad Police Commissionerate, DLF Cyber City Road, Gachibowli, Hyderabad 500032",
    phone: "040-23290101",
    email: "cybercrime.cyberabad@tspolice.gov.in",
    jurisdictionDistricts: ["Rangareddy", "Medchal-Malkajgiri"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TS-CPS-003",
    name: "Warangal Commissionerate Cyber Crime Cell",
    district: "Warangal",
    address: "Commissioner of Police, Warangal, Telangana 506002",
    phone: "0870-2459100",
    email: "cybercrime.warangal@tspolice.gov.in",
    jurisdictionDistricts: ["Hanumakonda", "Warangal", "Hanamkonda"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TS-CPS-004",
    name: "Nizamabad District Cyber Crime Cell",
    district: "Nizamabad",
    address: "SP Office, Nizamabad, Telangana 503001",
    phone: "08462-220100",
    email: "cybercrime.nizamabad@tspolice.gov.in",
    jurisdictionDistricts: ["Nizamabad", "Kamareddy"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TS-CPS-005",
    name: "Karimnagar District Cyber Crime Cell",
    district: "Karimnagar",
    address: "SP Office, Karimnagar, Telangana 505001",
    phone: "0878-2243100",
    email: "cybercrime.karimnagar@tspolice.gov.in",
    jurisdictionDistricts: ["Karimnagar", "Peddapalli", "Jagtial"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TS-CPS-006",
    name: "Khammam District Cyber Crime Cell",
    district: "Khammam",
    address: "SP Office, Khammam, Telangana 507001",
    phone: "08742-230100",
    email: "cybercrime.khammam@tspolice.gov.in",
    jurisdictionDistricts: ["Khammam", "Bhadradri Kothagudem"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const TELANGANA_CYBER_CELLS: CyberCell[] = [
  {
    id: "TS-CC-001",
    name: "Telangana Police Cyber Crime Wing — State Nodal",
    district: "Hyderabad",
    address: "DGP Headquarters, Lakdikapool, Hyderabad, Telangana 500004",
    phone: "040-23290101",
    email: "dgp.ts@tspolice.gov.in",
    nodal: true,
  },
  {
    id: "TS-CC-002",
    name: "Rachakonda Cyber Crime Cell",
    district: "Rangareddy",
    address: "Rachakonda Police Commissionerate, LB Nagar, Hyderabad 500035",
    phone: "040-27802222",
    email: "cybercrime.rachakonda@tspolice.gov.in",
    nodal: false,
  },
  {
    id: "TS-CC-003",
    name: "Nalgonda District Cyber Crime Cell",
    district: "Nalgonda",
    address: "SP Office, Nalgonda, Telangana 508001",
    phone: "08682-230200",
    email: "cybercrime.nalgonda@tspolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const TELANGANA_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Telangana",
    phone: "040-23290101",
    email: "dgp.ts@tspolice.gov.in",
    address: "DGP Headquarters, Lakdikapool, Hyderabad 500004",
  },
  {
    designation: "Additional DGP, CID Telangana",
    phone: "040-27857600",
    email: "adgp.cid@tspolice.gov.in",
    address: "CID Headquarters, Hyderabad 500028",
  },
  {
    designation: "Commissioner of Police, Hyderabad",
    phone: "040-27852343",
    email: "cp.hyd@tspolice.gov.in",
    address: "Commissionerate of Police, Basheerbagh, Hyderabad 500001",
  },
  {
    designation: "Commissioner of Police, Cyberabad",
    phone: "040-23290101",
    email: "cp.cyberabad@tspolice.gov.in",
    address: "Cyberabad Commissionerate, Gachibowli, Hyderabad 500032",
  },
  {
    designation: "Commissioner of Police, Rachakonda",
    phone: "040-27802222",
    email: "cp.rachakonda@tspolice.gov.in",
    address: "Rachakonda Commissionerate, LB Nagar, Hyderabad 500035",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const TELANGANA_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "Telangana Police Helpline", number: "040-27852425" },
  { service: "SHE Teams (Women Safety)", number: "100", remarks: "Dedicated women safety patrol" },
  { service: "Women Helpline", number: "181" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const TELANGANA_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering cyber crime complaints.",
  },
  {
    name: "Telangana Police Official Website",
    url: "https://www.tspolice.gov.in",
    type: "State",
    description: "State police portal with online FIR filing and cyber crime services.",
  },
  {
    name: "Cyber Crime Helpline",
    url: "tel:1930",
    type: "Helpline",
    description: "National helpline 1930 for immediate cyber financial fraud reporting.",
  },
  {
    name: "Telangana Cyber Mitra",
    url: "https://hyd.tspolice.gov.in",
    type: "Portal",
    description: "Hyderabad Police online complaint portal for citizens.",
  },
];

// ─────────────────────────────────────────────
// IMPORTANT CITIES
// ─────────────────────────────────────────────
export const TELANGANA_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Hyderabad",
    district: "Hyderabad",
    population: 6809970,
    significance: "State capital; IT/pharma/biotech megacity; HITEC City",
    cyberRiskProfile: "High",
  },
  {
    name: "Warangal",
    district: "Hanumakonda",
    population: 811844,
    significance: "Second-largest city; steel, textile, education",
    cyberRiskProfile: "High",
  },
  {
    name: "Nizamabad",
    district: "Nizamabad",
    population: 311152,
    significance: "Agriculture, sugar, turmeric trade",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Karimnagar",
    district: "Karimnagar",
    population: 297500,
    significance: "Granite, commerce, agri-market",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Khammam",
    district: "Khammam",
    population: 229682,
    significance: "Timber trade, coal mining, pharma",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Ramagundam",
    district: "Peddapalli",
    population: 260000,
    significance: "NTPC power plant; coal; industry",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Mahbubnagar",
    district: "Mahbubnagar",
    population: 217000,
    significance: "Agriculture; migrant labour source",
    cyberRiskProfile: "Medium",
  },
];export default {
  profile: TELANGANA_PROFILE,
  crimeStatistics: TELANGANA_CRIME_STATISTICS,
  cyberCrimeStatistics: TELANGANA_CYBER_CRIME_STATISTICS,
  cyberThreats: TELANGANA_CYBER_THREATS,
  commonScams: TELANGANA_COMMON_SCAMS,
  highRiskDistricts: TELANGANA_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: TELANGANA_CYBER_POLICE_STATIONS,
  cyberCells: TELANGANA_CYBER_CELLS,
  lawEnforcementContacts: TELANGANA_LAW_ENFORCEMENT,
  emergencyContacts: TELANGANA_EMERGENCY_CONTACTS,
  reportingResources: TELANGANA_REPORTING_RESOURCES,
  importantCities: TELANGANA_IMPORTANT_CITIES,
};
