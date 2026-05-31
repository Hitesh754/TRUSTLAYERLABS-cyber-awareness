import { Sparkles } from 'lucide-react';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';

export function TimelineSuggestionPanel() {
  const { timelineSuggestions, generateTimelineSuggestions, approveTimelineSuggestion, rejectTimelineSuggestion } = useCyberJusticeStore();
  const pending = timelineSuggestions.filter((suggestion) => suggestion.status === 'PENDING_APPROVAL' || suggestion.status === 'EDITED');

  return (
    <section className="rounded-xl border border-cyan-500/10 bg-slate-900 p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-cyan-200">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-semibold">Timeline suggestions</h3>
        </div>
        <button
          type="button"
          onClick={generateTimelineSuggestions}
          className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100"
        >
          Refresh suggestions
        </button>
      </div>
      <div className="space-y-3">
        {pending.map((suggestion) => (
          <div key={suggestion.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{suggestion.source.replace(/_/g, ' ')}</p>
            <p className="mt-1 font-semibold text-white">{suggestion.title}</p>
            <p className="mt-1 text-sm text-slate-400">{suggestion.description}</p>
            <p className="mt-2 text-xs text-slate-500">
              Confidence {(suggestion.confidenceScore * 100).toFixed(0)}% · {suggestion.reason}
            </p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => approveTimelineSuggestion(suggestion.id)}
                className="rounded-lg bg-emerald-400 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-950"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => rejectTimelineSuggestion(suggestion.id)}
                className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-300"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
        {!pending.length && <p className="text-sm text-slate-500">No pending timeline suggestions.</p>}
      </div>
    </section>
  );
}
