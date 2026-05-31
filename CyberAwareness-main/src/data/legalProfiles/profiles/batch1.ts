import type { LegalProfileCore } from '../types';
import { buildStandardReportingGuidance, NATIONAL_EMERGENCY_ACTIONS } from '../shared/reportingDefaults';

export const upiFraudProfileCore: LegalProfileCore = {
  id: 'UPI_FRAUD',
  crimeCategory: 'UPI_FRAUD',
  scamCategory: 'Financial-Fraud',
  displayName: 'UPI / Digital Payment Fraud',
  description: 'Fraud involving unauthorized UPI transfers, malicious collect requests, or compromised payment apps.',
  keywords: [
    'upi', 'gpay', 'phonepe', 'paytm', 'bhim', 'collect request', 'utr', 'rrn',
    'vpa', 'payment app', 'transfer', 'debited', 'unauthorized transaction', 'merchant',
  ],
  keywordWeights: { upi: 0.35, 'collect request': 0.25, utr: 0.15, paytm: 0.1, phonepe: 0.1 },
  evidenceRequirements: [
    { type: 'TRANSACTION_RECEIPT', label: 'UPI transaction receipt / SMS', required: true, description: 'Screenshot or SMS showing UTR/RRN, amount, date, and beneficiary VPA.' },
    { type: 'BANK_STATEMENT', label: 'Bank statement entry', required: true, description: 'Statement line showing the fraudulent debit.' },
    { type: 'SCREENSHOT', label: 'Payment app history', required: true, description: 'Full transaction detail screen from GPay, PhonePe, Paytm, or bank app.' },
    { type: 'CHAT_LOG', label: 'Chat with accused', required: false, description: 'WhatsApp/Telegram messages requesting payment.' },
    { type: 'SMS', label: 'Fraud SMS or call log', required: false, description: 'Messages or call records from the fraudster.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: NATIONAL_EMERGENCY_ACTIONS.financialUrgent,
  reportingGuidance: buildStandardReportingGuidance({
    timeSensitiveNote: 'Report to bank and 1930 within 1 hour for highest chance of transaction reversal.',
    extraChannels: [{ name: 'RBI Sachet Portal', url: 'https://sachet.rbi.org.in', when: 'For reporting unauthorized digital lending or payment fraud entities' }],
    extraTips: ['Include beneficiary UPI ID (VPA) and IFSC if bank transfer involved.'],
  }),
  interviewExtensions: [
    { id: 'upi-app', prompt: 'Which UPI app was used?', fieldKey: 'upiApp', inputType: 'select', required: true, options: ['GPay', 'PhonePe', 'Paytm', 'BHIM', 'Bank UPI', 'Other'] },
    { id: 'upi-vpa', prompt: 'Beneficiary UPI ID (VPA) if known', fieldKey: 'beneficiaryVpa', inputType: 'text', required: false },
    { id: 'upi-utr', prompt: 'UTR / RRN transaction reference', fieldKey: 'transactionRef', inputType: 'text', required: true },
  ],
  complaintTemplateId: 'upiFraud',
};

export const otpFraudProfileCore: LegalProfileCore = {
  id: 'OTP_FRAUD',
  crimeCategory: 'OTP_FRAUD',
  scamCategory: 'Identity-Crimes',
  displayName: 'OTP / Authentication Fraud',
  description: 'Fraud where OTPs or authentication codes were tricked, intercepted, or misused to access accounts.',
  keywords: [
    'otp', 'one time password', 'verification code', 'sms code', 'authentication',
    'sim', 'sim swap', 'bank otp', 'login code', '2fa',
  ],
  keywordWeights: { otp: 0.4, 'sim swap': 0.3, 'verification code': 0.2 },
  evidenceRequirements: [
    { type: 'SMS', label: 'OTP SMS messages', required: true, description: 'Screenshots of OTP SMS received or forwarded.' },
    { type: 'CALL_RECORDING', label: 'Fraud call recording', required: false, description: 'Recording of caller requesting OTP.' },
    { type: 'BANK_STATEMENT', label: 'Unauthorized transaction proof', required: true, description: 'Bank records showing post-OTP unauthorized activity.' },
    { type: 'SCREENSHOT', label: 'Account login alerts', required: false, description: 'Email/SMS alerts for new device login.' },
  ],
  urgencyLevel: 'critical',
  immediateActions: [
    ...NATIONAL_EMERGENCY_ACTIONS.financialUrgent,
    'Change all banking passwords and disable SMS-based OTP where app-based 2FA is available.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    timeSensitiveNote: 'If SIM was swapped, visit telecom store immediately with ID to restore service.',
    extraSteps: ['Report SIM swap to telecom provider and obtain incident reference number.'],
  }),
  interviewExtensions: [
    { id: 'otp-shared', prompt: 'Did you share OTP with anyone?', fieldKey: 'otpShared', inputType: 'select', required: true, options: ['Yes', 'No', 'Entered on fake website/app'] },
    { id: 'sim-issue', prompt: 'Did your SIM stop working before the fraud?', fieldKey: 'simIssue', inputType: 'select', required: true, options: ['Yes', 'No', 'Unsure'] },
  ],
  complaintTemplateId: 'otpFraud',
};

export const phishingProfileCore: LegalProfileCore = {
  id: 'PHISHING',
  crimeCategory: 'PHISHING',
  scamCategory: 'Phishing-Social-Engineering',
  displayName: 'Phishing & Social Engineering',
  description: 'Deceptive emails, SMS, calls, or websites designed to steal credentials or induce fraudulent payments.',
  keywords: [
    'phishing', 'fake link', 'smishing', 'vishing', 'spoof', 'login page', 'credential',
    'password', 'verify account', 'suspicious link', 'email', 'whatsapp link',
  ],
  keywordWeights: { phishing: 0.3, 'fake link': 0.25, smishing: 0.2, vishing: 0.15 },
  evidenceRequirements: [
    { type: 'EMAIL', label: 'Phishing email (with headers)', required: false, description: 'Export email with full headers if available.' },
    { type: 'SMS', label: 'Phishing SMS', required: false, description: 'Screenshot of fraudulent SMS with sender ID.' },
    { type: 'SCREENSHOT', label: 'Fake website/app screenshots', required: true, description: 'URL bar visible showing fraudulent domain.' },
    { type: 'OTHER', label: 'Malicious URL list', required: true, description: 'All URLs, domains, or APK links involved.' },
  ],
  urgencyLevel: 'high',
  immediateActions: [
    'Do not click further links; disconnect compromised device from sensitive accounts.',
    'Change passwords from a different trusted device.',
    'Report URL to Google Safe Browsing and file cybercrime.gov.in complaint.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraTips: ['Include full URL including path and query parameters.', 'Forward phishing SMS to 7726 (SPAM) where applicable.'],
  }),
  interviewExtensions: [
    { id: 'phish-vector', prompt: 'How were you contacted?', fieldKey: 'contactVector', inputType: 'multiselect', required: true, options: ['Email', 'SMS', 'WhatsApp', 'Phone call', 'Social media', 'Fake website'] },
    { id: 'credentials-entered', prompt: 'Did you enter credentials on a fake page?', fieldKey: 'credentialsEntered', inputType: 'select', required: true, options: ['Yes', 'No'] },
  ],
  complaintTemplateId: 'phishing',
};

