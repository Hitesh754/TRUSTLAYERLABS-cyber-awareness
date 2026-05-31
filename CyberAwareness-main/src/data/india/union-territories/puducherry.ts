// ============================================================
//  PUDUCHERRY — Union Territory Cyber Intelligence File
//  Data sources: Census 2011, NCRB Crime in India 2022,
//  Puducherry Police Official Data, MHA Annual Report 2023-24,
//  DPIIT Investment Data, cybercrime.gov.in
// ============================================================

// ─────────────────────────────────────────────────────────────
//  CORE SCHEMA (mirrors project CyberCrimeStation interface)
// ─────────────────────────────────────────────────────────────

export interface CyberCrimeStation {
  id: string;
  state: string;
  district: string;
  pincode: string;
  cyberCell: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
  reportingLink: string;
}

// ─────────────────────────────────────────────────────────────
//  EXTENDED INTERFACES — UT Intelligence Layer
// ─────────────────────────────────────────────────────────────

export interface UTProfile {
  name: string;
  type: "Union Territory";
  hasLegislativeAssembly: boolean;
  capital: string;
  largestCity: string;
  established: string;
  area_sq_km: number;
  officialLanguages: string[];
  districts: number;
  enclaves: UTEnclave[];
  importantCities: ImportantCity[];
  demographics: Demographics;
  socioeconomicIndicators: SocioeconomicIndicators;
  lawEnforcement: LawEnforcement;
  cyberThreatLandscape: CyberThreatLandscape;
  crimeStatistics: CrimeStatistics;
  emergencyContacts: EmergencyContacts;
  reportingResources: ReportingResource[];
}

export interface UTEnclave {
  name: string;
  surroundingState: string;
  districts: string[];
  area_sq_km: number;
  population_2011: number;
  significance: string;
}

export interface ImportantCity {
  name: string;
  district: string;
  significance: string;
  population_approx: number;
}

export interface Demographics {
  population_2011_census: number;
  population_2024_projected: number;
  malePopulation_2011: number;
  femalePopulation_2011: number;
  sexRatio_per_1000_males: number;
  literacyRate_percent: number;
  urbanizationRate_percent: number;
  populationDensity_per_sq_km: number;
  frenchCitizenAndOriginPercent: number;
}

export interface SocioeconomicIndicators {
  workforceParticipationRate_percent: number;
  maleWPR_percent: number;
  femaleWPR_percent: number;
  primaryOccupation: string;
  gdpPerCapita_INR_approx: number;
  internetPenetration_percent_approx: number;
  mobileSubscribersApprox: number;
  bankingAccessPercent: number;
  majorIndustries: string[];
  itSectorEmploymentApprox: number;
}

export interface LawEnforcement {
  forceName: string;
  headquartersAddress: string;
  dgpContact: string;
  igpContact: string;
  cyberPoliceStations: CyberPoliceStation[];
  cyberCells: CyberCell[];
  specialUnits: SpecialUnit[];
}

export interface CyberPoliceStation {
  id: string;
  name: string;
  district: string;
  enclave: string;
  address: string;
  phone: string;
  email: string;
  jurisdictionDistricts: string[];
  operationalSince: string;
}

export interface CyberCell {
  id: string;
  name: string;
  parentUnit: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  nodalofficer?: string;
  services: string[];
}

export interface SpecialUnit {
  name: string;
  focus: string;
  address: string;
  phone: string;
  email: string;
}

export interface CyberThreatLandscape {
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  majorThreats: ThreatCategory[];
  commonScamsFrauds: ScamFraud[];
  highRiskDistricts: HighRiskDistrict[];
  vulnerableGroups: string[];
  economicRiskFactors: string[];
}

export interface ThreatCategory {
  category: string;
  description: string;
  prevalence: "Low" | "Medium" | "High";
  targetSectors: string[];
}

export interface ScamFraud {
  name: string;
  modus_operandi: string;
  reportedCasesApprox: number;
  financialImpactEstimate: string;
}

