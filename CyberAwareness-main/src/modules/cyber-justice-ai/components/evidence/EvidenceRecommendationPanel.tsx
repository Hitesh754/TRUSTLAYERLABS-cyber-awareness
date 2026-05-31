import { Lightbulb } from 'lucide-react';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';

export function EvidenceRecommendationPanel() {
  const { evidenceRecommendations } = useCyberJusticeStore();

  return (
    <section className="rounded-xl border border-cyan-500/10 bg-slate-900 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-cyan-200">
          <Lightbulb className="h-5 w-5" />
          <h3 className="font-semibold">Recommended evidence</h3>
        </div>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
          {evidenceRecommendations.completenessScore}% complete
        </span>
      </div>
      <div className="space-y-3">
        {evidenceRecommendations.missingEvidence.map((item) => (
          <div key={item.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-300">{item.priority}</p>
                <p className="mt-1 font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                <p className="mt-2 text-xs text-slate-500">{item.reason}</p>
              </div>
              <span className="text-xs text-cyan-200">{item.satisfiedBy.map((type) => type.replace(/_/g, ' ')).join(' / ')}</span>
            </div>
          </div>
        ))}
        {!evidenceRecommendations.missingEvidence.length && (
          <p className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
            Required evidence recommendations are satisfied for the current category.
          </p>
        )}
      </div>
    </section>
  );
}
