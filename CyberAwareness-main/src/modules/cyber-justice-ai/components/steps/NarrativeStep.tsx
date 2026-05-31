import { MessageSquareWarning } from 'lucide-react';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';

export function NarrativeStep() {
  const { caseFile, setNarrative, addMessage } = useCyberJusticeStore();

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-cyan-400/10 p-3 text-cyan-200">
          <MessageSquareWarning className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Describe the incident</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            Include what happened, who contacted you, where it happened, identifiers, and financial loss. Avoid passwords, OTPs, and private PINs.
          </p>
        </div>
      </div>

      <textarea
        value={caseFile.incident.narrative}
        maxLength={5000}
        onChange={(event) => setNarrative(event.target.value)}
        onBlur={(event) => {
          const text = event.target.value.trim();
          if (text) addMessage('user', text);
        }}
        rows={10}
        placeholder="Example: I received a WhatsApp message asking me to verify bank KYC, clicked a link, and lost money through UPI..."
        className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
      />
    </div>
  );
}
