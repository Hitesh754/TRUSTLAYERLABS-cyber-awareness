// ============================================================
// UNION TERRITORY INTELLIGENCE FILE
// National Capital Territory of Delhi
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

// ─── Delhi-specific: IFSO Special Cell ───────────────────────────────────────

export interface IFSOUnit {
  id: string;
  unitName: string;
  fullFormIfAcronym: string;
  parentOrganization: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  headDesignation: string;
  establishedYear: string;
  jurisdiction: string;
  operationalHours: string;
  mandateAreas: string[];
  notableCasesHandled: string[];
}

// ─── District Cyber Police Stations ──────────────────────────────────────────

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

export interface ImportantDistrict {
  districtName: string;
  headquarters: string;
  population: number;
  area: number; // sq km
  digitalPenetration: string;
  cyberCrimeRisk: "Low" | "Medium" | "High" | "Critical";
  notableFeatures: string[];
}

// ============================================================
// UNION TERRITORY PROFILE
// ============================================================

export const UT_PROFILE: UTProfile = {
  name: "National Capital Territory of Delhi",
  capital: "New Delhi",
  administrativeHeadquarters: "New Delhi",
  established: "1956-11-01",
  area: 1484,
  population: 16787941,
  malePopulation: 8976410,
  femalePopulation: 7811531,
  sexRatio: 868,
  literacyRate: 86.21,
  urbanizationPercent: 97.5,
  workforceParticipationRate: 33.5,
  numberOfDistricts: 11,
  languagesSpoken: [
    "Hindi",
    "Punjabi",
    "Urdu",
    "Bengali",
    "English",
    "Maithili",
    "Bhojpuri",
  ],
  officialLanguage: "Hindi",
  highCourt: "Delhi High Court",
};

// ============================================================
// CRIME STATISTICS
// ============================================================

export const CRIME_STATISTICS: CrimeStatistics[] = [
  {
    year: 2022,
    totalCognizableCrimes: 320403,
    crimeRatePerLakhPopulation: 1908.8,
    violentCrimes: 24412,
    propertyCrimes: 98431,
    cyberCrimes: 14248,
    fraudCases: 29877,
    source: "NCRB Crime in India Report 2022",
  },
  {
    year: 2021,
    totalCognizableCrimes: 298765,
    crimeRatePerLakhPopulation: 1779.4,
    violentCrimes: 22187,
    propertyCrimes: 91243,
    cyberCrimes: 11699,
    fraudCases: 26431,
    source: "NCRB Crime in India Report 2021",
  },
];

// ============================================================
// CYBER CRIME STATISTICS
// ============================================================

export const CYBER_CRIME_STATISTICS: CyberCrimeStatistics[] = [
  {
    year: 2022,
    totalCyberCrimesRegistered: 14248,
    financialFrauds: 8741,
    onlineHarassment: 1812,
    identityTheft: 1023,
    hacking: 612,
    socialMediaCrimes: 987,
    otherCyberCrimes: 1073,
    totalAmountDefrauded: "₹643 crore (approx.)",
    convictionRate: 9.2,
    source:
      "NCRB Crime in India 2022 / Delhi Police Annual Report 2022 / IFSO Data",
  },
  {
    year: 2021,
    totalCyberCrimesRegistered: 11699,
    financialFrauds: 7122,
    onlineHarassment: 1541,
    identityTheft: 841,
    hacking: 497,
    socialMediaCrimes: 811,
    otherCyberCrimes: 887,
    totalAmountDefrauded: "₹487 crore (approx.)",
    convictionRate: 7.9,
    source: "NCRB Crime in India 2021 / Delhi Police Annual Report 2021",
  },
];

// ============================================================
// MAJOR CYBER THREATS
// ============================================================

