import type { EntityExtractionResult, ExtractedEntities } from '../../types/entity.types';

const PATTERNS = {
  /** UPI VPA: user@bankhandle */
  upiId: /\b[a-zA-Z0-9._-]{2,256}@[a-zA-Z][a-zA-Z0-9.-]{2,}\b/g,
  /** Indian mobile: +91, 91, or leading 0 + 10 digits */
  phone: /(?:\+91[\s-]?|91[\s-]?|0)?[6-9]\d{9}\b/g,
  /** UTR / RRN labels or 12+ digit refs after UTR keyword */
  utrLabeled: /\bUTR[:\s#-]*([A-Z0-9]{10,22})\b/gi,
  utrNumeric: /\b(?:UTR|RRN|REF)[:\s#-]*(\d{10,20})\b/gi,
  ifsc: /\b[A-Z]{4}0[A-Z0-9]{6}\b/g,
  url: /https?:\/\/[^\s<>"{}|\\^`[\]]+/gi,
  email: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g,
  ethWallet: /\b0x[a-fA-F0-9]{40}\b/gi,
  btcLegacy: /\b(?:1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}\b/g,
  btcBech32: /\bbc1[a-zA-HJ-NP-Z0-9]{25,90}\b/g,
  tronWallet: /\bT[a-zA-HJ-NP-Z0-9]{33}\b/g,
} as const;

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values.map((v) => v.trim()).filter(Boolean))).sort();
}

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits.length === 10 ? digits : raw.trim();
}

function extractUtrIds(text: string): string[] {
  const found: string[] = [];
  for (const match of text.matchAll(PATTERNS.utrLabeled)) {
    if (match[1]) {
      found.push(match[1].toUpperCase());
    }
  }
  for (const match of text.matchAll(PATTERNS.utrNumeric)) {
    if (match[1]) {
      found.push(match[1]);
    }
  }
  return uniqueSorted(found);
}

function extractWalletAddresses(text: string): string[] {
  const wallets = [
    ...(text.match(PATTERNS.ethWallet) ?? []),
    ...(text.match(PATTERNS.btcLegacy) ?? []),
    ...(text.match(PATTERNS.btcBech32) ?? []),
    ...(text.match(PATTERNS.tronWallet) ?? []),
  ];
  return uniqueSorted(wallets);
}

function extractUpiIds(text: string, emails: string[]): string[] {
  const candidates = text.match(PATTERNS.upiId) ?? [];
  const emailSet = new Set(emails.map((e) => e.toLowerCase()));
  const upi = candidates.filter((vpa) => {
    const lower = vpa.toLowerCase();
    if (emailSet.has(lower)) {
      return false;
    }
    const handle = lower.split('@')[1] ?? '';
    return !handle.includes('.com') && !handle.includes('.org') && !handle.includes('.net');
  });
  return uniqueSorted(upi);
}

export function createEmptyEntities(): ExtractedEntities {
  return {
    upiIds: [],
    phoneNumbers: [],
    utrIds: [],
    ifscCodes: [],
    urls: [],
    emails: [],
    walletAddresses: [],
  };
}

/** Deterministic regex extraction — no AI, no network. */
export function extractEntities(text: string): EntityExtractionResult {
  const source = text.trim();
  if (!source) {
    return { entities: createEmptyEntities(), sourceTextLength: 0 };
  }

  const emails = uniqueSorted(source.match(PATTERNS.email) ?? []);
  const entities: ExtractedEntities = {
    emails,
    upiIds: extractUpiIds(source, emails),
    phoneNumbers: uniqueSorted((source.match(PATTERNS.phone) ?? []).map(normalizePhone)),
    utrIds: extractUtrIds(source),
    ifscCodes: uniqueSorted((source.match(PATTERNS.ifsc) ?? []).map((c) => c.toUpperCase())),
    urls: uniqueSorted(source.match(PATTERNS.url) ?? []),
    walletAddresses: extractWalletAddresses(source),
  };

  return { entities, sourceTextLength: source.length };
}
