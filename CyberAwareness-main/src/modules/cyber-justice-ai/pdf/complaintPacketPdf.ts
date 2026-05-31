import jsPDF from 'jspdf';
import type { PdfExportResult } from '../../../sentinel-legal';
import { sanitizeForPdf } from '../../../sentinel-legal/pdf/fontRegistry';
import type { OfficialComplaintPacket } from '../types/complaintPacket.types';

const margin = { top: 20, right: 18, bottom: 22, left: 18 };

function pageWidth(doc: jsPDF) {
  return doc.internal.pageSize.width;
}

function pageHeight(doc: jsPDF) {
  return doc.internal.pageSize.height;
}

function usableWidth(doc: jsPDF) {
  return pageWidth(doc) - margin.left - margin.right;
}

function ensurePage(doc: jsPDF, y: number, needed = 18) {
  if (y + needed > pageHeight(doc) - margin.bottom) {
    doc.addPage();
    return margin.top;
  }
  return y;
}

function writeWrapped(doc: jsPDF, text: string, y: number, options?: { fontSize?: number; bold?: boolean; gap?: number }) {
  const fontSize = options?.fontSize ?? 10;
  doc.setFont('helvetica', options?.bold ? 'bold' : 'normal');
  doc.setFontSize(fontSize);

  const lines = doc.splitTextToSize(sanitizeForPdf(text), usableWidth(doc));
  let nextY = y;
  for (const line of lines) {
    nextY = ensurePage(doc, nextY, 7);
    doc.text(line, margin.left, nextY);
    nextY += fontSize <= 9 ? 4.8 : 5.8;
  }
  return nextY + (options?.gap ?? 4);
}

function writeSection(doc: jsPDF, title: string, content: string, y: number) {
  let nextY = ensurePage(doc, y, 22);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text(sanitizeForPdf(title), margin.left, nextY);
  nextY += 8;
  return writeWrapped(doc, content, nextY, { fontSize: 10, gap: 8 });
}

import i18n from '../../../i18n';

function addCoverPage(doc: jsPDF, packet: OfficialComplaintPacket) {
  const t = packet.lang ? i18n.getFixedT(packet.lang) : i18n.t.bind(i18n);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(21);
  doc.text(t('complaint.coverTitle') || 'Official Cybercrime Complaint Packet', margin.left, 38);

  doc.setFontSize(12);
  doc.text(`${t('complaint.packetNumberLabel') || 'Packet Number:'} ${packet.packetNumber}`, margin.left, 56);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`${t('complaint.generatedAtLabel') || 'Generated At:'} ${packet.generatedAt}`, margin.left, 66);
  doc.text(`${t('complaint.subjectLabel') || 'Subject:'} ${sanitizeForPdf(packet.complaint.subject)}`, margin.left, 78, { maxWidth: usableWidth(doc) });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text(t('complaint.packetContentsLabel') || 'Packet Contents', margin.left, 104);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const contents = [
    `1. ${t('complaint.mainComplaintLabel') || 'Main Complaint'}`,
    ...packet.annexures.map((annexure, index) => `${index + 2}. ${annexure.title}`),
    `${packet.annexures.length + 2}. ${t('complaint.signatureBlockLabel') || 'Signature Block'}`,
  ];
  contents.forEach((line, index) => doc.text(sanitizeForPdf(line), margin.left, 116 + index * 8));

  doc.setFontSize(9);
  doc.text(t('complaint.preparedBy') || 'Prepared by TrustLayerLabs Sentinel Legal AI using deterministic legal mappings and user-provided facts.', margin.left, 260, {
    maxWidth: usableWidth(doc),
  });
}


function addSignatureBlock(doc: jsPDF) {
  doc.addPage();
  let y = margin.top;
  y = writeSection(
    doc,
    'Signature Block',
    'I confirm that the facts stated in this complaint packet are true to the best of my knowledge and belief, and that the attached annexures are submitted for investigation and legal record.',
    y,
  );
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text('Complainant Signature: ______________________________', margin.left, y);
  y += 14;
  doc.text('Name: _____________________________________________', margin.left, y);
  y += 14;
  doc.text('Date: _____________________________________________', margin.left, y);
  y += 14;
  doc.text('Place: ____________________________________________', margin.left, y);
}

function addPageNumbers(doc: jsPDF, packetNumber: string) {
  const total = doc.getNumberOfPages();
  for (let page = 1; page <= total; page += 1) {
    doc.setPage(page);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(sanitizeForPdf(`Packet ${packetNumber}`), margin.left, pageHeight(doc) - 10);
    doc.text(`Page ${page} of ${total}`, pageWidth(doc) - margin.right - 24, pageHeight(doc) - 10);
  }
}

export async function generateComplaintPacketPdf(packet: OfficialComplaintPacket): Promise<PdfExportResult> {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    doc.setProperties({
      title: `Cybercrime Complaint Packet ${packet.packetNumber}`,
      author: 'Sentinel Legal',
      subject: packet.complaint.subject,
      keywords: 'complaint, cybercrime, legal, evidence, annexure',
      creator: 'TrustLayerLabs Sentinel',
    });

    addCoverPage(doc, packet);

    doc.addPage();
    let y = margin.top;
    y = writeWrapped(doc, packet.complaint.salutation, y, { fontSize: 11 });
    y = writeWrapped(doc, `Subject: ${packet.complaint.subject}`, y, { fontSize: 11, bold: true });
    y = writeWrapped(doc, packet.complaint.bodyIntro, y, { fontSize: 10 });

    packet.complaint.sections.forEach((section) => {
      y = writeSection(doc, section.heading, section.content, y);
    });

    y = writeSection(doc, 'Declaration', packet.complaint.declaration, y);
    y = writeWrapped(doc, packet.complaint.signOff, y, { fontSize: 10 });

    addSignatureBlock(doc);
    addPageNumbers(doc, packet.packetNumber);

    return {
      success: true,
      blob: doc.output('blob'),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred during packet PDF generation',
    };
  }
}
