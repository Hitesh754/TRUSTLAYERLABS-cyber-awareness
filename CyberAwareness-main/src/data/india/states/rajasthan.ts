// ============================================================
// STATE INTELLIGENCE FILE — RAJASTHAN
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
  divisions: number;
  population: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number; // females per 1000 males
  literacyRate: number; // percentage
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
  murderRate: number; // per lakh population
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
  chargeSheetingRate: number; // percentage
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
export const RAJASTHAN_PROFILE: StateProfile = {
  name: "Rajasthan",
  capital: "Jaipur",
  largestCity: "Jaipur",
  statehood: "1 November 1956",
  officialLanguage: "Hindi",
  area_km2: 342239,
  districts: 50,
  divisions: 10,
  population: 68548437,
  malePopulation: 35550997,
  femalePopulation: 32997440,
  sexRatio: 928,
  literacyRate: 66.11,
  maleLiteracyRate: 79.19,
  femaleLiteracyRate: 52.12,
  urbanizationPercent: 24.9,
  workforceParticipationRate: 43.6,
  maleWPR: 57.9,
  femaleWPR: 28.1,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const RAJASTHAN_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 198421,
  totalSLL: 54312,
  murderRate: 3.2,
  robberyRate: 1.1,
  burglaryRate: 18.4,
  crimeAgainstWomen: 45034,
  crimeAgainstChildren: 11872,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const RAJASTHAN_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 12993,
  financialFraud: 8411,
  socialMediaCrimes: 1823,
  onlineStalking: 412,
  ransomwareIncidents: 68,
  phishingCases: 1342,
  chargeSheetingRate: 38.6,
  source: "NCRB Crime in India 2022 / Rajasthan Police Annual Report 2022",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const RAJASTHAN_CYBER_THREATS: CyberThreat[] = [
  {
    type: "OTP & SIM Swap Fraud",
    severity: "Critical",
    description:
      "Fraudsters impersonate bank/telecom officials to extract OTPs and initiate SIM swaps, draining accounts. Mewat region is a known hub.",
    affectedSectors: ["Banking", "Telecom", "Retail"],
    trend: "Increasing",
  },
  {
    type: "Phishing & Vishing",
    severity: "High",
    description:
      "Targeted phishing campaigns via SMS/WhatsApp mimicking government schemes (PM Kisan, Rajasthan Sampark) to harvest credentials.",
    affectedSectors: ["Agriculture", "Government Services", "Rural Banking"],
    trend: "Increasing",
  },
  {
    type: "Sextortion",
    severity: "High",
    description:
      "Honey-trap sextortion operated from Bharatpur and Alwar districts; victim is video-called, compromising footage recorded, extortion follows.",
    affectedSectors: ["Individuals"],
    trend: "Stable",
  },
  {
    type: "Investment / Stock Market Scam",
    severity: "High",
    description:
      "Fraudulent investment apps and WhatsApp groups lure victims with guaranteed returns on stocks/crypto, then disappear with funds.",
    affectedSectors: ["Finance", "Retail Investors"],
    trend: "Increasing",
  },
  {
    type: "Ransomware on SMEs",
    severity: "Medium",
    description:
      "Small manufacturing and gem-cutting firms in Jaipur and Jodhpur targeted with ransomware via phishing emails.",
    affectedSectors: ["Manufacturing", "Gems & Jewellery", "Textile"],
    trend: "Increasing",
  },
  {
    type: "Cyber Defacement of Government Portals",
    severity: "Medium",
    description: "State government portals face periodic defacement attempts by hacktivist groups.",
    affectedSectors: ["Government"],
    trend: "Stable",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const RAJASTHAN_COMMON_SCAMS: CommonScam[] = [
  {
    name: "Mewat Cyber Crime Gang",
    modus:
      "Gang members impersonate CBI/police/bank officials via call, threaten digital arrest, demand payments. Operates predominantly from Alwar-Bharatpur belt.",
    targetDemographic: "Senior citizens, salaried professionals",
    reportedLossINR: 45000000,
    prevalence: "Very High",
  },
  {
    name: "Lottery & Prize Scam",
    modus:
      "Victims receive WhatsApp/SMS messages claiming they have won a lottery or KBC prize. Asked to pay GST/fee to claim prize.",
    targetDemographic: "Rural populations, elderly",
    reportedLossINR: 8000000,
    prevalence: "High",
  },
  {
    name: "Fake E-Commerce & Job Portal",
    modus:
      "Fraudulent job portals and fake product listings (especially on social media) collect advance payments and disappear.",
    targetDemographic: "Youth, job seekers",
    reportedLossINR: 12000000,
    prevalence: "High",
  },
  {
    name: "Digital Arrest Scam",
    modus:
      "Victims intimidated over video call by fake police/CBI officials accusing them of money laundering, kept on call for hours and extorted.",
    targetDemographic: "Business owners, NRIs, senior citizens",
    reportedLossINR: 35000000,
    prevalence: "High",
  },
  {
    name: "Fake Loan App Fraud",
    modus:
      "Predatory loan apps on Android collect contacts/photos, disburse small loans, then harass borrowers with morphed images and blackmail.",
    targetDemographic: "Low-income borrowers, rural youth",
    prevalence: "High",
  },
  {
    name: "Tourism-related Fraud",
    modus:
      "Fake tour operators, gem shop touts at tourist sites in Jaipur/Jodhpur/Udaipur overcharge tourists or deliver counterfeit goods after online payment.",
    targetDemographic: "Domestic & foreign tourists",
    prevalence: "Medium",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const RAJASTHAN_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "Alwar",
    riskLevel: "Critical",
    primaryThreats: ["Mewat Cyber Gang", "OTP Fraud", "Digital Arrest Scam", "Sextortion"],
    remarks:
      "Part of the Mewat region; epicentre of organised cyber crime gangs operating call-centre-style fraud rings across India.",
  },
  {
    district: "Bharatpur",
    riskLevel: "Critical",
    primaryThreats: ["Mewat Cyber Gang", "SIM Swap", "Vishing"],
    remarks: "Adjoins Mewat belt; large number of cyber fraud FIRs traced to this district annually.",
  },
  {
    district: "Jaipur",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "Investment Scam", "Data Breach", "Ransomware"],
    remarks:
      "State capital; high banking and IT sector exposure. Highest cyber complaint volume in the state.",
  },
  {
    district: "Jodhpur",
    riskLevel: "High",
    primaryThreats: ["E-commerce Fraud", "Sextortion", "Phishing"],
    remarks:
      "Second-largest city; growing digital commerce and increasing cyber crime incidents.",
  },
  {
    district: "Kota",
    riskLevel: "High",
    primaryThreats: ["Fake Education Portals", "Job Scam", "OTP Fraud"],
    remarks:
      "Major education hub with large student population; targeted by fake coaching and scholarship portals.",
  },
  {
    district: "Udaipur",
    riskLevel: "Medium",
    primaryThreats: ["Tourism Fraud", "Social Media Scam", "Fake Investment"],
    remarks: "Tourist footfall increases fraud exposure particularly via fake gem and handicraft deals.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const RAJASTHAN_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "RJ-CPS-001",
    name: "Jaipur Commissionerate Cyber Crime Police Station",
    district: "Jaipur",
    address: "Commissioner of Police, Civil Lines, Jaipur, Rajasthan 302006",
    phone: "0141-2744000",
    email: "cybercrime.jaipur@rajpolice.gov.in",
    jurisdictionDistricts: ["Jaipur"],
    operationalHours: "24x7",
    reportingLink: "https://police.rajasthan.gov.in",
  },
  {
    id: "RJ-CPS-002",
    name: "Jodhpur Commissionerate Cyber Crime Cell",
    district: "Jodhpur",
    address: "CP Office, Residency Road, Jodhpur, Rajasthan 342001",
    phone: "0291-2434100",
    email: "cybercrime.jodhpur@rajpolice.gov.in",
    jurisdictionDistricts: ["Jodhpur", "Barmer", "Jalore", "Sirohi"],
    operationalHours: "24x7",
    reportingLink: "https://police.rajasthan.gov.in",
  },
  {
    id: "RJ-CPS-003",
    name: "Udaipur District Cyber Crime Cell",
    district: "Udaipur",
    address: "SP Office, Udaipur, Rajasthan 313001",
    phone: "0294-2411531",
    email: "cybercrime.udaipur@rajpolice.gov.in",
    jurisdictionDistricts: ["Udaipur", "Rajsamand", "Chittorgarh", "Dungarpur", "Banswara"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "RJ-CPS-004",
    name: "Kota Range Cyber Crime Cell",
    district: "Kota",
    address: "SP Office, Civil Lines, Kota, Rajasthan 324001",
    phone: "0744-2470100",
    email: "cybercrime.kota@rajpolice.gov.in",
    jurisdictionDistricts: ["Kota", "Bundi", "Baran", "Jhalawar"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "RJ-CPS-005",
    name: "Alwar District Cyber Crime Cell",
    district: "Alwar",
    address: "SP Office, Alwar, Rajasthan 301001",
    phone: "0144-2702555",
    email: "cybercrime.alwar@rajpolice.gov.in",
    jurisdictionDistricts: ["Alwar"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "RJ-CPS-006",
    name: "Bharatpur District Cyber Crime Cell",
    district: "Bharatpur",
    address: "SP Office, Bharatpur, Rajasthan 321001",
    phone: "05644-222300",
    email: "cybercrime.bharatpur@rajpolice.gov.in",
    jurisdictionDistricts: ["Bharatpur", "Dhaulpur", "Karauli", "Sawai Madhopur"],
    operationalHours: "10:00–18:00 (Mon–Sat)",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const RAJASTHAN_CYBER_CELLS: CyberCell[] = [
  {
    id: "RJ-CC-001",
    name: "Rajasthan Police Cyber Crime Coordination Centre (RPCCC)",
    district: "Jaipur",
    address: "Police Headquarters, Jaipur, Rajasthan 302005",
    phone: "0141-2744491",
    email: "cybercrime.phq@rajpolice.gov.in",
    nodal: true,
  },
  {
    id: "RJ-CC-002",
    name: "Ajmer Range Cyber Crime Cell",
    district: "Ajmer",
    address: "Range IG Office, Ajmer, Rajasthan 305001",
    phone: "0145-2627777",
    email: "cybercrime.ajmer@rajpolice.gov.in",
    nodal: false,
  },
  {
    id: "RJ-CC-003",
    name: "Bikaner District Cyber Crime Cell",
    district: "Bikaner",
    address: "SP Office, Bikaner, Rajasthan 334001",
    phone: "0151-2522100",
    email: "cybercrime.bikaner@rajpolice.gov.in",
    nodal: false,
  },
  {
    id: "RJ-CC-004",
    name: "Sikar District Cyber Crime Cell",
    district: "Sikar",
    address: "SP Office, Sikar, Rajasthan 332001",
    phone: "01572-270100",
    email: "cybercrime.sikar@rajpolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const RAJASTHAN_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Rajasthan",
    phone: "0141-2744491",
    email: "dgp@rajpolice.gov.in",
    address: "Police Headquarters, Jaipur, Rajasthan 302005",
  },
  {
    designation: "Additional DGP (Crime)",
    phone: "0141-2744000",
    email: "adgp.crime@rajpolice.gov.in",
    address: "Police Headquarters, Jaipur, Rajasthan 302005",
  },
  {
    designation: "Inspector General of Police (CID–CB)",
    phone: "0141-2743300",
    email: "ig.cidcb@rajpolice.gov.in",
    address: "CID-CB Headquarters, Jaipur 302005",
  },
  {
    designation: "Commissioner of Police, Jaipur",
    phone: "0141-2744000",
    email: "cp.jaipur@rajpolice.gov.in",
    address: "Commissioner of Police, Civil Lines, Jaipur 302006",
  },
  {
    designation: "Commissioner of Police, Jodhpur",
    phone: "0291-2434100",
    email: "cp.jodhpur@rajpolice.gov.in",
    address: "CP Office, Residency Road, Jodhpur 342001",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const RAJASTHAN_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "Women Helpline", number: "181" },
  { service: "Rajasthan Sampark Helpline", number: "181", remarks: "State citizen grievance" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
  { service: "Anti-Corruption Helpline", number: "1064" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const RAJASTHAN_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering all cyber crime complaints including financial fraud.",
  },
  {
    name: "Rajasthan Police Official Website",
    url: "https://police.rajasthan.gov.in",
    type: "State",
    description: "State police portal with online FIR filing and citizen services.",
  },
  {
    name: "Cyber Crime Helpline",
    url: "tel:1930",
    type: "Helpline",
    description: "National helpline 1930 for immediate cyber financial fraud reporting.",
  },
  {
    name: "Rajasthan Sampark Portal",
    url: "https://sampark.rajasthan.gov.in",
    type: "Portal",
    description: "State grievance portal for escalation of unresolved cyber complaints.",
  },
];

// ─────────────────────────────────────────────
// IMPORTANT CITIES
// ─────────────────────────────────────────────
export const RAJASTHAN_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Jaipur",
    district: "Jaipur",
    population: 3073350,
    significance: "State capital; IT, tourism, gems & jewellery hub",
    cyberRiskProfile: "High",
  },
  {
    name: "Jodhpur",
    district: "Jodhpur",
    population: 1033918,
    significance: "Second-largest city; commerce, handicrafts, defence",
    cyberRiskProfile: "High",
  },
  {
    name: "Kota",
    district: "Kota",
    population: 1001694,
    significance: "Education hub; chemical & fertiliser industries",
    cyberRiskProfile: "High",
  },
  {
    name: "Ajmer",
    district: "Ajmer",
    population: 542580,
    significance: "Religious tourism; trade centre",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Bikaner",
    district: "Bikaner",
    population: 644406,
    significance: "Desert tourism; food processing",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Udaipur",
    district: "Udaipur",
    population: 451100,
    significance: "Heritage tourism; marble & mining",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Alwar",
    district: "Alwar",
    population: 341422,
    significance: "Industrial growth; proximity to NCR",
    cyberRiskProfile: "High",
  },
  {
    name: "Bharatpur",
    district: "Bharatpur",
    population: 252659,
    significance: "Agriculture; bird sanctuary tourism",
    cyberRiskProfile: "High",
  },
  {
    name: "Sikar",
    district: "Sikar",
    population: 237560,
    significance: "Education town; Shekhawati belt commerce",
    cyberRiskProfile: "Medium",
  },
];export default {
  profile: RAJASTHAN_PROFILE,
  crimeStatistics: RAJASTHAN_CRIME_STATISTICS,
  cyberCrimeStatistics: RAJASTHAN_CYBER_CRIME_STATISTICS,
  cyberThreats: RAJASTHAN_CYBER_THREATS,
  commonScams: RAJASTHAN_COMMON_SCAMS,
  highRiskDistricts: RAJASTHAN_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: RAJASTHAN_CYBER_POLICE_STATIONS,
  cyberCells: RAJASTHAN_CYBER_CELLS,
  lawEnforcementContacts: RAJASTHAN_LAW_ENFORCEMENT,
  emergencyContacts: RAJASTHAN_EMERGENCY_CONTACTS,
  reportingResources: RAJASTHAN_REPORTING_RESOURCES,
  importantCities: RAJASTHAN_IMPORTANT_CITIES,
};
