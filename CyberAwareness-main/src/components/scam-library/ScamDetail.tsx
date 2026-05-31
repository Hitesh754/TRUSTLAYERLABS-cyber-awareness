import { ScamType, scamCategories } from '../../data/scamDatabase';
import { Shield, AlertTriangle, CheckCircle, ArrowLeft, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchCaseStudies } from '../../utils/caseStudyUtils';
import type { CaseStudy } from '../../data/casestudies/types';

interface ScamDetailProps {
  scam: ScamType;
}

const severityColors = {
  low: { bg: 'rgba(74,222,128,0.12)', color: '#4ade80', border: 'rgba(74,222,128,0.24)' },
  medium: { bg: 'rgba(250,204,21,0.12)', color: '#facc15', border: 'rgba(250,204,21,0.24)' },
  high: { bg: 'rgba(249,115,22,0.12)', color: '#f97316', border: 'rgba(249,115,22,0.24)' },
  critical: { bg: 'rgba(239,68,68,0.12)', color: '#ef4444', border: 'rgba(239,68,68,0.24)' }
};

function normalizeScamText(value: string) {
  return value.trim().toLowerCase();
}

function getRelatedCaseStudies(scam: ScamType): CaseStudy[] {
  const queries = [scam.name, scam.category.replace(/-/g, ' '), scam.description];
  const uniqueMatches = new Map<string, CaseStudy>();

  for (const query of queries) {
    searchCaseStudies(query).forEach((item) => {
      if (!uniqueMatches.has(item.id)) {
        uniqueMatches.set(item.id, item);
      }
    });
  }

  return Array.from(uniqueMatches.values()).slice(0, 3);
}

function getApplicableLawLinks(scam: ScamType) {
  const normalizedCategory = normalizeScamText(scam.category);
  const links = new Map<string, string>();

  if (normalizedCategory.includes('financial') || normalizedCategory.includes('crypto')) {
    links.set('IT Act', '/laws/it-act');
    links.set('IPC', '/laws/ipc');
    links.set('Digital Rights', '/laws/rights');
  } else if (normalizedCategory.includes('phishing') || normalizedCategory.includes('social')) {
    links.set('IT Act', '/laws/it-act');
    links.set('IPC', '/laws/ipc');
    links.set('Rights & Awareness', '/laws/rights');
  } else if (normalizedCategory.includes('technical')) {
    links.set('IT Act', '/laws/it-act');
    links.set('Cyber Awareness', '/laws/awareness');
  } else if (normalizedCategory.includes('identity')) {
    links.set('IPC', '/laws/ipc');
    links.set('Rights', '/laws/rights');
  } else {
    links.set('Laws overview', '/laws');
  }

  return Array.from(links.entries()).map(([label, to]) => ({ label, to }));
}