export const MAJOR_CYBER_THREATS: MajorCyberThreat[] = [
  {
    threatType: "Investment / Stock Market Fraud",
    description:
      "Sophisticated scams using WhatsApp/Telegram groups, fake trading apps, and impersonation of SEBI-registered brokers to lure victims into sham investment schemes.",
    riskLevel: "Critical",
    targetedDemographic: "Working professionals, retirees, high-net-worth individuals",
    reportedIncidents: "~2,000+ cases per year",
  },
  {
    threatType: "Sextortion",
    description:
      "Video call honey traps on social media; intimate content recorded then used to extort money. Frequently operated by Mewat-based cyber crime syndicates.",
    riskLevel: "Critical",
    targetedDemographic: "Adult males 25–55, government employees, professionals",
    reportedIncidents: "~1,200 cases per year",
  },
  {
    threatType: "Ransomware Attacks",
    description:
      "Targeted ransomware deployments against Delhi government departments, hospitals (AIIMS), and corporates; data encrypted and ransom demanded in cryptocurrency.",
    riskLevel: "Critical",
    targetedDemographic: "Government departments, hospitals, enterprises",
    reportedIncidents: "~50 major incidents per year",
  },
  {
    threatType: "OTP / Vishing Fraud",
    description:
      "Large-scale call centre operations (many based in Rajasthan and UP) targeting Delhi residents; impersonation of banks, CBI, Narcotics Bureau, and TRAI.",
    riskLevel: "Critical",
    targetedDemographic: "General public, senior citizens",
    reportedIncidents: "~3,000+ cases per year",
  },
  {
    threatType: "Business Email Compromise (BEC)",
    description:
      "Targeted attacks on Delhi's large corporate and diplomatic community; CEO fraud and vendor impersonation causing crore-level losses.",
    riskLevel: "High",
    targetedDemographic: "Corporates, diplomatic missions, NGOs, embassies",
    reportedIncidents: "~200 cases per year",
  },
  {
    threatType: "Dark Web Drug Marketplace",
    description:
      "Use of dark web platforms and social media for narcotics delivery via courier, increasingly detected in South and Central Delhi.",
    riskLevel: "High",
    targetedDemographic: "Youth, urban professionals",
    reportedIncidents: "~100 cases per year (IFSO handled)",
  },
  {
    threatType: "Crypto Currency Fraud",
    description:
      "Fake cryptocurrency exchanges, pump-and-dump schemes, and Ponzi structures using crypto nomenclature to defraud investors.",
    riskLevel: "High",
    targetedDemographic: "Tech-savvy investors, youth",
    reportedIncidents: "~400 cases per year",
  },
  {
    threatType: "Deepfake and AI-generated Content Abuse",
    description:
      "Synthetic media used for political defamation, celebrity impersonation, and sexual harassment; emerging threat in NCT Delhi.",
    riskLevel: "High",
    targetedDemographic: "Public figures, women, political figures",
    reportedIncidents: "~50 cases per year (emerging)",
  },
  {
    threatType: "Online Loan App Harassment",
    description:
      "Predatory NBFCs and illegal apps harass borrowers via bulk messaging, morphed images sent to contacts, and threats of legal action.",
    riskLevel: "High",
    targetedDemographic: "Low-income workers, migrants",
    reportedIncidents: "~500 cases per year",
  },
];

// ============================================================
// COMMON SCAMS AND FRAUDS
// ============================================================

export const COMMON_SCAMS: CommonScam[] = [
  {
    scamName: "Digital Arrest Scam",
    modus:
      "Caller posing as CBI / Narcotics Control Bureau / ED officer claims victim's account is linked to money laundering; forces victim onto video call for 'virtual custody' and extorts lump-sum transfers.",
    estimatedAnnualVictims: "500–1000",
    averageLossPerVictim: "₹50,000 – ₹1,00,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "FedEx / Courier Parcel Scam",
    modus:
      "Victim told a parcel in their name containing drugs was intercepted; demanded immediate payment to avoid arrest or have case 'resolved'.",
    estimatedAnnualVictims: "800–1500",
    averageLossPerVictim: "₹30,000 – ₹20,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Fake Trading Platform",
    modus:
      "Introduced via WhatsApp by an attractive profile; onboarded to a fake trading app showing artificial profits; withdrawal blocked after large deposits.",
    estimatedAnnualVictims: "1000–2000",
    averageLossPerVictim: "₹5,00,000 – ₹5,00,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Matrimonial / Romance Fraud",
    modus:
      "Long-term relationship built on matrimonial or social platforms; financial emergency fabricated; target wires money internationally.",
    estimatedAnnualVictims: "300–600",
    averageLossPerVictim: "₹1,00,000 – ₹50,00,000",
    reportingTrend: "Stable",
  },
  {
    scamName: "Fake Customer Care / Bank Helpline",
    modus:
      "Victim searches bank/service helpline on Google; sponsored fraudulent results top the page; money transferred upon call.",
    estimatedAnnualVictims: "2000–4000",
    averageLossPerVictim: "₹5,000 – ₹5,00,000",
    reportingTrend: "Increasing",
  },
  {
    scamName: "Real Estate / Property Advance Fraud",
    modus:
      "Fake property listings (DDA flats, builder projects) on portals; advance token money collected; agent disappears.",
    estimatedAnnualVictims: "500–800",
    averageLossPerVictim: "₹50,000 – ₹10,00,000",
    reportingTrend: "Stable",
  },
];