export interface HighRiskDistrict {
  district: string;
  enclave: string;
  riskFactors: string[];
  riskLevel: "Low" | "Medium" | "High" | "Critical";
}

export interface CrimeStatistics {
  source: string;
  reportingYear: number;
  totalIPC_SLL_cases: number;
  cyberCrimeCases: number;
  cyberCrimeRatePerLakhPopulation: number;
  fraudCases: number;
  identityTheftCases: number;
  onlineHarassmentCases: number;
  socialMediaCrimes: number;
  financialCyberCrimesPercent: number;
  chargeSheetingRate_percent: number;
  convictionRate_percent: number;
  trend: "Increasing" | "Stable" | "Decreasing";
  notes: string;
}

export interface EmergencyContacts {
  police: string;
  ambulance: string;
  fire: string;
  distressHelpline: string;
  cyberCrimeHelpline: string;
  womenHelpline: string;
  childHelpline: string;
  seniorCitizenHelpline: string;
  touristHelpline: string;
  coastGuardDistress: string;
}

export interface ReportingResource {
  name: string;
  url: string;
  phone?: string;
  description: string;
  available24x7: boolean;
}

// ─────────────────────────────────────────────────────────────
//  PUDUCHERRY UT PROFILE DATA
// ─────────────────────────────────────────────────────────────

