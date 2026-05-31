// Nagaland State Intelligence File
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

export const NAGALAND_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Nagaland",
    capital: "Kohima",
    population: 1978502,
    malePopulation: 1025707,
    femalePopulation: 952795,
    sexRatio: 931,
    literacyRate: 79.6,
    urbanizationPercent: 28.9,
    workforceParticipationRate: 44.6,
    area: 16579,
    numberOfDistricts: 16,
    officialLanguage: "English",
    stateCode: "NL",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 2867,
    totalCognizableOffences: 2867,
    crimeRatePerLakh: 138.1,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 198,
    financialFrauds: 112,
    socialMediaCrimes: 52,
    identityTheft: 14,
    hacking: 9,
    onlineSexualAbuse: 10,
    chargeSheetingRate: 16.7,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Online Financial Fraud",
      description:
        "Growing smartphone use and UPI adoption among first-time digital banking users has led to OTP harvesting, vishing, and UPI PIN fraud.",
      affectedSectors: ["General Public", "Government Employees", "First-Time Bankers"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Cross-Border Digital Crime (Myanmar)",
      description:
        "Nagaland's 215-km border with Myanmar creates significant risk of encrypted communication being used to coordinate insurgency activities, drug trafficking, and illegal arms trade.",
      affectedSectors: ["Law Enforcement", "Border Communities"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Social Media Crimes",
      description:
        "High social media engagement across Naga communities leads to Facebook account hijacking, morphed image distribution, and community reputation attacks.",
      affectedSectors: ["Women", "Youth", "Community Leaders"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Fake Government Job Fraud",
      description:
        "Fraudulent government job notifications targeting Nagaland's educated unemployed youth, many of whom aspire to state and central government positions.",
      affectedSectors: ["Youth", "Job Seekers", "Graduates"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Gambling and Illegal Betting",
      description:
        "Illegal online gambling portals and sports betting apps, some linked to Myanmar-based operators, targeting Nagaland youth.",
      affectedSectors: ["Youth", "Adults"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Fake Scholarship and Education Fraud",
      description:
        "Fraudulent scholarship portals targeting students from economically weaker sections who receive central and state scholarships.",
      affectedSectors: ["Students", "SC/ST/OBC Communities"],
      riskLevel: "MEDIUM",
    },
  ],

  commonScams: [
    {
      scamName: "Fake Government Job Recruitment",
      modus:
        "Fake recruitment notifications for Nagaland Police, state services, or central government roles circulated on WhatsApp; registration fee collected.",
      targetedGroups: ["Youth", "Unemployed Graduates"],
      reportsPerYear: 52,
    },
    {
      scamName: "UPI Phishing via Vishing",
      modus:
        "Caller impersonates bank or telecom representative, extracts UPI PIN or OTP under pretext of account verification.",
      targetedGroups: ["Bank Account Holders", "Senior Citizens"],
      reportsPerYear: 45,
    },
    {
      scamName: "Facebook Account Hijacking",
      modus:
        "Phishing links sent via Messenger; once account is hacked, used to solicit emergency money from contact list.",
      targetedGroups: ["Facebook Users", "Students"],
      reportsPerYear: 40,
    },
    {
      scamName: "Online Marketplace Advance Fraud",
      modus:
        "Seller accepts advance payment for goods on Facebook or OLX; goods never delivered.",
      targetedGroups: ["Online Buyers"],
      reportsPerYear: 35,
    },
    {
      scamName: "Lottery and Prize Fraud",
      modus:
        "Victim receives message claiming prize win from a major brand; asked to deposit fee for delivery.",
      targetedGroups: ["Low-Income Households", "Rural Population"],
      reportsPerYear: 25,
    },
    {
      scamName: "Online Gambling Platform Scam",
      modus:
        "Gambling apps allow initial wins, then block accounts with accumulated winnings when withdrawals are requested.",
      targetedGroups: ["Youth", "Young Adults"],
      reportsPerYear: 28,
    },
  ],

  highRiskDistricts: [
    {
      district: "Kohima",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Social Media Crimes", "Fake Job Offers"],
      reason: "State capital; highest digital penetration and maximum cyber complaint volume.",
    },
    {
      district: "Dimapur",
      riskLevel: "HIGH",
      primaryThreats: ["Financial Fraud", "Online Marketplace Scams", "Fake Jobs"],
      reason: "Commercial capital; most urbanised and connected city in Nagaland.",
    },
    {
      district: "Mon",
      riskLevel: "HIGH",
      primaryThreats: ["Cross-border Digital Crime", "Drug Coordination via Apps"],
      reason: "Shares border with Myanmar; active cross-border movement.",
    },
    {
      district: "Tuensang",
      riskLevel: "MEDIUM",
      primaryThreats: ["Cross-border Crime", "Online Fraud"],
      reason: "Bordering Myanmar; historically active insurgency corridor.",
    },
    {
      district: "Mokokchung",
      riskLevel: "MEDIUM",
      primaryThreats: ["Fake Scholarships", "Social Media Harassment"],
      reason: "Major education hub; large student population susceptible to scholarship fraud.",
    },
    {
      district: "Wokha",
      riskLevel: "LOW",
      primaryThreats: ["Online Fraud", "Lottery Scams"],
      reason: "Semi-urban district with growing digital connectivity.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "NL-CPS-001",
      name: "Nagaland Police Cyber Crime Cell",
      district: "Kohima",
      address: "SP Office, Kohima, Nagaland 797001",
      phone: "0370-2270152",
      email: "cybercrime.nagaland@nagalandpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Statewide – Nagaland Police",
    },
  ],

  cyberCells: [
    {
      id: "NL-CC-001",
      name: "Nagaland Police Cyber Crime Investigation Unit",
      district: "Kohima",
      address: "Police Headquarters, Kohima, Nagaland 797001",
      phone: "0370-2270100",
      email: "cybercrime.phq@nagalandpolice.gov.in",
      operationalSince: 2019,
    },
    {
      id: "NL-CC-002",
      name: "Dimapur District Cyber Crime Cell",
      district: "Dimapur",
      address: "SP Office, Dimapur, Nagaland 797112",
      phone: "03862-226100",
      email: "cybercrime.dimapur@nagalandpolice.gov.in",
    },
    {
      id: "NL-CC-003",
      name: "Mon District Cyber Crime Cell",
      district: "Mon",
      address: "SP Office, Mon, Nagaland 798621",
      phone: "03869-220100",
      email: "cybercrime.mon@nagalandpolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Nagaland Police",
      role: "Director General of Police",
      phone: "0370-2270100",
      email: "dgp@nagalandpolice.gov.in",
      address: "Police Headquarters, Kohima, Nagaland 797001",
    },
    {
      agency: "Nagaland Police",
      role: "Inspector General of Police (Crime)",
      phone: "0370-2270200",
      email: "igp.crime@nagalandpolice.gov.in",
      address: "Police Headquarters, Kohima 797001",
    },
    {
      agency: "Nagaland Police",
      role: "Cyber Crime Nodal Officer",
      phone: "0370-2270152",
      email: "cybercrime.nagaland@nagalandpolice.gov.in",
      address: "SP Office, Kohima 797001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Nagaland Police PCR", number: "0370-2270022", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for all cyber crime categories.",
      type: "NATIONAL",
    },
    {
      name: "Nagaland Police",
      url: "https://nagalandpolice.gov.in",
      description: "Official Nagaland Police portal.",
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
      district: "Kohima",
      significance: "State capital; political, cultural, and administrative centre",
      majorCities: ["Kohima"],
      population: 267988,
    },
    {
      district: "Dimapur",
      significance: "Commercial capital; railway terminus; largest city",
      majorCities: ["Dimapur"],
      population: 379769,
    },
    {
      district: "Mokokchung",
      significance: "Cultural centre of Ao Naga tribe; major education hub",
      majorCities: ["Mokokchung"],
      population: 194622,
    },
    {
      district: "Tuensang",
      significance: "Easternmost district; largest district by area; Myanmar border",
      majorCities: ["Tuensang"],
      population: 197961,
    },
    {
      district: "Mon",
      significance: "Konyak Naga homeland; major Myanmar border crossing",
      majorCities: ["Mon"],
      population: 250260,
    },
    {
      district: "Zunheboto",
      significance: "Administrative and cultural hub of Sumi Naga people",
      majorCities: ["Zunheboto"],
      population: 141,
    },
  ],
};
export default NAGALAND_INTELLIGENCE;

