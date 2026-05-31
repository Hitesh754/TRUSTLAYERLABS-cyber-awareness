import { ComplaintTemplate } from './complaintTemplate';

export const englishComplaint: ComplaintTemplate = {
  subjectTemplate: (category) => `Formal Complaint Regarding Cybercrime Incident: ${category}`,
  salutation: 'To The Station House Officer / Cyber Crime Cell,',
  bodyIntroTemplate: (victimName) => `I, ${victimName}, respectfully submit this formal complaint to report a cybercrime incident that has occurred against me.`,
  narrativeHeading: '1. Incident Narrative',
  timelineHeading: '2. Incident Timeline',
  lossHeading: '3. Financial Loss Details',
  evidenceHeading: '4. Evidence & Identifiers Summary',
  accusedHeading: '5. Accused Information',
  legalHeading: '6. Applicable Legal Sections',
  declarationHeading: '7. Declaration',
  signOff: 'Yours faithfully,',
};