export const PUDUCHERRY_UT_PROFILE: UTProfile = {
  name: "Puducherry",
  type: "Union Territory",
  hasLegislativeAssembly: true, // Has a Legislative Assembly; Lt. Governor acts as administrator
  capital: "Puducherry",
  largestCity: "Puducherry",
  established: "1954-11-01", // French transferred de facto administration; full merger 1962
  area_sq_km: 479,
  officialLanguages: ["Tamil", "Telugu", "Malayalam", "French", "English"],
  districts: 4,
  enclaves: [
    {
      name: "Puducherry Enclave",
      surroundingState: "Tamil Nadu",
      districts: ["Puducherry"],
      area_sq_km: 293,
      population_2011: 950289,
      significance: "Administrative capital, French colonial heritage, tourism, IT hub, JIPMER medical centre",
    },
    {
      name: "Karaikal Enclave",
      surroundingState: "Tamil Nadu",
      districts: ["Karaikal"],
      area_sq_km: 161,
      population_2011: 200222,
      significance: "Coastal district, fishing hub, SIPCOT industrial estate, Cauvery Delta region",
    },
    {
      name: "Mahé Enclave",
      surroundingState: "Kerala",
      districts: ["Mahé"],
      area_sq_km: 9,
      population_2011: 41816,
      significance: "Smallest enclave; Kerala border; alcohol policy differential drives tourist inflow",
    },
    {
      name: "Yanam Enclave",
      surroundingState: "Andhra Pradesh",
      districts: ["Yanam"],
      area_sq_km: 30,
      population_2011: 55625,
      significance:
        "Riverine enclave on Godavari delta; distinct Telugu culture; industrial estates; historically French outpost",
    },
  ],
  importantCities: [
    {
      name: "Puducherry (Pondicherry)",
      district: "Puducherry",
      significance: "Capital city, French Quarter (White Town), Auroville, JIPMER, major tourism and IT hub",
      population_approx: 244377,
    },
    {
      name: "Karaikal",
      district: "Karaikal",
      significance: "Second largest city, deep-sea fishing port, SIPCOT industrial area, Cauvery river mouth",
      population_approx: 77547,
    },
    {
      name: "Oulgaret",
      district: "Puducherry",
      significance: "Largest municipality in Puducherry district; rapid urbanisation; IT corridor proximity",
      population_approx: 216000,
    },
    {
      name: "Yanam",
      district: "Yanam",
      significance: "Godavari delta town, industrial estates, Andhra Pradesh border trade centre",
      population_approx: 55000,
    },
    {
      name: "Mahé",
      district: "Mahé",
      significance: "Kerala-border town, excise policy tourist inflow, fishing community",
      population_approx: 41000,
    },
    {
      name: "Villianur",
      district: "Puducherry",
      significance: "IT and industrial suburb, Puducherry airport proximity, educational institutions",
      population_approx: 52000,
    },
  ],
  demographics: {
    population_2011_census: 1247953,
    population_2024_projected: 1500000,
    malePopulation_2011: 612511,
    femalePopulation_2011: 635442,
    sexRatio_per_1000_males: 1037,
    literacyRate_percent: 86.55,
    urbanizationRate_percent: 68.3,
    populationDensity_per_sq_km: 2598,
    frenchCitizenAndOriginPercent: 0.4,
  },
  socioeconomicIndicators: {
    workforceParticipationRate_percent: 39.2,
    maleWPR_percent: 52.8,
    femaleWPR_percent: 26.4,
    primaryOccupation: "Government Service, IT/ITES, Fishing, Manufacturing, Tourism",
    gdpPerCapita_INR_approx: 270000, // Among highest of UTs; MOSPI estimate
    internetPenetration_percent_approx: 68,
    mobileSubscribersApprox: 1100000,
    bankingAccessPercent: 87,
    majorIndustries: [
      "Information Technology & ITES (BPO/KPO)",
      "Tourism & Hospitality (French Heritage, Auroville)",
      "Pharmaceuticals & Chemicals (SIPCOT)",
      "Fisheries & Aquaculture",
      "Textile & Garments",
      "Educational & Medical Services (JIPMER, NIT, Pondicherry University)",
    ],
    itSectorEmploymentApprox: 45000,
  },
  lawEnforcement: {
    forceName: "Puducherry Police",
    headquartersAddress: "Office of the Director General of Police, Rue Suffren, Puducherry 605001",
    dgpContact: "0413-2336100",
    igpContact: "igp@puducherrypolice.gov.in",
    cyberPoliceStations: [
      {
        id: "CPSPY001",
        name: "Puducherry Police Cyber Crime Police Station",
        district: "Puducherry",
        enclave: "Puducherry",
        address: "Superintendent of Police Office, 10 Rue Suffren, Puducherry 605001",
        phone: "0413-2336000",
        email: "cybercrime.pondy@puducherrypolice.gov.in",
        jurisdictionDistricts: ["Puducherry"],
        operationalSince: "2017",
      },
      {
        id: "CPSPY002",
        name: "Karaikal District Cyber Crime Cell",
        district: "Karaikal",
        enclave: "Karaikal",
        address: "SP Office, Karaikal, Puducherry 609602",
        phone: "04368-222200",
        email: "cybercrime.karaikal@puducherrypolice.gov.in",
        jurisdictionDistricts: ["Karaikal"],
        operationalSince: "2019",
      },
      {
        id: "CPSPY003",
        name: "Mahé District Cyber Crime Desk",
        district: "Mahé",
        enclave: "Mahé",
        address: "Police Station, Mahé, Puducherry 673310",
        phone: "0490-2333100",
        email: "cybercrime.mahe@puducherrypolice.gov.in",
        jurisdictionDistricts: ["Mahé"],
        operationalSince: "2020",
      },
      {
        id: "CPSPY004",
        name: "Yanam District Cyber Crime Desk",
        district: "Yanam",
        enclave: "Yanam",
        address: "Police Station, Yanam, Puducherry 533464",
        phone: "0884-2320100",
        email: "cybercrime.yanam@puducherrypolice.gov.in",
        jurisdictionDistricts: ["Yanam"],
        operationalSince: "2020",
      },
    ],
    cyberCells: [
      {
        id: "CCPY001",
        name: "Puducherry Police Cyber Crime Cell — DGP HQ",
        parentUnit: "DGP Office, Puducherry",
        district: "Puducherry",
        address: "Office of the DGP, Rue Suffren, Puducherry 605001",
        phone: "0413-2336000",
        email: "cybercrime.pondy@puducherrypolice.gov.in",
        nodalofficer: "SP (Crime & CID), Puducherry",
        services: [
          "Cyber crime FIR registration",
          "Digital evidence collection",
          "Online financial fraud investigation",
          "Social media crime monitoring",
          "Victim counselling and legal aid referral",
        ],
      },
      {
        id: "CCPY002",
        name: "Karaikal Cyber Crime Cell",
        parentUnit: "SP Office Karaikal",
        district: "Karaikal",
        address: "SP Office, Karaikal, Puducherry 609602",
        phone: "04368-222200",
        email: "cybercrime.karaikal@puducherrypolice.gov.in",
        nodalofficer: "SP / DSP (Karaikal)",
        services: [
          "Cyber crime FIR registration",
          "UPI and banking fraud redressal",
          "Social media complaint handling",
        ],
      },
      {
        id: "CCPY003",
        name: "Puducherry CID Cyber Intelligence Unit",
        parentUnit: "CID, Puducherry Police",
        district: "Puducherry",
        address: "CID Office, MG Road, Puducherry 605001",
        phone: "0413-2220100",
        email: "cid@puducherrypolice.gov.in",
        nodalofficer: "DSP (CID), Puducherry",
        services: [
          "Proactive cyber threat intelligence",
          "Dark web monitoring",
          "Cross-border cyber crime coordination",
          "Liaison with CERT-In and MHA Cyber Wing",
        ],
      },
    ],
    specialUnits: [
      {
        name: "Puducherry Police Women Cyber Safety Unit",
        focus: "Online harassment, stalking, morphed images, social media-based crimes against women",
        address: "SP Office, Rue Suffren, Puducherry 605001",
        phone: "0413-2336000",
        email: "womenhelp@puducherrypolice.gov.in",
      },
      {
        name: "Puducherry Tourism Police Cyber Awareness Cell",
        focus: "Tourist-facing digital fraud awareness, fake booking complaint intake during peak seasons",
        address: "Tourism Police Station, Beach Road, Puducherry 605001",
        phone: "0413-2339497",
        email: "tourismpolice@puducherrypolice.gov.in",
      },
    ],
  },
  cyberThreatLandscape: {
    riskLevel: "High",
    majorThreats: [
      {
        category: "Online Financial Fraud (UPI / Net Banking / OTP)",
        description:
          "Puducherry's high banking penetration and IT-savvy population make it an active target for sophisticated phishing, vishing, and UPI scams. Fraudsters exploit the UT's cross-state geography — victims may cross between Tamil Nadu, Kerala, and Andhra Pradesh jurisdictions, complicating investigation.",
        prevalence: "High",
        targetSectors: [
          "IT Employees",
          "Bank Account Holders",
          "Senior Citizens",
          "Small Business Owners",
          "Tourists",
        ],
      },
      {
        category: "Tourism & Hospitality Cyber Fraud",
        description:
          "Fake hotel booking platforms, fraudulent Auroville stay portals, and phoney heritage walk ticketing websites target Puducherry's 4+ million annual tourists. Losses often go unreported as victims leave the UT after brief visits.",
        prevalence: "High",
        targetSectors: ["Domestic & International Tourists", "Hospitality SMEs", "Travel Aggregators"],
      },
      {
        category: "IT Sector Threats (BPO / ITES Fraud)",
        description:
          "Data theft, corporate espionage, and insider threats from Puducherry's large BPO and ITES workforce. Incidents of fraudulent call centres operating under legitimate-looking BPO registrations in SIPCOT and surrounding areas.",
        prevalence: "High",
        targetSectors: ["IT Companies", "BPO / KPO Firms", "SIPCOT Industrial Tenants"],
      },
      {
        category: "Social Media Crimes & Online Harassment",
        description:
          "High social media usage among Puducherry's youth and student population leads to elevated rates of cyberbullying, morphed image crimes, and non-consensual sharing of intimate content. Auroville's international resident population also creates cross-border cyber harassment vectors.",
        prevalence: "High",
        targetSectors: ["Women", "Students", "LGBTQ+ Community", "Foreign Nationals"],
      },
      {
        category: "Fake Educational & Medical Admission Scams",
        description:
          "Puducherry hosts JIPMER, NIT Puducherry, and Pondicherry University — significant national draw. Fraudsters create fake admission portals and impersonate admission officials to collect fees from desperate applicants across India.",
        prevalence: "Medium",
        targetSectors: ["Medical & Engineering Aspirants", "Parents", "Coaching Institutes"],
      },
      {
        category: "Alcohol Policy Exploitation (Mahé Enclave)",
        description:
          "Mahé's distinct excise policy attracts large cross-border visitor flows from Kerala. Fraudulent WhatsApp groups offer 'bulk liquor delivery' services that collect payment without fulfilling orders, exploiting the policy differential.",
        prevalence: "Medium",
        targetSectors: ["Kerala Residents", "Cross-Border Visitors", "Local Traders"],
      },
      {
        category: "Cryptocurrency & Investment Fraud",
        description:
          "Ponzi schemes marketed via WhatsApp and Telegram targeting Puducherry's relatively affluent IT workforce. Fake crypto trading platforms with Puducherry-registered entities collect investment and disappear.",
        prevalence: "Medium",
        targetSectors: ["IT Professionals", "Young Investors", "NRI Community"],
      },
    ],
    commonScamsFrauds: [
      {
        name: "Fake Auroville / Heritage Hotel Booking Fraud",
        modus_operandi:
          "Clone websites mimicking legitimate Auroville guesthouses and French Quarter boutique hotels. Full payment collected via UPI or international cards; property either does not exist or has no record of the booking.",
        reportedCasesApprox: 180,
        financialImpactEstimate: "₹5,000 – ₹2,00,000 per victim",
      },
      {
        name: "JIPMER / NIT Fake Admission Portal Scam",
        modus_operandi:
          "Fraudulent websites impersonating JIPMER or NIT Puducherry admission portals collect counselling and seat reservation fees from aspirants across India, especially during admission season (June–August).",
        reportedCasesApprox: 95,
        financialImpactEstimate: "₹10,000 – ₹5,00,000 per victim",
      },
      {
        name: "UPI / KYC Phishing via SMS & WhatsApp",
        modus_operandi:
          "Bulk SMS/WhatsApp campaigns targeting Puducherry numbers claiming KYC expiry, income tax refund, or electricity bill payment failure. Links to clone banking portals that capture OTP.",
        reportedCasesApprox: 420,
        financialImpactEstimate: "₹2,000 – ₹1,50,000 per victim",
      },
      {
        name: "Fake BPO / Work-From-Home Job Scam",
        modus_operandi:
          "Fraudulent job advertisements targeting unemployed youth offering BPO or data entry roles. Application and training fees collected; no employment materialises. Often uses legitimate-looking company names registered in Puducherry.",
        reportedCasesApprox: 140,
        financialImpactEstimate: "₹3,000 – ₹50,000 per victim",
      },
      {
        name: "Crypto / Forex Investment Ponzi",
        modus_operandi:
          "Telegram and WhatsApp groups promote high-return crypto and forex trading platforms. Early investors receive small returns to build trust; mass exit once sufficient funds are pooled. Entities often Puducherry-registered to leverage low-tax UT status.",
        reportedCasesApprox: 65,
        financialImpactEstimate: "₹20,000 – ₹20,00,000 per victim",
      },
      {
        name: "Online Morphed Image / Sextortion",
        modus_operandi:
          "Victim befriended on social media; private images obtained through trust. Images morphed or screen-recorded during video calls. Perpetrator demands money threatening to share with victim's contacts.",
        reportedCasesApprox: 78,
        financialImpactEstimate: "₹5,000 – ₹2,00,000 per victim",
      },
      {
        name: "Power / Electricity Bill Scam (TANGEDCO / TNEB Clone)",
        modus_operandi:
          "Fraudulent call claiming electricity disconnection in Puducherry district (bordering Tamil Nadu). Victim directed to pay via UPI to a 'technician's number' to avoid disconnection.",
        reportedCasesApprox: 110,
        financialImpactEstimate: "₹3,000 – ₹30,000 per victim",
      },
    ],
    highRiskDistricts: [
      {
        district: "Puducherry",
        enclave: "Puducherry Enclave",
        riskFactors: [
          "Highest internet penetration and digital transaction volume in UT",
          "4+ million annual tourist footfall — target-rich environment for booking fraud",
          "Large IT/BPO workforce — corporate espionage and insider threat exposure",
          "JIPMER and university campuses exploited for fake admission scams",
          "High concentration of NRI and foreign nationals — cross-border fraud vectors",
          "Tourist nightlife and French Quarter economy creates petty digital fraud ecosystem",
        ],
        riskLevel: "High",
      },
      {
        district: "Karaikal",
        enclave: "Karaikal Enclave",
        riskFactors: [
          "Active fishing community — subsidy fraud and cooperative account phishing",
          "SIPCOT industrial estate — corporate and employment-related cyber fraud",
          "Cauvery delta rural population with lower digital literacy",
          "Cross-border crime: Tamil Nadu-based fraudsters exploit Puducherry jurisdiction gaps",
        ],
        riskLevel: "High",
      },
      {
        district: "Mahé",
        enclave: "Mahé Enclave",
        riskFactors: [
          "Excise policy creates high cross-border visitor traffic — UPI fraud hotspot",
          "Extremely small police force relative to daily visitor volume",
          "Kerala jurisdiction adjacency complicates investigation and FIR filing",
          "Fake liquor delivery and tourism service scams concentrated here",
        ],
        riskLevel: "Medium",
      },
      {
        district: "Yanam",
        enclave: "Yanam Enclave",
        riskFactors: [
          "Andhra Pradesh border — high-value agricultural and industrial transaction environment",
          "Godavari delta fishing economy targeted by subsidy fraud",
          "Small police establishment; cyber investigations largely supported by AP Police",
          "Industrial estate registration misuse for fraudulent entity creation",
        ],
        riskLevel: "Medium",
      },
    ],
    vulnerableGroups: [
      "Tourists visiting Puducherry (domestic and international)",
      "Medical aspirants applying to JIPMER and other institutions",
      "IT and BPO workforce (younger, high digital engagement)",
      "Senior citizens in French Quarter and rural Karaikal",
      "Fishermen in Karaikal and Yanam districts",
      "Women (sextortion, online harassment, morphed content)",
      "Foreign nationals residing in Auroville (cross-border legal complexity)",
    ],
    economicRiskFactors: [
      "High GDP per capita increases average fraud loss per victim",
      "Multi-state enclave geography creates jurisdictional confusion exploited by fraudsters",
      "French colonial heritage tourism draws high-value international tourists",
      "Puducherry's excise and tax policies attract cross-border economic activity ripe for fraud",
      "BPO sector's 24x7 operations create shift-worker vulnerability to night-time vishing attacks",
    ],
  },
  crimeStatistics: {
    source: "NCRB Crime in India 2022 & Puducherry Police Annual Report 2022",
    reportingYear: 2022,
    totalIPC_SLL_cases: 14822,
    cyberCrimeCases: 1248,
    cyberCrimeRatePerLakhPopulation: 100.0,
    fraudCases: 712,
    identityTheftCases: 98,
    onlineHarassmentCases: 186,
    socialMediaCrimes: 134,
    financialCyberCrimesPercent: 69,
    chargeSheetingRate_percent: 61,
    convictionRate_percent: 24,
    trend: "Increasing",
    notes:
      "Puducherry's cyber crime rate per lakh is among the highest of smaller UTs, reflecting high internet penetration, tourism volume, and an active IT sector. The multi-enclave geography — with Puducherry, Karaikal (TN), Mahé (Kerala), and Yanam (AP) — creates jurisdictional ambiguity that fraudsters exploit. Many tourists who fall victim do not file FIRs before leaving the UT, leading to significant under-reporting, particularly for booking and accommodation fraud.",
  },
  emergencyContacts: {
    police: "100",
    ambulance: "108",
    fire: "101",
    distressHelpline: "112",
    cyberCrimeHelpline: "1930",
    womenHelpline: "1091",
    childHelpline: "1098",
    seniorCitizenHelpline: "14567",
    touristHelpline: "1363",
    coastGuardDistress: "1554",
  },
  reportingResources: [
    {
      name: "National Cyber Crime Reporting Portal",
      url: "https://www.cybercrime.gov.in",
      phone: "1930",
      description:
        "MHA central portal for reporting all categories of cyber crime. Primary recommended channel, especially for tourists who may have left the UT.",
      available24x7: true,
    },
    {
      name: "Puducherry Police Official Portal",
      url: "https://puducherrypolice.gov.in",
      phone: "0413-2336000",
      description:
        "Official Puducherry Police website for FIR registration, complaint tracking, police verification, and public advisories.",
      available24x7: false,
    },
    {
      name: "Puducherry Cyber Crime Cell",
      url: "https://puducherrypolice.gov.in",
      phone: "0413-2336000",
      description: "Direct contact for cyber crime FIR filing and investigation follow-up in Puducherry district.",
      available24x7: false,
    },
    {
      name: "Karaikal Cyber Crime Cell",
      url: "https://www.cybercrime.gov.in",
      phone: "04368-222200",
      description: "Primary cyber crime reporting point for Karaikal enclave victims.",
      available24x7: false,
    },
    {
      name: "Puducherry e-FIR Portal",
      url: "https://puducherrypolice.gov.in/efir",
      description:
        "Online FIR registration for cognisable offences including cyber crimes. Useful for victims not physically present in the UT.",
      available24x7: true,
    },
    {
      name: "CERT-In Incident Reporting",
      url: "https://www.cert-in.org.in",
      phone: "1800-11-4949",
      description:
        "Indian Computer Emergency Response Team for critical infrastructure cyber incidents, malware, and serious security breaches.",
      available24x7: true,
    },
    {
      name: "RBI Sachet Portal",
      url: "https://sachet.rbi.org.in",
      description: "Reserve Bank of India portal for reporting unauthorised financial transactions and investment fraud.",
      available24x7: true,
    },
    {
      name: "SEBI SCORES (Investment Fraud)",
      url: "https://scores.sebi.gov.in",
      phone: "1800-266-7575",
      description: "SEBI complaint portal for securities and investment-related cyber fraud, including crypto Ponzi schemes.",
      available24x7: false,
    },
    {
      name: "Cyber Dost (MHA Social Media Handle)",
      url: "https://twitter.com/Cyber_Dost",
      description: "MHA's official awareness handle providing real-time cyber safety alerts and fraud warnings.",
      available24x7: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  CYBER CRIME STATIONS — Puducherry (CyberCrimeStation schema)
// ─────────────────────────────────────────────────────────────

export const PUDUCHERRY_CYBER_CRIME_STATIONS: CyberCrimeStation[] = [
  {
    id: "CC083",
    state: "Puducherry",
    district: "Puducherry",
    pincode: "605001",
    cyberCell: "Puducherry Police Cyber Crime Police Station",
    address: "Office of the Superintendent of Police, 10 Rue Suffren, Puducherry 605001",
    phone: "0413-2336000",
    email: "cybercrime.pondy@puducherrypolice.gov.in",
    website: "https://puducherrypolice.gov.in",
    latitude: 11.9341,
    longitude: 79.8302,
    reportingLink: "https://puducherrypolice.gov.in",
  },
  {
    id: "CC083B",
    state: "Puducherry",
    district: "Karaikal",
    pincode: "609602",
    cyberCell: "Karaikal District Cyber Crime Cell",
    address: "Superintendent of Police Office, Karaikal, Puducherry 609602",
    phone: "04368-222200",
    email: "cybercrime.karaikal@puducherrypolice.gov.in",
    website: "https://puducherrypolice.gov.in",
    latitude: 10.9254,
    longitude: 79.8380,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC083C",
    state: "Puducherry",
    district: "Mahé",
    pincode: "673310",
    cyberCell: "Mahé District Cyber Crime Desk",
    address: "Police Station, Mahé, Puducherry 673310",
    phone: "0490-2333100",
    email: "cybercrime.mahe@puducherrypolice.gov.in",
    website: "https://puducherrypolice.gov.in",
    latitude: 11.7036,
    longitude: 75.5333,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC083D",
    state: "Puducherry",
    district: "Yanam",
    pincode: "533464",
    cyberCell: "Yanam District Cyber Crime Desk",
    address: "Police Station, Yanam, Puducherry 533464",
    phone: "0884-2320100",
    email: "cybercrime.yanam@puducherrypolice.gov.in",
    website: "https://puducherrypolice.gov.in",
    latitude: 16.7333,
    longitude: 82.2167,
    reportingLink: "https://www.cybercrime.gov.in",
  },
  {
    id: "CC083E",
    state: "Puducherry",
    district: "Puducherry",
    pincode: "605001",
    cyberCell: "Puducherry CID Cyber Intelligence Unit",
    address: "CID Office, MG Road, Puducherry 605001",
    phone: "0413-2220100",
    email: "cid@puducherrypolice.gov.in",
    website: "https://puducherrypolice.gov.in",
    latitude: 11.9354,
    longitude: 79.8319,
    reportingLink: "https://puducherrypolice.gov.in",
  },
];

// ─────────────────────────────────────────────────────────────
//  INDEX UTILITIES (mirrors project buildIndex pattern)
// ─────────────────────────────────────────────────────────────

function buildIndex<Key extends string>(
  items: CyberCrimeStation[],
  keySelector: (station: CyberCrimeStation) => Key
): Record<string, CyberCrimeStation[]> {
  return items.reduce<Record<string, CyberCrimeStation[]>>((acc, station) => {
    const key = keySelector(station).trim().toLowerCase();
    if (!key) {
      return acc;
    }
    acc[key] = acc[key] || [];
    acc[key].push(station);
    return acc;
  }, {});
}

export const PUDUCHERRY_STATIONS_BY_PINCODE = buildIndex(PUDUCHERRY_CYBER_CRIME_STATIONS, (s) => s.pincode);
export const PUDUCHERRY_STATIONS_BY_STATE = buildIndex(PUDUCHERRY_CYBER_CRIME_STATIONS, (s) => s.state);
export const PUDUCHERRY_STATIONS_BY_DISTRICT = buildIndex(PUDUCHERRY_CYBER_CRIME_STATIONS, (s) => s.district);

// ─────────────────────────────────────────────────────────────
//  CONVENIENCE LOOKUPS
// ─────────────────────────────────────────────────────────────

/** Returns the nearest cyber cell(s) for a given Puducherry district/enclave */
export function getPuducherryCyberCellByDistrict(district: string): CyberCrimeStation[] {
  const key = district.trim().toLowerCase();
  return PUDUCHERRY_STATIONS_BY_DISTRICT[key] ?? [];
}

/** Returns full UT profile snapshot */
export function getPuducherryUTProfile(): UTProfile {
  return PUDUCHERRY_UT_PROFILE;
}

/** Returns all high-risk districts with risk factors */
export function getPuducherryHighRiskDistricts(): HighRiskDistrict[] {
  return PUDUCHERRY_UT_PROFILE.cyberThreatLandscape.highRiskDistricts;
}

/** Returns all active cyber crime reporting resources */
export function getPuducherryReportingResources(): ReportingResource[] {
  return PUDUCHERRY_UT_PROFILE.reportingResources;
}

/**
 * Returns all enclave details — useful for cross-state jurisdiction routing.
 * Puducherry's four enclaves span three different surrounding states
 * (Tamil Nadu, Kerala, Andhra Pradesh), which affects which state's
 * police force provides technical investigation support.
 */
export function getPuducherryEnclaves(): UTEnclave[] {
  return PUDUCHERRY_UT_PROFILE.enclaves;
}export default {
  profile: PUDUCHERRY_UT_PROFILE,
  cyberPoliceStations: PUDUCHERRY_CYBER_CRIME_STATIONS,
  stationsByPincode: PUDUCHERRY_STATIONS_BY_PINCODE,
  stationsByState: PUDUCHERRY_STATIONS_BY_STATE,
  stationsByDistrict: PUDUCHERRY_STATIONS_BY_DISTRICT,
};
