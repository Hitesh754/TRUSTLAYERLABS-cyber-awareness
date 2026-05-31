// ============================================================
// UNION TERRITORY INTELLIGENCE FILE
// Chandigarh
// ============================================================

export interface UTProfile {
  name: string;
  capital: string;
  administrativeHeadquarters: string;
  established: string;
  area: number; // sq km
  population: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number; // females per 1000 males
  literacyRate: number; // percentage
  urbanizationPercent: number;
  workforceParticipationRate: number; // percentage
  numberOfDistricts: number;
  languagesSpoken: string[];
  officialLanguage: string;
  highCourt: string;
}

export interface CrimeStatistics {
  year: number;
  totalCognizableCrimes: number;
  crimeRatePerLakhPopulation: number;
  violentCrimes: number;
  propertyCrimes: number;
  cyberCrimes: number;
  fraudCases: number;
  source: string;
}

export interface CyberCrimeStatistics {
  year: number;
  totalCyberCrimesRegistered: number;
  financialFrauds: number;
  onlineHarassment: number;
  identityTheft: number;
  hacking: number;
  socialMediaCrimes: number;
  otherCyberCrimes: number;
  totalAmountDefrauded: string;
  convictionRate: number;
  source: string;
}

export interface MajorCyberThreat {
  threatType: string;
  description: string;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  targetedDemographic: string;
  reportedIncidents: string;
}

export interface CommonScam {
  scamName: string;
  modus: string;
  estimatedAnnualVictims: string;
  averageLossPerVictim: string;
  reportingTrend: "Increasing" | "Stable" | "Decreasing";
}

export interface HighRiskRegion {
  sector?: string;
  area: string;
  riskLevel: "Medium" | "High" | "Critical";
  primaryThreats: string[];
  remarks: string;
}

export interface CyberPoliceStation {
  id: string;
  unionTerritory: string;
  district: string;
  pincode: string;
  stationName: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  reportingLink: string;
  operationalHours: string;
  jurisdictionArea: string;
}

export interface CyberCell {
  id: string;
  cellName: string;
  parentOrganization: string;
  area: string;
  address: string;
  phone?: string;
  email?: string;
  operationalSince?: string;
  specializations: string[];
}

export interface LawEnforcementContact {
  organizationName: string;
  role: string;
  phone: string;
  alternatePhone?: string;
  email?: string;
  address: string;
  availableHours: string;
}

export interface EmergencyContact {
  service: string;
  number: string;
  type: "Police" | "Cyber" | "Medical" | "Fire" | "Helpline";
  availableHours: string;
  remarks?: string;
}

export interface ReportingResource {
  resourceName: string;
  resourceType:
    | "Online Portal"
    | "Helpline"
    | "Mobile App"
    | "In-Person"
    | "Email";
  contactOrUrl: string;
  description: string;
  availableLanguages?: string[];
}

export interface ImportantArea {
  areaName: string;
  type: "Sector" | "Industrial" | "Educational" | "Commercial" | "Residential";
  population: number;
  digitalPenetration: string;
  cyberCrimeRisk: "Low" | "Medium" | "High";
  notableFeatures: string[];
}

// ============================================================
// UNION TERRITORY PROFILE
// ============================================================

export const UT_PROFILE: UTProfile = {
  name: "Chandigarh",
  capital: "Chandigarh",
  administrativeHeadquarters: "Chandigarh",
  established: "1966-11-01",
  area: 114,
  population: 1055450,
  malePopulation: 580663,
  femalePopulation: 474787,
  sexRatio: 818,
  literacyRate: 86.43,
  urbanizationPercent: 97.25,
  workforceParticipationRate: 35.8,
  numberOfDistricts: 1,
  languagesSpoken: ["Hindi", "Punjabi", "English", "Haryanvi"],
  officialLanguage: "English",
  highCourt: "Punjab and Haryana High Court, Chandigarh",
};

// ============================================================
// CRIME STATISTICS
// ============================================================

