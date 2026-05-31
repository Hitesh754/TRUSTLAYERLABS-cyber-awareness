// Note: no direct React import required with automatic JSX runtime
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import { getEmergencyActions, type EmergencyAction } from '../../emergencyActionEngine';
import { AlertTriangle } from 'lucide-react';

export function EmergencyActionsPanel() {
  const { caseFile } = useCyberJusticeStore();
  const category = (caseFile.incident.userSelectedCategory ?? caseFile.incident.category ?? (caseFile.laws.classification?.primaryCategory as any)) || null;
  const actions: EmergencyAction[] = getEmergencyActions(category);

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <AlertTriangle className="h-5 w-5" />
        <h3 className="font-semibold">Immediate actions</h3>
      </div>

      <div className="space-y-3">
        {actions.map((a) => (
          <div key={a.id} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{a.title}</p>
              <span className={`text-xs font-semibold ${a.urgent ? 'text-rose-300' : 'text-amber-300'}`}>{a.urgent ? 'Urgent' : 'Advisory'}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{a.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
