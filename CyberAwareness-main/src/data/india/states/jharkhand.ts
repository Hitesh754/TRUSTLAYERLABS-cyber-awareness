// State Intelligence File: Jharkhand
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const JHARKHAND: StateIntelligence = {
  profile: {
    name: "Jharkhand",
    capital: "Ranchi",
    formation: "2000-11-15",
    area_km2: 79716,
    divisions: 5,
    districts: 24,
    mandals: 0,
    villages: 32620,
    officialLanguage: "Hindi",
    chiefMinister: "Hemant Soren",
    governor: "Santosh Kumar Gangwar",
  },

  demographics: {
    population_2011: 32988134,
    population_estimated_2024: 40100000,
    sexRatio: 948,
    populationDensity: 414,
    urbanPopulationPct: 24.1,
    ruralPopulationPct: 75.9,
    majorCommunities: ["Santali", "Mundari", "Ho", "OBC", "General (non-tribal)", "SC"],
    religions: { Hindu: 67.8, Christianity: 4.3, Islam: 14.5, Sarna_tribal: 13.0, Others: 0.4 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 36210,
    murderRate: 3.1,
    robberyRate: 1.4,
    fraudCases: 4110,
    womenCrimes: 7812,
    crimeRatePerLakh: 109.8,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 8420,   // Jharkhand is home to "Jamtara" cyber fraud hub
    financialFraud: 6210,
    socialMediaCrimes: 1120,
    identityTheft: 540,
    onlineSextortion: 340,
    chargeSheetingRate: 22.1,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 66.4,
    maleRate: 76.8,
    femaleRate: 55.4,
    rank_national: 30,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 41.6,
    agriculturalWorkersPct: 62.0,
    industryPct: 16.0,
    servicesPct: 22.0,
    majorIndustries: ["Mining (coal, iron ore)", "Steel", "Mica processing", "Cement", "Forestry"],
    unemployment_rate: 8.1,
  },

  policeInfo: {
    totalPoliceForce: 68000,
    policeStations: 668,
    policePerLakhPopulation: 169,
    crimeDetectionRate: 78.4,
    dgp: "Anurag Gupta",
    policeWebsite: "https://jhpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC025",
      district: "Ranchi",
      name: "Ranchi Cyber Crime Police Station",
      address: "Police Headquarters, Doranda, Ranchi, Jharkhand 834001",
      phone: "0651-2400700",
      email: "cybercrime.ranchi@jhpolice.gov.in",
      reportingLink: "https://jhpolice.gov.in",
    },
    {
      id: "CC026",
      district: "Dhanbad",
      name: "Dhanbad District Cyber Crime Cell",
      address: "SP Office, Dhanbad, Jharkhand 826001",
      phone: "0326-2310040",
      email: "cybercrime.dhanbad@jhpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Jharkhand Police Cyber Crime Branch, PHQ",
      jurisdiction: "State-wide",
      contact: "0651-2400700",
      email: "cybercrime@jhpolice.gov.in",
    },
    {
      name: "Jamtara Cyber Fraud Task Force",
      jurisdiction: "Jamtara & surrounding districts",
      contact: "06433-222100",
      email: "cybercrime.jamtara@jhpolice.gov.in",
    },
    {
      name: "Deoghar Cyber Crime Cell",
      jurisdiction: "Deoghar district",
      contact: "06432-232100",
      email: "cybercrime.deoghar@jhpolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://jhpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@jhpolice.gov.in",
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

export default JHARKHAND;