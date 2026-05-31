// ============================================================
// UNION TERRITORY INTELLIGENCE FILE
// Andaman and Nicobar Islands
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
  totalAmountDefrauded: string; // in INR (approximate)
  convictionRate: number; // percentage
  source: string;
}

export interface MajorCyberThreat {
  threatType: string;
  description: string;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  targetedDemographic: string;
  reportedIncidents: string; // approximate annual figure or trend
}

export interface CommonScam {
  scamName: string;
  modus: string;
  estimatedAnnualVictims: string;
  averageLossPerVictim: string; // in INR
  reportingTrend: "Increasing" | "Stable" | "Decreasing";
}

export interface HighRiskRegion {
  district: string;
  island?: string;
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
  headOfUnit?: string;
  designation?: string;
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
  headquarters: string;
  population: number;
  area: number; // sq km
  digitalPenetration: string; // Low / Medium / High
  cyberCrimeRisk: "Low" | "Medium" | "High";
  notableFeatures: string[];
}

// ============================================================
// UNION TERRITORY PROFILE
// ============================================================

export const UT_PROFILE: UTProfile = {
  name: "Andaman and Nicobar Islands",
  capital: "Port Blair",
  administrativeHeadquarters: "Port Blair",
  established: "1956-11-01",
  area: 8249,
  population: 380581,
  malePopulation: 202330,
  femalePopulation: 178251,
  sexRatio: 881,
  literacyRate: 86.27,
  urbanizationPercent: 37.7,
  workforceParticipationRate: 41.1,
  numberOfDistricts: 3,
  languagesSpoken: [
    "Hindi",
    "Bengali",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Nicobarese",
    "English",
  ],
  officialLanguage: "Hindi",
  highCourt: "Calcutta High Court (Circuit Bench at Port Blair)",
};

// ============================================================
// CRIME STATISTICS
// ============================================================

export const CRIME_STATISTICS: CrimeStatistics[] = [
  {
    year: 2022,
    totalCognizableCrimes: 2104,
    crimeRatePerLakhPopulation: 552.9,
    violentCrimes: 312,
    propertyCrimes: 487,
    cyberCrimes: 58,
    fraudCases: 143,
    source: "NCRB Crime in India Report 2022",
  },
  {
    year: 2021,
    totalCognizableCrimes: 1987,
    crimeRatePerLakhPopulation: 522.3,
    violentCrimes: 289,
    propertyCrimes: 461,
    cyberCrimes: 44,
    fraudCases: 121,
    source: "NCRB Crime in India Report 2021",
  },
];

// ============================================================
// CYBER CRIME STATISTICS
// ============================================================

export const CYBER_CRIME_STATISTICS: CyberCrimeStatistics[] = [
  {
    year: 2022,
    totalCyberCrimesRegistered: 58,
    financialFrauds: 31,
    onlineHarassment: 9,
    identityTheft: 5,
    hacking: 3,
    socialMediaCrimes: 6,
    otherCyberCrimes: 4,
    totalAmountDefrauded: "₹42 lakh (approx.)",
    convictionRate: 8.6,
    source: "NCRB Crime in India 2022 / Andaman Police Annual Report",
  },
  {
    year: 2021,
    totalCyberCrimesRegistered: 44,
    financialFrauds: 22,
    onlineHarassment: 7,
    identityTheft: 4,
    hacking: 2,
    socialMediaCrimes: 5,
    otherCyberCrimes: 4,
    totalAmountDefrauded: "₹28 lakh (approx.)",
    convictionRate: 6.8,
    source: "NCRB Crime in India 2021",
  },
];

// ============================================================
// MAJOR CYBER THREATS
// ============================================================

