// State Intelligence File: Haryana
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const HARYANA: StateIntelligence = {
  profile: {
    name: "Haryana",
    capital: "Chandigarh",
    formation: "1966-11-01",
    area_km2: 44212,
    divisions: 6,
    districts: 22,
    mandals: 0,
    villages: 7356,
    officialLanguage: "Hindi",
    chiefMinister: "Nayab Singh Saini",
    governor: "Bandaru Dattatreya",
  },

  demographics: {
    population_2011: 25351462,
    population_estimated_2024: 30100000,
    sexRatio: 877,
    populationDensity: 573,
    urbanPopulationPct: 34.8,
    ruralPopulationPct: 65.2,
    majorCommunities: ["Jat", "Ahir", "Brahmin", "Gujar", "Rajput", "SC/Dalit"],
    religions: { Hindu: 87.5, Muslim: 7.0, Sikh: 4.9, Others: 0.6 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 103810,
    murderRate: 2.6,
    robberyRate: 0.8,
    fraudCases: 11410,
    womenCrimes: 15112,
    crimeRatePerLakh: 409.4,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 12940,
    financialFraud: 8810,
    socialMediaCrimes: 2240,
    identityTheft: 920,
    onlineSextortion: 680,
    chargeSheetingRate: 39.8,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 75.6,
    maleRate: 84.1,
    femaleRate: 65.9,
    rank_national: 17,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 40.7,
    agriculturalWorkersPct: 45.0,
    industryPct: 22.0,
    servicesPct: 33.0,
    majorIndustries: ["Automobile", "IT/ITES (Gurugram)", "Agriculture", "Sports goods", "Textiles", "Banking & Finance"],
    unemployment_rate: 7.8,
  },

  policeInfo: {
    totalPoliceForce: 62000,
    policeStations: 416,
    policePerLakhPopulation: 206,
    crimeDetectionRate: 87.1,
    dgp: "Shatrujeet Kapur",
    policeWebsite: "https://haryanapolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC020",
      district: "Gurugram",
      name: "Gurugram Cyber Crime Police Station",
      address: "Commissioner of Police, Old Delhi Road, Gurugram, Haryana 122001",
      phone: "0124-2322200",
      email: "cybercrime.gurugram@haryanapolice.gov.in",
      reportingLink: "https://haryanapolice.gov.in",
    },
    {
      id: "CC021",
      district: "Faridabad",
      name: "Faridabad Cyber Crime Police Station",
      address: "CP Office, NIT, Faridabad, Haryana 121001",
      phone: "0129-2415200",
      email: "cybercrime.faridabad@haryanapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC022",
      district: "Ambala",
      name: "Ambala District Cyber Crime Cell",
      address: "SP Office, Ambala City, Haryana 134003",
      phone: "0171-2630555",
      email: "cybercrime.ambala@haryanapolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Haryana Police Cyber Crime Cell, PHQ",
      jurisdiction: "State-wide",
      contact: "0172-2748900",
      email: "cybercrime.phq@haryanapolice.gov.in",
    },
    {
      name: "Mewat Cyber Fraud Monitoring Cell",
      jurisdiction: "NUH / Mewat region",
      contact: "01267-250050",
      email: "cybercrime.nuh@haryanapolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://haryanapolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime.phq@haryanapolice.gov.in",
    mobileApp: "Haryana Police App",
  },

  emergencyContacts: {
    police: "100",
    cybercrime: "1930",
    women_helpline: "1091",
    ambulance: "108",
    fire: "101",
    childHelpline: "1098",
    seniorCitizenHelpline: "14567",
  },
};

export default HARYANA;