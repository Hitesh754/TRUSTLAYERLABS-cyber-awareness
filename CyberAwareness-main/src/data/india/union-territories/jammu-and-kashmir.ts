// ============================================================
// UNION TERRITORY INTELLIGENCE FILE
// Jammu and Kashmir
// ============================================================

export interface UTProfile {
  name: string;
  capital: string[];
  summerCapital: string;
  winterCapital: string;
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
  officialLanguages: string[];
  highCourt: string;
  divisions: string[];
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
  affectedRegion: "Kashmir Division" | "Jammu Division" | "Both";
}

export interface CommonScam {
  scamName: string;
  modus: string;
  estimatedAnnualVictims: string;
  averageLossPerVictim: string;
  reportingTrend: "Increasing" | "Stable" | "Decreasing";
  primaryRegion: "Kashmir" | "Jammu" | "Both";
}

export interface HighRiskRegion {
  district: string;
  division: "Kashmir" | "Jammu";
  riskLevel: "Medium" | "High" | "Critical";
  primaryThreats: string[];
  remarks: string;
}

// ─── J&K Regional Cyber Police Structure ─────────────────────────────────────

export interface RegionalCyberPoliceUnit {
  id: string;
  unitName: string;
  unitType:
    | "Cyber Police Station"
    | "Cyber Crime Cell"
    | "Cyber Help Desk"
    | "Special Unit";
  division: "Kashmir" | "Jammu" | "UT-Level";
  district: string;
  pincode: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  reportingLink: string;
  operationalHours: string;
  jurisdictionArea: string;
  specializations: string[];
  establishedYear?: string;
}

export interface CyberCell {
  id: string;
  cellName: string;
  parentOrganization: string;
  division: "Kashmir" | "Jammu" | "UT-Level";
  district: string;
  address: string;
  phone?: string;
  email?: string;
  operationalSince?: string;
  specializations: string[];
}

export interface LawEnforcementContact {
  organizationName: string;
  division: "Kashmir" | "Jammu" | "UT-Level" | "Central";
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
  type: "Police" | "Cyber" | "Medical" | "Fire" | "Army" | "Helpline";
  region: "Kashmir" | "Jammu" | "Both";
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
  division: "Kashmir" | "Jammu";
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
  name: "Jammu and Kashmir",
  capital: ["Srinagar (Summer)", "Jammu (Winter)"],
  summerCapital: "Srinagar",
  winterCapital: "Jammu",
  administrativeHeadquarters: "Civil Secretariat, Srinagar / Jammu",
  established: "2019-10-31",
  area: 42241,
  population: 12541302,
  malePopulation: 6640662,
  femalePopulation: 5900640,
  sexRatio: 889,
  literacyRate: 67.16,
  urbanizationPercent: 27.21,
  workforceParticipationRate: 34.5,
  numberOfDistricts: 20,
  languagesSpoken: [
    "Kashmiri",
    "Dogri",
    "Hindi",
    "Urdu",
    "Pahari",
    "Gojri",
    "Balti",
    "English",
  ],
  officialLanguages: ["Kashmiri", "Dogri", "Hindi", "Urdu", "English"],
  highCourt: "High Court of Jammu and Kashmir and Ladakh",
  divisions: ["Kashmir Division", "Jammu Division"],
};

// ============================================================
// CRIME STATISTICS
// ============================================================

export const CRIME_STATISTICS: CrimeStatistics[] = [
  {
    year: 2022,
    totalCognizableCrimes: 34112,
    crimeRatePerLakhPopulation: 272.0,
    violentCrimes: 4123,
    propertyCrimes: 8234,
    cyberCrimes: 1241,
    fraudCases: 3421,
    source: "NCRB Crime in India Report 2022",
  },
  {
    year: 2021,
    totalCognizableCrimes: 31867,
    crimeRatePerLakhPopulation: 254.2,
    violentCrimes: 3944,
    propertyCrimes: 7687,
    cyberCrimes: 987,
    fraudCases: 3112,
    source: "NCRB Crime in India Report 2021",
  },
];

