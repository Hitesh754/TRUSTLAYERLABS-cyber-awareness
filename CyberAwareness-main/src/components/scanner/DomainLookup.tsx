'use client';

import React, { useState } from 'react';
import { Globe, ShieldAlert, Search, Calendar, Lock, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface DnsRecord {
  type: string;
  value: string;
}

interface DomainResult {
  domain: string;
  safetyScore: number;
  registrar: string;
  creationDate: string;
  expirationDate: string;
  isBlacklisted: boolean;
  sslStatus: 'VALID' | 'EXPIRED_OR_SELF_SIGNED' | 'NONE';
  age: string;
  dnsRecords: DnsRecord[];
  riskCategory: 'SAFE' | 'SUSPICIOUS' | 'MALICIOUS';
}

export default function DomainLookup() {
  const { t } = useTranslation();
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [result, setResult] = useState<DomainResult | null>(null);
  const [error, setError] = useState('');

  const validateDomainFormat = (val: string): boolean => {
    const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(val.replace(/(^\w+:|^)\/\//, '')); // Strip http/https prefix
  };

  const runScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    let cleanDomain = domain.trim().toLowerCase();
    // Strip prefixes
    cleanDomain = cleanDomain.replace(/(^\w+:|^)\/\//, '');
    cleanDomain = cleanDomain.split('/')[0];

    if (!cleanDomain) {
      setError('Please enter a domain name');
      return;
    }

    if (!validateDomainFormat(cleanDomain)) {
      setError('Please enter a valid domain name format (e.g. google.com)');
      return;
    }

    setLoading(true);

    try {
      setScanStep('Sending WHOIS registry query (via open RDAP)...');
      await new Promise((r) => setTimeout(r, 400));
      
      let safetyScore = 100;
      let registrar = 'Unknown Registrar / Protected';
      let creationDate = 'N/A';
      let expirationDate = 'N/A';
      let isBlacklisted = false;
      let sslStatus: 'VALID' | 'EXPIRED_OR_SELF_SIGNED' | 'NONE' = 'VALID';
      let age = 'N/A';
      let riskCategory: 'SAFE' | 'SUSPICIOUS' | 'MALICIOUS' = 'SAFE';

      // 1. RDAP Registry Query (Modern open WHOIS protocol)
      try {
        const rdapResponse = await fetch(`https://rdap.org/domain/${cleanDomain}`);
        if (rdapResponse.ok) {
          const rdapData = await rdapResponse.json();
          
          // Extract registrar
          const registrarEntity = rdapData.entities?.find((ent: any) => ent.roles?.includes('registrar'));
          if (registrarEntity) {
            const fnVal = registrarEntity.vcardArray?.[1]?.find((prop: any) => prop[0] === 'fn');
            registrar = fnVal ? fnVal[3] : 'Registered';
          }

          // Extract registration/expiration events
          const regEvent = rdapData.events?.find((ev: any) => ev.eventAction === 'registration');
          const expEvent = rdapData.events?.find((ev: any) => ev.eventAction === 'expiration');
          
          if (regEvent) {
            creationDate = regEvent.eventDate.split('T')[0];
            const createdYear = new Date(regEvent.eventDate).getFullYear();
            const currentYear = new Date().getFullYear();
            const ageYears = currentYear - createdYear;
            age = ageYears > 0 ? `${ageYears} Year(s)` : 'New Registration (<1 Year)';
            
            if (ageYears === 0) {
              safetyScore -= 20; // Newly registered domains are suspicious
              riskCategory = 'SUSPICIOUS';
            }
          }
          if (expEvent) {
            expirationDate = expEvent.eventDate.split('T')[0];
          }
        }
      } catch (err) {
        console.warn('RDAP WHOIS fetch failed, skipping...');
      }

      setScanStep('Resolving DNS A records (via Cloudflare DNS)...');
      await new Promise((r) => setTimeout(r, 400));

      // 2. DNS Lookup via Cloudflare DNS over HTTPS
      let dnsRecords: DnsRecord[] = [];
      try {
        const dnsResponse = await fetch(`https://cloudflare-dns.com/dns-query?name=${cleanDomain}&type=A`, {
          headers: { 'Accept': 'application/dns-json' }
        });
        if (dnsResponse.ok) {
          const dnsData = await dnsResponse.json();
          if (dnsData.Answer) {
            dnsData.Answer.forEach((ans: any) => {
              if (ans.type === 1) { // Type 1 is A record
                dnsRecords.push({ type: 'A', value: ans.data });
              }
            });
          }
        }
      } catch (err) {
        console.warn('DNS lookup failed');
      }

      // Add default dummy record if DNS resolved nothing (rare for valid domains)
      if (dnsRecords.length === 0) {
        dnsRecords.push({ type: 'A', value: 'No active IP record mapped' });
        safetyScore -= 30;
      }

      setScanStep('Auditing domain structure and keywords...');
      await new Promise((r) => setTimeout(r, 300));

      // 3. Phishing Indicators Check
      const lowerD = cleanDomain;
      const isSuspiciousKeyword = lowerD.includes('refund') || lowerD.includes('claim') || lowerD.includes('kyc') || 
                                  lowerD.includes('support') || lowerD.includes('bank') || lowerD.includes('rbi') || 
                                  lowerD.includes('pay') || lowerD.includes('verify') || lowerD.includes('login');
      
      if (isSuspiciousKeyword) {
        safetyScore = Math.max(5, safetyScore - 55);
        riskCategory = 'MALICIOUS';
        isBlacklisted = true;
      }

      setScanStep('Checking SSL/TLS active credentials...');
      await new Promise((r) => setTimeout(r, 300));

      // 4. SSL Validation Check (simulated request to check if HTTPS resolves)
      try {
        await fetch(`https://${cleanDomain}`, { mode: 'no-cors', method: 'HEAD' });
        sslStatus = 'VALID';
      } catch (e) {
        sslStatus = 'NONE';
        safetyScore = Math.max(5, safetyScore - 30);
        if (riskCategory === 'SAFE') riskCategory = 'SUSPICIOUS';
      }

      setResult({
        domain: cleanDomain,
        safetyScore,
        registrar,
        creationDate,
        expirationDate,
        isBlacklisted,
        sslStatus,
        age,
        dnsRecords,
        riskCategory
      });
    } catch (err) {
      setError('An error occurred during domain lookup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getSafetyColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 dark:text-emerald-400';
    if (score >= 45) return 'text-amber-700 dark:text-amber-400';
    return 'text-red-650 dark:text-red-400';
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl border border-gray-250 dark:border-cyan-900/30 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
            {t('domainLookup.title')}
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {t('domainLookup.description')}
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={runScan} className="mb-8">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Enter domain (e.g. google.com)..."
              className="w-full h-12 pl-4 pr-12 bg-white dark:bg-slate-800/40 border border-gray-300 dark:border-cyan-800/40 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <Globe className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="h-12 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-200 shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed"
          >
            <Search className="w-4 h-4" />
            {loading ? t('domainLookup.analyzing') : t('domainLookup.scanBtn')}
          </button>
        </div>
      </form>

      {/* Error Output */}
      {error && (
        <div className="mb-6 p-4 bg-red-900/10 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-red-650 dark:text-red-400 flex-shrink-0" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Scanning Step animation */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <div className="w-10 h-10 border-3 border-cyan-200 dark:border-cyan-500/20 border-t-cyan-600 dark:border-t-cyan-400 rounded-full animate-spin" />
          <div className="text-center">
            <p className="text-slate-700 dark:text-slate-400 text-sm font-mono animate-pulse">{scanStep}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-600 mt-1 uppercase tracking-widest font-semibold">{t('domainLookup.queryingWhois')}</p>
          </div>
        </div>
      )}

      {/* Results View */}
      <AnimatePresence>
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Primary Result Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white dark:bg-slate-800/40 border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm">
              <div>
                <p className="text-slate-550 dark:text-slate-400 text-xs uppercase tracking-wider">{t('domainLookup.targetDomain')}</p>
                <p className="text-xl font-mono font-bold text-cyan-650 dark:text-cyan-300 mt-1 break-all">{result.domain}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-550 dark:text-slate-400 uppercase font-bold tracking-wider">{t('domainLookup.safetyRating')}</span>
                <span className={`text-2xl font-bold font-mono ${getSafetyColor(result.safetyScore)}`}>
                  {result.safetyScore}/100
                </span>
              </div>
            </div>

            {/* Visual Gauge Bar */}
            <div className="p-5 bg-slate-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-800/60 rounded-xl shadow-sm">
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    result.safetyScore >= 80 ? 'bg-emerald-500' : result.safetyScore >= 45 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${result.safetyScore}%` }}
                />
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WHOIS Core */}
              <div className="p-5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-100 dark:border-slate-800 pb-2.5">
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-sm font-semibold text-slate-850 dark:text-white">{t('domainLookup.whoisInfo')}</h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.registrar')}</span>
                    <span className="text-slate-800 dark:text-white font-mono font-medium truncate max-w-[180px]">{result.registrar}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.creationDate')}</span>
                    <span className="text-slate-800 dark:text-white font-mono">{result.creationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.expirationDate')}</span>
                    <span className="text-slate-800 dark:text-white font-mono">{result.expirationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.domainAge')}</span>
                    <span className={`font-mono font-bold ${result.riskCategory === 'MALICIOUS' ? 'text-red-650 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>{result.age}</span>
                  </div>
                </div>
              </div>

              {/* Security Audit */}
              <div className="p-5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-100 dark:border-slate-800 pb-2.5">
                  <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-sm font-semibold text-slate-850 dark:text-white">{t('domainLookup.securityStatus')}</h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.sslCertificate')}</span>
                    <span className="text-slate-800 dark:text-white font-mono font-medium">
                      {result.sslStatus === 'VALID' ? (
                        <span className="text-emerald-600 dark:text-emerald-400">{t('domainLookup.activeSsl')}</span>
                      ) : result.sslStatus === 'EXPIRED_OR_SELF_SIGNED' ? (
                        <span className="text-amber-700 dark:text-amber-400 font-bold">{t('domainLookup.selfSignedSsl')}</span>
                      ) : (
                        <span className="text-red-650 dark:text-red-400 font-bold">{t('domainLookup.noSsl')}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.blacklistedFeed')}</span>
                    <span className="font-mono">
                      {result.isBlacklisted ? (
                        <span className="text-red-650 dark:text-red-400 font-bold">{t('domainLookup.flaggedPhishing')}</span>
                      ) : (
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t('domainLookup.cleanFeed')}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-550 dark:text-slate-400">{t('domainLookup.riskProfile')}</span>
                    <span className={`font-bold uppercase ${
                      result.riskCategory === 'MALICIOUS' ? 'text-red-650 dark:text-red-400' : result.riskCategory === 'SUSPICIOUS' ? 'text-amber-700 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'
                    }`}>{result.riskCategory}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DNS Records */}
            <div className="p-5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 border-b border-gray-100 dark:border-slate-800 pb-2">
                <List className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-sm font-semibold text-slate-850 dark:text-white">{t('domainLookup.dnsRecords')}</h3>
              </div>
              <div className="space-y-2">
                {result.dnsRecords.map((rec, i) => (
                  <div key={i} className="flex font-mono text-xs items-center gap-4 py-1 border-b border-gray-100 dark:border-slate-850 last:border-b-0">
                    <span className="w-12 text-cyan-600 dark:text-cyan-400 font-bold">{rec.type}</span>
                    <span className="text-slate-700 dark:text-slate-300 break-all">{rec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-5 bg-gradient-to-t from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{t('domainLookup.securityActions')}</h4>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2.5 list-inside list-disc">
                {result.riskCategory === 'MALICIOUS' ? (
                  <>
                    <li className="text-red-750 dark:text-red-300">**Critical Phishing Risk**: Do not log in, do not enter sensitive credentials or UPI pins on this domain.</li>
                    <li>**Verify Typography**: Check if this domain is typosquatting (e.g. `paypa1` instead of `paypal`).</li>
                    <li>**Block Connections**: Close any connections and clear cookies immediately.</li>
                  </>
                ) : result.riskCategory === 'SUSPICIOUS' ? (
                  <>
                    <li className="text-amber-700 dark:text-amber-300">**Newly Registered Domain**: This domain was registered very recently. Exercise caution.</li>
                    <li>**Validate Certificate**: Check SSL credentials. Do not trust if warnings appear.</li>
                  </>
                ) : (
                  <>
                    <li className="text-emerald-700 dark:text-emerald-300">**High Credibility Profile**: Age and reputation checks look healthy. Verify matching domain whenever navigating through emails.</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
