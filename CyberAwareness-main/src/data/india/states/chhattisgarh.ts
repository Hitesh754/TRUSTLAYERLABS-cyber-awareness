// State Intelligence File: Chhattisgarh
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const CHHATTISGARH: StateIntelligence = {
  profile: {
    name: "Chhattisgarh",
    capital: "Raipur",
    formation: "2000-11-01",
    area_km2: 135192,
    divisions: 5,
    districts: 33,
    mandals: 0,
    villages: 20308,
    officialLanguage: "Hindi",
    chiefMinister: "Vishnu Deo Sai",
    governor: "Ramen Deka",
  },

  demographics: {
    population_2011: 25545198,
    population_estimated_2024: 30200000,
    sexRatio: 991,
    populationDensity: 189,
    urbanPopulationPct: 23.2,
    ruralPopulationPct: 76.8,
    majorCommunities: ["Gond", "Baiga", "Halba", "OBC", "SC/ST"],
    religions: { Hindu: 93.3, Muslim: 2.0, Christian: 1.9, Others: 2.8 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 45820,
    murderRate: 2.8,
    robberyRate: 0.5,
    fraudCases: 3214,
    womenCrimes: 9712,
    crimeRatePerLakh: 179.4,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 1840,
    financialFraud: 1140,
    socialMediaCrimes: 348,
    identityTheft: 128,
    onlineSextortion: 96,
    chargeSheetingRate: 31.2,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 70.3,
    maleRate: 80.3,
    femaleRate: 60.2,
    rank_national: 24,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 42.8,
    agriculturalWorkersPct: 70.0,
    industryPct: 14.0,
    servicesPct: 16.0,
    majorIndustries: ["Steel", "Power", "Mining", "Aluminium", "Agriculture", "Forest Products"],
    unemployment_rate: 3.8,
  },

  policeInfo: {
    totalPoliceForce: 66000,
    policeStations: 488,
    policePerLakhPopulation: 218,
    crimeDetectionRate: 85.6,
    dgp: "Anil Ratnakar Palsankar",
    policeWebsite: "https://cgpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC014",
      district: "Raipur",
      name: "Raipur City Cyber Crime Police Station",
      address: "Police Headquarters, Civil Lines, Raipur, Chhattisgarh 492001",
      phone: "0771-2443839",
      email: "cybercrime.raipur@cgpolice.gov.in",
      reportingLink: "https://cgpolice.gov.in",
    },
    {
      id: "CC015",
      district: "Bilaspur",
      name: "Bilaspur District Cyber Crime Cell",
      address: "SP Office, Bilaspur, Chhattisgarh 495001",
      phone: "07752-230077",
      email: "cybercrime.bilaspur@cgpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "CG Police Cyber Cell, PHQ Raipur",
      jurisdiction: "State-wide",
      contact: "0771-2443839",
      email: "cybercrime@cgpolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://cgpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@cgpolice.gov.in",
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

export default CHHATTISGARH;