export { mapLawsForIncident } from './lawMappingEngine';
export type { LawMappingEngineResult } from './lawMappingEngine';
export {
  resolveIpcToBns,
  resolveBnsToIpc,
  enrichLawMappingWithIpcBns,
  IPC_TO_BNS_BRIDGE,
} from './ipcBnsResolver';
export type { IpcBnsPair, IpcBnsResolution } from './ipcBnsResolver';
