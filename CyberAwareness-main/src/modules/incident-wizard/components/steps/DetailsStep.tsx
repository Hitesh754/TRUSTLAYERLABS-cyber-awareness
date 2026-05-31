import { useWizardStore } from '../../store/wizardStore';
import { getRequiredDetails } from '../../engine/questionEngine';

export function DetailsStep() {
  const { classification, details, setDetails } = useWizardStore();
  const reqs = getRequiredDetails(classification?.primaryCategory);

  const handleArrayChange = (key: keyof typeof details, value: string) => {
    // Only storing the first one for simplicity in UI, though extraction gives arrays
    setDetails({ [key]: [value] } as any);
  };

  const getValue = (key: keyof typeof details) => {
    const val = details[key] as string[] | undefined;
    return val && val.length > 0 ? val[0] : '';
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-semibold text-white">Specific Details</h2>
      <p className="text-slate-400">Based on your narrative, we need to confirm these specific details for the report.</p>

      <div className="space-y-4">
        {reqs.needsUpi && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">UPI ID involved</label>
            <input
              type="text"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g. name@okhdfc"
              value={getValue('upiIds')}
              onChange={(e) => handleArrayChange('upiIds', e.target.value)}
            />
          </div>
        )}

        {reqs.needsPhone && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number involved</label>
            <input
              type="text"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g. +91 9876543210"
              value={getValue('phoneNumbers')}
              onChange={(e) => handleArrayChange('phoneNumbers', e.target.value)}
            />
          </div>
        )}

        {reqs.needsUrl && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Suspicious URL</label>
            <input
              type="text"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g. http://fake-bank-login.com"
              value={getValue('urls')}
              onChange={(e) => handleArrayChange('urls', e.target.value)}
            />
          </div>
        )}

        {reqs.needsEmail && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Scammer Email</label>
            <input
              type="email"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g. support@fake-company.com"
              value={getValue('emails')}
              onChange={(e) => handleArrayChange('emails', e.target.value)}
            />
          </div>
        )}

        {reqs.needsWallet && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Crypto Wallet Address</label>
            <input
              type="text"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500"
              placeholder="e.g. 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
              value={getValue('walletAddresses')}
              onChange={(e) => handleArrayChange('walletAddresses', e.target.value)}
            />
          </div>
        )}

        {!reqs.needsUpi && !reqs.needsPhone && !reqs.needsUrl && !reqs.needsEmail && !reqs.needsWallet && (
           <p className="text-slate-400 italic">No specific identifiers are strictly required for this category. You can proceed.</p>
        )}
      </div>
    </div>
  );
}
