import { FormEvent, useMemo, useState } from 'react';
import { CalendarClock, CheckCircle2, Link2, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';

export function TimelineStep() {
  const { t } = useTranslation();
  const {
    caseFile,
    addTimelineEvent,
    confirmTimelineEvent,
    removeTimelineEvent,
    generateTimelineEventsFromConversation,
    generateTimelineEventsFromEntities,
    generateTimelineEventsFromEvidence,
  } = useCyberJusticeStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [linkedEvidenceId, setLinkedEvidenceId] = useState('');

  const sortedEvents = useMemo(
    () => [...caseFile.timeline.events].sort((a, b) => a.timestamp.localeCompare(b.timestamp)),
    [caseFile.timeline.events],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;
    addTimelineEvent({
      title: title.trim(),
      description: description.trim(),
      timestamp: timestamp || new Date().toISOString(),
      source: linkedEvidenceId ? 'UPLOADED_EVIDENCE' : 'MANUAL_ENTRY',
      linkedEvidenceIds: linkedEvidenceId ? [linkedEvidenceId] : [],
      verified: true,
      confidence: 'USER_CONFIRMED',
    });
    setTitle('');
    setDescription('');
    setTimestamp('');
    setLinkedEvidenceId('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-cyan-400/10 p-3 text-cyan-200">
          <CalendarClock className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">{t('cyberJustice.ui.timeline.title')}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {t('cyberJustice.ui.timeline.description')}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <ActionButton onClick={generateTimelineEventsFromConversation} label={t('cyberJustice.ui.timeline.action.fromConversation')} />
        <ActionButton onClick={generateTimelineEventsFromEntities} label={t('cyberJustice.ui.timeline.action.fromEntities')} />
        <ActionButton onClick={generateTimelineEventsFromEvidence} label={t('cyberJustice.ui.timeline.action.fromEvidence')} />
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 lg:grid-cols-2">
        <TextField label={t('cyberJustice.ui.timeline.field.eventTitle')} value={title} onChange={setTitle} placeholder={t('cyberJustice.ui.timeline.field.eventTitlePlaceholder')} />
        <TextField label={t('cyberJustice.ui.timeline.field.timestamp')} value={timestamp} onChange={setTimestamp} placeholder={t('cyberJustice.ui.timeline.field.timestampPlaceholder')} />
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Linked evidence</label>
          <select
            value={linkedEvidenceId}
            onChange={(event) => setLinkedEvidenceId(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
          >
            <option value="">{t('cyberJustice.ui.timeline.option.noLinkedEvidence')}</option>
            {caseFile.evidence.vaultItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <TextField label={t('cyberJustice.ui.timeline.field.description')} value={description} onChange={setDescription} placeholder={t('cyberJustice.ui.timeline.field.descriptionPlaceholder')} />
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300"
          >
            <Plus className="h-4 w-4" />
            {t('cyberJustice.ui.timeline.button.addEvent')}
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {sortedEvents.map((event) => (
          <div key={event.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{event.source.replace(/_/g, ' ')}</p>
                <h3 className="mt-1 font-semibold text-white">{event.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{event.description}</p>
                <p className="mt-2 text-xs text-slate-500">{event.timestamp}</p>
                {event.linkedEvidenceIds.length > 0 && (
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-300">
                    <Link2 className="h-3 w-3" />
                    {event.linkedEvidenceIds.join(', ')}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => confirmTimelineEvent(event.id)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold ${
                    event.verified
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
                      : 'border-slate-700 text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {event.verified ? t('cyberJustice.ui.timeline.confirmed') : t('cyberJustice.ui.timeline.confirm')}
                </button>
                <button
                  type="button"
                  onClick={() => removeTimelineEvent(event.id)}
                  className="rounded-lg border border-slate-700 px-3 py-2 text-slate-400 transition hover:border-rose-400/40 hover:text-rose-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {!sortedEvents.length && (
          <div className="rounded-xl border border-dashed border-slate-700 p-6 text-center text-sm text-slate-500">
            {t('cyberJustice.ui.timeline.noTimelineEvents')}
          </div>
        )}
      </div>
    </div>
  );
}

function ActionButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-300/50"
    >
      {label}
    </button>
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
