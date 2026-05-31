import { Scale } from 'lucide-react';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';

export function LawExplanationPanel() {
  const { lawExplanations } = useCyberJusticeStore();

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <Scale className="h-5 w-5" />
        <h3 className="font-semibold">Law explanations</h3>
      </div>
      <div className="space-y-3">
        {lawExplanations.explanations.map((law) => (
          <details key={law.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <summary className="cursor-pointer font-semibold text-white">
              {law.act} {law.section}: {law.title}
            </summary>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
              <p>
                <span className="font-semibold text-cyan-200">Why applied: </span>
                {law.whyApplied}
              </p>
              <p>
                <span className="font-semibold text-cyan-200">What it means: </span>
                {law.whatItMeans}
              </p>
              <div>
                <p className="font-semibold text-cyan-200">Evidence needed</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {law.evidenceNeeded.map((need) => (
                    <li key={`${law.id}-${need.id}`}>
                      {need.label}: {need.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
        {!lawExplanations.explanations.length && <p className="text-sm text-slate-500">Analyze a case to see law explanations.</p>}
      </div>
    </section>
  );
}
