// ============================================================
// STATE INTELLIGENCE FILE — UTTAR PRADESH
// Schema Version: 1.0 | Data Vintage: Census 2011 / NCRB 2022
// ============================================================

export interface StateProfile {
  name: string;
  capital: string;
  largestCity: string;
  statehood: string;
  officialLanguage: string;
  area_km2: number;
  districts: number;
  divisions: number;
  population: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number;
  literacyRate: number;
  maleLiteracyRate: number;
  femaleLiteracyRate: number;
  urbanizationPercent: number;
  workforceParticipationRate: number;
  maleWPR: number;
  femaleWPR: number;
}

export interface CrimeStatistics {
  year: number;
  totalIPC: number;
  totalSLL: number;
  murderRate: number;
  robberyRate: number;
  burglaryRate: number;
  crimeAgainstWomen: number;
  crimeAgainstChildren: number;
  source: string;
}

export interface CyberCrimeStatistics {
  year: number;
  totalCyberCrimes: number;
  financialFraud: number;
  socialMediaCrimes: number;
  onlineStalking: number;
  ransomwareIncidents: number;
  phishingCases: number;
  chargeSheetingRate: number;
  source: string;
}

export interface CyberThreat {
  type: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  description: string;
  affectedSectors: string[];
  trend: "Increasing" | "Stable" | "Decreasing";
}

export interface CommonScam {
  name: string;
  modus: string;
  targetDemographic: string;
  reportedLossINR?: number;
  prevalence: "Very High" | "High" | "Medium" | "Low";
}

export interface HighRiskDistrict {
  district: string;
  riskLevel: "Critical" | "High" | "Medium";
  primaryThreats: string[];
  remarks: string;
}

export interface CyberPoliceStation {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  jurisdictionDistricts: string[];
  operationalHours: string;
  reportingLink: string;
}

export interface CyberCell {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  nodal: boolean;
}

export interface LawEnforcementContact {
  designation: string;
  name?: string;
  phone: string;
  email?: string;
  address: string;
}

export interface EmergencyContact {
  service: string;
  number: string;
  remarks?: string;
}

export interface ReportingResource {
  name: string;
  url: string;
  type: "National" | "State" | "Portal" | "Helpline";
  description: string;
}

export interface ImportantCity {
  name: string;
  district: string;
  population: number;
  significance: string;
  cyberRiskProfile: "High" | "Medium" | "Low";
}

// ─────────────────────────────────────────────
// STATE PROFILE
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_PROFILE: StateProfile = {
  name: "Uttar Pradesh",
  capital: "Lucknow",
  largestCity: "Lucknow",
  statehood: "26 January 1950",
  officialLanguage: "Hindi",
  area_km2: 240928,
  districts: 75,
  divisions: 18,
  population: 199812341,
  malePopulation: 104480510,
  femalePopulation: 95331831,
  sexRatio: 912,
  literacyRate: 67.7,
  maleLiteracyRate: 77.28,
  femaleLiteracyRate: 57.18,
  urbanizationPercent: 22.28,
  workforceParticipationRate: 36.4,
  maleWPR: 51.6,
  femaleWPR: 19.4,
};

// ─────────────────────────────────────────────
// CRIME STATISTICS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_CRIME_STATISTICS: CrimeStatistics = {
  year: 2022,
  totalIPC: 699214,
  totalSLL: 198431,
  murderRate: 3.1,
  robberyRate: 2.2,
  burglaryRate: 21.4,
  crimeAgainstWomen: 65743,
  crimeAgainstChildren: 18942,
  source: "NCRB Crime in India 2022",
};

// ─────────────────────────────────────────────
// CYBER CRIME STATISTICS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_CYBER_CRIME_STATISTICS: CyberCrimeStatistics = {
  year: 2022,
  totalCyberCrimes: 27149,
  financialFraud: 17812,
  socialMediaCrimes: 4123,
  onlineStalking: 920,
  ransomwareIncidents: 142,
  phishingCases: 2810,
  chargeSheetingRate: 35.2,
  source: "NCRB Crime in India 2022 / UP Police Cyber Crime Cell Annual Report 2022",
};

