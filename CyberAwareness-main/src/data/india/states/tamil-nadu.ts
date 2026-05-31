// ============================================================
// STATE INTELLIGENCE FILE — TAMIL NADU
// Schema Version: 1.0 | Data Vintage: Census 2011 / NCRB 2022
// ============================================================

export interface StateProfile {
  name: string;
  capital: string;
  largestCity: string;
  statehood: string;
  officialLanguage: string;
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
export const TAMIL_NADU_PROFILE: StateProfile = {
  name: "Tamil Nadu",
  capital: "Chennai",
  largestCity: "Chennai",
  statehood: "26 January 1950",
  officialLanguage: "Tamil",
  area_km2: 130058,
  districts: 38,
  population: 72147030,
  malePopulation: 36137975,
  femalePopulation: 36009055,
  sexRatio: 996,
  literacyRate: 80.09,
  maleLiteracyRate: 86.81,
  femaleLiteracyRate: 73.44,
  urbanizationPercent: 48.45,
  workforceParticipationRate: 47.0,
  maleWPR: 62.1,
  femaleWPR: 31.7,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const TAMIL_NADU_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 186210,
  totalSLL: 98432,
  murderRate: 2.1,
  robberyRate: 0.8,
  burglaryRate: 16.3,
  crimeAgainstWomen: 22840,
  crimeAgainstChildren: 8230,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const TAMIL_NADU_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 19497,
  financialFraud: 12840,
  socialMediaCrimes: 2810,
  onlineStalking: 680,
  ransomwareIncidents: 124,
  phishingCases: 2231,
  chargeSheetingRate: 44.2,
  source: "NCRB Crime in India 2022 / Tamil Nadu Police Cyber Crime Wing",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const TAMIL_NADU_CYBER_THREATS: CyberThreat[] = [
  {
    type: "Advanced Persistent Threats (APT) on IT Sector",
    severity: "Critical",
    description:
      "Nation-state and criminal APT groups targeting Chennai IT corridor companies, BPOs, and financial institutions through spear-phishing and supply-chain attacks.",
    affectedSectors: ["IT/ITES", "Financial Services", "BPO"],
    trend: "Increasing",
  },
  {
    type: "Financial / UPI Fraud",
    severity: "Critical",
    description:
      "High-volume UPI and net banking fraud; fraudsters exploit QR code-based payment flows and fake payment confirmations to reverse-collect from victims.",
    affectedSectors: ["Banking", "Retail", "E-Commerce"],
    trend: "Increasing",
  },
  {
    type: "Data Breach & Corporate Espionage",
    severity: "High",
    description:
      "Sensitive corporate and customer data stolen from IT firms, hospitals, and educational institutions. Chennai and Coimbatore are primary targets.",
    affectedSectors: ["IT", "Healthcare", "Education"],
    trend: "Increasing",
  },
  {
    type: "Ransomware on Manufacturing & Auto",
    severity: "High",
    description:
      "Automotive component and manufacturing firms in Chennai-Hosur belt targeted with ransomware, often through vendor email compromise.",
    affectedSectors: ["Manufacturing", "Automotive", "Logistics"],
    trend: "Increasing",
  },
  {
    type: "Sextortion & Social Media Blackmail",
    severity: "High",
    description:
      "Organised sextortion rings operate through fake social media profiles targeting professionals, students, and public figures.",
    affectedSectors: ["Individuals"],
    trend: "Stable",
  },
  {
    type: "Business Email Compromise (BEC)",
    severity: "High",
    description:
      "Fraudulent emails impersonating CEOs or CFOs to redirect wire transfers; prevalent in SME export-oriented companies in Tiruppur and Coimbatore.",
    affectedSectors: ["Textile", "Export", "SMEs"],
    trend: "Increasing",
  },
  {
    type: "Online Investment & Crypto Fraud",
    severity: "High",
    description:
      "Ponzi-style investment platforms and fraudulent crypto exchanges targeting retail investors through social media and Telegram groups.",
    affectedSectors: ["Finance", "Retail Investors"],
    trend: "Increasing",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const TAMIL_NADU_COMMON_SCAMS: CommonScam[] = [
  {
    name: "QR Code / UPI Reversal Fraud",
    modus:
      "Victim is sent a QR code to 'receive' money; scanning it actually initiates a payment. Common in OLX/Facebook Marketplace transactions.",
    targetDemographic: "Online sellers, general public",
    reportedLossINR: 65000000,
    prevalence: "Very High",
  },
  {
    name: "TRAI / DoT Digital Arrest Scam",
    modus:
      "Victim receives call from fake TRAI/DoT/CBI official claiming their number is linked to illegal activities; kept on video call under false 'digital arrest' and extorted.",
    targetDemographic: "Senior citizens, businesspersons",
    reportedLossINR: 90000000,
    prevalence: "High",
  },
  {
    name: "Fake IT/BPO Job Offer",
    modus:
      "Fraudulent IT/call-centre job offers requiring advance payments for offer letters, ID cards, or training. Prevalent in Chennai and Coimbatore.",
    targetDemographic: "Fresh graduates, job seekers",
    reportedLossINR: 18000000,
    prevalence: "High",
  },
  {
    name: "Online Loan App Harassment",
    modus:
      "Predatory loan apps collect contacts and media, disburse small amounts, then harass borrowers with morphed images and threatening calls.",
    targetDemographic: "Low-income earners, daily wage workers",
    prevalence: "High",
  },
  {
    name: "Fake Textile / Export Business Portal",
    modus:
      "Fraudulent export portals impersonate buyers from Middle East and Europe; request advance shipment samples with no payment, or advance fees.",
    targetDemographic: "Textile and garment exporters, Tiruppur SMEs",
    reportedLossINR: 25000000,
    prevalence: "Medium",
  },
  {
    name: "Insurance Policy Fraud",
    modus:
      "Fraudsters pose as IRDAI officials or insurance agents; claim existing policies are maturing and require processing fee to release bonus.",
    targetDemographic: "Policyholders, retired persons",
    prevalence: "Medium",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const TAMIL_NADU_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "Chennai",
    riskLevel: "Critical",
    primaryThreats: ["APT", "Data Breach", "BEC", "Financial Fraud", "Ransomware"],
    remarks:
      "State capital and IT hub; highest cyber crime complaint volume; home to major banks, IT companies, and ports.",
  },
  {
    district: "Coimbatore",
    riskLevel: "Critical",
    primaryThreats: ["Financial Fraud", "BEC", "Fake Job Portals", "Investment Fraud"],
    remarks:
      "Industrial capital of Tamil Nadu; large MSME base; high BEC and fake investment scam incidence.",
  },
  {
    district: "Tiruvallur",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "OTP Fraud", "Social Media Scam"],
    remarks: "Rapidly urbanising Chennai suburb; growing digital crime footprint.",
  },
  {
    district: "Chengalpattu",
    riskLevel: "High",
    primaryThreats: ["Ransomware", "Data Breach", "Investment Fraud"],
    remarks: "IT corridor extension; several data centres and tech campuses.",
  },
  {
    district: "Madurai",
    riskLevel: "High",
    primaryThreats: ["UPI Fraud", "Sextortion", "Fake Loan Apps"],
    remarks:
      "Second-most populous city; high mobile banking penetration; growing fraud incidents.",
  },
  {
    district: "Tiruppur",
    riskLevel: "High",
    primaryThreats: ["BEC", "Export Fraud", "Textile Portal Scam"],
    remarks: "Knitwear export hub; high BEC losses affecting export-oriented SMEs.",
  },
  {
    district: "Salem",
    riskLevel: "Medium",
    primaryThreats: ["OTP Fraud", "Fake Investment", "Social Media Scam"],
    remarks: "Growing industrial city with increasing online fraud reports.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const TAMIL_NADU_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "TN-CPS-001",
    name: "Chennai City Cyber Crime Police Station",
    district: "Chennai",
    address: "Commissioner of Police, 100, EVR Periyar Salai, Vepery, Chennai, Tamil Nadu 600007",
    phone: "044-28447710",
    email: "cybercrime.chennai@tnpolice.gov.in",
    jurisdictionDistricts: ["Chennai"],
    operationalHours: "24x7",
    reportingLink: "https://www.tnpolice.gov.in",
  },
  {
    id: "TN-CPS-002",
    name: "Coimbatore City Cyber Crime Police Station",
    district: "Coimbatore",
    address: "Commissioner of Police, Race Course Road, Coimbatore, Tamil Nadu 641018",
    phone: "0422-2301100",
    email: "cybercrime.coimbatore@tnpolice.gov.in",
    jurisdictionDistricts: ["Coimbatore", "Tiruppur"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TN-CPS-003",
    name: "Madurai City Cyber Crime Police Station",
    district: "Madurai",
    address: "Commissioner of Police, Madurai, Tamil Nadu 625001",
    phone: "0452-2532100",
    email: "cybercrime.madurai@tnpolice.gov.in",
    jurisdictionDistricts: ["Madurai", "Dindigul", "Sivaganga"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TN-CPS-004",
    name: "Salem District Cyber Crime Cell",
    district: "Salem",
    address: "SP Office, Salem, Tamil Nadu 636001",
    phone: "0427-2447100",
    email: "cybercrime.salem@tnpolice.gov.in",
    jurisdictionDistricts: ["Salem", "Namakkal", "Erode"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TN-CPS-005",
    name: "Trichy City Cyber Crime Cell",
    district: "Tiruchirappalli",
    address: "Commissioner of Police, Tiruchirappalli, Tamil Nadu 620001",
    phone: "0431-2415100",
    email: "cybercrime.trichy@tnpolice.gov.in",
    jurisdictionDistricts: ["Tiruchirappalli", "Karur", "Perambalur"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "TN-CPS-006",
    name: "Vellore District Cyber Crime Cell",
    district: "Vellore",
    address: "SP Office, Vellore, Tamil Nadu 632001",
    phone: "0416-2220100",
    email: "cybercrime.vellore@tnpolice.gov.in",
    jurisdictionDistricts: ["Vellore", "Ranipet", "Tirupattur"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const TAMIL_NADU_CYBER_CELLS: CyberCell[] = [
  {
    id: "TN-CC-001",
    name: "Tamil Nadu Cyber Crime Wing (CCW) — Nodal HQ",
    district: "Chennai",
    address: "CBCID Headquarters, Chennai, Tamil Nadu 600028",
    phone: "044-28447745",
    email: "cybercrimewing@tnpolice.gov.in",
    nodal: true,
  },
  {
    id: "TN-CC-002",
    name: "Tirunelveli District Cyber Crime Cell",
    district: "Tirunelveli",
    address: "SP Office, Tirunelveli, Tamil Nadu 627001",
    phone: "0462-2336100",
    email: "cybercrime.tirunelveli@tnpolice.gov.in",
    nodal: false,
  },
  {
    id: "TN-CC-003",
    name: "Thanjavur District Cyber Crime Cell",
    district: "Thanjavur",
    address: "SP Office, Thanjavur, Tamil Nadu 613001",
    phone: "04362-230100",
    email: "cybercrime.thanjavur@tnpolice.gov.in",
    nodal: false,
  },
  {
    id: "TN-CC-004",
    name: "Cuddalore District Cyber Crime Cell",
    district: "Cuddalore",
    address: "SP Office, Cuddalore, Tamil Nadu 607001",
    phone: "04142-231100",
    email: "cybercrime.cuddalore@tnpolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const TAMIL_NADU_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Tamil Nadu",
    phone: "044-28447506",
    email: "dgp@tnpolice.gov.in",
    address: "Police Headquarters, Dr. Radhakrishnan Salai, Mylapore, Chennai 600004",
  },
  {
    designation: "Additional DGP, CBCID",
    phone: "044-28447700",
    email: "adgp.cbcid@tnpolice.gov.in",
    address: "CBCID Headquarters, Chennai 600028",
  },
  {
    designation: "Inspector General of Police (Cyber Crime)",
    phone: "044-28447745",
    email: "igp.cyber@tnpolice.gov.in",
    address: "CBCID Headquarters, Chennai 600028",
  },
  {
    designation: "Commissioner of Police, Chennai",
    phone: "044-28447710",
    email: "cp.chennai@tnpolice.gov.in",
    address: "Commissioner of Police, EVR Periyar Salai, Chennai 600007",
  },
  {
    designation: "Commissioner of Police, Coimbatore",
    phone: "0422-2301100",
    email: "cp.coimbatore@tnpolice.gov.in",
    address: "Commissioner of Police, Race Course Road, Coimbatore 641018",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const TAMIL_NADU_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "Tamil Nadu Police Cyber Helpline", number: "044-28447700" },
  { service: "Women Helpline", number: "181" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
  { service: "Tamil Nadu CM Helpline", number: "14400" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const TAMIL_NADU_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering cyber crime complaints.",
  },
  {
    name: "Tamil Nadu Police Official Website",
    url: "https://www.tnpolice.gov.in",
    type: "State",
    description: "State police portal for online complaint registration and citizen services.",
  },
  {
    name: "Cyber Crime Helpline",
    url: "tel:1930",
    type: "Helpline",
    description: "National helpline 1930 for immediate reporting of cyber financial fraud.",
  },
  {
    name: "CERT-In Incident Reporting",
    url: "https://www.cert-in.org.in",
    type: "National",
    description: "Report cyber security incidents affecting critical infrastructure and enterprises.",
  },
];

// ─────────────────────────────────────────────
// IMPORTANT CITIES
// ─────────────────────────────────────────────
export const TAMIL_NADU_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Chennai",
    district: "Chennai",
    population: 7088000,
    significance: "State capital; IT hub, automotive, port, finance",
    cyberRiskProfile: "High",
  },
  {
    name: "Coimbatore",
    district: "Coimbatore",
    population: 2151466,
    significance: "Industrial capital; textiles, engineering, IT",
    cyberRiskProfile: "High",
  },
  {
    name: "Madurai",
    district: "Madurai",
    population: 1462425,
    significance: "Temple city; commerce, tourism",
    cyberRiskProfile: "High",
  },
  {
    name: "Tiruchirappalli",
    district: "Tiruchirappalli",
    population: 916674,
    significance: "Educational hub; manufacturing, BHEL",
    cyberRiskProfile: "High",
  },
  {
    name: "Salem",
    district: "Salem",
    population: 916000,
    significance: "Steel, textiles, trade hub",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Tiruppur",
    district: "Tiruppur",
    population: 877778,
    significance: "Knitwear export capital; textile industry",
    cyberRiskProfile: "High",
  },
  {
    name: "Vellore",
    district: "Vellore",
    population: 617885,
    significance: "Medical tourism; CMC Hospital; leather",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Erode",
    district: "Erode",
    population: 509510,
    significance: "Handloom and textile trade",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Tirunelveli",
    district: "Tirunelveli",
    population: 474838,
    significance: "Commerce, agriculture, wind energy",
    cyberRiskProfile: "Medium",
  },
];export default {
  profile: TAMIL_NADU_PROFILE,
  crimeStatistics: TAMIL_NADU_CRIME_STATISTICS,
  cyberCrimeStatistics: TAMIL_NADU_CYBER_CRIME_STATISTICS,
  cyberThreats: TAMIL_NADU_CYBER_THREATS,
  commonScams: TAMIL_NADU_COMMON_SCAMS,
  highRiskDistricts: TAMIL_NADU_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: TAMIL_NADU_CYBER_POLICE_STATIONS,
  cyberCells: TAMIL_NADU_CYBER_CELLS,
  lawEnforcementContacts: TAMIL_NADU_LAW_ENFORCEMENT,
  emergencyContacts: TAMIL_NADU_EMERGENCY_CONTACTS,
  reportingResources: TAMIL_NADU_REPORTING_RESOURCES,
  importantCities: TAMIL_NADU_IMPORTANT_CITIES,
};