// ============================================================
// CYBER CRIME STATISTICS
// ============================================================

export const CYBER_CRIME_STATISTICS: CyberCrimeStatistics[] = [
  {
    year: 2022,
    totalCyberCrimesRegistered: 1241,
    financialFrauds: 634,
    onlineHarassment: 241,
    identityTheft: 98,
    hacking: 67,
    socialMediaCrimes: 132,
    otherCyberCrimes: 69,
    totalAmountDefrauded: "₹28 crore (approx.)",
    convictionRate: 5.8,
    source:
      "NCRB Crime in India 2022 / J&K Police Annual Report 2022",
  },
  {
    year: 2021,
    totalCyberCrimesRegistered: 987,
    financialFrauds: 498,
    onlineHarassment: 192,
    identityTheft: 81,
    hacking: 51,
    socialMediaCrimes: 103,
    otherCyberCrimes: 62,
    totalAmountDefrauded: "₹18 crore (approx.)",
    convictionRate: 4.9,
    source: "NCRB Crime in India 2021",
  },
];

// ============================================================
// MAJOR CYBER THREATS
// ============================================================

export const MAJOR_CYBER_THREATS: MajorCyberThreat[] = [
  {
    threatType: "Terrorist / Extremist Propaganda via Social Media",
    description:
      "Proliferation of radicalisation content, terror financing instructions, and recruitment messaging on Telegram, WhatsApp, and encrypted platforms; actively monitored by J&K Police Cyber Cell and intelligence agencies.",
    riskLevel: "Critical",
    targetedDemographic: "Youth, especially in Kashmir Valley",
    reportedIncidents: "Ongoing; hundreds of accounts/URLs referred for takedown annually",
    affectedRegion: "Kashmir Division",
  },
  {
    threatType: "OTP / Vishing Financial Fraud",
    description:
      "Callers posing as bank officers, government officials, or telecom authorities coerce victims into sharing OTPs or fund transfers; spike during tourist season in Jammu.",
    riskLevel: "High",
    targetedDemographic: "General public, senior citizens, traders",
    reportedIncidents: "~300 cases per year",
    affectedRegion: "Both",
  },
  {
    threatType: "Online Job Scam",
    description:
      "Fraudulent job advertisements targeting J&K youth facing high unemployment; registration fees or equipment deposits collected online.",
    riskLevel: "High",
    targetedDemographic: "Youth, graduates, job seekers",
    reportedIncidents: "~150 cases per year",
    affectedRegion: "Both",
  },
  {
    threatType: "Sextortion",
    description:
      "Social engineering via fake profiles on Facebook/Instagram; intimate content recorded and used for extortion; increasingly affecting semi-urban areas.",
    riskLevel: "High",
    targetedDemographic: "Young adults, professionals",
    reportedIncidents: "~100 cases per year",
    affectedRegion: "Both",
  },
  {
    threatType: "SIM Swap and Identity Fraud",
    description:
      "SIM swap attacks on Jammu-based bank account holders; fraudulent SIM reissuance used to bypass OTP authentication and drain accounts.",
    riskLevel: "High",
    targetedDemographic: "Account holders of major banks in Jammu",
    reportedIncidents: "~50 cases per year",
    affectedRegion: "Jammu Division",
  },
  {
    threatType: "Tourism Booking Fraud",
    description:
      "Fake houseboat, hotel, and Amarnath/Vaishno Devi yatra booking portals defrauding pilgrims and tourists before peak seasons.",
    riskLevel: "High",
    targetedDemographic: "Pilgrims, tourists",
    reportedIncidents: "~100 cases per year (spikes in summer)",
    affectedRegion: "Both",
  },
  {
    threatType: "Fake News and Disinformation",
    description:
      "Targeted spread of fabricated communal, political, and security-related content via WhatsApp groups to incite unrest; J&K Police cyber cell regularly issues takedown requests.",
    riskLevel: "High",
    targetedDemographic: "General public, religious communities",
    reportedIncidents: "Ongoing; multiple FIRs registered annually",
    affectedRegion: "Both",
  },
  {
    threatType: "Investment and Ponzi Scheme Fraud",
    description:
      "Fake investment platforms, chit fund scams, and pyramid schemes operating via social media, targeting middle-class families in Jammu.",
    riskLevel: "Medium",
    targetedDemographic: "Middle class families, small traders",
    reportedIncidents: "~60 cases per year",
    affectedRegion: "Jammu Division",
  },
];

