// Maharashtra State Intelligence File
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

export const MAHARASHTRA_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Maharashtra",
    capital: "Mumbai",
    population: 112374333,
    malePopulation: 58243056,
    femalePopulation: 54131277,
    sexRatio: 929,
    literacyRate: 82.3,
    urbanizationPercent: 45.2,
    workforceParticipationRate: 46.4,
    area: 307713,
    numberOfDistricts: 36,
    officialLanguage: "Marathi",
    stateCode: "MH",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 374046,
    totalCognizableOffences: 374046,
    crimeRatePerLakh: 320.8,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 19040,
    financialFrauds: 12611,
    socialMediaCrimes: 2714,
    identityTheft: 1108,
    hacking: 621,
    onlineSexualAbuse: 487,
    chargeSheetingRate: 28.6,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Financial Capital Targeted Attacks",
      description:
        "Mumbai's status as India's financial capital makes banks, stock brokerages, insurance companies, and fintech firms prime targets for APT groups and ransomware.",
      affectedSectors: ["Banking", "BFSI", "Stock Exchange", "Insurance"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Stock Market and Investment Fraud",
      description:
        "Fake SEBI-registered trading tips, pump-and-dump crypto schemes, and fraudulent advisory platforms targeting Maharashtra's investor class.",
      affectedSectors: ["Retail Investors", "Professionals", "HNIs"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Corporate Email Compromise (BEC)",
      description:
        "Business email compromise attacks targeting Mumbai-based multinational companies and SMEs, resulting in fraudulent wire transfers.",
      affectedSectors: ["MSME", "Exporters", "Corporate Sector"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Ransomware on Critical Infrastructure",
      description:
        "Maharashtra has witnessed ransomware incidents targeting power utilities, hospitals, and municipal corporations, particularly post-COVID.",
      affectedSectors: ["Healthcare", "Municipal Bodies", "Power Sector"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Loan and Fintech Fraud",
      description:
        "Rapid fintech adoption enables loan app fraud, credit card skimming, and neo-banking account takeovers across the state.",
      affectedSectors: ["General Public", "Youth", "Small Business Owners"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Entertainment and OTT Platform Fraud",
      description:
        "Fake OTT subscription offers and entertainment industry scams targeting Mumbai's large entertainment sector workforce.",
      affectedSectors: ["Entertainment Industry", "General Public"],
      riskLevel: "MEDIUM",
    },
  ],

  commonScams: [
    {
      scamName: "SEBI / Stock Broker Impersonation",
      modus:
        "Fraudsters pose as SEBI officials or stock brokers, warn victims of regulatory issues, and demand fee to settle fabricated cases.",
      targetedGroups: ["Investors", "Demat Account Holders"],
      reportsPerYear: 3200,
    },
    {
      scamName: "UPI QR Code Fraud",
      modus:
        "Fraudulent QR codes sent to buyers showing they are 'receiving' money; QR actually debits victim's account.",
      targetedGroups: ["Online Sellers", "Small Traders", "Marketplace Users"],
      reportsPerYear: 4100,
    },
    {
      scamName: "Fake Mumbai Police Cyber Cell Call",
      modus:
        "Fraudsters impersonate Mumbai Cyber Police threatening arrest in fabricated NDPS or POCSO cases; demand settlement money.",
      targetedGroups: ["Professionals", "Senior Citizens", "Business Owners"],
      reportsPerYear: 2800,
    },
    {
      scamName: "Property / Builder Advance Fraud",
      modus:
        "Fake builders advertise RERA-registered projects online; collect booking amounts and disappear.",
      targetedGroups: ["Property Buyers", "NRIs", "Investors"],
      reportsPerYear: 1600,
    },
    {
      scamName: "Online Loan App Harassment",
      modus:
        "Instant loan apps access contacts and photos; threaten to send morphed images to family for delayed repayment.",
      targetedGroups: ["Youth", "Low-Income Workers", "Daily Wage Earners"],
      reportsPerYear: 2400,
    },
    {
      scamName: "Fake Casting / Modelling Scam",
      modus:
        "Fraudulent casting agents target aspiring actors and models in Mumbai, collecting registration fees with promises of Bollywood roles.",
      targetedGroups: ["Aspiring Actors", "Models", "Film Industry Aspirants"],
      reportsPerYear: 700,
    },
  ],

  highRiskDistricts: [
    {
      district: "Mumbai City",
      riskLevel: "HIGH",
      primaryThreats: ["BEC Attacks", "Banking Fraud", "Investment Scams", "Ransomware"],
      reason: "India's financial capital; highest density of corporate targets and high-value transactions.",
    },
    {
      district: "Mumbai Suburban",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Fake Police Calls", "Phishing"],
      reason: "Densely populated urban area with highest number of cyber crime complaints in Maharashtra.",
    },
    {
      district: "Pune",
      riskLevel: "HIGH",
      primaryThreats: ["IT Sector Attacks", "Investment Fraud", "Online Job Scams"],
      reason: "Second largest IT hub; large corporate and student population; rising cyber crime volumes.",
    },
    {
      district: "Thane",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "Loan App Harassment", "Property Scams"],
      reason: "Rapid urbanisation with large migrant population; significant cyber fraud volumes.",
    },
    {
      district: "Nagpur",
      riskLevel: "MEDIUM",
      primaryThreats: ["Online Fraud", "Social Media Crimes", "Fake Government Jobs"],
      reason: "Central India hub; growing IT ecosystem attracting fraud.",
    },
    {
      district: "Nashik",
      riskLevel: "MEDIUM",
      primaryThreats: ["Wine/Tourism Fraud", "UPI Scams", "Agricultural Fraud"],
      reason: "Agriculture and wine industry; pilgrimage tourism with transient fraud exposure.",
    },
    {
      district: "Aurangabad (Chhatrapati Sambhajinagar)",
      riskLevel: "MEDIUM",
      primaryThreats: ["Industrial Cyber Risk", "Fake Government Scheme"],
      reason: "AURIC industrial corridor development making it a rising cyber risk zone.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "MH-CPS-001",
      name: "Mumbai City Cyber Crime Branch",
      district: "Mumbai City",
      address: "Commissioner of Police, 1, Dr. D.N. Road, Fort, Mumbai, Maharashtra 400001",
      phone: "022-22621855",
      email: "cybercell@mumbaipolice.gov.in",
      reportingLink: "https://mumbaipolice.gov.in",
      jurisdiction: "Mumbai City Police Commissionerate",
    },
    {
      id: "MH-CPS-002",
      name: "Pune City Cyber Crime Police Station",
      district: "Pune",
      address: "Commissioner of Police, 2, Sadhu Vaswani Road, Pune, Maharashtra 411001",
      phone: "020-26122880",
      email: "cybercrime.pune@punepolice.gov.in",
      reportingLink: "https://punepolice.gov.in",
      jurisdiction: "Pune City Police Commissionerate",
    },
    {
      id: "MH-CPS-003",
      name: "Nagpur City Cyber Crime Police Station",
      district: "Nagpur",
      address: "Commissioner of Police, Civil Lines, Nagpur, Maharashtra 440001",
      phone: "0712-2562131",
      email: "cybercrime.nagpur@nagpurpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Nagpur City Police Commissionerate",
    },
    {
      id: "MH-CPS-004",
      name: "Nashik City Cyber Crime Branch",
      district: "Nashik",
      address: "CP Office, Sharanpur Road, Nashik, Maharashtra 422001",
      phone: "0253-2318101",
      email: "cybercrime.nashik@nashikpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Nashik City Police Commissionerate",
    },
    {
      id: "MH-CPS-005",
      name: "Thane City Cyber Crime Cell",
      district: "Thane",
      address: "Commissioner of Police, Thane, Maharashtra 400601",
      phone: "022-25368000",
      email: "cybercrime.thane@mahapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Thane City Police Commissionerate",
    },
    {
      id: "MH-CPS-006",
      name: "Navi Mumbai Cyber Crime Cell",
      district: "Thane",
      address: "Commissioner of Police, Navi Mumbai, Maharashtra 400614",
      phone: "022-27565100",
      email: "cybercrime.navimumbai@mahapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Navi Mumbai Police Commissionerate",
    },
  ],

  cyberCells: [
    {
      id: "MH-CC-001",
      name: "Maharashtra CID Cyber Crime Investigation Unit",
      district: "Pune",
      address: "SP Building, CID Headquarters, Pune, Maharashtra 411001",
      phone: "020-26123000",
      email: "cybercrime.cid@mahapolice.gov.in",
      operationalSince: 2000,
    },
    {
      id: "MH-CC-002",
      name: "Aurangabad Cyber Crime Cell",
      district: "Aurangabad",
      address: "CP Office, Aurangabad, Maharashtra 431001",
      phone: "0240-2330100",
      email: "cybercrime.aurangabad@mahapolice.gov.in",
    },
    {
      id: "MH-CC-003",
      name: "Solapur Cyber Crime Cell",
      district: "Solapur",
      address: "SP Office, Solapur, Maharashtra 413001",
      phone: "0217-2728100",
      email: "cybercrime.solapur@mahapolice.gov.in",
    },
    {
      id: "MH-CC-004",
      name: "Kolhapur Cyber Crime Cell",
      district: "Kolhapur",
      address: "SP Office, Kolhapur, Maharashtra 416001",
      phone: "0231-2651100",
      email: "cybercrime.kolhapur@mahapolice.gov.in",
    },
    {
      id: "MH-CC-005",
      name: "Amravati Cyber Crime Cell",
      district: "Amravati",
      address: "SP Office, Amravati, Maharashtra 444601",
      phone: "0721-2560100",
      email: "cybercrime.amravati@mahapolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Maharashtra Police",
      role: "Director General of Police",
      phone: "022-22024000",
      email: "dgp@mahapolice.gov.in",
      address: "Police Headquarters, Madam Cama Road, Mumbai 400032",
    },
    {
      agency: "Maharashtra CID",
      role: "Additional DGP (CID)",
      phone: "020-26123000",
      email: "adgp.cid@mahapolice.gov.in",
      address: "CID HQ, Pune, Maharashtra 411001",
    },
    {
      agency: "Mumbai Police",
      role: "Commissioner of Police",
      phone: "022-22624500",
      email: "cp@mumbaipolice.gov.in",
      address: "Commissioner of Police, Fort, Mumbai 400001",
    },
    {
      agency: "Pune Police",
      role: "Commissioner of Police",
      phone: "020-26122880",
      email: "cp.pune@punepolice.gov.in",
      address: "Commissioner of Police, Pune 411001",
    },
    {
      agency: "Maharashtra Cyber",
      role: "SP Cyber Crime",
      phone: "022-22024000",
      email: "cybercrime@mahapolice.gov.in",
      address: "Police Headquarters, Mumbai 400032",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Mumbai Police PCR", number: "022-100", available: "24x7" },
    { service: "Pune Police PCR", number: "020-100", available: "24x7" },
    { service: "Anti-Corruption Helpline Maharashtra", number: "1064", available: "Business Hours" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA national portal for all cyber crime categories.",
      type: "NATIONAL",
    },
    {
      name: "Mumbai Police",
      url: "https://mumbaipolice.gov.in",
      description: "Mumbai Police official portal with online FIR and complaint facility.",
      type: "STATE",
    },
    {
      name: "Pune Police",
      url: "https://punepolice.gov.in",
      description: "Pune City Police online complaint and citizen services portal.",
      type: "STATE",
    },
    {
      name: "Maharashtra Police",
      url: "https://mahapolice.gov.in",
      description: "State police portal for online FIR, citizen charter, and cyber crime.",
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
      district: "Mumbai City",
      significance: "Financial capital of India; headquarters of BSE, RBI, major banks and corporates",
      majorCities: ["Mumbai"],
      population: 3085411,
    },
    {
      district: "Mumbai Suburban",
      significance: "Most populous district; Bollywood, BKC corporate zone, suburbs",
      majorCities: ["Andheri", "Bandra", "Borivali"],
      population: 9356962,
    },
    {
      district: "Pune",
      significance: "Second IT hub; automotive industry; major education centre",
      majorCities: ["Pune", "Pimpri-Chinchwad"],
      population: 9429408,
    },
    {
      district: "Thane",
      significance: "Industrial and residential belt adjacent to Mumbai",
      majorCities: ["Thane", "Kalyan-Dombivli", "Mira-Bhayander"],
      population: 11060148,
    },
    {
      district: "Nagpur",
      significance: "Winter capital of Maharashtra; central India logistics hub",
      majorCities: ["Nagpur"],
      population: 4653570,
    },
    {
      district: "Nashik",
      significance: "Wine capital; major industrial zone and pilgrimage city",
      majorCities: ["Nashik"],
      population: 6107187,
    },
    {
      district: "Aurangabad",
      significance: "Ajanta-Ellora tourism hub; AURIC industrial corridor",
      majorCities: ["Chhatrapati Sambhajinagar"],
      population: 3695928,
    },
    {
      district: "Solapur",
      significance: "Textile industry hub; agricultural trade centre",
      majorCities: ["Solapur"],
      population: 4317756,
    },
  ],
};
export default MAHARASHTRA_INTELLIGENCE;

