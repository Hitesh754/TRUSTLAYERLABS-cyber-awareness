import { ScamType } from '../../data/scamDatabase';
import { Shield, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ScamDetailProps {
  scam: ScamType;
}

const severityColors = {
  low: { bg: 'rgba(74,222,128,0.1)', color: '#4ade80', border: 'rgba(74,222,128,0.25)' },
  medium: { bg: 'rgba(250,204,21,0.1)', color: '#facc15', border: 'rgba(250,204,21,0.25)' },
  high: { bg: 'rgba(249,115,22,0.1)', color: '#f97316', border: 'rgba(249,115,22,0.25)' },
  critical: { bg: 'rgba(239,68,68,0.1)', color: '#ef4444', border: 'rgba(239,68,68,0.25)' }
};

export default function ScamDetail({ scam }: ScamDetailProps) {
  const { t } = useTranslation();
  const severity = severityColors[scam.severity];
  const category = scam.category;
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/scam-library" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            {t('common.backToLibrary', 'Back to Library')}
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="text-xs text-slate-655 dark:text-slate-455">{t(`scams.${scam.id}.name`, scam.name)}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Title Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{ background: severity.bg, color: severity.color, border: `1px solid ${severity.border}` }}>
              {t(`scamLibraryExt.severity.${scam.severity}`, `${scam.severity} Severity`)}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.2)' }}>
              {t({
                'Financial-Fraud': 'scamLibraryExt.cat.financialFraud',
                'Phishing-Social-Engineering': 'scamLibraryExt.cat.phishingSocial',
                'Technical-Attacks': 'scamLibraryExt.cat.technicalAttacks',
                'Crypto-Fraud': 'scamLibraryExt.cat.cryptoFraud',
                'Identity-Crimes': 'scamLibraryExt.cat.identityCrimes'
              }[category] || '', category.replace('-', ' '))}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t(`scams.${scam.id}.name`, scam.name)}
          </h1>
          
          <p className="text-base text-slate-655 dark:text-slate-400 leading-relaxed">
            {t(`scams.${scam.id}.description`, scam.description)}
          </p>
        </div>

        {/* Common Indicators */}
        <div className="rounded-2xl p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('scamLibrary.commonIndicators', 'Common Indicators')}</h2>
          </div>
          <ul className="space-y-3">
            {scam.commonIndicators.map((indicator, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                {t(`scams.${scam.id}.indicators.${index}`, indicator)}
              </li>
            ))}
          </ul>
        </div>

        {/* Prevention Tips */}
        <div className="rounded-2xl p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-cyan-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('scamLibrary.preventionTips', 'Prevention Tips')}</h2>
          </div>
          <ul className="space-y-3">
            {scam.preventionTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                {t(`scams.${scam.id}.preventionTips.${index}`, tip)}
              </li>
            ))}
          </ul>
        </div>

        {/* Examples (if available) */}
        {scam.examples && scam.examples.length > 0 && (
          <div className="rounded-2xl p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('scamLibrary.realWorldExamples', 'Real-World Examples')}</h2>
            </div>
            <div className="space-y-3">
              {scam.examples.map((example, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-50 border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">"{t(`scams.${scam.id}.examples.${index}`, example)}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Report CTA */}
        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, rgba(14,116,144,0.18) 100%)', border: '1px solid rgba(34,211,238,0.18)' }}>
          <div>
            <div className="font-bold text-base text-white mb-1">{t('scamLibrary.victimTitle', 'Victim of this scam?')}</div>
            <p className="text-sm text-slate-455">{t('scamLibrary.victimDesc', 'Report immediately to help protect others.')}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:1930"
              className="px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#b91c1c,#ef4444)' }}>
              {t('common.callHelpline', '📞 Call 1930')}
            </a>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', color: '#22d3ee' }}>
              {t('common.reportOnline', 'Report Online')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