// ============================================================
// COMMON SCAMS AND FRAUDS
// ============================================================

export const COMMON_SCAMS: CommonScam[] = [
  {
    scamName: "Fake Vaishno Devi / Amarnath Yatra Booking",
    modus:
      "Fraudulent pilgrim accommodation or helicopter booking portals collect advance money; services not provided; spike before and during yatra season.",
    estimatedAnnualVictims: "200–500",
    averageLossPerVictim: "₹3,000 – ₹25,000",
    reportingTrend: "Increasing",
    primaryRegion: "Jammu",
  },
  {
    scamName: "Fake Houseboat / Tourism Booking (Kashmir)",
    modus:
      "Fake Dal Lake houseboat and Kashmir tour package portals; advance payments collected for non-existent bookings.",
    estimatedAnnualVictims: "300–600",
    averageLossPerVictim: "₹5,000 – ₹50,000",
    reportingTrend: "Increasing",
    primaryRegion: "Kashmir",
  },
  {
    scamName: "Government Scheme / PM Kisan Fraud",
    modus:
      "Fraudsters impersonate government officials and offer to expedite PM Kisan, Ujjwala, or PMAY benefits in exchange for processing fees and OTPs.",
    estimatedAnnualVictims: "150–300",
    averageLossPerVictim: "₹2,000 – ₹10,000",
    reportingTrend: "Stable",
    primaryRegion: "Both",
  },
  {
    scamName: "Fake Job Offers in Indian Army / CRPF",
    modus:
      "Fraudulent recruitment letters or calls offering jobs in security forces; registration fees and document processing charges collected.",
    estimatedAnnualVictims: "100–200",
    averageLossPerVictim: "₹20,000 – ₹2,00,000",
    reportingTrend: "Stable",
    primaryRegion: "Both",
  },
  {
    scamName: "Online Marketplace Fraud (OLX / Facebook)",
    modus:
      "Fake buyers/sellers of vehicles, electronics, and apple crop produce; advance payments collected; goods never delivered.",
    estimatedAnnualVictims: "200–400",
    averageLossPerVictim: "₹5,000 – ₹1,00,000",
    reportingTrend: "Increasing",
    primaryRegion: "Both",
  },
];

// ============================================================
// HIGH RISK REGIONS
// ============================================================

export const HIGH_RISK_REGIONS: HighRiskRegion[] = [
  {
    district: "Srinagar",
    division: "Kashmir",
    riskLevel: "Critical",
    primaryThreats: [
      "Extremist Propaganda",
      "Fake News",
      "OTP Fraud",
      "Tourism Booking Fraud",
      "Sextortion",
    ],
    remarks:
      "Summer capital and largest city; highest cyber crime volume in Kashmir division; extensive ITBP and J&K Police cyber monitoring.",
  },
  {
    district: "Jammu",
    division: "Jammu",
    riskLevel: "Critical",
    primaryThreats: [
      "OTP / Vishing Fraud",
      "Investment Fraud",
      "SIM Swap",
      "Yatra Booking Fraud",
      "Job Scams",
    ],
    remarks:
      "Winter capital and commercial hub; highest cyber fraud concentration in the UT; dedicated Cyber Police Station operational.",
  },
  {
    district: "Baramulla",
    division: "Kashmir",
    riskLevel: "High",
    primaryThreats: [
      "Extremist Recruitment Online",
      "Fake News",
      "OTP Fraud",
      "Online Job Scams",
    ],
    remarks:
      "Northern Kashmir border district with historically high militant activity; online radicalisation closely monitored.",
  },
  {
    district: "Anantnag",
    division: "Kashmir",
    riskLevel: "High",
    primaryThreats: ["Extremist Social Media", "OTP Fraud", "Tourism Fraud"],
    remarks:
      "South Kashmir hub; Pahalgam tourism proximity increases booking fraud; online extremist content monitored.",
  },
  {
    district: "Rajouri",
    division: "Jammu",
    riskLevel: "High",
    primaryThreats: ["Online Job Fraud", "OTP Fraud", "Fake Loan Apps"],
    remarks:
      "Hilly border district with growing smartphone penetration; limited cyber awareness creates fraud vulnerability.",
  },
  {
    district: "Kupwara",
    division: "Kashmir",
    riskLevel: "High",
    primaryThreats: [
      "Cross-border Extremist Communication",
      "Fake News",
      "OTP Fraud",
    ],
    remarks:
      "LoC-adjacent district; cross-border messaging and encrypted communication monitoring ongoing.",
  },
  {
    district: "Udhampur",
    division: "Jammu",
    riskLevel: "Medium",
    primaryThreats: ["Yatra Booking Fraud", "OTP Fraud", "Fake Job Scams"],
    remarks:
      "Vaishno Devi gateway district; pilgrim-targeted online fraud highest before yatra season.",
  },
];

