// State Intelligence File: Himachal Pradesh
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const HIMACHAL_PRADESH: StateIntelligence = {
  profile: {
    name: "Himachal Pradesh",
    capital: "Shimla (summer) / Dharamsala (winter)",
    formation: "1971-01-25",
    area_km2: 55673,
    divisions: 3,
    districts: 12,
    mandals: 0,
    villages: 20752,
    officialLanguage: "Hindi",
    chiefMinister: "Sukhvinder Singh Sukhu",
    governor: "Shiv Pratap Shukla",
  },

  demographics: {
    population_2011: 6864602,
    population_estimated_2024: 7500000,
    sexRatio: 972,
    populationDensity: 123,
    urbanPopulationPct: 10.0,
    ruralPopulationPct: 90.0,
    majorCommunities: ["Rajput", "Brahmin", "Adi Dharmi (SC)", "Gujjar", "Gaddi", "Kinnaura"],
    religions: { Hindu: 95.2, Muslim: 2.2, Sikh: 1.2, Buddhist: 1.2, Others: 0.2 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 16412,
    murderRate: 1.8,
    robberyRate: 0.1,
    fraudCases: 1820,
    womenCrimes: 3214,
    crimeRatePerLakh: 239.0,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 1120,
    financialFraud: 680,
    socialMediaCrimes: 218,
    identityTheft: 84,
    onlineSextortion: 62,
    chargeSheetingRate: 40.1,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 82.8,
    maleRate: 89.5,
    femaleRate: 75.9,
    rank_national: 7,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 44.9,
    agriculturalWorkersPct: 68.0,
    industryPct: 10.0,
    servicesPct: 22.0,
    majorIndustries: ["Horticulture", "Tourism", "Hydropower", "Pharmaceuticals", "IT (Baddi-Barotiwala)"],
    unemployment_rate: 5.2,
  },

  policeInfo: {
    totalPoliceForce: 20000,
    policeStations: 344,
    policePerLakhPopulation: 267,
    crimeDetectionRate: 91.8,
    dgp: "Sanjay Kundu",
    policeWebsite: "https://hppolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC023",
      district: "Shimla",
      name: "Shimla District Cyber Crime Cell",
      address: "SP Office, Boileauganj, Shimla, Himachal Pradesh 171001",
      phone: "0177-2622344",
      email: "cybercrime.shimla@hppolice.gov.in",
      reportingLink: "https://hppolice.gov.in",
    },
    {
      id: "CC024",
      district: "Dharamsala",
      name: "Kangra District Cyber Crime Cell",
      address: "SP Office, Dharamsala, Himachal Pradesh 176215",
      phone: "01892-222688",
      email: "cybercrime.kangra@hppolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "HP Police Cyber Crime Cell, PHQ Shimla",
      jurisdiction: "State-wide",
      contact: "0177-2621474",
      email: "cybercrime@hppolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://hppolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@hppolice.gov.in",
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

export default HIMACHAL_PRADESH;