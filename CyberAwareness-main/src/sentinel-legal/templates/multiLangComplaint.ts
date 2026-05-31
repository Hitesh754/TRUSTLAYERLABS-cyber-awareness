import i18n from '../../i18n';
import { ComplaintTemplate } from './complaintTemplate';

export function getComplaintTemplate(lang?: string): ComplaintTemplate {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);

  return {
    subjectTemplate: (category: string) => t('complaint.subjectTemplate', { category }),
    salutation: t('complaint.salutation'),
    bodyIntroTemplate: (victimName: string) => t('complaint.bodyIntroTemplate', { victimName }),
    narrativeHeading: t('complaint.narrativeHeading'),
    timelineHeading: t('complaint.timelineHeading'),
    lossHeading: t('complaint.lossHeading'),
    evidenceHeading: t('complaint.evidenceHeading'),
    accusedHeading: t('complaint.accusedHeading'),
    legalHeading: t('complaint.legalHeading'),
    declarationHeading: t('complaint.declarationHeading'),
    signOff: t('complaint.signOff'),
    subjectLabel: t('complaint.subjectLabel'),
    signatureLabel: t('complaint.signatureLabel'),
  } as ComplaintTemplate;
}