// ============================================================
// HIGH RISK REGIONS
// ============================================================

export const HIGH_RISK_REGIONS: HighRiskRegion[] = [
  {
    district: "Central Delhi",
    area: "Connaught Place, Paharganj, Karol Bagh",
    riskLevel: "Critical",
    primaryThreats: [
      "OTP Fraud",
      "ATM Skimming",
      "Fake Customer Care Fraud",
      "Business Email Compromise",
      "Tourist-targeted Scams",
    ],
    remarks:
      "Highest footfall commercial zone; dense ATM and banking activity; tourist concentration in Paharganj enables targeted scams.",
  },
  {
    district: "South Delhi",
    area: "Saket, Hauz Khas, Vasant Kunj, GK",
    riskLevel: "Critical",
    primaryThreats: [
      "Investment Fraud",
      "Crypto Scam",
      "Sextortion",
      "Ransomware",
      "BEC",
    ],
    remarks:
      "High-income and corporate zone; prime target for investment fraud and BEC; significant IFSO casework originated here.",
  },
  {
    district: "West Delhi",
    area: "Janakpuri, Dwarka, Uttam Nagar",
    riskLevel: "High",
    primaryThreats: [
      "Online Loan Fraud",
      "Job Scam",
      "OTP Fraud",
      "Social Media Crime",
    ],
    remarks:
      "Large middle-class migrant population; rising digital adoption without corresponding cyber awareness.",
  },
  {
    district: "North West Delhi",
    area: "Rohini, Pitampura, Shalimar Bagh",
    riskLevel: "High",
    primaryThreats: [
      "Digital Arrest Scam",
      "OTP Fraud",
      "Matrimonial Fraud",
      "Fake Job Offers",
    ],
    remarks:
      "Residential districts with high call-centre fraud activity; several cyber FIRs involve Rohini court area entrapments.",
  },
  {
    district: "North East Delhi",
    area: "Seemapuri, Seelampur, Mustafabad",
    riskLevel: "High",
    primaryThreats: [
      "Online Marketplace Fraud",
      "UPI Fraud",
      "Hate Speech and Communal Content",
    ],
    remarks:
      "Densely populated urban area; lower literacy and awareness; communal content proliferation on social media noted by IFSO.",
  },
  {
    district: "East Delhi",
    area: "Shahdara, Preet Vihar, Laxmi Nagar",
    riskLevel: "High",
    primaryThreats: ["Online Fraud", "E-Commerce Fraud", "Fake Banking Apps"],
    remarks:
      "Commercial district with large market community; e-commerce and payment fraud prevalent.",
  },
];

// ============================================================
// IFSO SPECIAL CELL
// (Intelligence Fusion & Strategic Operations)
// ============================================================

export const IFSO_UNIT: IFSOUnit = {
  id: "IFSO001",
  unitName: "IFSO Special Cell",
  fullFormIfAcronym: "Intelligence Fusion and Strategic Operations",
  parentOrganization: "Delhi Police",
  address:
    "IFSO, Malviya Nagar, New Delhi 110017",
  phone: "011-24190100",
  email: "ifso@delhipolice.gov.in",
  website: "https://delhipolice.gov.in/ifso",
  headDesignation: "DCP (IFSO), Delhi Police",
  establishedYear: "2020",
  jurisdiction: "All of NCT Delhi; national-level cyber crime cases with inter-state nexus",
  operationalHours: "24 × 7",
  mandateAreas: [
    "Financial Cyber Fraud – high-value cases",
    "Sextortion and Online Blackmail",
    "Dark Web Crimes and Narcotics via Digital Platforms",
    "Ransomware and Critical Infrastructure Attacks",
    "Cryptocurrency and Virtual Asset Crimes",
    "Terrorism-related Cyber Activity",
    "Cyber Espionage and Nation-state Actor Attribution",
    "Child Sexual Abuse Material (CSAM) Online",
    "Inter-state and Transnational Cyber Crime Coordination",
    "Deepfake and AI-generated Crime",
  ],
  notableCasesHandled: [
    "AIIMS Delhi ransomware attack investigation (2022)",
    "Numerous high-value investment fraud cases (crore-level losses)",
    "Multiple dark web drug delivery network dismantling operations",
    "Mewat-based sextortion syndicate arrests",
    "International sextortion network prosecution in coordination with Interpol",
  ],
};

