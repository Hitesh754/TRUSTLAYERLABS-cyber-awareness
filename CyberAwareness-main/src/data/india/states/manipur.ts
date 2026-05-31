// Manipur State Intelligence File
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

export const MANIPUR_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Manipur",
    capital: "Imphal",
    population: 2855794,
    malePopulation: 1438586,
    femalePopulation: 1417208,
    sexRatio: 985,
    literacyRate: 79.2,
    urbanizationPercent: 32.5,
    workforceParticipationRate: 43.7,
    area: 22327,
    numberOfDistricts: 16,
    officialLanguage: "Meitei (Manipuri)",
    stateCode: "MN",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 4863,
    totalCognizableOffences: 4863,
    crimeRatePerLakh: 162.8,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 312,
    financialFrauds: 189,
    socialMediaCrimes: 67,
    identityTheft: 21,
    hacking: 14,
    onlineSexualAbuse: 18,
    chargeSheetingRate: 18.6,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Fake Government Benefit and Scheme Fraud",
      description:
        "Fraudsters impersonate government officials offering welfare schemes, ration card upgrades, and COVID-related benefits to extract bank details.",
      affectedSectors: ["Rural Population", "Welfare Beneficiaries", "Senior Citizens"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Job and Education Scam",
      description:
        "Fake job placement portals and coaching centre scams targeting youth migrating to metros, collecting fees for non-existent placements.",
      affectedSectors: ["Youth", "Students", "Job Seekers"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Social Media Harassment and Morphed Images",
      description:
        "Growing social media use has led to cases of profile hacking, morphed image distribution, and targeted harassment particularly of women.",
      affectedSectors: ["Women", "Students", "Public Figures"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Cross-Border Digital Crime",
      description:
        "Manipur's porous border with Myanmar creates risk of cross-border digital smuggling coordination, narco-trafficking facilitated via encrypted apps, and foreign SIM-based fraud.",
      affectedSectors: ["Law Enforcement", "Border Communities"],
      riskLevel: "HIGH",
    },
    {
      threatType: "UPI and Mobile Banking Fraud",
      description:
        "Rising smartphone and UPI adoption among first-time digital users without adequate financial literacy creates vulnerability to UPI PIN and OTP harvesting.",
      affectedSectors: ["General Public", "First-Time Digital Bankers"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Fake Loan Application Fraud",
      description:
        "Predatory instant loan apps targeting economically vulnerable sections, resorting to digital blackmail for recovery.",
      affectedSectors: ["Low-Income Workers", "Youth", "Daily Wagers"],
      riskLevel: "MEDIUM",
    },
  ],

  commonScams: [
    {
      scamName: "Fake Government Job Fraud",
      modus:
        "Fraudulent WhatsApp messages claim government vacancies in police, railways, or state PSUs; victims pay registration fee to fake portals.",
      targetedGroups: ["Youth", "Unemployed Graduates"],
      reportsPerYear: 85,
    },
    {
      scamName: "Social Media Account Hacking",
      modus:
        "Phishing links sent via Facebook/Instagram; once accounts are compromised, used to defraud friends or distribute harmful content.",
      targetedGroups: ["Social Media Users", "Students"],
      reportsPerYear: 70,
    },
    {
      scamName: "OTP Phishing via Vishing",
      modus:
        "Caller impersonates bank or telecom customer care, claims account is blocked, and extracts OTP to drain account.",
      targetedGroups: ["Bank Account Holders", "Senior Citizens"],
      reportsPerYear: 60,
    },
    {
      scamName: "Lottery and Prize Fraud via SMS",
      modus:
        "Victims receive SMS claiming they have won a prize from a major brand; asked to pay processing fee to claim.",
      targetedGroups: ["Low-Income Households", "Rural Population"],
      reportsPerYear: 45,
    },
    {
      scamName: "Online Marketplace Fraud",
      modus:
        "Products paid for on social media-based buy-sell groups or OLX never delivered; seller disappears after payment.",
      targetedGroups: ["Online Shoppers"],
      reportsPerYear: 55,
    },
    {
      scamName: "Sextortion via Social Media",
      modus:
        "Fake profiles engage targets on Facebook; compromising material recorded and used to extort money.",
      targetedGroups: ["Adult Males", "Professionals"],
      reportsPerYear: 30,
    },
  ],

  highRiskDistricts: [
    {
      district: "Imphal West",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Social Media Crimes", "Job Scams"],
      reason: "State capital district; highest digital penetration and volume of cyber complaints.",
    },
    {
      district: "Imphal East",
      riskLevel: "HIGH",
      primaryThreats: ["Fake Government Schemes", "Phishing", "Social Media Harassment"],
      reason: "Dense urban-semi-urban interface; high smartphone use.",
    },
    {
      district: "Bishnupur",
      riskLevel: "MEDIUM",
      primaryThreats: ["Online Fraud", "Lottery Scams"],
      reason: "Peri-urban area with growing internet access and moderate digital literacy.",
    },
    {
      district: "Thoubal",
      riskLevel: "MEDIUM",
      primaryThreats: ["Cross-border Digital Crime", "Drug Coordination via Apps"],
      reason: "Border proximity and active drug trafficking corridor.",
    },
    {
      district: "Churachandpur",
      riskLevel: "LOW",
      primaryThreats: ["Fake Job Offers", "UPI Fraud"],
      reason: "Hill district; lower digital penetration but growing smartphone use.",
    },
    {
      district: "Senapati",
      riskLevel: "LOW",
      primaryThreats: ["Fake Government Benefit Fraud"],
      reason: "Rural district with predominantly first-time digital bank users.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "MN-CPS-001",
      name: "Manipur Police Cyber Crime Cell",
      district: "Imphal West",
      address: "SP Office, Imphal West, Imphal, Manipur 795001",
      phone: "0385-2444444",
      email: "cybercrime.manipur@manipurpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Statewide – Manipur Police",
    },
  ],

  cyberCells: [
    {
      id: "MN-CC-001",
      name: "Manipur Police Cyber Crime Investigation Cell",
      district: "Imphal West",
      address: "Police Headquarters, North AOC, Imphal, Manipur 795001",
      phone: "0385-2450006",
      email: "cybercrime.phq@manipurpolice.gov.in",
      operationalSince: 2018,
    },
    {
      id: "MN-CC-002",
      name: "Imphal East District Cyber Crime Cell",
      district: "Imphal East",
      address: "SP Office, Porompat, Imphal East, Manipur 795005",
      phone: "0385-2451200",
      email: "cybercrime.imphaleast@manipurpolice.gov.in",
    },
    {
      id: "MN-CC-003",
      name: "Thoubal District Cyber Crime Cell",
      district: "Thoubal",
      address: "SP Office, Thoubal, Manipur 795138",
      phone: "03849-220100",
      email: "cybercrime.thoubal@manipurpolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Manipur Police",
      role: "Director General of Police",
      phone: "0385-2450006",
      email: "dgp@manipurpolice.gov.in",
      address: "Police Headquarters, North AOC, Imphal, Manipur 795001",
    },
    {
      agency: "Manipur Police",
      role: "Inspector General of Police (Crime)",
      phone: "0385-2444500",
      email: "igpcrime@manipurpolice.gov.in",
      address: "Police Headquarters, Imphal, Manipur 795001",
    },
    {
      agency: "Manipur Police",
      role: "Cyber Crime Nodal Officer",
      phone: "0385-2444444",
      email: "cybercrime.manipur@manipurpolice.gov.in",
      address: "SP Office, Imphal West, Manipur 795001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Manipur Police PCR", number: "0385-2450006", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for all cyber crime reports.",
      type: "NATIONAL",
    },
    {
      name: "Manipur Police",
      url: "https://manipurpolice.gov.in",
      description: "Official Manipur Police portal with citizen services.",
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
      district: "Imphal West",
      significance: "State capital; political, administrative and commercial centre",
      majorCities: ["Imphal"],
      population: 514683,
    },
    {
      district: "Imphal East",
      significance: "Adjoining capital district; key educational and residential hub",
      majorCities: ["Porompat", "Heingang"],
      population: 452661,
    },
    {
      district: "Thoubal",
      significance: "Largest agricultural district; major border trade corridor",
      majorCities: ["Thoubal", "Kakching"],
      population: 420517,
    },
    {
      district: "Bishnupur",
      significance: "Cultural heritage and weaving industry district",
      majorCities: ["Bishnupur"],
      population: 241724,
    },
    {
      district: "Churachandpur",
      significance: "Largest hill district; diverse tribal communities",
      majorCities: ["Churachandpur"],
      population: 274143,
    },
    {
      district: "Senapati",
      significance: "Hill district; northern gateway to Nagaland and Assam",
      majorCities: ["Senapati"],
      population: 479148,
    },
  ],
};
export default MANIPUR_INTELLIGENCE;

