"""
Master i18n patching script for CyberAwareness-main.
Steps:
  1. Patch all OSINT page wrappers (ip-scanner, phone-lookup, email-lookup, domain-lookup, crypto-lookup, breach-checker)
  2. Patch the Awareness index page
  3. Add ALL new English keys to translation.json
  4. Run translate_i18n.py to sync all 9 languages
"""
import os, json, re, subprocess, sys

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SRC  = os.path.join(BASE, "src")
LOCALES = os.path.join(SRC, "i18n", "locales")
EN_JSON = os.path.join(LOCALES, "en", "translation.json")

# ─────────────────────────────────────────────────────────────────────────────
# 1. New English keys to add
# ─────────────────────────────────────────────────────────────────────────────
NEW_EN_KEYS = {
    "pages": {
        "ipScanner":      { "title": "IP Reputation Scanner",          "description": "Lookup IP reputation and abuse reports from global threat databases." },
        "urlScanner":     { "title": "URL Reputation Scanner",          "description": "Analyze suspicious URLs using live VirusTotal threat intelligence." },
        "breachChecker":  { "title": "Data Breach Checker",             "description": "Check if an email or password appears in known data breaches." },
        "phoneLookup":    { "title": "Mobile Number Lookup",            "description": "Investigate suspicious callers, retrieve carrier details, and check global spam registries." },
        "emailLookup":    { "title": "Email Address Lookup",            "description": "Verify email reputation, detect disposable addresses, and check breach registries." },
        "domainLookup":   { "title": "Domain WHOIS Lookup",             "description": "Analyze domain reputation, WHOIS records, DNS entries, and SSL status." },
        "cryptoLookup":   { "title": "Crypto Wallet Lookup",            "description": "Trace crypto wallet transactions, check balances, and detect malicious flags." },
        "threatFeed":     { "title": "Threat Feed",                     "description": "Live phishing, malware, and scam intelligence updated in real-time." },
    },
    "awareness": {
        "backHome":       "← Back to Home",
        "breadcrumb":     "Cyber Awareness Module",
        "badgeText":      "Cyber Awareness Module",
        "heroTitle":      "Stay Safe in the Digital World",
        "heroDesc":       "Learn to identify cyber threats, protect your identity, and report cybercrime — all in one place.",
        "startLearning":  "Start Learning →",
        "reportCrime":    "Report Cybercrime ↗",
        "statsLost":      "Lost to cybercrime (2023)",
        "statsComplaints":"Complaints filed",
        "statsHelpline":  "National Helpline",
        "statsTopics":    "In this module",
        "modulesHeading": "📚 Awareness Modules",
        "learnMore":      "Learn more",
        "victimTitle":    "🚨 Victim of Cybercrime?",
        "victimDesc":     "Report immediately at the National Cyber Crime Portal or call the helpline.",
        "callHelpline":   "📞 Call 1930",
        "reportOnline":   "Report Online",
        "modules": {
            "phishing":         { "title": "Phishing Awareness",    "desc": "Recognize fake emails, SMS, and websites trying to steal your credentials and OTPs.",               "tag": "Most Common"   },
            "upiFraud":         { "title": "UPI Fraud",             "desc": "Stay safe from fake collect requests, screen-sharing scams, and PIN theft.",                         "tag": "High Risk"     },
            "qrScam":           { "title": "QR Code Scam",          "desc": "Learn how scammers weaponize QR codes to silently drain your bank account.",                         "tag": "Rising Threat" },
            "socialMedia":      { "title": "Social Media Scams",    "desc": "Identify fake profiles, lottery fraud, and investment scams on WhatsApp & Instagram.",               "tag": "Widespread"    },
            "deepfake":         { "title": "Deepfake Awareness",    "desc": "Understand AI-generated fake videos used for blackmail, fraud, and misinformation.",                 "tag": "AI Threat"     },
            "identityTheft":    { "title": "Identity Theft",        "desc": "Protect your Aadhaar, PAN, and personal data from being stolen and misused.",                        "tag": "Critical"      },
            "passwordMfa":      { "title": "Password & MFA",        "desc": "Build strong passwords and enable multi-factor authentication on all accounts.",                      "tag": "Essential"     },
        }
    },
    "osintHub": {
        "backHome":       "← Back to Home",
        "breadcrumb":     "OSINT Tools",
        "badgeText":      "Intelligence Toolkit",
        "heroTitle":      "OSINT Tools Hub",
        "heroDesc":       "Professional open-source intelligence tools for threat analysis, digital forensics, and cyber investigation.",
        "tools": {
            "threatFeed":        { "title": "Threat Feed",           "desc": "Monitor live phishing campaigns, malware domains, and real-time threat intelligence." },
            "urlScanner":        { "title": "URL Scanner",           "desc": "Analyze suspicious links using VirusTotal & multi-engine threat detection." },
            "ipScanner":         { "title": "IP Scanner",            "desc": "Check IP reputation, abuse score, ISP, country, and blacklist status." },
            "breachChecker":     { "title": "Data Breach Checker",   "desc": "Search email and password across 12 billion+ leaked credentials." },
            "phoneLookup":       { "title": "Mobile Number Lookup",  "desc": "Investigate suspicious callers, retrieve carrier details, and check global spam registries." },
            "emailLookup":       { "title": "Email Address Lookup",  "desc": "Audit email validity, deliverability, disposable detection and breach exposure." },
            "domainLookup":      { "title": "Domain WHOIS Lookup",   "desc": "Investigate domain registration, DNS records, SSL and blacklist reputation." },
            "cryptoLookup":      { "title": "Crypto Wallet Lookup",  "desc": "Trace blockchain transactions, check balances and detect sanctioned wallets." },
        },
        "launchTool":     "Launch Tool →",
    },
    "common": {
        "backHome":       "← Back to Home",
        "callHelpline":   "📞 Call 1930",
        "reportOnline":   "Report Online",
        "victimTitle":    "🚨 Victim of a Scam?",
        "victimDesc":     "Report immediately at the National Cyber Crime Portal or call the helpline.",
        "learnMore":      "Learn more",
        "viewDetails":    "View details",
        "indicators":     "indicators",
    }
}

