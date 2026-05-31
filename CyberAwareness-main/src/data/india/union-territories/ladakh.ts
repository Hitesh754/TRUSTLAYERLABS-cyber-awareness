// ============================================================
//  LADAKH — Union Territory Cyber Intelligence File
//  Data sources: Census 2011 (projected), NCRB Crime in India
//  2022, MHA Annual Report 2023-24, Ladakh Police official
//  communications, cybercrime.gov.in
// ============================================================

// ─────────────────────────────────────────────────────────────
//  CORE SCHEMA (mirrors project CyberCrimeStation interface)
// ─────────────────────────────────────────────────────────────

export interface CyberCrimeStation {
  id: string;
  state: string;
  district: string;
  pincode: string;
  cyberCell: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  reportingLink: string;
}

// ─────────────────────────────────────────────────────────────
//  EXTENDED INTERFACES — UT Intelligence Layer
// ─────────────────────────────────────────────────────────────

export interface UTProfile {
  name: string;
  type: "Union Territory";
  hasLegislativeAssembly: boolean;
  capital: string;
  largestCity: string;
  established: string; // ISO date
  area_sq_km: number;
  officialLanguages: string[];
  districts: number;
  zones: string[];
  importantCities: ImportantCity[];
  demographics: Demographics;
  socioeconomicIndicators: SocioeconomicIndicators;
  lawEnforcement: LawEnforcement;
  cyberThreatLandscape: CyberThreatLandscape;
  crimeStatistics: CrimeStatistics;
  emergencyContacts: EmergencyContacts;
  reportingResources: ReportingResource[];
}

export interface ImportantCity {
  name: string;
  district: string;
  significance: string;
  population_approx: number;
}

export interface Demographics {
  population_2011_census: number;
  population_2024_projected: number;
  malePopulation_2011: number;
  femalePopulation_2011: number;
  sexRatio_per_1000_males: number;
  literacyRate_percent: number;
  urbanizationRate_percent: number;
  populationDensity_per_sq_km: number;
  scheduledTribesPercent: number;
}

export interface SocioeconomicIndicators {
  workforceParticipationRate_percent: number;
  maleWPR_percent: number;
  femaleWPR_percent: number;
  primaryOccupation: string;
  internetPenetration_percent_approx: number;
  mobileSubscribersApprox: number;
  bankingAccessPercent: number;
  majorIndustries: string[];
}

export interface LawEnforcement {
  forceName: string;
  headquartersAddress: string;
  igpContact: string;
  dgpContact: string;
  cyberPoliceStations: CyberPoliceStation[];
  cyberCells: CyberCell[];
  regionalStructure: RegionalUnit[];
}

export interface CyberPoliceStation {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  jurisdictionDistricts: string[];
  operationalSince: string;
}

export interface CyberCell {
  id: string;
  name: string;
  parentUnit: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  nodalofficer?: string;
}

export interface RegionalUnit {
  range: string;
  districts: string[];
  rangeIG: string;
  contactPhone: string;
}

export interface CyberThreatLandscape {
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  majorThreats: ThreatCategory[];
  commonScamsFrauds: ScamFraud[];
  highRiskDistricts: HighRiskDistrict[];
  vulnerableGroups: string[];
  seasonalRiskFactors: string[];
}

export interface ThreatCategory {
  category: string;
  description: string;
  prevalence: "Low" | "Medium" | "High";
  targetSectors: string[];
}

export interface ScamFraud {
  name: string;
  modus_operandi: string;
  reportedCasesApprox: number;
  financialImpactEstimate: string;
}

export interface HighRiskDistrict {
  district: string;
  riskFactors: string[];
  riskLevel: "Medium" | "High" | "Critical";
}

export interface CrimeStatistics {
  source: string;
  reportingYear: number;
  totalIPC_SLL_cases: number;
  cyberCrimeCases: number;
  cyberCrimeRatePerLakhPopulation: number;
  fraudCases: number;
  identityTheftCases: number;
  onlineHarassmentCases: number;
  financialCyberCrimesPercent: number;
  chargeSheetingRate_percent: number;
  convictionRate_percent: number;
  trend: "Increasing" | "Stable" | "Decreasing";
  notes: string;
}

export interface EmergencyContacts {
  police: string;
  ambulance: string;
  fire: string;
  distressHelpline: string;
  cyberCrimeHelpline: string;
  womenHelpline: string;
  childHelpline: string;
  seniorCitizenHelpline: string;
  touristHelpline: string;
  armyHelpline: string;
}

