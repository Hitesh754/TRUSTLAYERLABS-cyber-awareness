// State Intelligence File: Punjab
// Auto-generated — keep in sync with cyber-crime-stations.ts

export interface StateProfile {
  name: string;
  capital: string;
  formation: string;
  area_km2: number;
  divisions: number;
  districts: number;
  mandals: number;
  villages: number;
  officialLanguage: string;
  chiefMinister: string;
  governor: string;
}

export interface Demographics {
  population_2011: number;
  population_estimated_2024: number;
  sexRatio: number;          // females per 1000 males
  populationDensity: number; // per km²
  urbanPopulationPct: number;
  ruralPopulationPct: number;
  majorCommunities: string[];
  religions: Record<string, number>; // % share
}

export interface CrimeStatistics {
  year: number;
  totalIPC: number;
  murderRate: number;        // per 1L population
  robberyRate: number;
  fraudCases: number;
  womenCrimes: number;
  crimeRatePerLakh: number;
  source: string;
}

export interface CyberCrimeStatistics {
  year: number;
  totalCyberCrimes: number;
  financialFraud: number;
  socialMediaCrimes: number;
  identityTheft: number;
  onlineSextortion: number;
  chargeSheetingRate: number; // %
  source: string;
}

export interface LiteracyInfo {
  overallRate: number;  // %
  maleRate: number;
  femaleRate: number;
  rank_national: number;
  year: number;
}

export interface EmploymentInfo {
  workforceParticipationRate: number; // %
  agriculturalWorkersPct: number;
  industryPct: number;
  servicesPct: number;
  majorIndustries: string[];
  unemployment_rate: number; // %
}

export interface PoliceInfo {
  totalPoliceForce: number;
  policeStations: number;
  policePerLakhPopulation: number;
  crimeDetectionRate: number; // %
  dgp: string;
  policeWebsite: string;
  emergencyNumber: string;
}

export interface CyberPoliceStation {
  id: string;
  district: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  reportingLink: string;
}

export interface CyberCell {
  name: string;
  jurisdiction: string;
  contact: string;
  email: string;
}

export interface ReportingResources {
  nationalPortal: string;
  statePolicPortal: string;
  helpline1930: boolean;
  emailReporting: string;
  mobileApp?: string;
}

export interface EmergencyContacts {
  police: string;
  cybercrime: string;
  women_helpline: string;
  ambulance: string;
  fire: string;
  childHelpline: string;
  seniorCitizenHelpline: string;
}

export interface StateIntelligence {
  profile: StateProfile;
  demographics: Demographics;
  crimeStatistics: CrimeStatistics;
  cyberCrimeStatistics: CyberCrimeStatistics;
  literacy: LiteracyInfo;
  employment: EmploymentInfo;
  policeInfo: PoliceInfo;
  cyberPoliceStations: CyberPoliceStation[];
  cyberCells: CyberCell[];
  reportingResources: ReportingResources;
  emergencyContacts: EmergencyContacts;
}

