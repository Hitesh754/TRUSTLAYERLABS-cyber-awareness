// Note: no direct React import required with automatic JSX runtime
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import { getEmergencyActions } from '../../emergencyActionEngine';
import { getEvidenceRecommendations } from '../../evidence-recommendation/evidenceRecommendationEngine';

export function SubmissionChecklist() {
  const { caseFile } = useCyberJusticeStore();
  const category = (caseFile.incident.userSelectedCategory ?? caseFile.incident.category ?? (caseFile.laws.classification?.primaryCategory as any)) || null;
  const actions = getEmergencyActions(category);
  const evidence = getEvidenceRecommendations({ crimeCategory: category as any, caseData: caseFile as any, uploadedEvidence: caseFile.evidence.vaultItems as any });

  const checklistItems = [
    // emergency actions first
    ...actions.map((a) => ({ id: a.id, title: a.title, required: a.urgent })),
    // missing evidence
    ...evidence.missingEvidence.map((m) => ({ id: m.id, title: m.title, required: m.required })),
  ];

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <h3 className="font-semibold">Submission checklist</h3>
      </div>

      <div className="space-y-2">
        {checklistItems.length === 0 && <div className="text-sm text-slate-400">All set — no immediate checklist items.</div>}
        {checklistItems.map((item) => (
          <label key={item.id} className="flex items-center gap-3 rounded-md border border-slate-800 bg-slate-950 px-3 py-2">
            <input type="checkbox" disabled className="h-4 w-4" />
            <div>
              <div className="font-semibold text-white">{item.title}</div>
              <div className="text-xs text-slate-400">{item.required ? 'Required' : 'Recommended'}</div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
