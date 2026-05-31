// ============================================================
// UNION TERRITORY INTELLIGENCE FILE
// Dadra and Nagar Haveli and Daman and Diu
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
  district: string;
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
  district: string;
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
  type: "Police" | "Cyber" | "Medical" | "Fire" | "Coast Guard" | "Helpline";
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

export interface ImportantDistrict {
  districtName: string;
  region: "Dadra and Nagar Haveli" | "Daman" | "Diu";
  headquarters: string;
  population: number;
  area: number; // sq km
  digitalPenetration: string;
  cyberCrimeRisk: "Low" | "Medium" | "High";
  notableFeatures: string[];
}

// ============================================================
// UNION TERRITORY PROFILE
// (Merged UT formed on 26 January 2020 by merging
// Dadra and Nagar Haveli UT with Daman and Diu UT)
// ============================================================

export const UT_PROFILE: UTProfile = {
  name: "Dadra and Nagar Haveli and Daman and Diu",
  capital: "Daman",
  administrativeHeadquarters: "Daman",
  established: "2020-01-26",
  area: 603,
  population: 586956,
  malePopulation: 341988,
  femalePopulation: 244968,
  sexRatio: 716,
  literacyRate: 87.07,
  urbanizationPercent: 46.6,
  workforceParticipationRate: 52.3,
  numberOfDistricts: 3,
  languagesSpoken: [
    "Gujarati",
    "Hindi",
    "Bhili",
    "Marathi",
    "English",
    "Portuguese (remnant)",
  ],
  officialLanguage: "Hindi",
  highCourt: "Bombay High Court (cases referred to Gujarat HC bench also)",
};

// ============================================================
// CRIME STATISTICS
// ============================================================

export const CRIME_STATISTICS: CrimeStatistics[] = [
  {
    year: 2022,
    totalCognizableCrimes: 3241,
    crimeRatePerLakhPopulation: 552.2,
    violentCrimes: 287,
    propertyCrimes: 643,
    cyberCrimes: 121,
    fraudCases: 234,
    source: "NCRB Crime in India Report 2022",
  },
  {
    year: 2021,
    totalCognizableCrimes: 2987,
    crimeRatePerLakhPopulation: 508.9,
    violentCrimes: 261,
    propertyCrimes: 589,
    cyberCrimes: 94,
    fraudCases: 198,
    source: "NCRB Crime in India Report 2021",
  },
];

// ============================================================
// CYBER CRIME STATISTICS
// ============================================================

export const CYBER_CRIME_STATISTICS: CyberCrimeStatistics[] = [
  {
    year: 2022,
    totalCyberCrimesRegistered: 121,
    financialFrauds: 72,
    onlineHarassment: 18,
    identityTheft: 9,
    hacking: 6,
    socialMediaCrimes: 10,
    otherCyberCrimes: 6,
    totalAmountDefrauded: "₹3.8 crore (approx.)",
    convictionRate: 7.4,
    source: "NCRB Crime in India 2022 / DNHDD Police Annual Report",
  },
  {
    year: 2021,
    totalCyberCrimesRegistered: 94,
    financialFrauds: 54,
    onlineHarassment: 14,
    identityTheft: 7,
    hacking: 4,
    socialMediaCrimes: 8,
    otherCyberCrimes: 7,
    totalAmountDefrauded: "₹2.4 crore (approx.)",
    convictionRate: 5.3,
    source: "NCRB Crime in India 2021",
  },
];

// ============================================================
// MAJOR CYBER THREATS
// ============================================================

