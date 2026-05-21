type KnowledgeChunk = {
  id: string;
  title: string;
  text: string;
  source: string;
};

const knowledgeBase: KnowledgeChunk[] = [
  {
    id: 'cyber-awareness-overview',
    title: 'Cyber awareness overview',
    source: 'PDF guide',
    text: 'The platform teaches cyber threats, scams, cyber laws, reporting, digital safety best practices, and AI-powered guidance for awareness and prevention.',
  },
  {
    id: 'phishing',
    title: 'Phishing awareness',
    source: 'PDF guide',
    text: 'Phishing scams use fake emails, SMS, calls, and websites to steal credentials, OTPs, card details, and account access. Always verify sender identity and links before acting.',
  },
  {
    id: 'upi-fraud',
    title: 'UPI fraud awareness',
    source: 'PDF guide',
    text: 'UPI fraud often uses collect requests, fake refunds, remote access, or misleading payment prompts. Never approve unknown requests and never share UPI PIN or OTP.',
  },
  {
    id: 'qr-scam',
    title: 'QR code scam awareness',
    source: 'PDF guide',
    text: 'QR scams trick users into scanning a code that may trigger payment or reveal payment details. A QR code should be treated as a payment action, not a way to receive money.',
  },
  {
    id: 'social-media-scams',
    title: 'Social media scams',
    source: 'PDF guide',
    text: 'Fake profiles, lottery messages, job offers, investment claims, and romance scams are common on WhatsApp, Instagram, Facebook, and Telegram.',
  },
  {
    id: 'deepfake',
    title: 'Deepfake awareness',
    source: 'PDF guide',
    text: 'Deepfakes can be used for blackmail, misinformation, and fraud. Check for mismatched audio, odd lip movement, or unusual urgency before trusting a video message.',
  },
  {
    id: 'identity-theft',
    title: 'Identity theft awareness',
    source: 'PDF guide',
    text: 'Identity theft can involve Aadhaar, PAN, SIM, bank credentials, email access, or social profile takeover. Protect documents and report misuse quickly.',
  },
  {
    id: 'password-mfa',
    title: 'Password and MFA guidance',
    source: 'PDF guide',
    text: 'Use strong unique passwords and multi-factor authentication. Never reuse passwords across banking, email, and social accounts.',
  },
  {
    id: 'reporting',
    title: 'Incident reporting guidance',
    source: 'PDF guide',
    text: 'If money, credentials, or account access are involved, stop interacting, preserve evidence, call 1930, and report at cybercrime.gov.in.',
  },
  {
    id: 'law-module',
    title: 'Indian cyber law module',
    source: 'PDF guide',
    text: 'The platform should explain the IT Act, IPC/BNS cyber-related sections, legal rights of victims, punishments, and reporting procedures in simple language.',
  },
];

function tokenize(text: string) {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

function scoreChunk(queryTokens: string[], chunk: KnowledgeChunk) {
  const textTokens = tokenize(`${chunk.title} ${chunk.text}`);
  const frequency = new Map<string, number>();
  for (const token of textTokens) {
    frequency.set(token, (frequency.get(token) ?? 0) + 1);
  }

  let score = 0;
  for (const token of queryTokens) {
    if (frequency.has(token)) {
      score += 1 + Math.min(frequency.get(token) ?? 0, 3) * 0.2;
    }
  }

  return score;
}

export function searchKnowledgeBase(query: string) {
  const queryTokens = tokenize(query);
  return knowledgeBase
    .map((chunk) => ({ ...chunk, score: scoreChunk(queryTokens, chunk) }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

export function buildKnowledgeContext(query: string) {
  const hits = searchKnowledgeBase(query);
  if (hits.length === 0) {
    return 'No direct local knowledge match was found. Use general cyber safety guidance and ask one follow-up if needed.';
  }

  return hits
    .map((hit, index) => `${index + 1}. ${hit.title} (${hit.source}): ${hit.text}`)
    .join('\n\n');
}