export const MAJOR_CYBER_THREATS: MajorCyberThreat[] = [
  {
    threatType: "OTP / UPI Fraud",
    description:
      "Fraudsters posing as bank officials or government agents trick victims into sharing OTPs for fund transfers via UPI platforms.",
    riskLevel: "High",
    targetedDemographic: "General public, senior citizens",
    reportedIncidents: "~20 cases per year",
  },
  {
    threatType: "Online Job Scams",
    description:
      "Fake employment offers targeting youth, demanding registration fees or personal documents that are then misused.",
    riskLevel: "High",
    targetedDemographic: "Youth, job seekers",
    reportedIncidents: "~10 cases per year",
  },
  {
    threatType: "Social Media Impersonation",
    description:
      "Fake profiles of local government officials or police personnel used to extort money or solicit bribes.",
    riskLevel: "Medium",
    targetedDemographic: "Government employees, general public",
    reportedIncidents: "~6 cases per year",
  },
  {
    threatType: "Maritime / Shipping Fraud",
    description:
      "Fraudulent shipping or cargo booking requests targeting island-based traders and fishermen.",
    riskLevel: "Medium",
    targetedDemographic: "Traders, fishermen, logistics operators",
    reportedIncidents: "~5 cases per year",
  },
  {
    threatType: "Tourism-related Cyber Scams",
    description:
      "Fake travel and hotel booking websites defrauding tourists visiting the islands, with phishing payment portals.",
    riskLevel: "Medium",
    targetedDemographic: "Tourists, travel agents",
    reportedIncidents: "~8 cases per year",
  },
  {
    threatType: "Phishing via SMS / Email",
    description:
      "Fraudulent messages mimicking BSNL, SBI, or government portals to harvest credentials and banking data.",
    riskLevel: "Medium",
    targetedDemographic: "All demographics",
    reportedIncidents: "~12 cases per year",
  },
];

// ============================================================
// COMMON SCAMS AND FRAUDS
// ============================================================

export const COMMON_SCAMS: CommonScam[] = [
  {
    scamName: "KYC Update Fraud",
    modus:
      "Victim receives a call or SMS claiming their SIM/bank KYC is expiring. Directed to share OTP or install remote access app.",
    estimatedAnnualVictims: "15–25",
    averageLossPerVictim: "₹15,000 – ₹50,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Fake Government Job Offer",
    modus:
      "Fraudulent letters or emails offering Central Government/ANIIDCO jobs demanding processing fees via UPI.",
    estimatedAnnualVictims: "10–20",
    averageLossPerVictim: "₹10,000 – ₹30,000",
    reportingTrend: "Stable",
  },
  {
    scamName: "Lottery / Prize Scam",
    modus:
      "SMS or WhatsApp notifications claiming prize winnings from KBC or central government schemes, demanding taxes.",
    estimatedAnnualVictims: "5–10",
    averageLossPerVictim: "₹5,000 – ₹20,000",
    reportingTrend: "Decreasing",
  },
  {
    scamName: "Online Marketplace Fraud",
    modus:
      "Buyers/sellers on OLX or Facebook Marketplace defrauded via advance payment or fake QR codes.",
    estimatedAnnualVictims: "10–15",
    averageLossPerVictim: "₹8,000 – ₹40,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Fake Tourism / Hotel Booking",
    modus:
      "Fraudulent resort and boat-tour booking portals collect advance payments for non-existent services in Andaman.",
    estimatedAnnualVictims: "20–40",
    averageLossPerVictim: "₹5,000 – ₹25,000",
    reportingTrend: "Increasing",
  },
];

// ============================================================
// HIGH RISK REGIONS
// ============================================================

export const HIGH_RISK_REGIONS: HighRiskRegion[] = [
  {
    district: "South Andaman",
    island: "Port Blair (South Andaman Island)",
    riskLevel: "High",
    primaryThreats: [
      "OTP Fraud",
      "Tourism Scams",
      "Online Marketplace Fraud",
      "Job Scams",
    ],
    remarks:
      "Highest population density and internet usage in the UT; majority of cyber crime FIRs originate here.",
  },
  {
    district: "North and Middle Andaman",
    island: "Middle Andaman, North Andaman",
    riskLevel: "Medium",
    primaryThreats: ["Phishing", "UPI Fraud", "Fake Job Offers"],
    remarks:
      "Growing mobile internet penetration increasing exposure to digital frauds; limited cyber police presence.",
  },
  {
    district: "Nicobar",
    island: "Car Nicobar, Great Nicobar",
    riskLevel: "Medium",
    primaryThreats: ["SMS Phishing", "SIM Swap Fraud"],
    remarks:
      "Restricted area with limited digital infrastructure; cyber crimes primarily mobile-based given BSNL dependency.",
  },
];

