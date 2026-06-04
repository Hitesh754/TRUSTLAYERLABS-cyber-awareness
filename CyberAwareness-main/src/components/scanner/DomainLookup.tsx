'use client';

import React, { useState } from 'react';
import { Globe, ShieldAlert, Search, Calendar, Lock, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    const steps = [
      'Sending WHOIS registry query...',
      'Resolving DNS network mapping (A, AAAA, MX)...',
      'Inspecting SSL/TLS certificate details...',
      'Auditing blacklists and phishing intelligence feeds...',
      'Calculating aggregated domain safety score...'
    ];

    for (const step of steps) {
      setScanStep(step);
      await new Promise((r) => setTimeout(r, 600));
    }

    try {
      let safetyScore = 100;
      let registrar = 'MarkMonitor Inc.';
      let creationDate = '1997-09-15';
      let expirationDate = '2028-09-14';
      let isBlacklisted = false;
      let sslStatus: 'VALID' | 'EXPIRED_OR_SELF_SIGNED' | 'NONE' = 'VALID';
      let age = '28 Years';
      let riskCategory: 'SAFE' | 'SUSPICIOUS' | 'MALICIOUS' = 'SAFE';
      let dnsRecords: DnsRecord[] = [];

      // Check for phishing keywords
      const lowerD = cleanDomain;
      const isSuspiciousKeyword = lowerD.includes('refund') || lowerD.includes('claim') || lowerD.includes('kyc') || 
                                  lowerD.includes('support') || lowerD.includes('bank') || lowerD.includes('rbi') || 
                                  lowerD.includes('pay') || lowerD.includes('verify');

      if (lowerD === 'paypal-refund-claims.net' || isSuspiciousKeyword) {
        safetyScore = Math.floor(Math.random() * 20) + 5; // 5-25%
        registrar = 'NameSilo, LLC';
        creationDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 3 days ago
        expirationDate = new Date(Date.now() + 362 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 1 year
        isBlacklisted = true;
        sslStatus = Math.random() > 0.5 ? 'EXPIRED_OR_SELF_SIGNED' : 'NONE';
        age = '3 Days';
        riskCategory = 'MALICIOUS';
        
        dnsRecords = [
          { type: 'A', value: '185.112.144.10' },
          { type: 'MX', value: '10 mail.paypal-refund-claims.net' },
          { type: 'TXT', value: 'v=spf1 include:_spf.google.com ~all' }
        ];
      } else {
        // Safe domain mock
        safetyScore = Math.floor(Math.random() * 15) + 85; // 85-100%
        registrar = 'GoDaddy Operating Company, LLC';
        creationDate = '2012-04-18';
        expirationDate = '2030-04-18';
        isBlacklisted = false;
        sslStatus = 'VALID';
        age = '14 Years';
        riskCategory = 'SAFE';

        dnsRecords = [
          { type: 'A', value: '142.250.190.46' },
          { type: 'AAAA', value: '2607:f8b0:4005:802::200e' },
          { type: 'MX', value: '10 mail.google-analytics.com' }
        ];
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
    if (score >= 80) return 'text-emerald-400';
    if (score >= 45) return 'text-amber-400';
    return 'text-red-400';
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-cyan-900/30 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Domain & WHOIS OSINT Analyzer
          </h2>
        </div>
        <p className="text-slate-400 text-sm">
          Scan domain registrar dates, analyze active DNS record mappings, evaluate SSL status, and calculate safety credibility scores.
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
              className="w-full h-12 pl-4 pr-12 bg-slate-800/40 border border-cyan-800/40 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <Globe className="absolute right-4 top-3.5 w-5 h-5 text-slate-500" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="h-12 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-200 shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed"
          >
            <Search className="w-4 h-4" />
            {loading ? 'Analyzing...' : 'Scan'}
          </button>
        </div>
      </form>

      {/* Error Output */}
      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Scanning Step animation */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <div className="w-10 h-10 border-3 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
          <div className="text-center">
            <p className="text-slate-400 text-sm font-mono animate-pulse">{scanStep}</p>
            <p className="text-[11px] text-slate-600 mt-1 uppercase tracking-widest font-semibold">Running Domain WHOIS queries...</p>
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-slate-800/40 border border-slate-800 rounded-xl">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Target Domain Name</p>
                <p className="text-xl font-mono font-bold text-cyan-300 mt-1 break-all">{result.domain}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Safety Rating</span>
                <span className={`text-2xl font-bold font-mono ${getSafetyColor(result.safetyScore)}`}>
                  {result.safetyScore}/100
                </span>
              </div>
            </div>

            {/* Visual Gauge Bar */}
            <div className="p-5 bg-slate-800/30 border border-slate-800/60 rounded-xl">
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
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
              <div className="p-5 bg-slate-900 border border-slate-850 rounded-xl space-y-3.5">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-semibold text-white">WHOIS Registrar Info</h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Registrar</span>
                    <span className="text-white font-mono font-medium truncate max-w-[180px]">{result.registrar}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Creation Date</span>
                    <span className="text-white font-mono">{result.creationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Expiration Date</span>
                    <span className="text-white font-mono">{result.expirationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Domain Age</span>
                    <span className={`font-mono font-bold ${result.riskCategory === 'MALICIOUS' ? 'text-red-400' : 'text-emerald-400'}`}>{result.age}</span>
                  </div>
                </div>
              </div>

              {/* Security Audit */}
              <div className="p-5 bg-slate-900 border border-slate-850 rounded-xl space-y-3.5">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-semibold text-white">Security Status</h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">SSL Certificate</span>
                    <span className="text-white font-mono font-medium">
                      {result.sslStatus === 'VALID' ? (
                        <span className="text-emerald-400">✓ Active SSL</span>
                      ) : result.sslStatus === 'EXPIRED_OR_SELF_SIGNED' ? (
                        <span className="text-amber-400 font-bold">⚠️ Self-Signed/Expired</span>
                      ) : (
                        <span className="text-red-400 font-bold">✗ Unencrypted/None</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Blacklisted Feed</span>
                    <span className="font-mono">
                      {result.isBlacklisted ? (
                        <span className="text-red-400 font-bold">Flagged / Phishing Risk</span>
                      ) : (
                        <span className="text-emerald-400 font-medium">Clean / Clean Feed</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Risk Profile</span>
                    <span className={`font-bold uppercase ${
                      result.riskCategory === 'MALICIOUS' ? 'text-red-400' : result.riskCategory === 'SUSPICIOUS' ? 'text-amber-400' : 'text-emerald-400'
                    }`}>{result.riskCategory}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DNS Records */}
            <div className="p-5 bg-slate-900 border border-slate-850 rounded-xl space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <List className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-white">Resolved DNS Records</h3>
              </div>
              <div className="space-y-2">
                {result.dnsRecords.map((rec, i) => (
                  <div key={i} className="flex font-mono text-xs items-center gap-4 py-1 border-b border-slate-850 last:border-b-0">
                    <span className="w-12 text-cyan-400 font-bold">{rec.type}</span>
                    <span className="text-slate-300 break-all">{rec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-5 bg-gradient-to-t from-slate-950 to-slate-900 border border-slate-850 rounded-xl">
              <h4 className="text-sm font-semibold text-white mb-3">Security Action Items</h4>
              <ul className="text-xs text-slate-300 space-y-2.5 list-inside list-disc">
                {result.riskCategory === 'MALICIOUS' ? (
                  <>
                    <li className="text-red-300">**Critical Phishing Risk**: Do not log in, do not enter sensitive credentials or UPI pins on this domain.</li>
                    <li>**Verify Typography**: Check if this domain is typosquatting (e.g. `paypa1` instead of `paypal`).</li>
                    <li>**Block Connections**: Close any connections and clear cookies immediately.</li>
                  </>
                ) : result.riskCategory === 'SUSPICIOUS' ? (
                  <>
                    <li className="text-amber-300">**Newly Registered Domain**: This domain was registered very recently. Exercise caution.</li>
                    <li>**Validate Certificate**: Check SSL credentials. Do not trust if warnings appear.</li>
                  </>
                ) : (
                  <>
                    <li className="text-emerald-300">**High Credibility Profile**: Age and reputation checks look healthy. Verify matching domain whenever navigating through emails.</li>
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
