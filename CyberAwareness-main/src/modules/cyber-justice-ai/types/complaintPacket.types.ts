import type { GeneratedComplaint, PdfExportResult } from '../../../sentinel-legal';

export type ComplaintAnnexureKind = 'EVIDENCE' | 'TIMELINE' | 'FINANCIAL_LOSS' | 'LAW_EXPLANATION';

export interface ComplaintAnnexure {
  id: string;
  kind: ComplaintAnnexureKind;
  title: string;
  content: string;
  itemCount: number;
}

export interface ComplaintPacketExportSummary {
  packetNumber: string;
  generatedAt: string;
  evidenceCount: number;
  timelineEventCount: number;
  lawCount: number;
  hasFinancialLoss: boolean;
  annexureCount: number;
  pdfReady: boolean;
}

export interface OfficialComplaintPacket {
  packetNumber: string;
  generatedAt: string;
  complaint: GeneratedComplaint;
  annexures: ComplaintAnnexure[];
  exportSummary: ComplaintPacketExportSummary;
  pdf?: PdfExportResult | null;
  lang?: string;
}
