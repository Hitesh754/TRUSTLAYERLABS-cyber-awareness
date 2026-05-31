// Note: no direct React import required with automatic JSX runtime
import { Globe, Phone } from 'lucide-react';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import { getAuthorityRecommendations, type ReportingChannel } from '../../authorityRecommendationEngine';

export function AuthorityRecommendationPanel() {
  const { caseFile } = useCyberJusticeStore();
  const category = (caseFile.incident.userSelectedCategory ?? caseFile.incident.category ?? (caseFile.laws.classification?.primaryCategory as any)) || null;
  const rec = getAuthorityRecommendations(category);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <Globe className="h-5 w-5" />
        <h3 className="font-semibold">Recommended authorities</h3>
      </div>

      <div className="grid gap-3">
        {rec.primary.map((c: ReportingChannel) => (
          <div key={c.name} className="rounded-lg border border-slate-800 bg-slate-950 p-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{c.name}</p>
              {c.endpoint && (
                <a className="text-xs text-cyan-300" href={c.endpoint} target="_blank" rel="noreferrer">
                  {c.endpoint}
                </a>
              )}
              {c.notes && <p className="text-xs text-slate-400">{c.notes}</p>}
            </div>
            {c.type === 'phone' ? <Phone className="h-5 w-5 text-cyan-300" /> : <Globe className="h-5 w-5 text-cyan-300" />}
          </div>
        ))}
      </div>
    </section>
  );
}
