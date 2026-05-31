import jsPDF from 'jspdf';
import type { GeneratedComplaint } from '../generators/complaintGenerator';
import type { PdfMargin } from './pdfTypes';
import { sanitizeForPdf } from './fontRegistry';

export const drawHeader = (doc: jsPDF, complaint: GeneratedComplaint, margin: PdfMargin, yPos: number): number => {
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(sanitizeForPdf(complaint.salutation), margin.left, yPos);
  
  yPos += 15;
  doc.setFont('helvetica', 'bold');
  const subjectLabel = complaint.subjectLabel || 'Subject:';
  doc.text(sanitizeForPdf(`${subjectLabel} ${complaint.subject}`), margin.left, yPos, { maxWidth: doc.internal.pageSize.width - margin.left - margin.right });
  
  yPos += 15;
  doc.setFont('helvetica', 'normal');
  doc.text(sanitizeForPdf(complaint.bodyIntro), margin.left, yPos, { maxWidth: doc.internal.pageSize.width - margin.left - margin.right });

  return yPos + 15; // Return new y position
};

export const drawSection = (doc: jsPDF, heading: string, content: string, margin: PdfMargin, yPos: number): number => {
  const pageWidth = doc.internal.pageSize.width;
  const maxWidth = pageWidth - margin.left - margin.right;
  const pageHeight = doc.internal.pageSize.height;

  // Check if we need a new page for the heading
  if (yPos > pageHeight - margin.bottom - 20) {
    doc.addPage();
    yPos = margin.top;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(sanitizeForPdf(heading), margin.left, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  
  const safeContent = sanitizeForPdf(content);
  const splitContent = doc.splitTextToSize(safeContent, maxWidth);
  
  for (let i = 0; i < splitContent.length; i++) {
    if (yPos > pageHeight - margin.bottom) {
      doc.addPage();
      yPos = margin.top;
    }
    doc.text(splitContent[i], margin.left, yPos);
    yPos += 6;
  }

  return yPos + 8; // Extra padding after section
};

export const drawFooter = (doc: jsPDF, complaint: GeneratedComplaint, margin: PdfMargin, yPos: number): number => {
  const pageHeight = doc.internal.pageSize.height;
  
  if (yPos > pageHeight - margin.bottom - 50) {
    doc.addPage();
    yPos = margin.top;
  }

  const declHeading = complaint.declarationHeading || '7. Declaration';
  yPos = drawSection(doc, declHeading, complaint.declaration, margin, yPos);

  yPos += 10;
  doc.text(sanitizeForPdf(complaint.signOff), margin.left, yPos);
  yPos += 20;
  const signatureLabel = complaint.signatureLabel || '[Signature]';
  doc.text(sanitizeForPdf(signatureLabel), margin.left, yPos);
  
  return yPos;
};