export const CRIME_STATISTICS: CrimeStatistics[] = [
  {
    year: 2022,
    totalCognizableCrimes: 23456,
    crimeRatePerLakhPopulation: 2223.4,
    violentCrimes: 1874,
    propertyCrimes: 7213,
    cyberCrimes: 1423,
    fraudCases: 2341,
    source: "NCRB Crime in India Report 2022",
  },
  {
    year: 2021,
    totalCognizableCrimes: 21311,
    crimeRatePerLakhPopulation: 2020.5,
    violentCrimes: 1701,
    propertyCrimes: 6544,
    cyberCrimes: 1198,
    fraudCases: 2088,
    source: "NCRB Crime in India Report 2021",
  },
];

// ============================================================
// CYBER CRIME STATISTICS
// ============================================================

export const CYBER_CRIME_STATISTICS: CyberCrimeStatistics[] = [
  {
    year: 2022,
    totalCyberCrimesRegistered: 1423,
    financialFrauds: 842,
    onlineHarassment: 198,
    identityTheft: 121,
    hacking: 67,
    socialMediaCrimes: 112,
    otherCyberCrimes: 83,
    totalAmountDefrauded: "₹32 crore (approx.)",
    convictionRate: 9.4,
    source: "NCRB Crime in India 2022 / Chandigarh Police Annual Report 2022",
  },
  {
    year: 2021,
    totalCyberCrimesRegistered: 1198,
    financialFrauds: 701,
    onlineHarassment: 167,
    identityTheft: 98,
    hacking: 51,
    socialMediaCrimes: 95,
    otherCyberCrimes: 86,
    totalAmountDefrauded: "₹24 crore (approx.)",
    convictionRate: 7.8,
    source: "NCRB Crime in India 2021",
  },
];

// ============================================================
// MAJOR CYBER THREATS
// ============================================================

export const MAJOR_CYBER_THREATS: MajorCyberThreat[] = [
  {
    threatType: "UPI / Payment Gateway Fraud",
    description:
      "High-volume UPI fraud targeting government employees, business owners, and students through fake payment requests and QR code scams.",
    riskLevel: "Critical",
    targetedDemographic: "Government employees, business owners, students",
    reportedIncidents: "~300+ cases per year",
  },
  {
    threatType: "Sextortion and Cyber Blackmail",
    description:
      "Victims befriended on social media or dating apps; intimate content recorded during video calls and used for extortion.",
    riskLevel: "High",
    targetedDemographic: "Adults 20–45, professionals",
    reportedIncidents: "~120 cases per year",
  },
  {
    threatType: "Investment / Trading App Scam",
    description:
      "Fraudulent investment platforms promising high returns via WhatsApp groups; victims lose lakhs before platforms disappear.",
    riskLevel: "High",
    targetedDemographic: "Working professionals, retirees",
    reportedIncidents: "~90 cases per year",
  },
  {
    threatType: "OTP and Vishing Fraud",
    description:
      "Callers impersonating bank officials, TRAI, or Income Tax officers coerce victims into sharing OTPs or transferring funds.",
    riskLevel: "High",
    targetedDemographic: "Senior citizens, homemakers, general public",
    reportedIncidents: "~250 cases per year",
  },
  {
    threatType: "Ransomware and Business Email Compromise",
    description:
      "Targeted attacks on Chandigarh's IT-enabled businesses and government offices through malicious attachments and BEC schemes.",
    riskLevel: "High",
    targetedDemographic: "IT firms, government offices, SMEs",
    reportedIncidents: "~30 cases per year",
  },
  {
    threatType: "Online Loan App Fraud",
    description:
      "Predatory instant loan apps harvest contacts and personal data, harass borrowers, and charge exorbitant hidden fees.",
    riskLevel: "High",
    targetedDemographic: "Low-income workers, students",
    reportedIncidents: "~100 cases per year",
  },
  {
    threatType: "Social Media Account Hacking",
    description:
      "Instagram, Facebook, and WhatsApp account takeover; hacked accounts used to defraud contacts or spread misinformation.",
    riskLevel: "Medium",
    targetedDemographic: "Youth, small business owners",
    reportedIncidents: "~80 cases per year",
  },
];