export const investmentScamProfileCore: LegalProfileCore = {
  id: 'INVESTMENT_SCAM',
  crimeCategory: 'INVESTMENT_SCAM',
  scamCategory: 'Financial-Fraud',
  displayName: 'Investment / Ponzi Fraud',
  description: 'Fake trading platforms, guaranteed-return schemes, or Ponzi/pyramid investment fraud.',
  keywords: [
    'investment', 'trading', 'returns', 'profit', 'ponzi', 'pyramid', 'scheme',
    'stock tips', 'forex', 'binary', 'guaranteed', 'telegram group', 'multibagger',
  ],
  keywordWeights: { investment: 0.25, trading: 0.2, ponzi: 0.25, telegram: 0.15 },
  evidenceRequirements: [
    { type: 'TRANSACTION_RECEIPT', label: 'Payment receipts to platform', required: true, description: 'All transfers to accused accounts or platforms.' },
    { type: 'SCREENSHOT', label: 'Trading platform screenshots', required: true, description: 'Dashboard showing deposits, fake profits, withdrawal blocks.' },
    { type: 'CHAT_LOG', label: 'Telegram/WhatsApp group chats', required: true, description: 'Messages promising returns or blocking withdrawals.' },
    { type: 'PLATFORM_REPORT', label: 'App/website details', required: true, description: 'App package name, APK, or website URL.' },
  ],
  urgencyLevel: 'high',
  immediateActions: [
    'Stop all further deposits immediately — recovery scams often follow.',
    'Document all payment trails and platform access before accounts are deleted.',
    'File cybercrime.gov.in complaint with transaction and chat evidence.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraChannels: [{ name: 'SEBI SCORES Portal', url: 'https://scores.sebi.gov.in', when: 'If securities or registered investment products were involved' }],
    timeSensitiveNote: 'Withdrawal-blocking platforms often shut down within weeks — file complaint promptly.',
  }),
  interviewExtensions: [
    { id: 'platform-name', prompt: 'Name of investment platform or group', fieldKey: 'platformName', inputType: 'text', required: true },
    { id: 'total-invested', prompt: 'Total amount invested (INR)', fieldKey: 'totalInvested', inputType: 'number', required: true },
  ],
  complaintTemplateId: 'investmentScam',
};

