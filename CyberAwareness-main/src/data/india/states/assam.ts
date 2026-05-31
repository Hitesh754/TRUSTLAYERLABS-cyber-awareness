// State Intelligence File: Assam
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const ASSAM: StateIntelligence = {
  profile: {
    name: "Assam",
    capital: "Dispur",
    formation: "1950-01-26",
    area_km2: 78438,
    divisions: 5,
    districts: 35,
    mandals: 0,
    villages: 26247,
    officialLanguage: "Assamese",
    chiefMinister: "Himanta Biswa Sarma",
    governor: "Lakshman Prasad Acharya",
  },

  demographics: {
    population_2011: 31205576,
    population_estimated_2024: 35600000,
    sexRatio: 958,
    populationDensity: 397,
    urbanPopulationPct: 14.1,
    ruralPopulationPct: 85.9,
    majorCommunities: ["Assamese", "Bengali", "Bodo", "Dimasa", "Mising", "Karbi"],
    religions: { Hindu: 61.5, Muslim: 34.2, Christian: 3.7, Others: 0.6 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 60212,
    murderRate: 2.4,
    robberyRate: 0.6,
    fraudCases: 4812,
    womenCrimes: 18922,
    crimeRatePerLakh: 178.6,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 2891,
    financialFraud: 1720,
    socialMediaCrimes: 604,
    identityTheft: 212,
    onlineSextortion: 142,
    chargeSheetingRate: 35.8,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 72.2,
    maleRate: 77.8,
    femaleRate: 66.3,
    rank_national: 21,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 38.2,
    agriculturalWorkersPct: 52.0,
    industryPct: 10.0,
    servicesPct: 38.0,
    majorIndustries: ["Tea", "Oil & Natural Gas", "Petrochemicals", "Tourism", "Silk"],
    unemployment_rate: 7.2,
  },

  policeInfo: {
    totalPoliceForce: 61000,
    policeStations: 881,
    policePerLakhPopulation: 171,
    crimeDetectionRate: 86.1,
    dgp: "G.P. Singh",
    policeWebsite: "https://assampolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC010",
      district: "Guwahati",
      name: "Guwahati City Cyber Crime Police Station",
      address: "Commissioner of Police, Panbazar, Guwahati, Assam 781001",
      phone: "0361-2540115",
      email: "cybercrime.guwahati@assampolice.gov.in",
      reportingLink: "https://assampolice.gov.in",
    },
    {
      id: "CC011",
      district: "Dibrugarh",
      name: "Dibrugarh District Cyber Crime Cell",
      address: "SP Office, Dibrugarh, Assam 786001",
      phone: "0373-2320077",
      email: "cybercrime.dibrugarh@assampolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Assam Police Cyber Crime Cell, PHQ",
      jurisdiction: "State-wide",
      contact: "0361-2237111",
      email: "cybercrime@assampolice.gov.in",
    },
    {
      name: "Assam Anti-Terrorism Squad (Cyber Wing)",
      jurisdiction: "State-wide",
      contact: "0361-2525002",
      email: "ats.cyber@assampolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://assampolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@assampolice.gov.in",
    mobileApp: "Assam Police App",
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

export default ASSAM;