// ============================================================
// CYBER POLICE STATIONS (Delhi – all 11 districts)
// ============================================================

export const CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "DLPS001",
    unionTerritory: "Delhi",
    district: "New Delhi",
    pincode: "110001",
    stationName: "Delhi Police Cyber Crime Unit, Police Headquarters",
    address: "Delhi Police Headquarters, ITO, Vikas Marg, New Delhi 110002",
    phone: "011-23490155",
    email: "cybercell@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.6304,
    longitude: 77.2421,
    reportingLink: "https://delhipolice.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST; emergency via 112",
    jurisdictionArea: "New Delhi District",
  },
  {
    id: "DLPS002",
    unionTerritory: "Delhi",
    district: "Dwarka",
    pincode: "110075",
    stationName: "Dwarka District Cyber Crime Cell",
    address: "DCP Office, Sector 23, Dwarka, New Delhi 110075",
    phone: "011-25071100",
    email: "cybercrime.dwarka@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.5921,
    longitude: 77.0460,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Dwarka Sub-Division, South West Delhi",
  },
  {
    id: "DLPS003",
    unionTerritory: "Delhi",
    district: "Rohini",
    pincode: "110085",
    stationName: "Rohini District Cyber Crime Cell",
    address: "DCP Office, Sector 18, Rohini, New Delhi 110085",
    phone: "011-27051100",
    email: "cybercrime.rohini@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.7295,
    longitude: 77.1156,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Rohini and North West Delhi districts",
  },
  {
    id: "DLPS004",
    unionTerritory: "Delhi",
    district: "South Delhi",
    pincode: "110017",
    stationName: "South District Cyber Crime Cell",
    address: "DCP Office South, Hauz Khas, New Delhi 110016",
    phone: "011-26867200",
    email: "cybercrime.south@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.5494,
    longitude: 77.2001,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "South Delhi District",
  },
  {
    id: "DLPS005",
    unionTerritory: "Delhi",
    district: "Central Delhi",
    pincode: "110001",
    stationName: "Central District Cyber Crime Cell",
    address: "DCP Office Central, Darya Ganj, New Delhi 110002",
    phone: "011-23279100",
    email: "cybercrime.central@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.6418,
    longitude: 77.2408,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Central Delhi District",
  },
  {
    id: "DLPS006",
    unionTerritory: "Delhi",
    district: "North Delhi",
    pincode: "110007",
    stationName: "North District Cyber Crime Cell",
    address: "DCP Office North, Timarpur, Delhi 110054",
    phone: "011-23930100",
    email: "cybercrime.north@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.7041,
    longitude: 77.2029,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "North Delhi District",
  },
  {
    id: "DLPS007",
    unionTerritory: "Delhi",
    district: "North East Delhi",
    pincode: "110093",
    stationName: "North East District Cyber Crime Cell",
    address: "DCP Office, Seelampur, North East Delhi 110053",
    phone: "011-22840100",
    email: "cybercrime.northeast@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.6733,
    longitude: 77.2750,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "North East Delhi District",
  },
  {
    id: "DLPS008",
    unionTerritory: "Delhi",
    district: "East Delhi",
    pincode: "110091",
    stationName: "East District Cyber Crime Cell",
    address: "DCP Office East, Preet Vihar, Delhi 110092",
    phone: "011-22021100",
    email: "cybercrime.east@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.6327,
    longitude: 77.2994,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "East Delhi District",
  },
  {
    id: "DLPS009",
    unionTerritory: "Delhi",
    district: "West Delhi",
    pincode: "110058",
    stationName: "West District Cyber Crime Cell",
    address: "DCP Office West, Janakpuri, New Delhi 110058",
    phone: "011-25559100",
    email: "cybercrime.west@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.6271,
    longitude: 77.0862,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "West Delhi District",
  },
  {
    id: "DLPS010",
    unionTerritory: "Delhi",
    district: "South East Delhi",
    pincode: "110044",
    stationName: "South East District Cyber Crime Cell",
    address: "DCP Office, Lajpat Nagar, New Delhi 110024",
    phone: "011-29838100",
    email: "cybercrime.southeast@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.5700,
    longitude: 77.2431,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "South East Delhi District",
  },
  {
    id: "DLPS011",
    unionTerritory: "Delhi",
    district: "Outer Delhi",
    pincode: "110041",
    stationName: "Outer District Cyber Crime Cell",
    address: "DCP Office, Sector 18, Rohini (Outer), New Delhi",
    phone: "011-27032100",
    email: "cybercrime.outer@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.7299,
    longitude: 77.0648,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Outer Delhi District",
  },
  {
    id: "DLPS012",
    unionTerritory: "Delhi",
    district: "South West Delhi",
    pincode: "110075",
    stationName: "South West District Cyber Crime Cell",
    address: "DCP Office, Sector 14, Dwarka, New Delhi 110078",
    phone: "011-25301100",
    email: "cybercrime.southwest@delhipolice.gov.in",
    website: "https://delhipolice.gov.in",
    latitude: 28.5913,
    longitude: 77.0473,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "South West Delhi District",
  },
];

