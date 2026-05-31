import type { ScamType } from '../scamDatabase';
import type { CrimeCategory } from './types';

/** Explicit scam ID → crime category overrides (highest priority). */
const EXPLICIT_SCAM_CRIME_MAP: Record<string, CrimeCategory> = {
  'upi-fraud': 'UPI_FRAUD',
  'otp-fraud': 'OTP_FRAUD',
  'qr-scam': 'QR_SCAM',
  'qr-code-crypto': 'CRYPTO_FRAUD',
  'qr-wallet-replacement-scam': 'QR_SCAM',
  'phishing': 'PHISHING',
  'spear-phishing': 'PHISHING',
  'smishing': 'PHISHING',
  'vishing': 'PHISHING',
  'investment-scam': 'INVESTMENT_SCAM',
  'ponzi-scheme': 'INVESTMENT_SCAM',
  'pyramid-scheme': 'INVESTMENT_SCAM',
  'telegram-signal-group': 'INVESTMENT_SCAM',
  'sim-swap-attack': 'SIM_SWAP',
  'sim-swap-fraud': 'SIM_SWAP',
  'deepfake-scam': 'DEEPFAKE_IMPERSONATION',
  'ai-voice-cloning': 'DEEPFAKE_IMPERSONATION',
  'deepfake-video-scam': 'DEEPFAKE_IMPERSONATION',
  'identity-theft': 'IDENTITY_THEFT',
  'aadhaar-scam': 'IDENTITY_THEFT',
  'kyc-fraud': 'IDENTITY_THEFT',
  'credential-theft': 'IDENTITY_THEFT',
  'data-breach': 'DATA_BREACH',
  'data-theft': 'DATA_BREACH',
  'fake-job': 'JOB_SCAM',
  'work-from-home': 'JOB_SCAM',
  'sextortion': 'SEXTORTION',
  'sextortion-cyber': 'SEXTORTION',
  'revenge-porn': 'SEXTORTION',
  'cyber-stalking': 'CYBER_STALKING',
  'cyber-bullying': 'CYBER_STALKING',
  'online-harassment': 'CYBER_STALKING',
  'ransomware': 'HACKING_UNAUTHORIZED_ACCESS',
  'malware': 'HACKING_UNAUTHORIZED_ACCESS',
  'password-attack': 'HACKING_UNAUTHORIZED_ACCESS',
  'child-exploitation': 'SEXTORTION',
  'human-trafficking': 'OTHER',
  'cyber-terrorism': 'HACKING_UNAUTHORIZED_ACCESS',
  'dark-web-crime': 'HACKING_UNAUTHORIZED_ACCESS',
  'hacktivism': 'HACKING_UNAUTHORIZED_ACCESS',
  'insider-trading': 'OTHER',
  'insurance-fraud': 'OTHER',
  'atm-skimming': 'UPI_FRAUD',
  'card-cloning': 'UPI_FRAUD',
  'bec': 'PHISHING',
  'whaling': 'PHISHING',
  'romance-scam': 'IDENTITY_THEFT',
  'romance-scam-cyber': 'IDENTITY_THEFT',
  'fake-customer-care': 'UPI_FRAUD',
  'internet-banking-fraud': 'UPI_FRAUD',
  'social-engineering': 'PHISHING',
  'fake-loan-app': 'UPI_FRAUD',
  'supply-chain-attack': 'HACKING_UNAUTHORIZED_ACCESS',
  // High-confidence crypto / NFT / DeFi / technical mappings
  'fake-airdrop': 'CRYPTO_FRAUD',
  'fake-crypto-exchange': 'CRYPTO_FRAUD',
  'seed-phrase-theft': 'CRYPTO_FRAUD',
  'crypto-giveaway-fraud': 'CRYPTO_FRAUD',
  'defi-liquidity-scam': 'CRYPTO_FRAUD',
  'nft-minting-scam': 'CRYPTO_FRAUD',
  'fake-staking-platform': 'CRYPTO_FRAUD',
  'nft-rug-pull': 'CRYPTO_FRAUD',
  'fake-ico': 'CRYPTO_FRAUD',
  'cross-chain-bridge-scam': 'CRYPTO_FRAUD',
  'crypto-recovery-scam': 'CRYPTO_FRAUD',
  'malware-crypto-clipper': 'CRYPTO_FRAUD',
  'fake-wallet-update': 'CRYPTO_FRAUD',
  'ai-trading-bot': 'CRYPTO_FRAUD',
  'clipboard-hijacking': 'CRYPTO_FRAUD',
  'crypto-romance': 'CRYPTO_FRAUD',
  'fake-blockchain-project': 'CRYPTO_FRAUD',
  'metaverse-investment': 'CRYPTO_FRAUD',
  'crypto-tax-scam': 'CRYPTO_FRAUD',
  'stablecoin-collapse': 'CRYPTO_FRAUD',
  'dusting-attack': 'CRYPTO_FRAUD',
  // Technical / exploit mappings
  'flash-loan-attack': 'HACKING_UNAUTHORIZED_ACCESS',
  'smart-contract-exploit': 'HACKING_UNAUTHORIZED_ACCESS',
  'crypto-mining-malware': 'HACKING_UNAUTHORIZED_ACCESS',
};