// ============================================================
// REGIONAL CYBER POLICE UNITS
// (J&K Two-Division Cyber Police Structure)
// ============================================================

export const REGIONAL_CYBER_POLICE_UNITS: RegionalCyberPoliceUnit[] = [
  // ─── UT-Level ────────────────────────────────────────────
  {
    id: "JKPS001",
    unitName: "J&K Police Cyber Crime Police Station, Srinagar (Kashmir Range HQ)",
    unitType: "Cyber Police Station",
    division: "Kashmir",
    district: "Srinagar",
    pincode: "190001",
    address:
      "PHQ (Police Headquarters), Srinagar, Jammu and Kashmir 190001",
    phone: "0194-2473213",
    email: "cybercrime.srinagar@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 34.0836,
    longitude: 74.7973,
    reportingLink: "https://jkpolice.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST; emergency 24×7 via 112",
    jurisdictionArea: "Kashmir Division (all 10 districts)",
    specializations: [
      "Extremist / Terror-related Cyber Activity",
      "Financial Cyber Fraud",
      "Social Media Monitoring",
      "Online Radicalisation",
      "Digital Forensics",
    ],
    establishedYear: "2014",
  },
  {
    id: "JKPS002",
    unitName: "J&K Police Cyber Crime Police Station, Jammu",
    unitType: "Cyber Police Station",
    division: "Jammu",
    district: "Jammu",
    pincode: "180001",
    address:
      "SP Office, Bakshi Nagar, Jammu, Jammu and Kashmir 180001",
    phone: "0191-2470011",
    email: "cybercrime.jammu@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 32.7266,
    longitude: 74.8570,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST; emergency 24×7 via 112",
    jurisdictionArea: "Jammu Division (all 10 districts)",
    specializations: [
      "Financial Cyber Fraud",
      "OTP and Vishing Fraud",
      "Investment Fraud",
      "Tourism Booking Fraud",
      "Online Job Scams",
      "Social Media Crime",
    ],
    establishedYear: "2014",
  },
  // ─── Kashmir Division District Cyber Cells ───────────────
  {
    id: "JKPS003",
    unitName: "Srinagar District Cyber Crime Cell",
    unitType: "Cyber Crime Cell",
    division: "Kashmir",
    district: "Srinagar",
    pincode: "190001",
    address: "DIG Office, Srinagar, Jammu and Kashmir 190001",
    phone: "0194-2452000",
    email: "cybercrime.srinagar.dist@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 34.0836,
    longitude: 74.7973,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Srinagar District",
    specializations: [
      "Financial Fraud",
      "Social Media Crime",
      "Complaint Registration",
    ],
    establishedYear: "2018",
  },
  {
    id: "JKPS004",
    unitName: "Baramulla District Cyber Help Desk",
    unitType: "Cyber Help Desk",
    division: "Kashmir",
    district: "Baramulla",
    pincode: "193101",
    address: "SP Office, Baramulla, Jammu and Kashmir 193101",
    phone: "01952-234100",
    email: "sp.baramulla@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 34.2032,
    longitude: 74.3432,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Baramulla District",
    specializations: [
      "Complaint Forwarding",
      "Cyber Awareness",
      "Social Media Monitoring",
    ],
    establishedYear: "2020",
  },
  {
    id: "JKPS005",
    unitName: "Anantnag District Cyber Help Desk",
    unitType: "Cyber Help Desk",
    division: "Kashmir",
    district: "Anantnag",
    pincode: "192101",
    address: "SP Office, Anantnag, Jammu and Kashmir 192101",
    phone: "01932-222011",
    email: "sp.anantnag@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 33.7311,
    longitude: 75.1487,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Anantnag District",
    specializations: [
      "Complaint Forwarding",
      "Tourism Fraud",
      "Cyber Awareness",
    ],
    establishedYear: "2020",
  },
  // ─── Jammu Division District Cyber Cells ─────────────────
  {
    id: "JKPS006",
    unitName: "Jammu City Cyber Crime Cell",
    unitType: "Cyber Crime Cell",
    division: "Jammu",
    district: "Jammu",
    pincode: "180001",
    address: "SP Office City, Jammu, Jammu and Kashmir 180001",
    phone: "0191-2470200",
    email: "cybercrime.jammucity@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 32.7266,
    longitude: 74.8570,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Jammu City",
    specializations: [
      "Financial Fraud",
      "OTP Fraud",
      "Investment Scam",
      "Complaint Registration",
    ],
    establishedYear: "2018",
  },
  {
    id: "JKPS007",
    unitName: "Udhampur District Cyber Help Desk",
    unitType: "Cyber Help Desk",
    division: "Jammu",
    district: "Udhampur",
    pincode: "182101",
    address: "SP Office, Udhampur, Jammu and Kashmir 182101",
    phone: "01992-270100",
    email: "sp.udhampur@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 32.9160,
    longitude: 75.1399,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Udhampur District",
    specializations: [
      "Pilgrim Fraud",
      "Complaint Forwarding",
      "Cyber Awareness",
    ],
    establishedYear: "2021",
  },
  {
    id: "JKPS008",
    unitName: "Rajouri District Cyber Help Desk",
    unitType: "Cyber Help Desk",
    division: "Jammu",
    district: "Rajouri",
    pincode: "185131",
    address: "SP Office, Rajouri, Jammu and Kashmir 185131",
    phone: "01962-263100",
    email: "sp.rajouri@jkpolice.gov.in",
    website: "https://jkpolice.gov.in",
    latitude: 33.3783,
    longitude: 74.3121,
    reportingLink: "https://www.cybercrime.gov.in",
    operationalHours: "Monday–Saturday, 09:00–17:00 IST",
    jurisdictionArea: "Rajouri District",
    specializations: [
      "Complaint Forwarding",
      "Job Fraud Awareness",
      "Cyber Awareness",
    ],
    establishedYear: "2021",
  },
];

