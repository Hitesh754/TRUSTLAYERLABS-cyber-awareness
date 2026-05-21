export type Detection = {
  type: string;
  confidence: number; // 0-1
  summary: string;
  guidance: string[];
};

const patterns: { type: string; re: RegExp; summary: string; guidance: string[] }[] = [
  {
    type: 'otp-request',
    re: /\b(otp|one[- ]time pass(code)?|verification code)\b/i,
    summary: 'Requesting OTP or verification code',
    guidance: ['Never share OTPs', 'Do not provide codes over chat or phone', 'Report if asked by unknown person'],
  },
  {
    type: 'urgent-action',
    re: /\b(immediate|urgent|act now|verify your account|account locked|suspend)\b/i,
    summary: 'Urgent-sounding request to take action',
    guidance: ['Do not rush, verify the sender', 'Contact bank/support via official channels', 'Do not click links or share credentials'],
  },
  {
    type: 'bank-credential',
    re: /\b(bank|account number|ifsc|upi id|pin|netbanking|mPIN)\b/i,
    summary: 'Requesting bank or credential information',
    guidance: ['Never share PINs or passwords', 'Banks will not ask for full credentials via chat'],
  },
  {
    type: 'payment-collect',
    re: /\b(collect request|scan to pay|scan qr|scan this qr|upi collect|collect request)\b/i,
    summary: 'UPI or payment collect request',
    guidance: ['Verify the payee before accepting collect requests', 'Do not approve unknown requests', 'Use official bank app features to cancel/verify'],
  },
  {
    type: 'link-phishing',
    re: /https?:\/\//i,
    summary: 'Contains link(s)',
    guidance: ['Do not click unfamiliar links', 'Check link domain carefully', 'Open official app/website directly instead'],
  },
  {
    type: 'upi-collect',
    re: /\b(upi|bharat qr|bhim|pay now|request money|collect money|money request)\b/i,
    summary: 'UPI / payment request language',
    guidance: ['Do not approve unknown collect requests', 'Verify the exact payee before sending money', 'Use your bank app or official UPI app to confirm'],
  },
  {
    type: 'qr-scam',
    re: /\b(qr|scan the code|scan this code|qr code)\b/i,
    summary: 'QR code scanning prompt',
    guidance: ['Never scan a QR code to receive money', 'Check who shared the QR code and why', 'A QR scan can initiate payment and not receive it'],
  },
  {
    type: 'screen-share',
    re: /\b(screen share|remote access|anydesk|teamviewer|remote support)\b/i,
    summary: 'Remote access / screen sharing request',
    guidance: ['Never share screen for banking support from strangers', 'Do not install remote access tools unless verified', 'Disconnect and contact official support'],
  },
  {
    type: 'fake-job',
    re: /\b(job|interview|offer letter|salary advance|recruiter|verification fee)\b/i,
    summary: 'Job or fee scam language',
    guidance: ['Do not pay any upfront fee for a job', 'Verify recruiter identity through official company channels', 'Be careful with fake offer letters and WhatsApp jobs'],
  },
  {
    type: 'social-engineering',
    re: /\b(congratulations|you have won|prize|claim|lottery)\b/i,
    summary: 'Prize/offer scam language',
    guidance: ['Be skeptical of unsolicited prizes', 'Do not share personal info or pay fees to claim'],
  },
];

export function detectScam(message: string): Detection | null {
  const checks = patterns.map((p) => ({ p, matches: p.re.test(message) }));
  const matched = checks.filter((c) => c.matches).map((c) => c.p);
  if (matched.length === 0) return null;

  const text = message.toLowerCase();
  const hasMoney = /\b(money|pay|payment|transfer|send|deposit|refund|collect)\b/.test(text);
  const hasUrgency = /\b(urgent|immediate|now|today|quick|hurry|last chance|act now)\b/.test(text);
  const hasCredential = /\b(otp|pin|password|cvv|upi pin|net banking|account|card number)\b/.test(text);
  const scoreBoost = [hasMoney, hasUrgency, hasCredential].filter(Boolean).length * 0.12;

  // crude confidence: patterns + context boosts, capped
  const confidence = Math.min(0.97, 0.38 + matched.length * 0.18 + scoreBoost);
  const primary = matched[0];
  const guidance = Array.from(new Set(primary.guidance.concat(...matched.slice(1).map((m) => m.guidance))));

  return {
    type: primary.type,
    confidence,
    summary: primary.summary,
    guidance,
  };
}

export function ruleBasedReply(message: string) {
  const det = detectScam(message);
  if (!det) return null;
  const lines = [`⚠️ Possible scam signal detected: ${det.summary}.`, `Confidence: ${Math.round(det.confidence * 100)}%.`, '', 'Recommended steps:'];
  det.guidance.forEach((g, i) => lines.push(`${i + 1}. ${g}`));
  lines.push('', 'If this looks urgent or financial, stop interacting immediately.', 'Call 1930 or report at cybercrime.gov.in');
  return lines.join('\n');
}

export {};