const PUNJAB: StateIntelligence = {
  profile: {
    name: "Punjab",
    capital: "Chandigarh",
    formation: "1966-11-01",
    area_km2: 50362,
    divisions: 5,
    districts: 23,
    mandals: 150,   // sub-divisions (tehsils); Punjab uses tehsils, not mandals
    villages: 12848,
    officialLanguage: "Punjabi",
    chiefMinister: "Bhagwant Mann",
    governor: "Gulab Chand Kataria",
  },

  demographics: {
    population_2011: 27743338,
    population_estimated_2024: 31500000,
    sexRatio: 895,
    populationDensity: 551,
    urbanPopulationPct: 37.5,
    ruralPopulationPct: 62.5,
    majorCommunities: ["Jat Sikh", "Khatri", "Arora", "SC/Dalit communities", "OBC communities"],
    religions: { Sikh: 57.7, Hindu: 38.5, Muslim: 1.9, Christian: 1.3, Others: 0.6 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 102651,
    murderRate: 2.7,
    robberyRate: 0.9,
    fraudCases: 8754,
    womenCrimes: 13176,
    crimeRatePerLakh: 325.8,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 4860,
    financialFraud: 3102,
    socialMediaCrimes: 824,
    identityTheft: 412,
    onlineSextortion: 218,
    chargeSheetingRate: 38.6,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 76.7,
    maleRate: 81.5,
    femaleRate: 71.3,
    rank_national: 14,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 39.3,
    agriculturalWorkersPct: 39.0,
    industryPct: 22.0,
    servicesPct: 39.0,
    majorIndustries: [
      "Agriculture & Food Processing",
      "Textiles & Hosiery (Ludhiana)",
      "Bicycle & Auto Parts Manufacturing",
      "Pharmaceuticals (SAS Nagar / Mohali)",
      "IT / ITES (Mohali IT City)",
      "Sports Goods (Jalandhar)",
      "Light Engineering & Fasteners",
    ],
    unemployment_rate: 7.8,
  },

  policeInfo: {
    totalPoliceForce: 65000,
    policeStations: 837,
    policePerLakhPopulation: 197,
    crimeDetectionRate: 88.4,
    dgp: "Gaurav Yadav",
    policeWebsite: "https://punjabpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC046",
      district: "SAS Nagar (Mohali)",
      name: "Punjab Police Cyber Crime Division, PHQ Mohali",
      address: "Police Headquarters, Phase 6, SAS Nagar (Mohali), Punjab 160055",
      phone: "0172-2748900",
      email: "cybercrime.phq@punjabpolice.gov.in",
      reportingLink: "https://punjabpolice.gov.in",
    },
    {
      id: "CC047",
      district: "Ludhiana",
      name: "Ludhiana City Cyber Crime Police Station",
      address: "Commissioner of Police Office, Ferozepur Road, Ludhiana, Punjab 141001",
      phone: "0161-2748900",
      email: "cybercrime.ludhiana@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048",
      district: "Amritsar",
      name: "Amritsar City Cyber Crime Police Station",
      address: "Commissioner of Police Office, Ranjit Avenue, Amritsar, Punjab 143001",
      phone: "0183-2540555",
      email: "cybercrime.amritsar@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048B",
      district: "Jalandhar",
      name: "Jalandhar City Cyber Crime Police Station",
      address: "Commissioner of Police Office, BMC Chowk, Jalandhar, Punjab 144001",
      phone: "0181-2222600",
      email: "cybercrime.jalandhar@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048C",
      district: "Patiala",
      name: "Patiala District Cyber Crime Police Station",
      address: "SSP Office, Leishman Road, Patiala, Punjab 147001",
      phone: "0175-2213294",
      email: "cybercrime.patiala@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048D",
      district: "Bathinda",
      name: "Bathinda District Cyber Crime Cell",
      address: "SSP Office, G.T. Road, Bathinda, Punjab 151001",
      phone: "0164-2240333",
      email: "cybercrime.bathinda@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048E",
      district: "Gurdaspur",
      name: "Gurdaspur District Cyber Crime Cell",
      address: "SSP Office, Civil Lines, Gurdaspur, Punjab 143521",
      phone: "01874-240330",
      email: "cybercrime.gurdaspur@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048F",
      district: "Hoshiarpur",
      name: "Hoshiarpur District Cyber Crime Cell",
      address: "SSP Office, Mukerian Road, Hoshiarpur, Punjab 146001",
      phone: "01882-220033",
      email: "cybercrime.hoshiarpur@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC048G",
      district: "Ferozepur",
      name: "Ferozepur District Cyber Crime Cell",
      address: "SSP Office, Civil Lines, Ferozepur, Punjab 152002",
      phone: "01632-243800",
      email: "cybercrime.ferozepur@punjabpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Punjab Police Cyber Crime Division (State HQ)",
      jurisdiction: "State-wide",
      contact: "0172-2748900",
      email: "cybercrime.phq@punjabpolice.gov.in",
    },
    {
      name: "Punjab Police Counter Intelligence — Cyber Wing",
      jurisdiction: "State-wide (border security & cross-border cyber threats)",
      contact: "0172-2740011",
      email: "ci.cyber@punjabpolice.gov.in",
    },
    {
      name: "Punjab Vigilance Bureau Cyber Cell",
      jurisdiction: "State-wide (corruption & financial cyber fraud)",
      contact: "0172-2740700",
      email: "vb.cyber@punjabpolice.gov.in",
    },
    {
      name: "Ludhiana Commissionerate Cyber Cell",
      jurisdiction: "Ludhiana City & Rural",
      contact: "0161-2401234",
      email: "cybercell.ludhiana@punjabpolice.gov.in",
    },
    {
      name: "Amritsar Commissionerate Cyber Cell",
      jurisdiction: "Amritsar City & Rural",
      contact: "0183-2501234",
      email: "cybercell.amritsar@punjabpolice.gov.in",
    },
    {
      name: "Jalandhar Commissionerate Cyber Cell",
      jurisdiction: "Jalandhar City & Rural",
      contact: "0181-2450100",
      email: "cybercell.jalandhar@punjabpolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://punjabpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime.phq@punjabpolice.gov.in",
    mobileApp: "Punjab Police App",
  },

  emergencyContacts: {
    police: "100",
    cybercrime: "1930",
    women_helpline: "181",
    ambulance: "108",
    fire: "101",
    childHelpline: "1098",
    seniorCitizenHelpline: "14567",
  },
};

export default PUNJAB;