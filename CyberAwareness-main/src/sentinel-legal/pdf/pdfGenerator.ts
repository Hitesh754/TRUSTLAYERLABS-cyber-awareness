import jsPDF from 'jspdf';
import type { GeneratedComplaint } from '../generators/complaintGenerator';
import type { PdfExportResult, PdfDocumentOptions, PdfMargin } from './pdfTypes';
import { drawHeader, drawSection, drawFooter } from './pdfSections';

export const generatePdf = async (
  complaint: GeneratedComplaint,
  options?: Partial<PdfDocumentOptions>
): Promise<PdfExportResult> => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    if (options) {
      doc.setProperties({
        title: options.title || 'Cybercrime Complaint',
        author: options.author || 'Sentinel Legal',
        subject: options.subject || complaint.subject,
        keywords: options.keywords || 'complaint, cybercrime, legal',
        creator: options.creator || 'TrustLayerLabs Sentinel',
      });
    }

    const margin: PdfMargin = { top: 20, right: 20, bottom: 20, left: 20 };
    let yPos = margin.top;

    // Draw Header
    yPos = drawHeader(doc, complaint, margin, yPos);

    // Draw Sections
    for (const section of complaint.sections) {
      yPos = drawSection(doc, section.heading, section.content, margin, yPos);
    }

    // Draw Footer / Declaration
    drawFooter(doc, complaint, margin, yPos);

    const blob = doc.output('blob');

    return {
      success: true,
      blob,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Unknown error occurred during PDF generation',
    };
  }
};
