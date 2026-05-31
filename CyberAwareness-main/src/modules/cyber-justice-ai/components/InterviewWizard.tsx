import { RotateCcw } from 'lucide-react';
import { useCyberJusticeStore } from '../store/cyberJusticeStore';
import type { CyberJusticeWizardStep } from '../types/cyberJustice.types';
import { AnalysisStep } from './steps/AnalysisStep';
import { EvidenceStep } from './steps/EvidenceStep';
import { NarrativeStep } from './steps/NarrativeStep';
import { ReviewStep } from './steps/ReviewStep';
import { TimelineStep } from './steps/TimelineStep';
import { useTranslation } from 'react-i18next';

const steps: CyberJusticeWizardStep[] = ['NARRATIVE', 'ANALYSIS', 'EVIDENCE', 'TIMELINE', 'REVIEW'];

function stepLabel(step: CyberJusticeWizardStep, t: (key: string) => string) {
  return t(`cyberJustice.steps.${step}`);
}

export function InterviewWizard() {
  const { t } = useTranslation();
  const { caseFile, wizardStep, isAnalyzing, nextStep, prevStep, resetCase, setWizardStep } = useCyberJusticeStore();
  const currentIndex = steps.indexOf(wizardStep);

  const canProceed =
    (wizardStep === 'NARRATIVE' && caseFile.incident.narrative.trim().length > 10 && !isAnalyzing) ||
    (wizardStep === 'ANALYSIS' && Boolean(caseFile.laws.classification && caseFile.laws.mapping)) ||
    wizardStep === 'EVIDENCE' ||
    wizardStep === 'TIMELINE';

  return (
    <div className="rounded-xl border border-cyan-500/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/30">
      <div className="flex flex-col gap-4 border-b border-cyan-500/10 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{t('cyberJustice.phaseLabel')}</p>
          <h1 className="mt-2 text-2xl font-bold text-white">{t('cyberJustice.title')}</h1>
        </div>
        <button
          type="button"
          onClick={resetCase}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
        >
          <RotateCcw className="h-4 w-4" />
          {t('cyberJustice.button.reset')}
        </button>
      </div>

      <div className="border-b border-cyan-500/10 px-5 py-5">
        <div className="grid grid-cols-5 gap-2">
          {steps.map((step, index) => (
            <button
              key={step}
              type="button"
              onClick={() => setWizardStep(step)}
              className={`rounded-lg border px-2 py-3 text-center transition ${
                index <= currentIndex
                  ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-100'
                  : 'border-slate-800 bg-slate-900/70 text-slate-500'
              }`}
            >
              <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-xs font-bold">
                {index + 1}
              </span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                {stepLabel(step, t)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[520px] px-5 py-6">
        {wizardStep === 'NARRATIVE' && <NarrativeStep />}
        {wizardStep === 'ANALYSIS' && <AnalysisStep />}
        {wizardStep === 'EVIDENCE' && <EvidenceStep />}
        {wizardStep === 'TIMELINE' && <TimelineStep />}
        {wizardStep === 'REVIEW' && <ReviewStep />}
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-cyan-500/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={prevStep}
          disabled={wizardStep === 'NARRATIVE'}
          className="rounded-lg px-5 py-2 text-sm font-semibold text-slate-300 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          {t('cyberJustice.button.back')}
        </button>
        {wizardStep !== 'REVIEW' && (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canProceed}
            className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {wizardStep === 'NARRATIVE' ? (isAnalyzing ? t('cyberJustice.button.analyzing') : t('cyberJustice.button.analyze')) : t('cyberJustice.button.next')}
          </button>
        )}
      </div>
    </div>
  );
}
