// State Intelligence File: Arunachal Pradesh
// Auto-generated — keep in sync with cyber-crime-stations.ts
// Shared types are defined in andhra-pradesh.ts; import from a central types file in production.

import type {
  StateIntelligence,
} from "./andhra-pradesh";

const ARUNACHAL_PRADESH: StateIntelligence = {
  profile: {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    formation: "1987-02-20",
    area_km2: 83743,
    divisions: 5,
    districts: 26,
    mandals: 0,          // AP uses circles, not mandals
    villages: 5616,
    officialLanguage: "English",
    chiefMinister: "Pema Khandu",
    governor: "Lt. Gen. K.T. Parnaik",
  },

  demographics: {
    population_2011: 1383727,
    population_estimated_2024: 1570000,
    sexRatio: 938,
    populationDensity: 17,
    urbanPopulationPct: 22.9,
    ruralPopulationPct: 77.1,
    majorCommunities: ["Nyishi", "Bengali", "Adi", "Galo", "Bodo", "Monpa"],
    religions: { Hindu: 29.0, Christian: 30.3, Others_tribal: 26.2, Buddhist: 11.8, Muslim: 1.9 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 3182,
    murderRate: 2.1,
    robberyRate: 0.3,
    fraudCases: 412,
    womenCrimes: 601,
    crimeRatePerLakh: 229.9,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 287,
    financialFraud: 168,
    socialMediaCrimes: 64,
    identityTheft: 21,
    onlineSextortion: 18,
    chargeSheetingRate: 38.0,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 65.4,
    maleRate: 72.6,
    femaleRate: 57.7,
    rank_national: 29,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 40.8,
    agriculturalWorkersPct: 60.0,
    industryPct: 8.0,
    servicesPct: 32.0,
    majorIndustries: ["Agriculture", "Horticulture", "Hydropower", "Tourism", "Forestry"],
    unemployment_rate: 6.1,
  },

  policeInfo: {
    totalPoliceForce: 28000,
    policeStations: 198,
    policePerLakhPopulation: 454,
    crimeDetectionRate: 88.4,
    dgp: "Anand Mohan",
    policeWebsite: "https://www.arunachalpradeshpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC009",
      district: "Itanagar",
      name: "Itanagar Capital Complex Cyber Crime Cell",
      address: "SP Office, Itanagar, Arunachal Pradesh 791111",
      phone: "0360-2291333",
      email: "cybercrime.itanagar@arunachalpradesh.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Arunachal Pradesh Police Cyber Crime Cell",
      jurisdiction: "State-wide",
      contact: "0360-2291333",
      email: "cybercrime.itanagar@arunachalpradesh.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://www.arunachalpradeshpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime.itanagar@arunachalpradesh.gov.in",
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

export default ARUNACHAL_PRADESH;