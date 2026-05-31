import { getLawRefsForCrimeCategory } from '../../lawMappings/scamTypeToLaws';
import type { CrimeCategory, LegalProfile, LegalProfileCore } from '../types';

/** Law section ID lists from canonical scamTypeToLaws mapping (defensive copies). */
export function applicableLawsFromCanonical(category: CrimeCategory): LegalProfile['applicableLaws'] {
  const refs = getLawRefsForCrimeCategory(category);
  return {
    ipc: [...refs.ipc],
    bns: [...refs.bns],
    itAct: [...refs.itAct],
  };
}

/** Attaches canonical applicableLaws to a profile core definition. */
export function attachCanonicalLaws(core: LegalProfileCore): LegalProfile {
  return {
    ...core,
    applicableLaws: applicableLawsFromCanonical(core.crimeCategory),
  };
}
