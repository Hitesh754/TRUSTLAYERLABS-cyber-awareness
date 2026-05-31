import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Workflow } from './components/Workflow';
import { InterviewWizard } from '../../modules/incident-wizard/components/InterviewWizard';
import { ComplaintPreview } from './components/ComplaintPreview';

export default function LegalAICommandCenter() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Capabilities />
        <Workflow />
        
        <section id="interview-wizard" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Start Incident Report</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Follow our guided interview process to classify your incident, map applicable laws, 
              and generate a formal complaint.
            </p>
          </div>
          <InterviewWizard />
        </section>

        <section id="complaint-preview" className="scroll-mt-24">
          <ComplaintPreview />
        </section>
      </div>
    </div>
  );
}