// ============================================================
// CYBER CELLS
// ============================================================

export const CYBER_CELLS: CyberCell[] = [
  {
    id: "DLCELL001",
    cellName: "IFSO Special Cell",
    parentOrganization: "Delhi Police",
    district: "South Delhi",
    address: "IFSO, Malviya Nagar, New Delhi 110017",
    phone: "011-24190100",
    email: "ifso@delhipolice.gov.in",
    operationalSince: "2020",
    specializations: [
      "High-value Financial Cyber Fraud",
      "Ransomware and Critical Infrastructure",
      "Cryptocurrency Crime",
      "Dark Web Operations",
      "CSAM Investigation",
      "Sextortion Syndicates",
      "Nation-state Cyber Activity",
      "Deepfake and AI Crime",
      "Inter-state Coordination",
      "Transnational Cyber Crime",
    ],
  },
  {
    id: "DLCELL002",
    cellName: "Delhi Police Cyber Crime Unit (Central)",
    parentOrganization: "Delhi Police",
    district: "New Delhi",
    address: "Delhi Police Headquarters, ITO, New Delhi 110002",
    phone: "011-23490155",
    email: "cybercell@delhipolice.gov.in",
    operationalSince: "2003",
    specializations: [
      "Financial Cyber Fraud",
      "Social Media Crime",
      "Online Harassment",
      "Complaint Triaging",
      "Forensic Analysis",
    ],
  },
  {
    id: "DLCELL003",
    cellName: "Delhi Police Women Cyber Safety Unit",
    parentOrganization: "Delhi Police – PCW",
    district: "New Delhi",
    address: "Police Commissioner Office, ITO, New Delhi 110002",
    phone: "011-23490155",
    email: "womenscyber@delhipolice.gov.in",
    operationalSince: "2016",
    specializations: [
      "Online Harassment of Women",
      "Stalking",
      "Morphed Image Abuse",
      "Domestic Digital Abuse",
      "POCSO Cyber Offences",
    ],
  },
  {
    id: "DLCELL004",
    cellName: "National Cyber Forensic Laboratory (NCFL)",
    parentOrganization: "Ministry of Home Affairs / CBI",
    district: "New Delhi",
    address: "CGO Complex, New Delhi 110003",
    phone: "011-24301500",
    email: "ncfl@mha.gov.in",
    operationalSince: "2018",
    specializations: [
      "Digital Forensics",
      "Mobile Forensics",
      "Malware Analysis",
      "Network Forensics",
      "Expert Witness Services",
    ],
  },
  {
    id: "DLCELL005",
    cellName: "Cyber and Information Security Division – MHA",
    parentOrganization: "Ministry of Home Affairs",
    district: "New Delhi",
    address: "North Block, New Delhi 110001",
    phone: "011-23092011",
    email: "secydivision@mha.gov.in",
    operationalSince: "2015",
    specializations: [
      "National Cybersecurity Policy",
      "Critical Information Infrastructure",
      "State Police Coordination",
      "Inter-Agency Cyber Intelligence",
    ],
  },
];

// ============================================================
// LAW ENFORCEMENT CONTACTS
// ============================================================