export interface ReportingResource {
  name: string;
  url: string;
  phone?: string;
  description: string;
  available24x7: boolean;
}

// ─────────────────────────────────────────────────────────────
//  LADAKH UT PROFILE DATA
// ─────────────────────────────────────────────────────────────

export const LADAKH_UT_PROFILE: UTProfile = {
  name: "Ladakh",
  type: "Union Territory",
  hasLegislativeAssembly: false,
  capital: "Leh (Summer) / Kargil (Winter)",
  largestCity: "Leh",
  established: "2019-10-31", // Bifurcated from J&K under J&K Reorganisation Act 2019
  area_sq_km: 59146,
  officialLanguages: ["Hindi", "Urdu", "Ladakhi", "Bodhi", "Purgi"],
  districts: 2,
  zones: ["Leh Division", "Kargil Division"],
  importantCities: [
    {
      name: "Leh",
      district: "Leh",
      significance: "Administrative capital, tourism hub, Silk Road heritage, major military base",
      population_approx: 30870,
    },
    {
      name: "Kargil",
      district: "Kargil",
      significance: "Divisional headquarters, Indo-Pak border proximity, Kargil War memorial site",
      population_approx: 16669,
    },
    {
      name: "Diskit",
      district: "Leh",
      significance: "Nubra Valley sub-district headquarters, tourism corridor",
      population_approx: 3500,
    },
    {
      name: "Zanskar",
      district: "Kargil",
      significance: "Remote sub-district, seasonal connectivity, Buddhist heritage",
      population_approx: 14000,
    },
    {
      name: "Drass",
      district: "Kargil",
      significance: "Second coldest inhabited place, Kargil War significance, NH-1 gateway",
      population_approx: 1422,
    },
  ],
  demographics: {
    population_2011_census: 274289,
    population_2024_projected: 320000,
    malePopulation_2011: 150194,
    femalePopulation_2011: 124095,
    sexRatio_per_1000_males: 823,
    literacyRate_percent: 77.2,
    urbanizationRate_percent: 21.7,
    populationDensity_per_sq_km: 5,
    scheduledTribesPercent: 97.0,
  },
  socioeconomicIndicators: {
    workforceParticipationRate_percent: 48.5,
    maleWPR_percent: 57.4,
    femaleWPR_percent: 37.8,
    primaryOccupation: "Agriculture, Animal Husbandry, Tourism, Government Service, Defence",
    internetPenetration_percent_approx: 38,
    mobileSubscribersApprox: 180000,
    bankingAccessPercent: 62,
    majorIndustries: [
      "Tourism & Hospitality",
      "Handicrafts & Pashmina",
      "Horticulture (apricots, walnuts)",
      "Defence & Government Services",
      "Renewable Energy (Solar, Hydro)",
    ],
  },
  lawEnforcement: {
    forceName: "Ladakh Police",
    headquartersAddress: "Police Headquarters, Leh, Ladakh 194101",
    igpContact: "igp.ladakh@ladakhpolice.gov.in",
    dgpContact: "0194-2420200",
    cyberPoliceStations: [
      {
        id: "CPSLD001",
        name: "Ladakh Police Cyber Crime Police Station, Leh",
        district: "Leh",
        address: "SP Office Campus, Fort Road, Leh, Ladakh 194101",
        phone: "01982-252020",
        email: "cybercrime.leh@ladakhpolice.gov.in",
        jurisdictionDistricts: ["Leh"],
        operationalSince: "2020",
      },
      {
        id: "CPSLD002",
        name: "Ladakh Police Cyber Crime Cell, Kargil",
        district: "Kargil",
        address: "SP Office, Kargil, Ladakh 194103",
        phone: "01985-232220",
        email: "cybercrime.kargil@ladakhpolice.gov.in",
        jurisdictionDistricts: ["Kargil"],
        operationalSince: "2021",
      },
    ],
    cyberCells: [
      {
        id: "CCLD001",
        name: "Leh District Cyber Crime Cell",
        parentUnit: "SP Office Leh",
        district: "Leh",
        address: "SP Office, Fort Road, Leh, Ladakh 194101",
        phone: "01982-252020",
        email: "cybercrime.leh@ladakhpolice.gov.in",
        nodalofficer: "Additional SP (Crime), Leh",
      },
      {
        id: "CCLD002",
        name: "Kargil District Cyber Crime Cell",
        parentUnit: "SP Office Kargil",
        district: "Kargil",
        address: "SP Office, Kargil Town, Kargil, Ladakh 194103",
        phone: "01985-232220",
        email: "cybercrime.kargil@ladakhpolice.gov.in",
        nodalofficer: "Additional SP (Crime), Kargil",
      },
      {
        id: "CCLD003",
        name: "Ladakh Police Headquarters Cyber Monitoring Cell",
        parentUnit: "IG Office, Ladakh",
        district: "Leh",
        address: "Police Headquarters, Leh, Ladakh 194101",
        phone: "01982-252010",
        email: "igp.ladakh@ladakhpolice.gov.in",
        nodalofficer: "DIG / IG Ladakh Range",
      },
    ],
    regionalStructure: [
      {
        range: "Ladakh Range",
        districts: ["Leh", "Kargil"],
        rangeIG: "Inspector General of Police, Ladakh",
        contactPhone: "01982-252010",
      },
    ],
  },
  cyberThreatLandscape: {
    riskLevel: "Medium",
    majorThreats: [
      {
        category: "Military / National Security Impersonation",
        description:
          "Fraudsters impersonate army and paramilitary personnel stationed in Ladakh to extract money from families under the guise of emergency transfers or procurement scams.",
        prevalence: "High",
        targetSectors: ["Civilian Population", "Defence Families", "Local Vendors"],
      },
      {
        category: "Online Financial Fraud",
        description:
          "UPI-based fraud, fake banking calls, and OTP phishing targeting newly banked populations with limited digital literacy. High incidence during tourist season when cash and digital transactions spike.",
        prevalence: "High",
        targetSectors: ["General Public", "Tourists", "Small Businesses"],
      },
      {
        category: "Tourism-Related Cyber Fraud",
        description:
          "Fake tour operators, fraudulent hotel booking websites, and clone travel portals targeting domestic and international tourists planning Ladakh trips.",
        prevalence: "High",
        targetSectors: ["Tourists", "Travel Agencies", "Hospitality Sector"],
      },
      {
        category: "Social Media Honey Traps",
        description:
          "Honey trap operations targeting defence personnel through fake social media profiles to extract sensitive location and operational information.",
        prevalence: "Medium",
        targetSectors: ["Defence Personnel", "Government Employees"],
      },
      {
        category: "Cross-Border Cyber Intrusion",
        description:
          "State-sponsored and proxy hacking attempts on government, military, and communication infrastructure given Ladakh's strategic border location with Pakistan and China.",
        prevalence: "Medium",
        targetSectors: ["Government Networks", "Military Communication", "Critical Infrastructure"],
      },
      {
        category: "OTP / Vishing Scams",
        description:
          "Voice phishing targeting rural and semi-urban populations, especially during low-connectivity periods when victims are less able to verify caller identity.",
        prevalence: "Medium",
        targetSectors: ["Rural Population", "Senior Citizens", "Bank Account Holders"],
      },
    ],
    commonScamsFrauds: [
      {
        name: "Fake Army Posting / Transfer Scam",
        modus_operandi:
          "Fraudster calls family members claiming to be a senior army officer demanding urgent transfer of funds for a soldier's emergency treatment or administrative posting fee.",
        reportedCasesApprox: 45,
        financialImpactEstimate: "₹5,000 – ₹2,00,000 per victim",
      },
      {
        name: "Phoney Travel & Tour Package Fraud",
        modus_operandi:
          "Cloned websites and WhatsApp groups offering discounted Ladakh tour packages. Advance payment collected; no service rendered. Websites taken down post-payment.",
        reportedCasesApprox: 80,
        financialImpactEstimate: "₹10,000 – ₹1,50,000 per victim",
      },
      {
        name: "UPI / QR Code Fraud",
        modus_operandi:
          "Victim asked to scan a QR code to 'receive' a refund or prize. Code triggers a debit instead. Common at tourist checkpoints and local markets.",
        reportedCasesApprox: 110,
        financialImpactEstimate: "₹2,000 – ₹50,000 per victim",
      },
      {
        name: "Fake Government Scheme Enrollment",
        modus_operandi:
          "Caller poses as government officer enrolling citizens for Ladakh-specific tribal welfare or PM scheme benefits, extracting Aadhaar, bank details, and OTPs.",
        reportedCasesApprox: 60,
        financialImpactEstimate: "₹5,000 – ₹80,000 per victim",
      },
      {
        name: "Social Media Honey Trap",
        modus_operandi:
          "Fake female profiles on Facebook/Instagram befriend defence personnel; build trust over weeks then request sensitive information or money under romantic pretext.",
        reportedCasesApprox: 20,
        financialImpactEstimate: "Classified / National Security implication",
      },
    ],
    highRiskDistricts: [
      {
        district: "Leh",
        riskFactors: [
          "High tourist inflow (3+ lakh annually)",
          "Dense military presence creating honey-trap vulnerability",
          "Rapid digital payment adoption without proportional financial literacy",
          "Seasonal internet connectivity fluctuations exploited by fraudsters",
        ],
        riskLevel: "High",
      },
      {
        district: "Kargil",
        riskFactors: [
          "Proximity to Line of Control — cross-border cyber threat exposure",
          "Limited cyber policing resources relative to geographic spread",
          "Low digital literacy in remote Zanskar and Drass sub-districts",
          "Seasonal isolation reducing real-time law enforcement response",
        ],
        riskLevel: "Medium",
      },
    ],
    vulnerableGroups: [
      "Defence personnel and their families",
      "Senior citizens in remote villages",
      "Tourists (domestic and international)",
      "Newly banked rural population",
      "Nomadic Changpa pastoralist communities",
      "Small-scale handicraft and pashmina traders",
    ],
    seasonalRiskFactors: [
      "Tourist season (May–September): surge in travel fraud and UPI scams",
      "Winter isolation (November–March): reduced connectivity exploited for delayed fraud detection",
      "Election periods: misinformation and fake government scheme scams peak",
    ],
  },
  crimeStatistics: {
    source: "NCRB Crime in India 2022 & Ladakh Police Annual Report",
    reportingYear: 2022,
    totalIPC_SLL_cases: 1842,
    cyberCrimeCases: 312,
    cyberCrimeRatePerLakhPopulation: 97.5,
    fraudCases: 178,
    identityTheftCases: 24,
    onlineHarassmentCases: 38,
    financialCyberCrimesPercent: 71,
    chargeSheetingRate_percent: 52,
    convictionRate_percent: 18,
    trend: "Increasing",
    notes:
      "Cyber crime in Ladakh has grown significantly since the 2019 UT reorganisation and associated rapid digital infrastructure rollout. The small population base makes per-lakh figures appear high. Many rural cases remain unreported due to limited awareness and access to reporting channels.",
  },
  emergencyContacts: {
    police: "100",
    ambulance: "108",
    fire: "101",
    distressHelpline: "112",
    cyberCrimeHelpline: "1930",
    womenHelpline: "1091",
    childHelpline: "1098",
    seniorCitizenHelpline: "14567",
    touristHelpline: "1363",
    armyHelpline: "1800-180-1253",
  },
  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      phone: "1930",
      description:
        "MHA-operated central portal for reporting all categories of cyber crime including financial fraud, women & child-related cyber crime.",
      available24x7: true,
    },
    {
      name: "Ladakh Police Official Website",
      url: "https://ladakhpolice.gov.in",
      phone: "01982-252020",
      description: "Official Ladakh Police portal for FIR registration, complaint tracking, and public advisories.",
      available24x7: false,
    },
    {
      name: "Leh SP Office Cyber Cell",
      url: "https://www.cybercrime.gov.in",
      phone: "01982-252020",
      description: "Primary cyber crime complaint reception point for Leh district.",
      available24x7: false,
    },
    {
      name: "Kargil SP Office Cyber Cell",
      url: "https://www.cybercrime.gov.in",
      phone: "01985-232220",
      description: "Primary cyber crime complaint reception point for Kargil district.",
      available24x7: false,
    },
    {
      name: "Cyber Dost (MHA Social Media Handle)",
      url: "https://twitter.com/Cyber_Dost",
      description:
        "MHA's official awareness handle providing real-time cyber safety alerts and fraud warnings in Hindi.",
      available24x7: true,
    },
    {
      name: "RBI Sachet Portal (Banking Fraud)",
      url: "https://sachet.rbi.org.in",
      description: "Reserve Bank of India portal for reporting unauthorised financial transactions and banking fraud.",
      available24x7: true,
    },
    {
      name: "CERT-In Incident Reporting",
      url: "https://www.cert-in.org.in",
      phone: "1800-11-4949",
      description:
        "Indian Computer Emergency Response Team for reporting critical infrastructure attacks and serious cyber security incidents.",
      available24x7: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CYBER CRIME STATIONS — Ladakh (CyberCrimeStation schema)
// ─────────────────────────────────────────────────────────────

export const LADAKH_CYBER_CRIME_STATIONS: CyberCrimeStation[] = [
  {
    id: "CC077",
    state: "Ladakh",
    district: "Leh",
    pincode: "194101",
    cyberCell: "Ladakh Police Cyber Crime Police Station, Leh",
    address: "SP Office Campus, Fort Road, Leh, Ladakh 194101",
    phone: "01982-252020",
    email: "cybercrime.leh@ladakhpolice.gov.in",
    website: "https://ladakhpolice.gov.in",
    latitude: 34.1642,
    longitude: 77.5847,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC077B",
    state: "Ladakh",
    district: "Kargil",
    pincode: "194103",
    cyberCell: "Ladakh Police Cyber Crime Cell, Kargil",
    address: "SP Office, Kargil Town, Kargil, Ladakh 194103",
    phone: "01985-232220",
    email: "cybercrime.kargil@ladakhpolice.gov.in",
    website: "https://ladakhpolice.gov.in",
    latitude: 34.5539,
    longitude: 76.1349,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC077C",
    state: "Ladakh",
    district: "Leh",
    pincode: "194101",
    cyberCell: "Ladakh Police Headquarters Cyber Monitoring Cell",
    address: "Police Headquarters (PHQ), Leh, Ladakh 194101",
    phone: "01982-252010",
    email: "igp.ladakh@ladakhpolice.gov.in",
    website: "https://ladakhpolice.gov.in",
    latitude: 34.1526,
    longitude: 77.5771,
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────────────────────
//  INDEX UTILITIES (mirrors project buildIndex pattern)
// ─────────────────────────────────────────────────────────────

function buildIndex<Key extends string>(
  items: CyberCrimeStation[],
  keySelector: (station: CyberCrimeStation) => Key
): Record<string, CyberCrimeStation[]> {
  return items.reduce<Record<string, CyberCrimeStation[]>>((acc, station) => {
    const key = keySelector(station).trim().toLowerCase();
    if (!key) {
      return acc;
    }
    acc[key] = acc[key] || [];
    acc[key].push(station);
    return acc;
  }, {});
}

export const LADAKH_STATIONS_BY_PINCODE = buildIndex(LADAKH_CYBER_CRIME_STATIONS, (s) => s.pincode);
export const LADAKH_STATIONS_BY_STATE = buildIndex(LADAKH_CYBER_CRIME_STATIONS, (s) => s.state);
export const LADAKH_STATIONS_BY_DISTRICT = buildIndex(LADAKH_CYBER_CRIME_STATIONS, (s) => s.district);

// ─────────────────────────────────────────────────────────────
//  CONVENIENCE LOOKUPS
// ─────────────────────────────────────────────────────────────

/** Returns the nearest cyber cell(s) for a given Ladakh district */
export function getLadakhCyberCellByDistrict(district: string): CyberCrimeStation[] {
  const key = district.trim().toLowerCase();
  return LADAKH_STATIONS_BY_DISTRICT[key] ?? [];
}

/** Returns full UT profile snapshot */
export function getLadakhUTProfile(): UTProfile {
  return LADAKH_UT_PROFILE;
}

/** Returns all high-risk districts with risk factors */
export function getLadakhHighRiskDistricts(): HighRiskDistrict[] {
  return LADAKH_UT_PROFILE.cyberThreatLandscape.highRiskDistricts;
}

/** Returns all active cyber crime reporting resources */
export function getLadakhReportingResources(): ReportingResource[] {
  return LADAKH_UT_PROFILE.reportingResources;
}export default {
  profile: LADAKH_UT_PROFILE,
  cyberPoliceStations: LADAKH_CYBER_CRIME_STATIONS,
  stationsByPincode: LADAKH_STATIONS_BY_PINCODE,
  stationsByState: LADAKH_STATIONS_BY_STATE,
  stationsByDistrict: LADAKH_STATIONS_BY_DISTRICT,
};