export default function ScamDetail({ scam }: ScamDetailProps) {
  const severity = severityColors[scam.severity];
  const categoryInfo = scamCategories[scam.category];
  const exampleCount = scam.examples?.length ?? 0;
  const relatedCaseStudies = getRelatedCaseStudies(scam);
  const applicableLawLinks = getApplicableLawLinks(scam);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,23,42,0.92),_rgba(15,23,42,0.72))]" />
      </div>

      <div className="border-b border-cyan-500/10 bg-slate-950/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Link to="/scam-library" className="text-xs uppercase tracking-[0.35em] text-slate-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="h-3.5 w-3.5 inline-block mr-1.5" /> BACK TO ARCHIVE
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">{scam.name}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-900/70 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
            <Zap className="h-3.5 w-3.5 text-cyan-300" /> INTEL ENTRY
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10 space-y-10">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-8 shadow-[0_0_75px_rgba(34,211,238,0.07)] backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
                <Database className="h-4 w-4" /> SCAM ARCHIVE FILE
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-white">{scam.name}</h1>
                <p className="text-base leading-relaxed text-slate-300">{scam.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div
                  className="rounded-3xl border bg-slate-950/80 p-4"
                  style={{ borderColor: severity.border, backgroundColor: severity.bg }}
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Threat classification</p>
                  <p className="mt-2 font-semibold" style={{ color: severity.color }}>{scam.severity}</p>
                </div>
                <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Risk category</p>
                  <p className="mt-2 flex items-center gap-2 font-semibold text-white">{categoryInfo.icon} {categoryInfo.name}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/90 p-4 text-sm text-slate-300">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Indicators</div>
                  <div className="mt-2 text-2xl font-bold text-cyan-300">{scam.commonIndicators.length}</div>
                </div>
                <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/90 p-4 text-sm text-slate-300">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Archive tags</div>
                  <div className="mt-2 font-semibold text-white">{categoryInfo.name}</div>
                </div>
                <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/90 p-4 text-sm text-slate-300">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Examples</div>
                  <div className="mt-2 text-2xl font-bold text-emerald-300">{exampleCount}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-500/10 bg-[#07101f]/90 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">INTEL SUMMARY</p>
                <p className="mt-3 text-lg font-semibold text-white">Threat archive intelligence briefing</p>
              </div>
              <span className="rounded-full border border-cyan-500/20 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
                ACTIVE
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                <p className="text-sm text-slate-400">Threat posture</p>
                <p className="mt-2 font-semibold text-white">Classified fraud vector with intelligence labels and response guidance.</p>
              </div>
              <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-4">
                <p className="text-sm text-slate-400">Archive operational node</p>
                <p className="mt-2 font-semibold text-white">SCAM-INTEL-ARCHIVE / MODULE 07</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-cyan-300">
                <AlertTriangle className="h-5 w-5" />
                <h2 className="text-lg font-bold text-white">Common Indicators</h2>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {scam.commonIndicators.map((indicator, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{indicator}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-cyan-300">
                <Shield className="h-5 w-5" />
                <h2 className="text-lg font-bold text-white">Prevention Tips</h2>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {scam.preventionTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 text-cyan-300" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-cyan-300">
                <Database className="h-5 w-5" />
                <div>
                  <h2 className="text-lg font-bold text-white">Explore related resources</h2>
                  <p className="text-sm text-slate-400">Jump from this scam to supporting case studies, relevant laws, and response tools.</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                  <p className="text-sm font-semibold text-white">Related case studies</p>
                  <div className="mt-3 space-y-3 text-sm text-slate-300">
                    {relatedCaseStudies.length > 0 ? (
                      relatedCaseStudies.map((caseStudy) => (
                        <Link
                          key={caseStudy.id}
                          to={`/case-studies/${caseStudy.id}`}
                          className="block rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                        >
                          {caseStudy.title}
                        </Link>
                      ))
                    ) : (
                      <p>No direct case study match was found. Browse the full case study library to compare incident types.</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/15"
                    >
                      Browse all case studies
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                  <p className="text-sm font-semibold text-white">Applicable law resources</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {applicableLawLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-400 hover:text-cyan-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {scam.examples && scam.examples.length > 0 && (
              <div className="rounded-[2rem] border border-cyan-500/10 bg-slate-900/80 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-cyan-300">
                  <AlertTriangle className="h-5 w-5" />
                  <h2 className="text-lg font-bold text-white">Real-World Examples</h2>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  {scam.examples.map((example, index) => (
                    <div key={index} className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/90 p-4">
                      <p className="italic">\"{example}\"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[2rem] border border-cyan-500/10 bg-[#07101f]/90 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">REMediation CHANNEL</p>
                  <p className="mt-2 text-base font-semibold text-white">Report and contain the archive anomaly</p>
                </div>
                <span className="rounded-full border border-cyan-500/20 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
                  LIVE SUPPORT
                </span>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <a href="tel:1930" className="inline-flex items-center justify-center rounded-full bg-[#ec5252] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#f87171]">
                  📞 Call 1930
                </a>
                <Link to="/reporting" className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-200 hover:bg-slate-950/90">
                  Open Reporting Center
                </Link>
                <Link to="/cyber-crime-locator" className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-200 hover:bg-slate-950/90">
                  Find Cyber Crime Locator
                </Link>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-200 hover:bg-slate-950/90">
                  Report Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
