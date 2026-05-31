import type { ReactNode } from 'react';
import { AlertTriangle, FileText, Scale, ShieldCheck, Vault } from 'lucide-react';
import { InterviewWizard } from './InterviewWizard';
import { useCyberJusticeStore } from '../store/cyberJusticeStore';
import { useTranslation } from 'react-i18next';

function formatCategory(category: string | null | undefined) {
  return category ? category.replace(/_/g, ' ') : 'Not analyzed yet';
}

export default function CyberJusticeChatShell() {
  const { t } = useTranslation();
  const { caseFile } = useCyberJusticeStore();
  const mappedLawCount =
    (caseFile.laws.mapping?.lawMapping.bnsSections.length ?? 0) +
    (caseFile.laws.mapping?.lawMapping.itActSections.length ?? 0) +
    (caseFile.laws.mapping?.lawMapping.ipcSections.length ?? 0);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_34%),linear-gradient(135deg,rgba(14,165,233,0.08),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-14">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              <ShieldCheck className="h-4 w-4" />
              {t('cyberJustice.ui.header.badge')}
            </div>
            <div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                {t('cyberJustice.ui.header.title')}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {t('cyberJustice.ui.header.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <SummaryCard label="Case status" value={caseFile.status} icon={<FileText className="h-5 w-5" />} />
            <SummaryCard label="Category" value={formatCategory(caseFile.incident.category)} icon={<Scale className="h-5 w-5" />} />
            <SummaryCard label="Evidence items" value={caseFile.evidence.vaultItems.length.toString()} icon={<Vault className="h-5 w-5" />} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <InterviewWizard />

        <aside className="space-y-5">
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-300" />
              <div>
                <p className="font-semibold text-amber-100">{t('cyberJustice.ui.emergency.title')}</p>
                <p className="mt-1 text-sm leading-6 text-amber-100/80">
                  {t('cyberJustice.ui.emergency.desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-cyan-500/10 bg-slate-950/80 p-5">
            <div className="mb-4 flex items-center gap-2 text-cyan-200">
              <Scale className="h-5 w-5" />
              <h2 className="font-semibold">{t('cyberJustice.ui.legalOutput.title')}</h2>
            </div>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">{t('cyberJustice.ui.legalOutput.confidence')}</dt>
                <dd className="mt-1 text-white">
                  {caseFile.laws.classification
                    ? `${(caseFile.laws.classification.confidence * 100).toFixed(1)}%`
                    : 'Waiting for narrative'}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Mapped sections</dt>
                <dd className="mt-1 text-white">{mappedLawCount}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Timeline events</dt>
                <dd className="mt-1 text-white">{caseFile.timeline.events.length}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Summary</dt>
                <dd className="mt-1 leading-6 text-slate-300">
                  {caseFile.laws.plainLanguageSummary ?? t('cyberJustice.ui.legalOutput.noAnalysis')}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    </div>
  );
}

function SummaryCard({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div className="rounded-xl border border-cyan-500/15 bg-slate-950/70 p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      <div className="flex items-center gap-2 text-cyan-200">
        {icon}
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
      </div>
      <p className="mt-2 text-xl font-bold text-white">{value}</p>
    </div>
  );
}