export const MAJOR_CYBER_THREATS: MajorCyberThreat[] = [
  {
    threatType: "Industrial Sector Cyber Fraud",
    description:
      "Fraudulent vendor emails and payment redirection targeting Silvassa's dense manufacturing cluster; BEC attacks on procurement and accounts departments.",
    riskLevel: "High",
    targetedDemographic: "Factory owners, industrial SMEs",
    reportedIncidents: "~25 cases per year",
  },
  {
    threatType: "UPI / Mobile Banking Fraud",
    description:
      "Migrant workers targeted through fake UPI payment requests and fake customer care calls for remittance services.",
    riskLevel: "High",
    targetedDemographic: "Migrant industrial workers, general public",
    reportedIncidents: "~40 cases per year",
  },
  {
    threatType: "Tourism-related Online Fraud",
    description:
      "Fake hotel, resort, and watersports booking portals defrauding tourists visiting Diu; fake travel agents collecting advance payments.",
    riskLevel: "High",
    targetedDemographic: "Tourists, travel agents",
    reportedIncidents: "~30 cases per year",
  },
  {
    threatType: "OTP / Phishing Fraud",
    description:
      "Calls and SMS impersonating SBI, DENA Bank, or government portals; OTP harvesting targeting semi-urban populations.",
    riskLevel: "Medium",
    targetedDemographic: "General public, senior citizens",
    reportedIncidents: "~35 cases per year",
  },
  {
    threatType: "Fake Job Offer Scam",
    description:
      "Fraudulent job offers targeting migrants seeking employment in industrial areas of Silvassa and Daman.",
    riskLevel: "Medium",
    targetedDemographic: "Migrant workers, unemployed youth",
    reportedIncidents: "~15 cases per year",
  },
  {
    threatType: "Social Media Harassment",
    description:
      "Online harassment and morphed image sharing targeting women in the UT via Facebook and WhatsApp.",
    riskLevel: "Medium",
    targetedDemographic: "Women, young adults",
    reportedIncidents: "~12 cases per year",
  },
];

// ============================================================
// COMMON SCAMS AND FRAUDS
// ============================================================

export const COMMON_SCAMS: CommonScam[] = [
  {
    scamName: "Industrial Vendor Payment Fraud",
    modus:
      "Fraudsters intercept or spoof vendor email communications with Silvassa factories, redirecting payment to their accounts by changing bank details.",
    estimatedAnnualVictims: "10–20 businesses",
    averageLossPerVictim: "₹2,00,000 – ₹50,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Fake Tourism / Resort Booking (Diu)",
    modus:
      "Fraudulent websites mimicking Diu resort and watersports operators collect advance bookings; services not rendered.",
    estimatedAnnualVictims: "50–100 tourists",
    averageLossPerVictim: "₹5,000 – ₹30,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Remittance Fraud Targeting Migrant Workers",
    modus:
      "Fake money transfer agents and apps target migrant workers in Silvassa industrial zones promising lower transfer fees.",
    estimatedAnnualVictims: "30–60",
    averageLossPerVictim: "₹3,000 – ₹15,000",
    reportingTrend: "Stable",
  },
  {
    scamName: "KYC Update Fraud",
    modus:
      "Fraudulent calls claiming bank or SIM KYC expiry, directing victims to share OTPs or download remote-access apps.",
    estimatedAnnualVictims: "20–40",
    averageLossPerVictim: "₹10,000 – ₹1,00,000",
    reportingTrend: "Stable",
  },
  {
    scamName: "Fake Factory Recruitment Scam",
    modus:
      "Fake job portals advertising employment in Daman's textile/pharmaceutical factories; registration fees collected upfront.",
    estimatedAnnualVictims: "25–50",
    averageLossPerVictim: "₹5,000 – ₹25,000",
    reportingTrend: "Increasing",
  },
];

// ============================================================
// HIGH RISK REGIONS
// ============================================================

export const HIGH_RISK_REGIONS: HighRiskRegion[] = [
  {
    district: "Dadra and Nagar Haveli",
    area: "Silvassa Industrial Area",
    riskLevel: "High",
    primaryThreats: [
      "Business Email Compromise",
      "Industrial Vendor Fraud",
      "Fake Recruitment Scams",
      "UPI Fraud",
    ],
    remarks:
      "Highest concentration of industrial units in the UT; BEC attacks and payment fraud increasing sharply among SMEs.",
  },
  {
    district: "Daman",
    area: "Daman City and Industrial Belt",
    riskLevel: "High",
    primaryThreats: [
      "OTP Fraud",
      "Online Marketplace Fraud",
      "UPI Fraud",
      "Migrant Worker Remittance Fraud",
    ],
    remarks:
      "Major commercial port town with large migrant worker population; high financial fraud volume.",
  },
  {
    district: "Diu",
    area: "Diu Town and Tourism Zone",
    riskLevel: "Medium",
    primaryThreats: [
      "Fake Booking Portals",
      "Tourism Scams",
      "Social Media Fraud",
    ],
    remarks:
      "Popular tourist destination; fake online booking sites and fake travel agents the primary cyber threat.",
  },
];

// ============================================================
// CYBER POLICE STATIONS
// ============================================================

