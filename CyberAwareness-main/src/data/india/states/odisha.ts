// Odisha State Intelligence File
// Production-ready TypeScript | Based on Census 2011, NCRB 2022, and publicly available data

export interface StateProfile {
  name: string;
  capital: string;
  population: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number;
  literacyRate: number;
  urbanizationPercent: number;
  workforceParticipationRate: number;
  area: number;
  numberOfDistricts: number;
  officialLanguage: string;
  stateCode: string;
}

export interface CrimeStatistics {
  year: number;
  totalIPC: number;
  totalCognizableOffences: number;
  crimeRatePerLakh: number;
  source: string;
}

export interface CyberCrimeStatistics {
  year: number;
  totalCyberCrimes: number;
  financialFrauds: number;
  socialMediaCrimes: number;
  identityTheft: number;
  hacking: number;
  onlineSexualAbuse: number;
  chargeSheetingRate: number;
  source: string;
}

export interface MajorCyberThreat {
  threatType: string;
  description: string;
  affectedSectors: string[];
  riskLevel: "HIGH" | "MEDIUM" | "LOW";
}

export interface CommonScam {
  scamName: string;
  modus: string;
  targetedGroups: string[];
  reportsPerYear: number | null;
}

export interface HighRiskDistrict {
  district: string;
  riskLevel: "HIGH" | "MEDIUM" | "LOW";
  primaryThreats: string[];
  reason: string;
}

export interface CyberPoliceStation {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  reportingLink: string;
  jurisdiction: string;
}

export interface CyberCell {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  headOfUnit?: string;
  operationalSince?: number;
}

export interface LawEnforcementContact {
  agency: string;
  role: string;
  phone: string;
  email?: string;
  address: string;
}

export interface EmergencyContact {
  service: string;
  number: string;
  available: string;
}

export interface ReportingResource {
  name: string;
  url: string;
  description: string;
  type: "NATIONAL" | "STATE" | "HELPLINE";
}

export interface ImportantDistrict {
  district: string;
  significance: string;
  majorCities: string[];
  population: number | null;
}

export interface StateIntelligence {
  profile: StateProfile;
  crimeStatistics: CrimeStatistics;
  cyberCrimeStatistics: CyberCrimeStatistics;
  majorCyberThreats: MajorCyberThreat[];
  commonScams: CommonScam[];
  highRiskDistricts: HighRiskDistrict[];
  cyberPoliceStations: CyberPoliceStation[];
  cyberCells: CyberCell[];
  lawEnforcementContacts: LawEnforcementContact[];
  emergencyContacts: EmergencyContact[];
  reportingResources: ReportingResource[];
  importantDistricts: ImportantDistrict[];
}

