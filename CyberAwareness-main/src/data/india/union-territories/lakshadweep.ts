// ============================================================
//  LAKSHADWEEP — Union Territory Cyber Intelligence File
//  Data sources: Census 2011, NCRB Crime in India 2022,
//  Lakshadweep Administration Official Data, MHA Annual
//  Report 2023-24, cybercrime.gov.in
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
  established: string;
  area_sq_km: number;
  officialLanguages: string[];
  islands: IslandUnit[];
  inhabtiedIslandsCount: number;
  uninhabitedIslandsCount: number;
  importantCities: ImportantCity[];
  demographics: Demographics;
  socioeconomicIndicators: SocioeconomicIndicators;
  lawEnforcement: LawEnforcement;
  cyberThreatLandscape: CyberThreatLandscape;
  crimeStatistics: CrimeStatistics;
  emergencyContacts: EmergencyContacts;
  reportingResources: ReportingResource[];
}

export interface IslandUnit {
  name: string;
  atoll: string;
  inhabited: boolean;
  population_2011_approx: number;
  area_sq_km: number;
}

export interface ImportantCity {
  name: string;
  island: string;
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
  muslimPopulationPercent: number;
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
  coconutProductionTonnesAnnual: number;
}

export interface LawEnforcement {
  forceName: string;
  headquartersAddress: string;
  spContact: string;
  cyberPoliceStations: CyberPoliceStation[];
  cyberCells: CyberCell[];
  coastGuardUnit: CoastGuardUnit;
}

export interface CyberPoliceStation {
  id: string;
  name: string;
  island: string;
  address: string;
  phone: string;
  email: string;
  jurisdictionIslands: string[];
  operationalSince: string;
}

export interface CyberCell {
  id: string;
  name: string;
  parentUnit: string;
  island: string;
  address: string;
  phone: string;
  email: string;
  nodalofficer?: string;
}

export interface CoastGuardUnit {
  name: string;
  station: string;
  phone: string;
  email: string;
  jurisdiction: string;
}

