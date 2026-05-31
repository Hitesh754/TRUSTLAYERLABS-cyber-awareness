// State Intelligence File: Gujarat
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const GUJARAT: StateIntelligence = {
  profile: {
    name: "Gujarat",
    capital: "Gandhinagar",
    formation: "1960-05-01",
    area_km2: 196024,
    divisions: 7,
    districts: 33,
    mandals: 0,
    villages: 18584,
    officialLanguage: "Gujarati",
    chiefMinister: "Bhupendrabhai Patel",
    governor: "Acharya Devvrat",
  },

  demographics: {
    population_2011: 60439692,
    population_estimated_2024: 72000000,
    sexRatio: 919,
    populationDensity: 308,
    urbanPopulationPct: 42.6,
    ruralPopulationPct: 57.4,
    majorCommunities: ["Patel (Patidar)", "Rajput", "Brahmin", "OBC", "Adivasi", "SC"],
    religions: { Hindu: 89.1, Muslim: 9.7, Jain: 1.0, Others: 0.2 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 161720,
    murderRate: 1.4,
    robberyRate: 0.3,
    fraudCases: 15820,
    womenCrimes: 14218,
    crimeRatePerLakh: 267.6,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 11220,
    financialFraud: 7100,
    socialMediaCrimes: 2140,
    identityTheft: 820,
    onlineSextortion: 480,
    chargeSheetingRate: 46.2,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 78.0,
    maleRate: 85.8,
    femaleRate: 69.7,
    rank_national: 14,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 41.0,
    agriculturalWorkersPct: 35.0,
    industryPct: 32.0,
    servicesPct: 33.0,
    majorIndustries: ["Petrochemicals", "Pharmaceuticals", "Diamond processing", "Textiles", "Chemicals", "IT/ITES"],
    unemployment_rate: 3.6,
  },

  policeInfo: {
    totalPoliceForce: 83000,
    policeStations: 674,
    policePerLakhPopulation: 115,
    crimeDetectionRate: 90.4,
    dgp: "Vikas Sahay",
    policeWebsite: "https://gujaratpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC017",
      district: "Ahmedabad",
      name: "Ahmedabad City Cyber Crime Branch",
      address: "Commissioner of Police, Shahibaug, Ahmedabad, Gujarat 380004",
      phone: "079-25621111",
      email: "cybercrime.ahmedabad@gujaratpolice.gov.in",
      reportingLink: "https://gujaratpolice.gov.in",
    },
    {
      id: "CC018",
      district: "Surat",
      name: "Surat City Cyber Crime Police Station",
      address: "Commissioner of Police Office, Athwa, Surat, Gujarat 395001",
      phone: "0261-2425731",
      email: "cybercrime.surat@gujaratpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
    {
      id: "CC019",
      district: "Vadodara",
      name: "Vadodara City Cyber Crime Branch",
      address: "Commissioner of Police, Vadodara, Gujarat 390001",
      phone: "0265-2418100",
      email: "cybercrime.vadodara@gujaratpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Gujarat CID Crime Cyber Cell",
      jurisdiction: "State-wide",
      contact: "079-23250798",
      email: "cybercrime@gujaratpolice.gov.in",
    },
    {
      name: "Rajkot City Cyber Crime Cell",
      jurisdiction: "Rajkot Commissionerate",
      contact: "0281-2445100",
      email: "cybercrime.rajkot@gujaratpolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://gujaratpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@gujaratpolice.gov.in",
    mobileApp: "Gujarat Police App",
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

export default GUJARAT;