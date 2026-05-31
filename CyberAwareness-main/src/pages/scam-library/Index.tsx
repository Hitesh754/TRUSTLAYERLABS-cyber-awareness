import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Database, Sparkles } from 'lucide-react';
import { scamCategories, scamDatabase, ScamCategory, getScamsByCategory, searchScams } from '../../data/scamDatabase';
import ScamCard from '../../components/scam-library/ScamCard';
import CategoryFilter from '../../components/scam-library/CategoryFilter';
import SearchBar from '../../components/scam-library/SearchBar';

export default function ScamLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<ScamCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScams = useMemo(() => {
    const baseScams = selectedCategory === 'all'
      ? scamDatabase
      : getScamsByCategory(selectedCategory);

    if (!searchQuery.trim()) {
      return baseScams;
    }

    return searchScams(searchQuery).filter((scam) =>
      selectedCategory === 'all' ? true : scam.category === selectedCategory
    );
  }, [selectedCategory, searchQuery]);


  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Link to="/" className="text-xs uppercase tracking-[0.35em] text-slate-400 hover:text-cyan-300 transition-colors">
              ← Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">Scam Intelligence Archive</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-900/70 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> ACTIVE INTEL MODULE
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10 space-y-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_30%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-cyan-500/20 blur-sm" />
          <div className="pointer-events-none absolute inset-x-10 bottom-10 h-px bg-cyan-500/10 blur-sm" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
                <Database className="h-4 w-4" /> SCAM INTELLIGENCE ARCHIVE MODULE
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Scam Intelligence Archive</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  A classified cyber archive for scam threat intelligence, fraud vector mapping, and archive-grade evidence tags. Scan the archive, classify risk, and launch forensic intelligence briefings.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#archive-feed" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition duration-200 hover:bg-cyan-300">
                  Launch Archive
                </a>
                <span className="rounded-full border border-cyan-500/20 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Classified Intelligence Ready
                </span>
              </div>
            </div>
            <div className="space-y-5 rounded-[2rem] border border-cyan-500/10 bg-[#07101f]/90 p-6 text-sm text-slate-300 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/80">INTEL STATUS</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Live</p>
                </div>
                <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">Threat database</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Archive Records</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-300">{scamDatabase.length}</p>
                </div>
                <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Active Vectors</p>
                  <p className="mt-2 text-3xl font-bold text-emerald-300">{getScamsByCategory('Phishing-Social-Engineering').length}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Module Brief</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Threat classification, fraud severity, and intelligence labels are available for every archive entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6 rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-6 shadow-[0_0_45px_rgba(34,211,238,0.08)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">INTEL QUERY</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Search by threat pattern or archive tag</h2>
              </div>
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">{selectedCategory === 'all' ? 'All Scams' : scamCategories[selectedCategory].name}</span>
            </div>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>

          <div className="rounded-[2rem] border border-cyan-500/10 bg-[#07101f]/90 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">THREAT INTEL SUMMARY</p>
            <div className="mt-4 grid gap-4">
              <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Top Risk Category</p>
                <p className="mt-2 font-semibold text-white">{scamCategories['Crypto-Fraud'].name}</p>
              </div>
              <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Most Common Threat</p>
                <p className="mt-2 font-semibold text-white">Phishing & Social Engineering</p>
              </div>
            </div>
          </div>
        </section>

        <section id="archive-feed">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">CLASSIFIED THREAT FEED</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Scam Intelligence Archive Modules</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
              <Shield className="h-4 w-4" /> {filteredScams.length} archive records
            </div>
          </div>

          {filteredScams.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredScams.map((scam) => (
                <ScamCard key={scam.id} scam={scam} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-12 text-center shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              <Shield className="mx-auto mb-4 h-12 w-12 text-slate-500" />
              <h3 className="text-xl font-semibold text-white mb-2">No archive entries match this query</h3>
              <p className="text-sm text-slate-400">Try a different search term or switch categories to reveal additional threat intelligence.</p>
            </div>
          )}
        </section>

        {/* Helpline banner */}
        <div className="rounded-[2rem] border border-cyan-500/10 bg-gradient-to-br from-slate-900/80 to-[#07101f]/90 p-8 shadow-[0_0_65px_rgba(34,211,238,0.08)] backdrop-blur-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">INCIDENT RESPONSE</p>
                <h2 className="mt-3 text-2xl font-bold text-white">🚨 Compromised in this archive?</h2>
                <p className="mt-2 text-base leading-relaxed text-slate-300">
                  Launch immediate containment protocols. Report to national cyber crime authorities and activate emergency response guidance.
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a href="tel:1930" className="inline-flex items-center justify-center rounded-full bg-[#ec5252] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-[#f87171]">
                  📞 Call 1930
                </a>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 transition duration-200 hover:bg-slate-950/90 hover:border-cyan-400/40">
                  Report Online
                </a>
              </div>
            </div>
            <div className="rounded-full border border-cyan-500/20 bg-slate-950/80 px-4 py-2 h-fit text-xs uppercase tracking-[0.35em] text-cyan-200">
              LIVE SUPPORT ACTIVE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}