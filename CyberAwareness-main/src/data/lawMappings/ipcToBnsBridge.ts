/** Maps superseded IPC section IDs to BNS equivalents under Bharatiya Nyaya Sanhita (2023). */
export const IPC_TO_BNS_BRIDGE: Record<string, string> = {
  '354D': '78',
  '509': '79',
  '384': '127',
  '378': '303',
  '406': '316',
  '420': '318',
  '419': '319',
  '468': '336',
  '506': '351',
  '504': '352',
  '499': '356',
  '424': '316',
  '120B': '61',
  '292': '295',
  '471': '338',
  '472': '338',
  '473': '338',
  '474': '340',
  '482': '338',
  '34': '61',
  '153A': '356',
  '354A': '79',
  '354B': '78',
  '376': '111',
};

export function getBnsEquivalentForIpc(ipcSectionId: string): string | undefined {
  return IPC_TO_BNS_BRIDGE[ipcSectionId];
}

export function getIpcEquivalentsForBns(bnsSectionId: string): string[] {
  return Object.entries(IPC_TO_BNS_BRIDGE)
    .filter(([, bns]) => bns === bnsSectionId)
    .map(([ipc]) => ipc);
}

export function buildIpcToBnsNotes(ipcSectionIds: string[]): string[] {
  const notes: string[] = [];
  for (const ipcId of ipcSectionIds) {
    const bnsId = getBnsEquivalentForIpc(ipcId);
    if (bnsId) {
      notes.push(
        `IPC Section ${ipcId} corresponds to BNS Section ${bnsId} under the Bharatiya Nyaya Sanhita (2023). FIRs filed after 1 July 2024 may cite BNS provisions; verify with investigating officer.`,
      );
    }
  }
  return notes;
}