// ─────────────────────────────────────────────
// MAJOR CYBER THREATS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_CYBER_THREATS: CyberThreat[] = [
  {
    type: "OTP / SIM Swap / Vishing Fraud",
    severity: "Critical",
    description:
      "Organised call-centre-style fraud rings — particularly in Mathura, Aligarh, and Agra districts — conduct mass vishing and SIM swap attacks draining bank accounts.",
    affectedSectors: ["Banking", "Telecom", "General Public"],
    trend: "Increasing",
  },
  {
    type: "Digital Arrest Scam",
    severity: "Critical",
    description:
      "Victims contacted by fake CBI/ED/TRAI officials; held on extended video calls under false 'digital arrest'; extorted for large sums to avoid fabricated charges.",
    affectedSectors: ["Individuals", "Business"],
    trend: "Increasing",
  },
  {
    type: "Investment / Pig Butchering Scam",
    severity: "High",
    description:
      "Fraudulent investment apps and WhatsApp/Telegram groups targeting professionals and students in Noida, Lucknow, and Varanasi with guaranteed high returns.",
    affectedSectors: ["Finance", "Retail Investors", "IT"],
    trend: "Increasing",
  },
  {
    type: "Online Gambling & Betting App Fraud",
    severity: "High",
    description:
      "Illegal online betting platforms and cricket match fixing apps proliferate; users lose deposits and are subjected to blackmail.",
    affectedSectors: ["Entertainment", "Youth"],
    trend: "Increasing",
  },
  {
    type: "Cyber Crime Against Women — Online Harassment",
    severity: "High",
    description:
      "Stalking, morphing, and non-consensual intimate image sharing disproportionately affects women in urban and peri-urban UP. UP has one of India's highest reported rates.",
    affectedSectors: ["Individuals", "Women"],
    trend: "Stable",
  },
  {
    type: "Ransomware on Government & Education",
    severity: "High",
    description:
      "State government portals, municipal systems, and private universities in Lucknow, Noida, and Agra targeted with ransomware.",
    affectedSectors: ["Government", "Education", "Municipal Services"],
    trend: "Increasing",
  },
  {
    type: "Fake E-Commerce & COD Fraud",
    severity: "High",
    description:
      "Social media marketplace fraud; low-value goods advertised, substandard or empty packages delivered on COD; or prepayment collected with no delivery.",
    affectedSectors: ["E-Commerce", "Rural Population"],
    trend: "Stable",
  },
];

// ─────────────────────────────────────────────
// COMMON SCAMS / FRAUDS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_COMMON_SCAMS: CommonScam[] = [
  {
    name: "Mathura–Agra Fraud Gang (Jamtara-style)",
    modus:
      "Organised gang members impersonate bank/telecom officials to extract OTPs; SIM-swap operations. Agra-Mathura corridor rivals Jharkhand in scale.",
    targetDemographic: "Bank customers across India",
    reportedLossINR: 850000000,
    prevalence: "Very High",
  },
  {
    name: "Digital Arrest Scam",
    modus:
      "Fake officials (CBI, TRAI, Narcotics, ED) video-call victims, fabricate narcotics/money-laundering cases, demand crores for 'settlement'.",
    targetDemographic: "Business owners, NRIs, senior executives",
    reportedLossINR: 620000000,
    prevalence: "Very High",
  },
  {
    name: "Fake IPS/Government Officer Fraud",
    modus:
      "Fraudsters pose as IPS officers or DM/SDM officials; extort money in lieu of protecting victims from fake police cases.",
    targetDemographic: "Traders, property owners",
    reportedLossINR: 120000000,
    prevalence: "High",
  },
  {
    name: "Cricket Betting App Fraud",
    modus:
      "Victims lured into illegal IPL/cricket betting apps with initial wins; then systematically lose large sums; app withdrawals blocked.",
    targetDemographic: "Youth, sports enthusiasts",
    reportedLossINR: 200000000,
    prevalence: "High",
  },
  {
    name: "Fake Loan & Instant Credit App",
    modus:
      "Predatory lending apps collect contact lists and intimate photos; disburse Rs 2,000–5,000; then blackmail borrowers with morphed images.",
    targetDemographic: "Low-income workers, rural youth",
    prevalence: "High",
  },
  {
    name: "Online Property / Land Fraud",
    modus:
      "Fake property dealers advertise Lucknow, Noida, Agra properties with discounted prices; collect token/booking amount and vanish.",
    targetDemographic: "Home buyers, NRIs, investors",
    reportedLossINR: 280000000,
    prevalence: "High",
  },
  {
    name: "Government Scheme Impersonation",
    modus:
      "Fraudsters send fake messages about PM Awas, UP Kisan, or student scholarship scheme disbursements; collect Aadhaar and bank details.",
    targetDemographic: "Farmers, beneficiaries of government schemes",
    prevalence: "High",
  },
];