// ============================================================
// COMMON SCAMS AND FRAUDS
// ============================================================

export const COMMON_SCAMS: CommonScam[] = [
  {
    scamName: "Customs / Parcel Scam",
    modus:
      "Victims receive calls claiming a parcel in their name has been intercepted containing contraband; threatened with arrest unless paying a 'clearance fee'.",
    estimatedAnnualVictims: "50–100",
    averageLossPerVictim: "₹50,000 – ₹5,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Fake Government Job / Admission Scam",
    modus:
      "Fraudsters pose as PGI, PGIMER recruitment agents or Punjab/Haryana government officials, charging fees for fake job allotments.",
    estimatedAnnualVictims: "80–150",
    averageLossPerVictim: "₹20,000 – ₹2,00,000",
    reportingTrend: "Stable",
  },
  {
    scamName: "Cryptocurrency Investment Scam",
    modus:
      "Fake cryptocurrency exchanges or trading groups on Telegram/WhatsApp offer guaranteed returns; funds vanish after withdrawal requests.",
    estimatedAnnualVictims: "30–60",
    averageLossPerVictim: "₹1,00,000 – ₹20,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Matrimonial Fraud",
    modus:
      "Fraudsters on matrimonial sites build trust over weeks, then demand money citing medical emergency or visa fees before disappearing.",
    estimatedAnnualVictims: "40–80",
    averageLossPerVictim: "₹30,000 – ₹5,00,000",
    reportingTrend: "Stable",
  },
  {
    scamName: "Fake Property / Rental Scam",
    modus:
      "Fake property listings for Chandigarh sectors targeting migrants; advance payment collected, no property delivered.",
    estimatedAnnualVictims: "60–100",
    averageLossPerVictim: "₹15,000 – ₹1,00,000",
    reportingTrend: "Increasing",
  },
];

// ============================================================
// HIGH RISK REGIONS
// ============================================================

export const HIGH_RISK_REGIONS: HighRiskRegion[] = [
  {
    sector: "Sector 17",
    area: "Sector 17 (City Centre / Commercial Hub)",
    riskLevel: "Critical",
    primaryThreats: [
      "ATM Skimming",
      "UPI Fraud",
      "Business Email Compromise",
      "Online Banking Fraud",
    ],
    remarks:
      "Highest commercial activity; multiple banks, ATMs, and retail concentrated here. Highest ATM-related fraud reports.",
  },
  {
    sector: "Sector 22",
    area: "Sector 22 (IT and Business District)",
    riskLevel: "High",
    primaryThreats: ["Ransomware", "BEC", "Phishing", "Data Theft"],
    remarks:
      "Concentration of IT companies and co-working spaces; targeted by sophisticated cyber attacks.",
  },
  {
    sector: "Sector 34–35",
    area: "Sector 34–35 (University / Student Hub)",
    riskLevel: "High",
    primaryThreats: [
      "Online Loan App Fraud",
      "Social Media Hacking",
      "Fake Job Scams",
      "Investment Scams",
    ],
    remarks:
      "Large student population from Punjab and Haryana; high social media usage and low financial literacy.",
  },
  {
    area: "Industrial Area Phase I & II",
    riskLevel: "High",
    primaryThreats: [
      "Business Email Compromise",
      "Payment Fraud",
      "Supply Chain Scams",
    ],
    remarks:
      "SMEs and industrial units targeted through fake vendor emails and payment redirection scams.",
  },
  {
    area: "Manimajra and Peripheral Areas",
    riskLevel: "Medium",
    primaryThreats: [
      "OTP Fraud",
      "Online Marketplace Fraud",
      "Loan App Harassment",
    ],
    remarks:
      "Densely populated working-class neighbourhood; rising smartphone penetration with limited cyber awareness.",
  },
];