// ============================================================
// CYBER CELLS
// ============================================================

export const CYBER_CELLS: CyberCell[] = [
  {
    id: "JKCELL001",
    cellName: "J&K Police Cyber Crime Cell – Kashmir Range",
    parentOrganization: "Jammu and Kashmir Police",
    division: "Kashmir",
    district: "Srinagar",
    address: "PHQ Srinagar, Jammu and Kashmir 190001",
    phone: "0194-2473213",
    email: "cybercrime.srinagar@jkpolice.gov.in",
    operationalSince: "2014",
    specializations: [
      "Terror-linked Cyber Activity",
      "Online Radicalisation Monitoring",
      "Social Media Takedowns",
      "Financial Fraud Investigation",
      "Digital Forensics (Kashmir Range)",
    ],
  },
  {
    id: "JKCELL002",
    cellName: "J&K Police Cyber Crime Cell – Jammu Range",
    parentOrganization: "Jammu and Kashmir Police",
    division: "Jammu",
    district: "Jammu",
    address: "PHQ Jammu, Bakshi Nagar, Jammu 180001",
    phone: "0191-2470011",
    email: "cybercrime.jammu@jkpolice.gov.in",
    operationalSince: "2014",
    specializations: [
      "Financial Cyber Fraud",
      "Investment Fraud",
      "Tourism and Pilgrimage Fraud",
      "Social Media Crime",
      "Digital Forensics (Jammu Range)",
    ],
  },
  {
    id: "JKCELL003",
    cellName: "J&K Police Social Media Lab",
    parentOrganization: "Jammu and Kashmir Police",
    division: "UT-Level",
    district: "Srinagar",
    address: "PHQ Srinagar, Jammu and Kashmir 190001",
    phone: "0194-2473213",
    email: "cybercrime.srinagar@jkpolice.gov.in",
    operationalSince: "2016",
    specializations: [
      "Social Media Monitoring",
      "Fake News Detection",
      "Extremist Content Identification",
      "Platform Liaison (Meta, Google, Twitter)",
    ],
  },
  {
    id: "JKCELL004",
    cellName: "J&K Cyber Forensic Lab",
    parentOrganization: "Jammu and Kashmir Police / FSL",
    division: "UT-Level",
    district: "Jammu",
    address: "Forensic Science Laboratory, Canal Road, Jammu 180001",
    phone: "0191-2544200",
    email: "fsl.jk@jkpolice.gov.in",
    operationalSince: "2019",
    specializations: [
      "Digital Evidence Analysis",
      "Mobile Device Forensics",
      "Network Forensics",
      "Malware Analysis",
    ],
  },
];

