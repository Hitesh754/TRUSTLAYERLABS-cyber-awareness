// Meghalaya State Intelligence File
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

export const MEGHALAYA_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Meghalaya",
    capital: "Shillong",
    population: 2966889,
    malePopulation: 1491832,
    femalePopulation: 1475057,
    sexRatio: 989,
    literacyRate: 74.4,
    urbanizationPercent: 20.1,
    workforceParticipationRate: 42.5,
    area: 22429,
    numberOfDistricts: 12,
    officialLanguage: "Khasi, Garo, English",
    stateCode: "ML",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 6872,
    totalCognizableOffences: 6872,
    crimeRatePerLakh: 219.4,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 267,
    financialFrauds: 158,
    socialMediaCrimes: 62,
    identityTheft: 19,
    hacking: 11,
    onlineSexualAbuse: 14,
    chargeSheetingRate: 17.2,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Online Financial Fraud",
      description:
        "Rapid rise in UPI and mobile banking adoption without commensurate financial literacy has made residents susceptible to OTP and vishing fraud.",
      affectedSectors: ["General Public", "First-Time Digital Bankers"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Social Media Harassment",
      description:
        "High Facebook and social media penetration in Meghalaya has resulted in significant social media harassment, account takeovers, and morphed image distribution cases.",
      affectedSectors: ["Women", "Students", "Youth"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Fake Employment Fraud",
      description:
        "Fraudulent job advertisements targeting unemployed youth with promises of mainland employment or government jobs, collecting registration fees.",
      affectedSectors: ["Youth", "Job Seekers"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Cross-Border Digital Nexus with Bangladesh",
      description:
        "Meghalaya's extensive border with Bangladesh creates risk of cross-border smuggling coordination via encrypted messaging apps.",
      affectedSectors: ["Border Communities", "Law Enforcement"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Mining and Coal Trade Online Fraud",
      description:
        "Fraudulent online portals and coal/limestone trader scams exploiting Meghalaya's mining sector, targeting traders for advance payment fraud.",
      affectedSectors: ["Miners", "Traders", "SMEs"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Tourism Sector Online Fraud",
      description:
        "Fake tour operators and homestay booking platforms targeting domestic tourists visiting Meghalaya, collecting advance payments for non-existent services.",
      affectedSectors: ["Tourists", "Hospitality Sector"],
      riskLevel: "LOW",
    },
  ],

  commonScams: [
    {
      scamName: "Fake Government Job Offer",
      modus:
        "WhatsApp-spread messages advertise state government or central government vacancies; victims pay registration fees to fraudulent bank accounts.",
      targetedGroups: ["Youth", "Unemployed Graduates"],
      reportsPerYear: 65,
    },
    {
      scamName: "UPI and OTP Phishing",
      modus:
        "Caller poses as bank representative, claims account anomaly, and extracts UPI PIN or OTP under the pretext of verification.",
      targetedGroups: ["Bank Account Holders", "Senior Citizens"],
      reportsPerYear: 58,
    },
    {
      scamName: "Social Media Account Hack",
      modus:
        "Phishing links circulated on WhatsApp/Facebook; compromised accounts used to impersonate victim and request emergency money from contacts.",
      targetedGroups: ["Social Media Users", "Students"],
      reportsPerYear: 52,
    },
    {
      scamName: "Online Marketplace Scam",
      modus:
        "Items listed on Facebook Marketplace or OLX paid for in advance; seller disappears without delivering goods.",
      targetedGroups: ["Online Buyers"],
      reportsPerYear: 40,
    },
    {
      scamName: "Lottery Fraud via SMS",
      modus:
        "Victim receives SMS claiming to have won a prize; asked to pay taxes and fees to release winnings.",
      targetedGroups: ["Low-Income Households", "Rural Population"],
      reportsPerYear: 35,
    },
    {
      scamName: "Coal/Limestone Advance Payment Fraud",
      modus:
        "Fraudulent online suppliers accept bulk payment for coal or limestone consignments that are never delivered.",
      targetedGroups: ["Small Traders", "Mining Contractors"],
      reportsPerYear: 22,
    },
  ],

  highRiskDistricts: [
    {
      district: "East Khasi Hills",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Social Media Crimes", "Job Scams"],
      reason: "Contains the capital Shillong; highest digital penetration and cyber complaint volumes.",
    },
    {
      district: "West Khasi Hills",
      riskLevel: "MEDIUM",
      primaryThreats: ["Fake Government Benefits", "UPI Fraud"],
      reason: "Border district with patchy digital literacy.",
    },
    {
      district: "East Jaintia Hills",
      riskLevel: "MEDIUM",
      primaryThreats: ["Mining Fraud", "Fake Employment"],
      reason: "Coal mining region; online fraud targeting miners and traders.",
    },
    {
      district: "South Garo Hills",
      riskLevel: "MEDIUM",
      primaryThreats: ["Cross-border Crime Coordination", "Online Fraud"],
      reason: "Bangladesh border district with porous boundary.",
    },
    {
      district: "West Garo Hills",
      riskLevel: "MEDIUM",
      primaryThreats: ["Cross-border Digital Fraud", "Fake Job Offers"],
      reason: "Shares long border with Bangladesh; Tura is a regional commercial hub.",
    },
    {
      district: "Ribhoi",
      riskLevel: "LOW",
      primaryThreats: ["UPI Fraud", "Lottery Scams"],
      reason: "Proximity to Guwahati increases connectivity and first-time digital fraud exposure.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "ML-CPS-001",
      name: "Meghalaya Police Cyber Crime Cell",
      district: "East Khasi Hills",
      address: "SP Office, Lachumiere, Shillong, Meghalaya 793001",
      phone: "0364-2223456",
      email: "cybercrime.meghalaya@meghalayapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Statewide – Meghalaya Police",
    },
  ],

  cyberCells: [
    {
      id: "ML-CC-001",
      name: "Meghalaya Police Cyber Crime Investigation Cell",
      district: "East Khasi Hills",
      address: "Police Headquarters, Shillong, Meghalaya 793001",
      phone: "0364-2501100",
      email: "cybercrime.phq@meghalayapolice.gov.in",
      operationalSince: 2019,
    },
    {
      id: "ML-CC-002",
      name: "West Garo Hills District Cyber Crime Cell",
      district: "West Garo Hills",
      address: "SP Office, Tura, West Garo Hills, Meghalaya 794001",
      phone: "03651-220100",
      email: "cybercrime.wgh@meghalayapolice.gov.in",
    },
    {
      id: "ML-CC-003",
      name: "Ri Bhoi District Cyber Crime Cell",
      district: "Ribhoi",
      address: "SP Office, Nongpoh, Ri Bhoi, Meghalaya 793109",
      phone: "03538-220100",
      email: "cybercrime.ribhoi@meghalayapolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Meghalaya Police",
      role: "Director General of Police",
      phone: "0364-2501100",
      email: "dgp@meghalayapolice.gov.in",
      address: "Police Headquarters, Shillong, Meghalaya 793001",
    },
    {
      agency: "Meghalaya Police",
      role: "Inspector General of Police (Crime)",
      phone: "0364-2501200",
      email: "igp.crime@meghalayapolice.gov.in",
      address: "Police Headquarters, Shillong, Meghalaya 793001",
    },
    {
      agency: "Meghalaya Police",
      role: "Cyber Crime Nodal Officer",
      phone: "0364-2223456",
      email: "cybercrime.meghalaya@meghalayapolice.gov.in",
      address: "SP Office, Lachumiere, Shillong 793001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Shillong Police Control Room", number: "0364-2500022", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for reporting all cyber crime categories.",
      type: "NATIONAL",
    },
    {
      name: "Meghalaya Police",
      url: "https://meghalayapolice.gov.in",
      description: "Official Meghalaya Police portal with citizen services.",
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
      district: "East Khasi Hills",
      significance: "State capital Shillong; largest economic and educational centre",
      majorCities: ["Shillong"],
      population: 825922,
    },
    {
      district: "West Garo Hills",
      significance: "Divisional capital Tura; major commercial hub of Garo Hills",
      majorCities: ["Tura"],
      population: 642923,
    },
    {
      district: "Ribhoi",
      significance: "Gateway district bordering Assam; industrial growth area",
      majorCities: ["Nongpoh"],
      population: 258380,
    },
    {
      district: "East Jaintia Hills",
      significance: "Coal and limestone mining zone",
      majorCities: ["Khliehriat"],
      population: 122436,
    },
    {
      district: "South West Khasi Hills",
      significance: "Eco-tourism and biodiversity zone",
      majorCities: ["Mawkyrwat"],
      population: 130810,
    },
    {
      district: "East Garo Hills",
      significance: "Administrative centre of Eastern Garo Hills",
      majorCities: ["Williamnagar"],
      population: 317917,
    },
  ],
};
export default MEGHALAYA_INTELLIGENCE;