// ============================================================
// CYBER POLICE STATIONS
// ============================================================

export const CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "CHPS001",
    unionTerritory: "Chandigarh",
    district: "Chandigarh",
    pincode: "160017",
    stationName: "Chandigarh Police Cyber Crime Cell, Sector 9",
    address:
      "Commissioner of Police Office, Sector 9, Chandigarh 160017",
    phone: "0172-2740055",
    email: "cybercrime@chandigarhpolice.gov.in",
    website: "https://chandigarhpolice.gov.in",
    latitude: 30.7414,
    longitude: 76.7682,
    reportingLink: "https://chandigarhpolice.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST; emergency 24×7 via 112",
    jurisdictionArea: "Entire Union Territory of Chandigarh",
  },
  {
    id: "CHPS002",
    unionTerritory: "Chandigarh",
    district: "Chandigarh",
    pincode: "160022",
    stationName: "Chandigarh Police Special Task Force – Cyber Wing",
    address:
      "STF Office, Sector 36-B, Chandigarh 160036",
    phone: "0172-2604100",
    email: "stf@chandigarhpolice.gov.in",
    website: "https://chandigarhpolice.gov.in",
    latitude: 30.7223,
    longitude: 76.7716,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Complex and organised cyber crime cases across Chandigarh",
  },
];

// ============================================================
// CYBER CELLS
// ============================================================

export const CYBER_CELLS: CyberCell[] = [
  {
    id: "CHCELL001",
    cellName: "Chandigarh Police Cyber Crime Cell",
    parentOrganization: "Chandigarh Police",
    area: "Chandigarh (UT)",
    address:
      "Commissioner of Police Office, Sector 9, Chandigarh 160017",
    phone: "0172-2740055",
    email: "cybercrime@chandigarhpolice.gov.in",
    operationalSince: "2012",
    specializations: [
      "Financial Cyber Fraud",
      "Social Media Crime",
      "Sextortion",
      "Digital Forensics",
      "Ransomware Response",
      "Dark Net Monitoring",
    ],
  },
  {
    id: "CHCELL002",
    cellName: "Chandigarh Police Women Cyber Help Desk",
    parentOrganization: "Chandigarh Police",
    area: "Chandigarh (UT)",
    address:
      "Commissioner of Police Office, Sector 9, Chandigarh 160017",
    phone: "0172-2749900",
    email: "women.cyber@chandigarhpolice.gov.in",
    operationalSince: "2018",
    specializations: [
      "Cyber Harassment",
      "Stalking",
      "Morphed Images",
      "Domestic Digital Abuse",
    ],
  },
  {
    id: "CHCELL003",
    cellName: "National Cyber Forensic Laboratory (NCFL) – Regional Node, Chandigarh",
    parentOrganization: "Ministry of Home Affairs / CBI",
    area: "Chandigarh (Regional)",
    address:
      "Sector 18, Chandigarh (Liaison via Chandigarh Police HQ)",
    phone: "0172-2740055",
    email: "cybercrime@chandigarhpolice.gov.in",
    operationalSince: "2021",
    specializations: [
      "Digital Forensics",
      "Evidence Analysis",
      "Malware Analysis",
      "Mobile Forensics",
    ],
  },
];

// ============================================================
// LAW ENFORCEMENT CONTACTS
// ============================================================

