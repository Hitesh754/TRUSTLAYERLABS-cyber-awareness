/** Canonical law act identifiers used across Sentinel Legal AI. */
export type LawAct = 'IPC' | 'BNS' | 'IT_ACT' | 'IT_RULES' | 'DPDP';

export type ThreatSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface PunishmentDetail {
  imprisonment?: string;
  fine?: string;
  both?: boolean;
  notes?: string;
}

/** Single statute section with pre-authored relevance text (no AI generation). */
export interface LawSection {
  id: string;
  act: LawAct;
  section: string;
  title: string;
  description: string;
  punishment: PunishmentDetail;
  cognizable: boolean;
  bailable: boolean;
  compoundable: boolean;
  relevanceTemplate: string;
  tags: string[];
  supersededBy?: string;
  ipcEquivalent?: string;
}

export interface LawSectionRef {
  act: LawAct;
  sectionId: string;
}

export interface ResolvedLawSection extends LawSection {
  relevanceReason: string;
}

export interface LawMappingResult {
  ipcSections: ResolvedLawSection[];
  bnsSections: ResolvedLawSection[];
  itActSections: ResolvedLawSection[];
  primaryChargeSummary: string;
  ipcToBnsNotes: string[];
}

import type { CrimeCategory } from '../legalProfiles/types';

export interface ScamTypeLawRefs {
  crimeCategory: CrimeCategory;
  ipc: string[];
  bns: string[];
  itAct: string[];
}
