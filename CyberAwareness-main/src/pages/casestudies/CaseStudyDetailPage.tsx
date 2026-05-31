import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/casestudies/caseStudies';
import { getRelatedCaseStudies } from '../../utils/caseStudyUtils';
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

function getCategoryLabel(category: string) {
  return CATEGORY_META[category as CaseStudyCategory]?.label ?? String(category).replace(/_/g, ' ');
}

function getSeverityLabel(severity: string) {
  return SEVERITY_META[severity as CaseStudySeverity]?.label ?? String(severity).toUpperCase();
}

function getLawPagePath(law: { name?: string; code?: string }) {
  const name = law.name?.toLowerCase() ?? '';
  const code = law.code?.toUpperCase() ?? '';

  if (code.includes('IPC') || name.includes('ipc')) return '/laws/ipc';
  if (code.includes('BNS') || name.includes('bns') || name.includes('bharatiya nyaya sanhita')) return '/laws/bns';
  if (
    code.includes('IT ACT') ||
    name.includes('it act') ||
    name.includes('information technology') ||
    /\b66[A-Z]?\b/.test(code) ||
    /\b67\b/.test(code) ||
    /\b69\b/.test(code) ||
    /\b72\b/.test(code) ||
    /\b77\b/.test(code)
  )
    return '/laws/it-act';
  if (name.includes('rights')) return '/laws/rights';
  if (name.includes('awareness')) return '/laws/awareness';
  if (name.includes('penalt') || code.includes('PENALTY')) return '/laws/penalties';

  return undefined;
}