export const CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "DNHPS001",
    unionTerritory: "Dadra and Nagar Haveli and Daman and Diu",
    district: "Daman",
    pincode: "396210",
    stationName: "Daman District Cyber Crime Cell",
    address:
      "SP Office, Fort Area, Daman, Dadra and Nagar Haveli and Daman and Diu 396210",
    phone: "0260-2254801",
    email: "cybercrime.daman@dnhddpolice.gov.in",
    website: "https://dnhddpolice.gov.in",
    latitude: 20.3974,
    longitude: 72.8328,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Daman District",
  },
  {
    id: "DNHPS002",
    unionTerritory: "Dadra and Nagar Haveli and Daman and Diu",
    district: "Dadra and Nagar Haveli",
    pincode: "396230",
    stationName: "Dadra and Nagar Haveli Cyber Crime Cell",
    address:
      "SP Office, Amli Road, Silvassa, Dadra and Nagar Haveli 396230",
    phone: "0260-2642900",
    email: "cybercrime.silvassa@dnhddpolice.gov.in",
    website: "https://dnhddpolice.gov.in",
    latitude: 20.2737,
    longitude: 72.9960,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Dadra and Nagar Haveli District",
  },
  {
    id: "DNHPS003",
    unionTerritory: "Dadra and Nagar Haveli and Daman and Diu",
    district: "Diu",
    pincode: "362520",
    stationName: "Diu District Cyber Crime Help Desk",
    address:
      "Diu Police Station, Fort Road, Diu, Dadra and Nagar Haveli and Daman and Diu 362520",
    phone: "02875-252333",
    email: "cybercrime.diu@dnhddpolice.gov.in",
    website: "https://dnhddpolice.gov.in",
    latitude: 20.7144,
    longitude: 70.9874,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Diu District",
  },
];

// ============================================================
// CYBER CELLS
// ============================================================

export const CYBER_CELLS: CyberCell[] = [
  {
    id: "DNHCELL001",
    cellName: "DNHDD Police Cyber Crime Cell – Daman (Nodal)",
    parentOrganization: "Dadra and Nagar Haveli and Daman and Diu Police",
    district: "Daman",
    address:
      "Superintendent of Police Office, Fort Area, Daman 396210",
    phone: "0260-2254801",
    email: "cybercrime.daman@dnhddpolice.gov.in",
    operationalSince: "2017",
    specializations: [
      "Financial Cyber Fraud",
      "Digital Forensics",
      "Industrial BEC",
      "Social Media Crime",
      "Coordination with Gujarat Police",
    ],
  },
  {
    id: "DNHCELL002",
    cellName: "Silvassa Industrial Cyber Fraud Desk",
    parentOrganization: "Dadra and Nagar Haveli and Daman and Diu Police",
    district: "Dadra and Nagar Haveli",
    address: "SP Office, Silvassa, Dadra and Nagar Haveli 396230",
    phone: "0260-2642900",
    email: "cybercrime.silvassa@dnhddpolice.gov.in",
    operationalSince: "2020",
    specializations: [
      "Industrial Vendor Payment Fraud",
      "Business Email Compromise",
      "Factory Recruitment Scams",
    ],
  },
];

// ============================================================
// LAW ENFORCEMENT CONTACTS
// ============================================================

