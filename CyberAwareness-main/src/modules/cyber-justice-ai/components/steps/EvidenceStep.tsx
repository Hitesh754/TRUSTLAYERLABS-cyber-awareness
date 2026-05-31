import { FormEvent, useMemo, useState } from 'react';
import { CheckCircle2, FileUp, ShieldCheck, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import type { EvidenceMetadataSource, EvidenceType } from '../../types/evidenceVault.types';

function extractedCount(values: string[]) {
  return values.filter(Boolean).length;
}

export function EvidenceStep() {
  const { t } = useTranslation();
  const { caseFile, addEvidenceVaultItem, markEvidenceVerified, removeEvidenceVaultItem } = useCyberJusticeStore();
  const [type, setType] = useState<EvidenceType>('SCREENSHOT');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [sourceText, setSourceText] = useState('');

  const evidenceTypes: Array<{ value: EvidenceType; label: string; source: EvidenceMetadataSource }> = [
    { value: 'SCREENSHOT', label: t('cyberJustice.ui.evidence.types.SCREENSHOT'), source: 'OCR_TEXT' },
    { value: 'PDF', label: t('cyberJustice.ui.evidence.types.PDF'), source: 'PDF_TEXT' },
    { value: 'AUDIO', label: t('cyberJustice.ui.evidence.types.AUDIO'), source: 'AUDIO_TRANSCRIPT' },
    { value: 'VIDEO', label: t('cyberJustice.ui.evidence.types.VIDEO'), source: 'VIDEO_TRANSCRIPT' },
    { value: 'CHAT', label: t('cyberJustice.ui.evidence.types.CHAT'), source: 'CHAT_EXPORT' },
    { value: 'EMAIL', label: t('cyberJustice.ui.evidence.types.EMAIL'), source: 'EMAIL_BODY' },
    { value: 'BANK_STATEMENT', label: t('cyberJustice.ui.evidence.types.BANK_STATEMENT'), source: 'BANK_STATEMENT_TEXT' },
  ];

  const metadataSource = evidenceTypes.find((item) => item.value === type)?.source ?? 'MANUAL_TEXT';
  const totalExtracted = useMemo(() => {
    const entities = caseFile.evidence.extractedEntities;
    return (
      extractedCount(entities.upiIds) +
      extractedCount(entities.phoneNumbers) +
      extractedCount(entities.emails) +
      extractedCount(entities.urls) +
      extractedCount(entities.ifscCodes) +
      extractedCount(entities.utrIds) +
      extractedCount(entities.walletAddresses)
    );
  }, [caseFile.evidence.extractedEntities]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;

    addEvidenceVaultItem({
      type,
      name: name.trim(),
      description: description.trim(),
      timestamp: timestamp || new Date().toISOString(),
      sourceText,
      metadataSource,
    });
    setName('');
    setDescription('');
    setTimestamp('');
    setSourceText('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-cyan-400/10 p-3 text-cyan-200">
          <FileUp className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">{t('cyberJustice.ui.evidence.title')}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {t('cyberJustice.ui.evidence.description')}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 lg:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t('cyberJustice.ui.evidence.label.type')}</label>
          <select
            value={type}
            onChange={(event) => setType(event.target.value as EvidenceType)}
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
          >
            {evidenceTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <TextField label={t('cyberJustice.ui.evidence.name.label')} value={name} onChange={setName} placeholder={t('cyberJustice.ui.evidence.name.placeholder')} />
        <TextField label={t('cyberJustice.ui.evidence.timestamp.label')} value={timestamp} onChange={setTimestamp} placeholder={t('cyberJustice.ui.evidence.timestamp.placeholder')} />
        <TextField label={t('cyberJustice.ui.evidence.description.label')} value={description} onChange={setDescription} placeholder={t('cyberJustice.ui.evidence.description.placeholder')} />
        <div className="lg:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t('cyberJustice.ui.evidence.extractableLabel')}</label>
          <textarea
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
            rows={5}
            placeholder={t('cyberJustice.ui.evidence.extractable.placeholder') }
            className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
          />
        </div>
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300"
          >
            <ShieldCheck className="h-4 w-4" />
            {t('cyberJustice.ui.evidence.addButton')}
          </button>
        </div>
      </form>

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label={t('cyberJustice.ui.evidence.stat.vaultItems')} value={caseFile.evidence.vaultItems.length.toString()} />
        <Stat label={t('cyberJustice.ui.evidence.stat.verified')} value={caseFile.evidence.vaultItems.filter((item) => item.verified).length.toString()} />
        <Stat label={t('cyberJustice.ui.evidence.stat.extracted')} value={totalExtracted.toString()} />
      </div>

      <div className="space-y-3">
        {caseFile.evidence.vaultItems.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{item.type.replace(/_/g, ' ')}</p>
                <h3 className="mt-1 font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.description || t('cyberJustice.ui.evidence.noDescription')}</p>
                <p className="mt-2 text-xs text-slate-500">{item.timestamp}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => markEvidenceVerified(item.id, !item.verified)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold ${
                    item.verified
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
                      : 'border-slate-700 text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {item.verified ? t('cyberJustice.ui.evidence.verified') : t('cyberJustice.ui.evidence.markVerified')}
                </button>
                <button
                  type="button"
                  onClick={() => removeEvidenceVaultItem(item.id)}
                  className="rounded-lg border border-slate-700 px-3 py-2 text-slate-400 transition hover:border-rose-400/40 hover:text-rose-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {!caseFile.evidence.vaultItems.length && (
          <div className="rounded-xl border border-dashed border-slate-700 p-6 text-center text-sm text-slate-500">
            {t('cyberJustice.ui.evidence.noEvidence')}
          </div>
        )}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-cyan-200">{value}</p>
    </div>
  );
}
