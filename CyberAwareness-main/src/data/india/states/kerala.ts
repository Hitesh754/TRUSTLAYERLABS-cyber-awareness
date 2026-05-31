// Kerala State Intelligence File
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

export const KERALA_INTELLIGENCE: StateIntelligence = {
  profile: {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    population: 33406061,
    malePopulation: 16027412,
    femalePopulation: 17378649,
    sexRatio: 1084,
    literacyRate: 94.0,
    urbanizationPercent: 47.7,
    workforceParticipationRate: 38.4,
    area: 38852,
    numberOfDistricts: 14,
    officialLanguage: "Malayalam",
    stateCode: "KL",
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 150285,
    totalCognizableOffences: 150285,
    crimeRatePerLakh: 430.1,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 5989,
    financialFrauds: 3847,
    socialMediaCrimes: 891,
    identityTheft: 412,
    hacking: 198,
    onlineSexualAbuse: 311,
    chargeSheetingRate: 31.2,
    source: "NCRB Crime in India 2022",
  },

  majorCyberThreats: [
    {
      threatType: "Gulf Remittance and NRI Fraud",
      description:
        "Fraudsters target Kerala's large NRI diaspora through fake investment schemes, loan frauds, and property scams targeting overseas Keralites.",
      affectedSectors: ["NRI Community", "Real Estate", "Banking"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Online Financial Fraud via UPI",
      description:
        "High banking literacy and digital adoption have led to sophisticated UPI and net-banking frauds, including OTP harvesting and screen mirroring attacks.",
      affectedSectors: ["General Public", "Retail Banking"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Cyber Harassment and Online Stalking",
      description:
        "High mobile and social media penetration leads to significant online harassment, morphed image distribution, and cyberstalking cases particularly targeting women.",
      affectedSectors: ["Women", "Students", "Professionals"],
      riskLevel: "HIGH",
    },
    {
      threatType: "Lottery and Prize Fraud",
      description:
        "Fraudsters impersonate Kerala State Lotteries officials to notify victims of fake prizes, demanding processing fees.",
      affectedSectors: ["General Public", "Senior Citizens"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Fake Health and Pharma Portals",
      description:
        "Given Kerala's health-conscious population, fake online pharmacies and health product portals harvest payment data.",
      affectedSectors: ["Senior Citizens", "Healthcare Consumers"],
      riskLevel: "MEDIUM",
    },
    {
      threatType: "Chit Fund and ROSCA Online Fraud",
      description:
        "Digitised versions of traditional chit funds run as Ponzi schemes, exploiting culturally embedded trust in group savings.",
      affectedSectors: ["Women's SHG Members", "General Public"],
      riskLevel: "MEDIUM",
    },
  ],

  commonScams: [
    {
      scamName: "Gulf Job / Visa Fraud",
      modus:
        "Fake travel agents and online portals charging exorbitant fees for non-existent Gulf or European job placements.",
      targetedGroups: ["Job Seekers", "Youth", "Coastal Communities"],
      reportsPerYear: 1200,
    },
    {
      scamName: "Online Lottery Fraud",
      modus:
        "Victim receives SMS/WhatsApp message claiming lottery win; asked to pay tax or processing fee before receiving prize.",
      targetedGroups: ["Senior Citizens", "Low-Income Households"],
      reportsPerYear: 800,
    },
    {
      scamName: "Fake Rental Fraud (Flats Abroad)",
      modus:
        "NRI families scammed by fake overseas rental agencies collecting deposits for non-existent properties.",
      targetedGroups: ["NRI Community"],
      reportsPerYear: 400,
    },
    {
      scamName: "Online Investment Chit Fraud",
      modus:
        "WhatsApp/Telegram groups promise high returns on digital chit investments; collapse after collecting significant corpus.",
      targetedGroups: ["Homemakers", "Middle-Class Investors"],
      reportsPerYear: 650,
    },
    {
      scamName: "Sextortion via Social Media",
      modus:
        "Female or fake profiles on Instagram/Facebook engage targets, record video calls, and extort money.",
      targetedGroups: ["Adult Males", "Married Men"],
      reportsPerYear: 520,
    },
    {
      scamName: "Aadhaar-Enabled Payment Fraud",
      modus:
        "Fraudsters use stolen biometric data at micro-ATMs to withdraw money from victims' accounts using AEPS.",
      targetedGroups: ["Rural Population", "Senior Citizens"],
      reportsPerYear: 300,
    },
  ],

  highRiskDistricts: [
    {
      district: "Thiruvananthapuram",
      riskLevel: "HIGH",
      primaryThreats: ["UPI Fraud", "IT Sector Phishing", "Social Media Crimes"],
      reason:
        "State capital with highest density of government digitisation and IT companies; highest cyber crime volumes.",
    },
    {
      district: "Ernakulam (Kochi)",
      riskLevel: "HIGH",
      primaryThreats: ["Banking Fraud", "Investment Scams", "Corporate Cyber Attacks"],
      reason: "Financial capital of Kerala; major port and corporate hub with large NRI population.",
    },
    {
      district: "Kozhikode",
      riskLevel: "MEDIUM",
      primaryThreats: ["Gulf Job Fraud", "Online Lottery", "Fake Investment"],
      reason: "High NRI density and significant Gulf migration history making residents targets.",
    },
    {
      district: "Malappuram",
      riskLevel: "MEDIUM",
      primaryThreats: ["Gulf Remittance Fraud", "UPI Scams", "Fake Job Portals"],
      reason: "Highest NRI emigration rate in India; large Gulf remittance inflows attract fraud.",
    },
    {
      district: "Thrissur",
      riskLevel: "MEDIUM",
      primaryThreats: ["Jewellery-related Fraud", "Online Banking", "Chit Fund Scams"],
      reason: "Gold-trading capital; significant financial transactions attract online fraud.",
    },
    {
      district: "Kasaragod",
      riskLevel: "LOW",
      primaryThreats: ["Gulf Job Scams", "UPI Fraud"],
      reason: "Border district with high Gulf migration and lower digital literacy.",
    },
  ],

  cyberPoliceStations: [
    {
      id: "KL-CPS-001",
      name: "Kerala Cyber Dome, Thiruvananthapuram",
      district: "Thiruvananthapuram",
      address: "Cyber Dome, Kalamassery, Thiruvananthapuram, Kerala 695001",
      phone: "0471-2721547",
      email: "cyberdome@keralapolice.gov.in",
      reportingLink: "https://cyberdome.kerala.gov.in",
      jurisdiction: "Statewide – Nodal Cyber Intelligence and Operations Centre",
    },
    {
      id: "KL-CPS-002",
      name: "Ernakulam City Cyber Crime Police Station",
      district: "Ernakulam",
      address: "Commissioner of Police Office, Ernakulam, Kochi, Kerala 682020",
      phone: "0484-2395100",
      email: "cybercrime.ernakulam@keralapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Kochi City Police Commissionerate",
    },
    {
      id: "KL-CPS-003",
      name: "Kozhikode City Cyber Crime Cell",
      district: "Kozhikode",
      address: "Commissioner of Police, Kozhikode, Kerala 673001",
      phone: "0495-2721547",
      email: "cybercrime.kozhikode@keralapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Kozhikode City Police Commissionerate",
    },
    {
      id: "KL-CPS-004",
      name: "Thiruvananthapuram City Cyber Crime Cell",
      district: "Thiruvananthapuram",
      address: "Commissioner of Police Office, Thiruvananthapuram, Kerala 695001",
      phone: "0471-2321243",
      email: "cybercrime.tvm@keralapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
      jurisdiction: "Thiruvananthapuram City Police Commissionerate",
    },
  ],

  cyberCells: [
    {
      id: "KL-CC-001",
      name: "Kerala Police Cyber Dome",
      district: "Ernakulam",
      address: "Cyber Dome Complex, Kalamassery, Ernakulam, Kerala 683104",
      phone: "0484-2540400",
      email: "cyberdome@keralapolice.gov.in",
      operationalSince: 2015,
    },
    {
      id: "KL-CC-002",
      name: "Thrissur District Cyber Crime Cell",
      district: "Thrissur",
      address: "SP Office, Round South, Thrissur, Kerala 680001",
      phone: "0487-2360100",
      email: "cybercrime.thrissur@keralapolice.gov.in",
    },
    {
      id: "KL-CC-003",
      name: "Palakkad District Cyber Crime Cell",
      district: "Palakkad",
      address: "SP Office, Palakkad, Kerala 678001",
      phone: "0491-2521600",
      email: "cybercrime.palakkad@keralapolice.gov.in",
    },
    {
      id: "KL-CC-004",
      name: "Malappuram District Cyber Crime Cell",
      district: "Malappuram",
      address: "SP Office, Malappuram, Kerala 676505",
      phone: "0483-2734100",
      email: "cybercrime.malappuram@keralapolice.gov.in",
    },
    {
      id: "KL-CC-005",
      name: "Kannur District Cyber Crime Cell",
      district: "Kannur",
      address: "SP Office, Kannur, Kerala 670001",
      phone: "0497-2700100",
      email: "cybercrime.kannur@keralapolice.gov.in",
    },
  ],

  lawEnforcementContacts: [
    {
      agency: "Kerala State Police",
      role: "Director General of Police",
      phone: "0471-2721547",
      email: "dgp@keralapolice.gov.in",
      address: "Police Headquarters, Thiruvananthapuram, Kerala 695010",
    },
    {
      agency: "Kerala Police Cyber Dome",
      role: "Nodal Officer – Cyber Crime",
      phone: "0484-2540400",
      email: "cyberdome@keralapolice.gov.in",
      address: "Cyber Dome Complex, Kalamassery, Kochi 683104",
    },
    {
      agency: "Kochi City Police",
      role: "Commissioner of Police",
      phone: "0484-2395100",
      email: "cp.kochi@keralapolice.gov.in",
      address: "Commissioner of Police Office, Ernakulam 682020",
    },
    {
      agency: "Kerala Police",
      role: "ADGP Crime",
      phone: "0471-2721890",
      email: "adgpcrime@keralapolice.gov.in",
      address: "Police Headquarters, Thiruvananthapuram 695010",
    },
  ],

  emergencyContacts: [
    { service: "Police Control Room", number: "100", available: "24x7" },
    { service: "Cyber Crime Helpline", number: "1930", available: "24x7" },
    { service: "Emergency Response (ERSS)", number: "112", available: "24x7" },
    { service: "Women Helpline (Abhaya)", number: "181", available: "24x7" },
    { service: "Child Helpline", number: "1098", available: "24x7" },
    { service: "Kerala Police Pink Patrol", number: "1515", available: "24x7" },
    { service: "Tourist Police Helpline", number: "1800-425-4747", available: "24x7" },
  ],

  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      description: "MHA portal for reporting all categories of cyber crimes.",
      type: "NATIONAL",
    },
    {
      name: "Kerala Police Cyber Dome",
      url: "https://cyberdome.kerala.gov.in",
      description:
        "Kerala's dedicated cyber intelligence centre; offers online complaint filing, awareness resources, and threat alerts.",
      type: "STATE",
    },
    {
      name: "Cyber Crime Helpline",
      url: "tel:1930",
      description: "24x7 national financial cyber fraud helpline.",
      type: "HELPLINE",
    },
    {
      name: "Kerala Police Official Website",
      url: "https://keralapolice.gov.in",
      description: "Official portal with citizen services, online FIR, and complaint filing.",
      type: "STATE",
    },
    {
      name: "CERT-In",
      url: "https://www.cert-in.org.in",
      description: "National agency for cybersecurity incident reporting.",
      type: "NATIONAL",
    },
  ],

  importantDistricts: [
    {
      district: "Ernakulam",
      significance: "Commercial and financial capital; major port city, IT corridor, highest GDP contribution",
      majorCities: ["Kochi", "Kalamassery", "Aluva"],
      population: 3282388,
    },
    {
      district: "Thiruvananthapuram",
      significance: "State capital, IT/software hub, seat of government",
      majorCities: ["Thiruvananthapuram", "Technopark"],
      population: 3301427,
    },
    {
      district: "Kozhikode",
      significance: "Historical trading port; second-largest city; major NRI base",
      majorCities: ["Kozhikode", "Vadakara"],
      population: 3086293,
    },
    {
      district: "Malappuram",
      significance: "Highest emigration district; largest Gulf remittance inflows",
      majorCities: ["Malappuram", "Tirur", "Manjeri"],
      population: 4112920,
    },
    {
      district: "Thrissur",
      significance: "Cultural capital; gold trading hub",
      majorCities: ["Thrissur"],
      population: 3121200,
    },
    {
      district: "Palakkad",
      significance: "Agricultural and industrial gateway district",
      majorCities: ["Palakkad", "Ottapalam"],
      population: 2809934,
    },
    {
      district: "Kannur",
      significance: "Weaving and cashew industry; significant political activism",
      majorCities: ["Kannur", "Thalassery"],
      population: 2523003,
    },
    {
      district: "Kasaragod",
      significance: "Northernmost border district with high Gulf emigration",
      majorCities: ["Kasaragod", "Kanhangad"],
      population: 1307375,
    },
  ],
};
export default KERALA_INTELLIGENCE;

