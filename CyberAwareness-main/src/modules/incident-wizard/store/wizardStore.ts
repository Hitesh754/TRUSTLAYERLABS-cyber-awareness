/* @deprecated Legacy Legal AI workflow retained for Reporting Center compatibility. Replaced by Cyber Justice AI. */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  classifyIncident,
  extractEntities,
  mapLawsForIncident,
} from '../../../sentinel-legal';
import type { ClassificationResult, ExtractedEntities, EntityExtractionResult } from '../../../sentinel-legal';
import type { LawMappingEngineResult } from '../../../sentinel-legal';
import type { CrimeCategory } from '../../../data/legalProfiles/types';

export type WizardStep = 'NARRATIVE' | 'ANALYSIS' | 'DETAILS' | 'REVIEW';

export interface WizardState {
  currentStep: WizardStep;
  narrative: string;
  classification: ClassificationResult | null;
  entities: EntityExtractionResult | null;
  laws: LawMappingEngineResult | null;
  details: Partial<ExtractedEntities>;
  autoCategory: CrimeCategory | null;
  userSelectedCategory: CrimeCategory | null;

  setNarrative: (text: string) => void;
  analyzeNarrative: () => void;
  overrideCategory: (category: CrimeCategory) => void;
  setDetails: (details: Partial<ExtractedEntities>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useWizardStore = create<WizardState>()(
  persist(
    (set, get) => ({
      currentStep: 'NARRATIVE',
      narrative: '',
      classification: null,
      entities: null,
      laws: null,
      details: {},
      autoCategory: null,
      userSelectedCategory: null,

      setNarrative: (text) => set({ narrative: text }),

      analyzeNarrative: () => {
        const { narrative } = get();
        if (!narrative.trim()) return;

        const classification = classifyIncident({ narrative });
        const entities = extractEntities(narrative);
        const laws = mapLawsForIncident(classification.primaryCategory);

        set({ 
          classification, 
          entities, 
          laws, 
          details: entities.entities,
          autoCategory: classification.primaryCategory,
          userSelectedCategory: null,
          currentStep: 'ANALYSIS' 
        });
      },

      overrideCategory: (category) => {
        const laws = mapLawsForIncident(category);
        set((state) => ({
          userSelectedCategory: category,
          laws,
          classification: state.classification ? { 
            ...state.classification, 
            primaryCategory: category 
          } : null
        }));
      },

      setDetails: (newDetails) => set((state) => ({ 
        details: { ...state.details, ...newDetails } 
      })),

      nextStep: () => {
        const { currentStep } = get();
        if (currentStep === 'NARRATIVE') get().analyzeNarrative();
        else if (currentStep === 'ANALYSIS') set({ currentStep: 'DETAILS' });
        else if (currentStep === 'DETAILS') set({ currentStep: 'REVIEW' });
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep === 'ANALYSIS') set({ currentStep: 'NARRATIVE' });
        else if (currentStep === 'DETAILS') set({ currentStep: 'ANALYSIS' });
        else if (currentStep === 'REVIEW') set({ currentStep: 'DETAILS' });
      },

      reset: () => set({
        currentStep: 'NARRATIVE',
        narrative: '',
        classification: null,
        entities: null,
        laws: null,
        details: {},
        autoCategory: null,
        userSelectedCategory: null
      }),
    }),
    {
      name: 'incident-wizard-storage',
    }
  )
);
