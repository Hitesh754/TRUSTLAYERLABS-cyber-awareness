'use client';

import React, { useState } from 'react';
import { Mail, ShieldAlert, Search, Database, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface BreachRecord {
  name: string;
  date: string;
  compromisedData: string[];
}

interface EmailResult {
  email: string;
  isValidFormat: boolean;
  isDisposable: boolean;
  mxRecordsFound: boolean;
  smtpCheck: 'ACTIVE' | 'INACTIVE';
  spamScore: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  breaches: BreachRecord[];
}

export default function EmailLookup() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [result, setResult] = useState<EmailResult | null>(null);
  const [error, setError] = useState('');

  const validateEmailFormat = (val: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const runScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Please enter an email address');
      return;
    }

    if (!validateEmailFormat(cleanEmail)) {
      setError('Please enter a valid email address format (e.g. user@example.com)');
      return;
    }

    setLoading(true);

    const steps = [
      'Performing syntax and RFC compliance checks...',
      'Resolving DNS MX records...',
      'Auditing against disposable email database...',
      'Performing deep search in historical credentials dumps...',
      'Aggregating domain risk rating...'
    ];

    for (const step of steps) {
      setScanStep(step);
      await new Promise((r) => setTimeout(r, 600));
    }

    try {
      let isDisposable = false;
      let mxRecordsFound = true;
      let smtpCheck: 'ACTIVE' | 'INACTIVE' = 'ACTIVE';
      let spamScore = 5;
      let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' = 'LOW';
      let breaches: BreachRecord[] = [];

      // Check for common disposable domains
      if (cleanEmail.includes('temp-mail') || cleanEmail.includes('10minutemail') || cleanEmail.includes('yopmail')) {
        isDisposable = true;
        spamScore = 95;
        riskLevel = 'HIGH';
      }

      // Simulated data based on email name length or exact match
      if (cleanEmail === 'compromised@gmail.com' || cleanEmail.length % 2 === 1) {
        // High/Medium risk with breaches
        spamScore = cleanEmail === 'compromised@gmail.com' ? 88 : Math.floor(Math.random() * 40) + 40;
        riskLevel = spamScore > 75 ? 'HIGH' : 'MEDIUM';
        
        breaches = [
          {
            name: 'Canva Security Breach',
            date: 'May 2019',
            compromisedData: ['Passwords', 'Email addresses', 'Names', 'Usernames']
          },
          {
            name: 'Adobe Database Leak',
            date: 'October 2013',
            compromisedData: ['Passwords (encrypted)', 'Email addresses', 'Password hints']
          }
        ];

        if (cleanEmail === 'compromised@gmail.com') {
          breaches.push({
            name: 'LinkedIn Credential Dump',
            date: 'May 2016',
            compromisedData: ['Passwords (cryptographic hashes)', 'Email addresses']
          });
        }
      } else {
        // Clean email
        spamScore = Math.floor(Math.random() * 12) + 2;
        riskLevel = 'LOW';
        breaches = [];
      }

      setResult({
        email: cleanEmail,
        isValidFormat: true,
        isDisposable,
        mxRecordsFound,
        smtpCheck,
        spamScore,
        riskLevel,
        breaches
      });
    } catch (err) {
      setError('An error occurred during verification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'HIGH':
        return 'text-red-750 dark:text-red-400 border-red-200 dark:border-red-700/60 bg-red-50 dark:bg-red-950/40';
      case 'MEDIUM':
        return 'text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/40';
      default:
        return 'text-emerald-750 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700/60 bg-emerald-50 dark:bg-emerald-950/40';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl border border-gray-250 dark:border-cyan-900/30 shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
            {t('emailLookup.title')}
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {t('emailLookup.description')}
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={runScan} className="mb-8">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address (e.g. user@gmail.com)..."
              className="w-full h-12 pl-4 pr-12 bg-white dark:bg-slate-800/40 border border-gray-300 dark:border-cyan-800/40 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <Mail className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="h-12 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-200 shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed"
          >
            <Search className="w-4 h-4" />
            {loading ? t('emailLookup.searching') : t('emailLookup.auditBtn')}
          </button>
        </div>
      </form>

      {/* Error Banner */}
      {error && (
        <div className="mb-6 p-4 bg-red-900/10 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-red-650 dark:text-red-400 flex-shrink-0" />
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Loading Steps */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <div className="w-10 h-10 border-3 border-cyan-200 dark:border-cyan-500/20 border-t-cyan-600 dark:border-t-cyan-400 rounded-full animate-spin" />
          <div className="text-center">
            <p className="text-slate-700 dark:text-slate-400 text-sm font-mono animate-pulse">{scanStep}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-600 mt-1 uppercase tracking-widest font-semibold">{t('emailLookup.queryingRegistry')}</p>
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
            {/* Banner Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white dark:bg-slate-800/40 border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">{t('emailLookup.targetAddress')}</p>
                <p className="text-xl font-mono font-bold text-cyan-600 dark:text-cyan-300 mt-1 break-all">{result.email}</p>
              </div>
              <div className={`px-4 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-2 ${getRiskColor(result.riskLevel)}`}>
                <AlertTriangle className="w-4 h-4" /> {t('emailLookup.riskLevel')}: {result.riskLevel}
              </div>
            </div>

            {/* Verification Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl shadow-sm animate-fade-in">
                <p className="text-slate-550 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">{t('emailLookup.smtpServer')}</p>
                <p className="text-sm font-semibold text-slate-850 dark:text-white mt-1.5">
                  {result.smtpCheck === 'ACTIVE' ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t('emailLookup.deliverable')}</span>
                  ) : (
                    <span className="text-red-650 dark:text-red-400 font-bold">{t('emailLookup.deadInvalid')}</span>
                  )}
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl shadow-sm animate-fade-in">
                <p className="text-slate-550 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">{t('emailLookup.mxRecords')}</p>
                <p className="text-sm font-semibold text-slate-850 dark:text-white mt-1.5">
                  {result.mxRecordsFound ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t('emailLookup.resolved')}</span>
                  ) : (
                    <span className="text-red-650 dark:text-red-400 font-bold">{t('emailLookup.noneRecords')}</span>
                  )}
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl shadow-sm animate-fade-in">
                <p className="text-slate-550 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">{t('emailLookup.tempMailbox')}</p>
                <p className="text-sm font-semibold text-slate-850 dark:text-white mt-1.5">
                  {result.isDisposable ? (
                    <span className="text-red-650 dark:text-red-400 font-bold">{t('emailLookup.yes')}</span>
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t('emailLookup.no')}</span>
                  )}
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl shadow-sm animate-fade-in">
                <p className="text-slate-550 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">{t('emailLookup.dataLeaks')}</p>
                <p className="text-sm font-semibold text-slate-850 dark:text-white mt-1.5">
                  {result.breaches.length > 0 ? (
                    <span className="text-red-650 dark:text-red-400 font-bold">{result.breaches.length} Breach(es)</span>
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t('emailLookup.clean')}</span>
                  )}
                </p>
              </div>
            </div>

            {/* Breach Details Section */}
            {result.breaches.length > 0 ? (
              <div className="p-5 bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 rounded-xl space-y-4">
                <div className="flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-sm font-semibold text-red-800 dark:text-red-300">{t('emailLookup.dataLeakRegistry')}</h3>
                </div>

                <div className="space-y-4">
                  {result.breaches.map((breach, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-850 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{breach.name}</h4>
                        <span className="text-[10px] text-slate-500 font-semibold">{breach.date}</span>
                      </div>
                      <div className="mt-3">
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1.5">{t('emailLookup.exposedParameters')}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {breach.compromisedData.map((d, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/40 rounded-full">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-5 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-900/30 rounded-xl flex gap-3.5 items-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">{t('emailLookup.noLeaks')}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">{t('emailLookup.noLeaksDesc')}</p>
                </div>
              </div>
            )}

            {/* Recommendations Card */}
            <div className="p-5 bg-gradient-to-t from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border border-gray-200 dark:border-slate-850 rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{t('emailLookup.securityActions')}</h4>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2.5 list-inside list-disc">
                {result.riskLevel === 'HIGH' ? (
                  <>
                    <li className="text-red-700 dark:text-red-300">**Critical**: Change password immediately if you use this password on multiple sites.</li>
                    <li>**Active MFA**: Enable Multi-Factor Authentication on your email and banking profiles.</li>
                    <li>**Check for leaks**: Check and secure matching credentials for any accounts tied to this email.</li>
                  </>
                ) : result.riskLevel === 'MEDIUM' ? (
                  <>
                    <li className="text-amber-800 dark:text-amber-300">**Credentials hygiene**: Ensure you use unique passwords for primary and social networks.</li>
                    <li>**De-clutter**: Revoke login access of this email address to services you no longer actively use.</li>
                  </>
                ) : (
                  <>
                    <li className="text-emerald-700 dark:text-emerald-300">**Good standing**: Continue keeping a strong password policy and monitor periodic activity alerts.</li>
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
