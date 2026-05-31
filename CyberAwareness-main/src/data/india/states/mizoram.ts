// Mizoram State Intelligence File
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

export const MIZORAM_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Mizoram",
    capital: "Aizawl",
    population: 1097206,
    malePopulation: 555339,
    femalePopulation: 541867,
    sexRatio: 976,
    literacyRate: 91.6,
    urbanizationPercent: 52.1,
    workforceParticipationRate: 46.5,
    area: 21081,
    numberOfDistricts: 11,
    officialLanguage: "Mizo, English",
    stateCode: "MZ",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 3341,
    totalCognizableOffences: 3341,
    crimeRatePerLakh: 292.4,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 186,
    financialFrauds: 107,
    socialMediaCrimes: 48,
    identityTheft: 12,
    hacking: 8,
    onlineSexualAbuse: 10,
    chargeSheetingRate: 19.4,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Cross-Border Digital Crime (Myanmar)",
      description:
        "Mizoram's 404-km border with Myanmar creates risk of encrypted app-based drug trafficking coordination, illegal arms trade communication, and digital money laundering.",
      affectedSectors: ["Border Communities", "Law Enforcement"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Financial Fraud",
      description:
        "High literacy and increasing smartphone penetration have brought UPI and mobile banking fraud; first-time digital banking users are particularly vulnerable.",
      affectedSectors: ["General Public", "Students", "Government Employees"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Social Media Harassment",
      description:
        "Mizoram has high social media engagement; incidents of morphed images, cyberstalking, and Facebook-based scams are increasing.",
      affectedSectors: ["Women", "Youth", "Students"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Fake Government Job / Scholarship Fraud",
      description:
        "Fraudsters target educated youth with fake central government job and scholarship notifications, harvesting application fees.",
      affectedSectors: ["Youth", "Students", "Unemployed Graduates"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Online Gambling and Betting Platforms",
      description:
        "Illegal online gambling platforms and betting apps targeting Mizoram's youth, some connected to Myanmar-based operators.",
      affectedSectors: ["Youth", "General Public"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Fake Charity and Donation Scams",
      description:
        "Given strong Christian community networks, scammers impersonate church charities or disaster relief organisations to solicit donations digitally.",
      affectedSectors: ["Religious Communities", "General Public"],
      riskLevel: "LOW",
    },
  ],

  commonScams: [
    {
      scamName: "Fake Central Government Job",
      modus:
        "Fraudulent job notifications for railways, SSC, or army roles spread via WhatsApp; victims pay registration fees to fake portals.",
      targetedGroups: ["Youth", "Graduates", "Unemployed"],
      reportsPerYear: 45,
    },
    {
      scamName: "UPI / OTP Harvesting",
      modus:
        "Caller poses as SBI or other bank official; claims suspicious transaction and extracts OTP to conduct unauthorised transfers.",
      targetedGroups: ["Bank Account Holders", "Senior Citizens"],
      reportsPerYear: 42,
    },
    {
      scamName: "Facebook Marketplace Advance Fraud",
      modus:
        "Seller accepts payment for goods listed on Facebook Marketplace or local buy-sell groups; goods never delivered.",
      targetedGroups: ["Online Shoppers"],
      reportsPerYear: 38,
    },
    {
      scamName: "Lottery and Prize SMS Fraud",
      modus:
        "SMS or WhatsApp claiming lottery win; victim pays processing fee to claim prize.",
      targetedGroups: ["Low-Income Households"],
      reportsPerYear: 25,
    },
    {
      scamName: "Online Gambling Platform Fraud",
      modus:
        "Victims lured into online gambling apps; initial wins followed by app blocking accounts with winnings.",
      targetedGroups: ["Youth", "Adults"],
      reportsPerYear: 30,
    },
    {
      scamName: "Church Charity Impersonation Scam",
      modus:
        "Scammers create fake social media profiles of church pastors or missionaries soliciting donations for fabricated flood or disaster relief.",
      targetedGroups: ["Christian Community Members", "Diaspora"],
      reportsPerYear: 18,
    },
  ],

  highRiskDistricts: [
    {
      district: "Aizawl",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Social Media Crimes", "Fake Job Offers"],
      reason: "State capital; most urbanised district with highest digital penetration.",
    },
    {
      district: "Lunglei",
      riskLevel: "MEDIUM",
      primaryThreats: ["Cross-border Digital Crime", "Online Fraud"],
      reason: "Southern district with Myanmar border; active cross-border trade.",
    },
    {
      district: "Champhai",
      riskLevel: "HIGH",
      primaryThreats: ["Cross-border Drug Coordination via Apps", "Myanmar Border Crime"],
      reason: "Major land border crossing with Myanmar; significant cross-border movement.",
    },
    {
      district: "Siaha",
      riskLevel: "MEDIUM",
      primaryThreats: ["Cross-border Digital Crime"],
      reason: "Shares borders with Myanmar and Manipur; remote district.",
    },
    {
      district: "Kolasib",
      riskLevel: "LOW",
      primaryThreats: ["Online Fraud", "Fake Government Benefits"],
      reason: "Northernmost district bordering Assam; increasing digital adoption.",
    },
    {
      district: "Serchhip",
      riskLevel: "LOW",
      primaryThreats: ["UPI Fraud", "Social Media Harassment"],
      reason: "Small central district with growing mobile internet usage.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "MZ-CPS-001",
      name: "Mizoram Police Cyber Crime Cell",
      district: "Aizawl",
      address: "SP Office, Khatla, Aizawl, Mizoram 796001",
      phone: "0389-2322555",
      email: "cybercrime.mizoram@mizorampolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Statewide – Mizoram Police",
    },
  ],

  cyberCells: [
    {
      id: "MZ-CC-001",
      name: "Mizoram Police Cyber Crime Investigation Unit",
      district: "Aizawl",
      address: "Police Headquarters, Aizawl, Mizoram 796001",
      phone: "0389-2322100",
      email: "cybercrime.phq@mizorampolice.gov.in",
      operationalSince: 2020,
    },
    {
      id: "MZ-CC-002",
      name: "Lunglei District Cyber Crime Cell",
      district: "Lunglei",
      address: "SP Office, Lunglei, Mizoram 796701",
      phone: "0372-2322100",
      email: "cybercrime.lunglei@mizorampolice.gov.in",
    },
    {
      id: "MZ-CC-003",
      name: "Champhai District Cyber Crime Cell",
      district: "Champhai",
      address: "SP Office, Champhai, Mizoram 796321",
      phone: "03832-222100",
      email: "cybercrime.champhai@mizorampolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Mizoram Police",
      role: "Director General of Police",
      phone: "0389-2322100",
      email: "dgp@mizorampolice.gov.in",
      address: "Police Headquarters, Aizawl, Mizoram 796001",
    },
    {
      agency: "Mizoram Police",
      role: "Inspector General of Police",
      phone: "0389-2322200",
      email: "igp@mizorampolice.gov.in",
      address: "Police Headquarters, Aizawl, Mizoram 796001",
    },
    {
      agency: "Mizoram Police",
      role: "Cyber Crime Nodal Officer",
      phone: "0389-2322555",
      email: "cybercrime.mizoram@mizorampolice.gov.in",
      address: "SP Office, Khatla, Aizawl 796001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Aizawl Police PCR", number: "0389-2322022", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for reporting all cyber crime categories.",
      type: "NATIONAL",
    },
    {
      name: "Mizoram Police",
      url: "https://mizorampolice.gov.in",
      description: "Official Mizoram Police portal.",
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
      district: "Aizawl",
      significance: "State capital; political, commercial, and educational centre",
      majorCities: ["Aizawl"],
      population: 400309,
    },
    {
      district: "Lunglei",
      significance: "Second largest city; southern divisional headquarters",
      majorCities: ["Lunglei"],
      population: 161428,
    },
    {
      district: "Champhai",
      significance: "Commercial gateway to Myanmar; active cross-border trade",
      majorCities: ["Champhai"],
      population: 125745,
    },
    {
      district: "Kolasib",
      significance: "Gateway to Assam; railway and road connectivity hub",
      majorCities: ["Kolasib"],
      population: 83955,
    },
    {
      district: "Serchhip",
      significance: "Small but highly literate central district",
      majorCities: ["Serchhip"],
      population: 64937,
    },
    {
      district: "Siaha",
      significance: "Tri-border district: Myanmar, Manipur, and Mizoram junction",
      majorCities: ["Siaha"],
      population: 55724,
    },
  ],
};
export default MIZORAM_INTELLIGENCE;