// ============================================================
// LAW ENFORCEMENT CONTACTS
// ============================================================

export const LAW_ENFORCEMENT_CONTACTS: LawEnforcementContact[] = [
  {
    organizationName: "J&K Police – Director General of Police",
    division: "UT-Level",
    role: "Director General of Police, J&K",
    phone: "0194-2452400",
    alternatePhone: "0191-2544100",
    email: "dgp@jkpolice.gov.in",
    address: "Police Headquarters, Srinagar / Jammu",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "Inspector General of Police – Kashmir Range",
    division: "Kashmir",
    role: "IGP Kashmir",
    phone: "0194-2452000",
    email: "igp.kashmir@jkpolice.gov.in",
    address: "IGP Office, Kashmir, Srinagar 190001",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "Inspector General of Police – Jammu Range",
    division: "Jammu",
    role: "IGP Jammu",
    phone: "0191-2470011",
    email: "igp.jammu@jkpolice.gov.in",
    address: "IGP Office, Jammu, Bakshi Nagar 180001",
    availableHours: "Monday–Saturday, 09:00–17:00 IST",
  },
  {
    organizationName: "National Cyber Crime Helpline",
    division: "Central",
    role: "MHA National Nodal Authority",
    phone: "1930",
    email: "helpdesk@cybercrime.gov.in",
    address: "Ministry of Home Affairs, New Delhi",
    availableHours: "24 × 7",
  },
  {
    organizationName: "CERT-In",
    division: "Central",
    role: "Director General, CERT-In",
    phone: "1800-11-4949",
    email: "incident@cert-in.org.in",
    address: "Electronics Niketan, 6 CGO Complex, New Delhi 110003",
    availableHours: "24 × 7 for critical incidents",
  },
  {
    organizationName: "Enforcement Directorate – Jammu Zone",
    division: "Jammu",
    role: "Zonal Director, ED Jammu",
    phone: "0191-2544300",
    email: "ed.jammu@gov.in",
    address: "ED Office, Residency Road, Jammu 180001",
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
    region: "Both",
    availableHours: "24 × 7",
  },
  {
    service: "Unified Emergency Number",
    number: "112",
    type: "Police",
    region: "Both",
    availableHours: "24 × 7",
  },
  {
    service: "National Cyber Crime Helpline",
    number: "1930",
    type: "Cyber",
    region: "Both",
    availableHours: "24 × 7",
    remarks:
      "Financial fraud; call immediately to enable transaction freeze.",
  },
  {
    service: "Ambulance",
    number: "108",
    type: "Medical",
    region: "Both",
    availableHours: "24 × 7",
  },
  {
    service: "Fire",
    number: "101",
    type: "Fire",
    region: "Both",
    availableHours: "24 × 7",
  },
  {
    service: "Army Helpline (Kashmir)",
    number: "0194-2480041",
    type: "Army",
    region: "Kashmir",
    availableHours: "24 × 7",
    remarks: "XV Corps / Chinar Corps; security-related emergencies.",
  },
  {
    service: "J&K Police Control Room, Srinagar",
    number: "0194-2477700",
    type: "Police",
    region: "Kashmir",
    availableHours: "24 × 7",
  },
  {
    service: "J&K Police Control Room, Jammu",
    number: "0191-2577100",
    type: "Police",
    region: "Jammu",
    availableHours: "24 × 7",
  },
  {
    service: "Women Helpline",
    number: "1091",
    type: "Helpline",
    region: "Both",
    availableHours: "24 × 7",
  },
  {
    service: "Child Helpline",
    number: "1098",
    type: "Helpline",
    region: "Both",
    availableHours: "24 × 7",
  },
  {
    service: "Anti-Terror Helpline J&K",
    number: "0194-2452700",
    type: "Police",
    region: "Both",
    availableHours: "24 × 7",
    remarks: "Report extremist content, online radicalisation, and terror-related cyber activity.",
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
      "Central portal for all cyber crime types including financial fraud, extremist content, social media abuse, and child exploitation.",
    availableLanguages: ["Hindi", "English"],
  },
  {
    resourceName: "J&K Police Official Portal",
    resourceType: "Online Portal",
    contactOrUrl: "https://jkpolice.gov.in",
    description:
      "J&K Police official website with online complaint filing and cyber crime information in both Kashmir and Jammu divisions.",
    availableLanguages: ["English", "Urdu", "Hindi"],
  },
  {
    resourceName: "National Cyber Crime Helpline",
    resourceType: "Helpline",
    contactOrUrl: "1930",
    description:
      "Toll-free 24×7 helpline for financial cyber fraud; critical first contact for fund recovery.",
    availableLanguages: ["Hindi", "English", "Kashmiri", "Dogri", "Urdu"],
  },
  {
    resourceName: "Cyber Crime Cell – Srinagar (In Person)",
    resourceType: "In-Person",
    contactOrUrl: "PHQ, Srinagar, Jammu and Kashmir 190001",
    description:
      "Walk-in complaint centre for Kashmir Division cyber crimes.",
    availableLanguages: ["Kashmiri", "Urdu", "Hindi", "English"],
  },
  {
    resourceName: "Cyber Crime Cell – Jammu (In Person)",
    resourceType: "In-Person",
    contactOrUrl: "SP Office, Bakshi Nagar, Jammu 180001",
    description:
      "Walk-in complaint centre for Jammu Division cyber crimes.",
    availableLanguages: ["Dogri", "Hindi", "Punjabi", "English"],
  },
  {
    resourceName: "CERT-In Incident Report",
    resourceType: "Online Portal",
    contactOrUrl: "https://www.cert-in.org.in/Report.jsp",
    description:
      "For critical cybersecurity incidents affecting government infrastructure in J&K.",
    availableLanguages: ["English"],
  },
];

