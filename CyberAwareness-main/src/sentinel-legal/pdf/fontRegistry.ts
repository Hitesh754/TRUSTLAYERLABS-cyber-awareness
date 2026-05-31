import jsPDF from 'jspdf';

export interface FontConfig {
  name: string;
  style: 'normal' | 'italic' | 'bold';
  base64Content: string;
}

/**
 * Reusable font registration architecture for multilingual PDF support.
 * In a full production build, populate base64Content with UTF-8 compatible 
 * fonts like Noto Sans to support Hindi, Bengali, Tamil, Telugu, Marathi, and Urdu.
 */
export const registerCustomFonts = (doc: jsPDF, fonts: FontConfig[]): void => {
  fonts.forEach((font) => {
    const fileName = `${font.name}-${font.style}.ttf`;
    doc.addFileToVFS(fileName, font.base64Content);
    doc.addFont(fileName, font.name, font.style);
  });
};

/**
 * Defensive sanitizer for standard ASCII rendering if custom UTF-8 fonts 
 * (like Noto Sans) are not yet loaded into the VFS. Translates known symbols 
 * (like ₹) to text equivalents to prevent jsPDF from rendering garbage characters.
 */
export const sanitizeForPdf = (text: string): string => {
  if (!text) return '';
  
  // Replace Rupee symbol with text
  let sanitized = text.replace(/₹/g, 'INR ');
  
  // Strip emojis that break standard jsPDF Helvetica/Times
  sanitized = sanitized.replace(/[\u{1F600}-\u{1F64F}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1F300}-\u{1F5FF}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1F680}-\u{1F6FF}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1F700}-\u{1F77F}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1F780}-\u{1F7FF}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1F800}-\u{1F8FF}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1F900}-\u{1F9FF}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1FA00}-\u{1FA6F}]/gu, ''); 
  sanitized = sanitized.replace(/[\u{1FA70}-\u{1FAFF}]/gu, '');
  
  return sanitized;
};