export const LAW_ENFORCEMENT_CONTACTS: LawEnforcementContact[] = [
  {
    organizationName: "Chandigarh Police – Headquarters",
    role: "Commissioner of Police, Chandigarh",
    phone: "0172-2740055",
    alternatePhone: "0172-2749900",
    email: "cp@chandigarhpolice.gov.in",
    address:
      "Commissioner of Police Office, Sector 9, Chandigarh 160017",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "Punjab and Haryana High Court",
    role: "Registrar General (for cyber crime contempt/court-related matters)",
    phone: "0172-2747101",
    email: "registrar@phhc.nic.in",
    address: "Punjab and Haryana High Court, Sector 1, Chandigarh 160001",
    availableHours: "Monday–Friday, 10:00–17:00 IST",
  },
  {
    organizationName: "Cyber Crime Cell – National Helpline",
    role: "National Cyber Crime Reporting Portal Nodal",
    phone: "1930",
    email: "helpdesk@cybercrime.gov.in",
    address: "Ministry of Home Affairs, New Delhi",
    availableHours: "24 × 7",
  },
  {
    organizationName: "Chandigarh Police Control Room",
    role: "Emergency Response / PCR",
    phone: "112",
    alternatePhone: "0172-2722217",
    email: "pcr@chandigarhpolice.gov.in",
    address: "Sector 26, Chandigarh 160019",
    availableHours: "24 × 7",
  },
  {
    organizationName: "Enforcement Directorate – Chandigarh Zonal Office",
    role: "Financial investigation for large-scale cyber fraud and money laundering",
    phone: "0172-2703200",
    email: "ed.chandigarh@gov.in",
    address: "SCO 59-60, Sector 17-C, Chandigarh 160017",
    availableHours: "Monday–Friday, 10:00–17:00 IST",
  },
];

// ============================================================
// EMERGENCY CONTACTS
// ============================================================

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    service: "Police Emergency",
    number: "100",
    type: "Police",
    availableHours: "24 × 7",
  },
  {
    service: "Unified Emergency Number",
    number: "112",
    type: "Police",
    availableHours: "24 × 7",
    remarks: "Single emergency number for police, ambulance, and fire.",
  },
  {
    service: "National Cyber Crime Helpline",
    number: "1930",
    type: "Cyber",
    availableHours: "24 × 7",
    remarks:
      "Report financial cyber fraud; golden hour intervention can freeze fraudulent transactions.",
  },
  {
    service: "Ambulance",
    number: "108",
    type: "Medical",
    availableHours: "24 × 7",
  },
  {
    service: "Fire",
    number: "101",
    type: "Fire",
    availableHours: "24 × 7",
  },
  {
    service: "Women Helpline",
    number: "1091",
    type: "Helpline",
    availableHours: "24 × 7",
    remarks: "Cyber harassment, stalking, and online violence against women.",
  },
  {
    service: "Child Helpline",
    number: "1098",
    type: "Helpline",
    availableHours: "24 × 7",
    remarks: "POCSO-related cyber crimes, online child sexual abuse material.",
  },
  {
    service: "Chandigarh Police Cyber Crime Cell Direct",
    number: "0172-2740055",
    type: "Cyber",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
];

// ============================================================
// REPORTING RESOURCES
// ============================================================

export const REPORTING_RESOURCES: ReportingResource[] = [
  {
    resourceName: "National Cyber Crime Reporting Portal",
    resourceType: "Online Portal",
    contactOrUrl: "https://www.cybercrime.gov.in",
    description:
      "Primary government portal for filing cyber crime complaints, covering financial fraud, social media crimes, and other offences.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "Chandigarh Police Online Complaint Portal",
    resourceType: "Online Portal",
    contactOrUrl: "https://chandigarhpolice.gov.in",
    description:
      "Chandigarh Police official portal with FIR tracking, online complaint submission, and cyber crime information.",
    availableLanguages: ["English", "Hindi"],
  },
  {
    resourceName: "National Cyber Crime Helpline",
    resourceType: "Helpline",
    contactOrUrl: "1930",
    description:
      "Toll-free 24×7 number; immediate reporting of financial fraud enables banks to freeze transactions before funds are transferred.",
    availableLanguages: ["Hindi", "English", "Punjabi", "Regional languages"],
  },
  {
    resourceName: "Chandigarh Police Cyber Crime Cell – In Person",
    resourceType: "In-Person",
    contactOrUrl:
      "Commissioner of Police Office, Sector 9, Chandigarh 160017",
    description:
      "Walk-in complaint registration with dedicated cyber crime officers; bring ID, device, screenshots, and transaction records.",
    availableLanguages: ["Hindi", "English", "Punjabi"],
  },
  {
    resourceName: "Cyber Crime Cell Email",
    resourceType: "Email",
    contactOrUrl: "cybercrime@chandigarhpolice.gov.in",
    description:
      "Email complaints with attachments; response typically within 24–48 hours for non-emergency cases.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "RBI Sachet Portal (Banking Fraud)",
    resourceType: "Online Portal",
    contactOrUrl: "https://sachet.rbi.org.in",
    description:
      "Report unauthorised financial transactions, ponzi schemes, and unregistered deposit-taking entities to the RBI.",
    availableLanguages: ["Hindi", "English"],
  },
];

