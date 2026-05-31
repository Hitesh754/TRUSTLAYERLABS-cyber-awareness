export interface ComplaintTemplate {
  subjectTemplate: (category: string) => string;
  salutation: string;
  bodyIntroTemplate: (victimName: string) => string;
  narrativeHeading: string;
  timelineHeading: string;
  lossHeading: string;
  evidenceHeading: string;
  accusedHeading: string;
  legalHeading: string;
  declarationHeading: string;
  signOff: string;
  subjectLabel?: string;
  signatureLabel?: string;
}