export const LAW_ENFORCEMENT_CONTACTS: LawEnforcementContact[] = [
  {
    organizationName: "DNHDD Police – Superintendent of Police, Daman",
    role: "Superintendent of Police (overall territorial command)",
    phone: "0260-2254801",
    alternatePhone: "0260-2642900",
    email: "sp.dnhdd@dnhddpolice.gov.in",
    address: "SP Office, Fort Area, Daman 396210",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "DNHDD Police – SP Office, Silvassa",
    role: "Superintendent of Police, Dadra and Nagar Haveli",
    phone: "0260-2642900",
    email: "sp.silvassa@dnhddpolice.gov.in",
    address: "SP Office, Amli Road, Silvassa 396230",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "National Cyber Crime Helpline",
    role: "National Cyber Crime Reporting Portal Nodal",
    phone: "1930",
    email: "helpdesk@cybercrime.gov.in",
    address: "Ministry of Home Affairs, New Delhi",
    availableHours: "24 × 7",
  },
  {
    organizationName: "DNHDD Administration – Home Department",
    role: "Administrator's Secretariat (Law and Order oversight)",
    phone: "0260-2230770",
    email: "admin.dnhdd@nic.in",
    address: "Administrator's Secretariat, Daman 396210",
    availableHours: "Monday–Friday, 09:30–17:30 IST",
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
  },
  {
    service: "National Cyber Crime Helpline",
    number: "1930",
    type: "Cyber",
    availableHours: "24 × 7",
    remarks:
      "Call immediately after financial cyber fraud; freeze window for bank intervention.",
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
    service: "Indian Coast Guard – Daman",
    number: "1554",
    type: "Coast Guard",
    availableHours: "24 × 7",
    remarks: "Maritime security and coastal distress for Daman and Diu.",
  },
  {
    service: "Women Helpline",
    number: "1091",
    type: "Helpline",
    availableHours: "24 × 7",
  },
  {
    service: "Child Helpline",
    number: "1098",
    type: "Helpline",
    availableHours: "24 × 7",
  },
  {
    service: "Daman Police Control Room",
    number: "0260-2252200",
    type: "Police",
    availableHours: "24 × 7",
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
      "Primary government portal for all cyber crime complaints. Recommended for financial fraud, social media abuse, and content-based offences.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "National Cyber Crime Helpline",
    resourceType: "Helpline",
    contactOrUrl: "1930",
    description:
      "Toll-free 24×7 helpline; critical for immediate freeze of funds in financial fraud cases.",
    availableLanguages: ["Hindi", "English", "Gujarati", "Regional languages"],
  },
  {
    resourceName: "DNHDD Police Email Complaint",
    resourceType: "Email",
    contactOrUrl: "cybercrime.daman@dnhddpolice.gov.in",
    description:
      "Send cyber crime complaint with screenshots, transaction receipts, and device information.",
    availableLanguages: ["Hindi", "English", "Gujarati"],
  },
  {
    resourceName: "SP Office, Daman – In Person",
    resourceType: "In-Person",
    contactOrUrl: "SP Office, Fort Area, Daman 396210",
    description:
      "Walk-in complaint registration for Daman district; available Monday–Saturday during office hours.",
    availableLanguages: ["Hindi", "English", "Gujarati", "Marathi"],
  },
  {
    resourceName: "SP Office, Silvassa – In Person",
    resourceType: "In-Person",
    contactOrUrl: "SP Office, Amli Road, Silvassa, Dadra and Nagar Haveli 396230",
    description:
      "Walk-in complaint registration for Dadra and Nagar Haveli district.",
    availableLanguages: ["Hindi", "English", "Gujarati", "Bhili"],
  },
  {
    resourceName: "RBI Sachet Portal",
    resourceType: "Online Portal",
    contactOrUrl: "https://sachet.rbi.org.in",
    description:
      "Report unauthorised financial transactions and unregistered money transfer operators.",
    availableLanguages: ["Hindi", "English"],
  },
];

// ============================================================
// IMPORTANT DISTRICTS
// ============================================================

export const IMPORTANT_DISTRICTS: ImportantDistrict[] = [
  {
    districtName: "Dadra and Nagar Haveli",
    region: "Dadra and Nagar Haveli",
    headquarters: "Silvassa",
    population: 342853,
    area: 491,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Major industrial belt with 3,000+ manufacturing units",
      "Largest migrant worker concentration in the UT",
      "Business email compromise targeting textile, chemical, and plastics industries",
      "Tribal hinterland areas with low digital literacy",
      "State Bank of India and cooperative banks serve migrant banking needs",
    ],
  },
  {
    districtName: "Daman",
    region: "Daman",
    headquarters: "Daman",
    population: 191173,
    area: 72,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Administrative capital of the merged UT",
      "Liquor tourism hub attracting visitors from Gujarat",
      "Large migrant population in Daman Industrial Estate",
      "OTP and mobile banking fraud concentrated here",
      "Portuguese heritage sites and coastline",
    ],
  },
  {
    districtName: "Diu",
    region: "Diu",
    headquarters: "Diu",
    population: 52930,
    area: 40,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "Medium",
    notableFeatures: [
      "Popular beach and heritage tourism destination",
      "Fake travel and resort booking scams prevalent",
      "Small island economy dependent on tourism and fishing",
      "Connected to mainland via Saurashtra, Gujarat",
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

export const CYBER_STATIONS_BY_DISTRICT = buildIndex(
  CYBER_POLICE_STATIONS,
  (s) => s.district
);
export const CYBER_CELLS_BY_DISTRICT = buildIndex(
  CYBER_CELLS,
  (c) => c.district
);
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
  importantDistricts: IMPORTANT_DISTRICTS,
};