export default function CaseStudyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = useMemo(() => CASE_STUDIES.find((item) => item.id === id), [id]);
  const related = useMemo(
    () => (caseStudy ? getRelatedCaseStudies(caseStudy.id, 4) : []),
    [caseStudy]
  );

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Case Study not found</p>
            <h1 className="mt-6 text-4xl font-semibold text-white">No incident found for this identifier.</h1>
            <p className="mt-4 text-slate-400">Check the link or return to the case studies library to choose another incident.</p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/case-studies"
                className="rounded-full border border-cyan-400 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/15"
              >
                Return to Case Studies
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Case Study</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{caseStudy.title}</h1>
              <p className="mt-4 text-slate-300 leading-7">{caseStudy.summary}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${CATEGORY_META[caseStudy.category as CaseStudyCategory]?.accent}`}>
                  {getCategoryLabel(String(caseStudy.category))}
                </span>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${SEVERITY_META[caseStudy.severity as CaseStudySeverity]?.accent}`}>
                  {getSeverityLabel(String(caseStudy.severity))}
                </span>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link
                to="/reporting"
                className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
              >
                Report Incident
              </Link>
              <Link
                to="/laws"
                className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                View Laws
              </Link>
              <Link
                to="/cyber-crime-locator"
                className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Find Cyber Cell
              </Link>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-8">
              <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
                <h2 className="text-xl font-semibold text-white">Scenario</h2>
                <p className="mt-4 text-slate-300 leading-7">{caseStudy.scenario}</p>
              </section>

              <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">Timeline</h2>
                    <p className="mt-1 text-sm text-slate-400">Review the incident chronology and attack progression.</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {caseStudy.timeline.map((event, index) => (
                    <div key={index} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">{event.time ?? `Step ${index + 1}`}</p>
                        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                          Timeline event
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-white">{event.description}</h3>
                      {event.details ? <p className="mt-2 text-slate-400 leading-7">{event.details}</p> : null}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white">Reporting steps</h2>
                </div>
                <div className="mt-6 space-y-4">
                  {caseStudy.reportingSteps.map((step, index) => (
                    <div key={index} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Step {index + 1}</span>
                        {step.expectedOutcome ? <span className="text-xs uppercase tracking-[0.25em] text-slate-500">{step.expectedOutcome}</span> : null}
                      </div>
                      <p className="mt-3 text-lg font-semibold text-white">{step.step}</p>
                      {step.notes ? <p className="mt-2 text-slate-400 leading-7">{step.notes}</p> : null}
                      {step.contact ? (
                        <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
                          {step.contact.agency ? <p><strong>Agency:</strong> {step.contact.agency}</p> : null}
                          {step.contact.phone ? <p><strong>Phone:</strong> {step.contact.phone}</p> : null}
                          {step.contact.email ? <p><strong>Email:</strong> {step.contact.email}</p> : null}
                          {step.contact.url ? <p><strong>URL:</strong> {step.contact.url}</p> : null}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
                <h2 className="text-xl font-semibold text-white">Warning signs</h2>
                <p className="mt-2 text-sm text-slate-400">Common indicators that appear in this incident.</p>
                <div className="mt-6 space-y-4">
                  {caseStudy.warningSigns.map((sign, index) => (
                    <div key={index} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
                      <p className="text-sm font-semibold text-white">{sign.sign}</p>
                      {sign.details ? <p className="mt-2 text-slate-400 leading-6">{sign.details}</p> : null}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
                <h2 className="text-xl font-semibold text-white">Prevention tips</h2>
                <p className="mt-2 text-sm text-slate-400">Actions to reduce the risk of similar incidents.</p>
                <ul className="mt-6 space-y-3">
                  {caseStudy.preventionTips.map((tip, index) => (
                    <li key={index} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4 text-slate-300">
                      <p className="text-sm leading-6">{tip.tip}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
                <h2 className="text-xl font-semibold text-white">Applicable laws</h2>
                <p className="mt-2 text-sm text-slate-400">Laws and sections relevant to this case.</p>
                <div className="mt-6 space-y-4">
                  {caseStudy.applicableLaws.map((law, index) => {
                    const lawPath = getLawPagePath(law);
                    const cardClass =
                      'group rounded-3xl border border-slate-800 bg-slate-900/90 p-4 transition hover:border-cyan-400/40 hover:bg-slate-950';

                    return lawPath ? (
                      <Link key={index} to={lawPath} className={`${cardClass} block`}>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white group-hover:text-cyan-200">{law.name}</p>
                          {law.code ? <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">{law.code}</span> : null}
                        </div>
                        {law.jurisdiction ? <p className="mt-2 text-slate-500 text-sm">{law.jurisdiction}</p> : null}
                        {law.description ? <p className="mt-3 text-slate-400 leading-6">{law.description}</p> : null}
                        <span className="mt-3 inline-flex text-sm font-semibold text-cyan-300 group-hover:text-cyan-100">View section</span>
                      </Link>
                    ) : law.link ? (
                      <a
                        key={index}
                        href={law.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`${cardClass} block`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white">{law.name}</p>
                          {law.code ? <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">{law.code}</span> : null}
                        </div>
                        {law.jurisdiction ? <p className="mt-2 text-slate-500 text-sm">{law.jurisdiction}</p> : null}
                        {law.description ? <p className="mt-3 text-slate-400 leading-6">{law.description}</p> : null}
                        <span className="mt-3 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-100">View source</span>
                      </a>
                    ) : (
                      <div key={index} className={cardClass}>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white">{law.name}</p>
                          {law.code ? <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">{law.code}</span> : null}
                        </div>
                        {law.jurisdiction ? <p className="mt-2 text-slate-500 text-sm">{law.jurisdiction}</p> : null}
                        {law.description ? <p className="mt-3 text-slate-400 leading-6">{law.description}</p> : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            </aside>
          </div>

          <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-cyan-500/5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Related case studies</h2>
                <p className="mt-1 text-sm text-slate-400">Explore similar incidents based on category and tags.</p>
              </div>
              <Link
                to="/case-studies"
                className="rounded-full border border-slate-700 bg-slate-950/90 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Back to library
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.length > 0 ? (
                related.map((item) => (
                  <Link
                    key={item.id}
                    to={`/case-studies/${item.id}`}
                    className="group rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-5 transition hover:border-cyan-400/40 hover:bg-slate-950"
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">{getCategoryLabel(String(item.category))}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-cyan-200">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] ${SEVERITY_META[item.severity as CaseStudySeverity]?.accent}`}>
                        {getSeverityLabel(String(item.severity))}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-6 text-slate-400">No related case studies available.</div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