export const cryptoFraudProfileCore: LegalProfileCore = {
  id: 'CRYPTO_FRAUD',
  crimeCategory: 'CRYPTO_FRAUD',
  scamCategory: 'Crypto-Fraud',
  displayName: 'Cryptocurrency Fraud',
  description: 'Wallet drains, fake exchanges, rug pulls, airdrop scams, and Web3 impersonation fraud.',
  keywords: [
    'crypto', 'bitcoin', 'ethereum', 'wallet', 'metamask', 'seed phrase', 'private key',
    'airdrop', 'nft', 'defi', 'token', 'blockchain', 'usdt', 'binance', 'web3', 'rug pull',
  ],
  keywordWeights: { wallet: 0.2, crypto: 0.2, 'seed phrase': 0.25, airdrop: 0.15, nft: 0.1 },
  evidenceRequirements: [
    { type: 'TRANSACTION_RECEIPT', label: 'Blockchain transaction hashes', required: true, description: 'TxIDs from block explorer showing transfers to accused wallets.' },
    { type: 'SCREENSHOT', label: 'Wallet/exchange screenshots', required: true, description: 'Screenshots of scam website, dApp, or exchange interface.' },
    { type: 'CHAT_LOG', label: 'Telegram/Discord communications', required: false, description: 'Messages from scam promoters or support.' },
    { type: 'OTHER', label: 'Wallet addresses involved', required: true, description: 'All sender and receiver wallet addresses.' },
  ],
  urgencyLevel: 'high',
  immediateActions: [
    'Revoke token approvals via blockchain explorer or wallet settings if applicable.',
    'Move remaining assets to a new wallet if seed phrase may be compromised.',
    'File cybercrime.gov.in complaint with wallet addresses and transaction hashes.',
  ],
  reportingGuidance: buildStandardReportingGuidance({
    extraTips: ['Copy transaction hashes from Etherscan, BscScan, or Tronscan as evidence.', 'Never share seed phrase in complaint — only note that it was compromised.'],
  }),
  interviewExtensions: [
    { id: 'wallet-type', prompt: 'Wallet or exchange used', fieldKey: 'walletType', inputType: 'text', required: true },
    { id: 'tx-hash', prompt: 'Primary transaction hash (if known)', fieldKey: 'txHash', inputType: 'text', required: false },
  ],
  complaintTemplateId: 'cryptoFraud',
};