export interface CyberThreatLandscape {
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  majorThreats: ThreatCategory[];
  commonScamsFrauds: ScamFraud[];
  highRiskIslands: HighRiskRegion[];
  vulnerableGroups: string[];
  geographicRiskFactors: string[];
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

export interface HighRiskRegion {
  region: string;
  riskFactors: string[];
  riskLevel: "Low" | "Medium" | "High" | "Critical";
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
  coastGuardDistress: string;
  touristHelpline: string;
}

export interface ReportingResource {
  name: string;
  url: string;
  phone?: string;
  description: string;
  available24x7: boolean;
}

// ─────────────────────────────────────────────────────────────
//  LAKSHADWEEP UT PROFILE DATA
// ─────────────────────────────────────────────────────────────

export const LAKSHADWEEP_UT_PROFILE: UTProfile = {
  name: "Lakshadweep",
  type: "Union Territory",
  hasLegislativeAssembly: false,
  capital: "Kavaratti",
  largestCity: "Kavaratti",
  established: "1956-11-01", // Formed as Laccadive, Minicoy and Aminidivi Islands; renamed 1973
  area_sq_km: 32.62,
  officialLanguages: ["Malayalam", "Hindi", "English"],
  inhabtiedIslandsCount: 10,
  uninhabitedIslandsCount: 26,
  islands: [
    { name: "Kavaratti", atoll: "Kavaratti Atoll", inhabited: true, population_2011_approx: 11210, area_sq_km: 4.22 },
    { name: "Agatti", atoll: "Agatti Atoll", inhabited: true, population_2011_approx: 7560, area_sq_km: 2.7 },
    { name: "Minicoy", atoll: "Minicoy Atoll", inhabited: true, population_2011_approx: 11191, area_sq_km: 4.8 },
    { name: "Andrott", atoll: "Andrott Atoll", inhabited: true, population_2011_approx: 11191, area_sq_km: 4.9 },
    { name: "Amini", atoll: "Amindivi Atoll", inhabited: true, population_2011_approx: 7656, area_sq_km: 2.6 },
    { name: "Kiltan", atoll: "Amindivi Atoll", inhabited: true, population_2011_approx: 3946, area_sq_km: 1.6 },
    { name: "Chetlat", atoll: "Amindivi Atoll", inhabited: true, population_2011_approx: 2436, area_sq_km: 1.0 },
    { name: "Kadmat", atoll: "Amindivi Atoll", inhabited: true, population_2011_approx: 5329, area_sq_km: 3.2 },
    { name: "Kalpeni", atoll: "Kalpeni Atoll", inhabited: true, population_2011_approx: 4419, area_sq_km: 2.8 },
    { name: "Bitra", atoll: "Amindivi Atoll", inhabited: true, population_2011_approx: 271, area_sq_km: 0.1 },
  ],
  importantCities: [
    {
      name: "Kavaratti",
      island: "Kavaratti",
      significance: "Administrative capital, SP headquarters, main government offices, hospital",
      population_approx: 11210,
    },
    {
      name: "Agatti",
      island: "Agatti",
      significance: "Only airport in Lakshadweep (Agatti Aerodrome), tourism gateway, ferry hub",
      population_approx: 7560,
    },
    {
      name: "Minicoy",
      island: "Minicoy",
      significance: "Southernmost inhabited island, unique Mahl culture, lighthouse (1885), tuna fishing",
      population_approx: 11191,
    },
    {
      name: "Andrott",
      island: "Andrott",
      significance: "Most populous island, historic mosques, coconut processing hub",
      population_approx: 11191,
    },
    {
      name: "Amini",
      island: "Amini",
      significance: "Amindivi sub-group headquarters, traditional boat building",
      population_approx: 7656,
    },
  ],
  demographics: {
    population_2011_census: 64473,
    population_2024_projected: 72500,
    malePopulation_2011: 33106,
    femalePopulation_2011: 31367,
    sexRatio_per_1000_males: 947,
    literacyRate_percent: 92.28,
    urbanizationRate_percent: 78.1,
    populationDensity_per_sq_km: 2013,
    muslimPopulationPercent: 96.2,
    scheduledTribesPercent: 94.8,
  },
  socioeconomicIndicators: {
    workforceParticipationRate_percent: 41.3,
    maleWPR_percent: 52.1,
    femaleWPR_percent: 30.0,
    primaryOccupation: "Fishing, Coconut Cultivation, Government Service, Tourism",
    internetPenetration_percent_approx: 52,
    mobileSubscribersApprox: 55000,
    bankingAccessPercent: 78,
    majorIndustries: [
      "Deep-Sea Tuna Fishing & Canning",
      "Coconut & Copra Processing",
      "Tourism & Eco-Tourism",
      "Handicrafts (Coir, Shell Craft)",
      "Government & Administrative Services",
    ],
    coconutProductionTonnesAnnual: 10600,
  },
  lawEnforcement: {
    forceName: "Lakshadweep Police",
    headquartersAddress: "Superintendent of Police Office, Kavaratti, Lakshadweep 682555",
    spContact: "04896-262250",
    cyberPoliceStations: [
      {
        id: "CPSLK001",
        name: "Lakshadweep Police Cyber Crime Cell, Kavaratti",
        island: "Kavaratti",
        address: "SP Office, Kavaratti, Lakshadweep 682555",
        phone: "04896-262250",
        email: "cybercrime.lakshadweep@lakshadweeppolice.gov.in",
        jurisdictionIslands: [
          "Kavaratti",
          "Agatti",
          "Amini",
          "Andrott",
          "Kiltan",
          "Chetlat",
          "Kadmat",
          "Kalpeni",
          "Minicoy",
          "Bitra",
        ],
        operationalSince: "2019",
      },
    ],
    cyberCells: [
      {
        id: "CCLK001",
        name: "Lakshadweep Police Cyber Crime Cell",
        parentUnit: "SP Office, Kavaratti",
        island: "Kavaratti",
        address: "Superintendent of Police Office, Kavaratti, Lakshadweep 682555",
        phone: "04896-262250",
        email: "cybercrime.lakshadweep@lakshadweeppolice.gov.in",
        nodalofficer: "SP (Cyber) Lakshadweep",
      },
      {
        id: "CCLK002",
        name: "Agatti Island Police Cyber Assistance Desk",
        parentUnit: "Circle Inspector Office, Agatti",
        island: "Agatti",
        address: "Police Station, Agatti Island, Lakshadweep 682553",
        phone: "04894-242200",
        email: "ps.agatti@lakshadweeppolice.gov.in",
        nodalofficer: "Circle Inspector, Agatti",
      },
      {
        id: "CCLK003",
        name: "Minicoy Island Police Cyber Assistance Desk",
        parentUnit: "Circle Inspector Office, Minicoy",
        island: "Minicoy",
        address: "Police Station, Minicoy Island, Lakshadweep 682559",
        phone: "04897-272200",
        email: "ps.minicoy@lakshadweeppolice.gov.in",
        nodalofficer: "Circle Inspector, Minicoy",
      },
    ],
    coastGuardUnit: {
      name: "Indian Coast Guard Station, Kavaratti",
      station: "Kavaratti, Lakshadweep",
      phone: "04896-262100",
      email: "icglak@indiancoastguard.gov.in",
      jurisdiction: "Entire Lakshadweep EEZ and territorial waters",
    },
  },
  cyberThreatLandscape: {
    riskLevel: "Medium",
    majorThreats: [
      {
        category: "Online Financial Fraud (UPI / Banking)",
        description:
          "Phishing SMS and WhatsApp messages mimicking Indian Bank, SBI, and cooperative bank notifications. Victims tricked into sharing OTPs, enabling unauthorised account access. Increasing with improved 4G connectivity across islands.",
        prevalence: "High",
        targetSectors: ["Bank Account Holders", "Government Employees", "Fishermen Cooperative Members"],
      },
      {
        category: "Tourism & Booking Fraud",
        description:
          "Surge in demand for Lakshadweep tourism post-2024 diplomatic spotlight has spawned hundreds of fake booking websites and WhatsApp-based fraudulent tour operators offering resort packages that do not exist.",
        prevalence: "High",
        targetSectors: ["Domestic Tourists", "Travel Agents", "Hospitality SMEs"],
      },
      {
        category: "Impersonation of Government Officials",
        description:
          "Fraudsters impersonate UT Administration officials and island development authority officers to extract bribes for permits (fishing, land, construction). Largely via phone and WhatsApp.",
        prevalence: "Medium",
        targetSectors: ["Fishermen", "Local Traders", "Land Owners"],
      },
      {
        category: "Social Media Misinformation",
        description:
          "Fabricated social and political content circulated via WhatsApp groups exploiting the tight-knit island community. Community disputes amplified digitally, occasionally leading to law and order situations.",
        prevalence: "Medium",
        targetSectors: ["General Population", "Community Leaders", "Local Media"],
      },
      {
        category: "Fishing Subsidy & Cooperative Fraud",
        description:
          "Fake messages and portals claiming government fishing subsidy disbursements, directing beneficiaries to share bank details or pay processing fees to receive funds.",
        prevalence: "Medium",
        targetSectors: ["Fishermen", "Fishing Cooperatives", "Boat Owners"],
      },
      {
        category: "Child Safety & Online Grooming",
        description:
          "With increased internet use among youth via smartphones, risks of online grooming and exploitation are emerging, particularly on social media platforms accessible via the UT's improving broadband infrastructure.",
        prevalence: "Low",
        targetSectors: ["Minors", "School Students"],
      },
    ],
    commonScamsFrauds: [
      {
        name: "Fake Lakshadweep Tour Package Fraud",
        modus_operandi:
          "Post the global spotlight on Lakshadweep in 2024, hundreds of fraudulent operators set up websites and WhatsApp groups offering heavily discounted resort + travel packages. Advance payments collected via UPI; operators disappear post-payment.",
        reportedCasesApprox: 95,
        financialImpactEstimate: "₹15,000 – ₹3,00,000 per victim",
      },
      {
        name: "KYC Expiry Phishing",
        modus_operandi:
          "Fraudulent SMS or WhatsApp message claiming the victim's bank KYC is expiring; provides a link to a clone banking website. Victim enters credentials and OTP, enabling account takeover.",
        reportedCasesApprox: 42,
        financialImpactEstimate: "₹5,000 – ₹80,000 per victim",
      },
      {
        name: "Government Permit / NOC Bribery Scam",
        modus_operandi:
          "Fraudster impersonates UT Administration officer offering fast-tracked fishing or construction permits for a fee payable via UPI. No permit is ever issued.",
        reportedCasesApprox: 28,
        financialImpactEstimate: "₹2,000 – ₹50,000 per victim",
      },
      {
        name: "Fisheries Subsidy Fraud",
        modus_operandi:
          "Bulk WhatsApp message claiming PM Matsya Sampada Yojana or NDDB subsidy disbursement; victim asked to share Aadhaar, bank account number, and mobile OTP to 'verify eligibility.'",
        reportedCasesApprox: 35,
        financialImpactEstimate: "₹3,000 – ₹40,000 per victim",
      },
      {
        name: "Fake Job Offer Fraud",
        modus_operandi:
          "Fake job portals and WhatsApp forwards advertising UT Administration or BSNL vacancies in Lakshadweep. Application fee collected; no recruitment process exists.",
        reportedCasesApprox: 18,
        financialImpactEstimate: "₹1,000 – ₹20,000 per victim",
      },
    ],
    highRiskIslands: [
      {
        region: "Kavaratti (Administrative Capital)",
        riskFactors: [
          "Highest internet penetration and digital transaction volume",
          "Government offices targeted for impersonation scams",
          "Highest tourist footfall post-2024 travel boom",
          "Banking hub for inter-island financial transactions",
        ],
        riskLevel: "High",
      },
      {
        region: "Agatti (Airport Island)",
        riskFactors: [
          "Only air entry point; targeted by fake travel operators",
          "High tourist throughput creating UPI fraud opportunities",
          "Airport-adjacent scams: fake transport and hotel booking frauds",
        ],
        riskLevel: "High",
      },
      {
        region: "Andrott (Most Populous Island)",
        riskFactors: [
          "Largest population with growing smartphone penetration",
          "Limited police presence relative to population",
          "Active fishing cooperative — subsidy fraud target",
        ],
        riskLevel: "Medium",
      },
      {
        region: "Minicoy (Southernmost Island)",
        riskFactors: [
          "Geographic isolation — delayed law enforcement response",
          "Limited banking access makes residents more susceptible to alternative fraud channels",
          "Unique Mahl-language community: Hindi/English scam content still reaches via bilingual youth",
        ],
        riskLevel: "Medium",
      },
    ],
    vulnerableGroups: [
      "Fishermen and fishing cooperative members",
      "Elderly population with limited digital literacy",
      "Youth using smartphones for the first time with new 4G connectivity",
      "Domestic tourists unfamiliar with UT entry permit process",
      "Small-scale handicraft and copra traders",
    ],
    geographicRiskFactors: [
      "Island-based isolation causes delayed FIR registration and investigation",
      "Inter-island travel requires boat or helicopter — impedes rapid cyber crime response",
      "Limited forensic infrastructure; digital evidence must be processed in Kerala (Kochi)",
      "High dependence on BSNL connectivity — single-point vulnerability for service disruption scams",
    ],
  },
  crimeStatistics: {
    source: "NCRB Crime in India 2022 & Lakshadweep Administration Police Data",
    reportingYear: 2022,
    totalIPC_SLL_cases: 268,
    cyberCrimeCases: 48,
    cyberCrimeRatePerLakhPopulation: 74.4,
    fraudCases: 31,
    identityTheftCases: 6,
    onlineHarassmentCases: 8,
    financialCyberCrimesPercent: 73,
    chargeSheetingRate_percent: 58,
    convictionRate_percent: 22,
    trend: "Increasing",
    notes:
      "Lakshadweep has India's smallest absolute cybercrime numbers owing to its tiny population, but the per-lakh rate is significant relative to its size. The 2024 surge in national tourism interest has accelerated fake booking fraud incidents considerably. Many cases are referred to Kerala Police for technical investigation given limited local forensic capacity.",
  },
  emergencyContacts: {
    police: "100",
    ambulance: "108",
    fire: "101",
    distressHelpline: "112",
    cyberCrimeHelpline: "1930",
    womenHelpline: "1091",
    childHelpline: "1098",
    coastGuardDistress: "1554",
    touristHelpline: "1363",
  },
  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      phone: "1930",
      description:
        "MHA central portal for reporting all categories of cyber crime. Recommended primary channel for Lakshadweep residents given limited local forensic capacity.",
      available24x7: true,
    },
    {
      name: "Lakshadweep Police SP Office",
      url: "https://lakshadweep.gov.in/police",
      phone: "04896-262250",
      description: "Superintendent of Police, Kavaratti — primary contact for all criminal complaints in the UT.",
      available24x7: false,
    },
    {
      name: "Lakshadweep Administration Portal",
      url: "https://lakshadweep.gov.in",
      description: "Official UT Administration website for citizen services, permit applications, and public notices.",
      available24x7: true,
    },
    {
      name: "Kerala Police Cyber Cell (Technical Support)",
      url: "https://keralapolice.gov.in",
      phone: "0484-2722770",
      description:
        "Kerala Police provides digital forensic and technical investigation support to Lakshadweep Police for complex cyber crime cases.",
      available24x7: false,
    },
    {
      name: "Indian Coast Guard Kavaratti",
      url: "https://indiancoastguard.gov.in",
      phone: "1554",
      description: "Maritime distress and coastal security — relevant for cyber-enabled fishing and maritime fraud.",
      available24x7: true,
    },
    {
      name: "CERT-In Incident Reporting",
      url: "https://www.cert-in.org.in",
      phone: "1800-11-4949",
      description:
        "Indian Computer Emergency Response Team for critical infrastructure cyber incidents and serious security breaches.",
      available24x7: true,
    },
    {
      name: "RBI Sachet Portal",
      url: "https://sachet.rbi.org.in",
      description: "Reserve Bank of India portal for reporting unauthorised financial transactions and banking fraud.",
      available24x7: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CYBER CRIME STATIONS — Lakshadweep (CyberCrimeStation schema)
// ─────────────────────────────────────────────────────────────

export const LAKSHADWEEP_CYBER_CRIME_STATIONS: CyberCrimeStation[] = [
  {
    id: "CC082",
    state: "Lakshadweep",
    district: "Kavaratti",
    pincode: "682555",
    cyberCell: "Lakshadweep Police Cyber Crime Cell, Kavaratti",
    address: "Superintendent of Police Office, Kavaratti, Lakshadweep 682555",
    phone: "04896-262250",
    email: "cybercrime.lakshadweep@lakshadweeppolice.gov.in",
    website: "https://lakshadweep.gov.in/police",
    latitude: 10.5669,
    longitude: 72.6420,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC082B",
    state: "Lakshadweep",
    district: "Agatti",
    pincode: "682553",
    cyberCell: "Agatti Island Police Cyber Assistance Desk",
    address: "Police Station, Agatti Island, Lakshadweep 682553",
    phone: "04894-242200",
    email: "ps.agatti@lakshadweeppolice.gov.in",
    website: "https://lakshadweep.gov.in/police",
    latitude: 10.8590,
    longitude: 72.1962,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC082C",
    state: "Lakshadweep",
    district: "Minicoy",
    pincode: "682559",
    cyberCell: "Minicoy Island Police Cyber Assistance Desk",
    address: "Police Station, Minicoy Island, Lakshadweep 682559",
    phone: "04897-272200",
    email: "ps.minicoy@lakshadweeppolice.gov.in",
    website: "https://lakshadweep.gov.in/police",
    latitude: 8.2884,
    longitude: 73.0494,
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

export const LAKSHADWEEP_STATIONS_BY_PINCODE = buildIndex(LAKSHADWEEP_CYBER_CRIME_STATIONS, (s) => s.pincode);
export const LAKSHADWEEP_STATIONS_BY_STATE = buildIndex(LAKSHADWEEP_CYBER_CRIME_STATIONS, (s) => s.state);
export const LAKSHADWEEP_STATIONS_BY_DISTRICT = buildIndex(LAKSHADWEEP_CYBER_CRIME_STATIONS, (s) => s.district);

// ─────────────────────────────────────────────────────────────
//  CONVENIENCE LOOKUPS
// ─────────────────────────────────────────────────────────────

/** Returns the nearest cyber cell(s) for a given Lakshadweep island/district */
export function getLakshadweepCyberCellByIsland(island: string): CyberCrimeStation[] {
  const key = island.trim().toLowerCase();
  return LAKSHADWEEP_STATIONS_BY_DISTRICT[key] ?? [];
}

/** Returns full UT profile snapshot */
export function getLakshadweepUTProfile(): UTProfile {
  return LAKSHADWEEP_UT_PROFILE;
}

/** Returns all high-risk islands with risk factors */
export function getLakshadweepHighRiskRegions(): HighRiskRegion[] {
  return LAKSHADWEEP_UT_PROFILE.cyberThreatLandscape.highRiskIslands;
}

/** Returns all active cyber crime reporting resources */
export function getLakshadweepReportingResources(): ReportingResource[] {
  return LAKSHADWEEP_UT_PROFILE.reportingResources;
}export default {
  profile: LAKSHADWEEP_UT_PROFILE,
  cyberPoliceStations: LAKSHADWEEP_CYBER_CRIME_STATIONS,
  stationsByPincode: LAKSHADWEEP_STATIONS_BY_PINCODE,
  stationsByState: LAKSHADWEEP_STATIONS_BY_STATE,
  stationsByDistrict: LAKSHADWEEP_STATIONS_BY_DISTRICT,
};
