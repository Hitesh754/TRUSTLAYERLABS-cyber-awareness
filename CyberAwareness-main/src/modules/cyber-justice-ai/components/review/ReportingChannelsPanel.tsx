import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import { getAuthorityRecommendations } from '../../authorityRecommendationEngine';
// Note: no direct React import required with automatic JSX runtime

export function ReportingChannelsPanel() {
  const { caseFile } = useCyberJusticeStore();
  const category = (caseFile.incident.userSelectedCategory ?? caseFile.incident.category ?? (caseFile.laws.classification?.primaryCategory as any)) || null;
  const rec = getAuthorityRecommendations(category);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <h3 className="font-semibold">Official reporting channels</h3>
      </div>

      <div className="space-y-2 text-sm text-slate-300">
        <p>Primary channels to report your incident (choose as applicable):</p>
        <ul className="mt-2 space-y-2">
          {rec.primary.map((c) => (
            <li key={c.name} className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2">
              <div>
                <div className="font-semibold text-white">{c.name}</div>
                {c.endpoint && (
                  <a className="text-xs text-cyan-300" href={c.endpoint} target="_blank" rel="noreferrer">
                    {c.endpoint}
                  </a>
                )}
                {c.notes && <div className="text-xs text-slate-400">{c.notes}</div>}
              </div>
              <div className="text-xs text-slate-500">{c.type.toUpperCase()}</div>
            </li>
          ))}
        </ul>

        {rec.secondary.length > 0 && (
          <>
            <p className="mt-3">Secondary channels (advisory):</p>
            <ul className="mt-2 space-y-2">
              {rec.secondary.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2">
                  <div>
                    <div className="font-semibold text-white">{c.name}</div>
                    {c.endpoint && (
                      <a className="text-xs text-cyan-300" href={c.endpoint} target="_blank" rel="noreferrer">
                        {c.endpoint}
                      </a>
                    )}
                    {c.notes && <div className="text-xs text-slate-400">{c.notes}</div>}
                  </div>
                  <div className="text-xs text-slate-500">{c.type.toUpperCase()}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