// ============================================================
// CYBER POLICE STATIONS
// ============================================================

export const CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "ANPS001",
    unionTerritory: "Andaman and Nicobar Islands",
    district: "South Andaman",
    pincode: "744101",
    stationName: "Andaman and Nicobar Police Cyber Crime Cell, Port Blair",
    address:
      "SP Office, Dollygunj, Port Blair, Andaman and Nicobar Islands 744101",
    phone: "03192-230811",
    email: "cybercrime.andaman@andamanpolice.gov.in",
    website: "https://andamanpolice.gov.in",
    latitude: 11.6234,
    longitude: 92.7265,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "All of Andaman and Nicobar Islands",
  },
];

// ============================================================
// CYBER CELLS
// ============================================================

export const CYBER_CELLS: CyberCell[] = [
  {
    id: "ANCELL001",
    cellName: "Andaman and Nicobar Islands Police Cyber Crime Cell",
    parentOrganization: "Andaman and Nicobar Islands Police",
    district: "South Andaman",
    address: "Police Headquarters, Aberdeen Bazaar, Port Blair 744101",
    phone: "03192-233400",
    email: "cybercrime.andaman@andamanpolice.gov.in",
    operationalSince: "2015",
    specializations: [
      "Financial Cyber Fraud",
      "Digital Forensics",
      "Social Media Crime",
      "Tourism-related Online Fraud",
    ],
  },
  {
    id: "ANCELL002",
    cellName: "North and Middle Andaman District Cyber Help Desk",
    parentOrganization: "Andaman and Nicobar Islands Police",
    district: "North and Middle Andaman",
    address: "SP Office, Mayabunder, North and Middle Andaman 744203",
    phone: "03192-273222",
    email: "sp.nma@andamanpolice.gov.in",
    operationalSince: "2019",
    specializations: ["Complaint Forwarding", "Cyber Awareness"],
  },
  {
    id: "ANCELL003",
    cellName: "Nicobar District Cyber Help Desk",
    parentOrganization: "Andaman and Nicobar Islands Police",
    district: "Nicobar",
    address: "SP Office, Car Nicobar, Nicobar District 744301",
    phone: "03192-260115",
    email: "sp.nicobar@andamanpolice.gov.in",
    operationalSince: "2020",
    specializations: ["Complaint Forwarding", "Cyber Awareness"],
  },
];

// ============================================================
// LAW ENFORCEMENT CONTACTS
// ============================================================

