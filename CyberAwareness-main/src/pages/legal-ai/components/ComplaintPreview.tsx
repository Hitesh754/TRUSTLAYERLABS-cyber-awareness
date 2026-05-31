import { useState, useEffect } from 'react';
import { useWizardStore } from '../../../modules/incident-wizard/store/wizardStore';
import { 
  generateComplaint, 
  formatComplaintForDisplay, 
  ComplaintData 
} from '../../../sentinel-legal/generators/complaintGenerator';
import { generatePdf } from '../../../sentinel-legal/pdf/pdfGenerator';
import type { IncidentTimelineEvent } from '../../../sentinel-legal/generators/timelineBuilder';

export function ComplaintPreview() {
  const { 
    currentStep, 
    narrative, 
    classification, 
    entities, 
    laws, 
    details 
  } = useWizardStore();

  const [previewText, setPreviewText] = useState<string>('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    if (currentStep === 'REVIEW' && classification && entities && laws) {
      const timeline: IncidentTimelineEvent[] = [];
      const complaintData: ComplaintData = {
        victim: { name: 'Placeholder Victim', email: '', phone: '', address: '' },
        accused: { knownDetails: '' },
        narrative,
        timeline,
        entities: {
          ...entities.entities,
          ...details,
        },
        classification,
        laws
      };

      const complaint = generateComplaint(complaintData);
      setPreviewText(formatComplaintForDisplay(complaint));
    } else {
      setPreviewText('');
    }
  }, [currentStep, narrative, classification, entities, laws, details]);

  const handleExportPdf = async () => {
    if (!classification || !entities || !laws) return;
    
    setIsGeneratingPdf(true);
    try {
      const timeline: IncidentTimelineEvent[] = [];
      const complaintData: ComplaintData = {
        victim: { name: 'Placeholder Victim', email: '', phone: '', address: '' },
        accused: { knownDetails: '' },
        narrative,
        timeline,
        entities: {
          ...entities.entities,
          ...details,
        },
        classification,
        laws
      };

      const complaint = generateComplaint(complaintData);
      const result = await generatePdf(complaint, { title: 'Cybercrime Complaint' });
      
      if (result.success && result.blob) {
        const url = URL.createObjectURL(result.blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Cyber_Complaint_${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        alert('Failed to generate PDF: ' + result.error);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during PDF generation.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  if (currentStep !== 'REVIEW') {
    return (
      <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-xl">
        <h3 className="text-xl font-medium text-slate-400 mb-2">Complaint Preview Center</h3>
        <p className="text-slate-500 text-sm">
          Complete the Interview Wizard to generate your official complaint and unlock the PDF export.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Generated Complaint</h3>
          <p className="text-sm text-slate-400">Review your document before exporting to PDF.</p>
        </div>
        <button
          onClick={handleExportPdf}
          disabled={isGeneratingPdf}
          className="mt-4 sm:mt-0 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          {isGeneratingPdf ? 'Generating...' : '📥 Export PDF'}
        </button>
      </div>
      
      <div className="p-6 md:p-10 bg-slate-100">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-md text-slate-900 font-serif text-sm leading-relaxed whitespace-pre-wrap">
          {previewText || 'Generating complaint text...'}
        </div>
      </div>
    </div>
  );
}
