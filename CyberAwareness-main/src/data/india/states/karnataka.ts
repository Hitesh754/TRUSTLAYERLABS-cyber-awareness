// Karnataka State Intelligence File
// Production-ready TypeScript | Based on Census 2011, NCRB 2022, and publicly available data

export interface StateProfile {
  name: string;
  capital: string;
  population: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number; // females per 1000 males
  literacyRate: number; // percentage
  urbanizationPercent: number;
  workforceParticipationRate: number; // percentage
  area: number; // sq km
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
  chargeSheetingRate: number; // percentage
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
  available: string; // e.g. "24x7"
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

export const KARNATAKA_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Karnataka",
    capital: "Bengaluru",
    population: 61095297,
    malePopulation: 31057742,
    femalePopulation: 30037555,
    sexRatio: 968,
    literacyRate: 75.6,
    urbanizationPercent: 38.7,
    workforceParticipationRate: 46.0,
    area: 191791,
    numberOfDistricts: 31,
    officialLanguage: "Kannada",
    stateCode: "KA",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 193467,
    totalCognizableOffences: 193467,
    crimeRatePerLakh: 289.3,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 12556,
    financialFrauds: 8134,
    socialMediaCrimes: 1876,
    identityTheft: 743,
    hacking: 412,
    onlineSexualAbuse: 289,
    chargeSheetingRate: 26.4,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "IT Sector Targeted Attacks",
      description:
        "Bengaluru's large IT ecosystem makes it a prime target for corporate espionage, ransomware, and supply-chain attacks against software companies.",
      affectedSectors: ["IT/ITES", "BPO", "Startups", "Banking"],
      riskLevel: "HIGH",
    },
    {
      threatType: "UPI and Digital Payment Fraud",
      description:
        "High smartphone penetration and digital banking adoption result in widespread UPI spoofing, fake payment apps, and QR-code frauds.",
      affectedSectors: ["Retail", "E-commerce", "General Public"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Investment / Crypto Scams",
      description:
        "Fraudulent crypto trading platforms and fake investment apps targeting tech-savvy middle-class citizens, promising high returns.",
      affectedSectors: ["General Public", "IT Professionals"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Social Engineering and Phishing",
      description:
        "Spear-phishing campaigns targeting employees of large corporations headquartered in Bengaluru.",
      affectedSectors: ["Corporate Sector", "Government"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Ransomware on SMEs",
      description:
        "Small and medium enterprises in Bengaluru, Mysuru, and Hubli-Dharwad increasingly targeted by ransomware operators.",
      affectedSectors: ["SME", "Manufacturing", "Healthcare"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Online Loan App Fraud",
      description:
        "Predatory lending apps harvesting contacts and gallery data, then resorting to harassment for repayment.",
      affectedSectors: ["General Public", "Students", "Daily Wage Workers"],
      riskLevel: "HIGH",
    },
  ],

  commonScams: [
    {
      scamName: "KYC Update Fraud",
      modus: "Fraudster poses as a bank or telecom official asking to update KYC via a link, harvesting credentials.",
      targetedGroups: ["Senior Citizens", "Bank Account Holders"],
      reportsPerYear: 2100,
    },
    {
      scamName: "Fake IT/BPO Job Offer Scam",
      modus: "Fake job portals and WhatsApp messages luring unemployed youth with false IT job offers requiring registration fee.",
      targetedGroups: ["Job Seekers", "Fresh Graduates"],
      reportsPerYear: 1400,
    },
    {
      scamName: "OLX / Online Marketplace Fraud",
      modus: "Sellers defrauded via fake UPI payments; buyers send counterfeit goods or no goods after payment.",
      targetedGroups: ["Online Buyers and Sellers"],
      reportsPerYear: 1800,
    },
    {
      scamName: "Fake Rental Agreement Scam",
      modus: "Fraudulent landlords collect advance rent for properties not owned or already rented, common in Bengaluru.",
      targetedGroups: ["Migrants", "IT Professionals"],
      reportsPerYear: 900,
    },
    {
      scamName: "SIM Swap Fraud",
      modus: "Fraudster obtains a duplicate SIM by bribing or deceiving telecom agents, then accesses banking OTPs.",
      targetedGroups: ["Urban Professionals", "High Net Worth Individuals"],
      reportsPerYear: 650,
    },
    {
      scamName: "Sextortion",
      modus: "Victims approached on dating or social media apps, compromising video calls recorded and used for blackmail.",
      targetedGroups: ["Adult Males", "Professionals"],
      reportsPerYear: 480,
    },
  ],

  highRiskDistricts: [
    {
      district: "Bengaluru Urban",
      riskLevel: "HIGH",
      primaryThreats: ["Corporate Cyber Attacks", "UPI Fraud", "Investment Scams", "Ransomware"],
      reason:
        "Largest IT hub in India; highest concentration of internet users, digital transactions, and corporate targets.",
    },
    {
      district: "Mysuru",
      riskLevel: "MEDIUM",
      primaryThreats: ["Online Fraud", "Social Media Crimes", "Fake Job Scams"],
      reason: "Growing IT presence and high tourist footfall increase digital fraud exposure.",
    },
    {
      district: "Dakshina Kannada (Mangaluru)",
      riskLevel: "MEDIUM",
      primaryThreats: ["Banking Fraud", "OLX Scams", "Fake Loan Apps"],
      reason: "High banking penetration and active NRI community targeted for remittance frauds.",
    },
    {
      district: "Dharwad (Hubli-Dharwad)",
      riskLevel: "MEDIUM",
      primaryThreats: ["Online Job Scams", "E-commerce Fraud"],
      reason: "Growing urban commercial centre with increasing cyber fraud incidents.",
    },
    {
      district: "Belagavi",
      riskLevel: "MEDIUM",
      primaryThreats: ["Agriculture-related Fraud", "Loan App Scams"],
      reason: "Cross-border proximity to Goa and Maharashtra with mixed digital literacy.",
    },
    {
      district: "Tumakuru",
      riskLevel: "LOW",
      primaryThreats: ["UPI Fraud", "KYC Scams"],
      reason: "Rapidly digitalising district with emerging cyber fraud patterns.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "KA-CPS-001",
      name: "Bengaluru City Cyber Crime Police Station",
      district: "Bengaluru Urban",
      address: "CID Headquarters, Carlton House, Cubbon Park, Bengaluru, Karnataka 560001",
      phone: "080-22094498",
      email: "cybercrime@ksp.gov.in",
      reportingLink: "https://cybercrimeps.ksp.gov.in",
      jurisdiction: "Bengaluru City Police Commissionerate",
    },
    {
      id: "KA-CPS-002",
      name: "Mysuru City Cyber Crime Police Station",
      district: "Mysuru",
      address: "Commissioner of Police Office, Mysuru, Karnataka 570001",
      phone: "0821-2443300",
      email: "cybercrime.mysuru@ksp.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Mysuru City Police Commissionerate",
    },
    {
      id: "KA-CPS-003",
      name: "Mangaluru City Cyber Crime Police Station",
      district: "Dakshina Kannada",
      address: "CP Office, Lalbagh, Mangaluru, Karnataka 575001",
      phone: "0824-2220100",
      email: "cybercrime.mangaluru@ksp.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Mangaluru City Police Commissionerate",
    },
    {
      id: "KA-CPS-004",
      name: "Hubballi-Dharwad Cyber Crime Police Station",
      district: "Dharwad",
      address: "Commissioner of Police Office, Hubballi, Karnataka 580020",
      phone: "0836-2260100",
      email: "cybercrime.hubballi@ksp.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Hubballi-Dharwad City Police Commissionerate",
    },
  ],

  cyberCells: [
    {
      id: "KA-CC-001",
      name: "Karnataka CID Cyber Crime Division",
      district: "Bengaluru Urban",
      address: "CID Headquarters, Carlton House, Cubbon Park, Bengaluru 560001",
      phone: "080-22094498",
      email: "cid.cybercrime@ksp.gov.in",
      operationalSince: 2001,
    },
    {
      id: "KA-CC-002",
      name: "Kalaburagi District Cyber Crime Cell",
      district: "Kalaburagi",
      address: "SP Office, Kalaburagi, Karnataka 585101",
      phone: "08472-225100",
      email: "cybercrime.kalaburagi@ksp.gov.in",
    },
    {
      id: "KA-CC-003",
      name: "Belagavi District Cyber Crime Cell",
      district: "Belagavi",
      address: "SP Office, Belagavi, Karnataka 590001",
      phone: "0831-2404100",
      email: "cybercrime.belagavi@ksp.gov.in",
    },
    {
      id: "KA-CC-004",
      name: "Shivamogga District Cyber Crime Cell",
      district: "Shivamogga",
      address: "SP Office, Shivamogga, Karnataka 577201",
      phone: "08182-228700",
      email: "cybercrime.shivamogga@ksp.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Karnataka State Police",
      role: "Director General of Police",
      phone: "080-22943300",
      email: "dgp@ksp.gov.in",
      address: "Police Headquarters, Nrupathunga Road, Bengaluru 560001",
    },
    {
      agency: "Karnataka CID",
      role: "Additional Director General of Police (CID)",
      phone: "080-22094100",
      email: "adgpcid@ksp.gov.in",
      address: "Carlton House, Cubbon Park, Bengaluru 560001",
    },
    {
      agency: "Bengaluru City Police",
      role: "Commissioner of Police",
      phone: "080-22943444",
      email: "cp.blr@ksp.gov.in",
      address: "Cubbon Park, Bengaluru 560001",
    },
    {
      agency: "Karnataka Cyber Security Cell",
      role: "Nodal Officer – Cyber Crime",
      phone: "080-22094498",
      email: "cybercrime@ksp.gov.in",
      address: "CID HQ, Carlton House, Cubbon Park, Bengaluru 560001",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response Support System", number: "112", available: "24x7" },
    { service: "Women Helpline", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Bengaluru City Police PCR", number: "080-22943444", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for reporting all cyber crimes including financial fraud and social media abuse.",
      type: "NATIONAL",
    },
    {
      name: "Karnataka Police Cyber Crime Portal",
      url: "https://cybercrimeps.ksp.gov.in",
      description: "State-level portal for reporting cyber crimes in Karnataka.",
      type: "STATE",
    },
    {
      name: "Cyber Crime Helpline",
      url: "tel:1930",
      description: "National helpline number for reporting cyber financial frauds, operational 24x7.",
      type: "HELPLINE",
    },
    {
      name: "Karnataka Police Official Website",
      url: "https://ksp.gov.in",
      description: "Official Karnataka State Police website with citizen services and complaint filing.",
      type: "STATE",
    },
    {
      name: "CERT-In",
      url: "https://www.cert-in.org.in",
      description: "Indian Computer Emergency Response Team for reporting cybersecurity incidents.",
      type: "NATIONAL",
    },
  ],

  importantDistricts: [
    {
      district: "Bengaluru Urban",
      significance: "State capital and India's Silicon Valley; largest IT/ITES hub",
      majorCities: ["Bengaluru"],
      population: 9621551,
    },
    {
      district: "Mysuru",
      significance: "Cultural capital, growing IT/education hub and major tourist destination",
      majorCities: ["Mysuru"],
      population: 3001127,
    },
    {
      district: "Dakshina Kannada",
      significance: "Major port city; high banking penetration and NRI remittance flows",
      majorCities: ["Mangaluru"],
      population: 2083625,
    },
    {
      district: "Dharwad",
      significance: "Education and commercial hub of North Karnataka",
      majorCities: ["Hubballi", "Dharwad"],
      population: 1847023,
    },
    {
      district: "Belagavi",
      significance: "Industrial and border district; second-largest city in Karnataka",
      majorCities: ["Belagavi"],
      population: 4779661,
    },
    {
      district: "Tumakuru",
      significance: "Industrial corridor with close proximity to Bengaluru",
      majorCities: ["Tumakuru"],
      population: 2681449,
    },
    {
      district: "Kalaburagi",
      significance: "Administrative centre of Kalyana Karnataka region",
      majorCities: ["Kalaburagi"],
      population: 2564892,
    },
    {
      district: "Shivamogga",
      significance: "Gateway to Malnad; hydroelectric power hub",
      majorCities: ["Shivamogga"],
      population: 1752753,
    },
  ],
};
export default KARNATAKA_INTELLIGENCE;