// ─────────────────────────────────────────────
// HIGH-RISK DISTRICTS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_HIGH_RISK_DISTRICTS: HighRiskDistrict[] = [
  {
    district: "Agra",
    riskLevel: "Critical",
    primaryThreats: ["OTP Fraud", "SIM Swap", "Digital Arrest Scam", "Fake IPS Impersonation"],
    remarks:
      "Major fraud operations hub; proximity to Mathura corridor; high complaint volumes and financial losses.",
  },
  {
    district: "Mathura",
    riskLevel: "Critical",
    primaryThreats: ["Organised Bank Fraud Gang", "SIM Swap", "Vishing"],
    remarks:
      "Known hub for Jamtara-style phone fraud operations; multiple gang arrests; large-scale national-level losses traced here.",
  },
  {
    district: "Gautam Buddha Nagar (Noida)",
    riskLevel: "Critical",
    primaryThreats: ["Investment Scam", "BEC", "Ransomware", "IT Job Fraud", "Digital Arrest"],
    remarks:
      "IT and corporate hub adjacent to Delhi; highest per-capita cyber losses in the state; call-centre fraud operations discovered multiple times.",
  },
  {
    district: "Lucknow",
    riskLevel: "High",
    primaryThreats: ["Government Portal Attack", "Financial Fraud", "Social Media Crime", "Property Fraud"],
    remarks:
      "State capital; seat of government; high-value targets in banking and real estate sectors.",
  },
  {
    district: "Kanpur Nagar",
    riskLevel: "High",
    primaryThreats: ["Financial Fraud", "Online Gambling", "Leather Industry BEC"],
    remarks: "Industrial city; leather export SMEs targeted with BEC; gambling app fraud prevalent.",
  },
  {
    district: "Varanasi",
    riskLevel: "High",
    primaryThreats: ["Tourism Fraud", "Financial Fraud", "Fake Pandit / Astrologer Scam"],
    remarks: "Pilgrimage city; tourists targeted with online booking fraud; faith-based scams rising.",
  },
  {
    district: "Aligarh",
    riskLevel: "High",
    primaryThreats: ["OTP Fraud", "Sextortion", "Social Media Crime"],
    remarks: "University town; student population targeted; organised fraud cells operating.",
  },
  {
    district: "Ghaziabad",
    riskLevel: "High",
    primaryThreats: ["Real Estate Fraud", "Investment Scam", "Digital Arrest Scam"],
    remarks: "Delhi NCR satellite city; rapid urbanisation driving fraud; high complaint volume.",
  },
  {
    district: "Allahabad (Prayagraj)",
    riskLevel: "Medium",
    primaryThreats: ["Government Scheme Fraud", "Fake Job Portal", "Social Media Crime"],
    remarks: "Legal and administrative hub; Kumbh Mela period spikes tourism-related fraud.",
  },
];

