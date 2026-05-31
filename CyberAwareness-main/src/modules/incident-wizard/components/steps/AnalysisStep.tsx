import { useWizardStore } from '../../store/wizardStore';
import type { CrimeCategory } from '../../../../data/legalProfiles/types';

const CATEGORIES: CrimeCategory[] = [
  'UPI_FRAUD', 'OTP_FRAUD', 'PHISHING', 'INVESTMENT_SCAM', 'CRYPTO_FRAUD', 
  'DEEPFAKE_IMPERSONATION', 'IDENTITY_THEFT', 'QR_SCAM', 'SIM_SWAP', 'JOB_SCAM', 
  'SEXTORTION', 'CYBER_STALKING', 'DATA_BREACH', 'HACKING_UNAUTHORIZED_ACCESS', 'OTHER'
];

export function AnalysisStep() {
  const { classification, laws, overrideCategory, autoCategory, userSelectedCategory } = useWizardStore();

  if (!classification || !laws) return null;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-semibold text-white">Incident Analysis</h2>
      
      <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg">
        <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Detected Category</h3>
        <p className="text-xl text-cyan-400 font-semibold">{classification.primaryCategory.replace(/_/g, ' ')}</p>
        <p className="text-sm text-slate-300 mt-2">Confidence Score: {(classification.confidence * 100).toFixed(1)}%</p>
        
        <div className="mt-4 pt-4 border-t border-slate-800">
          <label className="block text-xs text-slate-500 mb-2 uppercase tracking-wide">Incorrect Category? Select Manually:</label>
          <select 
            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-cyan-500 text-sm"
            value={classification.primaryCategory}
            onChange={(e) => overrideCategory(e.target.value as CrimeCategory)}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat.replace(/_/g, ' ')}</option>
            ))}
          </select>
          {userSelectedCategory && (
            <p className="text-xs text-amber-500 mt-2">
              Note: You manually overrode the AI classification (originally: {autoCategory?.replace(/_/g, ' ')}).
            </p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Applicable Laws</h3>
        {laws.lawMapping.bnsSections.length > 0 && (
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-emerald-400 mb-2">BNS (Bharatiya Nyaya Sanhita)</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
              {laws.lawMapping.bnsSections.map(law => (
                <li key={law.id}><strong>{law.act} {law.section}</strong>: {law.title}</li>
              ))}
            </ul>
          </div>
        )}
        
        {laws.lawMapping.itActSections.length > 0 && (
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-blue-400 mb-2">IT Act</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
              {laws.lawMapping.itActSections.map(law => (
                <li key={law.id}><strong>{law.act} {law.section}</strong>: {law.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <p className="text-sm text-slate-400 mt-4">
        Review the detected category and laws. Click next to provide specific details about this incident.
      </p>
    </div>
  );
}
