import { useWizardStore } from '../../store/wizardStore';

export function ReviewStep() {
  const { narrative, classification, details } = useWizardStore();

  const getDetail = (key: keyof typeof details) => {
    const val = details[key] as string[] | undefined;
    return val && val.length > 0 ? val[0] : null;
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-semibold text-white">Review Report</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Narrative</h3>
          <p className="text-slate-200 whitespace-pre-wrap">{narrative}</p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Classification</h3>
          <p className="text-cyan-400 font-medium">
            {classification?.primaryCategory.replace(/_/g, ' ')}
          </p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
          <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Extracted Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {getDetail('upiIds') && (
              <div>
                <p className="text-xs text-slate-500">UPI ID</p>
                <p className="text-slate-200">{getDetail('upiIds')}</p>
              </div>
            )}
            {getDetail('phoneNumbers') && (
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-slate-200">{getDetail('phoneNumbers')}</p>
              </div>
            )}
            {getDetail('urls') && (
              <div>
                <p className="text-xs text-slate-500">URL</p>
                <p className="text-slate-200">{getDetail('urls')}</p>
              </div>
            )}
            {getDetail('emails') && (
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="text-slate-200">{getDetail('emails')}</p>
              </div>
            )}
            {getDetail('walletAddresses') && (
              <div>
                <p className="text-xs text-slate-500">Wallet</p>
                <p className="text-slate-200">{getDetail('walletAddresses')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm">
        Report is ready to be filed locally. (Database submission is beyond the scope of Sprint 3).
      </div>
    </div>
  );
}
