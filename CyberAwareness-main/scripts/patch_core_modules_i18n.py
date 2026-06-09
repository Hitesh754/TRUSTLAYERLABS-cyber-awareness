import os
import json
import re
import subprocess
import sys

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SRC = os.path.join(BASE, "src")
LOCALES = os.path.join(SRC, "i18n", "locales")
EN_JSON = os.path.join(LOCALES, "en", "translation.json")

# Define all translation keys to merge into en/translation.json
NEW_KEYS = {
    "common": {
        "backHome": "← Back to Home",
        "backToUpi": "← Back to UPI Module",
        "backToQr": "← Back to QR Module",
        "backToDeepfake": "← Back to Deepfake Module",
        "backToLaws": "← Back to Laws Dashboard",
        "backToQuiz": "← Back to Quiz Arena",
        "backToAwareness": "← Back to Awareness",
        "targetedReport": "🚨 Been targeted? Report immediately — every minute counts.",
        "cybercrimeLink": "cybercrime.gov.in ↗",
        "backToDashboard": "Back to Dashboard",
        "dashboard": "Dashboard"
    },
    "topicLayout": {
        "back": "← Back to Awareness",
        "reported": "🚨 Been targeted? Report immediately — every minute counts."
    },
    "upi": {
        "breadcrumb": "UPI Fraud Module",
        "hero": {
            "kicker": "UPI Fraud Lab",
            "title": "Understand UPI scams, protect your PIN, and pay safely.",
            "desc": "This module helps you spot fake collect requests, screen-share traps, and phishing payment prompts — without using any real payment APIs.",
            "btnStart": "Start Awareness",
            "btnDemo": "Try Demo"
        },
        "why": {
            "title": "Why this matters",
            "desc": "UPI fraud is one of the fastest-growing payment scams in India. This lab helps you identify the red flags before you approve a transaction.",
            "bullet1": "Fake collect requests often appear like refunds, prizes, or customer support.",
            "bullet2": "If an app asks for your UPI PIN to receive money, treat it as a high-risk scam.",
            "bullet3": "Always verify the recipient, the amount, and the expected flow before approving payments."
        },
        "sections": {
            "kicker": "Module sections",
            "title": "Explore the UPI Fraud learning path",
            "desc": "Go deeper into scam awareness, real case learning, interactive UPI checks, and reporting best practices.",
            "awareness": {
                "title": "UPI Fraud Awareness",
                "desc": "Learn common UPI scams, collect request tricks, and safe transaction habits."
            },
            "caseStudy": {
                "title": "Case Study",
                "desc": "Follow a real-world UPI scam timeline and learn how the victim could have stayed safe."
            },
            "demo": {
                "title": "Interactive Demo",
                "desc": "Practice spotting scammy UPI requests, suspicious payees, and unsafe payment prompts."
            },
            "report": {
                "title": "Report UPI Fraud",
                "desc": "Get step-by-step guidance for preserving evidence and reporting payment fraud fast."
            }
        },
        "facts": {
            "title": "Fast facts",
            "bullet1": "Never share your UPI PIN or OTP with anyone.",
            "bullet2": "Validate the payee VPA and amount before approving collect requests.",
            "bullet3": "Use official bank apps or UPI apps, not links sent by strangers."
        },
        "watch": {
            "title": "What to watch",
            "bullet1": "Unexpected refund or prize requests that ask for payment approval.",
            "bullet2": "Screen sharing or remote-control calls that ask you to open UPI apps.",
            "bullet3": "Impersonation of banks, merchants, or government officials."
        },
        "reportQuick": {
            "title": "Report quickly",
            "bullet1": "Call 1930 for cybercrime assistance.",
            "bullet2": "File at cybercrime.gov.in with UPI transaction details.",
            "bullet3": "Keep screenshots, UPI IDs, and bank reference numbers."
        },
        "awarenessPage": {
            "title": "UPI Fraud Awareness",
            "desc": "Protect your UPI account by learning key scam patterns, approval traps, and safe payment rules.",
            "card1Title": "⚠️ Common UPI Scam Types",
            "card2Title": "✅ How to Stay Safe",
            "card3Title": "🇮🇳 Indian Reporting Tips"
        }
    },
    "qr": {
        "brand": "QR Threat Lab",
        "kicker": "SOC module online",
        "title": "QR Scam Simulator",
        "desc": "Train against realistic QR payment fraud, fake UPI redirects, tampered stickers, and phishing pages. Inspect indicators, earn XP, and build a habit of verifying before paying.",
        "btnLaunch": "Launch scanner",
        "btnChallenge": "Play Safe or Scam",
        "xp": "XP earned",
        "scans": "Scans run",
        "detected": "Scams detected",
        "trainingKicker": "progressive lab",
        "trainingTitle": "Training routes",
        "trainingDesc": "Each route keeps the same neon SOC interface and reuses the QR score engine.",
        "route1": {
            "title": "Realistic QR scam simulator",
            "desc": "Scan metro refunds, parking fines, charity posters, and cafe menus. Open indicators to learn what makes a QR dangerous."
        },
        "route2": {
            "title": "Safe or Scam challenge",
            "desc": "Make rapid calls on UPI prompts and QR destinations. Final results show accuracy and readiness."
        },
        "route3": {
            "title": "Awareness and Indian cyber law",
            "desc": "Learn how to report QR fraud, preserve evidence, and recognize IT Act sections commonly applied to online cheating."
        },
        "route4": {
            "title": "QR fraud case study",
            "desc": "Walk through a realistic incident timeline and practice spotting the decision points that matter."
        },
        "route5": {
            "title": "Incident report guide",
            "desc": "Collect transaction IDs, screenshots, URLs, and timestamps before escalation."
        },
        "footer": "CyberShield QR module | Verify destination, payee, amount, and intent before approving.",
        "awarenessPage": {
            "title": "QR Scam Safety & Laws",
            "desc": "Learn how scammers weaponize QR codes to bypass url protections and how Indian cyber law penalizes QR cheating.",
            "card1Title": "⚠️ QR Scam Tactics",
            "card2Title": "🛡️ Verification Habits",
            "card3Title": "⚖️ Legal Protections",
            "card1Desc": "If an app asks for UPI PIN, assume money can leave your account. Refunds and prize credits do not need your PIN.",
            "card2Desc": "Fake pages can copy brand colors. Check HTTPS, domain spelling, official suffixes, and whether the page asks for OTP or card data.",
            "card3Desc": "Parking meters, fuel pumps, cafes, and counters can be relabeled. Ask staff or use the official app when the sticker looks altered.",
            "section2Title": "Indian reporting tips",
            "section3Title": "Law awareness",
            "law1": "IT Act Section 66C relates to identity theft and credential misuse.",
            "law2": "IT Act Section 66D relates to cheating by personation using computer resources.",
            "law3": "IPC/BNS cheating provisions may also be relevant depending on the complaint.",
            "tip1": "Call 1930 quickly for financial cyber fraud assistance.",
            "tip2": "File a complaint at cybercrime.gov.in with screenshots and UTR numbers.",
            "tip3": "Share the VPA, phone number, URL, timestamp, bank, and transaction ID.",
            "tip4": "Ask your bank or UPI app to block/freeze the transaction trail immediately."
        }
    },
    "deepfake": {
        "title": "Deepfake Awareness Module",
        "awareness": "Awareness",
        "challenge": "Challenge",
        "cases": "Cases",
        "report": "Report",
        "awarenessPage": {
            "title": "AI Deepfake Awareness",
            "desc": "Understand AI-generated fake media, deepfake blackmail, identity spoofing, and verification methods.",
            "card1Title": "🚨 Detection Markers",
            "card2Title": "🔒 Protective Actions",
            "card3Title": "⚖️ Legal Recourse",
            "kicker": "Preparedness",
            "timelineTitle": "Awareness Timeline",
            "timelineDesc": "A practical response flow for suspicious video calls, voice notes, livestreams, and celebrity or executive impersonation.",
            "step1Title": "Minute 0: Pause",
            "step1Desc": "Do not click, pay, share OTPs, or send files while pressure is high.",
            "step2Title": "Minute 2: Verify",
            "step2Desc": "Use a known phone number, official website, or internal directory to confirm identity.",
            "step3Title": "Minute 5: Inspect",
            "step3Desc": "Look for lip-sync drift, repeating gestures, lighting mismatch, unnatural voice tone, and odd urgency.",
            "step4Title": "Minute 10: Escalate",
            "step4Desc": "Report to platform support, cyber cell, bank, or internal security team with preserved evidence.",
            "checklistTitle": "Readiness Checklist",
            "checklist1": "Use multi-person approval for payments and account changes.",
            "checklist2": "Agree on code words for urgent family or executive requests.",
            "checklist3": "Keep official reporting links bookmarked before an incident.",
            "checklist4": "Train teams to question media that demands secrecy or speed.",
            "btnValidate": "Validate Readiness",
            "footer": "Awareness playbooks reduce risk before detection tools are needed."
        }
    },
    "laws": {
        "socKicker": "Legal threat intelligence online",
        "socTitle": "Cyber Law Command Dashboard",
        "socDesc": "Explore Indian cyber law pathways through a SOC-style interface with searchable sections, reporting workflows, penalties, rights, awareness tips, and case-response drills.",
        "btnSections": "Explore sections",
        "btnReport": "Start report flow",
        "socTerminal": "SOC Terminal",
        "socProgress": "Training progress",
        "socModules": "modules",
        "metric1": {
            "label": "Response target",
            "desc": "Report financial cyber fraud quickly for better fund tracing."
        },
        "metric2": {
            "label": "Core tracks",
            "desc": "Dashboard, IPC, BNS, IT Act, reporting, rights, cases, awareness, penalties."
        },
        "metric3": {
            "label": "Evidence kit",
            "desc": "URLs, screenshots, headers, transaction IDs, device logs, timelines."
        },
        "metric4": {
            "label": "Risk zones",
            "desc": "Fraud, stalking, identity theft, privacy breach, extortion, malware, data leak."
        },
        "stationTitle": "Mission Modules",
        "stationDesc": "Choose a station and build a practical legal response map.",
        "card1": {
            "title": "Legacy Section Explorer",
            "desc": "Search key IPC provisions that still appear in older FIRs, references, and case materials."
        },
        "card2": {
            "title": "New Code Mapping",
            "desc": "Understand how modern cyber offences connect to the Bharatiya Nyaya Sanhita."
        },
        "card3": {
            "title": "Information Technology Act",
            "desc": "Review privacy, identity, obscene content, hacking, and intermediary duties."
        },
        "card4": {
            "title": "Punishment Cards",
            "desc": "Scan offence types, consequences, and escalation triggers."
        },
        "card5": {
            "title": "Citizen Rights",
            "desc": "Review practical rights, evidence preservation, and support options after a cyber incident."
        },
        "card6": {
            "title": "Awareness Briefing",
            "desc": "Learn everyday legal awareness habits for safer reporting, response, and online conduct."
        },
        "card7": {
            "title": "Case Response Drills",
            "desc": "Practice choosing sections, evidence paths, and reporting steps from realistic incident stories."
        }
    },
    "quiz": {
        "kicker": "CyberShield training",
        "title": "Quiz Arena",
        "desc": "Complete challenges, detect scams, and master cybersecurity through hands-on simulations and case studies.",
        "card1": {
            "title": "Cyber Awareness Quizzes",
            "desc": "Scenario-based questions covering phishing, social engineering, and digital hygiene."
        },
        "card2": {
            "title": "Scam Simulator",
            "desc": "Classify suspicious messages under pressure and build decision confidence."
        },
        "card3": {
            "title": "Case Studies",
            "desc": "Analyze real-world incidents and learn response patterns."
        },
        "card4": {
            "title": "Leaderboard",
            "desc": "Track XP, rank, and training progress."
        }
    },
    "reportingPage": {
        "kicker": "Incident Reporting",
        "title": "Report Cybercrime — Steps & Guidance",
        "desc": "A concise, step-by-step guide to reporting cyber incidents to the National Cyber Crime Portal and local authorities. Preserve evidence and follow safety steps immediately."
    },
    "awareness": {
        "phishing": {
            "title": "Phishing Awareness",
            "subtitle": "Criminals impersonate trusted entities via email, SMS, or calls to steal your credentials, OTPs, and financial data.",
            "card1Title": "⚠️ Warning Signs",
            "card2Title": "✅ How to Stay Safe",
            "card3Title": "🇮🇳 Indian Context"
        },
        "upi": {
            "title": "UPI Fraud Awareness",
            "subtitle": "Scammers exploit India's UPI payment system by tricking victims into approving collect requests or sharing PINs.",
            "card1Title": "⚠️ Common UPI Scam Types",
            "card2Title": "✅ How to Stay Safe",
            "card3Title": "🇮🇳 Indian Context"
        },
        "qr": {
            "title": "QR Code Scam Awareness",
            "subtitle": "Scammers overlay fake QR code stickers or send fake payment receipt QR codes to deceive victims into transferring funds.",
            "card1Title": "⚠️ QR Scam Tactics",
            "card2Title": "✅ Smart Scanning Habits",
            "card3Title": "🇮🇳 Indian Context"
        },
        "social": {
            "title": "Social Media Safety",
            "subtitle": "Protect your personal profiles from hacking, identity cloning, romance scams, and malicious links.",
            "card1Title": "⚠️ Profile Risks",
            "card2Title": "✅ Account Security Habits",
            "card3Title": "🇮🇳 Indian Context"
        },
        "deepfake": {
            "title": "Deepfake Awareness",
            "subtitle": "AI-generated fake videos, images, and audio are being used for blackmail, financial fraud, and political manipulation.",
            "card1Title": "⚠️ How Deepfakes Are Misused",
            "card2Title": "🔍 How to Spot a Deepfake",
            "card3Title": "✅ How to Stay Safe",
            "card4Title": "🇮🇳 Indian Legal Context"
        },
        "identity": {
            "title": "Identity Theft Awareness",
            "subtitle": "Criminals steal your Aadhaar, PAN, and personal data to commit fraud, take loans in your name, or impersonate you online.",
            "card1Title": "⚠️ How Identity Theft Happens",
            "card2Title": "✅ How to Protect Your Identity",
            "card3Title": "🇮🇳 Indian Legal Context"
        },
        "password": {
            "title": "Strong Passwords & MFA",
            "subtitle": "Create secure credentials and set up multi-factor verification keys to shield your banking and personal mail logins.",
            "card1Title": "⚠️ Password Weaknesses",
            "card2Title": "✅ Authentication Rules",
            "card3Title": "🇮🇳 Indian Context"
        }
    }
}

