import {
  buildIpcToBnsNotes,
  getBnsEquivalentForIpc,
  getIpcEquivalentsForBns,
  IPC_TO_BNS_BRIDGE,
} from '../../../data/lawMappings/ipcToBnsBridge';
import type { LawMappingResult } from '../../../data/lawMappings/types';

export interface IpcBnsPair {
  ipcSection: string;
  bnsSection: string;
}

export interface IpcBnsResolution {
  pairs: IpcBnsPair[];
  notes: string[];
  unmappedIpcSections: string[];
}

/** Resolves IPC section IDs to BNS equivalents using Sprint 1 bridge data. */
export function resolveIpcToBns(ipcSectionIds: string[]): IpcBnsResolution {
  const pairs: IpcBnsPair[] = [];
  const unmappedIpcSections: string[] = [];

  for (const ipcSection of ipcSectionIds) {
    const bns = getBnsEquivalentForIpc(ipcSection);
    if (bns) {
      pairs.push({ ipcSection, bnsSection: bns });
    } else {
      unmappedIpcSections.push(ipcSection);
    }
  }

  return {
    pairs,
    notes: buildIpcToBnsNotes(ipcSectionIds),
    unmappedIpcSections,
  };
}

export function resolveBnsToIpc(bnsSectionId: string): string[] {
  return getIpcEquivalentsForBns(bnsSectionId);
}

/** Enriches a law mapping result with explicit IPC↔BNS resolution metadata. */
export function enrichLawMappingWithIpcBns(mapping: LawMappingResult): LawMappingResult & {
  ipcBnsResolution: IpcBnsResolution;
} {
  const ipcIds = mapping.ipcSections.map((s) => s.id);
  return {
    ...mapping,
    ipcBnsResolution: resolveIpcToBns(ipcIds),
    ipcToBnsNotes: buildIpcToBnsNotes(ipcIds),
  };
}

export { IPC_TO_BNS_BRIDGE };
