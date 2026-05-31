import { Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import type { CrimeCategory } from '../../../../data/legalProfiles/types';

const categories: CrimeCategory[] = [
  'UPI_FRAUD',
  'OTP_FRAUD',
  'PHISHING',
  'INVESTMENT_SCAM',
  'CRYPTO_FRAUD',
  'DEEPFAKE_IMPERSONATION',
  'IDENTITY_THEFT',
  'QR_SCAM',
  'SIM_SWAP',
  'JOB_SCAM',
  'SEXTORTION',
  'CYBER_STALKING',
  'DATA_BREACH',
  'HACKING_UNAUTHORIZED_ACCESS',
  'OTHER',
];

export function AnalysisStep() {
  const { t } = useTranslation();
  const { caseFile, overrideCategory } = useCyberJusticeStore();
  const classification = caseFile.laws.classification;
  const mapping = caseFile.laws.mapping;

  if (!classification || !mapping) {
    return (
      <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-5 text-amber-100">
        {t('cyberJustice.ui.analysis.noNarrative')}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-cyan-400/10 p-3 text-cyan-200">
          <Scale className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">{t('cyberJustice.ui.analysis.title')}</h2>
          <p className="text-sm text-slate-400">{t('cyberJustice.ui.analysis.description')}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t('cyberJustice.ui.analysis.detectedCategory')}</p>
          <p className="mt-2 text-xl font-bold text-cyan-200">{classification.primaryCategory.replace(/_/g, ' ')}</p>
          <p className="mt-2 text-sm text-slate-300">{t('cyberJustice.ui.analysis.confidence')}: {(classification.confidence * 100).toFixed(1)}%</p>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t('cyberJustice.ui.analysis.manualOverride')}</label>
          <select
            value={classification.primaryCategory}
            onChange={(event) => overrideCategory(event.target.value as CrimeCategory)}
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {mapping.lawMapping.bnsSections.length > 0 && (
            <LawGroup title="BNS" tone="text-emerald-300" items={mapping.lawMapping.bnsSections} />
          )}
          {mapping.lawMapping.itActSections.length > 0 && (
            <LawGroup title="IT Act" tone="text-blue-300" items={mapping.lawMapping.itActSections} />
          )}
          {mapping.lawMapping.ipcSections.length > 0 && (
            <LawGroup title="IPC" tone="text-violet-300" items={mapping.lawMapping.ipcSections} />
          )}
        </div>
      </div>
    </div>
  );
}

function LawGroup({
  title,
  tone,
  items,
}: {
  title: string;
  tone: string;
  items: Array<{ id: string; act: string; section: string; title: string }>;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className={`font-semibold ${tone}`}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((law) => (
          <li key={law.id}>
            <strong>
              {law.act} {law.section}
            </strong>
            : {law.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
