import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Database } from 'lucide-react';
import { scamDatabase, ScamCategory, getScamsByCategory, searchScams } from '../../data/scamDatabase';
import ScamCard from '../../components/scam-library/ScamCard';
import CategoryFilter from '../../components/scam-library/CategoryFilter';
import SearchBar from '../../components/scam-library/SearchBar';
import { useTranslation } from 'react-i18next';

export default function ScamLibrary() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<ScamCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScams = useMemo(() => {
    let scams = selectedCategory === 'all' 
      ? scamDatabase 
      : getScamsByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      scams = searchScams(searchQuery);
    }
    
    return scams;
  }, [selectedCategory, searchQuery]);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      {/* Top bar */}
      <div className="border-b border-gray-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {t('scamLibrary.backHome')}
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="text-xs text-slate-600 dark:text-slate-400">{t('scamLibrary.breadcrumb')}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Hero */}
        <div className="relative rounded-2xl overflow-hidden px-8 py-16 text-center flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-gray-250 dark:border-slate-800 shadow-sm transition-colors duration-300">
          <div className="absolute -top-16 left-1/4 w-80 h-80 rounded-full pointer-events-none opacity-50 dark:opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)' }} />
          <div className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-50 dark:opacity-100"
            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.09) 0%, transparent 65%)' }} />
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7 uppercase tracking-wider"
              style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}>
              <Database className="w-3.5 h-3.5" /> {t('scamLibrary.badgeText')}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-900 dark:text-white text-center">
              Scam{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p className="text-sm max-w-lg mx-auto mb-9 text-slate-650 dark:text-slate-300 text-center">
              Explore {scamDatabase.length-1}+ crypto scams, cyber crimes, and fraud types with detailed indicators and prevention tips.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="rounded-xl p-4 text-center bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="text-xl font-bold mb-1 text-cyan-600 dark:text-cyan-400">{scamDatabase.length}</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">{t('scamLibrary.totalScams')}</div>
          </div>
          <div className="rounded-xl p-4 text-center bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="text-xl font-bold mb-1 text-orange-600 dark:text-orange-400">{getScamsByCategory('Crypto-Fraud').length}</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">{t('scamLibrary.cryptoFraud')}</div>
          </div>
          <div className="rounded-xl p-4 text-center bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="text-xl font-bold mb-1 text-red-600 dark:text-red-400">{getScamsByCategory('Phishing-Social-Engineering').length}</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">{t('scamLibrary.phishing')}</div>
          </div>
          <div className="rounded-xl p-4 text-center bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="text-xl font-bold mb-1 text-purple-650 dark:text-purple-400">{getScamsByCategory('Technical-Attacks').length}</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">{t('scamLibrary.technical')}</div>
          </div>
          <div className="rounded-xl p-4 text-center bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="text-xl font-bold mb-1 text-pink-650 dark:text-pink-400">{getScamsByCategory('Financial-Fraud').length + getScamsByCategory('Identity-Crimes').length}</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">{t('scamLibrary.other')}</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>

        {/* Results */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-base font-bold text-slate-850 dark:text-slate-200">
              {selectedCategory === 'all' ? t('scamLibrary.allScams') : selectedCategory.replace('-', ' ')}
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.2)' }}>
              {filteredScams.length} {t('scamLibrary.results')}
            </span>
          </div>
          
          {filteredScams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredScams.map((scam) => (
                <ScamCard key={scam.id} scam={scam} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl p-12 text-center bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
              <Shield className="w-12 h-12 text-slate-400 dark:text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white mb-2">{t('scamLibrary.noScamsFound')}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500">{t('scamLibrary.noScamsFoundDesc')}</p>
            </div>
          )}
        </div>

        {/* Helpline banner */}
        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-gray-250 dark:border-slate-800 shadow-sm transition-colors duration-300">
          <div>
            <div className="font-bold text-base text-slate-900 dark:text-white mb-1">{t('scamLibrary.victimTitle')}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t('scamLibrary.victimDesc')}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:1930"
              className="px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#b91c1c,#ef4444)' }}>
              {t('scamLibrary.callHelpline')}
            </a>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 bg-slate-100 dark:bg-white/5 border border-gray-300 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              {t('scamLibrary.reportOnline')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
