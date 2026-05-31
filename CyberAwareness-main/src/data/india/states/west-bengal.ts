// State Intelligence File: West Bengal
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

const WEST_BENGAL: StateIntelligence = {
  profile: {
    name: "West Bengal",
    capital: "Kolkata",
    formation: "1950-01-26",
    area_km2: 88752,
    divisions: 5,
    districts: 23,
    mandals: 341,  // blocks (CD blocks); West Bengal uses blocks, not mandals
    villages: 40782,
    officialLanguage: "Bengali",
    chiefMinister: "Mamata Banerjee",
    governor: "C. V. Ananda Bose",
  },

  demographics: {
    population_2011: 91276115,
    population_estimated_2024: 100000000,
    sexRatio: 950,
    populationDensity: 1028,
    urbanPopulationPct: 31.9,
    ruralPopulationPct: 68.1,
    majorCommunities: ["Bengali Hindu", "Bengali Muslim", "Rajbanshi", "Santali", "Tea garden communities", "SC/ST"],
    religions: { Hindu: 70.5, Muslim: 27.0, Christian: 0.6, Buddhist: 0.3, Others: 1.6 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 207944,
    murderRate: 2.2,
    robberyRate: 0.6,
    fraudCases: 14872,
    womenCrimes: 36439,
    crimeRatePerLakh: 228.0,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 5404,
    financialFraud: 3218,
    socialMediaCrimes: 1044,
    identityTheft: 486,
    onlineSextortion: 244,
    chargeSheetingRate: 35.8,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 77.1,
    maleRate: 82.7,
    femaleRate: 71.2,
    rank_national: 12,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 40.9,
    agriculturalWorkersPct: 44.0,
    industryPct: 18.0,
    servicesPct: 38.0,
    majorIndustries: [
      "Jute & Textile Manufacturing",
      "IT / ITES (Salt Lake Sector V, New Town)",
      "Tea Cultivation & Processing (Darjeeling, Dooars)",
      "Steel & Engineering (Durgapur, Asansol)",
      "Leather Goods (Kolkata)",
      "Fisheries & Aquaculture",
      "Tourism (Darjeeling, Sundarbans, Kolkata heritage)",
    ],
    unemployment_rate: 5.4,
  },

  policeInfo: {
    totalPoliceForce: 80000,
    policeStations: 1679,
    policePerLakhPopulation: 84,
    crimeDetectionRate: 85.6,
    dgp: "Rajeev Kumar",
    policeWebsite: "https://www.westbengalpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC069",
      district: "Kolkata",
      name: "Kolkata Police Cyber Crime Cell",
      address: "Lalbazar, Commissioner of Police, Kolkata, West Bengal 700001",
      phone: "033-22143004",
      email: "cybercrime@kolkatapolice.gov.in",
      reportingLink: "https://kolkatapolice.gov.in",
    },
    {
      id: "CC070",
      district: "Howrah",
      name: "Howrah City Cyber Crime Cell",
      address: "Commissioner of Police Office, Howrah, West Bengal 711101",
      phone: "033-26412345",
      email: "cybercrime.howrah@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071",
      district: "Darjeeling",
      name: "Siliguri Metropolitan Cyber Crime Cell",
      address: "Commissioner of Police Office, Siliguri, West Bengal 734001",
      phone: "0353-2545100",
      email: "cybercrime.siliguri@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071B",
      district: "Bidhannagar (North 24 Parganas)",
      name: "Bidhannagar City Cyber Crime Police Station",
      address: "Commissioner of Police, Bidhannagar, Salt Lake, Kolkata, West Bengal 700064",
      phone: "033-23587100",
      email: "cybercrime.bidhannagar@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071C",
      district: "Purba Bardhaman",
      name: "Bardhaman District Cyber Crime Cell",
      address: "SP Office, Bardhaman, West Bengal 713101",
      phone: "0342-2665100",
      email: "cybercrime.bardhaman@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071D",
      district: "Murshidabad",
      name: "Murshidabad District Cyber Crime Cell",
      address: "SP Office, Berhampore, Murshidabad, West Bengal 742101",
      phone: "03482-250600",
      email: "cybercrime.murshidabad@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071E",
      district: "Malda",
      name: "Malda District Cyber Crime Cell",
      address: "SP Office, English Bazar, Malda, West Bengal 732101",
      phone: "03512-252500",
      email: "cybercrime.malda@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071F",
      district: "South 24 Parganas",
      name: "Baruipur District Cyber Crime Cell",
      address: "SP Office, Baruipur, South 24 Parganas, West Bengal 700144",
      phone: "033-24370100",
      email: "cybercrime.south24pgs@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071G",
      district: "Paschim Medinipur",
      name: "Medinipur District Cyber Crime Cell",
      address: "SP Office, Medinipur, West Bengal 721101",
      phone: "03222-275100",
      email: "cybercrime.paschimmedinipur@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC071H",
      district: "Asansol-Durgapur",
      name: "Asansol-Durgapur Cyber Crime Police Station",
      address: "Commissioner of Police Office, Asansol, West Bengal 713301",
      phone: "0341-2252100",
      email: "cybercrime.asansol@wbpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "West Bengal Police Cyber Crime Wing (PHQ)",
      jurisdiction: "State-wide",
      contact: "033-22145000",
      email: "cybercrime@wbpolice.gov.in",
    },
    {
      name: "Kolkata Police Cyber Crime Unit — Lalbazar",
      jurisdiction: "Kolkata Police Commissionerate",
      contact: "033-22143004",
      email: "cybercrime@kolkatapolice.gov.in",
    },
    {
      name: "WB CID Cyber Crime Branch",
      jurisdiction: "State-wide (complex & interstate cyber crimes)",
      contact: "033-22861500",
      email: "cid.cybercrime@wbpolice.gov.in",
    },
    {
      name: "Bidhannagar Cyber Crime Cell (IT Hub Cell)",
      jurisdiction: "Salt Lake Sector V, New Town, Rajarhat IT corridor",
      contact: "033-23587200",
      email: "cybercrime.bidhannagar@wbpolice.gov.in",
    },
    {
      name: "West Bengal Women Cyber Crime Cell",
      jurisdiction: "State-wide (online crimes against women)",
      contact: "033-22145150",
      email: "womencybercell@wbpolice.gov.in",
    },
    {
      name: "Siliguri Metropolitan Cyber Cell",
      jurisdiction: "Siliguri, Darjeeling, Jalpaiguri, Alipurduar, Cooch Behar",
      contact: "0353-2545200",
      email: "cybercrime.siliguri@wbpolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://www.westbengalpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@wbpolice.gov.in",
    mobileApp: "WB Police App",
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

export default WEST_BENGAL;