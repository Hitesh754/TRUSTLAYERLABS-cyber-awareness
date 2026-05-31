// State Intelligence File: Goa
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const GOA: StateIntelligence = {
  profile: {
    name: "Goa",
    capital: "Panaji",
    formation: "1987-05-30",
    area_km2: 3702,
    divisions: 2,
    districts: 2,
    mandals: 0,
    villages: 411,
    officialLanguage: "Konkani",
    chiefMinister: "Pramod Sawant",
    governor: "P.S. Sreedharan Pillai",
  },

  demographics: {
    population_2011: 1458545,
    population_estimated_2024: 1600000,
    sexRatio: 968,
    populationDensity: 394,
    urbanPopulationPct: 62.2,
    ruralPopulationPct: 37.8,
    majorCommunities: ["Konkani", "Marathi", "Kannada", "Migrant workers"],
    religions: { Hindu: 66.1, Christian: 25.1, Muslim: 8.3, Others: 0.5 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 4812,
    murderRate: 1.2,
    robberyRate: 0.2,
    fraudCases: 690,
    womenCrimes: 812,
    crimeRatePerLakh: 330.0,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 480,
    financialFraud: 290,
    socialMediaCrimes: 102,
    identityTheft: 48,
    onlineSextortion: 24,
    chargeSheetingRate: 44.8,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 88.7,
    maleRate: 92.6,
    femaleRate: 84.7,
    rank_national: 4,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 38.8,
    agriculturalWorkersPct: 10.0,
    industryPct: 22.0,
    servicesPct: 68.0,
    majorIndustries: ["Tourism", "Mining", "Pharmaceuticals", "IT", "Fisheries", "Cashew processing"],
    unemployment_rate: 9.4,
  },

  policeInfo: {
    totalPoliceForce: 8500,
    policeStations: 59,
    policePerLakhPopulation: 532,
    crimeDetectionRate: 93.2,
    dgp: "Alok Kumar",
    policeWebsite: "https://goapolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC016",
      district: "Panaji",
      name: "Goa Police Cyber Crime Cell",
      address: "Police Headquarters, Panaji, Goa 403001",
      phone: "0832-2423100",
      email: "cybercrime@goapolice.gov.in",
      reportingLink: "https://goapolice.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Goa Police Cyber Crime Cell",
      jurisdiction: "State-wide",
      contact: "0832-2423100",
      email: "cybercrime@goapolice.gov.in",
    },
    {
      name: "North Goa District Cyber Cell",
      jurisdiction: "North Goa district",
      contact: "0832-2423200",
      email: "sp.northgoa@goapolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://goapolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@goapolice.gov.in",
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

export default GOA;