// ─────────────────────────────────────────────
// CYBER POLICE STATIONS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_CYBER_POLICE_STATIONS: CyberPoliceStation[] = [
  {
    id: "UP-CPS-001",
    name: "Lucknow Cyber Crime Police Station",
    district: "Lucknow",
    address: "Commissioner of Police, Hazratganj, Lucknow, Uttar Pradesh 226001",
    phone: "0522-2208090",
    email: "cybercrime.lko@uppolice.gov.in",
    jurisdictionDistricts: ["Lucknow", "Unnao", "Barabanki"],
    operationalHours: "24x7",
    reportingLink: "https://uppolice.gov.in",
  },
  {
    id: "UP-CPS-002",
    name: "Agra Cyber Crime Police Station",
    district: "Agra",
    address: "Commissioner of Police, Sanjay Place, Agra, Uttar Pradesh 282002",
    phone: "0562-2850102",
    email: "cybercrime.agra@uppolice.gov.in",
    jurisdictionDistricts: ["Agra", "Mathura", "Firozabad", "Mainpuri"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UP-CPS-003",
    name: "Varanasi Cyber Crime Police Station",
    district: "Varanasi",
    address: "Commissioner of Police, Sigra, Varanasi, Uttar Pradesh 221010",
    phone: "0542-2501111",
    email: "cybercrime.varanasi@uppolice.gov.in",
    jurisdictionDistricts: ["Varanasi", "Jaunpur", "Chandauli", "Ghazipur"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UP-CPS-004",
    name: "Kanpur Nagar Cyber Crime Police Station",
    district: "Kanpur Nagar",
    address: "Commissioner of Police, Colonelganj, Kanpur, Uttar Pradesh 208001",
    phone: "0512-2330100",
    email: "cybercrime.kanpur@uppolice.gov.in",
    jurisdictionDistricts: ["Kanpur Nagar", "Kanpur Dehat", "Fatehpur"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UP-CPS-005",
    name: "Gautam Buddha Nagar Cyber Crime Police Station",
    district: "Gautam Buddha Nagar",
    address: "CP Office, Sector 19, Noida, Uttar Pradesh 201301",
    phone: "0120-2974100",
    email: "cybercrime.gbn@uppolice.gov.in",
    jurisdictionDistricts: ["Gautam Buddha Nagar"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UP-CPS-006",
    name: "Prayagraj Cyber Crime Police Station",
    district: "Prayagraj",
    address: "Commissioner of Police, Civil Lines, Prayagraj, Uttar Pradesh 211001",
    phone: "0532-2400100",
    email: "cybercrime.prayagraj@uppolice.gov.in",
    jurisdictionDistricts: ["Prayagraj", "Kaushambi", "Fatehpur"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UP-CPS-007",
    name: "Ghaziabad Cyber Crime Police Station",
    district: "Ghaziabad",
    address: "Commissioner of Police, Vijaynagar, Ghaziabad, Uttar Pradesh 201001",
    phone: "0120-2820100",
    email: "cybercrime.gzb@uppolice.gov.in",
    jurisdictionDistricts: ["Ghaziabad", "Hapur"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "UP-CPS-008",
    name: "Meerut Cyber Crime Police Station",
    district: "Meerut",
    address: "Commissioner of Police, Garh Road, Meerut, Uttar Pradesh 250001",
    phone: "0121-2761111",
    email: "cybercrime.meerut@uppolice.gov.in",
    jurisdictionDistricts: ["Meerut", "Hapur", "Bulandshahr"],
    operationalHours: "24x7",
    reportingLink: "https://www.cybercrime.gov.in",
  },
];

// ─────────────────────────────────────────────
// CYBER CELLS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_CYBER_CELLS: CyberCell[] = [
  {
    id: "UP-CC-001",
    name: "UP Police Cyber Crime Cell — State Nodal (STF)",
    district: "Lucknow",
    address: "STF Headquarters, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    phone: "0522-2390190",
    email: "stf.upcybercell@uppolice.gov.in",
    nodal: true,
  },
  {
    id: "UP-CC-002",
    name: "Aligarh District Cyber Crime Cell",
    district: "Aligarh",
    address: "SSP Office, Aligarh, Uttar Pradesh 202001",
    phone: "0571-2740100",
    email: "cybercrime.aligarh@uppolice.gov.in",
    nodal: false,
  },
  {
    id: "UP-CC-003",
    name: "Bareilly Cyber Crime Cell",
    district: "Bareilly",
    address: "Commissioner of Police, Civil Lines, Bareilly, Uttar Pradesh 243001",
    phone: "0581-2570100",
    email: "cybercrime.bareilly@uppolice.gov.in",
    nodal: false,
  },
  {
    id: "UP-CC-004",
    name: "Gorakhpur Cyber Crime Cell",
    district: "Gorakhpur",
    address: "SSP Office, Gorakhpur, Uttar Pradesh 273001",
    phone: "0551-2340100",
    email: "cybercrime.gorakhpur@uppolice.gov.in",
    nodal: false,
  },
  {
    id: "UP-CC-005",
    name: "Moradabad Cyber Crime Cell",
    district: "Moradabad",
    address: "Commissioner of Police, Moradabad, Uttar Pradesh 244001",
    phone: "0591-2410100",
    email: "cybercrime.moradabad@uppolice.gov.in",
    nodal: false,
  },
];

// ─────────────────────────────────────────────
// LAW ENFORCEMENT CONTACTS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_LAW_ENFORCEMENT: LawEnforcementContact[] = [
  {
    designation: "Director General of Police, Uttar Pradesh",
    phone: "0522-2390100",
    email: "dgp@uppolice.gov.in",
    address: "Police Headquarters, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  },
  {
    designation: "Additional DGP (Law & Order)",
    phone: "0522-2390200",
    email: "adgp.lo@uppolice.gov.in",
    address: "Police Headquarters, Lucknow 226010",
  },
  {
    designation: "ADG / IG, Special Task Force (STF)",
    phone: "0522-2390190",
    email: "stf@uppolice.gov.in",
    address: "STF HQ, Gomti Nagar, Lucknow 226010",
  },
  {
    designation: "Commissioner of Police, Lucknow",
    phone: "0522-2208090",
    email: "cp.lucknow@uppolice.gov.in",
    address: "Commissionerate, Hazratganj, Lucknow 226001",
  },
  {
    designation: "Commissioner of Police, Noida (Gautam Buddha Nagar)",
    phone: "0120-2974100",
    email: "cp.noida@uppolice.gov.in",
    address: "CP Office, Sector 19, Noida 201301",
  },
  {
    designation: "Commissioner of Police, Agra",
    phone: "0562-2850102",
    email: "cp.agra@uppolice.gov.in",
    address: "Commissioner of Police, Sanjay Place, Agra 282002",
  },
];

// ─────────────────────────────────────────────
// EMERGENCY CONTACTS
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_EMERGENCY_CONTACTS: EmergencyContact[] = [
  { service: "Police Emergency", number: "100" },
  { service: "Cyber Crime Helpline (National)", number: "1930", remarks: "24x7 financial fraud reporting" },
  { service: "UP Police Dial 112", number: "112", remarks: "Unified emergency response" },
  { service: "Women Helpline (UP)", number: "1090", remarks: "Women Power Line, Lucknow" },
  { service: "Women Helpline (National)", number: "181" },
  { service: "Child Helpline", number: "1098" },
  { service: "Ambulance", number: "108" },
  { service: "Fire", number: "101" },
  { service: "UP CM Helpline", number: "1076" },
  { service: "Anti-Corruption Helpline", number: "1064" },
];

// ─────────────────────────────────────────────
// REPORTING RESOURCES
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_REPORTING_RESOURCES: ReportingResource[] = [
  {
    name: "National Cyber Crime Reporting Portal",
    url: "https://cybercrime.gov.in",
    type: "National",
    description: "MHA portal for registering all cyber crime complaints.",
  },
  {
    name: "UP Police Official Website",
    url: "https://uppolice.gov.in",
    type: "State",
    description: "State police portal for online FIR filing and citizen services.",
  },
  {
    name: "Cyber Crime Helpline",
    url: "tel:1930",
    type: "Helpline",
    description: "National helpline 1930 for immediate cyber financial fraud reporting.",
  },
  {
    name: "UP Police e-FIR Portal",
    url: "https://efir.up.police.gov.in",
    type: "Portal",
    description: "Online FIR registration portal for UP citizens.",
  },
];

// ─────────────────────────────────────────────
// IMPORTANT CITIES
// ─────────────────────────────────────────────
export const UTTAR_PRADESH_IMPORTANT_CITIES: ImportantCity[] = [
  {
    name: "Lucknow",
    district: "Lucknow",
    population: 2901474,
    significance: "State capital; administration, ITES, real estate, tourism",
    cyberRiskProfile: "High",
  },
  {
    name: "Noida",
    district: "Gautam Buddha Nagar",
    population: 1861000,
    significance: "IT hub; Delhi NCR; corporate sector",
    cyberRiskProfile: "High",
  },
  {
    name: "Kanpur",
    district: "Kanpur Nagar",
    population: 2920067,
    significance: "Industrial city; leather, textiles",
    cyberRiskProfile: "High",
  },
  {
    name: "Agra",
    district: "Agra",
    population: 1746467,
    significance: "Tourism (Taj Mahal); leather, carpet industry",
    cyberRiskProfile: "High",
  },
  {
    name: "Ghaziabad",
    district: "Ghaziabad",
    population: 1729000,
    significance: "Delhi NCR satellite; industrial, real estate",
    cyberRiskProfile: "High",
  },
  {
    name: "Varanasi",
    district: "Varanasi",
    population: 1435113,
    significance: "Pilgrimage city; silk weaving; tourism",
    cyberRiskProfile: "High",
  },
  {
    name: "Meerut",
    district: "Meerut",
    population: 1424908,
    significance: "Sports goods; NCR fringe; education",
    cyberRiskProfile: "High",
  },
  {
    name: "Prayagraj",
    district: "Prayagraj",
    population: 1212395,
    significance: "Administrative hub; Kumbh Mela; legal centre",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Gorakhpur",
    district: "Gorakhpur",
    population: 952000,
    significance: "Border city; trade; education",
    cyberRiskProfile: "Medium",
  },
  {
    name: "Mathura",
    district: "Mathura",
    population: 441894,
    significance: "Religious tourism; petroleum refinery",
    cyberRiskProfile: "High",
  },
];export default {
  profile: UTTAR_PRADESH_PROFILE,
  crimeStatistics: UTTAR_PRADESH_CRIME_STATISTICS,
  cyberCrimeStatistics: UTTAR_PRADESH_CYBER_CRIME_STATISTICS,
  cyberThreats: UTTAR_PRADESH_CYBER_THREATS,
  commonScams: UTTAR_PRADESH_COMMON_SCAMS,
  highRiskDistricts: UTTAR_PRADESH_HIGH_RISK_DISTRICTS,
  cyberPoliceStations: UTTAR_PRADESH_CYBER_POLICE_STATIONS,
  cyberCells: UTTAR_PRADESH_CYBER_CELLS,
  lawEnforcementContacts: UTTAR_PRADESH_LAW_ENFORCEMENT,
  emergencyContacts: UTTAR_PRADESH_EMERGENCY_CONTACTS,
  reportingResources: UTTAR_PRADESH_REPORTING_RESOURCES,
  importantCities: UTTAR_PRADESH_IMPORTANT_CITIES,
};
