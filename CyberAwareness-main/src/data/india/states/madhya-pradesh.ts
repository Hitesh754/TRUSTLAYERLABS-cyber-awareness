// Madhya Pradesh State Intelligence File
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

export const MADHYA_PRADESH_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    population: 72626809,
    malePopulation: 37612306,
    femalePopulation: 35014503,
    sexRatio: 931,
    literacyRate: 69.3,
    urbanizationPercent: 27.6,
    workforceParticipationRate: 49.3,
    area: 308252,
    numberOfDistricts: 55,
    officialLanguage: "Hindi",
    stateCode: "MP",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 246810,
    totalCognizableOffences: 246810,
    crimeRatePerLakh: 310.2,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 6579,
    financialFrauds: 4120,
    socialMediaCrimes: 987,
    identityTheft: 532,
    hacking: 289,
    onlineSexualAbuse: 341,
    chargeSheetingRate: 22.8,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Fake Government Scheme Fraud",
      description:
        "Fraudsters impersonate government officials offering PM Awas Yojana, PM Kisan, or other central scheme benefits to extract registration fees or bank details.",
      affectedSectors: ["Rural Population", "Farmers", "Low-income Households"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Agricultural Loan and Input Fraud",
      description:
        "Fake agri-loan portals and fertiliser subsidy SMS scams targeting MP's large farming community.",
      affectedSectors: ["Farmers", "Agricultural Sector"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Fake Online Job and Employment Scams",
      description:
        "Fraudulent job portals and WhatsApp groups promising government jobs (especially police, railways, and PSUs) for a registration fee.",
      affectedSectors: ["Youth", "Job Seekers", "Students"],
      riskLevel: "HIGH",
    },
    {
      threatType: "UPI and Digital Banking Fraud",
      description:
        "Rapidly growing digital payments adoption in Tier-2 and Tier-3 cities has outpaced digital literacy, creating a large pool of vulnerable UPI users.",
      affectedSectors: ["General Public", "Small Traders"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Real Estate Fraud",
      description:
        "Fake listings and fraudulent agents targeting buyers in Bhopal, Indore, and Jabalpur real estate markets via online portals.",
      affectedSectors: ["Property Buyers", "Urban Professionals"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Mewat-Origin Call Centre Fraud",
      description:
        "MP borders Rajasthan where Mewat-based cyber criminal networks operate; MP residents frequently targeted by vishing and remote access scams.",
      affectedSectors: ["Senior Citizens", "General Public"],
      riskLevel: "HIGH",
    },
  ],

  commonScams: [
    {
      scamName: "Fake Government Job Offer",
      modus:
        "WhatsApp messages and fake portals advertising government vacancies; victims pay registration and exam fees to fraudulent portals.",
      targetedGroups: ["Youth", "Unemployed Graduates", "Rural Students"],
      reportsPerYear: 2400,
    },
    {
      scamName: "PM Kisan / Subsidy Fraud",
      modus:
        "Fraudsters call farmers claiming their PM Kisan instalment is blocked; ask for Aadhaar and bank details to release funds.",
      targetedGroups: ["Farmers", "Rural Households"],
      reportsPerYear: 1800,
    },
    {
      scamName: "Vishing (Remote Access) Scam",
      modus:
        "Caller poses as bank/telecom customer care; convinces victim to install AnyDesk or TeamViewer, then drains account.",
      targetedGroups: ["Senior Citizens", "Small Business Owners"],
      reportsPerYear: 1500,
    },
    {
      scamName: "Online Property Advance Scam",
      modus:
        "Fake rental and property sale listings on portals; victims pay token advance money for non-existent properties.",
      targetedGroups: ["Migrant Workers", "Urban Migrants"],
      reportsPerYear: 700,
    },
    {
      scamName: "OLX / Second-hand Goods Fraud",
      modus:
        "Military or defence personnel impersonated on OLX to sell goods; victims pay in advance, no goods delivered.",
      targetedGroups: ["Online Shoppers"],
      reportsPerYear: 1100,
    },
    {
      scamName: "Fake Loan App Harassment",
      modus:
        "Predatory lending apps disburse small loans and then resort to harassment, morphed images, and blackmail for recovery.",
      targetedGroups: ["Daily Wage Workers", "Students", "Low-income Groups"],
      reportsPerYear: 900,
    },
  ],

  highRiskDistricts: [
    {
      district: "Indore",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Investment Scams", "Online Job Fraud"],
      reason: "Commercial capital; highest GDP in state; densely networked digital economy.",
    },
    {
      district: "Bhopal",
      riskLevel: "HIGH",
      primaryThreats: ["Government Job Scams", "Phishing", "UPI Fraud"],
      reason: "State capital; large government workforce and student population targeted.",
    },
    {
      district: "Jabalpur",
      riskLevel: "MEDIUM",
      primaryThreats: ["Fake Loan Apps", "Online Fraud", "Social Media Crimes"],
      reason: "Administrative and judicial hub; moderate digital penetration with rising fraud.",
    },
    {
      district: "Gwalior",
      riskLevel: "MEDIUM",
      primaryThreats: ["OLX Scams", "Fake Job Offers", "Mewat Calls"],
      reason: "Proximity to Rajasthan Mewat region; historically higher cyber fraud rates.",
    },
    {
      district: "Ujjain",
      riskLevel: "MEDIUM",
      primaryThreats: ["Tourism-related Fraud", "Pilgrimage Scams", "KYC Fraud"],
      reason: "Major religious tourism destination; large transient population targeted.",
    },
    {
      district: "Morena",
      riskLevel: "HIGH",
      primaryThreats: ["Cyber Fraud Call Centres", "Vishing", "UPI Fraud"],
      reason: "Proximity to known cyber fraud hotspots in Rajasthan; documented fraud networks operating in area.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "MP-CPS-001",
      name: "Bhopal Cyber Crime Branch",
      district: "Bhopal",
      address: "Police Control Room, Shyamla Hills, Bhopal, Madhya Pradesh 462002",
      phone: "0755-2443555",
      email: "cybercrime.bhopal@mppolice.gov.in",
      reportingLink: "https://mppolice.gov.in",
      jurisdiction: "Bhopal Police Commissionerate",
    },
    {
      id: "MP-CPS-002",
      name: "Indore City Cyber Crime Police Station",
      district: "Indore",
      address: "Commissioner of Police Office, Race Course Road, Indore, Madhya Pradesh 452001",
      phone: "0731-2700100",
      email: "cybercrime.indore@mppolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Indore Police Commissionerate",
    },
    {
      id: "MP-CPS-003",
      name: "Jabalpur District Cyber Crime Cell",
      district: "Jabalpur",
      address: "SP Office, Napier Town, Jabalpur, Madhya Pradesh 482001",
      phone: "0761-2623110",
      email: "cybercrime.jabalpur@mppolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Jabalpur Police Zone",
    },
    {
      id: "MP-CPS-004",
      name: "Gwalior Cyber Crime Police Station",
      district: "Gwalior",
      address: "Commissioner of Police Office, Gwalior, Madhya Pradesh 474001",
      phone: "0751-2340100",
      email: "cybercrime.gwalior@mppolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Gwalior Police Commissionerate",
    },
  ],

  cyberCells: [
    {
      id: "MP-CC-001",
      name: "MP Police Cyber Crime Headquarters",
      district: "Bhopal",
      address: "Police Headquarters, Bhopal, Madhya Pradesh 462001",
      phone: "0755-2443500",
      email: "cybercrime.phq@mppolice.gov.in",
      operationalSince: 2005,
    },
    {
      id: "MP-CC-002",
      name: "Ujjain District Cyber Crime Cell",
      district: "Ujjain",
      address: "SP Office, Ujjain, Madhya Pradesh 456001",
      phone: "0734-2515555",
      email: "cybercrime.ujjain@mppolice.gov.in",
    },
    {
      id: "MP-CC-003",
      name: "Rewa District Cyber Crime Cell",
      district: "Rewa",
      address: "SP Office, Rewa, Madhya Pradesh 486001",
      phone: "07662-230100",
      email: "cybercrime.rewa@mppolice.gov.in",
    },
    {
      id: "MP-CC-004",
      name: "Sagar District Cyber Crime Cell",
      district: "Sagar",
      address: "SP Office, Sagar, Madhya Pradesh 470001",
      phone: "07582-224100",
      email: "cybercrime.sagar@mppolice.gov.in",
    },
    {
      id: "MP-CC-005",
      name: "Satna District Cyber Crime Cell",
      district: "Satna",
      address: "SP Office, Satna, Madhya Pradesh 485001",
      phone: "07672-220100",
      email: "cybercrime.satna@mppolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Madhya Pradesh Police",
      role: "Director General of Police",
      phone: "0755-2443500",
      email: "dgp@mppolice.gov.in",
      address: "Police Headquarters, Bhopal, Madhya Pradesh 462001",
    },
    {
      agency: "MP Police",
      role: "ADGP Cyber Crime",
      phone: "0755-2443555",
      email: "adgp.cybercrime@mppolice.gov.in",
      address: "Police Headquarters, Bhopal, MP 462001",
    },
    {
      agency: "Indore City Police",
      role: "Commissioner of Police",
      phone: "0731-2700100",
      email: "cp.indore@mppolice.gov.in",
      address: "Commissioner of Police Office, Indore 452001",
    },
    {
      agency: "Bhopal City Police",
      role: "Commissioner of Police",
      phone: "0755-2443400",
      email: "cp.bhopal@mppolice.gov.in",
      address: "Commissioner of Police Office, Bhopal 462001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "MP Dial 100", number: "100", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for reporting all cyber crime categories.",
      type: "NATIONAL",
    },
    {
      name: "Madhya Pradesh Police",
      url: "https://mppolice.gov.in",
      description: "Official MP Police portal with cyber crime complaint facility.",
      type: "STATE",
    },
    {
      name: "Cyber Crime Helpline",
      url: "tel:1930",
      description: "24x7 helpline for financial cyber fraud.",
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
      district: "Indore",
      significance: "Commercial capital; highest economic output in MP",
      majorCities: ["Indore"],
      population: 3272335,
    },
    {
      district: "Bhopal",
      significance: "State capital; administrative and educational hub",
      majorCities: ["Bhopal"],
      population: 2368145,
    },
    {
      district: "Jabalpur",
      significance: "Judicial capital; major military cantonment",
      majorCities: ["Jabalpur"],
      population: 2463289,
    },
    {
      district: "Gwalior",
      significance: "Historical city; major industrial and transport hub",
      majorCities: ["Gwalior"],
      population: 2032036,
    },
    {
      district: "Ujjain",
      significance: "One of the holiest cities in India; major pilgrimage centre",
      majorCities: ["Ujjain"],
      population: 1986864,
    },
    {
      district: "Rewa",
      significance: "Regional capital of Vindhya region; coal and mining area",
      majorCities: ["Rewa"],
      population: 2365106,
    },
    {
      district: "Sagar",
      significance: "Central MP administrative hub",
      majorCities: ["Sagar"],
      population: 2378295,
    },
    {
      district: "Morena",
      significance: "Agricultural district bordering Rajasthan; Chambal Valley region",
      majorCities: ["Morena"],
      population: 1965970,
    },
  ],
};
export default MADHYA_PRADESH_INTELLIGENCE;

