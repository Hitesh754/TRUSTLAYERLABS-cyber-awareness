export interface PdfDocumentOptions {
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
}

export interface PdfMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface PdfExportResult {
  success: boolean;
  blob?: Blob;
  error?: string;
}

export interface PdfTextOptions {
  fontSize?: number;
  fontStyle?: 'normal' | 'italic' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: number;
  color?: string; // hex color
}
