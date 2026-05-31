// State Intelligence File: Bihar
// Auto-generated — keep in sync with cyber-crime-stations.ts

import type { StateIntelligence } from "./andhra-pradesh";

const BIHAR: StateIntelligence = {
  profile: {
    name: "Bihar",
    capital: "Patna",
    formation: "1912-03-22",
    area_km2: 94163,
    divisions: 9,
    districts: 38,
    mandals: 0,
    villages: 45103,
    officialLanguage: "Hindi",
    chiefMinister: "Nitish Kumar",
    governor: "Rajendra Vishwanath Arlekar",
  },

  demographics: {
    population_2011: 104099452,
    population_estimated_2024: 128500000,
    sexRatio: 916,
    populationDensity: 1106,
    urbanPopulationPct: 11.3,
    ruralPopulationPct: 88.7,
    majorCommunities: ["Bhumihar", "Rajput", "Yadav", "Kurmi", "Dalit", "Muslim"],
    religions: { Hindu: 82.7, Muslim: 16.9, Others: 0.4 },
  },

  crimeStatistics: {
    year: 2022,
    totalIPC: 171840,
    murderRate: 3.0,
    robberyRate: 1.2,
    fraudCases: 9820,
    womenCrimes: 16218,
    crimeRatePerLakh: 165.1,
    source: "NCRB Crime in India 2022",
  },

  cyberCrimeStatistics: {
    year: 2022,
    totalCyberCrimes: 6320,
    financialFraud: 4100,
    socialMediaCrimes: 1040,
    identityTheft: 480,
    onlineSextortion: 310,
    chargeSheetingRate: 28.4,
    source: "NCRB Crime in India 2022",
  },

  literacy: {
    overallRate: 61.8,
    maleRate: 71.2,
    femaleRate: 51.5,
    rank_national: 35,
    year: 2011,
  },

  employment: {
    workforceParticipationRate: 34.1,
    agriculturalWorkersPct: 75.0,
    industryPct: 7.0,
    servicesPct: 18.0,
    majorIndustries: ["Agriculture", "Sugar", "Jute", "Tourism (Bodh Gaya)", "Construction"],
    unemployment_rate: 10.2,
  },

  policeInfo: {
    totalPoliceForce: 95000,
    policeStations: 1062,
    policePerLakhPopulation: 74,
    crimeDetectionRate: 80.3,
    dgp: "Alok Raj",
    policeWebsite: "https://biharpolice.gov.in",
    emergencyNumber: "100",
  },

  cyberPoliceStations: [
    {
      id: "CC012",
      district: "Patna",
      name: "Patna City Cyber Crime Police Station",
      address: "Police Headquarters, Bailey Road, Patna, Bihar 800001",
      phone: "0612-2201874",
      email: "cybercrime.patna@biharpolice.gov.in",
      reportingLink: "https://biharpolice.gov.in",
    },
    {
      id: "CC013",
      district: "Muzaffarpur",
      name: "Muzaffarpur District Cyber Crime Cell",
      address: "SP Office, Muzaffarpur, Bihar 842001",
      phone: "0621-2263030",
      email: "cybercrime.muzaffarpur@biharpolice.gov.in",
      reportingLink: "https://www.cybercrime.gov.in",
    },
  ],

  cyberCells: [
    {
      name: "Bihar Police Economic Offences Unit (Cyber Wing)",
      jurisdiction: "State-wide",
      contact: "0612-2201874",
      email: "cybercrime@biharpolice.gov.in",
    },
    {
      name: "Jamtara Task Force (Cyber Fraud Monitoring)",
      jurisdiction: "State-wide",
      contact: "0612-2545200",
      email: "taskforce.cyber@biharpolice.gov.in",
    },
  ],

  reportingResources: {
    nationalPortal: "https://www.cybercrime.gov.in",
    statePolicPortal: "https://biharpolice.gov.in",
    helpline1930: true,
    emailReporting: "cybercrime@biharpolice.gov.in",
    mobileApp: "Bihar Police App",
  },

  emergencyContacts: {
    police: "100",
    cybercrime: "1930",
    women_helpline: "181",
    ambulance: "102",
    fire: "101",
    childHelpline: "1098",
    seniorCitizenHelpline: "14567",
  },
};

export default BIHAR;