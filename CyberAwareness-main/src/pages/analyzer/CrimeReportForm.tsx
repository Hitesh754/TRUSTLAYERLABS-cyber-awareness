import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  FileText,
  UserSearch,
  DollarSign,
  AlertOctagon,
  ShieldOff,
  Lock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Check,
  ExternalLink,
  Phone,
  Download,
} from 'lucide-react';

import type { AnalysisResult, CrimeReportData, CrimeContext } from './types';
import { createEmptyReportData } from './types';
import {
  getCrimeContextMeta,
  INDIAN_STATES,
  ID_PROOF_TYPES,
  PAYMENT_METHODS,
  HARASSMENT_TYPES,
  PLATFORMS,
  DATA_TYPES,
  ACCESS_METHODS,
} from './crimeContextMap';
import { generateCrimeReport } from './reportGenerator';

interface Props {
  analysisResult: AnalysisResult;
  crimeContext: CrimeContext;
  analyzedText: string;
}

// ── Step definitions ────────────────────────────────

interface StepDef {
  id: string;
  label: string;
  icon: React.ReactNode;
}

function getSteps(context: CrimeContext): StepDef[] {
  const always: StepDef[] = [
    { id: 'victim', label: 'Victim Info', icon: <User className="w-4 h-4" /> },
    { id: 'incident', label: 'Incident', icon: <FileText className="w-4 h-4" /> },
    { id: 'suspect', label: 'Suspect', icon: <UserSearch className="w-4 h-4" /> },
  ];

  const contextStep: StepDef | null =
    context === 'financial'
      ? { id: 'financial', label: 'Financial Loss', icon: <DollarSign className="w-4 h-4" /> }
      : context === 'harassment'
        ? { id: 'harassment', label: 'Harassment', icon: <AlertOctagon className="w-4 h-4" /> }
        : context === 'data_theft'
          ? { id: 'data_theft', label: 'Data Compromise', icon: <ShieldOff className="w-4 h-4" /> }
          : context === 'ransomware'
            ? { id: 'ransomware', label: 'Ransomware', icon: <Lock className="w-4 h-4" /> }
            : null;

  const finalStep: StepDef = {
    id: 'evidence',
    label: 'Evidence & Location',
    icon: <MapPin className="w-4 h-4" />,
  };

  return contextStep ? [...always, contextStep, finalStep] : [...always, finalStep];
}

// ── Form input helpers ──────────────────────────────

function InputField({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-600 dark:text-zinc-400">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-600 dark:text-zinc-400">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all appearance-none"
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-600 dark:text-zinc-400">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
      />
    </div>
  );
}

// ── Main component ──────────────────────────────────

