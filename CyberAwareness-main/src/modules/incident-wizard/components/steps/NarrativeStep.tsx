import { useWizardStore } from '../../store/wizardStore';

export function NarrativeStep() {
  const { narrative, setNarrative } = useWizardStore();

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-semibold text-white">Describe the Incident</h2>
      <p className="text-slate-400">Please provide as much detail as possible. What happened? How did they contact you? Did you lose money?</p>
      
      <textarea
        className="w-full h-48 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none"
        placeholder="E.g., I received a message on WhatsApp claiming my electricity bill was due..."
        value={narrative}
        maxLength={5000}
        onChange={(e) => setNarrative(e.target.value)}
      />
    </div>
  );
}
