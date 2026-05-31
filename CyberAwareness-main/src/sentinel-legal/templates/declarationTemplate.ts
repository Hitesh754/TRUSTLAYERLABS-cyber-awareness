export const buildDeclaration = (victimName: string, dateStr: string): string => {
  return `I, ${victimName}, hereby declare that the information provided in this complaint is true and accurate to the best of my knowledge and belief. I understand that submitting false information is a punishable offense under law.

Date: ${dateStr}
Place: _________________`;
};
