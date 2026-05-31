import type { CaseStudy } from './types';
import { CaseStudyCategory, CaseStudySeverity } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'CS001',
    title: 'UPI Refund Scam — Fake Merchant Refund Requests',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Victim receives a message claiming a duplicate UPI payment; attacker convinces victim to initiate a “refund” which is actually a transfer to the attacker.',
    scenario:
      'A user receives an SMS/WhatsApp message from a spoofed merchant number saying a duplicate payment was detected. The message instructs the user to open their UPI app and send a small verification amount or click a link to process a refund. The attacker then instructs the user to enter an OTP or approve a money request, which results in funds transferred to the attacker’s account.',
    timeline: [
      { time: '2025-09-01T09:12:00Z', description: 'User makes legitimate payment to merchant.' },
      { time: '2025-09-01T10:00:00Z', description: 'User receives spoofed merchant message about duplicate payment.' },
      { time: '2025-09-01T10:05:00Z', description: 'User follows instructions; attacker requests OTP/UPI approval.' },
      { time: '2025-09-01T10:08:00Z', description: 'Funds are transferred from user to attacker.' },
      { time: '2025-09-02T11:00:00Z', description: 'User notices missing balance and reports to bank.' },
    ],
    warningSigns: [
      { sign: 'Unsolicited refund message', details: 'Message from merchant asking for action without prior communication.' },
      { sign: 'Requests for OTP or approval', details: 'Legitimate refunds do not require OTPs from the payer.' },
      { sign: 'Urgent pressure to act', details: 'Scammers often create urgency to prevent verification.' },
    ],
    preventionTips: [
      { tip: 'Do not share OTPs or approve UPI requests initiated by others', audience: 'end-user', priority: 1 },
      { tip: 'Contact the merchant using official contact details before taking action', audience: 'end-user' },
      { tip: 'Enable UPI app notifications and check transaction history directly in the app', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Immediately block the UPI handle in your banking app and notify your bank', expectedOutcome: 'Bank places temporary hold and investigates.' },
      { step: 'File an online complaint at the national cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' }, expectedOutcome: 'Formal FIR/acknowledgment may be generated.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating and dishonestly inducing delivery of property', jurisdiction: 'India', link: 'https://indiacode.nic.in' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation by using computer resource', jurisdiction: 'India', link: 'https://meity.gov.in' },
    ],
    sourceType: 'news',
    sources: [
      { title: 'UPI refund scams rise in 2025', url: 'https://example-news/upi-refund-scam-2025', type: 'news', publishedAt: '2025-09-03' },
    ],
    tags: ['upi', 'refund', 'social_engineering', 'payments'],
    createdAt: '2025-09-05T08:00:00Z',
    updatedAt: '2025-09-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS002',
    title: 'QR Code Scam — Malicious QR Redirect',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Scammer replaces a legitimate QR code (e.g., at a shop or online) with a malicious one that directs payments to attacker-controlled accounts.',
    scenario:
      'A small vendor displays a printed QR code. An attacker swaps it with a lookalike QR that encodes the attacker’s UPI handle or a phishing URL. Customers scan and make payments believing they are paying the vendor; in some variants, scanning opens a phishing page that prompts for credentials or OTPs.',
    timeline: [
      { time: '2025-07-12', description: 'Attacker prints and places malicious QR at vendor stall.' },
      { time: '2025-07-12T15:30:00Z', description: 'Multiple customers scan QR and complete payments.' },
      { time: '2025-07-12T18:00:00Z', description: 'Vendor notices missing payments and investigates CCTV.' },
    ],
    warningSigns: [
      { sign: 'Different merchant name after scanning', details: 'QR directs to a different payee name than displayed.' },
      { sign: 'Scanned URL asks for credentials', details: 'QR opens a webpage requesting login/OTP.' },
    ],
    preventionTips: [
      { tip: 'Verify payee name and UPI handle in the payment app before approving', audience: 'end-user', priority: 1 },
      { tip: 'Vendors should secure QR codes physically and use tamper-evident stickers', audience: 'business' },
      { tip: 'Use dynamic QR codes tied to invoices for larger payments', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Collect evidence (photo of QR, time of payment, transaction IDs) and report to the vendor and bank', expectedOutcome: 'Bank can trace beneficiary account and freeze if fraudulent.' },
      { step: 'Report to local cyber unit and national portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft via digital means', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [
      { title: 'QR code tampering incidents — consumer advisory', url: 'https://example-report/qr-scam', type: 'report' },
    ],
    tags: ['qr', 'payments', 'merchant-safety'],
    createdAt: '2025-07-15T07:00:00Z',
    updatedAt: '2025-07-15T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS003',
    title: 'Sextortion Scam — Blackmail via Stolen Images',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attacker obtains intimate images (through social engineering or malware) and threatens to release them unless a ransom is paid — often asking for cryptocurrency.',
    scenario:
      'A victim meets someone online and shares private images. The other party later claims to be a collector or an attacker who obtained the images, and demands payment to prevent public exposure. In some cases, attackers use deepfake technology to create fake intimate clips and extort victims.',
    timeline: [
      { time: '2024-12-20', description: 'Initial online contact established.' },
      { time: '2025-01-10', description: 'Images shared in private chat.' },
      { time: '2025-02-05', description: 'Threatening message demanding payment arrives.' },
      { time: '2025-02-06', description: 'Victim pays once, attacker requests more — repeat extortion.' },
    ],
    warningSigns: [
      { sign: 'Pressure to share intimate content', details: 'Requests to move conversation off-platform or to private/ephemeral apps.' },
      { sign: 'Threats of public release', details: 'Immediate ransom demand or threats to expose content.' },
    ],
    preventionTips: [
      { tip: 'Avoid sharing intimate content; once shared, it can be copied', audience: 'end-user', priority: 1 },
      { tip: 'Enable two-factor authentication and secure cloud backups', audience: 'end-user' },
      { tip: 'Do not pay extortion demands; preserve evidence and contact law enforcement', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Preserve chat logs, screenshots, and payment receipts', notes: 'Do not delete messages; they are evidence.' },
      { step: 'Report to the police cyber cell and national cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Consider contacting platform provider to take down accounts/links', expectedOutcome: 'Content removed or account suspended.' },
    ],
    applicableLaws: [
      { code: 'Section 66E, IT Act 2000', name: 'Violation of privacy', jurisdiction: 'India' },
      { code: 'Section 500 IPC', name: 'Defamation (if public exposure causes harm)', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [
      { title: 'Sextortion advisory', url: 'https://example-advisory/sextortion', type: 'government' },
    ],
    tags: ['sextortion', 'extortion', 'privacy', 'deepfake'],
    createdAt: '2025-02-10T06:00:00Z',
    updatedAt: '2025-02-10T06:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS004',
    title: 'Deepfake Investment Scam — Fake Influencer Pitch',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Attackers use deepfake audio/video of a known influencer endorsing a fraudulent crypto investment, luring victims to invest in a fake token or platform.',
    scenario:
      'A convincing deepfake video of a celebrity/financial influencer promotes a new crypto token promising high returns. Victims are directed to a clone website and asked to connect wallets or transfer funds. Within days the token is delisted and controls are removed (rug pull).',
    timeline: [
      { time: '2025-03-01', description: 'Deepfake clip is circulated on social platforms.' },
      { time: '2025-03-01T14:00:00Z', description: 'Landing page and token contract addresses are published.' },
      { time: '2025-03-02T09:00:00Z', description: 'Users invest; attacker transfers funds to multiple wallets.' },
      { time: '2025-03-05', description: 'Token liquidity removed; investors cannot withdraw.' },
    ],
    warningSigns: [
      { sign: 'Too-good-to-be-true returns', details: 'Unrealistic guaranteed ROI claims.' },
      { sign: 'Unknown smart contract address', details: 'No audit, anonymous deployer, rushed deadline.' },
      { sign: 'Celebrity endorsement with unusual channels', details: 'Endorsement appears on low-trust pages or via DMs.' },
    ],
    preventionTips: [
      { tip: 'Verify endorsements on official channels and cross-check audio/video authenticity', audience: 'end-user' },
      { tip: 'Avoid connecting wallets to unknown sites; use hardware wallets for significant funds', audience: 'end-user', priority: 1 },
      { tip: 'Prefer audited contracts and well-known DEXs; check token liquidity and holders', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Document transaction hashes and screenshots', expectedOutcome: 'Blockchain evidence for tracing funds.' },
      { step: 'Report to cybercrime portal and local police; notify the exchange or marketplace', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [
      { title: 'Deepfake influencer scams escalate', url: 'https://example-news/deepfake-investments', type: 'news' },
    ],
    tags: ['deepfake', 'crypto', 'investment', 'rug-pull'],
    createdAt: '2025-03-06T10:00:00Z',
    updatedAt: '2025-03-06T10:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS005',
    title: 'Fake Job Scam — Upfront Fees and Identity Harvesting',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Victims are offered high-paying remote jobs that require payment for training or background verification; applicants end up sharing ID documents and paying fees with no job delivered.',
    scenario:
      'Scammers post fake job listings on classifieds and social media. Applicants applying for a well-paid role are asked to pay a “processing fee” or to submit scanned IDs and bank details. Once payment and documents are provided, the recruiter disappears and the documents are used for further fraud.',
    timeline: [
      { time: '2025-05-10', description: 'Applicant applies to listing and is contacted via WhatsApp.' },
      { time: '2025-05-11', description: 'Applicant requested to pay a training fee and upload ID.' },
      { time: '2025-05-14', description: 'After payment, contact is lost; documents used for KYC fraud elsewhere.' },
    ],
    warningSigns: [
      { sign: 'Upfront fees for employment', details: 'Legitimate employers rarely ask for payments.' },
      { sign: 'Requests for scanned identity and bank details early', details: 'KYC should occur through verified portals under employment contracts.' },
    ],
    preventionTips: [
      { tip: 'Verify job postings on the employer’s official website and HR email domains', audience: 'jobseeker' },
      { tip: 'Never pay fees to secure a job; ask for a written offer on company letterhead', audience: 'jobseeker' },
      { tip: 'Redact unnecessary identity fields when sharing documents', audience: 'jobseeker' },
    ],
    reportingSteps: [
      { step: 'Report the listing to the platform and gather chat/payment evidence' },
      { step: 'File a police complaint if identity documents are misused', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['jobs', 'social_engineering', 'identity_theft'],
    createdAt: '2025-05-20T08:00:00Z',
    updatedAt: '2025-05-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS006',
    title: 'SIM Swap Fraud — Account Takeover via Telco Social Engineering',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attacker convinces telecom support to port victim’s mobile number to a SIM controlled by the attacker, enabling account recovery and financial theft.',
    scenario:
      'Using leaked KYC data or forged documents, the attacker contacts the telco and impersonates the victim, claiming a lost phone and requesting SIM portability. Once the number is ported, OTPs and password resets for banking and social accounts are intercepted.',
    timeline: [
      { time: '2025-08-02', description: 'Attacker obtains personal data from previous breaches.' },
      { time: '2025-08-05T10:20:00Z', description: 'SIM port request processed by telco; number activated on attacker SIM.' },
      { time: '2025-08-05T10:35:00Z', description: 'Attacker initiates password resets and transfers from victim accounts.' },
      { time: '2025-08-05T11:00:00Z', description: 'Victim loses access and reports to bank and telco.' },
    ],
    warningSigns: [
      { sign: 'Unexpected loss of mobile network', details: 'Phone suddenly shows no service, SMS/OTP not received.' },
      { sign: 'Account recovery emails or SMS', details: 'Unsolicited password reset messages.' },
    ],
    preventionTips: [
      { tip: 'Set up carrier-level PINs or two-factor protection with the telco', audience: 'end-user', priority: 1 },
      { tip: 'Use authenticator apps or hardware tokens instead of SMS for 2FA', audience: 'end-user' },
      { tip: 'Monitor SIM and mobile activity and immediately report loss of service', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact your telco urgently to request a freeze or reclaim number', expectedOutcome: 'Telco may block further porting and investigate.' },
      { step: 'Notify banks and change credentials using alternative MFA', expectedOutcome: 'Limit further unauthorized transactions.' },
      { step: 'File FIR with cyber police', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [
      { title: 'SIM swap fraud advisory', url: 'https://example-report/sim-swap', type: 'report' },
    ],
    tags: ['sim-swap', '2fa', 'account-security'],
    createdAt: '2025-08-10T09:00:00Z',
    updatedAt: '2025-08-10T09:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS007',
    title: 'Crypto Rug Pull — Deceptive Liquidity Drain',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Developers of a new token remove liquidity and drain investor funds after aggressive promotion via Telegram/Discord and influencer posts.',
    scenario:
      'A token launch gains rapid traction through private groups. The token contract contains privileged functions allowing creators to move liquidity. After a large volume of buys, the creators call a function that removes liquidity from the pool and sends funds to anonymous wallets.',
    timeline: [
      { time: '2025-10-01', description: 'Token announcement and presale.' },
      { time: '2025-10-02', description: 'Public launch, heavy buy pressure from community.' },
      { time: '2025-10-04', description: 'Liquidity removed; price collapses.' },
    ],
    warningSigns: [
      { sign: 'Anonymous devs and no audits', details: 'Contracts are unaudited and ownership is not renounced.' },
      { sign: 'Huge promotion in closed groups', details: 'Pumping via private channels often precedes rug pulls.' },
    ],
    preventionTips: [
      { tip: 'Check contract ownership, renouncement status, and audits', audience: 'investor', priority: 1 },
      { tip: 'Limit exposure and avoid FOMO; move small test amounts first', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Record transaction hashes and suspect wallet addresses', expectedOutcome: 'Evidence for tracing on-chain.' },
      { step: 'Report to cybercrime portal and to any centralized exchange if funds hit an on-ramp', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [
      { title: 'Rug pull incident summary', url: 'https://example-news/rug-pull-2025', type: 'news' },
    ],
    tags: ['crypto', 'rug-pull', 'scam'],
    createdAt: '2025-10-08T08:30:00Z',
    updatedAt: '2025-10-08T08:30:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS008',
    title: 'WhatsApp Account Takeover — SIMless Recovery via Social Engineering',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Attacker uses social engineering and temporary access to intercept account verification codes and take over a user’s WhatsApp account.',
    scenario:
      'An attacker obtains the victim’s mobile number and requests WhatsApp activation. If the victim briefly receives the SMS or is tricked into sharing the verification code, the attacker activates WhatsApp on their device and can impersonate the victim to contacts.',
    timeline: [
      { time: '2025-11-20', description: 'Attacker initiates WhatsApp activation with victim’s number.' },
      { time: '2025-11-20T12:05:00Z', description: 'Victim receives code and forwards it after a social engineering prompt.' },
      { time: '2025-11-20T12:10:00Z', description: 'Attacker takes over account and sends malicious links to contacts.' },
    ],
    warningSigns: [
      { sign: 'Logged out unexpectedly', details: 'User is logged out of WhatsApp and cannot receive messages.' },
      { sign: 'Contacts receiving weird messages', details: 'Friends report suspicious messages from your account.' },
    ],
    preventionTips: [
      { tip: 'Enable two-step verification PIN in WhatsApp', audience: 'end-user', priority: 1 },
      { tip: 'Never share verification codes or forwards received SMS to anyone', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Use WhatsApp account recovery options and enable two-step verification', expectedOutcome: 'Reclaim account if possible.' },
      { step: 'Inform contacts about compromise and advise ignoring any links', expectedOutcome: 'Limit further spread.' },
      { step: 'Report to cyber police if impersonation causes fraud', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['whatsapp', 'account-takeover', 'social_engineering'],
    createdAt: '2025-11-22T07:00:00Z',
    updatedAt: '2025-11-22T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS009',
    title: 'Remote Access Scam — Support Technician Malware',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Victim is convinced to install remote access software under the pretext of technical support; attacker then steals credentials and files.',
    scenario:
      'User receives a call claiming to be from a well-known vendor or bank support. The caller asks the user to install a remote desktop app and grant access to fix an issue. Once installed, the attacker navigates the system, steals saved credentials, and initiates fraudulent transactions.',
    timeline: [
      { time: '2025-06-18T09:00:00Z', description: 'User receives phone call about suspicious activity.' },
      { time: '2025-06-18T09:15:00Z', description: 'User downloads a remote access tool and shares access code.' },
      { time: '2025-06-18T09:45:00Z', description: 'Attacker extracts credentials and moves funds.' },
    ],
    warningSigns: [
      { sign: 'Unsolicited support calls asking to install software', details: 'Legitimate support usually does not call and ask to install remote tools without prior ticket.' },
      { sign: 'Requests to disable antivirus or UAC prompts', details: 'Red flags indicating malicious intent.' },
    ],
    preventionTips: [
      { tip: 'Never grant remote access to callers; verify support requests through official channels', audience: 'end-user', priority: 1 },
      { tip: 'Keep OS and antivirus updated and use password managers', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Disconnect machine and change passwords from a separate device', expectedOutcome: 'Stop attacker access and secure accounts.' },
      { step: 'Scan device with trusted antivirus and report to cyber cell', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Computer-related offences (hacking)', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['remote-access', 'malware', 'support-scam'],
    createdAt: '2025-06-20T08:00:00Z',
    updatedAt: '2025-06-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS010',
    title: 'OTP Phishing Scam — Fake Bank Alert',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Victim receives a convincing fake bank SMS or WhatsApp message instructing them to share an OTP or click a link to “verify” a transaction.',
    scenario:
      'Attackers craft messages resembling official bank communication asking the user to verify a recent transaction by sharing an OTP or clicking a link. The link either captures OTPs or directs the user to a phishing page that asks for credentials. When the OTP is shared, attackers complete unauthorized transfers.',
    timeline: [
      { time: '2025-04-02T08:30:00Z', description: 'User receives a fake SMS about a transaction.' },
      { time: '2025-04-02T08:32:00Z', description: 'User replies or clicks and shares OTP.' },
      { time: '2025-04-02T08:35:00Z', description: 'Attackers use OTP to complete transaction.' },
    ],
    warningSigns: [
      { sign: 'OTP request via chat or SMS', details: 'Banks never ask for OTP sharing.' },
      { sign: 'Shortened or suspicious links', details: 'Phishing pages often use URL shorteners or lookalike domains.' },
    ],
    preventionTips: [
      { tip: 'Never share OTPs; treat them as secrets', audience: 'end-user', priority: 1 },
      { tip: 'Use app-based approvals instead of SMS OTP when available', audience: 'end-user' },
      { tip: 'Validate sender numbers and domain names before clicking links', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Immediately contact bank to reverse transactions and lodge a complaint', expectedOutcome: 'Bank initiates fraud investigation.' },
      { step: 'Report phishing message to the platform and to cyber authorities', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C/66D, IT Act 2000', name: 'Identity theft/cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [
      { title: 'OTP phishing cases trend report', url: 'https://example-news/otp-phishing', type: 'news' },
    ],
    tags: ['otp', 'phishing', 'banking'],
    createdAt: '2025-04-05T07:30:00Z',
    updatedAt: '2025-04-05T07:30:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS011',
    title: 'UPI Mandate Scam — Refund Link Leads to Attacker Collecting Funds',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary: 'Victim clicks a refund link that initiates a peer-to-peer collect request which the victim approves thinking it is a refund.',
    scenario: 'A user receives an email claiming a payment failed and a refund link is provided. The link opens a page that instructs the user to approve a UPI collect request for a small amount as verification. The request is actually to the attacker’s handle and the user approves, enabling larger transfers later.',
    timeline: [
      { time: '2025-09-10T09:00:00Z', description: 'User receives refund link via email.' },
      { time: '2025-09-10T09:05:00Z', description: 'User approves small collect request; attacker confirms verification.' },
      { time: '2025-09-10T10:00:00Z', description: 'Larger fraud transfers executed.' },
    ],
    warningSigns: [
      { sign: 'Unexpected refund link', details: 'Refund notifications should be verified via merchant portal.' },
      { sign: 'Requests to approve collect requests', details: 'Be wary of approving unknown collect requests.' },
    ],
    preventionTips: [
      { tip: 'Verify refunds in-app or with merchant support before approving actions', audience: 'end-user' },
      { tip: 'Do not approve collect requests from unknown parties', audience: 'end-user', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Contact bank and request a hold on suspicious beneficiary', expectedOutcome: 'Bank investigates beneficiary transactions.' },
      { step: 'Report to cybercrime portal and provide transaction IDs', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['upi', 'refund', 'collect'],
    createdAt: '2025-09-12T08:00:00Z',
    updatedAt: '2025-09-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS012',
    title: 'Deepfake Job Offer — Voice Clone HR Scam',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Attackers use voice-cloned HR personnel to convince candidates to share KYC and pay onboarding fees.',
    scenario: 'Applicants receive a video call with a cloned voice and face of a real HR executive offering a job and requesting scanned documents and a background check fee. Once documents and fees are provided, attackers use data for identity fraud.',
    timeline: [
      { time: '2025-09-01', description: 'Posting leads to interview scheduling.' },
      { time: '2025-09-03', description: 'Deepfake video interview conducted; candidate instructed to pay onboarding fee.' },
      { time: '2025-09-05', description: 'Documents provided; attacker misuses identity.' },
    ],
    warningSigns: [
      { sign: 'Requests payment for onboarding', details: 'Legitimate employers do not ask for upfront payments.' },
      { sign: 'Interview via non-standard channels', details: 'Verify interviewer via official corporate emails.' },
    ],
    preventionTips: [
      { tip: 'Confirm interviewer identity by contacting company HR through official channels', audience: 'jobseeker' },
      { tip: 'Never pay fees to secure you an offer', audience: 'jobseeker', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report identity misuse to police and platform hosting the job ad' },
      { step: 'Alert employer so they can warn other candidates', expectedOutcome: 'Employer may issue advisory.' },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['deepfake', 'jobs', 'identity_theft'],
    createdAt: '2025-09-08T07:00:00Z',
    updatedAt: '2025-09-08T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS013',
    title: 'Sextortion via Compromised Cloud Backup',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary: 'Attacker gains access to cloud backup and threatens to leak personal photos unless paid.',
    scenario: 'An account takeover through password reuse leads to access to cloud backups. The attacker identifies private photos and messages the victim demanding cryptocurrency to prevent publication.',
    timeline: [
      { time: '2025-01-15', description: 'Credentials from old breach used to access cloud backup.' },
      { time: '2025-01-16', description: 'Attacker identifies compromising images and sends extortion demand.' },
      { time: '2025-01-18', description: 'Victim reports to police and cloud provider; takedown actions requested.' },
    ],
    warningSigns: [
      { sign: 'Unauthorized login alerts', details: 'Alerts from cloud provider or email about new sign-ins.' },
      { sign: 'Strange requests for deletion or payment', details: 'Scammers often demand crypto and threaten exposure.' },
    ],
    preventionTips: [
      { tip: 'Use unique passwords and a password manager', audience: 'end-user', priority: 1 },
      { tip: 'Enable MFA and review third-party access to cloud accounts', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Preserve all messages and report to cloud provider for account suspension', expectedOutcome: 'Provider may snapshot and suspend attacker access.' },
      { step: 'File complaint with cyber police and do not pay ransom', expectedOutcome: 'Investigation initiated.' },
    ],
    applicableLaws: [
      { code: 'Section 66E, IT Act 2000', name: 'Violation of privacy', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['sextortion', 'cloud', 'privacy'],
    createdAt: '2025-01-20T09:00:00Z',
    updatedAt: '2025-01-20T09:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS014',
    title: 'SIM Swap for Crypto Wallet Takeover',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary: 'SIM swap used to reset exchange account passwords and drain crypto balances.',
    scenario: 'Attackers social-engineer the telco to port the victim’s number and then perform password resets on crypto exchanges using SMS OTP, transferring funds to mixer services.',
    timeline: [
      { time: '2025-08-20', description: 'Attacker performs SIM port.' },
      { time: '2025-08-20T10:15:00Z', description: 'Password reset and withdrawal initiated on exchange.' },
      { time: '2025-08-20T10:30:00Z', description: 'Funds moved to multiple wallets and into mixers.' },
    ],
    warningSigns: [
      { sign: 'Unexpected password reset emails', details: 'Emails for password changes you did not request.' },
      { sign: 'Loss of mobile service', details: 'Sudden no-service that precedes account takeover.' },
    ],
    preventionTips: [
      { tip: 'Use hardware keys or authenticator apps for critical accounts', audience: 'investor', priority: 1 },
      { tip: 'Register recovery contacts and enable account protection with telco', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact exchange immediately to freeze withdrawals', expectedOutcome: 'Exchange may be able to block outgoing transfers if acted quickly.' },
      { step: 'File cybercrime complaint with transaction evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['sim-swap', 'crypto', 'exchange'],
    createdAt: '2025-08-25T08:00:00Z',
    updatedAt: '2025-08-25T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS015',
    title: 'Ponzi Investment via Telegram Channel',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Telegram channel promotes staged returns and referral bonuses; early investors are paid from newer investors until collapse.',
    scenario: 'A private Telegram group advertises guaranteed returns and uses screenshots of fake payouts. Victims invest via bank transfers or wallets and are encouraged to recruit others; after growth stalls, admins disable withdrawals.',
    timeline: [
      { time: '2025-05-01', description: 'Group launched with promotions.' },
      { time: '2025-05-10', description: 'Rapid onboarding of investors via referral incentives.' },
      { time: '2025-06-15', description: 'Withdrawals delayed and then halted; group admins disappear.' },
    ],
    warningSigns: [
      { sign: 'Guaranteed high returns', details: 'No legitimate investment guarantees consistent high returns.' },
      { sign: 'Pressure to recruit', details: 'Referral bonuses to recruit new investors.' },
    ],
    preventionTips: [
      { tip: 'Avoid unregulated channels promising fixed returns; use regulated investment platforms', audience: 'investor', priority: 1 },
      { tip: 'Verify regulatory status of fund managers and platforms', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Collect chat logs and payment receipts for police complaint' },
      { step: 'Report the group to Telegram and the cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['telegram', 'investment', 'ponzi'],
    createdAt: '2025-06-20T09:00:00Z',
    updatedAt: '2025-06-20T09:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS016',
    title: 'Loan App Fraud — Fake Disbursement with Hidden Charges',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary: 'Unregulated loan app charges hidden fees and refuses disbursement while collecting personal data for further fraud.',
    scenario: 'Victim downloads a loan app that promises instant disbursal. After uploading KYC documents and paying a small processing fee, the app either demands more fees or disappears. Collected data is later used for identity theft.',
    timeline: [
      { time: '2025-04-10', description: 'User installs loan app and submits KYC.' },
      { time: '2025-04-11', description: 'Processing fee demanded and paid.' },
      { time: '2025-04-15', description: 'App stops responding; data reused for credit fraud.' },
    ],
    warningSigns: [
      { sign: 'Upfront fees for loans', details: 'Legitimate lenders deduct fees only after formal approval and disbursement.' },
      { sign: 'Poor app reviews and no regulator details', details: 'Check for RBI/regulated lender information.' },
    ],
    preventionTips: [
      { tip: 'Use only regulated lending apps and verify lender credentials', audience: 'borrower', priority: 1 },
      { tip: 'Do not provide more KYC than necessary; redact where possible', audience: 'borrower' },
    ],
    reportingSteps: [
      { step: 'Report to platform (Play Store/App Store) and file complaint with cyber police', expectedOutcome: 'App may be removed and investigation started.' },
      { step: 'Contact credit bureaus to flag potential identity misuse', expectedOutcome: 'Alerts placed on credit file.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['loan-app', 'fraud', 'identity_theft'],
    createdAt: '2025-04-20T07:00:00Z',
    updatedAt: '2025-04-20T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS017',
    title: 'UPI Social Engineering — Small Test Transfer Trap',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary: 'Fraudster asks for a small test transfer as verification and then uses the trust to request large transfers.',
    scenario: 'During a marketplace transaction, buyer sends a small “test” transfer to confirm beneficiary and later asks seller to refund via collect or send money, which routes to attacker accounts.',
    timeline: [
      { time: '2025-07-01', description: 'Initial negotiation on marketplace; buyer requests test transfer.' },
      { time: '2025-07-01T12:00:00Z', description: 'Seller sends small amount; buyer confirms.' },
      { time: '2025-07-02', description: 'Buyer requests additional transfers or refunds that benefit attacker.' },
    ],
    warningSigns: [
      { sign: 'Requests for test transfers', details: 'Confirm identity and payment flow before sending any funds.' },
    ],
    preventionTips: [
      { tip: 'Use escrow or platform payment options for marketplaces', audience: 'seller' },
      { tip: 'Avoid ad-hoc collect/refund flows with unknown parties', audience: 'seller', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report to marketplace and bank with transaction timestamps', expectedOutcome: 'Bank/platform may freeze suspect accounts.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['upi', 'marketplace', 'social_engineering'],
    createdAt: '2025-07-02T08:00:00Z',
    updatedAt: '2025-07-02T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS018',
    title: 'Deepfake Romance Scam — Synthetic Persona and Emotional Manipulation',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Scammer uses AI-generated photos and voice clips to build trust and then extort or defraud the victim.',
    scenario: 'Victim befriends a convincing online persona that uses deepfake media. Over weeks, the scammer requests money for emergencies or investments, eventually stealing significant funds.',
    timeline: [
      { time: '2025-02-01', description: 'Initial contact via dating app with high-quality synthetic profile.' },
      { time: '2025-02-15', description: 'Emotional rapport established; small requests for money begin.' },
      { time: '2025-03-10', description: 'Large transfer requested and sent; contact disappears.' },
    ],
    warningSigns: [
      { sign: 'Avoids in-person meetings', details: 'Consistently declines video calls or postpones meetings.' },
      { sign: 'Requests for money framed as emergencies', details: 'Scammers use emotional urgency.' },
    ],
    preventionTips: [
      { tip: 'Verify identities using reverse image search and insist on live video calls', audience: 'end-user', priority: 1 },
      { tip: 'Do not send money to people you have not met in person', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Preserve chat logs and report to platform and cyber police' },
      { step: 'Warn friends and potential co-victims in same groups', expectedOutcome: 'Limit spread.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['deepfake', 'romance', 'scam'],
    createdAt: '2025-03-15T08:00:00Z',
    updatedAt: '2025-03-15T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS019',
    title: 'WhatsApp QR Login Exploit — Session Hijack via Malicious Link',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Attacker tricks victim into scanning a malicious QR that grants web session access to the attacker.',
    scenario: 'Victim is instructed to scan a QR to view an important file. Scanning pairs the attacker’s WhatsApp Web session with the victim’s account, allowing the attacker to read and send messages.',
    timeline: [
      { time: '2025-06-01T10:00:00Z', description: 'Victim receives link claiming important document.' },
      { time: '2025-06-01T10:05:00Z', description: 'Victim scans QR and attacker gains session access.' },
      { time: '2025-06-01T10:30:00Z', description: 'Attacker uses account to solicit money from contacts.' },
    ],
    warningSigns: [
      { sign: 'Unexpected QR scanning prompts', details: 'Do not scan QR codes from untrusted senders.' },
      { sign: 'Contacts report messages not sent by you', details: 'Immediate sign of takeover.' },
    ],
    preventionTips: [
      { tip: 'Do not scan QR codes for messaging services unless you initiated the session', audience: 'end-user', priority: 1 },
      { tip: 'Enable security notifications and link approvals in the app', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Log out of all web sessions and enable two-step verification', expectedOutcome: 'Reclaim account and prevent re-login.' },
      { step: 'Inform contacts and report suspicious messages', expectedOutcome: 'Limit further scams.' },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['whatsapp', 'qr', 'session-hijack'],
    createdAt: '2025-06-05T07:00:00Z',
    updatedAt: '2025-06-05T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS020',
    title: 'Telegram Admin Impersonation — Investment Channel Scam',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Fake admin accounts impersonate real channel owners and publish malicious links or wallet addresses to defraud followers.',
    scenario: 'Scammers clone a popular investment channel and promote a token sale with fake admin posts. Followers send funds to attacker wallets believing it’s endorsed by the channel.',
    timeline: [
      { time: '2025-05-20', description: 'Fake admin created and begins posting.' },
      { time: '2025-05-21', description: 'Members send funds to promoted wallet addresses.' },
      { time: '2025-05-23', description: 'Real admins warn followers but losses already occurred.' },
    ],
    warningSigns: [
      { sign: 'Admin posts from new account', details: 'Verify admin account badges and joined date.' },
      { sign: 'Unverified wallets for payments', details: 'Official channels provide verified payment instructions.' },
    ],
    preventionTips: [
      { tip: 'Verify admin identity and cross-check announcements on official sites', audience: 'member', priority: 1 },
      { tip: 'Avoid sending funds to wallet addresses posted in chats without verification', audience: 'member' },
    ],
    reportingSteps: [
      { step: 'Report fake accounts to Telegram and preserve chat evidence' },
      { step: 'File complaint with cyber authorities with transaction hashes', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['telegram', 'investment', 'impersonation'],
    createdAt: '2025-05-25T07:00:00Z',
    updatedAt: '2025-05-25T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS021',
    title: 'Remote Access — RAT Installed via Fake Update',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Victim installs what appears to be an essential software update but installs a Remote Access Trojan (RAT) instead, enabling data theft.',
    scenario: 'A user downloads a fake update from a search result. The installer includes a RAT that starts a remote session and exfiltrates saved credentials and documents.',
    timeline: [
      { time: '2025-06-10', description: 'User searches for software update and downloads from a spoofed site.' },
      { time: '2025-06-10T09:15:00Z', description: 'Installer runs and RAT connects to attacker C2.' },
      { time: '2025-06-10T11:00:00Z', description: 'Attacker extracts credentials and initiates fraudulent activity.' },
    ],
    warningSigns: [
      { sign: 'Unexpected installer prompts', details: 'Be cautious of installers downloaded from search results.' },
      { sign: 'New processes connecting to unknown hosts', details: 'Monitor network connections and endpoint alerts.' },
    ],
    preventionTips: [
      { tip: 'Download updates only from official vendor sites', audience: 'end-user', priority: 1 },
      { tip: 'Use endpoint detection and keep backups', audience: 'IT/admin' },
    ],
    reportingSteps: [
      { step: 'Disconnect infected device and preserve disk image for forensics', expectedOutcome: 'Preserved evidence for investigation.' },
      { step: 'Report incident to cyber cell and notify affected services', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['malware', 'rat', 'remote-access'],
    createdAt: '2025-06-12T08:00:00Z',
    updatedAt: '2025-06-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS022',
    title: 'QR Scam — Phishing via Payment Link in Merchant Receipt',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary: 'A phishing link in a fake merchant receipt leads users to a page that requests bank details and OTP.',
    scenario: 'Users receive an email or SMS with a receipt and a “track payment” link that opens a phishing site. The site asks for bank details and OTP under the guise of verification.',
    timeline: [
      { time: '2025-07-20', description: 'Phishing SMS sent to many recipients.' },
      { time: '2025-07-20T09:30:00Z', description: 'Victims click the link and submit OTPs.' },
      { time: '2025-07-20T10:00:00Z', description: 'Unauthorized transactions post-OTP submission.' },
    ],
    warningSigns: [
      { sign: 'Unexpected receipts with links', details: 'Check sender and confirm with merchant.' },
      { sign: 'Requests for OTP on websites', details: 'OTP should not be entered into web forms.' },
    ],
    preventionTips: [
      { tip: 'Verify receipts via official merchant portals', audience: 'end-user', priority: 1 },
      { tip: 'Never enter OTPs on third-party pages', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report phishing link to platform and bank immediately', expectedOutcome: 'Banks investigate and may reverse charges.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['qr', 'phishing', 'payments'],
    createdAt: '2025-07-22T07:00:00Z',
    updatedAt: '2025-07-22T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS023',
    title: 'Job Portal Credential Harvesting — Fake Employer Login',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary: 'Scammers create fake employer login pages to collect applicant credentials and sell them.',
    scenario: 'Applicants are directed to an employer login page that mimics the real portal. Credentials are captured and later used to apply for loans or open accounts in the applicant’s name.',
    timeline: [
      { time: '2025-05-05', description: 'Fake portal live and advertised on job boards.' },
      { time: '2025-05-06', description: 'Applicants submit credentials and documents.' },
      { time: '2025-05-20', description: 'Credentials used for fraudulent KYC elsewhere.' },
    ],
    warningSigns: [
      { sign: 'Unfamiliar login URL', details: 'Check domain carefully and use bookmarks for official portals.' },
    ],
    preventionTips: [
      { tip: 'Access employer portals only from bookmarked/verified URLs', audience: 'jobseeker', priority: 1 },
      { tip: 'Use password managers to detect mismatched domains', audience: 'jobseeker' },
    ],
    reportingSteps: [
      { step: 'Report fake page to hosting provider and job portal' },
      { step: 'File police complaint if identity documents are misused' },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['jobs', 'phishing', 'credentials'],
    createdAt: '2025-05-10T07:00:00Z',
    updatedAt: '2025-05-10T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS024',
    title: 'Crypto Exchange Account Takeover via Phished API Key',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary: 'Attacker obtains API keys via phishing and executes automated withdrawals from exchange accounts.',
    scenario: 'Victim clicks a link to a fake exchange support page and pastes API keys into a form for "verification". Attacker uses those keys to withdraw funds programmatically.',
    timeline: [
      { time: '2025-09-01', description: 'Phishing email prompts user to verify API keys.' },
      { time: '2025-09-01T09:40:00Z', description: 'API key submitted and attacker extracts funds.' },
      { time: '2025-09-01T10:00:00Z', description: 'Victim notices missing balances and reports.' },
    ],
    warningSigns: [
      { sign: 'Requests for API keys', details: 'Never share API keys; treat them as secrets.' },
    ],
    preventionTips: [
      { tip: 'Use IP whitelisting and withdrawal whitelist features', audience: 'trader', priority: 1 },
      { tip: 'Rotate API keys and use read-only keys where possible', audience: 'trader' },
    ],
    reportingSteps: [
      { step: 'Contact exchange support immediately and disable API access', expectedOutcome: 'Exchange may block further trades.' },
      { step: 'Report to cybercrime portal with transaction evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['crypto', 'exchange', 'api'],
    createdAt: '2025-09-05T07:00:00Z',
    updatedAt: '2025-09-05T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS025',
    title: 'Loan App Aggressive Collections — Data Leak and Extortion',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Loan app leaks contacts and begins harassing borrowers and their contacts for repayment using abusive messages.',
    scenario: 'Unregulated loan app sells borrower contact lists; collectors harass debtors and their contacts via calls and messages, sometimes using threats and personal data obtained from the app.',
    timeline: [
      { time: '2025-07-01', description: 'Loan taken via app with poor privacy practices.' },
      { time: '2025-07-10', description: 'App data sold; collectors begin contacting borrower’s contacts.' },
      { time: '2025-07-15', description: 'Borrower reports harassment and data leak.' },
    ],
    warningSigns: [
      { sign: 'Aggressive collection calls to contacts', details: 'Collectors contacting family/friends with threats.' },
    ],
    preventionTips: [
      { tip: 'Use regulated lenders and read privacy terms', audience: 'borrower', priority: 1 },
      { tip: 'Limit permissions granted to loan apps', audience: 'borrower' },
    ],
    reportingSteps: [
      { step: 'File complaint with platform and cyber police and seek legal advice', expectedOutcome: 'Possible takedown and legal remedy.' },
    ],
    applicableLaws: [
      { code: 'Section 72, IT Act 2000', name: 'Breach of confidentiality and privacy', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['loan-app', 'privacy', 'harassment'],
    createdAt: '2025-07-20T07:00:00Z',
    updatedAt: '2025-07-20T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS026',
    title: 'Deepfake Political Impersonation — Fundraising Fraud',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Deepfake video of a political figure solicits donations to fake campaigns, funds routed to attackers.',
    scenario: 'A fabricated video goes viral asking supporters to donate to a campaign. Donors send money to attacker wallets or accounts that impersonate campaign finance portals.',
    timeline: [
      { time: '2025-10-10', description: 'Deepfake video shared widely.' },
      { time: '2025-10-10T12:00:00Z', description: 'Donations routed to attacker accounts.' },
      { time: '2025-10-11', description: 'Platform takedown requested but funds already moved.' },
    ],
    warningSigns: [
      { sign: 'Donation links not on official campaign site', details: 'Verify donation channels.' },
    ],
    preventionTips: [
      { tip: 'Confirm fundraising pages on official campaign websites and registered portals', audience: 'donor', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report to platform and cybercrime authorities with transaction evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['deepfake', 'fundraising', 'political'],
    createdAt: '2025-10-12T07:00:00Z',
    updatedAt: '2025-10-12T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS027',
    title: 'UPI Invoice Manipulation — Merchant Account Compromise',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Attacker compromises merchant backend and modifies invoice QR/UPI to attacker handle.',
    scenario: 'Merchant website admin account is compromised, and invoice pages updated so payments go to attacker-controlled UPI handles. Customers pay thinking it’s the merchant.',
    timeline: [
      { time: '2025-11-01', description: 'Merchant admin credentials compromised via phishing.' },
      { time: '2025-11-02', description: 'Invoices updated with attacker UPI handles.' },
      { time: '2025-11-03', description: 'Customers pay and merchant reports missing funds.' },
    ],
    warningSigns: [
      { sign: 'Mismatch between invoice and CRM records', details: 'Merchant should reconcile payments.' },
    ],
    preventionTips: [
      { tip: 'Secure admin portals with MFA and monitor integrity of invoices', audience: 'merchant', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Work with bank to trace beneficiary accounts and notify affected customers', expectedOutcome: 'Funds may be recovered if traced early.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['upi', 'merchant', 'invoice'],
    createdAt: '2025-11-05T07:00:00Z',
    updatedAt: '2025-11-05T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS028',
    title: 'Sextortion via Deepfake Video — Fabricated Evidence',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary: 'Attacker fabricates explicit deepfake videos and threatens exposure unless paid.',
    scenario: 'Using a small set of photos and voice samples, attackers produce a convincing deepfake video and use it to extort the victim for cryptocurrency.',
    timeline: [
      { time: '2025-02-01', description: 'Attacker collects public images and voice samples.' },
      { time: '2025-02-10', description: 'Deepfake video created and used for extortion.' },
      { time: '2025-02-12', description: 'Victim reports to cyber cell and platforms for takedown.' },
    ],
    warningSigns: [
      { sign: 'Unexpected compromising content online', details: 'Preserve copies and timestamps for investigation.' },
    ],
    preventionTips: [
      { tip: 'Limit public sharing of high-resolution images and voice samples', audience: 'end-user', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report to cyber police and request immediate takedown of content', expectedOutcome: 'Platforms remove content where possible.' },
    ],
    applicableLaws: [
      { code: 'Section 66E, IT Act 2000', name: 'Violation of privacy', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['deepfake', 'sextortion', 'privacy'],
    createdAt: '2025-02-15T07:00:00Z',
    updatedAt: '2025-02-15T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS029',
    title: 'Telegram Investment Bot Scam — Automated Pump-and-Dump',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Automated bot in Telegram groups promotes tokens and executes coordinated buys, manipulating price before dump.',
    scenario: 'Bots post timed buy signals and referral links; unsuspecting members buy and lose funds when price collapses after coordinated sell-offs.',
    timeline: [
      { time: '2025-09-15', description: 'Bot signals posted and buys executed by many users.' },
      { time: '2025-09-15T14:00:00Z', description: 'Price spikes and then collapses after coordinated sells.' },
      { time: '2025-09-16', description: 'Funds moved to mixers.' },
    ],
    warningSigns: [
      { sign: 'Coordinated buy signals from bot accounts', details: 'Automated trading calls in groups are high-risk.' },
    ],
    preventionTips: [
      { tip: 'Avoid trading on unverified signals and bots', audience: 'trader', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Collect bot logs and transaction evidence and report to platform and cyber police' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['telegram', 'crypto', 'bot'],
    createdAt: '2025-09-20T07:00:00Z',
    updatedAt: '2025-09-20T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS030',
    title: 'OTP Relay — Phishing + SIM-less Forwarding',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary: 'Phishing page captures OTP and relays it in real-time to attacker-controlled session to complete transactions.',
    scenario: 'Victim attempts to log in to service and is redirected to a phishing page that captures OTP. The attacker uses the OTP immediately to log in to the real service and transfer funds.',
    timeline: [
      { time: '2025-04-18T08:30:00Z', description: 'Victim clicks phishing link and enters credentials.' },
      { time: '2025-04-18T08:31:00Z', description: 'Phishing site requests OTP; attacker relays OTP to real site.' },
      { time: '2025-04-18T08:35:00Z', description: 'Unauthorized transfer executed.' },
    ],
    warningSigns: [
      { sign: 'Login flow interrupted by unusual redirect', details: 'Be cautious of intermediate pages during login.' },
      { sign: 'Requests for OTP on unfamiliar pages', details: 'OTP should be entered only into the official app.' },
    ],
    preventionTips: [
      { tip: 'Use app-based authentication and phishing-resistant MFA', audience: 'end-user', priority: 1 },
      { tip: 'Verify domain of login pages and use bookmarks for critical services', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report phishing site to browser vendors and the cybercrime portal', expectedOutcome: 'Phishing site blacklisted.' },
      { step: 'Contact bank/exchange to freeze transactions', expectedOutcome: 'Potential recovery of funds.' },
    ],
    applicableLaws: [
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['otp', 'phishing', 'relay'],
    createdAt: '2025-04-20T07:00:00Z',
    updatedAt: '2025-04-20T07:00:00Z',
    published: true,
    locale: 'en-IN',
  },
  {
    id: 'CS031',
    title: 'Digital Arrest Scam — Fake CBI Officer Demands Bail Payment',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Victim receives a video call from someone posing as a CBI/ED officer claiming a warrant is issued; victim is kept in "digital arrest" and coerced into transferring money to avoid fake legal action.',
    scenario:
      'A caller video-calls the victim posing as a government official (CBI/NCB/ED) and claims the victim\'s Aadhaar or phone number is linked to a drug trafficking or money laundering case. The caller insists the victim remain on call and not inform anyone — a so-called "digital arrest." Over hours to days, the victim is pressured into transferring large sums to avoid arrest.',
    timeline: [
      { time: '2025-03-10T10:00:00Z', description: 'Victim receives video call from person in fake uniform claiming to be CBI officer.' },
      { time: '2025-03-10T10:30:00Z', description: 'Victim is told to stay on call and not hang up or contact family.' },
      { time: '2025-03-10T14:00:00Z', description: 'Victim transfers ₹8 lakh to "government account" to avoid arrest.' },
      { time: '2025-03-11T09:00:00Z', description: 'Victim informs family and realizes fraud; reports to cyber police.' },
    ],
    warningSigns: [
      { sign: 'Video call from unknown "government official"', details: 'Authentic government agencies do not conduct legal proceedings over video calls.' },
      { sign: 'Instruction to stay on call and not contact family', details: 'Isolation tactic used to prevent victim from seeking help.' },
      { sign: 'Demand for immediate payment to avoid arrest', details: 'No legitimate agency demands money to avoid arrest over phone.' },
    ],
    preventionTips: [
      { tip: 'Hang up immediately; no government agency conducts arrests via video call', audience: 'end-user', priority: 1 },
      { tip: 'Inform a trusted family member or friend before taking any action', audience: 'end-user' },
      { tip: 'Verify any claimed legal matter by calling the official agency number', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call 1930 (National Cybercrime Helpline) immediately to report the incident', expectedOutcome: 'Authorities may freeze beneficiary accounts quickly.' },
      { step: 'File complaint at cybercrime.gov.in with call recordings and transaction details', contact: { url: 'https://www.cybercrime.gov.in' }, expectedOutcome: 'Formal FIR registered.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating and dishonestly inducing delivery of property', jurisdiction: 'India', link: 'https://indiacode.nic.in' },
      { code: 'Section 506 IPC', name: 'Criminal intimidation', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation using computer resource', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [
      { title: 'Digital arrest scams surge across India in 2025', url: 'https://example-news/digital-arrest-2025', type: 'news', publishedAt: '2025-03-15' },
    ],
    tags: ['digital-arrest', 'impersonation', 'social_engineering', 'government'],
    createdAt: '2025-03-16T08:00:00Z',
    updatedAt: '2025-03-16T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS032',
    title: 'Fake Customer Care Scam — Spoofed Helpline Number',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Scammers list fake customer care numbers on search engines; victims calling these are tricked into sharing OTPs or installing remote access apps.',
    scenario:
      'A victim searches for a bank or telecom helpline on a search engine and finds a fraudulent number listed above or near the official result. On calling, the "agent" asks the victim to share an OTP or install AnyDesk/TeamViewer for "account verification," leading to unauthorized transactions.',
    timeline: [
      { time: '2025-05-03T11:00:00Z', description: 'Victim searches for bank helpline online.' },
      { time: '2025-05-03T11:05:00Z', description: 'Victim calls fake number; agent asks for account number and OTP.' },
      { time: '2025-05-03T11:20:00Z', description: 'OTP shared; unauthorized transaction executed.' },
      { time: '2025-05-03T12:00:00Z', description: 'Victim notices debit alert and contacts real bank.' },
    ],
    warningSigns: [
      { sign: 'Customer care number found via search engine', details: 'Always get helpline numbers from the back of your debit/credit card or official bank website.' },
      { sign: 'Agent requests OTP or remote access installation', details: 'Legitimate agents never ask for these.' },
    ],
    preventionTips: [
      { tip: 'Source helpline numbers only from official bank websites or card back panels', audience: 'end-user', priority: 1 },
      { tip: 'Never share OTP or install remote access tools at an agent\'s request', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact real bank immediately to block account and reverse transaction', expectedOutcome: 'Bank initiates chargeback investigation.' },
      { step: 'File cybercrime complaint with screenshots of fake number', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [
      { title: 'Fake helpline scams via Google search', url: 'https://example-news/fake-helpline-2025', type: 'news', publishedAt: '2025-05-10' },
    ],
    tags: ['customer-care', 'helpline', 'social_engineering', 'otp'],
    createdAt: '2025-05-12T08:00:00Z',
    updatedAt: '2025-05-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS033',
    title: 'Screen Sharing Scam — Remote Takeover via Screen Mirror App',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Victim is asked to share screen via a legitimate screen-sharing app by a fraudster posing as bank support; attacker captures OTPs and executes transfers.',
    scenario:
      'Caller poses as a bank official and asks victim to download a screen-sharing app (e.g., AnyDesk, Screenshare) to "fix" an account issue. While the victim shares the screen, the attacker captures incoming OTPs and completes unauthorized fund transfers.',
    timeline: [
      { time: '2025-06-12T09:00:00Z', description: 'Victim receives call about suspicious activity in bank account.' },
      { time: '2025-06-12T09:10:00Z', description: 'Victim downloads AnyDesk and shares 9-digit code with caller.' },
      { time: '2025-06-12T09:20:00Z', description: 'Attacker observes OTP on screen and completes ₹2 lakh transfer.' },
    ],
    warningSigns: [
      { sign: 'Request to download screen sharing app', details: 'No bank or official support requires screen sharing.' },
      { sign: 'OTP visible on screen during session', details: 'OTP should be entered only on the official app.' },
    ],
    preventionTips: [
      { tip: 'Never share screen with unknown callers; end the call immediately', audience: 'end-user', priority: 1 },
      { tip: 'Uninstall screen sharing apps installed at a stranger\'s request and run a security scan', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Revoke screen sharing permission and uninstall the app immediately', expectedOutcome: 'Prevent further access.' },
      { step: 'Contact bank and change all credentials from a separate device', expectedOutcome: 'Limit attacker access to accounts.' },
      { step: 'File cybercrime complaint with app logs and call recordings', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Computer-related offences', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['screen-sharing', 'remote-access', 'banking', 'otp'],
    createdAt: '2025-06-15T08:00:00Z',
    updatedAt: '2025-06-15T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS034',
    title: 'Aadhaar KYC Scam — Fake UIDAI Agent Harvests Biometrics',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Fraudster poses as UIDAI or bank KYC agent and tricks victim into submitting fingerprint or OTP, enabling Aadhaar-based authentication fraud.',
    scenario:
      'Victim receives a call claiming Aadhaar needs to be re-verified or account will be suspended. The caller sends a link to a fake UIDAI portal where the victim enters OTP. The attacker uses the OTP to perform Aadhaar e-KYC authentication on financial services and opens fraudulent accounts or takes loans.',
    timeline: [
      { time: '2025-07-05T10:00:00Z', description: 'Victim receives call about Aadhaar deactivation.' },
      { time: '2025-07-05T10:10:00Z', description: 'Victim enters OTP on fake UIDAI link.' },
      { time: '2025-07-05T10:15:00Z', description: 'Attacker uses OTP to complete e-KYC for loan application in victim\'s name.' },
      { time: '2025-07-06T09:00:00Z', description: 'Victim discovers loan disbursed in their name.' },
    ],
    warningSigns: [
      { sign: 'Unsolicited call about Aadhaar deactivation', details: 'UIDAI does not call to deactivate Aadhaar over phone.' },
      { sign: 'Link to unfamiliar UIDAI-lookalike portal', details: 'Verify URL; official site is uidai.gov.in.' },
    ],
    preventionTips: [
      { tip: 'Lock Aadhaar biometrics via the official mAadhaar app when not in use', audience: 'end-user', priority: 1 },
      { tip: 'Never share Aadhaar OTP; verify any KYC request through official portals', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Lock Aadhaar biometrics immediately via mAadhaar or UIDAI portal', expectedOutcome: 'Prevents further authentication misuse.' },
      { step: 'File complaint with UIDAI and cyber police', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['aadhaar', 'kyc', 'identity_theft', 'biometrics'],
    createdAt: '2025-07-08T08:00:00Z',
    updatedAt: '2025-07-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS035',
    title: 'PAN Card Fraud — Fake Income Tax Portal Phishing',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Phishing email impersonating Income Tax Department asks users to update PAN details; credentials and PAN details harvested for financial fraud.',
    scenario:
      'Victims receive an official-looking email from a spoofed I-T Department address directing them to a fake incometax.gov.in lookalike. After logging in and "updating" PAN details, credentials are captured. Attackers use PAN and login data to file fraudulent refund claims or obtain loans.',
    timeline: [
      { time: '2025-03-25T08:00:00Z', description: 'Phishing email sent to thousands of taxpayers.' },
      { time: '2025-03-25T09:00:00Z', description: 'Victims log in to fake portal and submit PAN and password.' },
      { time: '2025-03-28T10:00:00Z', description: 'Fraudulent ITR filed claiming large refund in victim\'s PAN.' },
    ],
    warningSigns: [
      { sign: 'Email about urgent PAN update', details: 'I-T Department does not send unsolicited PAN update emails.' },
      { sign: 'Login URL not matching incometax.gov.in exactly', details: 'Check for subtle domain variations.' },
    ],
    preventionTips: [
      { tip: 'Access income tax portal only via bookmarked official URL', audience: 'taxpayer', priority: 1 },
      { tip: 'Enable email alerts and monitor ITR filing activity in the portal', audience: 'taxpayer' },
    ],
    reportingSteps: [
      { step: 'Change income tax portal password immediately and contact the helpdesk', expectedOutcome: 'Fraudulent ITR may be cancelled.' },
      { step: 'File cybercrime complaint with phishing email as evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['pan', 'phishing', 'income-tax', 'identity_theft'],
    createdAt: '2025-04-01T08:00:00Z',
    updatedAt: '2025-04-01T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS036',
    title: 'OLX Scam — Fake Army Officer Buyer Sends Fraudulent QR',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fraudster posing as an army officer buys item on OLX, sends a fake "payment QR" that actually requests money from the seller.',
    scenario:
      'Seller lists item on OLX. Buyer claims to be an army officer and says payment will be via army canteen portal QR. The QR code sent is actually a collect request. When the seller scans expecting payment, money is debited from their account instead.',
    timeline: [
      { time: '2025-04-14T10:00:00Z', description: 'Seller lists second-hand phone on OLX.' },
      { time: '2025-04-14T11:00:00Z', description: 'Buyer contacts claiming to be army officer posted elsewhere.' },
      { time: '2025-04-14T11:30:00Z', description: 'Buyer sends QR image on WhatsApp; seller scans and loses ₹15,000.' },
    ],
    warningSigns: [
      { sign: 'Buyer claims military identity and cannot meet', details: 'Verify identity; insist on cash or standard UPI transfer.' },
      { sign: 'QR code sent for payment — scanning debits rather than credits', details: 'QR codes for receiving money do not require scanning by the payee.' },
    ],
    preventionTips: [
      { tip: 'For receiving money, share your UPI ID or bank details — never scan a QR sent by the buyer', audience: 'seller', priority: 1 },
      { tip: 'Prefer in-person transactions for high-value OLX sales', audience: 'seller' },
    ],
    reportingSteps: [
      { step: 'Report buyer account to OLX and file complaint with cyber police', expectedOutcome: 'Account suspended and FIR filed.' },
      { step: 'Contact bank with transaction ID to initiate chargeback', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['olx', 'qr', 'marketplace', 'upi'],
    createdAt: '2025-04-16T08:00:00Z',
    updatedAt: '2025-04-16T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS037',
    title: 'Courier Scam — Fake FedEx/DTDC Call About Parcel with Contraband',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Victim receives a call claiming a parcel in their name contains drugs or illegal goods and must pay a fine to avoid arrest.',
    scenario:
      'Caller pretends to be a courier company executive and later transfers the call to a fake police officer claiming the parcel contains contraband. Victim is threatened with arrest unless a "clearance fee" is paid immediately via UPI or bank transfer.',
    timeline: [
      { time: '2025-08-01T09:00:00Z', description: 'Victim receives call from alleged courier company about suspicious parcel.' },
      { time: '2025-08-01T09:15:00Z', description: 'Call transferred to fake "cybercrime officer" who demands payment.' },
      { time: '2025-08-01T10:00:00Z', description: 'Victim transfers ₹50,000 under pressure.' },
      { time: '2025-08-02T08:00:00Z', description: 'Victim discusses with family and realizes fraud; reports to police.' },
    ],
    warningSigns: [
      { sign: 'Unexpected call about a parcel you did not order', details: 'Verify via official courier tracking on the company website.' },
      { sign: 'Call escalated to police/customs officer demanding payment', details: 'Police never demand payment over phone.' },
    ],
    preventionTips: [
      { tip: 'Hang up and call the courier company directly using the number on their official website', audience: 'end-user', priority: 1 },
      { tip: 'Never make payments demanded over unsolicited calls', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call 1930 helpline and report immediately', expectedOutcome: 'Rapid freeze of beneficiary accounts.' },
      { step: 'File FIR with local cyber crime unit', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 506 IPC', name: 'Criminal intimidation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['courier', 'parcel', 'digital-arrest', 'social_engineering'],
    createdAt: '2025-08-05T08:00:00Z',
    updatedAt: '2025-08-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS038',
    title: 'Scholarship Scam — Fake Government Scholarship Portal',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Students are directed to a fake scholarship portal that harvests Aadhaar, bank details, and a small "registration fee" before disappearing.',
    scenario:
      'A WhatsApp message circulates announcing a government scholarship with an application link. The site asks for Aadhaar number, bank details, and a ₹500 processing fee. No scholarship is disbursed and the collected data is used for further fraud.',
    timeline: [
      { time: '2025-06-01T08:00:00Z', description: 'Fraudulent scholarship link circulates on student WhatsApp groups.' },
      { time: '2025-06-01T10:00:00Z', description: 'Students fill in Aadhaar, bank account, and pay registration fee.' },
      { time: '2025-06-15T09:00:00Z', description: 'No scholarship disbursed; students report to college authorities.' },
    ],
    warningSigns: [
      { sign: 'Scholarship link shared via WhatsApp', details: 'Verify scholarship announcements at scholarships.gov.in.' },
      { sign: 'Registration fee for a government scholarship', details: 'Genuine government scholarships never charge application fees.' },
    ],
    preventionTips: [
      { tip: 'Apply for scholarships only through the National Scholarship Portal (scholarships.gov.in)', audience: 'student', priority: 1 },
      { tip: 'Alert college authorities and other students if a suspicious link is received', audience: 'student' },
    ],
    reportingSteps: [
      { step: 'Report the fake URL to the Ministry of Education helpline and cyber portal', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Lock Aadhaar biometrics immediately if Aadhaar details were submitted', expectedOutcome: 'Prevent misuse of biometric data.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['scholarship', 'phishing', 'students', 'aadhaar'],
    createdAt: '2025-06-18T08:00:00Z',
    updatedAt: '2025-06-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS039',
    title: 'Internship Scam — Fake Startup Offers Paid Internship, Charges Tool Fee',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Fake startup recruits interns via LinkedIn/Internshala and charges for mandatory tools or background verification, then vanishes.',
    scenario:
      'Students receive a well-crafted offer letter for a paid internship from what appears to be a legitimate startup. They are asked to pay for a laptop/tool allowance deposit or background check fee. After payment, the company email and contact become unreachable.',
    timeline: [
      { time: '2025-03-01T09:00:00Z', description: 'Fake internship offer posted on Internshala.' },
      { time: '2025-03-03T11:00:00Z', description: 'Student receives offer letter and is asked for ₹3,000 tool deposit.' },
      { time: '2025-03-05T10:00:00Z', description: 'Payment made; all contact ceases.' },
    ],
    warningSigns: [
      { sign: 'Paid internship requiring upfront deposit', details: 'Legitimate companies do not charge interns before joining.' },
      { sign: 'Company not verifiable on MCA portal', details: 'Check company registration at mca.gov.in.' },
    ],
    preventionTips: [
      { tip: 'Verify company registration on Ministry of Corporate Affairs portal', audience: 'student', priority: 1 },
      { tip: 'Never pay fees to secure an internship; treat any fee request as a red flag', audience: 'student' },
    ],
    reportingSteps: [
      { step: 'Report fake posting to Internshala/LinkedIn and file cyber complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['internship', 'jobs', 'social_engineering', 'students'],
    createdAt: '2025-03-10T08:00:00Z',
    updatedAt: '2025-03-10T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS040',
    title: 'Online Gaming Scam — Fake Free UC/Gems Exchange',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Gaming influencer lookalike accounts offer free in-game currency (UC, gems) in exchange for account credentials; accounts stolen and sold.',
    scenario:
      'A fake YouTube/Instagram channel mimicking a popular gaming creator runs a "giveaway" promising free UC for PUBG or diamonds for Free Fire. Participants are asked to log in with their game credentials on a third-party site, which harvests the credentials and steals the account.',
    timeline: [
      { time: '2025-07-10T12:00:00Z', description: 'Fake giveaway video published on clone channel.' },
      { time: '2025-07-10T14:00:00Z', description: 'Players log in to fake site with game credentials.' },
      { time: '2025-07-11T08:00:00Z', description: 'Game accounts locked; items sold on grey market.' },
    ],
    warningSigns: [
      { sign: 'Third-party site requesting game login credentials', details: 'Never log into game accounts outside official platforms.' },
      { sign: 'Too-good-to-be-true giveaway with no catch', details: 'Free in-game currency giveaways are almost always scams.' },
    ],
    preventionTips: [
      { tip: 'Never enter game credentials on third-party websites', audience: 'gamer', priority: 1 },
      { tip: 'Enable 2FA on game accounts and linked email', audience: 'gamer' },
    ],
    reportingSteps: [
      { step: 'Immediately change game account password and linked email credentials', expectedOutcome: 'Regain account access if acted quickly.' },
      { step: 'Report to game support and file cybercrime complaint if financial loss occurred', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['gaming', 'credentials', 'phishing', 'social_engineering'],
    createdAt: '2025-07-12T08:00:00Z',
    updatedAt: '2025-07-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS041',
    title: 'Online Betting Scam — Fixed Match Tips Fraud',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Fraudsters sell "guaranteed" IPL or cricket match fix tips via Telegram; victims lose money deposited on fake betting apps.',
    scenario:
      'Victim joins a Telegram group promising insider IPL match predictions. After a few correct "free" tips to build trust, the admin urges depositing money on a linked betting app. The app shows artificial winnings but freezes withdrawal; victims lose all deposits.',
    timeline: [
      { time: '2025-04-01T10:00:00Z', description: 'Victim joins Telegram group with free match tips.' },
      { time: '2025-04-05T11:00:00Z', description: 'Victim deposits ₹10,000 on linked betting app.' },
      { time: '2025-04-10T09:00:00Z', description: 'Withdrawal request rejected; app support unreachable.' },
    ],
    warningSigns: [
      { sign: 'Guaranteed winning tips', details: 'No match predictions are guaranteed; such claims are fraudulent.' },
      { sign: 'Withdrawal blocked after deposit', details: 'Fake platforms create conditions to prevent withdrawal.' },
    ],
    preventionTips: [
      { tip: 'Do not join unregulated betting platforms; gambling laws vary in India', audience: 'end-user', priority: 1 },
      { tip: 'Do not pay for match tips or insider information', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Collect all transaction records, app screenshots, and report to cyber cell', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['betting', 'cricket', 'telegram', 'scam'],
    createdAt: '2025-04-15T08:00:00Z',
    updatedAt: '2025-04-15T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS042',
    title: 'Fake NGO Donation Scam — Disaster Relief Impersonation',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fraudulent NGO websites and UPI IDs are circulated during natural disasters to siphon off public donations.',
    scenario:
      'After a major flood or earthquake, fake NGO websites mirroring PM Relief Fund or popular charities circulate on social media. Donors transferring money via these portals are unknowingly funding attacker accounts. No charitable activity occurs.',
    timeline: [
      { time: '2025-07-25T09:00:00Z', description: 'Natural disaster occurs; fake NGO donation links begin circulating.' },
      { time: '2025-07-25T12:00:00Z', description: 'Thousands of well-meaning donors transfer money to fake UPI handles.' },
      { time: '2025-07-27T10:00:00Z', description: 'Legitimate NGOs and government issue advisories about fake portals.' },
    ],
    warningSigns: [
      { sign: 'Donation link shared only via social media without a traceable NGO registration', details: 'Verify NGO registration at ngodarpan.gov.in.' },
      { sign: 'UPI handle for donations not matching official charity name', details: 'Check the payee name carefully before confirming transfer.' },
    ],
    preventionTips: [
      { tip: 'Donate only to verified NGOs listed on ngodarpan.gov.in or the official PM/CM Relief Fund portal', audience: 'donor', priority: 1 },
      { tip: 'Verify FCRA registration for NGOs before donating', audience: 'donor' },
    ],
    reportingSteps: [
      { step: 'Report fake donation pages to the platform and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['ngo', 'donation', 'disaster', 'social_engineering'],
    createdAt: '2025-07-30T08:00:00Z',
    updatedAt: '2025-07-30T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS043',
    title: 'Fake Government Portal — mParivahan Phishing',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fake mParivahan or Parivahan Sewa portal collects vehicle owner\'s Aadhaar, driving license details, and payment for fake challan clearance.',
    scenario:
      'Vehicle owners receive an SMS about an unpaid traffic challan with a link to "pay now and avoid court action." The link leads to a fake parivahan site that captures driving license, Aadhaar, and payment details.',
    timeline: [
      { time: '2025-05-08T09:00:00Z', description: 'Bulk SMS sent to vehicle owners about pending challans.' },
      { time: '2025-05-08T10:00:00Z', description: 'Victims click link and enter personal and payment details.' },
      { time: '2025-05-08T10:30:00Z', description: 'Payment debited; no challan cleared in real system.' },
    ],
    warningSigns: [
      { sign: 'Urgent SMS about unpaid challan with link', details: 'Check real challan status on echallan.parivahan.gov.in.' },
      { sign: 'Site URL not matching official parivahan.gov.in', details: 'Look for slight variations in spelling or domain.' },
    ],
    preventionTips: [
      { tip: 'Verify challan status only on echallan.parivahan.gov.in', audience: 'vehicle-owner', priority: 1 },
      { tip: 'Never pay challan via links received in SMS; use the official app', audience: 'vehicle-owner' },
    ],
    reportingSteps: [
      { step: 'Contact bank to dispute unauthorized payment', expectedOutcome: 'Chargeback may be initiated.' },
      { step: 'Report fake site to cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['parivahan', 'challan', 'phishing', 'government'],
    createdAt: '2025-05-12T08:00:00Z',
    updatedAt: '2025-05-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS044',
    title: 'Social Media Verification Scam — Blue Tick Fraud',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Scammers pose as Meta/Twitter support offering verified badge for a fee; victims pay but never receive verification.',
    scenario:
      'An influencer or business owner receives a DM claiming their account is eligible for a blue-tick verification for a payment. The scammer collects payment via UPI and may also request login credentials to "submit the application," leading to account takeover.',
    timeline: [
      { time: '2025-06-20T10:00:00Z', description: 'Victim receives DM from fake Meta support account.' },
      { time: '2025-06-20T10:30:00Z', description: 'Victim pays ₹5,000 and shares email login "for submission."' },
      { time: '2025-06-20T11:00:00Z', description: 'Email password changed by attacker; account hijacked.' },
    ],
    warningSigns: [
      { sign: 'DM offering paid verification', details: 'Meta and Twitter do not offer verification via DMs; use official in-app processes.' },
      { sign: 'Request for login credentials to apply for badge', details: 'Never share passwords with third parties.' },
    ],
    preventionTips: [
      { tip: 'Apply for verification only through in-app official processes', audience: 'end-user', priority: 1 },
      { tip: 'Use unique passwords and 2FA for social accounts', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Change password immediately and revoke third-party app access', expectedOutcome: 'Regain account control.' },
      { step: 'Report to platform and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['social-media', 'verification', 'impersonation', 'account-takeover'],
    createdAt: '2025-06-22T08:00:00Z',
    updatedAt: '2025-06-22T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS045',
    title: 'Influencer Impersonation Scam — Fake Collaboration DM',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Fake brand collaboration offers sent via cloned influencer or brand accounts lead to advance fee fraud against small creators.',
    scenario:
      'A small influencer or content creator receives a DM from an account cloning a well-known brand, offering a paid collaboration. The creator is asked to pay a "platform registration fee" before receiving payment. After payment the account blocks the creator.',
    timeline: [
      { time: '2025-08-10T11:00:00Z', description: 'Creator receives collaboration offer from cloned brand account.' },
      { time: '2025-08-10T12:00:00Z', description: 'Creator pays ₹2,000 registration fee.' },
      { time: '2025-08-10T12:30:00Z', description: 'Account blocks creator; no collaboration delivered.' },
    ],
    warningSigns: [
      { sign: 'Collaboration offer from account with low followers or recent creation date', details: 'Verify through official brand website and email.' },
      { sign: 'Upfront fee to receive brand payment', details: 'Brands pay creators, not the other way round.' },
    ],
    preventionTips: [
      { tip: 'Verify brand collaborations by emailing their official marketing contact', audience: 'creator', priority: 1 },
      { tip: 'Use MCN or agency contracts; avoid ad-hoc DM deals involving fees', audience: 'creator' },
    ],
    reportingSteps: [
      { step: 'Report cloned account to platform for impersonation takedown' },
      { step: 'File cybercrime complaint if financial loss exceeds ₹1,000', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['influencer', 'impersonation', 'social-media', 'advance-fee'],
    createdAt: '2025-08-12T08:00:00Z',
    updatedAt: '2025-08-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS046',
    title: 'Fake Crypto Exchange — Clone of Binance India with Withdrawal Lock',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'A cloned crypto exchange mimics Binance India, lures deposits with bonus offers, then blocks withdrawals citing KYC compliance.',
    scenario:
      'Users are directed to a convincing clone of a popular exchange via Google ads or Telegram. After depositing funds and enjoying simulated paper profits, they attempt to withdraw and are asked to pay a "tax clearance fee" or submit premium KYC. No withdrawal is ever processed.',
    timeline: [
      { time: '2025-09-10T09:00:00Z', description: 'Fake exchange listed on Google ads; users directed to clone site.' },
      { time: '2025-09-12T11:00:00Z', description: 'Users deposit BTC and INR showing growing balances.' },
      { time: '2025-09-20T10:00:00Z', description: 'Withdrawal request triggers "KYC compliance fee" demand.' },
      { time: '2025-09-25T09:00:00Z', description: 'Site goes offline; deposits lost.' },
    ],
    warningSigns: [
      { sign: 'Exchange URL slightly different from official domain', details: 'Always access exchanges via bookmarks or app stores.' },
      { sign: 'Withdrawal fee demanded post-deposit', details: 'Legitimate exchanges deduct fees from balance, not require upfront payment.' },
    ],
    preventionTips: [
      { tip: 'Use only regulated, well-known exchanges; access via official apps downloaded from Play Store or App Store', audience: 'investor', priority: 1 },
      { tip: 'Avoid clicking exchange links in ads or DMs', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Document all transaction hashes and site evidence before the site goes offline', expectedOutcome: 'Preserve evidence for investigation.' },
      { step: 'Report to SEBI, FIU-IND, and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['crypto', 'exchange', 'phishing', 'investment'],
    createdAt: '2025-09-28T08:00:00Z',
    updatedAt: '2025-09-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS047',
    title: 'NFT Scam — Fake Minting Site Drains Wallet',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Scammers create fake NFT minting websites that prompt wallet connection and execute drain transactions upon approval.',
    scenario:
      'A social media post promotes a new NFT drop with high potential. The mint link leads to a fake site that requests wallet connection. Upon approval, the smart contract executes a setApprovalForAll function, granting the attacker rights to transfer all tokens from the victim\'s wallet.',
    timeline: [
      { time: '2025-10-05T08:00:00Z', description: 'Fake NFT drop announced on Twitter with cloned artist account.' },
      { time: '2025-10-05T10:00:00Z', description: 'User connects wallet and approves transaction on fake site.' },
      { time: '2025-10-05T10:05:00Z', description: 'All NFTs and tokens drained from wallet within minutes.' },
    ],
    warningSigns: [
      { sign: 'Wallet approval request for "setApprovalForAll"', details: 'This grants full access to all tokens; approve only for trusted contracts.' },
      { sign: 'NFT drop announced only via DMs or unofficial accounts', details: 'Verify on official project Discord and website.' },
    ],
    preventionTips: [
      { tip: 'Use a separate burner wallet for minting NFTs; keep main assets in cold storage', audience: 'investor', priority: 1 },
      { tip: 'Revoke unnecessary wallet approvals using tools like revoke.cash', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Revoke remaining wallet approvals immediately using revoke.cash or a similar tool', expectedOutcome: 'Prevent further drainage.' },
      { step: 'Report contract address to NFT marketplaces and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66, IT Act 2000', name: 'Computer-related offences', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['nft', 'crypto', 'wallet-drainer', 'scam'],
    createdAt: '2025-10-08T08:00:00Z',
    updatedAt: '2025-10-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS048',
    title: 'Seed Phrase Theft — Fake Wallet Recovery Support',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Users seeking wallet recovery support are tricked into sharing their seed phrase by fake customer support agents on social media.',
    scenario:
      'A crypto user posts a wallet issue on Twitter or Reddit. Fake support accounts DM offering help and ask for the 12/24-word seed phrase to "verify the wallet." Once shared, funds are drained instantly.',
    timeline: [
      { time: '2025-11-01T09:00:00Z', description: 'User tweets about MetaMask wallet sync issue.' },
      { time: '2025-11-01T09:05:00Z', description: 'Fake MetaMask support DMs asking for seed phrase for verification.' },
      { time: '2025-11-01T09:15:00Z', description: 'User shares phrase; attacker immediately empties wallet.' },
    ],
    warningSigns: [
      { sign: 'Any request for seed phrase or private key', details: 'No legitimate support will ever ask for seed phrase.' },
      { sign: 'Unsolicited DM from support accounts', details: 'Check follower count and account age of support accounts.' },
    ],
    preventionTips: [
      { tip: 'Never share seed phrase under any circumstance; treat it as irreplaceable private key', audience: 'investor', priority: 1 },
      { tip: 'Seek support only via official documentation and verified Discord channels', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Transfer remaining assets to a new wallet immediately if seed is compromised', expectedOutcome: 'Protect any assets not yet drained.' },
      { step: 'Report to cybercrime portal with attacker wallet addresses', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['crypto', 'seed-phrase', 'wallet', 'social_engineering'],
    createdAt: '2025-11-05T08:00:00Z',
    updatedAt: '2025-11-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS049',
    title: 'Wallet Drainer via Malicious DeFi Link',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'A malicious DeFi site distributed via airdrop claim link executes an approval transaction that drains the user\'s wallet.',
    scenario:
      'User receives an email or DM about a free token airdrop. Clicking the claim link opens a fake DeFi platform that requests wallet signature. The signature is for an approval transaction giving the attacker permission to drain all tokens.',
    timeline: [
      { time: '2025-10-15T08:00:00Z', description: 'Airdrop claim email sent to thousands of wallet holders.' },
      { time: '2025-10-15T09:00:00Z', description: 'User connects wallet and signs approval on fake DeFi site.' },
      { time: '2025-10-15T09:02:00Z', description: 'Wallet drained of all ERC-20 tokens within seconds.' },
    ],
    warningSigns: [
      { sign: 'Unsolicited airdrop claim links via email or DM', details: 'Verify airdrops on the official project website only.' },
      { sign: 'Approval transaction request for unknown contracts', details: 'Read transaction details before signing.' },
    ],
    preventionTips: [
      { tip: 'Simulate transactions using tools like Tenderly or Pocket Universe before signing', audience: 'investor', priority: 1 },
      { tip: 'Use hardware wallets and cold storage for significant crypto holdings', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Revoke approvals on remaining assets and move to new wallet', expectedOutcome: 'Limit further losses.' },
      { step: 'Report attacker contract to blockchain analytics firms and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['defi', 'wallet-drainer', 'airdrop', 'crypto'],
    createdAt: '2025-10-18T08:00:00Z',
    updatedAt: '2025-10-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS050',
    title: 'Business Email Compromise — CEO Fraud Wire Transfer',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attacker spoofs CEO email and instructs finance team to transfer funds urgently to a new vendor account.',
    scenario:
      'Finance department receives an email appearing to come from the CEO asking for an urgent wire transfer to a new supplier. The email domain is spoofed with a lookalike domain (e.g., replacing "l" with "1"). Under pressure of urgency, the finance executive completes the transfer before verification.',
    timeline: [
      { time: '2025-09-20T08:30:00Z', description: 'Finance executive receives urgent CEO email about new vendor payment.' },
      { time: '2025-09-20T09:00:00Z', description: 'Transfer of ₹25 lakh initiated to attacker bank account.' },
      { time: '2025-09-20T14:00:00Z', description: 'Real CEO unaware; discrepancy found during end-of-day review.' },
    ],
    warningSigns: [
      { sign: 'Urgent wire transfer request from CEO via email only', details: 'Verify large payments with a direct phone call to the requester.' },
      { sign: 'Reply-to address different from displayed sender address', details: 'Check email headers carefully.' },
    ],
    preventionTips: [
      { tip: 'Implement dual-approval for all large outgoing transfers with telephonic verification', audience: 'business', priority: 1 },
      { tip: 'Train finance staff on BEC patterns and establish out-of-band confirmation procedures', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Contact bank immediately to attempt SWIFT recall on the transfer', expectedOutcome: 'Funds may be recovered if acted within hours.' },
      { step: 'Report to cyber police and CERT-In', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['bec', 'email', 'business', 'wire-transfer'],
    createdAt: '2025-09-22T08:00:00Z',
    updatedAt: '2025-09-22T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS051',
    title: 'Smishing — Fake TRAI SIM Deactivation SMS',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Victims receive SMS claiming their SIM will be deactivated unless they call a number; call leads to KYC harvesting and financial fraud.',
    scenario:
      'An SMS claims to be from TRAI saying the recipient\'s SIM will be deactivated within 24 hours due to KYC non-compliance. Calling the number connects to a fake TRAI helpline that collects Aadhaar, PAN, and bank details.',
    timeline: [
      { time: '2025-04-05T08:00:00Z', description: 'Bulk SMS sent about SIM deactivation.' },
      { time: '2025-04-05T09:00:00Z', description: 'Victim calls fake TRAI number and provides KYC details.' },
      { time: '2025-04-06T10:00:00Z', description: 'Identity used to apply for loan in victim\'s name.' },
    ],
    warningSigns: [
      { sign: 'SMS from TRAI about urgent SIM deactivation', details: 'TRAI does not send SMS about SIM deactivation; contact your telecom operator directly.' },
      { sign: 'Request for Aadhaar or PAN on a call', details: 'Operators perform KYC via official stores or apps, not unsolicited calls.' },
    ],
    preventionTips: [
      { tip: 'Contact your telecom operator using the number on their official website if you receive deactivation notices', audience: 'end-user', priority: 1 },
      { tip: 'Never share Aadhaar, PAN, or bank details over unsolicited calls', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report the number to TRAI and your telecom operator', expectedOutcome: 'Malicious number may be blocked.' },
      { step: 'File cybercrime complaint if personal data was shared', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['smishing', 'trai', 'sim', 'identity_theft'],
    createdAt: '2025-04-08T08:00:00Z',
    updatedAt: '2025-04-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS052',
    title: 'Vishing — Bank KYC Update Call Harvests Credentials',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Caller poses as bank executive and requests net banking credentials citing mandatory KYC update, leading to full account takeover.',
    scenario:
      'Victim receives a call from someone claiming to be from the bank\'s KYC department. The caller knows partial account details (from leaked data) and asks for net banking username, password, and OTP to "complete KYC." Attacker logs in and transfers funds.',
    timeline: [
      { time: '2025-05-15T10:00:00Z', description: 'Victim receives call from person claiming to be bank KYC executive.' },
      { time: '2025-05-15T10:10:00Z', description: 'Victim provides net banking credentials and OTP under pressure.' },
      { time: '2025-05-15T10:15:00Z', description: 'Attacker logs in and initiates ₹1.2 lakh transfer.' },
    ],
    warningSigns: [
      { sign: 'Bank calling to ask for net banking password', details: 'Banks never ask for passwords or full OTP over phone.' },
      { sign: 'Caller already knows partial account details', details: 'Partial knowledge does not legitimize the call; hang up and call back.' },
    ],
    preventionTips: [
      { tip: 'Hang up and call your bank using the number on the card or bank website to verify any request', audience: 'end-user', priority: 1 },
      { tip: 'Treat net banking credentials and OTPs as secrets; never share with anyone', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Immediately call the bank\'s official number to freeze account', expectedOutcome: 'Bank may halt pending transfers.' },
      { step: 'File cybercrime complaint and lodge written complaint with bank branch', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['vishing', 'banking', 'otp', 'social_engineering'],
    createdAt: '2025-05-18T08:00:00Z',
    updatedAt: '2025-05-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS053',
    title: 'AI Voice Clone Scam — Fake Family Emergency Call',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Attacker uses AI voice cloning of a family member\'s voice to call relatives claiming to be in an accident, requesting urgent money transfer.',
    scenario:
      'Using 10–30 seconds of audio from social media, attackers clone a victim\'s son/daughter\'s voice. They call the parents claiming to be in a road accident and urgently needing money transferred before police arrive. Parents comply out of fear before verifying.',
    timeline: [
      { time: '2025-06-25T08:00:00Z', description: 'Attacker collects voice sample from victim\'s social media videos.' },
      { time: '2025-06-25T09:00:00Z', description: 'AI voice clone used to call parents; emergency scenario fabricated.' },
      { time: '2025-06-25T09:10:00Z', description: 'Parents transfer ₹80,000 to attacker UPI.' },
      { time: '2025-06-25T10:00:00Z', description: 'Parents call real son/daughter; fraud discovered.' },
    ],
    warningSigns: [
      { sign: 'Urgent call from family member in distress demanding immediate transfer', details: 'Establish a family code word for emergency verification.' },
      { sign: 'Caller insists on no delay, creates panic to prevent rational thinking', details: 'Take a breath and call back on the known number before any transfer.' },
    ],
    preventionTips: [
      { tip: 'Establish a family verification code word for emergency calls', audience: 'end-user', priority: 1 },
      { tip: 'Always call back on the family member\'s known number to verify before sending money', audience: 'end-user' },
      { tip: 'Reduce public availability of voice/video on social media', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call 1930 immediately to report and freeze beneficiary account', expectedOutcome: 'Rapid freeze may prevent loss.' },
      { step: 'File FIR with audio/call recording evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['voice-clone', 'deepfake', 'ai', 'social_engineering'],
    createdAt: '2025-06-28T08:00:00Z',
    updatedAt: '2025-06-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS054',
    title: 'Refund Scam — Electricity Bill Overpayment Lure',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fraudster calls claiming victim overpaid electricity bill and initiates a collect request disguised as a refund.',
    scenario:
      'Victim receives a call from someone claiming to be a BESCOM/MSEDCL representative about an overpaid bill. To process the refund, they ask the victim to open their UPI app and approve a collect request of the refund amount. The collect request is actually to the attacker\'s account.',
    timeline: [
      { time: '2025-07-15T10:00:00Z', description: 'Victim receives call about electricity bill overpayment.' },
      { time: '2025-07-15T10:10:00Z', description: 'Victim opens UPI app and approves collect request.' },
      { time: '2025-07-15T10:12:00Z', description: '₹5,000 transferred from victim to attacker.' },
    ],
    warningSigns: [
      { sign: 'Approving a collect request to receive a refund', details: 'Refunds are credited automatically; you never need to approve a request.' },
      { sign: 'Call from electricity board asking for UPI actions', details: 'Verify with official electricity board helpline.' },
    ],
    preventionTips: [
      { tip: 'To receive money, you never need to approve a collect request or enter a PIN', audience: 'end-user', priority: 1 },
      { tip: 'Verify any refund claims by calling the official board number before taking action', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call bank immediately to freeze and reverse if possible', expectedOutcome: 'Bank initiates investigation.' },
      { step: 'File complaint with cyber cell and electricity board', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['refund', 'upi', 'electricity', 'collect-request'],
    createdAt: '2025-07-18T08:00:00Z',
    updatedAt: '2025-07-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS055',
    title: 'Fake Trading Platform — Mirror Trading Scam with Manipulated UI',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Victims are lured to a fake stock/forex trading platform via Telegram; the UI shows artificial gains but withdrawals are blocked.',
    scenario:
      'Victims join a Telegram investment group promising mirror trading of expert traders. They deposit via bank transfer or UPI. The app shows compounding gains, but when withdrawal is attempted, the system demands a "tax payment" or "subscription upgrade" fee. Fees paid go to the attacker; real withdrawal never occurs.',
    timeline: [
      { time: '2025-08-01T09:00:00Z', description: 'Victim joins Telegram channel and is shown impressive trading screenshots.' },
      { time: '2025-08-03T10:00:00Z', description: 'Victim deposits ₹50,000 on recommended app.' },
      { time: '2025-08-20T11:00:00Z', description: 'Withdrawal request triggers ₹15,000 "tax fee" demand.' },
      { time: '2025-08-25T09:00:00Z', description: 'After paying tax fee, withdrawal still blocked; app uninstalled.' },
    ],
    warningSigns: [
      { sign: 'App not listed on Play Store or App Store', details: 'Only download financial apps from official stores.' },
      { sign: 'Withdrawal requires additional tax or subscription payment', details: 'Legitimate brokers deduct fees from balance.' },
    ],
    preventionTips: [
      { tip: 'Verify broker registration with SEBI before depositing any funds', audience: 'investor', priority: 1 },
      { tip: 'Withdraw a small test amount before depositing large sums', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Report to SEBI investor helpline (1800 22 7575) and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Provide all bank transaction records and app screenshots as evidence', expectedOutcome: 'Formal investigation initiated.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['trading', 'investment', 'telegram', 'fake-app'],
    createdAt: '2025-08-28T08:00:00Z',
    updatedAt: '2025-08-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS056',
    title: 'Crypto Romance Scam — Pig Butchering via WhatsApp',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Scammer befriends victim over weeks via WhatsApp, builds romantic trust, and introduces fake crypto investment platform to drain savings.',
    scenario:
      'Victim receives a WhatsApp "wrong number" message that turns into a friendly conversation over days. The new "friend" gradually introduces crypto investment tips and directs the victim to a controlled platform where small withdrawals succeed initially. Victim invests large amounts; platform then blocks account claiming regulatory review.',
    timeline: [
      { time: '2025-03-01T10:00:00Z', description: 'Victim receives unexpected "wrong number" WhatsApp message.' },
      { time: '2025-03-10T09:00:00Z', description: 'Daily conversations build trust; crypto investment platform introduced.' },
      { time: '2025-03-15T11:00:00Z', description: 'Victim deposits ₹1 lakh; small withdrawal succeeds to build confidence.' },
      { time: '2025-04-01T09:00:00Z', description: 'Victim deposits ₹15 lakh; account frozen citing regulatory audit.' },
      { time: '2025-04-05T10:00:00Z', description: 'Contact disappears; platform goes offline.' },
    ],
    warningSigns: [
      { sign: 'Unexpected WhatsApp from stranger who quickly builds deep rapport', details: 'Pig butchering scams begin with a "wrong number" contact.' },
      { sign: 'New friend guides investment to specific platform', details: 'Legitimate investors do not steer strangers to specific platforms.' },
      { sign: 'Small withdrawal succeeds; larger withdrawal blocked', details: 'Initial withdrawals build trust before final trap.' },
    ],
    preventionTips: [
      { tip: 'Do not trust investment advice from online-only connections regardless of relationship depth', audience: 'end-user', priority: 1 },
      { tip: 'Verify investment platforms with SEBI and test withdraw before large deposits', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Preserve all chat logs and transaction records', notes: 'Critical for tracing attacker and recovering funds.' },
      { step: 'File complaint with cyber police and report to cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['pig-butchering', 'romance', 'crypto', 'whatsapp'],
    createdAt: '2025-04-10T08:00:00Z',
    updatedAt: '2025-04-10T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS057',
    title: 'Malware via Fake APK — Loan App Installs Banking Trojan',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'A fake loan app APK distributed via SMS or WhatsApp installs a banking trojan that overlays bank apps to harvest credentials.',
    scenario:
      'Victim receives an SMS link to a "pre-approved loan" APK outside the Play Store. Installing the app requests Accessibility permissions. Once granted, the trojan overlays banking apps and captures credentials and OTPs in real time.',
    timeline: [
      { time: '2025-05-10T08:00:00Z', description: 'SMS received with link to download loan APK.' },
      { time: '2025-05-10T08:30:00Z', description: 'APK installed; app requests Accessibility Services permission.' },
      { time: '2025-05-10T09:00:00Z', description: 'Victim logs into banking app; trojan captures credentials.' },
      { time: '2025-05-10T09:30:00Z', description: 'Unauthorized transfers executed using captured credentials and OTPs.' },
    ],
    warningSigns: [
      { sign: 'App requesting Accessibility permission', details: 'Loan or finance apps should not need Accessibility access; deny and uninstall.' },
      { sign: 'App downloaded from outside Play Store', details: 'Only install financial apps from official stores.' },
    ],
    preventionTips: [
      { tip: 'Never install APKs from links in SMS or WhatsApp', audience: 'end-user', priority: 1 },
      { tip: 'Review app permissions carefully; deny Accessibility for apps that do not genuinely require it', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Factory reset device if trojan is suspected; change all credentials from clean device', expectedOutcome: 'Eliminate malware and prevent further credential theft.' },
      { step: 'Contact bank and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['malware', 'apk', 'banking-trojan', 'loan-app'],
    createdAt: '2025-05-14T08:00:00Z',
    updatedAt: '2025-05-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS058',
    title: 'Fake Trading App — SEBI-Licensed Broker Impersonation',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Scammers clone the app and branding of a SEBI-licensed broker, redirect victims to fake platform, and block withdrawals after large deposits.',
    scenario:
      'Victims receive targeted ads or WhatsApp messages from accounts impersonating Zerodha, Groww, or Upstox. The fake app looks identical to the real one. After depositing, trades appear profitable but funds cannot be withdrawn.',
    timeline: [
      { time: '2025-07-01T09:00:00Z', description: 'WhatsApp message with Zerodha lookalike app link.' },
      { time: '2025-07-02T10:00:00Z', description: 'Victim installs cloned app and deposits ₹2 lakh.' },
      { time: '2025-07-15T09:00:00Z', description: 'Withdrawal blocked; support unreachable.' },
    ],
    warningSigns: [
      { sign: 'App link not from official Play Store listing', details: 'Download broker apps only from Play Store/App Store official listings.' },
      { sign: 'Referral bonus or guaranteed returns promised', details: 'SEBI-registered brokers do not promise guaranteed returns.' },
    ],
    preventionTips: [
      { tip: 'Verify broker SEBI registration number at sebi.gov.in before downloading', audience: 'investor', priority: 1 },
      { tip: 'Download apps only via search on official app stores, not links', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Report to SEBI at scores.sebi.gov.in and file cybercrime FIR', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['trading', 'broker', 'fake-app', 'investment'],
    createdAt: '2025-07-20T08:00:00Z',
    updatedAt: '2025-07-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS059',
    title: 'Phishing via Google Ads — Fake Bank Login Page',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Attackers use Google Ads to display fake bank login pages at the top of search results, capturing net banking credentials.',
    scenario:
      'A user searches for their bank\'s name on Google and clicks what appears to be the bank\'s website in the sponsored results. The page is a near-perfect clone; entered credentials are captured in real time and used immediately to drain the account.',
    timeline: [
      { time: '2025-06-05T09:00:00Z', description: 'User searches "SBI net banking login" and clicks sponsored result.' },
      { time: '2025-06-05T09:05:00Z', description: 'User enters user ID and password on phishing page.' },
      { time: '2025-06-05T09:08:00Z', description: 'Attacker logs in simultaneously and initiates transfer.' },
      { time: '2025-06-05T09:10:00Z', description: 'OTP captured from phone notification visible on screen.' },
    ],
    warningSigns: [
      { sign: 'Bank website accessed via search ad instead of bookmark', details: 'Ads can be placed by anyone; always use bookmarks for banking.' },
      { sign: 'URL shows a slight variation or extra subdomain', details: 'Check the URL bar carefully before entering credentials.' },
    ],
    preventionTips: [
      { tip: 'Bookmark your bank\'s official URL and never access banking via search engine ads', audience: 'end-user', priority: 1 },
      { tip: 'Enable biometric/hardware token for net banking to prevent password-only takeover', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact bank to freeze account and change all credentials from clean device', expectedOutcome: 'Limit ongoing unauthorized access.' },
      { step: 'Report phishing ad URL to Google and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['phishing', 'google-ads', 'banking', 'credentials'],
    createdAt: '2025-06-08T08:00:00Z',
    updatedAt: '2025-06-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS060',
    title: 'Telegram Pump-and-Dump — Coordinated Altcoin Manipulation',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Private Telegram channels coordinate mass buying of low-cap altcoins; retail investors lose money when organizers dump holdings.',
    scenario:
      'A Telegram channel with thousands of subscribers announces the next "pump target" coin at a specified time. Members rush to buy, driving up price artificially. The channel organizers, who bought earlier, sell at peak. Retail buyers left holding devalued coins.',
    timeline: [
      { time: '2025-10-20T14:00:00Z', description: 'Channel announces pump target: XYZTOKEN at 14:30.' },
      { time: '2025-10-20T14:30:00Z', description: 'Coordinated buy causes 500% price spike in minutes.' },
      { time: '2025-10-20T14:35:00Z', description: 'Organizers sell; price collapses 90%.' },
    ],
    warningSigns: [
      { sign: 'Channel announcing specific buy time for obscure token', details: 'Any coordinated buy announcement is a manipulation scheme.' },
      { sign: 'Sudden unexplained volume spike in low-cap token', details: 'Check on-chain data; wallet concentration is a red flag.' },
    ],
    preventionTips: [
      { tip: 'Avoid participating in coordinated buy groups; they are structured to profit at your expense', audience: 'investor', priority: 1 },
      { tip: 'Research on-chain metrics and project fundamentals before buying any token', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Report the Telegram channel to Telegram and to cyber authorities', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Document channel messages and transaction records as evidence', expectedOutcome: 'Supports FIR and exchange cooperation.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['pump-dump', 'crypto', 'telegram', 'manipulation'],
    createdAt: '2025-10-22T08:00:00Z',
    updatedAt: '2025-10-22T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS061',
    title: 'Loan App Extortion — Morphed Images Sent to Contacts',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Predatory loan app morphs borrower\'s profile photo onto obscene images and threatens to share with contacts unless loan is repaid with exorbitant interest.',
    scenario:
      'Borrower takes a small emergency loan from an unregulated app. After initial repayment, app continues charging triple-digit interest. On any delay, the app\'s team accesses the contact list and sends morphed obscene images of the borrower to family and friends.',
    timeline: [
      { time: '2025-04-01T09:00:00Z', description: 'Borrower takes ₹5,000 loan via app, granting contact access.' },
      { time: '2025-04-08T10:00:00Z', description: 'App demands ₹15,000 repayment citing processing fees.' },
      { time: '2025-04-09T08:00:00Z', description: 'Morphed images sent to all contacts upon delay.' },
      { time: '2025-04-10T09:00:00Z', description: 'Borrower files police complaint under harassment and extortion.' },
    ],
    warningSigns: [
      { sign: 'App requests access to contacts and gallery during loan application', details: 'Legitimate lenders do not need contact or gallery access.' },
      { sign: 'Exorbitant interest or processing fees after disbursement', details: 'RBI caps NBFC interest; extreme fees are illegal.' },
    ],
    preventionTips: [
      { tip: 'Deny contact and storage permissions to all loan apps; use only RBI-registered lenders', audience: 'borrower', priority: 1 },
      { tip: 'Screenshot and preserve all app communications for evidence', audience: 'borrower' },
    ],
    reportingSteps: [
      { step: 'File FIR under IPC 384 (extortion) and IT Act; approach a cyber cell urgently', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Report app to RBI Sachet portal (sachet.rbi.org.in) for regulatory action', expectedOutcome: 'App listed as unauthorized entity; takedown initiated.' },
    ],
    applicableLaws: [
      { code: 'Section 384 IPC', name: 'Extortion', jurisdiction: 'India' },
      { code: 'Section 66E, IT Act 2000', name: 'Violation of privacy', jurisdiction: 'India' },
      { code: 'Section 67, IT Act 2000', name: 'Publishing obscene material electronically', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['loan-app', 'extortion', 'morphed-images', 'harassment'],
    createdAt: '2025-04-12T08:00:00Z',
    updatedAt: '2025-04-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS062',
    title: 'Phishing Campaign — Fake GST Refund Portal',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Businesses receive emails claiming a GST refund is pending; link leads to fake gst.gov.in portal harvesting login credentials.',
    scenario:
      'An email mimicking GSTN informs the recipient of a pending GST refund. The "Claim Refund" button leads to a fake portal that captures GST username, password, and bank account details for direct refund.',
    timeline: [
      { time: '2025-03-15T09:00:00Z', description: 'Mass phishing email sent to registered GST taxpayers.' },
      { time: '2025-03-15T10:00:00Z', description: 'Business owners log in to fake portal and provide bank details.' },
      { time: '2025-03-17T11:00:00Z', description: 'Credentials used to file fraudulent returns in victim entity names.' },
    ],
    warningSigns: [
      { sign: 'Email about GST refund with a link', details: 'GST refunds are processed automatically in the GSTN portal; no click-through required.' },
      { sign: 'Portal URL not exactly gst.gov.in', details: 'Bookmark the official GST portal and use only that.' },
    ],
    preventionTips: [
      { tip: 'Check GST refund status only via bookmarked gst.gov.in', audience: 'business', priority: 1 },
      { tip: 'Enable login alerts for GSTN portal and review returns filed regularly', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Change GSTN portal password immediately and notify your CA', expectedOutcome: 'Fraudulent returns may be reversed with timely action.' },
      { step: 'Report to GSTN helpdesk and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['gst', 'phishing', 'business', 'tax'],
    createdAt: '2025-03-20T08:00:00Z',
    updatedAt: '2025-03-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS063',
    title: 'Online Marketplace Fraud — Advance Payment Disappearance',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Buyer on Facebook Marketplace pays advance for a product; seller vanishes after receiving partial payment.',
    scenario:
      'Seller on Facebook Marketplace or Quikr lists a high-demand product (e.g., PlayStation, iPhone) at below-market price. Interested buyer is pressured to pay an advance to "reserve" the item. After advance received, seller stops responding.',
    timeline: [
      { time: '2025-05-18T10:00:00Z', description: 'Buyer contacts seller about discounted iPhone listing.' },
      { time: '2025-05-18T10:30:00Z', description: 'Seller insists advance payment to hold item.' },
      { time: '2025-05-18T11:00:00Z', description: 'Buyer transfers ₹8,000 advance; seller goes silent.' },
    ],
    warningSigns: [
      { sign: 'Price significantly below market value', details: 'If the deal seems too good, verify authenticity before paying.' },
      { sign: 'Seller insists on advance transfer before showing product', details: 'Insist on in-person exchange with cash or post-delivery payment.' },
    ],
    preventionTips: [
      { tip: 'Only pay for products after receiving and verifying them in person', audience: 'buyer', priority: 1 },
      { tip: 'Check seller\'s profile age and reviews before transacting', audience: 'buyer' },
    ],
    reportingSteps: [
      { step: 'Report seller profile to marketplace platform for removal', expectedOutcome: 'Account suspended and further buyers protected.' },
      { step: 'File cybercrime complaint with seller phone number and transaction ID', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['marketplace', 'advance-fee', 'facebook', 'quikr'],
    createdAt: '2025-05-22T08:00:00Z',
    updatedAt: '2025-05-22T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS064',
    title: 'UPI Collect Request Scam — Fake Cashback from E-Commerce',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Victims receive a collect request disguised as a cashback notification from a well-known e-commerce brand; approving it debits their account.',
    scenario:
      'A UPI collect request arrives with the note "Flipkart Cashback ₹500." The victim, expecting a cashback, approves the request and enters their UPI PIN, inadvertently sending ₹500 instead of receiving it.',
    timeline: [
      { time: '2025-06-10T09:00:00Z', description: 'Victim receives UPI collect request with cashback note.' },
      { time: '2025-06-10T09:05:00Z', description: 'Victim enters PIN thinking they are claiming cashback.' },
      { time: '2025-06-10T09:06:00Z', description: '₹500 debited from victim\'s account.' },
    ],
    warningSigns: [
      { sign: 'UPI collect request framed as cashback', details: 'Entering a PIN in response to a collect request sends money; it never receives it.' },
      { sign: 'Collect request from unknown UPI handle', details: 'Cashbacks are auto-credited; they never require PIN entry.' },
    ],
    preventionTips: [
      { tip: 'Understand that entering your UPI PIN in any scenario sends money; it does not receive', audience: 'end-user', priority: 1 },
      { tip: 'Reject any collect request that you did not initiate or are not certain about', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report collect request to your bank and the NPCI helpline', expectedOutcome: 'Transaction may be reversed if reported promptly.' },
      { step: 'File cybercrime complaint with UPI transaction reference', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['upi', 'collect-request', 'cashback', 'e-commerce'],
    createdAt: '2025-06-12T08:00:00Z',
    updatedAt: '2025-06-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS065',
    title: 'Deepfake Blackmail — CEO Video Used for Corporate Extortion',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attackers create a deepfake video of a company CEO making compromising statements and threaten to release it unless a ransom is paid.',
    scenario:
      'A publicly traded company receives an anonymous email with a deepfake video clip of their CEO. The video depicts the CEO making false statements about company finances. The attackers demand cryptocurrency payment to prevent publication, which would devastate share price.',
    timeline: [
      { time: '2025-09-05T08:00:00Z', description: 'Anonymous email received with deepfake video attachment.' },
      { time: '2025-09-05T09:00:00Z', description: 'Legal and cybersecurity teams review; video is confirmed as deepfake.' },
      { time: '2025-09-06T10:00:00Z', description: 'Company reports to CERT-In and cybercrime authorities; extortion declined.' },
    ],
    warningSigns: [
      { sign: 'Unnatural blinking or lip sync issues in video', details: 'Use deepfake detection tools to analyze corporate video evidence.' },
      { sign: 'Anonymous extortion demand tied to video release', details: 'Do not pay; payment does not guarantee non-release.' },
    ],
    preventionTips: [
      { tip: 'Establish a corporate crisis response plan for deepfake incidents; train communications team', audience: 'business', priority: 1 },
      { tip: 'Proactively watermark and archive original CEO and executive video content', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Report to CERT-In and cyber police with the deepfake video and extortion email', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Issue pre-emptive disclosure to SEBI if there is risk of market manipulation', expectedOutcome: 'Regulatory protection and investor trust maintained.' },
    ],
    applicableLaws: [
      { code: 'Section 384 IPC', name: 'Extortion', jurisdiction: 'India' },
      { code: 'Section 66E, IT Act 2000', name: 'Violation of privacy', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['deepfake', 'ceo', 'corporate', 'extortion'],
    createdAt: '2025-09-08T08:00:00Z',
    updatedAt: '2025-09-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS066',
    title: 'Parcel Scam — Customs Clearance Fee for Intercepted Package',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Victim receives a call claiming an international parcel is held at customs and must pay clearance fees immediately to avoid legal action.',
    scenario:
      'A caller poses as a customs officer and claims an international parcel addressed to the victim contains foreign currency or valuable items. A "customs clearance fee" of several thousand rupees must be paid via UPI to release the parcel. No parcel exists; the fee goes to the attacker.',
    timeline: [
      { time: '2025-08-15T10:00:00Z', description: 'Victim receives call about parcel held at customs.' },
      { time: '2025-08-15T10:15:00Z', description: 'Victim pays ₹7,500 customs fee via UPI.' },
      { time: '2025-08-15T12:00:00Z', description: 'No parcel delivered; caller unreachable.' },
    ],
    warningSigns: [
      { sign: 'Call from "customs" demanding immediate UPI payment', details: 'Indian Customs operates through official channels; payment via UPI is not a standard process.' },
      { sign: 'Parcel you did not order or expect', details: 'Verify with the actual courier company before paying.' },
    ],
    preventionTips: [
      { tip: 'Verify any parcel claims via the official customs portal or AWB tracking', audience: 'end-user', priority: 1 },
      { tip: 'Do not pay customs or clearance fees to individuals via UPI; use official channels', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report the caller\'s number to cybercrime helpline 1930', expectedOutcome: 'Number may be blacklisted.' },
      { step: 'File cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 506 IPC', name: 'Criminal intimidation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['parcel', 'customs', 'social_engineering', 'vishing'],
    createdAt: '2025-08-18T08:00:00Z',
    updatedAt: '2025-08-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS067',
    title: 'Fake Mutual Fund Advisor Scam — WhatsApp Group Pump',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'A WhatsApp group posing as SEBI-registered advisors provides stock tips that consistently fail after the operators front-run the trades.',
    scenario:
      'Victims are added to a WhatsApp group claiming to be managed by "SEBI-certified experts." After a few accurate tips, members are encouraged to invest larger amounts. The operators front-run the stock by buying first, then releasing the tip, profiting from the artificial demand while victims buy at peak prices.',
    timeline: [
      { time: '2025-09-01T09:00:00Z', description: 'Victim added to "SEBI certified" WhatsApp tips group.' },
      { time: '2025-09-05T10:00:00Z', description: 'Three tips prove correct; victim invests ₹50,000 following group.' },
      { time: '2025-09-10T11:00:00Z', description: 'Group advises buy; stock craters after insiders exit.' },
    ],
    warningSigns: [
      { sign: 'WhatsApp group claiming SEBI certification', details: 'Verify advisor registration on SEBI\'s official advisor database at sebi.gov.in.' },
      { sign: 'Early wins followed by large loss recommendation', details: 'Classic pattern to build trust before a major pump-and-dump.' },
    ],
    preventionTips: [
      { tip: 'Verify investment advisor SEBI registration before following any tips', audience: 'investor', priority: 1 },
      { tip: 'Do not invest large amounts based solely on group tips; do independent research', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Report to SEBI investor helpline and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['mutual-fund', 'stock-tips', 'whatsapp', 'investment'],
    createdAt: '2025-09-14T08:00:00Z',
    updatedAt: '2025-09-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS068',
    title: 'Malware Distribution via Fake Office 365 Update',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Corporate employees receive a phishing email about a mandatory Office 365 update; link installs an infostealer targeting corporate credentials.',
    scenario:
      'An email mimicking Microsoft IT support informs employees that their Office subscription requires urgent update. The link delivers a signed installer that appears to run an update but silently installs an infostealer, exfiltrating saved passwords, browser cookies, and corporate email credentials.',
    timeline: [
      { time: '2025-10-12T08:30:00Z', description: 'Phishing email received by 50+ corporate employees.' },
      { time: '2025-10-12T09:00:00Z', description: 'Several employees run the installer; infostealer deployed.' },
      { time: '2025-10-12T11:00:00Z', description: 'Exfiltrated credentials used for corporate email account takeover.' },
    ],
    warningSigns: [
      { sign: 'Software update delivered via email link', details: 'Software updates happen through the application itself or IT portal, not email links.' },
      { sign: 'Installer requests to disable security software', details: 'Immediate red flag; terminate and report to IT security.' },
    ],
    preventionTips: [
      { tip: 'Update software only through official channels; report unexpected update emails to IT security', audience: 'IT/admin', priority: 1 },
      { tip: 'Deploy email sandboxing and link detonation in corporate email gateway', audience: 'IT/admin' },
    ],
    reportingSteps: [
      { step: 'Isolate affected machines and preserve disk images for forensic analysis', expectedOutcome: 'Evidence for investigation and IOC extraction.' },
      { step: 'Report to CERT-In and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43, IT Act 2000', name: 'Penalty for damage to computer systems', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['malware', 'infostealer', 'corporate', 'phishing'],
    createdAt: '2025-10-15T08:00:00Z',
    updatedAt: '2025-10-15T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS069',
    title: 'UPI Deep Link Exploitation — Auto-Debit via Malicious App',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'A malicious app uses UPI deep links to silently trigger collect requests that auto-debit victim accounts using cached UPI PIN exploits.',
    scenario:
      'A gaming or utility app downloaded from a third-party source contains code that monitors the device for UPI app activity. When the victim opens their UPI app, the malicious app triggers a background collect request, exploiting a UPI deep link vulnerability.',
    timeline: [
      { time: '2025-11-01T10:00:00Z', description: 'Victim installs "premium" gaming APK from third-party site.' },
      { time: '2025-11-05T09:00:00Z', description: 'Victim opens BHIM UPI; malicious app triggers background deep link.' },
      { time: '2025-11-05T09:02:00Z', description: '₹10,000 collect request auto-approved via cached authorization.' },
    ],
    warningSigns: [
      { sign: 'Unexpected UPI debit while app is in background', details: 'Check recently installed apps and revoke UPI permissions.' },
      { sign: 'App requesting overlay and background activity permissions', details: 'Deny these permissions to unknown apps.' },
    ],
    preventionTips: [
      { tip: 'Install apps only from Play Store; review and revoke unnecessary UPI-related permissions', audience: 'end-user', priority: 1 },
      { tip: 'Set transaction notifications for all UPI payments to detect unauthorized debits immediately', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Uninstall suspicious app and report to NPCI and your bank', expectedOutcome: 'Suspicious app flagged; transaction may be reversed.' },
      { step: 'File cybercrime complaint with APK details and transaction ID', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['upi', 'malware', 'deep-link', 'android'],
    createdAt: '2025-11-05T08:00:00Z',
    updatedAt: '2025-11-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS070',
    title: 'WhatsApp Business Impersonation — Fake Order Confirmation with Phishing Link',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fraudsters use WhatsApp Business accounts cloning popular brands to send fake order confirmation links that harvest payment details.',
    scenario:
      'Customer receives a WhatsApp Business message from a cloned brand account confirming a recent order with a "track your order" link. The link opens a phishing page requesting debit card details for "delivery confirmation."',
    timeline: [
      { time: '2025-07-10T10:00:00Z', description: 'Victim receives fake order confirmation WhatsApp from cloned brand.' },
      { time: '2025-07-10T10:10:00Z', description: 'Victim clicks link and enters card number for "delivery confirmation."' },
      { time: '2025-07-10T11:00:00Z', description: 'Unauthorized card transaction executed for ₹12,000.' },
    ],
    warningSigns: [
      { sign: 'Delivery confirmation asking for card details', details: 'Courier and e-commerce platforms never ask for card details to confirm delivery.' },
      { sign: 'Order confirmation WhatsApp from unfamiliar number', details: 'Check sender number against the brand\'s official customer care number.' },
    ],
    preventionTips: [
      { tip: 'Track orders only via official brand app or website; never through links in WhatsApp', audience: 'end-user', priority: 1 },
      { tip: 'Enable virtual card or one-time card features for online transactions', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call the bank immediately to block card and dispute transaction', expectedOutcome: 'Chargeback initiated.' },
      { step: 'Report the cloned WhatsApp Business account to WhatsApp and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['whatsapp', 'phishing', 'e-commerce', 'card-fraud'],
    createdAt: '2025-07-14T08:00:00Z',
    updatedAt: '2025-07-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS071',
    title: 'Ransomware Attack — Hospital Data Encrypted and Held for Bitcoin Ransom',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Ransomware deployed via a phishing email encrypts a hospital\'s patient records and demands Bitcoin payment to restore access.',
    scenario:
      'A hospital administrative staff clicks a macro-enabled invoice attachment in an email. The ransomware encrypts all networked drives including patient records. A ransom note demands 2 BTC within 48 hours for the decryption key. Patient care is disrupted.',
    timeline: [
      { time: '2025-08-10T09:00:00Z', description: 'Staff opens malicious invoice; macro runs ransomware.' },
      { time: '2025-08-10T09:05:00Z', description: 'Ransomware propagates through hospital network via SMB.' },
      { time: '2025-08-10T09:30:00Z', description: 'All shared drives encrypted; ransom note displayed.' },
      { time: '2025-08-10T10:00:00Z', description: 'Hospital activates incident response; CERT-In notified.' },
    ],
    warningSigns: [
      { sign: 'Email with macro-enabled Office attachment from unknown sender', details: 'Disable macros by default and train staff on macro risks.' },
      { sign: 'Unusual network activity and file encryption processes', details: 'EDR tools should detect and alert on mass file renaming.' },
    ],
    preventionTips: [
      { tip: 'Maintain offline backups and test restoration procedures regularly', audience: 'IT/admin', priority: 1 },
      { tip: 'Disable macros, segment networks, and patch systems promptly', audience: 'IT/admin' },
    ],
    reportingSteps: [
      { step: 'Isolate infected systems, activate incident response plan, and notify CERT-In', expectedOutcome: 'Professional assistance to contain spread and analyze sample.' },
      { step: 'Do not pay ransom; report to cyber police with all forensic evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43A, IT Act 2000', name: 'Failure to protect sensitive personal data', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['ransomware', 'hospital', 'malware', 'critical-infrastructure'],
    createdAt: '2025-08-14T08:00:00Z',
    updatedAt: '2025-08-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS072',
    title: 'Deepfake Video Call Scam — Fake Relative Asking for Loan',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Attacker uses deepfake video during WhatsApp/Zoom call to impersonate a relative, convincing victim to transfer money for an emergency.',
    scenario:
      'Victim receives a WhatsApp video call that appears to be from a trusted relative abroad. The deepfake video is convincing enough that the victim believes it. The "relative" explains a medical emergency and asks for an urgent wire transfer. Victim complies before checking with the actual relative.',
    timeline: [
      { time: '2025-10-01T07:00:00Z', description: 'Victim receives WhatsApp video call showing relative\'s face.' },
      { time: '2025-10-01T07:10:00Z', description: 'Victim convinced of emergency and transfers ₹2 lakh.' },
      { time: '2025-10-01T09:00:00Z', description: 'Victim contacts actual relative; fraud discovered.' },
    ],
    warningSigns: [
      { sign: 'Video call quality seems slightly off or audio lags', details: 'Deepfakes often have artifacting around edges of face.' },
      { sign: 'Request for money during an unscheduled call', details: 'Verify by calling back on a different channel.' },
    ],
    preventionTips: [
      { tip: 'Establish a family safe word and always verify money requests via a second call', audience: 'end-user', priority: 1 },
      { tip: 'Ask the caller to perform specific unrehearsed actions (e.g., touch ear, say a keyword) to verify authenticity', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call 1930 to attempt freeze of beneficiary account immediately', expectedOutcome: 'Account may be frozen if reported within golden hour.' },
      { step: 'File FIR with call recording if available', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['deepfake', 'video-call', 'impersonation', 'family'],
    createdAt: '2025-10-04T08:00:00Z',
    updatedAt: '2025-10-04T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS073',
    title: 'Investment Fraud via Instagram — Fake Forex Signal Group',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Instagram accounts showing luxury lifestyles promote paid forex signal groups; members pay subscription and lose money on bad signals.',
    scenario:
      'Influencer-style Instagram accounts post screenshots of trading profits and exotic vacations to attract followers. A paid group subscription (₹5,000–₹20,000/month) provides forex signals. Signals consistently lose money; the operator profits from subscriptions.',
    timeline: [
      { time: '2025-06-01T09:00:00Z', description: 'Victim follows Instagram trader with impressive profit screenshots.' },
      { time: '2025-06-03T11:00:00Z', description: 'Victim pays ₹10,000 for monthly signal subscription.' },
      { time: '2025-06-30T10:00:00Z', description: 'All signals result in losses; account loses ₹30,000 following signals.' },
    ],
    warningSigns: [
      { sign: 'Trader showing only wins and luxury lifestyle', details: 'Verify track record via audited statements; screenshots can be fabricated.' },
      { sign: 'High subscription fee for trading signals', details: 'SEBI-registered advisors charge regulated fees and disclose risks.' },
    ],
    preventionTips: [
      { tip: 'Only use SEBI-registered investment advisers; check sebi.gov.in for registration', audience: 'investor', priority: 1 },
      { tip: 'Never trust lifestyle marketing as proof of trading ability', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Report the Instagram account and file complaint with SEBI and cyber cell', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['forex', 'instagram', 'investment', 'signals'],
    createdAt: '2025-07-05T08:00:00Z',
    updatedAt: '2025-07-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS074',
    title: 'Fake Aadhaar Update App — Spyware Harvests All Device Data',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'An app claiming to update Aadhaar details installs spyware that exfiltrates call logs, messages, photos, and banking app data.',
    scenario:
      'A link circulates claiming that Aadhaar needs to be updated via a new app. Installing the APK grants extensive permissions. The app is spyware that uploads call logs, SMS (including OTPs), photos, and banking app data to attacker servers.',
    timeline: [
      { time: '2025-05-20T09:00:00Z', description: 'WhatsApp message with Aadhaar update APK link circulates.' },
      { time: '2025-05-20T09:30:00Z', description: 'Victim installs APK and grants all permissions.' },
      { time: '2025-05-20T10:00:00Z', description: 'Spyware begins exfiltrating data to C2 server.' },
      { time: '2025-05-21T08:00:00Z', description: 'Bank account drained using harvested OTPs overnight.' },
    ],
    warningSigns: [
      { sign: 'APK claiming to update government documents', details: 'Aadhaar updates are done via mAadhaar app or UIDAI portal only.' },
      { sign: 'App requesting SMS read, call log, and camera permissions', details: 'Government apps do not require these permissions for document updates.' },
    ],
    preventionTips: [
      { tip: 'Install Aadhaar-related apps only from UIDAI official links on Play Store', audience: 'end-user', priority: 1 },
      { tip: 'Regularly review app permissions and revoke unnecessary ones', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Factory reset phone; change all banking and email passwords from a clean device', expectedOutcome: 'Eliminate spyware and prevent ongoing data theft.' },
      { step: 'File cybercrime complaint and contact bank', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43, IT Act 2000', name: 'Penalty for unauthorized access', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['aadhaar', 'spyware', 'malware', 'apk'],
    createdAt: '2025-05-24T08:00:00Z',
    updatedAt: '2025-05-24T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS075',
    title: 'Social Media Account Takeover — Email Phishing for Instagram Credentials',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Email claiming Instagram copyright violation asks users to submit credentials to avoid account removal; credentials harvested and accounts sold.',
    scenario:
      'Influencers and businesses receive emails from what appears to be Instagram support claiming a copyright violation. Clicking "Appeal" leads to a fake Instagram login. Credentials entered are captured; accounts are sold on dark web marketplaces.',
    timeline: [
      { time: '2025-04-20T09:00:00Z', description: 'Phishing email received about copyright violation.' },
      { time: '2025-04-20T09:10:00Z', description: 'Victim clicks appeal link and enters Instagram credentials.' },
      { time: '2025-04-20T10:00:00Z', description: 'Password changed by attacker; account locked out.' },
    ],
    warningSigns: [
      { sign: 'Email about copyright strike asking for login', details: 'Instagram handles copyright via in-app notifications, not email logins.' },
      { sign: 'Login URL not instagram.com exactly', details: 'Check domain carefully; phishing uses lookalikes.' },
    ],
    preventionTips: [
      { tip: 'Enable 2FA on Instagram; all security issues are managed in-app not via email', audience: 'end-user', priority: 1 },
      { tip: 'Use a password manager to detect lookalike domains at login', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Use Instagram\'s account recovery tool immediately', expectedOutcome: 'Reclaim account before further changes.' },
      { step: 'Report phishing email and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['instagram', 'phishing', 'account-takeover', 'social-media'],
    createdAt: '2025-04-24T08:00:00Z',
    updatedAt: '2025-04-24T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS076',
    title: 'Juice Jacking — Malware via Public USB Charging Station',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Victim charges phone at a compromised public USB port at an airport or mall; malware silently installed and data exfiltrated.',
    scenario:
      'An attacker compromises public USB charging stations by replacing them with devices that simultaneously charge and install malware or exfiltrate data from connected phones. Victim connects phone; malware installs silently in the background.',
    timeline: [
      { time: '2025-09-01T09:00:00Z', description: 'Victim uses USB charging port at airport lounge.' },
      { time: '2025-09-01T09:05:00Z', description: 'Malware silently downloaded to device via compromised port.' },
      { time: '2025-09-03T10:00:00Z', description: 'Banking credentials exfiltrated; account accessed remotely.' },
    ],
    warningSigns: [
      { sign: 'Device shows "Trust this computer" prompt at a charging station', details: 'Only AC wall adapters should be used; trust prompts indicate data connection.' },
      { sign: 'Phone gets unusually warm or battery drains rapidly after charging', details: 'Background processes may indicate malware activity.' },
    ],
    preventionTips: [
      { tip: 'Use only AC outlet adapters or carry a portable power bank; avoid USB data ports in public', audience: 'end-user', priority: 1 },
      { tip: 'Use a USB data blocker (charge-only adapter) if USB charging is necessary', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Run mobile antivirus scan and factory reset if malware is detected', expectedOutcome: 'Eliminate malware from device.' },
      { step: 'Report the compromised charging station to facility management and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['juice-jacking', 'usb', 'malware', 'public-charging'],
    createdAt: '2025-09-05T08:00:00Z',
    updatedAt: '2025-09-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS077',
    title: 'Supply Chain Attack — Malicious npm Package in Developer Tool',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'A popular npm package used by Indian fintech developers is compromised with malicious code that exfiltrates environment variables including API keys.',
    scenario:
      'A widely used npm utility package is compromised by the attacker hijacking the maintainer\'s account. A malicious version is published containing code that reads process.env and sends API keys, database credentials, and cloud secrets to an attacker-controlled endpoint.',
    timeline: [
      { time: '2025-08-15T09:00:00Z', description: 'Compromised npm package version published.' },
      { time: '2025-08-15T10:00:00Z', description: 'Thousands of developers update dependency; malicious code runs.' },
      { time: '2025-08-15T14:00:00Z', description: 'Attacker uses exfiltrated cloud credentials to access production databases.' },
    ],
    warningSigns: [
      { sign: 'npm package version published unexpectedly with minor version bump', details: 'Lock dependency versions; audit new versions before updating.' },
      { sign: 'Unexpected outbound HTTP calls from build pipelines', details: 'Monitor and alert on unusual network egress from CI/CD.' },
    ],
    preventionTips: [
      { tip: 'Pin dependency versions and use package-lock.json; review changelogs before updating', audience: 'IT/admin', priority: 1 },
      { tip: 'Scan dependencies with tools like npm audit, Snyk, or Socket.dev', audience: 'IT/admin' },
    ],
    reportingSteps: [
      { step: 'Rotate all exposed credentials immediately and audit cloud access logs', expectedOutcome: 'Prevent further unauthorized access.' },
      { step: 'Report to CERT-In and notify affected downstream users', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43, IT Act 2000', name: 'Unauthorized access to computer systems', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['supply-chain', 'npm', 'malware', 'developer'],
    createdAt: '2025-08-18T08:00:00Z',
    updatedAt: '2025-08-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS078',
    title: 'Job Scam — Fake Abroad Placement Agent Charges for Visa',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Fraudulent overseas job placement agencies charge visa and processing fees for non-existent jobs; applicants lose lakhs.',
    scenario:
      'Victims see social media ads for high-paying jobs in Gulf countries. After an "interview" via WhatsApp, they receive an offer letter and are asked to pay visa processing, medical test, and air ticket fees totaling ₹2–5 lakh. No visa or ticket is provided.',
    timeline: [
      { time: '2025-07-10T10:00:00Z', description: 'Victim applies for Gulf job via Facebook ad.' },
      { time: '2025-07-12T11:00:00Z', description: 'WhatsApp interview; offer letter received.' },
      { time: '2025-07-15T09:00:00Z', description: 'Total of ₹3 lakh paid in installments for visa and ticket.' },
      { time: '2025-07-20T09:00:00Z', description: 'Agency stops responding; complaint filed with MEA.' },
    ],
    warningSigns: [
      { sign: 'Placement fee exceeding eMigrate norms', details: 'Government-mandated placement fee for ECR passport holders is capped; check MEA portal.' },
      { sign: 'Offer letter without verifiable company registration', details: 'Verify employer at the destination country\'s labor department website.' },
    ],
    preventionTips: [
      { tip: 'Use only MOIA-registered recruitment agents listed on emigrate.gov.in', audience: 'jobseeker', priority: 1 },
      { tip: 'Never pay recruitment fees exceeding government-mandated caps', audience: 'jobseeker' },
    ],
    reportingSteps: [
      { step: 'File complaint with MEA at madad.gov.in and local cyber police', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Report to Protector of Emigrants in your state', expectedOutcome: 'Recruitment agency may be blacklisted.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 24, Emigration Act 1983', name: 'Recruiting without a valid licence', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['jobs', 'abroad', 'visa', 'advance-fee'],
    createdAt: '2025-07-25T08:00:00Z',
    updatedAt: '2025-07-25T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS079',
    title: 'QR Code at Restaurant — Malicious Redirect via Sticker Overlay',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Attacker places a sticker QR code over the legitimate restaurant menu QR; customers are directed to a phishing site that captures card details.',
    scenario:
      'A QR sticker is placed over the original restaurant table QR code. Scanning opens a convincing fake food ordering page that asks for card details for "pre-order." Customers enter details before realizing the real menu is different.',
    timeline: [
      { time: '2025-06-15T13:00:00Z', description: 'Attacker places malicious QR sticker on table QR.' },
      { time: '2025-06-15T13:30:00Z', description: 'Customer scans and enters card details for order.' },
      { time: '2025-06-16T10:00:00Z', description: 'Card used for online transactions; restaurant alerted by customers.' },
    ],
    warningSigns: [
      { sign: 'QR opening food ordering page asking for card details', details: 'Most restaurant QR codes only show the menu; payment is at the counter.' },
      { sign: 'QR sticker appears raised or stuck on top of another', details: 'Feel the QR; a sticker on top is a red flag.' },
    ],
    preventionTips: [
      { tip: 'Never enter card details on pages opened from physical QR codes at restaurants', audience: 'end-user', priority: 1 },
      { tip: 'Restaurant owners should laminate QR codes or use tamper-evident materials', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Report to restaurant and bank; initiate card block immediately', expectedOutcome: 'Card blocked; chargeback filed.' },
      { step: 'File cybercrime complaint and preserve photo of QR sticker as evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['qr', 'restaurant', 'card-fraud', 'phishing'],
    createdAt: '2025-06-18T08:00:00Z',
    updatedAt: '2025-06-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS080',
    title: 'Fake RTO App — Vehicle RC Download Phishing',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'A fake mParivahan/RTO app on third-party stores harvests driving licence and Aadhaar details from vehicle owners.',
    scenario:
      'Vehicle owner searches for RC or DL download app. A cloned mParivahan app on a third-party store requests Aadhaar and driving licence details for "document download." Data collected is used for KYC fraud.',
    timeline: [
      { time: '2025-05-01T10:00:00Z', description: 'User downloads fake mParivahan APK from web search.' },
      { time: '2025-05-01T10:15:00Z', description: 'User submits DL number and Aadhaar for document access.' },
      { time: '2025-05-10T09:00:00Z', description: 'Victim discovers loans applied in their name.' },
    ],
    warningSigns: [
      { sign: 'App not on official Play Store listing', details: 'mParivahan is published by NIC; verify publisher.' },
      { sign: 'App asking for Aadhaar OTP', details: 'Official mParivahan does not require Aadhaar OTP for document display.' },
    ],
    preventionTips: [
      { tip: 'Download mParivahan only from the official Play Store; verify publisher as NIC/MoRTH', audience: 'vehicle-owner', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Lock Aadhaar biometrics and report to UIDAI and cyber police', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['rto', 'aadhaar', 'phishing', 'vehicle'],
    createdAt: '2025-05-08T08:00:00Z',
    updatedAt: '2025-05-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS081',
    title: 'Investment Scam via YouTube — Fake Stock Market Course',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'YouTube channels selling stock market courses collect fees and share pump-and-dump tips to students as part of the "curriculum."',
    scenario:
      'A YouTube channel with thousands of subscribers sells a "professional stock market course" for ₹20,000. Course content includes live stock picks that are actually coordinated pump signals. Students follow the advice, buying into manipulated stocks and losing money.',
    timeline: [
      { time: '2025-08-01T09:00:00Z', description: 'Student purchases stock market course via payment link.' },
      { time: '2025-08-05T10:00:00Z', description: 'Course provides "live picks" that spike briefly before crashing.' },
      { time: '2025-08-15T10:00:00Z', description: 'Student loses ₹40,000 following picks; course refund denied.' },
    ],
    warningSigns: [
      { sign: 'Course content includes specific live stock picks', details: 'Courses should teach methodology; specific tips require SEBI registration.' },
      { sign: 'No risk disclaimers or SEBI registration disclosed', details: 'Check SEBI registered investment adviser list.' },
    ],
    preventionTips: [
      { tip: 'Verify instructor SEBI registration before purchasing any investment course with tips', audience: 'investor', priority: 1 },
      { tip: 'Be cautious of courses sold via social media with income/profit testimonials', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Report to SEBI and file consumer court complaint; document all communication', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['youtube', 'investment', 'stock-market', 'course'],
    createdAt: '2025-08-20T08:00:00Z',
    updatedAt: '2025-08-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS082',
    title: 'Credential Stuffing Attack — E-Commerce Account Takeover',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Attackers use leaked credential lists to perform automated login attempts on major e-commerce platforms, taking over accounts with saved payment methods.',
    scenario:
      'Using credentials from a prior data breach, attackers automate login attempts against Amazon India or Flipkart. Accounts where passwords were reused are taken over. Attackers immediately place orders using saved credit cards and change delivery addresses.',
    timeline: [
      { time: '2025-07-20T02:00:00Z', description: 'Automated credential stuffing script runs against e-commerce platform.' },
      { time: '2025-07-20T02:30:00Z', description: 'Several thousand accounts successfully breached.' },
      { time: '2025-07-20T03:00:00Z', description: 'Orders placed with saved cards and delivered to attacker addresses.' },
    ],
    warningSigns: [
      { sign: 'Unexpected login alert from new device or location', details: 'Review active sessions and sign out all other devices.' },
      { sign: 'Unrecognized orders or address changes in account', details: 'Monitor order history and account settings.' },
    ],
    preventionTips: [
      { tip: 'Use unique passwords for every service; use a password manager', audience: 'end-user', priority: 1 },
      { tip: 'Enable 2FA on all e-commerce and payment accounts', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact platform customer care to cancel fraudulent orders and lock account', expectedOutcome: 'Orders may be intercepted if reported before delivery.' },
      { step: 'File cybercrime complaint and notify card issuer for chargeback', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['credential-stuffing', 'e-commerce', 'account-takeover', 'data-breach'],
    createdAt: '2025-07-24T08:00:00Z',
    updatedAt: '2025-07-24T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS083',
    title: 'Fake DigiLocker App — Identity Data Harvesting',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'A cloned DigiLocker app on third-party stores requests Aadhaar OTP to "sync documents," exfiltrating complete identity data.',
    scenario:
      'User downloads a fake DigiLocker APK promoted via WhatsApp. The app asks for Aadhaar number and OTP for "document sync." Once entered, the credentials are used to access the real DigiLocker and download all stored government documents including DL, PAN, RC, and Aadhaar.',
    timeline: [
      { time: '2025-06-10T09:00:00Z', description: 'WhatsApp message promoting "new DigiLocker" APK with improved features.' },
      { time: '2025-06-10T09:30:00Z', description: 'Victim installs and logs in; real DigiLocker session hijacked.' },
      { time: '2025-06-10T10:00:00Z', description: 'Attacker downloads all documents and uses for identity fraud.' },
    ],
    warningSigns: [
      { sign: 'DigiLocker app from any source other than Play Store publisher "National e-Governance Division"', details: 'Official DigiLocker is published by NeGD; verify publisher.' },
      { sign: 'App asking for Aadhaar OTP on first launch', details: 'Report and uninstall immediately.' },
    ],
    preventionTips: [
      { tip: 'Download DigiLocker only from Play Store/App Store with verified publisher', audience: 'end-user', priority: 1 },
      { tip: 'Enable login notifications on DigiLocker account', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Change DigiLocker password immediately and enable 2FA', expectedOutcome: 'Prevent further document access.' },
      { step: 'Report to cybercrime portal and UIDAI', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['digilocker', 'aadhaar', 'identity_theft', 'phishing'],
    createdAt: '2025-06-14T08:00:00Z',
    updatedAt: '2025-06-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS084',
    title: 'Vishing — Fake Electricity Department Disconnect Call',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Caller poses as electricity department employee threatening immediate disconnection unless dues are paid via UPI in the next hour.',
    scenario:
      'Victim receives a call claiming their electricity connection will be cut in one hour due to an unpaid bill. A UPI ID is provided for immediate payment. Under time pressure, victim pays without verifying. The UPI ID belongs to the attacker.',
    timeline: [
      { time: '2025-09-10T11:00:00Z', description: 'Victim receives call about electricity disconnection in 1 hour.' },
      { time: '2025-09-10T11:10:00Z', description: 'Victim sends ₹3,200 to provided UPI ID.' },
      { time: '2025-09-10T12:00:00Z', description: 'Electricity board confirms no pending bill; fraud realized.' },
    ],
    warningSigns: [
      { sign: 'Urgent deadline creating time pressure', details: 'Utilities send written notices before disconnection; not calls with 1-hour deadlines.' },
      { sign: 'Payment requested to a personal UPI ID rather than official account', details: 'Utility payments should be to official company registered payment handles.' },
    ],
    preventionTips: [
      { tip: 'Check pending bill on official electricity board app or website before paying', audience: 'end-user', priority: 1 },
      { tip: 'Do not make payments based on unsolicited calls; use official payment portals', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact electricity board to confirm and report the fake caller', expectedOutcome: 'Caller number flagged by authorities.' },
      { step: 'File cybercrime complaint with UPI transaction ID', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['vishing', 'electricity', 'social_engineering', 'upi'],
    createdAt: '2025-09-12T08:00:00Z',
    updatedAt: '2025-09-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS085',
    title: 'Telegram Trading Bot Scam — Automated Profit Promise',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Telegram bot promises automated crypto arbitrage profits; victims deposit funds into bot wallet that routes to attacker.',
    scenario:
      'Users are invited to add a Telegram bot claiming to perform automated crypto arbitrage across exchanges. The bot shows simulated profit dashboards. Users deposit BTC or USDT to the bot wallet; funds are immediately transferred to attacker-controlled wallets. Withdrawal is never processed.',
    timeline: [
      { time: '2025-10-05T10:00:00Z', description: 'Victim adds Telegram bot and sees impressive demo returns.' },
      { time: '2025-10-06T11:00:00Z', description: 'Victim deposits 0.05 BTC to bot wallet address.' },
      { time: '2025-10-07T09:00:00Z', description: 'Funds moved to attacker wallet immediately.' },
      { time: '2025-10-10T09:00:00Z', description: 'Bot stops responding; no withdrawal possible.' },
    ],
    warningSigns: [
      { sign: 'Telegram bot claiming guaranteed arbitrage profits', details: 'No automated system can guarantee consistent arbitrage returns.' },
      { sign: 'Bot provides its own wallet address for deposits', details: 'Legitimate bots use connected exchange APIs; they do not hold funds directly.' },
    ],
    preventionTips: [
      { tip: 'Never deposit funds to a third-party wallet for automated trading; use API keys with exchange', audience: 'trader', priority: 1 },
      { tip: 'Test any automated system with minimal amount on a testnet or paper trading first', audience: 'trader' },
    ],
    reportingSteps: [
      { step: 'Document all bot messages and wallet addresses; report to cyber cell', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['telegram', 'bot', 'crypto', 'arbitrage'],
    createdAt: '2025-10-12T08:00:00Z',
    updatedAt: '2025-10-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS086',
    title: 'AI Chatbot Phishing — Fake Bank Chat Support Harvests OTP',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Fake AI-powered bank chat support on a phishing site convincingly collects credentials and OTPs through a natural conversation interface.',
    scenario:
      'Victim lands on a phishing page via a Google ad. The page includes a live chat bot that mimics the bank\'s AI support assistant. The bot asks for account number, OTP, and a PIN in sequence as part of a "verification." Credentials are relayed in real time to the attacker\'s session.',
    timeline: [
      { time: '2025-11-10T10:00:00Z', description: 'Victim clicks bank ad; lands on phishing page with live chatbot.' },
      { time: '2025-11-10T10:05:00Z', description: 'Chatbot requests account number, then OTP.' },
      { time: '2025-11-10T10:08:00Z', description: 'Attacker relays OTP to real bank session; transfer completed.' },
    ],
    warningSigns: [
      { sign: 'Bank chatbot on a page reached via a search ad', details: 'Access bank chatbot only via the official app or bookmarked site.' },
      { sign: 'Chatbot asking for full OTP', details: 'Legitimate chatbots do not need OTP; they redirect to authenticated app sessions.' },
    ],
    preventionTips: [
      { tip: 'Interact with bank support only via official app or by calling the number on your card', audience: 'end-user', priority: 1 },
      { tip: 'No chatbot legitimately needs your OTP; hang up or close the page if asked', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Call bank to freeze account; change credentials from clean device', expectedOutcome: 'Limit ongoing unauthorized access.' },
      { step: 'Report phishing URL and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['ai-chatbot', 'phishing', 'banking', 'otp'],
    createdAt: '2025-11-14T08:00:00Z',
    updatedAt: '2025-11-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS087',
    title: 'Crypto Airdrop Scam — Fake Token Distribution Requires Gas Fee',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Users are informed they have received a large token airdrop but must pay a gas fee in ETH to claim; fee is collected and tokens never arrive.',
    scenario:
      'An email or DM claims the recipient has been allocated a large airdrop of a valuable token. To "claim" the airdrop, they must send 0.05 ETH as a gas fee to a provided wallet. The ETH is taken and no tokens are ever sent.',
    timeline: [
      { time: '2025-11-01T09:00:00Z', description: 'Victim receives email about large token airdrop.' },
      { time: '2025-11-01T09:20:00Z', description: 'Victim sends 0.05 ETH as gas fee to claim.' },
      { time: '2025-11-01T10:00:00Z', description: 'No tokens received; claim page gone.' },
    ],
    warningSigns: [
      { sign: 'Airdrop requiring upfront payment to claim', details: 'Legitimate airdrops do not charge gas fees upfront; gas is deducted from the received tokens or is minimal.' },
      { sign: 'Airdrop announced only via email or DM, not on official channels', details: 'Verify all airdrops via the project\'s official website and Twitter.' },
    ],
    preventionTips: [
      { tip: 'Never pay upfront fees to claim airdrops; research on official project channels first', audience: 'investor', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report attacker wallet to blockchain analytics and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['airdrop', 'crypto', 'gas-fee', 'scam'],
    createdAt: '2025-11-05T08:00:00Z',
    updatedAt: '2025-11-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS088',
    title: 'UPI Auto-Pay Scam — Malicious Subscription Enrollment',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Victim unknowingly enrolls in recurring UPI auto-pay via a deceptive click-through on a scam website; monthly debits continue silently.',
    scenario:
      'While browsing a fake discount site, victim clicks a "Verify to Unlock Discount" button that initiates a UPI auto-pay mandate. The PIN entry approves a recurring ₹999/month debit. Victim does not notice until several months of debits appear on their statement.',
    timeline: [
      { time: '2025-05-15T11:00:00Z', description: 'Victim clicks "verify" button on fake discount site; UPI mandate screen appears.' },
      { time: '2025-05-15T11:02:00Z', description: 'Victim enters UPI PIN, approving recurring ₹999/month mandate.' },
      { time: '2025-08-01T09:00:00Z', description: 'Victim notices three months of unexplained debits and investigates.' },
    ],
    warningSigns: [
      { sign: 'UPI PIN entry on an unknown website', details: 'Entering PIN on any site outside your banking app should be treated with extreme caution.' },
      { sign: 'Mandate approval screen appearing unexpectedly', details: 'Read all UPI screens carefully; mandate means recurring debit.' },
    ],
    preventionTips: [
      { tip: 'Review all active UPI mandates in your bank app regularly and cancel unknown ones', audience: 'end-user', priority: 1 },
      { tip: 'Never enter UPI PIN on websites; UPI PIN should only be entered in your UPI app', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Cancel the UPI mandate immediately via bank app under "Manage Mandates"', expectedOutcome: 'Stops future debits.' },
      { step: 'Contact bank for refund of unauthorized mandated debits and file complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['upi', 'auto-pay', 'mandate', 'subscription'],
    createdAt: '2025-08-05T08:00:00Z',
    updatedAt: '2025-08-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS089',
    title: 'Data Broker Exploitation — Leaked KYC Enables Account Opening',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Leaked KYC data from fintech or telecom providers is used to open fraudulent bank accounts and apply for credit in victims\' names.',
    scenario:
      'Personal data including Aadhaar, PAN, address, and selfie photos leaked from a fintech data breach is purchased on the dark web. Attackers use this data to complete e-KYC at banks and NBFCs, opening accounts and applying for credit lines in the victim\'s name.',
    timeline: [
      { time: '2025-06-01T09:00:00Z', description: 'Data breach at fintech company exposes KYC records of 2 lakh users.' },
      { time: '2025-06-10T10:00:00Z', description: 'Leaked data sold on dark web forums.' },
      { time: '2025-06-15T11:00:00Z', description: 'Fraudulent accounts opened and credit applied for in victims\' names.' },
      { time: '2025-07-01T09:00:00Z', description: 'Victims receive loan recovery calls they know nothing about.' },
    ],
    warningSigns: [
      { sign: 'Loan recovery calls for products you never applied for', details: 'Check CIBIL report immediately for unauthorized credit lines.' },
      { sign: 'Unknown accounts appearing on CIBIL or credit bureau report', details: 'Monitor credit report quarterly via free annual reports.' },
    ],
    preventionTips: [
      { tip: 'Monitor CIBIL and credit bureau reports annually; place a fraud alert if breach suspected', audience: 'end-user', priority: 1 },
      { tip: 'Lock Aadhaar biometrics when not in use; limit KYC submissions to essential services', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'File complaint with UIDAI, RBI Sachet, and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
      { step: 'Dispute fraudulent credit lines with CIBIL and the lender', expectedOutcome: 'Fraudulent accounts marked and removed from credit file.' },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 43A, IT Act 2000', name: 'Failure to protect personal data (against the breached company)', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['data-breach', 'kyc', 'identity_theft', 'credit-fraud'],
    createdAt: '2025-07-05T08:00:00Z',
    updatedAt: '2025-07-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS090',
    title: 'Phishing via SMS — Fake IRCTC Refund with Malicious Link',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Travelers receive an SMS claiming a train ticket refund is available; link leads to phishing page capturing bank login credentials.',
    scenario:
      'An SMS mimicking IRCTC informs a passenger that a refund for a cancelled journey is pending and to claim it via a link. The link opens a convincing IRCTC login clone that captures username, password, and bank credentials entered for the "refund form."',
    timeline: [
      { time: '2025-09-15T09:00:00Z', description: 'Passenger receives SMS about IRCTC refund.' },
      { time: '2025-09-15T09:10:00Z', description: 'Victim logs into fake IRCTC page and submits bank details.' },
      { time: '2025-09-15T10:00:00Z', description: 'Bank account accessed and ₹18,000 transferred.' },
    ],
    warningSigns: [
      { sign: 'SMS with refund link rather than automatic credit', details: 'IRCTC refunds are credited automatically to the booking payment method.' },
      { sign: 'Login page asking for bank details in addition to IRCTC credentials', details: 'IRCTC does not ask for bank details to process refunds.' },
    ],
    preventionTips: [
      { tip: 'Check refund status only via the official IRCTC app or website', audience: 'end-user', priority: 1 },
      { tip: 'Refunds from IRCTC are automatic; no action is required from the passenger', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact bank to freeze account and report phishing to IRCTC helpdesk', expectedOutcome: 'Account secured and phishing link reported for takedown.' },
      { step: 'File cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['irctc', 'refund', 'phishing', 'smishing'],
    createdAt: '2025-09-18T08:00:00Z',
    updatedAt: '2025-09-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS091',
    title: 'Fake Police Cybercrime Portal — Re-Victimization Scam',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Prior fraud victims searching for help find a fake cybercrime portal; they pay a "recovery fee" and are defrauded again.',
    scenario:
      'Victims of earlier fraud search online for "how to report cybercrime" or "recover money from UPI fraud." Sponsored search results lead to a fake cybercrime portal that promises fund recovery for a fee. Victims pay ₹5,000–₹20,000 in recovery fees and receive nothing.',
    timeline: [
      { time: '2025-07-01T10:00:00Z', description: 'Fraud victim searches for cybercrime recovery portal.' },
      { time: '2025-07-01T10:10:00Z', description: 'Victim reaches fake portal and pays ₹10,000 recovery fee.' },
      { time: '2025-07-05T09:00:00Z', description: 'No recovery; portal stops responding.' },
    ],
    warningSigns: [
      { sign: 'Cybercrime recovery portal found via search ad', details: 'The only legitimate portal is cybercrime.gov.in; it charges no fee.' },
      { sign: 'Promise to recover fraud money for an upfront fee', details: 'No legitimate government service charges for cybercrime reporting.' },
    ],
    preventionTips: [
      { tip: 'Use only the official portal cybercrime.gov.in or call 1930; both are free', audience: 'end-user', priority: 1 },
      { tip: 'Be aware of recovery scammers who target previous fraud victims', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report the fake portal URL to cybercrime.gov.in as a new fraud case', contact: { url: 'https://www.cybercrime.gov.in' }, expectedOutcome: 'Fake portal flagged and removed.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['recovery-scam', 'cybercrime-portal', 're-victimization', 'advance-fee'],
    createdAt: '2025-07-08T08:00:00Z',
    updatedAt: '2025-07-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS092',
    title: 'AI Deepfake Audio — Company CFO Voice Clone for Wire Fraud',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attacker uses AI voice clone of a company\'s CFO to call the accounts team and authorize an emergency wire transfer to a fraudulent account.',
    scenario:
      'Using publicly available earnings call recordings, an attacker clones the voice of a company\'s CFO. They call the accounts payable team claiming an urgent overseas payment must be processed before end of day. The team complies, transferring ₹1.5 crore before the real CFO is aware.',
    timeline: [
      { time: '2025-10-15T14:00:00Z', description: 'Accounts team receives call from convincing "CFO" voice clone.' },
      { time: '2025-10-15T14:15:00Z', description: 'Team initiates SWIFT transfer of ₹1.5 crore as instructed.' },
      { time: '2025-10-15T16:00:00Z', description: 'Real CFO contacts team; fraud confirmed.' },
    ],
    warningSigns: [
      { sign: 'Out-of-band wire transfer request with urgency', details: 'Verify all large transfers through secondary confirmation protocol.' },
      { sign: 'Caller does not respond to challenge questions or deviates from usual process', details: 'Establish verbal authentication codes for high-value transactions.' },
    ],
    preventionTips: [
      { tip: 'Implement multi-person authorization and callback verification for all wire transfers above a threshold', audience: 'business', priority: 1 },
      { tip: 'Establish a corporate verbal code word system for authorizing unusual transactions', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Contact bank immediately to attempt SWIFT recall; report to CERT-In', expectedOutcome: 'Recall may succeed if funds have not been onward-transferred.' },
      { step: 'File cybercrime complaint and notify RBI if bank is involved', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['voice-clone', 'ai', 'cfo-fraud', 'wire-transfer'],
    createdAt: '2025-10-18T08:00:00Z',
    updatedAt: '2025-10-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS093',
    title: 'Fake eShram Portal — Unorganized Worker Data Harvesting',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fake eShram registration portals target unorganized sector workers, collecting Aadhaar and bank account details for identity fraud.',
    scenario:
      'WhatsApp messages and posters in rural areas advertise fake eShram registration links promising ₹1,000 monthly benefit. Workers submit Aadhaar, bank account, and mobile number on fake portals. Data used to open mule accounts or apply for micro-loans.',
    timeline: [
      { time: '2025-08-01T09:00:00Z', description: 'Fake eShram registration link shared in rural WhatsApp groups.' },
      { time: '2025-08-05T10:00:00Z', description: 'Thousands of workers submit Aadhaar and bank details.' },
      { time: '2025-08-15T09:00:00Z', description: 'Fraudulent UPI accounts and micro-loans registered in workers\' names.' },
    ],
    warningSigns: [
      { sign: 'eShram registration via WhatsApp link promising cash benefit', details: 'Register at eshram.gov.in or through official Common Service Centres.' },
      { sign: 'Registration portal asking for bank account number', details: 'eShram registration does not require bank account number during initial registration.' },
    ],
    preventionTips: [
      { tip: 'Register for eShram only at eshram.gov.in or at your nearest CSC center', audience: 'worker', priority: 1 },
      { tip: 'Community awareness programs to educate rural workers about fake government schemes', audience: 'NGO/admin' },
    ],
    reportingSteps: [
      { step: 'Report fake link to Ministry of Labour helpline and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['eshram', 'government', 'phishing', 'rural'],
    createdAt: '2025-08-20T08:00:00Z',
    updatedAt: '2025-08-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS094',
    title: 'Medical Insurance Fraud — Fake Cashless Claim Portal',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Patients receive SMS about pending cashless insurance claims; fake insurer portal harvests policy details and health data for resale.',
    scenario:
      'A patient who recently submitted a health insurance claim receives an SMS linking to a "claim status" page. The fake portal asks for policy number, Aadhaar, and bank account details to process payment. Data is sold to data brokers or used for identity fraud.',
    timeline: [
      { time: '2025-09-20T10:00:00Z', description: 'Patient receives SMS about pending cashless claim approval.' },
      { time: '2025-09-20T10:10:00Z', description: 'Patient submits policy and bank details on fake portal.' },
      { time: '2025-09-25T09:00:00Z', description: 'Patient discovers data sold; receives phishing calls using health data.' },
    ],
    warningSigns: [
      { sign: 'Insurance claim portal link via SMS', details: 'Check claim status via official insurer app or website; never via SMS links.' },
      { sign: 'Portal asking for Aadhaar for insurance claim', details: 'Insurers do not require Aadhaar for standard claim processing.' },
    ],
    preventionTips: [
      { tip: 'Check insurance claim status only via official insurer app or by calling their verified helpline', audience: 'end-user', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report to IRDA helpline (155255) and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['insurance', 'health', 'phishing', 'data-theft'],
    createdAt: '2025-09-25T08:00:00Z',
    updatedAt: '2025-09-25T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS095',
    title: 'Fake Crypto Staking Platform — Yield Harvesting Scam',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Fraudulent staking platforms promise 50–200% APY on crypto deposits; principal is locked and never returned.',
    scenario:
      'A DeFi platform advertised via Telegram promises extremely high annual yields on ETH and USDT staking. Users deposit crypto; the platform shows accruing rewards but all withdrawal attempts are rejected citing "unbonding periods" that keep extending. Eventually the platform closes.',
    timeline: [
      { time: '2025-09-25T10:00:00Z', description: 'Platform announces 150% APY staking offer.' },
      { time: '2025-09-27T11:00:00Z', description: 'User deposits 1 ETH; rewards appear in dashboard.' },
      { time: '2025-10-10T09:00:00Z', description: 'Withdrawal blocked due to "30-day unbonding period" which keeps extending.' },
      { time: '2025-11-01T09:00:00Z', description: 'Platform disappears; all funds lost.' },
    ],
    warningSigns: [
      { sign: 'APY above 20% is a significant red flag in any staking platform', details: 'Such yields are not sustainable; they signal either fraud or extreme risk.' },
      { sign: 'Withdrawal restrictions with ever-extending lock-up periods', details: 'Read all terms before staking; check smart contract audit status.' },
    ],
    preventionTips: [
      { tip: 'Use only audited, well-established protocols for staking; never chase extreme yields', audience: 'investor', priority: 1 },
      { tip: 'Stake small test amounts first and verify full withdrawal before depositing significant funds', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Document all transaction hashes and platform details; report to cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['staking', 'defi', 'crypto', 'yield'],
    createdAt: '2025-11-05T08:00:00Z',
    updatedAt: '2025-11-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS096',
    title: 'UPI ID Spoofing — Attacker Creates Similar Handle to Known Business',
    category: CaseStudyCategory.UPI_FRAUD,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Fraudster registers a UPI ID nearly identical to a known business to intercept misdirected payments.',
    scenario:
      'A fraudster registers the UPI handle "rajeshsweets@okaxis" while the legitimate business uses "rajesweets@okaxis." Customers who mistype the handle send funds directly to the attacker. The attacker also proactively sends fake payment links to the business\'s regular customers.',
    timeline: [
      { time: '2025-07-01T09:00:00Z', description: 'Attacker registers similar UPI ID to target business.' },
      { time: '2025-07-05T10:00:00Z', description: 'Customers mistype or use a shared fake link; funds go to attacker.' },
      { time: '2025-07-10T11:00:00Z', description: 'Business notices customer complaints about missing payments.' },
    ],
    warningSigns: [
      { sign: 'Payee name shown after entering UPI ID does not match expected business name', details: 'Always confirm payee name before confirming payment.' },
      { sign: 'Payment link shared via social media not matching official business handle', details: 'Verify UPI handles directly with the merchant.' },
    ],
    preventionTips: [
      { tip: 'Always verify the registered name shown after entering any UPI ID before confirming payment', audience: 'end-user', priority: 1 },
      { tip: 'Businesses should prominently display their exact UPI handle on receipts and signage', audience: 'business' },
    ],
    reportingSteps: [
      { step: 'Report the spoofed UPI handle to NPCI and your bank', expectedOutcome: 'NPCI may suspend fraudulent UPI handle.' },
      { step: 'File cybercrime complaint with the attacker UPI handle details', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['upi', 'spoofing', 'business', 'payments'],
    createdAt: '2025-07-14T08:00:00Z',
    updatedAt: '2025-07-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS097',
    title: 'Fake Tata/Reliance Job Offer — Mass Phishing via LinkedIn',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Mass phishing campaign via fake LinkedIn recruiter profiles offers jobs at Tata or Reliance; victims submit resumes and ID documents.',
    scenario:
      'Fake LinkedIn profiles posing as HR executives from Tata Consultancy Services or Reliance Industries send connection requests and job offers. After accepting, candidates are asked to submit resumes, Aadhaar, and PAN for "background screening." Data is harvested for identity fraud.',
    timeline: [
      { time: '2025-06-15T09:00:00Z', description: 'Fake LinkedIn profile contacts 1,000+ job seekers with Tata job offer.' },
      { time: '2025-06-16T10:00:00Z', description: 'Candidates submit resumes, Aadhaar, and PAN as requested.' },
      { time: '2025-06-25T09:00:00Z', description: 'Identity documents used for fraudulent loan applications.' },
    ],
    warningSigns: [
      { sign: 'LinkedIn recruiter profile with few connections and recent creation date', details: 'Verify recruiter identity via official company HR email.' },
      { sign: 'Document submission before any formal interview or screening', details: 'KYC documents should be collected only after formal offer.' },
    ],
    preventionTips: [
      { tip: 'Verify recruiter identity by emailing the company\'s official HR at their corporate domain', audience: 'jobseeker', priority: 1 },
      { tip: 'Never submit Aadhaar or PAN without a formal, verifiable offer letter', audience: 'jobseeker' },
    ],
    reportingSteps: [
      { step: 'Report fake profile to LinkedIn; file cybercrime complaint if documents submitted', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['linkedin', 'jobs', 'phishing', 'identity_theft'],
    createdAt: '2025-06-28T08:00:00Z',
    updatedAt: '2025-06-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS098',
    title: 'Cross-Site Request Forgery on Net Banking — Silent Fund Transfer',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Victim with an active net banking session clicks a malicious link; CSRF attack silently initiates a fund transfer in the background.',
    scenario:
      'User is logged into their bank\'s net banking portal and simultaneously visits a malicious website or clicks a link in an email. The malicious page triggers a hidden cross-site request to the bank\'s transfer endpoint, initiating a fund transfer using the active session cookies.',
    timeline: [
      { time: '2025-05-25T11:00:00Z', description: 'User logged into net banking; clicks link in unrelated email.' },
      { time: '2025-05-25T11:01:00Z', description: 'CSRF request fires silently; bank initiates ₹20,000 transfer.' },
      { time: '2025-05-25T11:30:00Z', description: 'User notices debit alert and contacts bank.' },
    ],
    warningSigns: [
      { sign: 'Unexpected debit while browsing unrelated sites with net banking open', details: 'Log out of net banking when not actively using it.' },
      { sign: 'Net banking session appears active on multiple tabs', details: 'Avoid having banking sessions open alongside general browsing.' },
    ],
    preventionTips: [
      { tip: 'Log out of net banking immediately after use; do not browse other sites while logged in', audience: 'end-user', priority: 1 },
      { tip: 'Use a dedicated browser or profile for banking; avoid clicking email links during banking sessions', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact bank to reverse transaction and report CSRF vulnerability to bank security team', expectedOutcome: 'Transaction reversal and security patch issued.' },
      { step: 'Report to cybercrime portal and CERT-In', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43, IT Act 2000', name: 'Unauthorized access', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['csrf', 'net-banking', 'web-security', 'session'],
    createdAt: '2025-05-28T08:00:00Z',
    updatedAt: '2025-05-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS099',
    title: 'Deepfake KYC Bypass — AI Face Swap Defeats Liveness Check',
    category: CaseStudyCategory.DEEPFAKE,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attackers use real-time deepfake face-swap technology to defeat video liveness checks during digital KYC for financial account opening.',
    scenario:
      'Using a victim\'s ID photo and deepfake software, attackers perform real-time face-swap during the video KYC call at an NBFC or wallet provider. The liveness detection system is deceived; the account is opened in the victim\'s name and used for money mule activity.',
    timeline: [
      { time: '2025-10-01T10:00:00Z', description: 'Attacker uses victim\'s Aadhaar photo and deepfake tool for video KYC session.' },
      { time: '2025-10-01T10:15:00Z', description: 'Liveness check passed; account opened in victim\'s name.' },
      { time: '2025-10-10T09:00:00Z', description: 'Account used for money mule transactions; victim flagged by bank.' },
    ],
    warningSigns: [
      { sign: 'Notice of account opened with your KYC but no application submitted', details: 'Regularly check your CIBIL and credit bureau for new accounts.' },
      { sign: 'Bank or NBFC communicating about transactions you did not initiate', details: 'Act immediately; contact institution and cybercrime authorities.' },
    ],
    preventionTips: [
      { tip: 'Financial institutions must upgrade liveness detection with anti-spoofing AI models', audience: 'business', priority: 1 },
      { tip: 'Lock Aadhaar biometrics and monitor CIBIL regularly as a consumer safeguard', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'File complaint with the financial institution and RBI ombudsman', expectedOutcome: 'Fraudulent account closed and victim cleared.' },
      { step: 'File cybercrime FIR and report to UIDAI for Aadhaar misuse', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['deepfake', 'kyc', 'liveness', 'identity_theft'],
    createdAt: '2025-10-15T08:00:00Z',
    updatedAt: '2025-10-15T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS100',
    title: 'WhatsApp Pink Scam — Malicious App via Forwarded Link',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'A widely forwarded WhatsApp message promises a "WhatsApp Pink" themed version with extra features; clicking installs spyware.',
    scenario:
      'A message circulates saying "Get WhatsApp Pink with more features! Download now." The link installs a malicious APK that grants extensive permissions and steals OTPs, contacts, and banking data. It also auto-forwards the message to all contacts to spread.',
    timeline: [
      { time: '2025-04-25T09:00:00Z', description: 'WhatsApp Pink message begins spreading virally.' },
      { time: '2025-04-25T10:00:00Z', description: 'Users install APK; spyware activates and begins data collection.' },
      { time: '2025-04-25T11:00:00Z', description: 'Message auto-forwarded to victim\'s contacts multiplying spread.' },
    ],
    warningSigns: [
      { sign: 'WhatsApp "special version" link forwarded in groups', details: 'WhatsApp versions are only available via official app stores.' },
      { sign: 'Link asks for installation of APK from outside Play Store', details: 'Do not enable "install from unknown sources" for such links.' },
    ],
    preventionTips: [
      { tip: 'Install WhatsApp and its updates only from Google Play Store or Apple App Store', audience: 'end-user', priority: 1 },
      { tip: 'Warn contacts and do not forward unverified links; report the message to WhatsApp', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Uninstall fake app, factory reset if needed, and change all passwords', expectedOutcome: 'Eliminate spyware from device.' },
      { step: 'Report to cybercrime portal and inform contacts to ignore the message', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43, IT Act 2000', name: 'Unauthorized access', jurisdiction: 'India' },
    ],
    sourceType: 'news',
    sources: [],
    tags: ['whatsapp', 'malware', 'spyware', 'apk'],
    createdAt: '2025-04-28T08:00:00Z',
    updatedAt: '2025-04-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS101',
    title: 'Fake PM Kisan Beneficiary Update — Aadhaar and Bank Data Theft',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Farmers receive SMS claiming their PM Kisan installment will be withheld unless bank account is updated via a link; link is a phishing page.',
    scenario:
      'Farmers are targeted via SMS claiming their next PM Kisan installment requires bank account re-linking due to "database migration." A link to a fake pmkisan.gov.in page collects Aadhaar number, bank account, and IFSC code. Data used for direct benefit transfer fraud.',
    timeline: [
      { time: '2025-08-01T09:00:00Z', description: 'Bulk SMS sent to registered PM Kisan beneficiaries.' },
      { time: '2025-08-01T11:00:00Z', description: 'Farmers enter Aadhaar and bank details on fake portal.' },
      { time: '2025-08-10T09:00:00Z', description: 'DBT meant for farmers redirected to attacker accounts.' },
    ],
    warningSigns: [
      { sign: 'SMS about PM Kisan bank account update with link', details: 'PM Kisan does not send SMS for bank account updates; use only pmkisan.gov.in.' },
      { sign: 'Portal URL not exactly pmkisan.gov.in', details: 'Government scheme updates only occur on official NIC-hosted portals.' },
    ],
    preventionTips: [
      { tip: 'Update PM Kisan bank details only via pmkisan.gov.in or CSC; disregard SMS links', audience: 'farmer', priority: 1 },
      { tip: 'Farmers\' awareness programs about online phishing targeting government beneficiaries', audience: 'NGO/admin' },
    ],
    reportingSteps: [
      { step: 'Report to PM Kisan helpline (155261) and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['pm-kisan', 'farmer', 'phishing', 'dbt'],
    createdAt: '2025-08-14T08:00:00Z',
    updatedAt: '2025-08-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS102',
    title: 'Malicious PDF Invoice — Macro Trojan in Accounting Document',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'A fake vendor invoice sent to a company\'s accounts team installs a remote access trojan via a malicious PDF JavaScript exploit.',
    scenario:
      'An accounts payable executive receives an invoice PDF from an unfamiliar email. Opening the PDF in an unpatched Adobe Reader triggers a JavaScript exploit that downloads and runs a RAT. The attacker gains persistent access to the corporate network.',
    timeline: [
      { time: '2025-09-18T09:00:00Z', description: 'Malicious invoice PDF received and opened by accounts team.' },
      { time: '2025-09-18T09:05:00Z', description: 'JavaScript exploit runs; RAT downloaded and executed.' },
      { time: '2025-09-18T10:00:00Z', description: 'Attacker establishes persistent access to corporate network.' },
      { time: '2025-09-20T09:00:00Z', description: 'Lateral movement detected by EDR; incident response initiated.' },
    ],
    warningSigns: [
      { sign: 'Unexpected vendor invoice from unknown email address', details: 'Verify invoice sender against approved vendor list before opening attachments.' },
      { sign: 'PDF asking to enable JavaScript or showing error on opening', details: 'Legitimate invoices do not require enabling scripts.' },
    ],
    preventionTips: [
      { tip: 'Keep PDF reader and Office suite updated; disable JavaScript in PDF reader settings', audience: 'IT/admin', priority: 1 },
      { tip: 'Use email sandboxing to detonate attachments before delivery to end users', audience: 'IT/admin' },
    ],
    reportingSteps: [
      { step: 'Isolate affected machines; conduct forensic investigation with EDR logs', expectedOutcome: 'Contain breach and identify lateral movement.' },
      { step: 'Report to CERT-In and cybercrime authorities', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43A, IT Act 2000', name: 'Failure to implement reasonable security practices', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['malware', 'pdf', 'invoice', 'corporate'],
    createdAt: '2025-09-22T08:00:00Z',
    updatedAt: '2025-09-22T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS103',
    title: 'Fake Hospital Bill Refund Scam — Targeting Discharged Patients',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Recently discharged patients receive calls about insurance or hospital billing errors offering refunds; OTP sharing leads to bank fraud.',
    scenario:
      'Caller poses as a hospital billing executive and tells the recently discharged patient that their insurance company has cleared excess billing. To process the refund, the caller asks for the patient\'s UPI ID and then sends a collect request for "verification."',
    timeline: [
      { time: '2025-10-05T11:00:00Z', description: 'Patient discharged from hospital; receives refund call same day.' },
      { time: '2025-10-05T11:15:00Z', description: 'Patient approves collect request thinking it is a refund.' },
      { time: '2025-10-05T11:17:00Z', description: '₹8,000 debited from patient account.' },
    ],
    warningSigns: [
      { sign: 'Refund call the same day as hospital discharge', details: 'Insurance refunds take weeks; same-day calls are fraudulent.' },
      { sign: 'Collect request for verification to receive refund', details: 'Approving a collect request never receives money; it sends money.' },
    ],
    preventionTips: [
      { tip: 'Contact the hospital billing department directly using their official number to verify any refund', audience: 'end-user', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Contact bank to dispute; file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['hospital', 'refund', 'upi', 'healthcare'],
    createdAt: '2025-10-08T08:00:00Z',
    updatedAt: '2025-10-08T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS104',
    title: 'Fake Real Estate Portal — Advance Payment for Non-Existent Property',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Fraudulent property listings on cloned real estate portals lure buyers into paying token advances for properties that do not exist or belong to others.',
    scenario:
      'A property listing on a fake 99acres or MagicBricks clone shows a below-market house at an attractive price. The "owner" requests a token advance to block the property before the weekend. After transfer, the contact is lost. The property either does not exist or belongs to an unrelated owner.',
    timeline: [
      { time: '2025-11-10T10:00:00Z', description: 'Buyer finds attractive listing on fake property portal.' },
      { time: '2025-11-10T12:00:00Z', description: 'Owner requests ₹50,000 token advance via UPI.' },
      { time: '2025-11-10T14:00:00Z', description: 'Transfer made; owner stops responding.' },
    ],
    warningSigns: [
      { sign: 'Property price significantly below market rate', details: 'Verify property valuation via government stamp duty portal.' },
      { sign: 'Owner insists on advance before showing property', details: 'Always visit and verify legal title before any payment.' },
    ],
    preventionTips: [
      { tip: 'Verify property details on official registration portal and meet owner in person before any payment', audience: 'buyer', priority: 1 },
      { tip: 'Engage a registered real estate agent and verify RERA registration', audience: 'buyer' },
    ],
    reportingSteps: [
      { step: 'Report to RERA authority and file cybercrime complaint with transaction evidence', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['real-estate', 'advance-fee', 'property', 'marketplace'],
    createdAt: '2025-11-14T08:00:00Z',
    updatedAt: '2025-11-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS105',
    title: 'Student Loan Phishing — Fake Vidyalakshmi Portal',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Students applying for education loans via a fake Vidyalakshmi portal pay processing fees and submit KYC documents to fraudsters.',
    scenario:
      'A fake vidyalakshmi.com portal is promoted via college WhatsApp groups. Students submit Aadhaar, academic certificates, and pay a ₹500 registration fee. No loan is processed; documents are used for further identity fraud.',
    timeline: [
      { time: '2025-07-15T09:00:00Z', description: 'Fake Vidyalakshmi link shared in college group chats.' },
      { time: '2025-07-16T11:00:00Z', description: 'Students submit documents and pay registration fees.' },
      { time: '2025-08-01T10:00:00Z', description: 'Students discover no loan application was registered; file complaints.' },
    ],
    warningSigns: [
      { sign: 'Registration fee for a government education loan portal', details: 'Vidyalakshmi is a free government portal at vidyalakshmi.co.in; it charges no fees.' },
      { sign: 'Portal URL not ending in .co.in as per official site', details: 'Check the domain carefully.' },
    ],
    preventionTips: [
      { tip: 'Apply for education loans only at vidyalakshmi.co.in or through your bank branch', audience: 'student', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report fake portal to Ministry of Education and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['education', 'student-loan', 'phishing', 'government'],
    createdAt: '2025-08-05T08:00:00Z',
    updatedAt: '2025-08-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS106',
    title: 'Mule Account Recruitment via Telegram — Money Laundering Trap',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Young people are recruited via Telegram to rent their bank accounts for a commission; they become unwitting money mules and face criminal charges.',
    scenario:
      'A Telegram message promises ₹5,000–₹10,000 commission for "receiving and forwarding" funds. Account holders share banking credentials. Proceeds of cybercrime are routed through their accounts. When police trace the funds, the account holder is arrested as a mule even if they claim ignorance.',
    timeline: [
      { time: '2025-06-01T10:00:00Z', description: 'Student receives Telegram offer to earn money by lending their account.' },
      { time: '2025-06-03T11:00:00Z', description: 'Student shares net banking credentials; ₹2 crore routed through account.' },
      { time: '2025-06-20T09:00:00Z', description: 'Police trace funds; student arrested as mule account holder.' },
    ],
    warningSigns: [
      { sign: 'Commission to receive and forward money through personal bank account', details: 'This is illegal regardless of what the funds are for; never lend your account.' },
      { sign: 'Offer requiring sharing bank credentials to a stranger', details: 'Sharing credentials is itself a criminal offence.' },
    ],
    preventionTips: [
      { tip: 'Never share bank account credentials or allow others to use your account for a fee', audience: 'end-user', priority: 1 },
      { tip: 'Mule account participation is a criminal offence under PMLA; report such offers to police', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report mule account recruitment offers to cybercrime portal and local police', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 3, PMLA 2002', name: 'Money laundering offence', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['mule-account', 'money-laundering', 'telegram', 'recruitment'],
    createdAt: '2025-06-25T08:00:00Z',
    updatedAt: '2025-06-25T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS107',
    title: 'AI-Generated Fake Review Scam — Inflated Product Ratings on E-Commerce',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Sellers pay for AI-generated fake 5-star reviews; consumers buy substandard products at premium prices based on inflated ratings.',
    scenario:
      'An e-commerce seller uses an AI service to generate thousands of fake positive reviews for an inferior product. Consumers trust the high rating and pay premium prices. Product received is of low quality; return policy is exploitative.',
    timeline: [
      { time: '2025-07-01T09:00:00Z', description: 'Seller uploads fake AI reviews; product rating jumps to 4.8 stars.' },
      { time: '2025-07-05T10:00:00Z', description: 'Product sales increase; consumers pay ₹3,000 for product worth ₹500.' },
      { time: '2025-07-15T09:00:00Z', description: 'Consumers raise complaints; e-commerce platform investigates.' },
    ],
    warningSigns: [
      { sign: 'Reviews are all 5 stars with generic language and same posting dates', details: 'Check review patterns; genuine reviews have variation and specific feedback.' },
      { sign: 'Reviewer profiles are new with no purchase history', details: 'Filter for verified purchase reviews only.' },
    ],
    preventionTips: [
      { tip: 'Use review analysis tools or read verified purchase reviews only', audience: 'end-user', priority: 1 },
      { tip: 'Buy from established brands or verify product on the brand\'s official website', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report fake reviews to the e-commerce platform\'s seller abuse team', expectedOutcome: 'Product listing may be removed and seller penalized.' },
      { step: 'File consumer complaint on INGRAM (ingram.india.gov.in)', expectedOutcome: 'Consumer protection action initiated.' },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['fake-reviews', 'e-commerce', 'ai', 'consumer'],
    createdAt: '2025-07-20T08:00:00Z',
    updatedAt: '2025-07-20T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS108',
    title: 'Fake Cheque Deposit Scam — Advance Against Uncleared Cheque',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Victim receives a high-value fake cheque and is asked to transfer back a portion as a "fee" before the cheque clears; cheque bounces after transfer.',
    scenario:
      'A seller on a marketplace receives a cheque for more than the asking price. The buyer explains the overpayment is for a service and asks the seller to transfer the difference immediately. The cheque later bounces; the transferred amount is lost.',
    timeline: [
      { time: '2025-05-10T10:00:00Z', description: 'Victim receives high-value cheque from buyer for listed item.' },
      { time: '2025-05-10T11:00:00Z', description: 'Buyer requests transfer of ₹15,000 overpayment via UPI.' },
      { time: '2025-05-10T11:30:00Z', description: 'Victim transfers ₹15,000 before cheque clears.' },
      { time: '2025-05-15T09:00:00Z', description: 'Cheque bounces; victim loses ₹15,000.' },
    ],
    warningSigns: [
      { sign: 'Cheque for more than the asking price', details: 'Genuine buyers send exact amounts; overpayment is a classic scam signal.' },
      { sign: 'Request to transfer back a portion before cheque clears', details: 'Never transfer money before a received cheque clears in your account.' },
    ],
    preventionTips: [
      { tip: 'Wait for full cheque clearance (minimum 3 business days) before making any payments to the payer', audience: 'seller', priority: 1 },
      { tip: 'Prefer UPI or NEFT for marketplace transactions instead of cheques', audience: 'seller' },
    ],
    reportingSteps: [
      { step: 'Report the bounced cheque to police under Section 138 NI Act and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 138, Negotiable Instruments Act', name: 'Dishonour of cheque', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['cheque', 'overpayment', 'marketplace', 'scam'],
    createdAt: '2025-05-18T08:00:00Z',
    updatedAt: '2025-05-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS109',
    title: 'Fake CoWIN Vaccination Certificate Portal — Aadhaar Harvesting',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'A fake CoWIN certificate download portal collects Aadhaar and OTP from users wanting to download their vaccination certificates.',
    scenario:
      'WhatsApp messages circulate offering to download CoWIN vaccination certificates via a link. The link leads to a fake page that requests Aadhaar number and OTP for "authentication." Credentials are captured and used for identity theft.',
    timeline: [
      { time: '2025-03-20T09:00:00Z', description: 'Fake CoWIN certificate link circulated via WhatsApp.' },
      { time: '2025-03-20T10:00:00Z', description: 'Users submit Aadhaar and OTP on fake page.' },
      { time: '2025-03-25T09:00:00Z', description: 'Data used to access government portals; loan applications filed.' },
    ],
    warningSigns: [
      { sign: 'CoWIN certificate download via WhatsApp link', details: 'Download vaccination certificates only via cowin.gov.in or official Arogya Setu app.' },
      { sign: 'Site requesting Aadhaar OTP for certificate download', details: 'The legitimate process uses mobile OTP sent to your registered number, not Aadhaar OTP.' },
    ],
    preventionTips: [
      { tip: 'Access CoWIN certificates only via cowin.gov.in or Arogya Setu; disregard WhatsApp links', audience: 'end-user', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Lock Aadhaar biometrics and report to cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['cowin', 'aadhaar', 'phishing', 'vaccine'],
    createdAt: '2025-03-28T08:00:00Z',
    updatedAt: '2025-03-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS110',
    title: 'Fake IT Support — Windows Defender Alert Pop-Up Scam',
    category: CaseStudyCategory.SOCIAL_ENGINEERING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Browser pop-up mimics a Windows Defender virus alert with a toll-free number; victims call and are tricked into paying for fake support.',
    scenario:
      'While browsing, a full-screen pop-up appears claiming "Windows Defender" has detected a critical virus and provides a toll-free number. Calling the number connects to a fake Microsoft support center. The "technician" asks for remote access and payment for virus removal; no actual issue exists.',
    timeline: [
      { time: '2025-09-08T14:00:00Z', description: 'Victim encounters browser lock-screen pop-up with fake alert.' },
      { time: '2025-09-08T14:10:00Z', description: 'Victim calls toll-free number; technician requests AnyDesk access.' },
      { time: '2025-09-08T14:30:00Z', description: 'Victim pays ₹6,000 for "virus removal" via UPI.' },
    ],
    warningSigns: [
      { sign: 'Browser pop-up that locks the screen with a phone number', details: 'Legitimate Windows Defender alerts do not provide phone numbers or lock the browser.' },
      { sign: 'Free-to-call number claiming to be Microsoft or government', details: 'Microsoft India support does not proactively call or display numbers in browser alerts.' },
    ],
    preventionTips: [
      { tip: 'Close the browser using Task Manager; do not call numbers shown in browser alerts', audience: 'end-user', priority: 1 },
      { tip: 'Run a real Windows Defender scan from the Start Menu to confirm there is no issue', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Run a legitimate antivirus scan; contact bank if payment was made', expectedOutcome: 'Confirm no real malware and initiate payment dispute.' },
      { step: 'Report to cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['tech-support', 'pop-up', 'social_engineering', 'windows'],
    createdAt: '2025-09-12T08:00:00Z',
    updatedAt: '2025-09-12T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS111',
    title: 'Crypto Token Presale Scam — Whitelist Phishing for Wallet Connection',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.HIGH,
    severityScore: 7,
    summary:
      'Fake token presale whitelist site connects wallet and executes a drain transaction disguised as a "whitelist registration fee."',
    scenario:
      'A new token project announces an exclusive presale whitelist. Participants must connect their wallet and pay a small whitelist fee. The smart contract executed on fee payment includes a hidden setApprovalForAll or drain function, emptying the connected wallet.',
    timeline: [
      { time: '2025-10-25T09:00:00Z', description: 'Fake presale whitelist announced on Telegram and Twitter.' },
      { time: '2025-10-25T10:00:00Z', description: 'User connects wallet and approves whitelist fee transaction.' },
      { time: '2025-10-25T10:03:00Z', description: 'Drain function executes; all tokens removed from wallet.' },
    ],
    warningSigns: [
      { sign: 'Presale whitelist requiring wallet connection to an unknown site', details: 'Research project extensively before connecting wallet to any smart contract.' },
      { sign: 'Transaction shows unusual contract interactions beyond a simple transfer', details: 'Simulate the transaction to reveal hidden function calls.' },
    ],
    preventionTips: [
      { tip: 'Use a dedicated wallet with minimal holdings for presale participation; keep main assets offline', audience: 'investor', priority: 1 },
      { tip: 'Always simulate transactions before signing; use tools like Fire extension or Pocket Universe', audience: 'investor' },
    ],
    reportingSteps: [
      { step: 'Revoke remaining approvals via revoke.cash; report contract to token listing platforms', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66, IT Act 2000', name: 'Computer-related offences', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['presale', 'crypto', 'wallet-drainer', 'token'],
    createdAt: '2025-10-28T08:00:00Z',
    updatedAt: '2025-10-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS112',
    title: 'UPI Phishing App — Fake BHIM Update Steals Banking Credentials',
    category: CaseStudyCategory.MALWARE,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'A fake BHIM app update APK steals UPI PIN and banking credentials by overlaying the genuine app.',
    scenario:
      'An SMS claims the BHIM app needs an urgent update to continue using UPI services. The update APK installs a trojan that overlays the real BHIM app with a fake interface capturing UPI PIN, linked bank account, and OTPs.',
    timeline: [
      { time: '2025-11-15T09:00:00Z', description: 'SMS about mandatory BHIM update with download link.' },
      { time: '2025-11-15T09:30:00Z', description: 'User installs fake update; overlay activates on BHIM launch.' },
      { time: '2025-11-15T10:00:00Z', description: 'UPI PIN captured; ₹25,000 transferred from linked accounts.' },
    ],
    warningSigns: [
      { sign: 'SMS link for BHIM or any UPI app update', details: 'Updates come via Play Store notifications; never via SMS links.' },
      { sign: 'BHIM app interface looks slightly different after update', details: 'Reinstall from Play Store if app behavior changes unexpectedly.' },
    ],
    preventionTips: [
      { tip: 'Update BHIM and all UPI apps only from Google Play Store; disregard SMS update links', audience: 'end-user', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Uninstall fake app, factory reset, and report to NPCI and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['bhim', 'upi', 'malware', 'overlay'],
    createdAt: '2025-11-18T08:00:00Z',
    updatedAt: '2025-11-18T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS113',
    title: 'Fake Income Tax Refund Notification — Phishing for Bank Details',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Taxpayers receive SMS or email about income tax refund pending; clicking link opens a fake IT portal requesting bank account details.',
    scenario:
      'An email or SMS from a spoofed "Income Tax Department" address states that a refund of ₹12,000 is pending. The "Claim Refund" link leads to a fake portal asking for PAN, bank account number, and IFSC for refund processing. Details captured for bank fraud.',
    timeline: [
      { time: '2025-04-10T09:00:00Z', description: 'Mass SMS and email campaign about IT refunds launched.' },
      { time: '2025-04-10T10:00:00Z', description: 'Taxpayers submit bank account details on fake portal.' },
      { time: '2025-04-12T09:00:00Z', description: 'Attacker uses account details for net banking access attempts.' },
    ],
    warningSigns: [
      { sign: 'SMS/email about IT refund with clickable link', details: 'IT refunds are credited directly to pre-validated bank accounts; no link clicking required.' },
      { sign: 'Portal asking for bank account number to process refund', details: 'Income tax portal already has bank details; re-entry is not required.' },
    ],
    preventionTips: [
      { tip: 'Check income tax refund status only at incometax.gov.in via bookmarked URL', audience: 'taxpayer', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report phishing email/SMS to IT Department and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['income-tax', 'refund', 'phishing', 'smishing'],
    createdAt: '2025-04-14T08:00:00Z',
    updatedAt: '2025-04-14T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS114',
    title: 'SIM Swap via Customer Care Chat — Telco Social Engineering',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'Attacker uses leaked personal data to social-engineer a telco\'s live chat support into issuing a SIM swap, intercepting OTPs for banking fraud.',
    scenario:
      'Using the victim\'s Aadhaar and address details from a prior data breach, the attacker contacts Jio/Airtel customer care via live chat claiming SIM was lost. The agent is convinced with correctly provided personal data and processes the SIM swap. All OTPs now go to the attacker.',
    timeline: [
      { time: '2025-08-18T10:00:00Z', description: 'Attacker contacts telco chat with victim\'s personal data.' },
      { time: '2025-08-18T10:30:00Z', description: 'SIM swap approved; victim\'s number active on attacker SIM.' },
      { time: '2025-08-18T10:45:00Z', description: 'Net banking password reset and ₹3 lakh transferred.' },
    ],
    warningSigns: [
      { sign: 'Sudden loss of mobile signal with "SIM not provisioned" error', details: 'Contact telco immediately if phone suddenly loses service.' },
      { sign: 'Unexpected password reset emails for banking or email', details: 'Change passwords and notify bank immediately from Wi-Fi.' },
    ],
    preventionTips: [
      { tip: 'Set up a sim-swap protection PIN with your telecom operator and enable account alerts', audience: 'end-user', priority: 1 },
      { tip: 'Use authenticator apps for 2FA instead of SMS for critical accounts', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Contact telco to freeze number; contact bank from Wi-Fi to change all credentials', expectedOutcome: 'Limit attacker access to OTP-dependent accounts.' },
      { step: 'File FIR and cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
      { code: 'Section 66D, IT Act 2000', name: 'Cheating by personation', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['sim-swap', 'telco', 'social_engineering', 'otp'],
    createdAt: '2025-08-22T08:00:00Z',
    updatedAt: '2025-08-22T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS115',
    title: 'Fake Work-From-Home Task Scam — Paid Per Task Scheme',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Victims are recruited for a paid "like and earn" task scheme; initial small payments build trust before large deposit is required to "unlock" earnings.',
    scenario:
      'Victim joins a Telegram group offering ₹50–₹100 per task (liking YouTube videos, reviewing products). Payments work for the first few tasks. Victim is then told their account is "VIP-locked" and they must deposit ₹5,000 to unlock earnings. After deposit, access is revoked.',
    timeline: [
      { time: '2025-05-01T10:00:00Z', description: 'Victim joins "work from home" Telegram group.' },
      { time: '2025-05-01T11:00:00Z', description: 'Completes 5 tasks; receives ₹200 as promised.' },
      { time: '2025-05-02T10:00:00Z', description: 'Told account is locked; deposits ₹5,000 to unlock.' },
      { time: '2025-05-02T11:00:00Z', description: 'Group blocks victim; no payout or refund.' },
    ],
    warningSigns: [
      { sign: 'Initial payments to build trust before a large deposit demand', details: 'Classic advance fee fraud pattern; initial payments are bait.' },
      { sign: '"Account locked" requiring deposit to unlock earnings', details: 'Any scheme requiring investment to receive earnings is fraudulent.' },
    ],
    preventionTips: [
      { tip: 'Reject any scheme requiring upfront deposits to continue receiving payments', audience: 'end-user', priority: 1 },
      { tip: 'Verify work-from-home opportunities through NASSCOM or recognized job portals', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Report the Telegram group and file cybercrime complaint', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['work-from-home', 'task-scam', 'telegram', 'advance-fee'],
    createdAt: '2025-05-05T08:00:00Z',
    updatedAt: '2025-05-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS116',
    title: 'Spear Phishing — Targeted Attack on CA Firm Using Fake Client Email',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.HIGH,
    severityScore: 8,
    summary:
      'A CA firm receives a spear-phishing email appearing to come from an existing client requesting ITR documents via a malicious link.',
    scenario:
      'Attackers reconnaissance a CA firm and identify a key client. They spoof the client\'s email domain and send a targeted request for ITR documents via a shared "Google Drive" link. Clicking the link deploys a credential harvester for the CA firm\'s email and document management systems.',
    timeline: [
      { time: '2025-10-20T09:00:00Z', description: 'Spear phishing email from spoofed client email received by CA partner.' },
      { time: '2025-10-20T09:10:00Z', description: 'Partner clicks shared drive link; credential harvester runs.' },
      { time: '2025-10-20T10:00:00Z', description: 'Attacker accesses email and client financial documents.' },
    ],
    warningSigns: [
      { sign: 'Shared link from a known contact requesting action on sensitive documents', details: 'Verify via phone call before clicking any shared links with sensitive context.' },
      { sign: 'Reply-to address subtly different from the sender\'s known domain', details: 'Check email headers carefully for spear phishing.' },
    ],
    preventionTips: [
      { tip: 'Verify all document sharing requests from clients via phone before clicking links', audience: 'business', priority: 1 },
      { tip: 'Use email authentication protocols (DMARC, DKIM, SPF) to reduce spoofing risk', audience: 'IT/admin' },
    ],
    reportingSteps: [
      { step: 'Isolate affected accounts; change all credentials and notify affected clients immediately', expectedOutcome: 'Contain breach and protect client data.' },
      { step: 'Report to CERT-In and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['spear-phishing', 'ca', 'business', 'email'],
    createdAt: '2025-10-24T08:00:00Z',
    updatedAt: '2025-10-24T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS117',
    title: 'Fake MSME Loan Portal — Subsidy Scheme Fraud Targeting Small Businesses',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 6,
    summary:
      'Small business owners apply for loans via a fake MSME loan portal; fees collected and KYC data harvested with no loan disbursed.',
    scenario:
      'Fake websites impersonating the official MSME loan portal (msme.gov.in) advertise collateral-free loans with "PM Mudra Yojana" branding. Business owners submit GST registration, Aadhaar, PAN, and pay a processing fee. No loan is disbursed and data is used for fraud.',
    timeline: [
      { time: '2025-06-05T09:00:00Z', description: 'Fake MSME loan portal advertised via Google search.' },
      { time: '2025-06-06T10:00:00Z', description: 'Small business owner submits documents and ₹3,000 fee.' },
      { time: '2025-06-20T09:00:00Z', description: 'No loan disbursed; contact unreachable; data misused.' },
    ],
    warningSigns: [
      { sign: 'MSME loan portal found via Google ad', details: 'Access MSME schemes only via udyam.gov.in or nationalized bank branches.' },
      { sign: 'Processing fee for a government scheme loan', details: 'PM Mudra Yojana and other government schemes charge no upfront fees.' },
    ],
    preventionTips: [
      { tip: 'Apply for government business loans only through nationalized banks or official portals at udyam.gov.in', audience: 'business', priority: 1 },
    ],
    reportingSteps: [
      { step: 'Report to Ministry of MSME helpline and cybercrime portal', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['msme', 'loan', 'phishing', 'business'],
    createdAt: '2025-06-24T08:00:00Z',
    updatedAt: '2025-06-24T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS118',
    title: 'Dark Web Data Resale — Breach Data Enables Mass Account Takeovers',
    category: CaseStudyCategory.IDENTITY_THEFT,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Credentials from a major Indian e-commerce breach are sold on the dark web; attackers use them in credential stuffing campaigns across banking and fintech platforms.',
    scenario:
      'Following a data breach at a major e-commerce platform, 30 million user credentials are listed for sale on a dark web marketplace. Cybercriminals use automated tools to test these credentials against banking apps, wallets, and investment platforms, successfully accessing accounts where passwords were reused.',
    timeline: [
      { time: '2025-07-01T09:00:00Z', description: 'Data breach occurs; 30 million credentials exfiltrated.' },
      { time: '2025-07-15T10:00:00Z', description: 'Credential database listed on dark web forum.' },
      { time: '2025-07-20T08:00:00Z', description: 'Automated credential stuffing begins against banking platforms.' },
      { time: '2025-07-25T09:00:00Z', description: 'Thousands of banking accounts accessed; financial losses reported.' },
    ],
    warningSigns: [
      { sign: 'Login alerts from unrecognized devices or locations', details: 'Enable login notifications on all financial accounts.' },
      { sign: 'Email about account access from unknown device', details: 'Act immediately; change password and enable 2FA.' },
    ],
    preventionTips: [
      { tip: 'Use unique passwords for every account; use a password manager like Bitwarden or LastPass', audience: 'end-user', priority: 1 },
      { tip: 'Enable 2FA on all critical accounts; use authenticator apps rather than SMS', audience: 'end-user' },
      { tip: 'Check haveibeenpwned.com regularly to identify if your email is in any breach', audience: 'end-user' },
    ],
    reportingSteps: [
      { step: 'Immediately change passwords on affected accounts and enable 2FA', expectedOutcome: 'Prevent ongoing unauthorized access.' },
      { step: 'Report to cybercrime portal and notify affected financial institutions', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 43A, IT Act 2000', name: 'Failure to protect sensitive personal data', jurisdiction: 'India' },
      { code: 'Section 66C, IT Act 2000', name: 'Identity theft', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['dark-web', 'data-breach', 'credential-stuffing', 'identity_theft'],
    createdAt: '2025-07-28T08:00:00Z',
    updatedAt: '2025-07-28T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS119',
    title: 'Fake Travel Booking — Non-Existent Tour Package Scam',
    category: CaseStudyCategory.SCAM,
    severity: CaseStudySeverity.MEDIUM,
    severityScore: 5,
    summary:
      'Victims pay for discounted international tour packages from fraudulent travel agencies; no booking is ever made and refunds are refused.',
    scenario:
      'A travel agency with an attractive website offers heavily discounted international tour packages. Victims pay full amounts via UPI or bank transfer. Hotel, flight, and visa arrangements never materialize. By the time victims realize the fraud, the agency website and contacts are gone.',
    timeline: [
      { time: '2025-08-20T10:00:00Z', description: 'Victim books Thailand package for family of 4 totaling ₹1.5 lakh.' },
      { time: '2025-09-01T09:00:00Z', description: 'Victim requests travel documents; agency gives postponement.' },
      { time: '2025-09-10T09:00:00Z', description: 'Agency website goes offline; all contacts blocked.' },
    ],
    warningSigns: [
      { sign: 'Tour package price significantly below market rate', details: 'Compare with established platforms like MakeMyTrip or Thomas Cook.' },
      { sign: 'Agency not registered with IATA or Tourism Ministry', details: 'Verify at incredibleindia.org or IATA agent list.' },
    ],
    preventionTips: [
      { tip: 'Book international travel only through IATA-certified agencies or well-known platforms', audience: 'traveler', priority: 1 },
      { tip: 'Pay via credit card for chargeback protection; avoid UPI for large travel bookings', audience: 'traveler' },
    ],
    reportingSteps: [
      { step: 'File chargeback with credit card issuer and complaint with Ministry of Tourism', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 420 IPC', name: 'Cheating', jurisdiction: 'India' },
    ],
    sourceType: 'user_submission',
    sources: [],
    tags: ['travel', 'tour-package', 'advance-fee', 'scam'],
    createdAt: '2025-09-15T08:00:00Z',
    updatedAt: '2025-09-15T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },

  {
    id: 'CS120',
    title: 'AI-Powered Spear Phishing — Personalized Email Campaign Using LinkedIn Data',
    category: CaseStudyCategory.PHISHING,
    severity: CaseStudySeverity.CRITICAL,
    severityScore: 9,
    summary:
      'Attackers use AI to craft hyper-personalized phishing emails using scraped LinkedIn data; high open and credential submission rates at corporate targets.',
    scenario:
      'Threat actors scrape LinkedIn profiles of employees at a target company and use AI to craft emails referencing the recipient\'s name, position, recent project, and manager\'s name. The email\'s realistic context makes victims more likely to click a malicious link and submit corporate credentials.',
    timeline: [
      { time: '2025-11-01T08:00:00Z', description: 'LinkedIn scraping of target company employees completed.' },
      { time: '2025-11-02T09:00:00Z', description: 'AI generates 500 personalized phishing emails.' },
      { time: '2025-11-03T09:00:00Z', description: 'Emails sent to 30% of target company employees.' },
      { time: '2025-11-03T09:00:00Z', description: 'Phishing campaign launched; 30% open rate and 10% credential submission.' },
    ],
    warningSigns: [ ],
    preventionTips: [
        { tip: 'Implement advanced email filtering with AI-based threat detection', audience: 'IT/admin', priority: 1 },    
    ]
,
    reportingSteps: [
      { step: 'Identify affected employees and report to IT security', contact: { url: 'https://www.cybercrime.gov.in' } },
    ],
    applicableLaws: [
      { code: 'Section 66, IT Act 2000', name: 'Hacking/computer offences', jurisdiction: 'India' },
      { code: 'Section 43A, IT Act 2000', name: 'Failure to implement reasonable security practices', jurisdiction: 'India' },
    ],
    sourceType: 'report',
    sources: [],
    tags: ['email', 'phishing', 'AI', 'spear-phishing'],
    createdAt: '2025-11-05T08:00:00Z',
    updatedAt: '2025-11-05T08:00:00Z',
    published: true,
    locale: 'en-IN',
  },
];

export default CASE_STUDIES;