export const LAW_ENFORCEMENT_CONTACTS: LawEnforcementContact[] = [
  {
    organizationName: "Delhi Police – Commissioner of Police",
    role: "Commissioner of Police, Delhi",
    phone: "011-23490155",
    alternatePhone: "011-23490100",
    email: "cp@delhipolice.gov.in",
    address: "Delhi Police Headquarters, ITO, New Delhi 110002",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "IFSO Special Cell",
    role: "DCP, IFSO",
    phone: "011-24190100",
    email: "ifso@delhipolice.gov.in",
    address: "IFSO, Malviya Nagar, New Delhi 110017",
    availableHours: "24 × 7",
  },
  {
    organizationName: "National Cyber Crime Helpline",
    role: "MHA National Nodal Authority",
    phone: "1930",
    email: "helpdesk@cybercrime.gov.in",
    address: "Ministry of Home Affairs, New Delhi",
    availableHours: "24 × 7",
  },
  {
    organizationName: "National Cyber Forensic Laboratory",
    role: "Director, NCFL",
    phone: "011-24301500",
    email: "ncfl@mha.gov.in",
    address: "CGO Complex, New Delhi 110003",
    availableHours: "Monday–Friday, 09:00–17:30 IST",
  },
  {
    organizationName: "CERT-In (Indian Computer Emergency Response Team)",
    role: "Director General, CERT-In",
    phone: "1800-11-4949",
    email: "incident@cert-in.org.in",
    address: "Electronics Niketan, 6 CGO Complex, New Delhi 110003",
    availableHours: "24 × 7 for critical incidents",
  },
  {
    organizationName: "Enforcement Directorate – Delhi Zonal Office",
    role: "Zonal Director (Financial crime / money laundering)",
    phone: "011-24368691",
    email: "eddelhi@ed.nic.in",
    address: "Jamnalal Bajaj Marg, New Delhi 110001",
    availableHours: "Monday–Friday, 10:00–17:00 IST",
  },
  {
    organizationName: "CBI – Cyber Crime Unit, Delhi",
    role: "SP, Cyber Crime, CBI HQ",
    phone: "011-24361266",
    email: "webmaster@cbi.gov.in",
    address: "CBI Headquarters, CGO Complex, New Delhi 110003",
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
    remarks: "Single national emergency number; police, ambulance, fire.",
  },
  {
    service: "National Cyber Crime Helpline",
    number: "1930",
    type: "Cyber",
    availableHours: "24 × 7",
    remarks:
      "Critical: call within minutes of financial cyber fraud to enable bank freeze.",
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
    remarks: "Online harassment, stalking, and cybercrime against women.",
  },
  {
    service: "Child Helpline",
    number: "1098",
    type: "Helpline",
    availableHours: "24 × 7",
    remarks: "POCSO-related digital crimes, CSAM, online grooming.",
  },
  {
    service: "CERT-In Incident Hotline",
    number: "1800-11-4949",
    type: "Cyber",
    availableHours: "24 × 7",
    remarks:
      "For critical infrastructure cyber attacks, ransomware, and national-level incidents.",
  },
  {
    service: "Delhi Police PCR",
    number: "011-23490155",
    type: "Police",
    availableHours: "24 × 7",
  },
  {
    service: "Senior Citizen Helpline",
    number: "14567",
    type: "Helpline",
    availableHours: "24 × 7",
    remarks: "Senior citizens targeted by digital arrest and OTP scams.",
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
      "Primary government portal for all cyber crime complaints; covers financial fraud, social media abuse, CSAM, and other offences.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "Delhi Police Online Complaint Portal",
    resourceType: "Online Portal",
    contactOrUrl: "https://delhipolice.gov.in",
    description:
      "Delhi Police portal with FIR tracking, online complaint form, and cyber crime awareness resources.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "National Cyber Crime Helpline",
    resourceType: "Helpline",
    contactOrUrl: "1930",
    description:
      "Toll-free 24×7 helpline; essential for financial fraud – the faster the call, the higher the chance of fund recovery.",
    availableLanguages: [
      "Hindi",
      "English",
      "Punjabi",
      "Bengali",
      "Regional languages",
    ],
  },
  {
    resourceName: "IFSO Walk-in Complaint Centre",
    resourceType: "In-Person",
    contactOrUrl: "IFSO, Malviya Nagar, New Delhi 110017",
    description:
      "Walk-in facility for high-value financial fraud, ransomware, sextortion, and cryptocurrency crimes; bring all evidence and transaction records.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "Delhi Police Cyber Crime Cell – In Person",
    resourceType: "In-Person",
    contactOrUrl:
      "Delhi Police Headquarters, ITO, New Delhi 110002",
    description:
      "Central cyber crime complaint registration desk; refer to district cyber cells for faster local processing.",
    availableLanguages: ["Hindi", "English", "Punjabi"],
  },
  {
    resourceName: "CERT-In Incident Report",
    resourceType: "Online Portal",
    contactOrUrl: "https://www.cert-in.org.in/Report.jsp",
    description:
      "Report cybersecurity incidents involving critical infrastructure, government systems, and enterprise networks.",
    availableLanguages: ["English"],
  },
  {
    resourceName: "RBI Sachet Portal",
    resourceType: "Online Portal",
    contactOrUrl: "https://sachet.rbi.org.in",
    description:
      "Report unauthorized financial transactions, ponzi schemes, and illegal money collection to RBI.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "Cyberdost – MHA",
    resourceType: "Online Portal",
    contactOrUrl: "https://twitter.com/Cyberdost",
    description:
      "MHA's official cyber safety awareness handle; alerts on scams and guidance on prevention.",
    availableLanguages: ["Hindi", "English"],
  },
];

