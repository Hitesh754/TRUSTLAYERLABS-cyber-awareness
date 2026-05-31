/* @deprecated Legacy Legal AI workflow retained for Reporting Center compatibility. Replaced by Cyber Justice AI. */
import React, { useEffect } from 'react';
import { useWizardStore } from '../store/wizardStore';
import { NarrativeStep } from './steps/NarrativeStep';
import { AnalysisStep } from './steps/AnalysisStep';
import { DetailsStep } from './steps/DetailsStep';
import { ReviewStep } from './steps/ReviewStep';
import { getRequiredDetails } from '../engine/questionEngine';

export function InterviewWizard() {
  const { currentStep, nextStep, prevStep, reset, narrative, classification, details } = useWizardStore();

  const steps = ['NARRATIVE', 'ANALYSIS', 'DETAILS', 'REVIEW'];
  const currentIndex = steps.indexOf(currentStep);

  // Unsaved changes warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (narrative.trim().length > 0 && currentStep !== 'REVIEW') {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [narrative, currentStep]);

  const canProceed = () => {
    if (currentStep === 'NARRATIVE') return narrative.trim().length > 10;
    if (currentStep === 'DETAILS') {
      const reqs = getRequiredDetails(classification?.primaryCategory);
      if (reqs.needsUpi && (!details.upiIds || details.upiIds.length === 0 || !details.upiIds[0])) return false;
      if (reqs.needsPhone && (!details.phoneNumbers || details.phoneNumbers.length === 0 || !details.phoneNumbers[0])) return false;
      if (reqs.needsUrl && (!details.urls || details.urls.length === 0 || !details.urls[0])) return false;
      if (reqs.needsEmail && (!details.emails || details.emails.length === 0 || !details.emails[0])) return false;
      if (reqs.needsWallet && (!details.walletAddresses || details.walletAddresses.length === 0 || !details.walletAddresses[0])) return false;
    }
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 overflow-hidden">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center z-10 bg-slate-950 px-2 sm:px-0">
              <div 
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold
                  ${index <= currentIndex ? 'bg-cyan-500 text-slate-900' : 'bg-slate-800 text-slate-500'}`}
              >
                {index + 1}
              </div>
              <span className="text-[10px] sm:text-xs text-slate-500 mt-2 font-medium tracking-wide text-center">
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`flex-1 h-0.5 mx-1 sm:mx-4 hidden sm:block
                  ${index < currentIndex ? 'bg-cyan-500' : 'bg-slate-800'}`} 
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        {currentStep === 'NARRATIVE' && <NarrativeStep />}
        {currentStep === 'ANALYSIS' && <AnalysisStep />}
        {currentStep === 'DETAILS' && <DetailsStep />}
        {currentStep === 'REVIEW' && <ReviewStep />}
      </div>

      {/* Navigation */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-8 pt-6 border-t border-slate-800">
        <button
          onClick={prevStep}
          disabled={currentStep === 'NARRATIVE'}
          className="w-full sm:w-auto px-6 py-2 rounded-lg font-medium text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
        >
          Back
        </button>
        
        {currentStep !== 'REVIEW' ? (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className="w-full sm:w-auto px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg font-bold disabled:opacity-50 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            {currentStep === 'NARRATIVE' ? 'Analyze Incident' : 'Next Step'}
          </button>
        ) : (
          <button
            onClick={reset}
            className="w-full sm:w-auto px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-lg font-bold transition-colors"
          >
            Start New Report
          </button>
        )}
      </div>
    </div>
  );
}