// ============================================================
// IMPORTANT DISTRICTS
// ============================================================

export const IMPORTANT_DISTRICTS: ImportantDistrict[] = [
  {
    districtName: "Srinagar",
    division: "Kashmir",
    headquarters: "Srinagar",
    population: 1269751,
    area: 2228,
    digitalPenetration: "High",
    cyberCrimeRisk: "Critical",
    notableFeatures: [
      "Summer capital; political, commercial, and tourism hub of Kashmir",
      "Highest internet and social media penetration in Kashmir Valley",
      "Primary base for J&K Police Cyber Crime Cell (Kashmir Range)",
      "Dal Lake houseboat booking fraud concentrated here",
      "Extremist content monitoring highest in this district",
    ],
  },
  {
    districtName: "Jammu",
    division: "Jammu",
    headquarters: "Jammu",
    population: 1526406,
    area: 2342,
    digitalPenetration: "High",
    cyberCrimeRisk: "Critical",
    notableFeatures: [
      "Winter capital; largest city in J&K by population",
      "Highest cyber fraud complaint volume in Jammu Division",
      "Major banking and financial services hub",
      "Gateway to Vaishno Devi; pilgrim-targeted scams frequent",
      "J&K Police Cyber Crime Police Station for Jammu Range located here",
    ],
  },
  {
    districtName: "Baramulla",
    division: "Kashmir",
    headquarters: "Baramulla",
    population: 1015503,
    area: 4588,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Northern Kashmir; historically sensitive security environment",
      "Online radicalisation and encrypted messaging closely monitored",
      "Growing e-commerce and mobile banking adoption",
    ],
  },
  {
    districtName: "Anantnag",
    division: "Kashmir",
    headquarters: "Anantnag",
    population: 1078692,
    area: 3984,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "South Kashmir district including Pahalgam tourism zone",
      "Tourism booking fraud increases before Amarnath Yatra",
      "Mobile banking fraud increasing among orchard farmers (apple economy)",
    ],
  },
  {
    districtName: "Udhampur",
    division: "Jammu",
    headquarters: "Udhampur",
    population: 554985,
    area: 2639,
    digitalPenetration: "Medium",
    cyberCrimeRisk: "Medium",
    notableFeatures: [
      "Gateway district to Vaishno Devi Shrine",
      "Katra base camp proximity; pilgrim population targeted online",
      "NHPC hydro project workers – targeted by job scams",
    ],
  },
  {
    districtName: "Rajouri",
    division: "Jammu",
    headquarters: "Rajouri",
    population: 642415,
    area: 2630,
    digitalPenetration: "Low",
    cyberCrimeRisk: "High",
    notableFeatures: [
      "Hilly border district; LoC proximity",
      "Rapid smartphone adoption without cyber awareness",
      "OTP fraud and fake job offers increasing sharply",
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

export const CYBER_UNITS_BY_DIVISION = buildIndex(
  REGIONAL_CYBER_POLICE_UNITS,
  (u) => u.division
);
export const CYBER_UNITS_BY_TYPE = buildIndex(
  REGIONAL_CYBER_POLICE_UNITS,
  (u) => u.unitType
);
export const CYBER_CELLS_BY_DIVISION = buildIndex(
  CYBER_CELLS,
  (c) => c.division
);
export const HIGH_RISK_REGIONS_BY_DIVISION = buildIndex(
  HIGH_RISK_REGIONS,
  (r) => r.division
);
export const HIGH_RISK_REGIONS_BY_LEVEL = buildIndex(
  HIGH_RISK_REGIONS,
  (r) => r.riskLevel
);
export const THREATS_BY_RISK_LEVEL = buildIndex(
  MAJOR_CYBER_THREATS,
  (t) => t.riskLevel
);
export const THREATS_BY_REGION = buildIndex(
  MAJOR_CYBER_THREATS,
  (t) => t.affectedRegion
);export default {
  profile: UT_PROFILE,
  crimeStatistics: CRIME_STATISTICS,
  cyberCrimeStatistics: CYBER_CRIME_STATISTICS,
  majorCyberThreats: MAJOR_CYBER_THREATS,
  commonScams: COMMON_SCAMS,
  highRiskRegions: HIGH_RISK_REGIONS,
  cyberPoliceStations: REGIONAL_CYBER_POLICE_UNITS,
  cyberCells: CYBER_CELLS,
  lawEnforcementContacts: LAW_ENFORCEMENT_CONTACTS,
  emergencyContacts: EMERGENCY_CONTACTS,
  reportingResources: REPORTING_RESOURCES,
  importantDistricts: IMPORTANT_DISTRICTS,
};
