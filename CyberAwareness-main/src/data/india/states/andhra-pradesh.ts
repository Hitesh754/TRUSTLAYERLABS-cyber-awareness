// State Intelligence File: Andhra Pradesh
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

const ANDHRA_PRADESH: StateIntelligence = {
  profile: {
    name: "Andhra Pradesh",
    capital: "Amaravati (proposed) / Visakhapatnam (executive)",
    formation: "1956-11-01",
    area_km2: 162975,
    divisions: 3,
    districts: 26,
    mandals: 671,
    villages: 28293,
    officialLanguage: "Telugu",
    chiefMinister: "N. Chandrababu Naidu",
    governor: "S. Abdul Nazeer",
  },

  demographics: {
    population_2011: 49386799,
    population_estimated_2024: 54000000,
    sexRatio: 993,
    populationDensity: 308,
    urbanPopulationPct: 29.6,
    ruralPopulationPct: 70.4,
    majorCommunities: ["Kamma", "Reddy", "Kapu", "BC communities", "SC/ST"],
    religions: { Hindu: 90.9, Muslim: 7.1, Christian: 1.4, Others: 0.6 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 182432,
    murderRate: 1.8,
    robberyRate: 0.4,
    fraudCases: 12340,
    womenCrimes: 27811,
    crimeRatePerLakh: 338.5,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 9972,
    financialFraud: 6240,
    socialMediaCrimes: 1854,
    identityTheft: 720,
    onlineSextortion: 380,
    chargeSheetingRate: 42.3,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 67.0,
    maleRate: 74.9,
    femaleRate: 59.1,
    rank_national: 28,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 43.4,
    agriculturalWorkersPct: 55.0,
    industryPct: 14.0,
    servicesPct: 31.0,
    majorIndustries: ["Agriculture", "Pharmaceuticals", "IT/ITES", "Mining", "Aquaculture", "Textiles"],
    unemployment_rate: 4.8,
  },

  policeInfo: {
    totalPoliceForce: 68000,
    policeStations: 1102,
    policePerLakhPopulation: 126,
    crimeDetectionRate: 91.2,
    dgp: "Ch. Dwaraka Tirumala Rao",
    policeWebsite: "https://www.appolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC006",
      district: "Visakhapatnam",
      name: "Visakhapatnam City Cyber Crime Police Station",
      address: "Commissioner of Police Office, Suryabagh, Visakhapatnam, Andhra Pradesh 530001",
      phone: "0891-2750177",
      email: "cybercrime.vsp@appolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC007",
      district: "Vijayawada",
      name: "Krishna District Cyber Crime Police Station",
      address: "SP Office Compound, Governorpet, Vijayawada, Andhra Pradesh 520001",
      phone: "0866-2578900",
      email: "cybercrime.krishna@appolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC008",
      district: "Guntur",
      name: "Guntur District Cyber Crime Cell",
      address: "SP Office, Collectorate Campus, Guntur, Andhra Pradesh 522001",
      phone: "0863-2329444",
      email: "cybercrime.guntur@appolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "AP CID Cyber Crime Wing",
      jurisdiction: "State-wide",
      contact: "0863-2329111",
      email: "cybercrime@appolice.gov.in",
    },
    {
      name: "AP Fiber Grid Cyber Monitoring Cell",
      jurisdiction: "State-wide",
      contact: "1800-425-0935",
      email: "apfibernet@apcfss.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://www.appolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@appolice.gov.in",
    mobileApp: "AP Police App",
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

export default ANDHRA_PRADESH;