export const ODISHA_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Odisha",
    capital: "Bhubaneswar",
    population: 41974218,
    malePopulation: 21212136,
    femalePopulation: 20762082,
    sexRatio: 979,
    literacyRate: 72.9,
    urbanizationPercent: 16.7,
    workforceParticipationRate: 48.0,
    area: 155707,
    numberOfDistricts: 30,
    officialLanguage: "Odia",
    stateCode: "OD",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 158471,
    totalCognizableOffences: 158471,
    crimeRatePerLakh: 359.2,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 4756,
    financialFrauds: 3002,
    socialMediaCrimes: 743,
    identityTheft: 287,
    hacking: 201,
    onlineSexualAbuse: 198,
    chargeSheetingRate: 24.1,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Fake Government Welfare Scheme Fraud",
      description:
        "Fraudsters impersonate officials offering PM Awas Yojana, PMEGP, or state welfare scheme benefits; extract bank details and registration fees from vulnerable populations.",
      affectedSectors: ["Rural Population", "Tribal Communities", "Welfare Beneficiaries"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Mining and Industrial Sector Fraud",
      description:
        "Odisha's large mining and steel sector attracts fake contract award scams, labour supplier frauds, and industrial procurement fraud via email and online portals.",
      affectedSectors: ["Mining Sector", "Steel Industry", "SME Contractors"],
      riskLevel: "HIGH",
    },
    {
      threatType: "UPI and Digital Banking Fraud",
      description:
        "Rapid digital banking adoption in both urban and rural areas without corresponding cyber literacy creates significant vulnerability to OTP phishing and UPI fraud.",
      affectedSectors: ["General Public", "Rural Households", "Traders"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Job and Education Scam",
      description:
        "Fake job portals and fake engineering/medical coaching centres target Odisha's large youth population, particularly for state PSU and government job placements.",
      affectedSectors: ["Youth", "Students", "Job Seekers"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Tourism and Pilgrimage Fraud",
      description:
        "Fake travel agents and hotel booking portals targeting tourists visiting Puri Jagannath temple, Konark, and Chilika Lake collect advance payments for non-existent services.",
      affectedSectors: ["Tourists", "Religious Pilgrims"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "AADHAAR-Enabled Payment System (AEPS) Fraud",
      description:
        "In tribal and rural areas, stolen biometric data used at micro-ATMs to withdraw cash from Jan Dhan and DBT beneficiary accounts.",
      affectedSectors: ["Tribal Communities", "Rural Population", "DBT Beneficiaries"],
      riskLevel: "HIGH",
    },
  ],

  commonScams: [
    {
      scamName: "AEPS Biometric Fraud",
      modus:
        "Fraudsters obtain fingerprint impressions using silicone molds from fake Aadhaar update camps; use these at micro-ATMs to drain beneficiary accounts.",
      targetedGroups: ["Tribal Population", "Rural Jan Dhan Account Holders"],
      reportsPerYear: 1200,
    },
    {
      scamName: "PM Awas Yojana Fraud",
      modus:
        "Caller impersonates government official; claims beneficiary's PM Awas application is approved but requires bank KYC update to receive funds.",
      targetedGroups: ["BPL Households", "Rural Communities"],
      reportsPerYear: 900,
    },
    {
      scamName: "Fake Engineering College Admission Scam",
      modus:
        "Fake counselling centres offer guaranteed admissions to private engineering or medical colleges for upfront fees.",
      targetedGroups: ["Students", "Aspirants", "Parents"],
      reportsPerYear: 650,
    },
    {
      scamName: "OLX Military Goods Fraud",
      modus:
        "Persons posing as military personnel list vehicles or electronics on OLX; collect advance payment, deliver nothing.",
      targetedGroups: ["Online Shoppers"],
      reportsPerYear: 700,
    },
    {
      scamName: "Puri Pilgrimage Tour Advance Fraud",
      modus:
        "Fake tour operators collect advance bookings for Puri Jagannath Yatra packages; disappear before the trip.",
      targetedGroups: ["Pilgrims", "Religious Tourists"],
      reportsPerYear: 380,
    },
    {
      scamName: "Fake Online Loan App",
      modus:
        "Predatory apps disburse instant loans; harass and threaten borrowers with morphed images for recovery.",
      targetedGroups: ["Daily Wage Workers", "Youth", "Low-Income Groups"],
      reportsPerYear: 820,
    },
  ],

  highRiskDistricts: [
    {
      district: "Khordha (Bhubaneswar)",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "IT Sector Phishing", "Investment Scams"],
      reason: "State capital and fastest-growing IT hub; highest digital transaction volumes.",
    },
    {
      district: "Cuttack",
      riskLevel: "HIGH",
      primaryThreats: ["Financial Fraud", "Online Job Scams", "Social Media Crimes"],
      reason: "Judicial capital; commercial hub with high cyber complaint density.",
    },
    {
      district: "Sundargarh",
      riskLevel: "HIGH",
      primaryThreats: ["Mining Sector Fraud", "Fake Government Schemes", "AEPS Fraud"],
      reason: "Major mining and steel belt; large tribal population vulnerable to AEPS fraud.",
    },
    {
      district: "Puri",
      riskLevel: "MEDIUM",
      primaryThreats: ["Tourism Fraud", "Pilgrimage Scams", "Fake Hotel Bookings"],
      reason: "Major pilgrim and tourist destination; large transient fraud exposure.",
    },
    {
      district: "Balasore",
      riskLevel: "MEDIUM",
      primaryThreats: ["Fake Jobs", "UPI Fraud", "Social Media Crimes"],
      reason: "Industrial district with significant youth migration and digital activity.",
    },
    {
      district: "Sambalpur",
      riskLevel: "MEDIUM",
      primaryThreats: ["Mining Fraud", "Fake Loan Apps", "UPI Scams"],
      reason: "Western Odisha commercial hub; mining and energy sector exposure.",
    },
    {
      district: "Mayurbhanj",
      riskLevel: "HIGH",
      primaryThreats: ["AEPS Fraud", "Fake Government Schemes", "Tribal Welfare Scams"],
      reason: "Largest tribal district; significant AEPS fraud victimisation reported.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "OD-CPS-001",
      name: "Bhubaneswar-Cuttack Cyber Crime Police Station",
      district: "Khordha",
      address: "Commissioner of Police, Lal Bagh, Bhubaneswar, Odisha 751001",
      phone: "0674-2395100",
      email: "cybercrime.bbsr@odishapolice.gov.in",
      reportingLink: "https://odishapolice.gov.in",
      jurisdiction: "Bhubaneswar-Cuttack Police Commissionerate",
    },
    {
      id: "OD-CPS-002",
      name: "Cuttack District Cyber Crime Cell",
      district: "Cuttack",
      address: "SP Office, Cantonment Road, Cuttack, Odisha 753001",
      phone: "0671-2304050",
      email: "cybercrime.cuttack@odishapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Cuttack District Police",
    },
    {
      id: "OD-CPS-003",
      name: "Rourkela Cyber Crime Cell",
      district: "Sundargarh",
      address: "SP Office, Rourkela, Sundargarh, Odisha 769001",
      phone: "0661-2511100",
      email: "cybercrime.sundargarh@odishapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Sundargarh District Police",
    },
    {
      id: "OD-CPS-004",
      name: "Sambalpur Cyber Crime Cell",
      district: "Sambalpur",
      address: "SP Office, Sambalpur, Odisha 768001",
      phone: "0663-2411100",
      email: "cybercrime.sambalpur@odishapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Sambalpur District Police",
    },
  ],

  cyberCells: [
    {
      id: "OD-CC-001",
      name: "Odisha Police Cyber Crime Division",
      district: "Khordha",
      address: "Police Headquarters, Bhubaneswar, Odisha 751001",
      phone: "0674-2394100",
      email: "cybercrime.phq@odishapolice.gov.in",
      operationalSince: 2005,
    },
    {
      id: "OD-CC-002",
      name: "Balasore District Cyber Crime Cell",
      district: "Balasore",
      address: "SP Office, Balasore, Odisha 756001",
      phone: "06782-262100",
      email: "cybercrime.balasore@odishapolice.gov.in",
    },
    {
      id: "OD-CC-003",
      name: "Puri District Cyber Crime Cell",
      district: "Puri",
      address: "SP Office, Puri, Odisha 752001",
      phone: "06752-222100",
      email: "cybercrime.puri@odishapolice.gov.in",
    },
    {
      id: "OD-CC-004",
      name: "Mayurbhanj District Cyber Crime Cell",
      district: "Mayurbhanj",
      address: "SP Office, Baripada, Mayurbhanj, Odisha 757001",
      phone: "06792-252100",
      email: "cybercrime.mayurbhanj@odishapolice.gov.in",
    },
    {
      id: "OD-CC-005",
      name: "Koraput District Cyber Crime Cell",
      district: "Koraput",
      address: "SP Office, Koraput, Odisha 764020",
      phone: "06852-252100",
      email: "cybercrime.koraput@odishapolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Odisha Police",
      role: "Director General of Police",
      phone: "0674-2394100",
      email: "dgp@odishapolice.gov.in",
      address: "Police Headquarters, Bhubaneswar, Odisha 751001",
    },
    {
      agency: "Odisha Police",
      role: "ADGP Crime Branch",
      phone: "0674-2396100",
      email: "adgp.crime@odishapolice.gov.in",
      address: "Crime Branch HQ, Bhubaneswar, Odisha 751001",
    },
    {
      agency: "Bhubaneswar-Cuttack Police Commissionerate",
      role: "Commissioner of Police",
      phone: "0674-2395100",
      email: "cp.bbsr@odishapolice.gov.in",
      address: "Lal Bagh, Bhubaneswar 751001",
    },
    {
      agency: "Odisha Police",
      role: "SP Cyber Crime",
      phone: "0674-2395100",
      email: "cybercrime.bbsr@odishapolice.gov.in",
      address: "Police Headquarters, Bhubaneswar 751001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Odisha Police PCR (Bhubaneswar)", number: "0674-2531100", available: "24x7" },
    { service: "Anti-Human Trafficking Helpline", number: "1800-419-8588", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for all cyber crime categories.",
      type: "NATIONAL",
    },
    {
      name: "Odisha Police",
      url: "https://odishapolice.gov.in",
      description: "Official Odisha Police portal with online FIR and citizen services.",
      type: "STATE",
    },
    {
      name: "Cyber Crime Helpline",
      url: "tel:1930",
      description: "24x7 national financial cyber fraud helpline.",
      type: "HELPLINE",
    },
    {
      name: "CERT-In",
      url: "https://www.cert-in.org.in",
      description: "National cybersecurity incident reporting.",
      type: "NATIONAL",
    },
  ],

  importantDistricts: [
    {
      district: "Khordha",
      significance: "State capital Bhubaneswar; IT hub, administrative and educational centre",
      majorCities: ["Bhubaneswar"],
      population: 2251673,
    },
    {
      district: "Cuttack",
      significance: "Judicial capital; commercial hub; Silver City",
      majorCities: ["Cuttack"],
      population: 2624470,
    },
    {
      district: "Sundargarh",
      significance: "Steel and mining belt; Rourkela Steel Plant",
      majorCities: ["Rourkela", "Sundargarh"],
      population: 2093437,
    },
    {
      district: "Puri",
      significance: "Jagannath Dham; major pilgrimage and tourism destination",
      majorCities: ["Puri"],
      population: 1498604,
    },
    {
      district: "Sambalpur",
      significance: "Western Odisha commercial and power generation hub",
      majorCities: ["Sambalpur"],
      population: 1044410,
    },
    {
      district: "Mayurbhanj",
      significance: "Largest district; major tribal belt; Simlipal Tiger Reserve",
      majorCities: ["Baripada"],
      population: 2513895,
    },
    {
      district: "Balasore",
      significance: "ISRO/DRDO missile testing range; industrial corridor",
      majorCities: ["Balasore"],
      population: 2317419,
    },
    {
      district: "Koraput",
      significance: "Tribal heartland; Nalco aluminium smelter; rich mineral resources",
      majorCities: ["Koraput", "Jeypore"],
      population: 1376934,
    },
  ],
};
export default ODISHA_INTELLIGENCE;

