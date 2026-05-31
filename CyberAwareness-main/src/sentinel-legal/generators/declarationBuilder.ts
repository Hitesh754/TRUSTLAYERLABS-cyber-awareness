import i18n from '../../i18n';

export const generateDeclaration = (victimName: string, dateStr: string, lang?: string): string => {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  // Use a translation key for declaration with interpolation
  const template = t('complaint.declarationTemplate', { victimName, dateStr });
  return template;
};
