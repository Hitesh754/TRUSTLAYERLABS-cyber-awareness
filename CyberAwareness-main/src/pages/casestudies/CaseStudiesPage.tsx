import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/casestudies/caseStudies';
import { CaseStudyCategory, CaseStudySeverity } from '../../data/casestudies/types';

const CATEGORY_META: Record<CaseStudyCategory, { label: string; accent: string }> = {
  [CaseStudyCategory.PHISHING]: { label: 'Phishing', accent: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  [CaseStudyCategory.SOCIAL_ENGINEERING]: { label: 'Social Engineering', accent: 'bg-sky-500/10 text-sky-300 border-sky-500/20' },
  [CaseStudyCategory.DEEPFAKE]: { label: 'Deepfake', accent: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  [CaseStudyCategory.UPI_FRAUD]: { label: 'UPI Fraud', accent: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
  [CaseStudyCategory.MALWARE]: { label: 'Malware', accent: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
  [CaseStudyCategory.SCAM]: { label: 'Scam', accent: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20' },
  [CaseStudyCategory.IDENTITY_THEFT]: { label: 'Identity Theft', accent: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
  [CaseStudyCategory.OTHER]: { label: 'Other', accent: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
};

const SEVERITY_META: Record<CaseStudySeverity, { label: string; accent: string }> = {
  [CaseStudySeverity.LOW]: { label: 'Low', accent: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  [CaseStudySeverity.MEDIUM]: { label: 'Medium', accent: 'bg-sky-500/10 text-sky-300 border-sky-500/20' },
  [CaseStudySeverity.HIGH]: { label: 'High', accent: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
  [CaseStudySeverity.CRITICAL]: { label: 'Critical', accent: 'bg-rose-500/10 text-rose-300 border-rose-500/20' },
};

const CATEGORY_ORDER: CaseStudyCategory[] = [
  CaseStudyCategory.PHISHING,
  CaseStudyCategory.SOCIAL_ENGINEERING,
  CaseStudyCategory.DEEPFAKE,
  CaseStudyCategory.UPI_FRAUD,
  CaseStudyCategory.MALWARE,
  CaseStudyCategory.SCAM,
  CaseStudyCategory.IDENTITY_THEFT,
  CaseStudyCategory.OTHER,
];

const SEVERITY_ORDER: CaseStudySeverity[] = [
  CaseStudySeverity.CRITICAL,
  CaseStudySeverity.HIGH,
  CaseStudySeverity.MEDIUM,
  CaseStudySeverity.LOW,
];

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function getCategoryLabel(category: string) {
  return CATEGORY_META[category as CaseStudyCategory]?.label ?? String(category).replace(/_/g, ' ');
}

function getSeverityLabel(severity: string) {
  return SEVERITY_META[severity as CaseStudySeverity]?.label ?? String(severity).toUpperCase();
}

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | CaseStudyCategory>('all');
  const [activeSeverity, setActiveSeverity] = useState<'all' | CaseStudySeverity>('all');

  const normalizedSearch = useMemo(() => normalize(searchTerm), [searchTerm]);

  const filteredItems = useMemo(() => {
    return CASE_STUDIES.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSeverity = activeSeverity === 'all' || item.severity === activeSeverity;
      const matchesSearch =
        !normalizedSearch ||
        normalize(item.title).includes(normalizedSearch) ||
        normalize(item.summary).includes(normalizedSearch) ||
        normalize(item.scenario).includes(normalizedSearch) ||
        item.tags.some((tag) => normalize(tag).includes(normalizedSearch));

      return matchesCategory && matchesSeverity && matchesSearch;
    });
  }, [activeCategory, activeSeverity, normalizedSearch]);

  const categoryCounts = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        count: CASE_STUDIES.filter((item) => item.category === category).length,
      })),
    []
  );

  const severityCounts = useMemo(
    () =>
      SEVERITY_ORDER.map((severity) => ({
        severity,
        count: CASE_STUDIES.filter((item) => item.severity === severity).length,
      })),
    []
  );

  const totalCases = CASE_STUDIES.length;
  const filteredCount = filteredItems.length;
  const activeCategoryLabel = activeCategory === 'all' ? 'All categories' : getCategoryLabel(activeCategory);
  const activeSeverityLabel = activeSeverity === 'all' ? 'All severities' : getSeverityLabel(activeSeverity);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent" />
          <div className="grid gap-8 xl:grid-cols-[1.3fr_0.9fr]">
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Case Studies</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Unified cyber incident reports for awareness, training, and threat response.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Search, filter, and compare real attack scenarios from the TrustLayerLabs dataset. This command center helps you surface the highest-risk cases across phishing, malware, UPI fraud,
                deepfake deception, social engineering, identity theft, and general scam patterns.
              </p>
            </div>

            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-[0_20px_80px_-40px_rgba(6,182,212,0.4)]">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Total cases</p>
                <p className="mt-4 text-4xl font-semibold text-white">{totalCases}</p>
                <p className="mt-2 text-sm text-slate-400">Comprehensive cases across the TrustLayerLabs repository.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-[0_20px_80px_-40px_rgba(6,182,212,0.2)]">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Active view</p>
                <p className="mt-4 text-4xl font-semibold text-white">{filteredCount}</p>
                <div className="mt-3 text-sm text-slate-400">
                  Showing cases for <span className="text-slate-100">{activeCategoryLabel}</span> &mdash; <span className="text-slate-100">{activeSeverityLabel}</span>.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {categoryCounts.map((item) => (
              <div key={item.category} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{getCategoryLabel(item.category)}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.count}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${Math.round((item.count / totalCases) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
              <label htmlFor="case-search" className="block text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                Search cases
              </label>
              <div className="mt-4 flex items-center gap-3">
                <input
                  id="case-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by title, summary, scenario, or tag"
                  className="min-w-0 flex-1 rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Category filters</h2>
                  <p className="mt-1 text-sm text-slate-400">Focus the case library by threat type.</p>
                </div>
                <button
                  type="button"
                  className="text-sm font-semibold text-cyan-300 hover:text-white"
                  onClick={() => setActiveCategory('all')}
                >
                  Reset
                </button>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`rounded-3xl border px-3 py-2 text-left text-sm font-semibold transition ${
                    activeCategory === 'all'
                      ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200'
                      : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:text-white'
                  }`}
                >
                  All categories
                </button>
                {CATEGORY_ORDER.map((category) => {
                  const meta = CATEGORY_META[category];
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-3xl border px-3 py-2 text-left text-sm font-semibold transition ${
                        activeCategory === category
                          ? `border-cyan-400 bg-cyan-500/10 text-cyan-200`
                          : `border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:text-white`
                      }`}
                    >
                      <span>{meta.label}</span>
                      <span className="ml-2 text-xs text-slate-500">({categoryCounts.find((item) => item.category === category)?.count ?? 0})</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Severity filters</h2>
                  <p className="mt-1 text-sm text-slate-400">Surface low-risk or high-risk case incidents quickly.</p>
                </div>
                <button
                  type="button"
                  className="text-sm font-semibold text-cyan-300 hover:text-white"
                  onClick={() => setActiveSeverity('all')}
                >
                  Reset
                </button>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setActiveSeverity('all')}
                  className={`rounded-3xl border px-3 py-2 text-left text-sm font-semibold transition ${
                    activeSeverity === 'all'
                      ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200'
                      : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:text-white'
                  }`}
                >
                  All severities
                </button>
                {SEVERITY_ORDER.map((severity) => {
                  const meta = SEVERITY_META[severity];
                  return (
                    <button
                      key={severity}
                      type="button"
                      onClick={() => setActiveSeverity(severity)}
                      className={`rounded-3xl border px-3 py-2 text-left text-sm font-semibold transition ${
                        activeSeverity === severity
                          ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-400 hover:text-white'
                      }`}
                    >
                      <span>{meta.label}</span>
                      <span className="ml-2 text-xs text-slate-500">({severityCounts.find((item) => item.severity === severity)?.count ?? 0})</span>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
              <h2 className="text-lg font-semibold text-white">Severity distribution</h2>
              <p className="mt-2 text-sm text-slate-400">Track how many cases fall into each risk tier.</p>
              <div className="mt-6 space-y-4">
                {severityCounts.map((item) => {
                  const meta = SEVERITY_META[item.severity];
                  const percentage = totalCases ? Math.round((item.count / totalCases) * 100) : 0;
                  return (
                    <div key={item.severity}>
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{meta.label}</span>
                        <span className="text-slate-500">{item.count}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-800">
                        <div className={`h-full rounded-full ${meta.accent.split(' ')[0]}`} style={{ width: `${percentage}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
              <h2 className="text-lg font-semibold text-white">Category count</h2>
              <p className="mt-2 text-sm text-slate-400">Review how many cases are available for each threat class.</p>
              <div className="mt-5 space-y-3">
                {categoryCounts.map((item) => {
                  const meta = CATEGORY_META[item.category];
                  return (
                    <div key={item.category} className="flex items-center justify-between gap-3 text-sm text-slate-300">
                      <span>{meta.label}</span>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Case study library</h2>
              <p className="mt-1 text-sm text-slate-400">Browse well-structured incident reports. Use search and filters to narrow the dataset instantly.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm text-slate-300">
              {filteredCount} / {totalCases} matched
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/case-studies/${item.id}`}
                  className="group block rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-900"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${CATEGORY_META[item.category as CaseStudyCategory]?.accent ?? 'border-slate-700 bg-slate-800 text-slate-300'}`}>
                        {getCategoryLabel(String(item.category))}
                      </span>
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${SEVERITY_META[item.severity as CaseStudySeverity]?.accent ?? 'border-slate-700 bg-slate-800 text-slate-300'}`}>
                        {getSeverityLabel(String(item.severity))}
                      </span>
                    </div>
                    <div className="text-right text-xs uppercase tracking-[0.25em] text-slate-500">
                      {item.sourceType?.replace(/_/g, ' ') ?? 'Unknown source'}
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-cyan-200">{item.title}</h3>
                  <p className="mt-3 text-slate-300 leading-7">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-slate-700 bg-slate-950/90 p-10 text-center text-slate-400">
                No case studies match your current search and filters. Clear a filter or broaden your search.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
