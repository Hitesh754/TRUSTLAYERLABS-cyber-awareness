const workflowSteps = [
  { step: '1', title: 'Interview Wizard', desc: 'Detail the incident using our guided process.' },
  { step: '2', title: 'Classification Engine', desc: 'AI maps your narrative to specific crime categories.' },
  { step: '3', title: 'Legal Mapping', desc: 'Extracts entities and maps relevant IPC, BNS & IT Act laws.' },
  { step: '4', title: 'Complaint Builder', desc: 'Generates a structured, professional legal complaint.' },
  { step: '5', title: 'PDF Generation', desc: 'Exports a ready-to-submit official document.' }
];

export function Workflow() {
  return (
    <section className="py-12 border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Command Center Workflow</h2>
        <p className="text-slate-400">A seamless path from incident to official legal complaint.</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-start justify-between relative max-w-5xl mx-auto">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-800" />
        
        {workflowSteps.map((w, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 px-2 mb-8 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold mb-4 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              {w.step}
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">{w.title}</h4>
            <p className="text-xs text-slate-400">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