def deep_merge(base, patch):
    for k, v in patch.items():
        if k not in base:
            base[k] = v
        elif isinstance(v, dict) and isinstance(base[k], dict):
            deep_merge(base[k], v)
    return base

def update_en_json():
    with open(EN_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    data = deep_merge(data, NEW_KEYS)
    with open(EN_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("Success: Updated en/translation.json with new keys")

# Helper to read file, apply replacements, and write back
def patch_file(filepath, replacements, imports_to_add=None, vars_to_add=None):
    if not os.path.exists(filepath):
        print(f"Warning: {filepath} not found, skipping.")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Apply all replacements
    changed = False
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            changed = True

    if changed:
        # Check and add useTranslation imports & hooks if not present
        if imports_to_add and "useTranslation" not in content:
            for old_imp, new_imp in imports_to_add:
                if old_imp in content:
                    content = content.replace(old_imp, new_imp)
                    changed = True
                    break
        if vars_to_add and "const { t } = useTranslation();" not in content:
            for old_fn, new_fn in vars_to_add:
                if old_fn in content:
                    content = content.replace(old_fn, new_fn)
                    changed = True
                    break

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Success: Patched {os.path.relpath(filepath, BASE)}")
    else:
        print(f"Info: No replacements matching in {os.path.relpath(filepath, BASE)} (already patched or no match)")

def run():
    # 1. Update en/translation.json
    update_en_json()

    # Imports and variables replacements for standard pages
    std_imports = [
        ("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useTranslation } from 'react-i18next';"),
        ("import { Link, NavLink } from 'react-router-dom';", "import { Link, NavLink } from 'react-router-dom';\nimport { useTranslation } from 'react-i18next';")
    ]
    std_vars = [
        ("export default function UPIHome() {", "export default function UPIHome() {\n  const { t } = useTranslation();"),
        ("export default function UPIAwareness() {", "export default function UPIAwareness() {\n  const { t } = useTranslation();"),
        ("export default function QRHome() {", "export default function QRHome() {\n  const { t } = useTranslation();"),
        ("export default function QRAwareness() {", "export default function QRAwareness() {\n  const { t } = useTranslation();"),
        ("export default function DeepfakeHome() {", "export default function DeepfakeHome() {\n  const { t } = useTranslation();"),
        ("export default function DeepfakeAwareness() {", "export default function DeepfakeAwareness() {\n  const { t } = useTranslation();"),
        ("export default function LawsDashboard() {", "export default function LawsDashboard() {\n  const { t } = useTranslation();"),
        ("export default function QuizHome() {", "export default function QuizHome() {\n  const { t } = useTranslation();"),
        ("export default function ReportingPage() {", "export default function ReportingPage() {\n  const { t } = useTranslation();"),
        ("export default function Hero() {", "export default function Hero() {\n  const { t } = useTranslation();")
    ]

    # File 1: TopicLayout.tsx
    patch_file(
        os.path.join(SRC, "components", "awareness", "TopicLayout.tsx"),
        [
            ("← Back to Awareness", "{t('common.backToAwareness')}"),
            ("🚨 Been targeted? Report immediately — every minute counts.", "{t('common.targetedReport')}"),
            ("cybercrime.gov.in ↗", "{t('common.cybercrimeLink')}")
        ],
        [("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function TopicLayout({ icon, title, subtitle, accentColor, children }: TopicLayoutProps) {", "export default function TopicLayout({ icon, title, subtitle, accentColor, children }: TopicLayoutProps) {\n  const { t } = useTranslation();")]
    )

    # File 2: src/pages/awareness/Phishing.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "Phishing.tsx"),
        [
            ('title="Phishing Awareness"', 'title={t("awareness.phishing.title")}'),
            ('subtitle="Criminals impersonate trusted entities via email, SMS, or calls to steal your credentials, OTPs, and financial data."', 'subtitle={t("awareness.phishing.subtitle")}'),
            ('title="⚠️ Warning Signs"', 'title={t("awareness.phishing.card1Title")}'),
            ('title="✅ How to Stay Safe"', 'title={t("awareness.phishing.card2Title")}'),
            ('title="🇮🇳 Indian Context"', 'title={t("awareness.phishing.card3Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function Phishing() {", "export default function Phishing() {\n  const { t } = useTranslation();")]
    )

    # File 3: src/pages/awareness/UpiFraud.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "UpiFraud.tsx"),
        [
            ('title="UPI Fraud Awareness"', 'title={t("awareness.upi.title")}'),
            ('subtitle="Scammers exploit India\'s UPI payment system by tricking victims into approving collect requests or sharing PINs."', 'subtitle={t("awareness.upi.subtitle")}'),
            ('title="⚠️ Common UPI Scam Types"', 'title={t("awareness.upi.card1Title")}'),
            ('title="✅ How to Stay Safe"', 'title={t("awareness.upi.card2Title")}'),
            ('title="🇮🇳 Indian Context"', 'title={t("awareness.upi.card3Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function UpiFraud() {", "export default function UpiFraud() {\n  const { t } = useTranslation();")]
    )

    # File 4: src/pages/awareness/QrScam.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "QrScam.tsx"),
        [
            ('title="QR Code Scam Awareness"', 'title={t("awareness.qr.title")}'),
            ('subtitle="Scammers overlay fake QR code stickers or send fake payment receipt QR codes to deceive victims into transferring funds."', 'subtitle={t("awareness.qr.subtitle")}'),
            ('title="⚠️ QR Scam Tactics"', 'title={t("awareness.qr.card1Title")}'),
            ('title="✅ Smart Scanning Habits"', 'title={t("awareness.qr.card2Title")}'),
            ('title="🇮🇳 Indian Context"', 'title={t("awareness.qr.card3Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function QrScam() {", "export default function QrScam() {\n  const { t } = useTranslation();")]
    )

    # File 5: src/pages/awareness/SocialMedia.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "SocialMedia.tsx"),
        [
            ('title="Social Media Safety"', 'title={t("awareness.social.title")}'),
            ('subtitle="Protect your personal profiles from hacking, identity cloning, romance scams, and malicious links."', 'subtitle={t("awareness.social.subtitle")}'),
            ('title="⚠️ Profile Risks"', 'title={t("awareness.social.card1Title")}'),
            ('title="✅ Account Security Habits"', 'title={t("awareness.social.card2Title")}'),
            ('title="🇮🇳 Indian Context"', 'title={t("awareness.social.card3Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function SocialMedia() {", "export default function SocialMedia() {\n  const { t } = useTranslation();")]
    )

    # File 6: src/pages/awareness/Deepfake.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "Deepfake.tsx"),
        [
            ('title="Deepfake Awareness"', 'title={t("awareness.deepfake.title")}'),
            ('subtitle="AI-generated fake videos, images, and audio are being used for blackmail, financial fraud, and political manipulation."', 'subtitle={t("awareness.deepfake.subtitle")}'),
            ('title="⚠️ How Deepfakes Are Misused"', 'title={t("awareness.deepfake.card1Title")}'),
            ('title="🔍 How to Spot a Deepfake"', 'title={t("awareness.deepfake.card2Title")}'),
            ('title="✅ How to Stay Safe"', 'title={t("awareness.deepfake.card3Title")}'),
            ('title="🇮🇳 Indian Legal Context"', 'title={t("awareness.deepfake.card4Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function Deepfake() {", "export default function Deepfake() {\n  const { t } = useTranslation();")]
    )

    # File 7: src/pages/awareness/IdentityTheft.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "IdentityTheft.tsx"),
        [
            ('title="Identity Theft Awareness"', 'title={t("awareness.identity.title")}'),
            ('subtitle="Criminals steal your Aadhaar, PAN, and personal data to commit fraud, take loans in your name, or impersonate you online."', 'subtitle={t("awareness.identity.subtitle")}'),
            ('title="⚠️ How Identity Theft Happens"', 'title={t("awareness.identity.card1Title")}'),
            ('title="✅ How to Protect Your Identity"', 'title={t("awareness.identity.card2Title")}'),
            ('title="🇮🇳 Indian Legal Context"', 'title={t("awareness.identity.card3Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function IdentityTheft() {", "export default function IdentityTheft() {\n  const { t } = useTranslation();")]
    )

    # File 8: src/pages/awareness/PasswordMfa.tsx
    patch_file(
        os.path.join(SRC, "pages", "awareness", "PasswordMfa.tsx"),
        [
            ('title="Strong Passwords & MFA"', 'title={t("awareness.password.title")}'),
            ('subtitle="Create secure credentials and set up multi-factor verification keys to shield your banking and personal mail logins."', 'subtitle={t("awareness.password.subtitle")}'),
            ('title="⚠️ Password Weaknesses"', 'title={t("awareness.password.card1Title")}'),
            ('title="✅ Authentication Rules"', 'title={t("awareness.password.card2Title")}'),
            ('title="🇮🇳 Indian Context"', 'title={t("awareness.password.card3Title")}')
        ],
        [("import AwarenessCard from '../../components/awareness/AwarenessCard';", "import AwarenessCard from '../../components/awareness/AwarenessCard';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function PasswordMfa() {", "export default function PasswordMfa() {\n  const { t } = useTranslation();")]
    )

    # File 9: src/pages/upi/index.tsx
    patch_file(
        os.path.join(SRC, "pages", "upi", "index.tsx"),
        [
            ("title: 'UPI Fraud Awareness'", "title: t('upi.sections.awareness.title')"),
            ("description: 'Learn common UPI scams, collect request tricks, and safe transaction habits.'", "description: t('upi.sections.awareness.desc')"),
            ("title: 'Case Study'", "title: t('upi.sections.caseStudy.title')"),
            ("description: 'Follow a real-world UPI scam timeline and learn how the victim could have stayed safe.'", "description: t('upi.sections.caseStudy.desc')"),
            ("title: 'Interactive Demo'", "title: t('upi.sections.demo.title')"),
            ("description: 'Practice spotting scammy UPI requests, suspicious payees, and unsafe payment prompts.'", "description: t('upi.sections.demo.desc')"),
            ("title: 'Report UPI Fraud'", "title: t('upi.sections.report.title')"),
            ("description: 'Get step-by-step guidance for preserving evidence and reporting payment fraud fast.'", "description: t('upi.sections.report.desc')"),
            ("← Back to Home", "{t('common.backHome')}"),
            ("UPI Fraud Module", "{t('upi.breadcrumb')}"),
            ("UPI Fraud Lab", "{t('upi.hero.kicker')}"),
            ("Understand UPI scams, protect your PIN, and pay safely.", "{t('upi.hero.title')}"),
            ("This module helps you spot fake collect requests, screen-share traps, and phishing payment prompts — without using any real payment APIs.", "{t('upi.hero.desc')}"),
            ("Start Awareness", "{t('upi.hero.btnStart')}"),
            ("Try Demo", "{t('upi.hero.btnDemo')}"),
            ("Why this matters", "{t('upi.why.title')}"),
            ("UPI fraud is one of the fastest-growing payment scams in India. This lab helps you identify the red flags before you approve a transaction.", "{t('upi.why.desc')}"),
            ("Fake collect requests often appear like refunds, prizes, or customer support.", "{t('upi.why.bullet1')}"),
            ("If an app asks for your UPI PIN to receive money, treat it as a high-risk scam.", "{t('upi.why.bullet2')}"),
            ("Always verify the recipient, the amount, and the expected flow before approving payments.", "{t('upi.why.bullet3')}"),
            ("Module sections", "{t('upi.sections.kicker')}"),
            ("Explore the UPI Fraud learning path", "{t('upi.sections.title')}"),
            ("Go deeper into scam awareness, real case learning, interactive UPI checks, and reporting best practices.", "{t('upi.sections.desc')}"),
            ("Fast facts", "{t('upi.facts.title')}"),
            ("Never share your UPI PIN or OTP with anyone.", "{t('upi.facts.bullet1')}"),
            ("Validate the payee VPA and amount before approving collect requests.", "{t('upi.facts.bullet2')}"),
            ("Use official bank apps or UPI apps, not links sent by strangers.", "{t('upi.facts.bullet3')}"),
            ("What to watch", "{t('upi.watch.title')}"),
            ("Unexpected refund or prize requests that ask for payment approval.", "{t('upi.watch.bullet1')}"),
            ("Screen sharing or remote-control calls that ask you to open UPI apps.", "{t('upi.watch.bullet2')}"),
            ("Impersonation of banks, merchants, or government officials.", "{t('upi.watch.bullet3')}"),
            ("Report quickly", "{t('upi.reportQuick.title')}"),
            ("Call 1930 for cybercrime assistance.", "{t('upi.reportQuick.bullet1')}"),
            ("File at cybercrime.gov.in with UPI transaction details.", "{t('upi.reportQuick.bullet2')}"),
            ("Keep screenshots, UPI IDs, and bank reference numbers.", "{t('upi.reportQuick.bullet3')}")
        ],
        std_imports,
        std_vars
    )

    # File 10: src/pages/upi/Awareness.tsx
    patch_file(
        os.path.join(SRC, "pages", "upi", "Awareness.tsx"),
        [
            ("← Back to UPI Module", "{t('common.backToUpi')}"),
            ("UPI Fraud Awareness", "{t('upi.awarenessPage.title')}"),
            ("Protect your UPI account by learning key scam patterns, approval traps, and safe payment rules.", "{t('upi.awarenessPage.desc')}"),
            ("title=\"⚠️ Common UPI Scam Types\"", "title={t('upi.awarenessPage.card1Title')}"),
            ("title=\"✅ How to Stay Safe\"", "title={t('upi.awarenessPage.card2Title')}"),
            ("title=\"🇮🇳 Indian Reporting Tips\"", "title={t('upi.awarenessPage.card3Title')}")
        ],
        std_imports,
        std_vars
    )

    # File 11: src/pages/qr/index.tsx
    patch_file(
        os.path.join(SRC, "pages", "qr", "index.tsx"),
        [
            ("Back to Dashboard", "{t('common.backToDashboard')}"),
            (">Dashboard<", ">{t('common.dashboard')}<"),
            ("Scanner", "{t('navbar.qrScamSafety')}"),
            ("Challenge", "{t('quiz.card2.title')}"),
            ("Case Study", "{t('upi.sections.caseStudy.title')}"),
            ("Awareness", "{t('deepfake.awareness')}"),
            ("Report", "{t('deepfake.report')}"),
            ("SOC module online", "{t('qr.kicker')}"),
            ("QR Scam <span>Simulator</span>", "<span>{t('qr.title')}</span>"),
            ("Train against realistic QR payment fraud, fake UPI redirects, tampered stickers, and phishing pages. Inspect indicators, earn XP, and build a habit of verifying before paying.", "{t('qr.desc')}"),
            ("Launch scanner", "{t('qr.btnLaunch')}"),
            ("Play Safe or Scam", "{t('qr.btnChallenge')}"),
            ("XP earned", "{t('qr.xp')}"),
            ("Scans run", "{t('qr.scans')}"),
            ("Scams detected", "{t('qr.detected')}"),
            ("progressive lab", "{t('qr.trainingKicker')}"),
            ("Training routes", "{t('qr.trainingTitle')}"),
            ("Each route keeps the same neon SOC interface and reuses the QR score engine.", "{t('qr.trainingDesc')}"),
            ("<h3>Realistic QR scam simulator</h3>", "<h3>{t('qr.route1.title')}</h3>"),
            ("Scan metro refunds, parking fines, charity posters, and cafe menus. Open indicators to learn what makes a QR dangerous.", "{t('qr.route1.desc')}"),
            ("<h3>Safe or Scam challenge</h3>", "<h3>{t('qr.route2.title')}</h3>"),
            ("Make rapid calls on UPI prompts and QR destinations. Final results show accuracy and readiness.", "{t('qr.route2.desc')}"),
            ("<h3>Awareness and Indian cyber law</h3>", "<h3>{t('qr.route3.title')}</h3>"),
            ("Learn how to report QR fraud, preserve evidence, and recognize IT Act sections commonly applied to online cheating.", "{t('qr.route3.desc')}"),
            ("<h3>QR fraud case study</h3>", "<h3>{t('qr.route4.title')}</h3>"),
            ("Walk through a realistic incident timeline and practice spotting the decision points that matter.", "{t('qr.route4.desc')}"),
            ("<h3>Incident report guide</h3>", "<h3>{t('qr.route5.title')}</h3>"),
            ("Collect transaction IDs, screenshots, URLs, and timestamps before escalation.", "{t('qr.route5.desc')}"),
            ("CyberShield QR module | Verify destination, payee, amount, and intent before approving.", "{t('qr.footer')}")
        ],
        std_imports,
        std_vars
    )

    # File 12: src/pages/qr/Awareness.tsx
    patch_file(
        os.path.join(SRC, "pages", "qr", "Awareness.tsx"),
        [
            ("← Back to QR Module", "{t('common.backToQr')}"),
            ("QR Scam Safety & Laws", "{t('qr.awarenessPage.title')}"),
            ("Learn how scammers weaponize QR codes to bypass url protections and how Indian cyber law penalizes QR cheating.", "{t('qr.awarenessPage.desc')}"),
            ("title=\"⚠️ QR Scam Tactics\"", "title={t('qr.awarenessPage.card1Title')}"),
            ("title=\"🛡️ Verification Habits\"", "title={t('qr.awarenessPage.card2Title')}"),
            ("title=\"⚖️ Legal Protections\"", "title={t('qr.awarenessPage.card3Title')}"),
            ("awareness and Indian cyber law", "{t('qr.kicker')}"),
            ("<h1>Verify before you pay</h1>", "<h1>{t('qr.awarenessPage.title')}</h1>"),
            ("QR codes are only shortcuts. Treat the destination screen as the real security checkpoint.", "{t('qr.awarenessPage.desc')}"),
            ("PIN means debit risk", "{t('qr.awarenessPage.card1Title')}"),
            ("If an app asks for UPI PIN, assume money can leave your account. Refunds and prize credits do not need your PIN.", "{t('qr.awarenessPage.card1Desc')}"),
            ("Look beyond the logo", "{t('qr.awarenessPage.card2Title')}"),
            ("Fake pages can copy brand colors. Check HTTPS, domain spelling, official suffixes, and whether the page asks for OTP or card data.", "{t('qr.awarenessPage.card2Desc')}"),
            ("Public stickers are risky", "{t('qr.awarenessPage.card3Title')}"),
            ("Parking meters, fuel pumps, cafes, and counters can be relabeled. Ask staff or use the official app when the sticker looks altered.", "{t('qr.awarenessPage.card3Desc')}"),
            ("<h2>Indian reporting tips</h2>", "<h2>{t('qr.awarenessPage.section2Title')}</h2>"),
            ("<h2>Law awareness</h2>", "<h2>{t('qr.awarenessPage.section3Title')}</h2>"),
            ("IT Act Section 66C relates to identity theft and credential misuse.", "{t('qr.awarenessPage.law1')}"),
            ("IT Act Section 66D relates to cheating by personation using computer resources.", "{t('qr.awarenessPage.law2')}"),
            ("IPC/BNS cheating provisions may also be relevant depending on the complaint.", "{t('qr.awarenessPage.law3')}"),
            ("Call 1930 quickly for financial cyber fraud assistance.", "{t('qr.awarenessPage.tip1')}"),
            ("File a complaint at cybercrime.gov.in with screenshots and UTR numbers.", "{t('qr.awarenessPage.tip2')}"),
            ("Share the VPA, phone number, URL, timestamp, bank, and transaction ID.", "{t('qr.awarenessPage.tip3')}"),
            ("Ask your bank or UPI app to block/freeze the transaction trail immediately.", "{t('qr.awarenessPage.tip4')}")
        ],
        std_imports,
        std_vars
    )

    # File 13: src/pages/deepfake/index.tsx
    patch_file(
        os.path.join(SRC, "pages", "deepfake", "index.tsx"),
        [
            ("Deepfake Awareness Module", "{t('deepfake.title')}"),
            (">Awareness<", ">{t('deepfake.awareness')}<"),
            (">Challenge<", ">{t('deepfake.challenge')}<"),
            (">Cases<", ">{t('deepfake.cases')}<"),
            (">Report<", ">{t('deepfake.report')}<")
        ],
        std_imports,
        std_vars
    )

    # File 14: src/pages/deepfake/Awareness.tsx
    patch_file(
        os.path.join(SRC, "pages", "deepfake", "Awareness.tsx"),
        [
            ("← Back to Deepfake Module", "{t('common.backToDeepfake')}"),
            ("AI Deepfake Awareness", "{t('deepfake.awarenessPage.title')}"),
            ("Understand AI-generated fake media, deepfake blackmail, identity spoofing, and verification methods.", "{t('deepfake.awarenessPage.desc')}"),
            ("title=\"🚨 Detection Markers\"", "title={t('deepfake.awarenessPage.card1Title')}"),
            ("title=\"🔒 Protective Actions\"", "title={t('deepfake.awarenessPage.card2Title')}"),
            ("title=\"⚖️ Legal Recourse\"", "title={t('deepfake.awarenessPage.card3Title')}"),
            ('<span className="df-kicker">Preparedness</span>', '<span className="df-kicker">{t("deepfake.awarenessPage.kicker")}</span>'),
            ('<h1>Awareness Timeline</h1>', '<h1>{t("deepfake.awarenessPage.timelineTitle")}</h1>'),
            ('<p className="df-lead">\n            A practical response flow for suspicious video calls, voice notes,\n            livestreams, and celebrity or executive impersonation.\n          </p>', '<p className="df-lead">{t("deepfake.awarenessPage.timelineDesc")}</p>'),
            ('<h3>Minute 0: Pause</h3>', '<h3>{t("deepfake.awarenessPage.step1Title")}</h3>'),
            ('<p>\n                  Do not click, pay, share OTPs, or send files while pressure\n                  is high.\n                </p>', '<p>{t("deepfake.awarenessPage.step1Desc")}</p>'),
            ('<h3>Minute 2: Verify</h3>', '<h3>{t("deepfake.awarenessPage.step2Title")}</h3>'),
            ('<p>\n                  Use a known phone number, official website, or internal\n                  directory to confirm identity.\n                </p>', '<p>{t("deepfake.awarenessPage.step2Desc")}</p>'),
            ('<h3>Minute 5: Inspect</h3>', '<h3>{t("deepfake.awarenessPage.step3Title")}</h3>'),
            ('<p>\n                  Look for lip-sync drift, repeating gestures, lighting\n                  mismatch, unnatural voice tone, and odd urgency.\n                </p>', '<p>{t("deepfake.awarenessPage.step3Desc")}</p>'),
            ('<h3>Minute 10: Escalate</h3>', '<h3>{t("deepfake.awarenessPage.step4Title")}</h3>'),
            ('<p>\n                  Report to platform support, cyber cell, bank, or internal\n                  security team with preserved evidence.\n                </p>', '<p>{t("deepfake.awarenessPage.step4Desc")}</p>'),
            ('<span className="df-kicker hot">\n              Readiness Checklist\n            </span>', '<span className="df-kicker hot">{t("deepfake.awarenessPage.checklistTitle")}</span>'),
            ('<li>\n                Use multi-person approval for payments and account changes.\n              </li>', '<li>{t("deepfake.awarenessPage.checklist1")}</li>'),
            ('<li>\n                Agree on code words for urgent family or executive requests.\n              </li>', '<li>{t("deepfake.awarenessPage.checklist2")}</li>'),
            ('<li>\n                Keep official reporting links bookmarked before an incident.\n              </li>', '<li>{t("deepfake.awarenessPage.checklist3")}</li>'),
            ('<li>\n                Train teams to question media that demands secrecy or speed.\n              </li>', '<li>{t("deepfake.awarenessPage.checklist4")}</li>'),
            ('<button\n              className="df-button"\n              onClick={validateReadiness}\n            >\n              Validate Readiness\n            </button>', '<button\n              className="df-button"\n              onClick={validateReadiness}\n            >\n              {t("deepfake.awarenessPage.btnValidate")}\n            </button>'),
            ('Awareness playbooks reduce risk before detection tools are needed.', '{t("deepfake.awarenessPage.footer")}')
        ],
        [("import { DeepfakeModal, useDeepfakeLab, XpDock } from \"./deepfakeReact\";", "import { DeepfakeModal, useDeepfakeLab, XpDock } from \"./deepfakeReact\";\nimport { useTranslation } from 'react-i18next';")],
        [("function Awareness() {", "function Awareness() {\n  const { t } = useTranslation();")]
    )

    # File 15: src/pages/reporting/components/Hero.tsx
    patch_file(
        os.path.join(SRC, "pages", "reporting", "components", "Hero.tsx"),
        [
            ("Incident Reporting", "{t('reportingPage.kicker')}"),
            ("Report Cybercrime — Steps & Guidance", "{t('reportingPage.title')}"),
            ("A concise, step-by-step guide to reporting cyber incidents to the National Cyber Crime Portal and local authorities. Preserve evidence and follow safety steps immediately.", "{t('reportingPage.desc')}")
        ],
        [("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';")],
        [("export default function Hero() {", "export default function Hero() {\n  const { t } = useTranslation();")]
    )

    # File 16: src/pages/laws/index.tsx
    patch_file(
        os.path.join(SRC, "pages", "laws", "index.tsx"),
        [
            ("Back to Dashboard", "{t('common.backToDashboard')}"),
            (">Dashboard<", ">{t('common.dashboard')}<"),
            ("Legal threat intelligence online", "{t('laws.socKicker')}"),
            ("Cyber Law Command Dashboard", "{t('laws.socTitle')}"),
            ("Explore Indian cyber law pathways through a SOC-style interface with searchable sections, reporting workflows, penalties, rights, awareness tips, and case-response drills.", "{t('laws.socDesc')}"),
            ("Explore sections", "{t('laws.btnSections')}"),
            ("Start report flow", "{t('laws.btnReport')}"),
            ("SOC Terminal", "{t('laws.socTerminal')}"),
            ("Training progress", "{t('laws.socProgress')}"),
            ("modules", "{t('laws.socModules')}"),
            ("<span>Response target</span>", "<span>{t('laws.metric1.label')}</span>"),
            ("<p>Report financial cyber fraud quickly for better fund tracing.</p>", "<p>{t('laws.metric1.desc')}</p>"),
            ("<span>Core tracks</span>", "<span>{t('laws.metric2.label')}</span>"),
            ("<p>Dashboard, IPC, BNS, IT Act, reporting, rights, cases, awareness, penalties.</p>", "<p>{t('laws.metric2.desc')}</p>"),
            ("<span>Evidence kit</span>", "<span>{t('laws.metric3.label')}</span>"),
            ("<p>URLs, screenshots, headers, transaction IDs, device logs, timelines.</p>", "<p>{t('laws.metric3.desc')}</p>"),
            ("<span>Risk zones</span>", "<span>{t('laws.metric4.label')}</span>"),
            ("<p>Fraud, stalking, identity theft, privacy breach, extortion, malware, data leak.</p>", "<p>{t('laws.metric4.desc')}</p>"),
            ("<h2>Mission Modules</h2>", "<h2>{t('laws.stationTitle')}</h2>"),
            ("<p>Choose a station and build a practical legal response map.</p>", "<p>{t('laws.stationDesc')}</p>"),
            ("<h3>Legacy Section Explorer</h3>", "<h3>{t('laws.card1.title')}</h3>"),
            ("Search key IPC provisions that still appear in older FIRs, references, and case materials.", "{t('laws.card1.desc')}"),
            ("<h3>New Code Mapping</h3>", "<h3>{t('laws.card2.title')}</h3>"),
            ("Understand how modern cyber offences connect to the Bharatiya Nyaya Sanhita.", "{t('laws.card2.desc')}"),
            ("<h3>Information Technology Act</h3>", "<h3>{t('laws.card3.title')}</h3>"),
            ("Review privacy, identity, obscene content, hacking, and intermediary duties.", "{t('laws.card3.desc')}"),
            ("<h3>Punishment Cards</h3>", "<h3>{t('laws.card4.title')}</h3>"),
            ("Scan offence types, consequences, and escalation triggers.", "{t('laws.card4.desc')}"),
            ("<h3>Citizen Rights</h3>", "<h3>{t('laws.card5.title')}</h3>"),
            ("Review practical rights, evidence preservation, and support options after a cyber incident.", "{t('laws.card5.desc')}"),
            ("<h3>Awareness Briefing</h3>", "<h3>{t('laws.card6.title')}</h3>"),
            ("Learn everyday legal awareness habits for safer reporting, response, and online conduct.", "{t('laws.card6.desc')}"),
            ("<h3>Case Response Drills</h3>", "<h3>{t('laws.card7.title')}</h3>"),
            ("Practice choosing sections, evidence paths, and reporting steps from realistic incident stories.", "{t('laws.card7.desc')}")
        ],
        std_imports,
        std_vars
    )

    # File 17: src/pages/quiz/index.tsx
    patch_file(
        os.path.join(SRC, "pages", "quiz", "index.tsx"),
        [
            ("CyberShield training", "{t('quiz.kicker')}"),
            ("Quiz Arena", "{t('quiz.title')}"),
            ("Complete challenges, detect scams, and master cybersecurity through hands-on simulations and case studies.", "{t('quiz.desc')}"),
            ("title: 'Cyber Awareness Quizzes'", "title: t('quiz.card1.title')"),
            ("desc: 'Scenario-based questions covering phishing, social engineering, and digital hygiene.'", "desc: t('quiz.card1.desc')"),
            ("title: 'Scam Simulator'", "title: t('quiz.card2.title')"),
            ("desc: 'Classify suspicious messages under pressure and build decision confidence.'", "desc: t('quiz.card2.desc')"),
            ("title: 'Case Studies'", "title: t('quiz.card3.title')"),
            ("desc: 'Analyze real-world incidents and learn response patterns.'", "desc: t('quiz.card3.desc')"),
            ("title: 'Leaderboard'", "title: t('quiz.card4.title')"),
            ("desc: 'Track XP, rank, and training progress.'", "desc: t('quiz.card4.desc')")
        ],
        std_imports,
        std_vars
    )

    # File 18: src/pages/phishing/components/Hero.tsx
    patch_file(
        os.path.join(SRC, "pages", "phishing", "components", "Hero.tsx"),
        [
            ("Frontend threat lab online", "{t('phishingSimulatorTag')}"),
            ("Phishing Awareness Simulator", "{t('phishingSimulator')}"),
            ("Train with realistic emails, SMS alerts, QR traps, fake domains, refund lures, and social engineering pressure.", "{t('phishingSimulatorDesc')}"),
            ("Start simulator", "{t('awareness.startLearning')}"),
            ("Learn signals", "{t('common.learnMore')}")
        ],
        [("import { ArrowRight, Play, Radar } from \"lucide-react\";", "import { ArrowRight, Play, Radar } from \"lucide-react\";\nimport { useTranslation } from 'react-i18next';")],
        [("export default function Hero() {", "export default function Hero() {\n  const { t } = useTranslation();")]
    )

if __name__ == "__main__":
    run()