export default function CrimeReportForm({ analysisResult, crimeContext, analyzedText }: Props) {
  const steps = getSteps(crimeContext);
  const contextMeta = getCrimeContextMeta(crimeContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedRef, setGeneratedRef] = useState<string | null>(null);

  const [data, setData] = useState<CrimeReportData>(() => {
    const empty = createEmptyReportData();
    // Pre-fill from analysis
    empty.crimeCategory = analysisResult.category;
    empty.crimeSubCategory = contextMeta.label;
    empty.incidentDescription = `Analyzed message:\n"${analyzedText}"\n\nAI Analysis:\n${analysisResult.explanation}`;
    empty.suspiciousUrls = analysisResult.suspiciousUrls;
    empty.incidentDate = new Date().toISOString().split('T')[0];
    empty.incidentTime = new Date().toTimeString().slice(0, 5);
    return empty;
  });

  const update = (field: keyof CrimeReportData, value: string | boolean | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleGenerate = () => {
    const refId = generateCrimeReport(data, analysisResult, crimeContext);
    setGeneratedRef(refId);
  };

  // ── Step renderers ──────────────────────────────

  function renderVictimStep() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="Full Name" value={data.victimName} onChange={(v) => update('victimName', v)} placeholder="Enter your full name" required />
        <InputField label="Phone Number" value={data.victimPhone} onChange={(v) => update('victimPhone', v)} placeholder="+91 XXXXX XXXXX" required type="tel" />
        <InputField label="Email Address" value={data.victimEmail} onChange={(v) => update('victimEmail', v)} placeholder="email@example.com" type="email" />
        <SelectField label="ID Proof Type" value={data.victimIdType} onChange={(v) => update('victimIdType', v)} options={ID_PROOF_TYPES} placeholder="Select ID type" />
        <InputField label="ID Number" value={data.victimIdNumber} onChange={(v) => update('victimIdNumber', v)} placeholder="Enter ID number" />
        <div className="sm:col-span-2">
          <TextAreaField label="Address" value={data.victimAddress} onChange={(v) => update('victimAddress', v)} placeholder="Enter your full address" rows={2} />
        </div>
      </div>
    );
  }

  function renderIncidentStep() {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Date of Incident" value={data.incidentDate} onChange={(v) => update('incidentDate', v)} type="date" required />
          <InputField label="Time of Incident" value={data.incidentTime} onChange={(v) => update('incidentTime', v)} type="time" />
          <InputField label="Crime Category" value={data.crimeCategory} onChange={(v) => update('crimeCategory', v)} placeholder="Auto-detected" />
          <InputField label="Sub-Category" value={data.crimeSubCategory} onChange={(v) => update('crimeSubCategory', v)} placeholder="Auto-detected" />
        </div>
        <TextAreaField
          label="Incident Description"
          value={data.incidentDescription}
          onChange={(v) => update('incidentDescription', v)}
          placeholder="Describe what happened..."
          rows={5}
        />
      </div>
    );
  }

  function renderSuspectStep() {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-500 dark:text-zinc-500 italic">All fields are optional — fill in whatever you know about the suspect.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Suspect Name" value={data.suspectName} onChange={(v) => update('suspectName', v)} placeholder="If known" />
          <InputField label="Suspect Phone" value={data.suspectPhone} onChange={(v) => update('suspectPhone', v)} placeholder="+91 XXXXX XXXXX" type="tel" />
          <InputField label="Suspect Email" value={data.suspectEmail} onChange={(v) => update('suspectEmail', v)} placeholder="If known" type="email" />
          <InputField label="Social Media Profile" value={data.suspectSocialMedia} onChange={(v) => update('suspectSocialMedia', v)} placeholder="Profile link or username" />
        </div>
      </div>
    );
  }

  function renderFinancialStep() {
    return (
      <div className="space-y-4">
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-sm">
          💰 Financial fraud detected — providing transaction details helps authorities trace and recover funds faster.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Amount Lost (₹)" value={data.lossAmount} onChange={(v) => update('lossAmount', v)} placeholder="e.g., 25000" type="number" />
          <InputField label="Transaction ID / UTR" value={data.transactionId} onChange={(v) => update('transactionId', v)} placeholder="From bank statement" />
          <InputField label="Bank Name" value={data.bankName} onChange={(v) => update('bankName', v)} placeholder="Your bank name" />
          <SelectField label="Payment Method" value={data.paymentMethod} onChange={(v) => update('paymentMethod', v)} options={PAYMENT_METHODS} placeholder="How was payment made?" />
          <div className="sm:col-span-2">
            <TextAreaField label="Suspect's Account / UPI Details" value={data.suspectAccountDetails} onChange={(v) => update('suspectAccountDetails', v)} placeholder="Suspect's UPI ID, account number, or wallet address" rows={2} />
          </div>
        </div>
      </div>
    );
  }

  function renderHarassmentStep() {
    return (
      <div className="space-y-4">
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-sm">
          🚨 Harassment / blackmail detected — your report will help authorities take action. All information is confidential.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField label="Type of Harassment" value={data.harassmentType} onChange={(v) => update('harassmentType', v)} options={HARASSMENT_TYPES} placeholder="Select type" />
          <SelectField label="Platform Used" value={data.platformUsed} onChange={(v) => update('platformUsed', v)} options={PLATFORMS} placeholder="Where did this happen?" />
          <SelectField
            label="Relation to Suspect"
            value={data.relationToSuspect}
            onChange={(v) => update('relationToSuspect', v)}
            options={['Known Person', 'Unknown', 'Online Acquaintance', 'Ex-Partner', 'Colleague', 'Other']}
            placeholder="Select..."
          />
        </div>
        <TextAreaField
          label="Description of Threatening Content"
          value={data.contentDescription}
          onChange={(v) => update('contentDescription', v)}
          placeholder="Describe the nature of threats, blackmail demands, or harmful content..."
          rows={4}
        />
      </div>
    );
  }

  function renderDataTheftStep() {
    return (
      <div className="space-y-4">
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-300 text-sm">
          🔓 Data compromise detected — documenting what was accessed helps authorities and prevents further misuse.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField label="Data Compromised" value={data.dataCompromised} onChange={(v) => update('dataCompromised', v)} options={DATA_TYPES} placeholder="What was stolen/accessed?" />
          <SelectField label="Access Method" value={data.accessMethod} onChange={(v) => update('accessMethod', v)} options={ACCESS_METHODS} placeholder="How did they get access?" />
          <SelectField
            label="Devices Affected"
            value={data.devicesAffected}
            onChange={(v) => update('devicesAffected', v)}
            options={['Mobile Phone', 'Laptop / Computer', 'Both', 'Tablet', 'Unknown']}
            placeholder="Which device?"
          />
        </div>
      </div>
    );
  }

  function renderRansomwareStep() {
    return (
      <div className="space-y-4">
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-sm">
          🔒 Ransomware detected — do NOT pay the ransom. Preserve evidence and disconnect the device from the network.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Ransom Demand" value={data.ransomDemand} onChange={(v) => update('ransomDemand', v)} placeholder="Amount or cryptocurrency demanded" />
          <InputField label="Files / Systems Affected" value={data.filesAffected} onChange={(v) => update('filesAffected', v)} placeholder="e.g., All documents on laptop" />
        </div>
        <TextAreaField
          label="Ransom Note / Message Text"
          value={data.ransomNote}
          onChange={(v) => update('ransomNote', v)}
          placeholder="Paste or describe the ransom message you received..."
          rows={4}
        />
      </div>
    );
  }

  function renderEvidenceStep() {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectField label="State" value={data.state} onChange={(v) => update('state', v)} options={INDIAN_STATES} placeholder="Select your state" required />
          <InputField label="District" value={data.district} onChange={(v) => update('district', v)} placeholder="Enter your district" />
        </div>
        <TextAreaField
          label="Additional Evidence Notes"
          value={data.evidenceDescription}
          onChange={(v) => update('evidenceDescription', v)}
          placeholder="Any additional evidence, witnesses, or details you'd like to include..."
          rows={3}
        />
        {data.suspiciousUrls.length > 0 && (
          <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <p className="text-xs font-medium text-slate-500 dark:text-zinc-400 mb-2">Auto-detected Suspicious URLs (will be included in report):</p>
            <ul className="space-y-1">
              {data.suspiciousUrls.map((url) => (
                <li key={url} className="text-xs text-red-500 dark:text-red-400 break-all font-mono">{url}</li>
              ))}
            </ul>
          </div>
        )}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.screenshotAttached}
            onChange={(e) => update('screenshotAttached', e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 dark:border-zinc-600 text-cyan-500 focus:ring-cyan-500"
          />
          <span className="text-sm text-slate-600 dark:text-zinc-400">I will attach screenshots / evidence files when filing</span>
        </label>
      </div>
    );
  }

  function renderCurrentStep() {
    const stepId = steps[currentStep].id;
    switch (stepId) {
      case 'victim': return renderVictimStep();
      case 'incident': return renderIncidentStep();
      case 'suspect': return renderSuspectStep();
      case 'financial': return renderFinancialStep();
      case 'harassment': return renderHarassmentStep();
      case 'data_theft': return renderDataTheftStep();
      case 'ransomware': return renderRansomwareStep();
      case 'evidence': return renderEvidenceStep();
      default: return null;
    }
  }

  // ── Render ────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mt-10"
    >
      {/* Context badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{contextMeta.icon}</span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">File Cyber Crime Report</h2>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">{contextMeta.description}</p>
        </div>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button
              key={step.id}
              onClick={() => setCurrentStep(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                  : isCompleted
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-500 border border-transparent'
              }`}
            >
              {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.icon}
              <span className="hidden sm:inline">{step.label}</span>
              <span className="sm:hidden">{idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Form card */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          {steps[currentStep].icon}
          <h3 className="text-xl sm:text-2xl font-semibold">{steps[currentStep].label}</h3>
          <span className="ml-auto text-xs text-slate-400 dark:text-zinc-500">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={steps[currentStep].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800">
          <button
            onClick={() => setCurrentStep((s) => s - 1)}
            disabled={isFirstStep}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium border border-gray-300 dark:border-zinc-700 text-slate-600 dark:text-zinc-400 hover:border-gray-400 dark:hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {isLastStep ? (
            <button
              onClick={handleGenerate}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-4 h-4" />
              Generate Complaint Report
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep((s) => s + 1)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-cyan-500 text-black hover:bg-cyan-400 transition-all"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Success + filing links */}
      <AnimatePresence>
        {generatedRef && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
          >
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300 text-lg">Report Generated Successfully</h4>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
                  Reference: <span className="font-mono font-bold">{generatedRef}</span> — PDF has been downloaded.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filing action banner */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://cybercrime.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 hover:border-cyan-500/50 transition-all group"
        >
          <ExternalLink className="w-6 h-6 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="font-bold text-slate-900 dark:text-white">File Online at cybercrime.gov.in</p>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">National Cyber Crime Reporting Portal</p>
          </div>
        </a>
        <a
          href="tel:1930"
          className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/25 hover:border-emerald-500/50 transition-all group"
        >
          <Phone className="w-6 h-6 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
          <div>
            <p className="font-bold text-slate-900 dark:text-white">Call Helpline: 1930</p>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">National Cyber Crime Helpline (24×7)</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