// ============================================================
// IMPORTANT AREAS
// ============================================================

export const IMPORTANT_AREAS: ImportantArea[] = [
  {
    areaName: "Sector 17 (City Centre)",
    type: "Commercial",
    population: 28000,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Central commercial hub with heavy banking and ATM activity",
      "High footfall creating ATM skimming and POS fraud opportunities",
      "Major retail, hospitality, and business establishments",
    ],
  },
  {
    areaName: "IT Park, Rajiv Gandhi Chandigarh Technology Park",
    type: "Industrial",
    population: 12000,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Home to major IT and ITES companies",
      "Ransomware, BEC, and insider threat risks",
      "Chandigarh's primary digital economy hub",
    ],
  },
  {
    areaName: "Sector 34 (University / Student Zone)",
    type: "Educational",
    population: 45000,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "High concentration of students from Punjab and Haryana",
      "Online job scams, fake scholarship frauds, loan app harassment",
      "Panjab University and affiliated colleges nearby",
    ],
  },
  {
    areaName: "Manimajra",
    type: "Residential",
    population: 95000,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "Medium",
    notableFeatures: [
      "Dense working-class residential area",
      "Rising UPI fraud and online marketplace fraud",
      "Lower cyber awareness among elderly residents",
    ],
  },
  {
    areaName: "Industrial Area Phase I & II",
    type: "Industrial",
    population: 20000,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "Medium",
    notableFeatures: [
      "SMEs and manufacturing units",
      "Business email compromise targeting payment processes",
      "Supply chain fraud targeting procurement departments",
    ],
  },
];

// ============================================================
// INDEX UTILITIES
// ============================================================

function buildIndex<K extends string, T>(
  items: T[],
  keySelector: (item: T) => K
): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const key = keySelector(item).trim().toLowerCase();
    if (!key) return acc;
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}

export const CYBER_STATIONS_BY_AREA = buildIndex(
  CYBER_POLICE_STATIONS,
  (s) => s.district
);
export const CYBER_CELLS_BY_SPECIALIZATION = CYBER_CELLS.reduce<
  Record<string, CyberCell[]>
>((acc, cell) => {
  cell.specializations.forEach((spec) => {
    const key = spec.trim().toLowerCase();
    acc[key] = acc[key] || [];
    acc[key].push(cell);
  });
  return acc;
}, {});
export const HIGH_RISK_REGIONS_BY_LEVEL = buildIndex(
  HIGH_RISK_REGIONS,
  (r) => r.riskLevel
);
export const THREATS_BY_RISK_LEVEL = buildIndex(
  MAJOR_CYBER_THREATS,
  (t) => t.riskLevel
);export default {
  profile: UT_PROFILE,
  crimeStatistics: CRIME_STATISTICS,
  cyberCrimeStatistics: CYBER_CRIME_STATISTICS,
  majorCyberThreats: MAJOR_CYBER_THREATS,
  commonScams: COMMON_SCAMS,
  highRiskRegions: HIGH_RISK_REGIONS,
  cyberPoliceStations: CYBER_POLICE_STATIONS,
  cyberCells: CYBER_CELLS,
  lawEnforcementContacts: LAW_ENFORCEMENT_CONTACTS,
  emergencyContacts: EMERGENCY_CONTACTS,
  reportingResources: REPORTING_RESOURCES,
  importantAreas: IMPORTANT_AREAS,
};