def deep_merge(base, patch):
    """Merge patch into base dict recursively, only adding missing keys."""
    for k, v in patch.items():
        if k not in base:
            base[k] = v
        elif isinstance(v, dict) and isinstance(base[k], dict):
            deep_merge(base[k], v)
    return base

def update_en_json():
    with open(EN_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    data = deep_merge(data, NEW_EN_KEYS)
    with open(EN_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("[OK] Updated en/translation.json with all new keys")

# ─────────────────────────────────────────────────────────────────────────────
# 2. Page wrapper patches
# ─────────────────────────────────────────────────────────────────────────────
PAGE_WRAPPERS = {
    "ip-scanner/index.tsx": (
        "IPScanner",
        "../../components/scanner/IPScanner",
        "pages.ipScanner.title",
        "pages.ipScanner.description",
        "IPScannerPage",
    ),
    "phone-lookup/index.tsx": (
        "PhoneLookup",
        "../../components/scanner/PhoneLookup",
        "pages.phoneLookup.title",
        "pages.phoneLookup.description",
        "PhoneLookupPage",
    ),
    "email-lookup/index.tsx": (
        "EmailLookup",
        "../../components/scanner/EmailLookup",
        "pages.emailLookup.title",
        "pages.emailLookup.description",
        "EmailLookupPage",
    ),
    "domain-lookup/index.tsx": (
        "DomainLookup",
        "../../components/scanner/DomainLookup",
        "pages.domainLookup.title",
        "pages.domainLookup.description",
        "DomainLookupPage",
    ),
    "crypto-lookup/index.tsx": (
        "CryptoLookup",
        "../../components/scanner/CryptoLookup",
        "pages.cryptoLookup.title",
        "pages.cryptoLookup.description",
        "CryptoLookupPage",
    ),
    "breach-checker/index.tsx": (
        "BreachChecker",
        "../../components/scanner/BreachChecker",
        "pages.breachChecker.title",
        "pages.breachChecker.description",
        "BreachCheckerPage",
    ),
    "url-scanner/index.tsx": (
        "UrlScanner",
        "../../components/scanner/UrlScanner",
        "pages.urlScanner.title",
        "pages.urlScanner.description",
        "UrlScannerPage",
    ),
}

WRAPPER_TEMPLATE = '''import {component} from "{import_path}";
import {{ useTranslation }} from "react-i18next";

export default function {fn_name}() {{
  const {{ t }} = useTranslation();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b1020] dark:text-white pt-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {{t("{title_key}")}}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {{t("{desc_key}")}}
          </p>
        </div>
        <{component} />
      </div>
    </div>
  );
}}
'''

def patch_page_wrappers():
    pages_dir = os.path.join(SRC, "pages")
    for rel_path, (component, import_path, title_key, desc_key, fn_name) in PAGE_WRAPPERS.items():
        full_path = os.path.join(pages_dir, rel_path)
        content = WRAPPER_TEMPLATE.format(
            component=component,
            import_path=import_path,
            fn_name=fn_name,
            title_key=title_key,
            desc_key=desc_key,
        )
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [OK] Patched {rel_path}")

# ─────────────────────────────────────────────────────────────────────────────
# 3. Patch awareness/index.tsx
# ─────────────────────────────────────────────────────────────────────────────
AWARENESS_INDEX = '''import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AwarenessIndex() {
  const { t } = useTranslation();

  const modules = [
    { key: 'phishing',      href: '/awareness/phishing',       icon: '🎣', tagBg: 'rgba(248,113,113,0.1)', tagColor: '#f87171', tagBorder: 'rgba(248,113,113,0.25)' },
    { key: 'upiFraud',      href: '/awareness/upi-fraud',      icon: '💸', tagBg: 'rgba(249,115,22,0.1)',  tagColor: '#f97316', tagBorder: 'rgba(249,115,22,0.25)'  },
    { key: 'qrScam',        href: '/awareness/qr-scam',        icon: '📷', tagBg: 'rgba(234,179,8,0.1)',   tagColor: '#eab308', tagBorder: 'rgba(234,179,8,0.25)'   },
    { key: 'socialMedia',   href: '/awareness/social-media',   icon: '📱', tagBg: 'rgba(96,165,250,0.1)',  tagColor: '#60a5fa', tagBorder: 'rgba(96,165,250,0.25)'  },
    { key: 'deepfake',      href: '/awareness/deepfake',       icon: '🎭', tagBg: 'rgba(34,211,238,0.1)',  tagColor: '#22d3ee', tagBorder: 'rgba(34,211,238,0.25)'  },
    { key: 'identityTheft', href: '/awareness/identity-theft', icon: '🪪', tagBg: 'rgba(248,113,113,0.1)', tagColor: '#f87171', tagBorder: 'rgba(248,113,113,0.25)' },
    { key: 'passwordMfa',   href: '/awareness/password-mfa',   icon: '🔐', tagBg: 'rgba(74,222,128,0.1)',  tagColor: '#4ade80', tagBorder: 'rgba(74,222,128,0.25)'  },
  ];

  const stats = [
    { value: '₹1,750 Cr+', labelKey: 'statsLost'       },
    { value: '15.9 Lakh',  labelKey: 'statsComplaints'  },
    { value: '1930',       labelKey: 'statsHelpline'    },
    { value: '7 Topics',   labelKey: 'statsTopics'      },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="border-b border-gray-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {t('awareness.backHome')}
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="text-xs text-slate-600 dark:text-slate-400">{t('awareness.breadcrumb')}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">
        <div className="relative rounded-2xl overflow-hidden px-8 py-16 text-center border border-slate-250 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 shadow-sm transition-colors duration-300">
          <div className="absolute -top-16 left-1/4 w-80 h-80 rounded-full pointer-events-none opacity-50 dark:opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)' }} />
          <div className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-50 dark:opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.09) 0%, transparent 65%)' }} />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7 uppercase tracking-wider"
              style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}>
              <Shield className="w-3.5 h-3.5" /> {t('awareness.badgeText')}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-900 dark:text-white">
              {t('awareness.heroTitle').split(' in the')[0]}{' '}
              <span style={{ background: 'linear-gradient(90deg,#22d3ee,#2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t('awareness.heroTitle').includes(' in the') ? 'Digital World' : ''}
              </span>
            </h1>
            <p className="text-sm max-w-lg mx-auto mb-9 text-slate-650 dark:text-slate-400">
              {t('awareness.heroDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/awareness/phishing"
                className="px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 hover:brightness-110 text-slate-950"
                style={{ background: 'linear-gradient(135deg,#0e7490,#22d3ee)' }}>
                {t('awareness.startLearning')}
              </Link>
              <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer"
                className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 bg-slate-100 hover:bg-slate-200 border border-gray-250 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:border-slate-800 dark:text-slate-300">
                {t('awareness.reportCrime')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.labelKey} className="rounded-xl p-4 text-center bg-white border border-gray-250 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
              <div className="text-xl font-bold mb-1 text-cyan-600 dark:text-cyan-400">{s.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{t(`awareness.${s.labelKey}`)}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200">{t('awareness.modulesHeading')}</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.2)' }}>
              7 Topics
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m) => (
              <Link key={m.href} to={m.href}
                className="group block rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-white border border-gray-250 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-cyan-500/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-cyan-500/10 border border-cyan-500/20 dark:bg-cyan-500/5 dark:border-cyan-500/15">
                    {m.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: m.tagBg, color: m.tagColor, border: `1px solid ${m.tagBorder}` }}>
                    {t(`awareness.modules.${m.key}.tag`)}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-1.5 text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {t(`awareness.modules.${m.key}.title`)}
                </h3>
                <p className="text-xs leading-relaxed text-slate-650 dark:text-slate-400">{t(`awareness.modules.${m.key}.desc`)}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  {t('awareness.learnMore')} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-cyan-500/10 dark:from-cyan-950/10 dark:to-cyan-900/10 transition-colors duration-300">
          <div>
            <div className="font-bold text-base text-slate-800 dark:text-white mb-1">{t('awareness.victimTitle')}</div>
            <p className="text-sm text-slate-650 dark:text-slate-400">{t('awareness.victimDesc')}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:1930"
              className="px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#b91c1c,#ef4444)' }}>
              {t('awareness.callHelpline')}
            </a>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/25 text-cyan-700 dark:text-cyan-300">
              {t('awareness.reportOnline')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
'''

def patch_awareness_index():
    path = os.path.join(SRC, "pages", "awareness", "index.tsx")
    with open(path, "w", encoding="utf-8") as f:
        f.write(AWARENESS_INDEX)
    print("  [OK] Patched awareness/index.tsx")

# ─────────────────────────────────────────────────────────────────────────────
# 4. Run translation script
# ─────────────────────────────────────────────────────────────────────────────
def run_translate():
    script = os.path.join(BASE, "scripts", "translate_i18n.py")
    print("\n[INFO] Running translation script for all 9 languages...")
    result = subprocess.run([sys.executable, script], capture_output=False, text=True)
    if result.returncode != 0:
        print("[ERROR] Translation script failed")
    else:
        print("[OK] All languages translated")

# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=== Step 1: Update en/translation.json ===")
    update_en_json()

    print("\n=== Step 2: Patch OSINT page wrappers ===")
    patch_page_wrappers()

    print("\n=== Step 3: Patch awareness/index.tsx ===")
    patch_awareness_index()

    print("\n=== Step 4: Translate all missing keys ===")
    run_translate()

    print("\n[DONE] All pages and OSINT tool wrappers are now i18n-ready.")