// ============================================================
// IMPORTANT DISTRICTS
// ============================================================

export const IMPORTANT_DISTRICTS: ImportantDistrict[] = [
  {
    districtName: "New Delhi",
    headquarters: "New Delhi (Connaught Place)",
    population: 257803,
    area: 35,
    digitalPenetration: "High",
    cyberCrimeRisk: "Critical",
    notableFeatures: [
      "National capital; seat of Central Government and Parliament",
      "Highest concentration of diplomatic missions (Embassy fraud target)",
      "Connaught Place financial hub; heavy ATM and online banking activity",
      "Home to Delhi Police HQ and national security agencies",
    ],
  },
  {
    districtName: "South Delhi",
    headquarters: "Saket",
    population: 2731929,
    area: 250,
    digitalPenetration: "High",
    cyberCrimeRisk: "Critical",
    notableFeatures: [
      "Wealthiest residential belt; prime investment fraud and BEC target",
      "Location of IFSO Special Cell",
      "Large corporate and senior professional population",
      "High-value cyber fraud losses consistently highest in this district",
    ],
  },
  {
    districtName: "Central Delhi",
    headquarters: "Darya Ganj",
    population: 617617,
    area: 43,
    digitalPenetration: "High",
    cyberCrimeRisk: "Critical",
    notableFeatures: [
      "Dense commercial core; ATM skimming and financial fraud high",
      "Old Delhi wholesale markets targeted by BEC and payment fraud",
      "Paharganj tourist area – tourist-targeted scams prevalent",
    ],
  },
  {
    districtName: "North West Delhi",
    headquarters: "Rohini",
    population: 3656249,
    area: 440,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Most populous district; large call-centre community",
      "Rohini courts area linked to several digital arrest scam reports",
      "High smartphone penetration with moderate cyber literacy",
    ],
  },
  {
    districtName: "West Delhi",
    headquarters: "Janakpuri",
    population: 2541027,
    area: 129,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Migrant-heavy workforce districts; loan app fraud prevalent",
      "Dwarka planned satellite city with growing IT offices",
      "Online job scam and matrimonial fraud reported frequently",
    ],
  },
  {
    districtName: "North East Delhi",
    headquarters: "Seelampur",
    population: 2225779,
    area: 60,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Densely populated; relatively lower digital literacy",
      "Social media communal content proliferation noted by IFSO",
      "UPI and online marketplace fraud increasing",
    ],
  },
  {
    districtName: "East Delhi",
    headquarters: "Preet Vihar",
    population: 1708645,
    area: 64,
    digitalPenetration: "High",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Large market community; e-commerce fraud prevalent",
      "Laxmi Nagar market area: electronic goods fraud common",
      "Shahdara: fake customer care and banking fraud reported",
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
  ifsoUnit: IFSO_UNIT,
  cyberPoliceStations: CYBER_POLICE_STATIONS,
  cyberCells: CYBER_CELLS,
  lawEnforcementContacts: LAW_ENFORCEMENT_CONTACTS,
  emergencyContacts: EMERGENCY_CONTACTS,
  reportingResources: REPORTING_RESOURCES,
  importantDistricts: IMPORTANT_DISTRICTS,
};