interface RulePattern {
  pattern: RegExp;
  category: CrimeCategory;
  weight: number;
}

const INFERENCE_RULES: RulePattern[] = [
  { pattern: /sextortion|revenge-porn|blackmail|intimate|webcam.?trap/i, category: 'SEXTORTION', weight: 10 },
  { pattern: /cyber-stalk|cyber-bull|online-harass|stalking/i, category: 'CYBER_STALKING', weight: 9 },
  { pattern: /deepfake|voice.?clon|ai.?voice|video.?scam/i, category: 'DEEPFAKE_IMPERSONATION', weight: 9 },
  { pattern: /sim.?swap|duplicate.?sim/i, category: 'SIM_SWAP', weight: 9 },
  { pattern: /\botp\b|one.?time.?password/i, category: 'OTP_FRAUD', weight: 8 },
  { pattern: /\bupi\b|phonepe|paytm|gpay|bhim|collect.?request/i, category: 'UPI_FRAUD', weight: 8 },
  { pattern: /qr.?scam|qr.?code|qr.?wallet|qr.?replacement/i, category: 'QR_SCAM', weight: 7 },
  { pattern: /qr.?code.?crypto/i, category: 'CRYPTO_FRAUD', weight: 7 },
  { pattern: /fake.?job|work.?from.?home|recruitment|offer.?letter/i, category: 'JOB_SCAM', weight: 7 },
  { pattern: /data.?breach|data.?theft|credential.?leak|privacy.?breach/i, category: 'DATA_BREACH', weight: 7 },
  { pattern: /ransomware|malware|trojan|keylog|rootkit|zero.?day|sql.?inject|xss|ddos|hacking|unauthorized.?access/i, category: 'HACKING_UNAUTHORIZED_ACCESS', weight: 7 },
  { pattern: /crypto|bitcoin|wallet|blockchain|nft|defi|web3|token|airdrop|metamask|seed.?phrase/i, category: 'CRYPTO_FRAUD', weight: 6 },
  { pattern: /investment|ponzi|pyramid|trading.?bot|forex|multibagger|telegram.?signal/i, category: 'INVESTMENT_SCAM', weight: 6 },
  { pattern: /phish|smish|vish|spoof|spear.?phish|bec|social.?engineer/i, category: 'PHISHING', weight: 6 },
  { pattern: /identity|aadhaar|pan.?card|kyc|impersonat|credential/i, category: 'IDENTITY_THEFT', weight: 5 },
  { pattern: /atm.?skim|card.?clon|banking.?fraud|loan.?app/i, category: 'UPI_FRAUD', weight: 4 },
];

function scoreCategoryFromText(text: string): Map<CrimeCategory, number> {
  const scores = new Map<CrimeCategory, number>();
  for (const rule of INFERENCE_RULES) {
    if (rule.pattern.test(text)) {
      scores.set(rule.category, (scores.get(rule.category) ?? 0) + rule.weight);
    }
  }
  return scores;
}

function inferFromScamCategory(scam: ScamType): CrimeCategory {
  switch (scam.category) {
    case 'Crypto-Fraud':
      return 'CRYPTO_FRAUD';
    case 'Technical-Attacks':
      return 'HACKING_UNAUTHORIZED_ACCESS';
    case 'Identity-Crimes':
      return 'IDENTITY_THEFT';
    case 'Financial-Fraud':
      return 'UPI_FRAUD';
    case 'Phishing-Social-Engineering':
      return 'PHISHING';
    default:
      return 'OTHER';
  }
}

/**
 * Resolves crime category for any scam database entry using explicit map,
 * pattern rules, then scam category fallback.
 */
export function inferCrimeCategoryFromScam(scam: ScamType): CrimeCategory {
  const explicit = EXPLICIT_SCAM_CRIME_MAP[scam.id];
  if (explicit) {
    return explicit;
  }

  const text = [
    scam.id,
    scam.name,
    scam.description,
    ...scam.commonIndicators,
    ...(scam.examples ?? []),
  ].join(' ');

  const scores = scoreCategoryFromText(text);
  if (scores.size === 0) {
    return inferFromScamCategory(scam);
  }

  let best: CrimeCategory = inferFromScamCategory(scam);
  let bestScore = 0;
  for (const [category, score] of scores) {
    if (score > bestScore) {
      bestScore = score;
      best = category;
    }
  }
  return best;
}

export function inferCrimeCategoryFromScamId(
  scamId: string,
  getScam: (id: string) => ScamType | undefined,
): CrimeCategory | undefined {
  const scam = getScam(scamId);
  if (!scam) {
    return undefined;
  }
  return inferCrimeCategoryFromScam(scam);
}

export { EXPLICIT_SCAM_CRIME_MAP };