export const LAW_ENFORCEMENT_CONTACTS: LawEnforcementContact[] = [
  {
    organizationName: "Andaman and Nicobar Islands Police – Headquarters",
    role: "Inspector General of Police",
    phone: "03192-233400",
    alternatePhone: "03192-230811",
    email: "igp.andaman@andamanpolice.gov.in",
    address:
      "Police Headquarters, Aberdeen Bazaar, Port Blair, Andaman and Nicobar Islands 744101",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "South Andaman SP Office",
    role: "Superintendent of Police, South Andaman",
    phone: "03192-230811",
    email: "sp.sa@andamanpolice.gov.in",
    address: "SP Office, Dollygunj, Port Blair 744101",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "Andaman and Nicobar Command (CINCAN)",
    role: "Commander-in-Chief, Andaman and Nicobar Command",
    phone: "03192-231600",
    address:
      "HQ Andaman and Nicobar Command, Port Blair, Andaman and Nicobar Islands 744101",
    availableHours: "24 × 7 (Defence establishment)",
  },
  {
    organizationName: "Cyber Crime Cell – National Helpline",
    role: "National Cyber Crime Reporting Portal Nodal",
    phone: "1930",
    email: "helpdesk@cybercrime.gov.in",
    address: "Ministry of Home Affairs, New Delhi (central nodal authority)",
    availableHours: "24 × 7",
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
    service: "National Cyber Crime Helpline",
    number: "1930",
    type: "Cyber",
    availableHours: "24 × 7",
    remarks: "Dedicated helpline for financial cyber fraud; call immediately after being defrauded.",
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
    service: "Indian Coast Guard",
    number: "1554",
    type: "Coast Guard",
    availableHours: "24 × 7",
    remarks: "Maritime distress and coastal security; relevant for island-based incidents.",
  },
  {
    service: "Andaman and Nicobar Islands Police Control Room",
    number: "03192-233400",
    type: "Police",
    availableHours: "24 × 7",
  },
  {
    service: "Women Helpline",
    number: "1091",
    type: "Helpline",
    availableHours: "24 × 7",
    remarks: "For cyber harassment, stalking, and online violence against women.",
  },
  {
    service: "Child Helpline",
    number: "1098",
    type: "Helpline",
    availableHours: "24 × 7",
    remarks: "For online child exploitation and child abuse material.",
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
      "Central Government portal for reporting all types of cybercrime including financial fraud, social media crimes, and content-based offences.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "National Cyber Crime Helpline",
    resourceType: "Helpline",
    contactOrUrl: "1930",
    description:
      "Toll-free 24×7 helpline to report financial cyber frauds and get immediate assistance for fund recovery.",
    availableLanguages: ["Hindi", "English", "Regional Languages"],
  },
  {
    resourceName: "Andaman Police Official Website",
    resourceType: "Online Portal",
    contactOrUrl: "https://andamanpolice.gov.in",
    description:
      "Official website for Andaman and Nicobar Islands Police with online complaint filing and cyber crime information.",
    availableLanguages: ["English"],
  },
  {
    resourceName: "Cyber Crime Cell, Port Blair – In Person",
    resourceType: "In-Person",
    contactOrUrl: "SP Office, Dollygunj, Port Blair 744101",
    description:
      "Walk-in complaint registration at the territorial cyber crime cell for all districts of Andaman and Nicobar Islands.",
    availableLanguages: ["Hindi", "English", "Bengali", "Tamil", "Telugu"],
  },
  {
    resourceName: "Andaman Police Email Complaint",
    resourceType: "Email",
    contactOrUrl: "cybercrime.andaman@andamanpolice.gov.in",
    description:
      "Email-based complaint submission for cyber crimes; attach screenshots, transaction IDs, and relevant evidence.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "Cyberdost – MHA Twitter Handle",
    resourceType: "Online Portal",
    contactOrUrl: "https://twitter.com/Cyberdost",
    description:
      "Official MHA social media handle for cyber safety tips, scam alerts, and guidance on cybercrime prevention.",
    availableLanguages: ["Hindi", "English"],
  },
];

// ============================================================
// IMPORTANT DISTRICTS / CITIES
// ============================================================

export const IMPORTANT_DISTRICTS: ImportantDistrict[] = [
  {
    districtName: "South Andaman",
    headquarters: "Port Blair",
    population: 238142,
    area: 3180,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Capital district and commercial hub of UT",
      "Highest internet and mobile banking penetration",
      "Major tourist inflow increasing online fraud exposure",
      "Location of the only dedicated Cyber Crime Cell in the UT",
      "Cellular Jail, Ross Island – heritage sites with large tourist footfall",
    ],
  },
  {
    districtName: "North and Middle Andaman",
    headquarters: "Mayabunder",
    population: 105597,
    area: 3143,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "Medium",
    notableFeatures: [
      "Growing mobile internet penetration via 4G expansion",
      "Agrarian and tribal communities with low digital literacy",
      "Timber and fishery-based economy",
      "Limited cyber crime reporting infrastructure – complaints forwarded to Port Blair",
    ],
  },
  {
    districtName: "Nicobar",
    headquarters: "Car Nicobar",
    population: 36842,
    area: 1841,
    digitalPenetration: "Low",
    cyberCrimeRisk: "Medium",
    notableFeatures: [
      "Restricted area requiring Inner Line Permit",
      "Predominantly tribal population with low cyber exposure",
      "BSNL-only connectivity; broadband very limited",
      "Strategic military importance – Andaman and Nicobar Command",
      "Unique indigenous Nicobarese communities",
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
