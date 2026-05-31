const capabilitiesList = [
  {
    icon: '⚖️',
    title: 'Incident Intelligence Engine',
    description: 'Guided complaint interview, dynamic question flow, and automated incident categorization.'
  },
  {
    icon: '📜',
    title: 'Cyber Law Intelligence',
    description: 'Maps applicable IPC, BNS, and IT Act sections with punishment references.'
  },
  {
    icon: '🔍',
    title: 'Evidence Intelligence',
    description: 'Automatic extraction of phone numbers, UPI IDs, emails, URLs, and wallets.'
  },
  {
    icon: '📄',
    title: 'Complaint Generation',
    description: 'Professional complaint drafting including timelines and evidence summaries.'
  },
  {
    icon: '📥',
    title: 'PDF Export Center',
    description: 'Generate structured, multi-page official legal documents ready for submission.'
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
        <p className="text-slate-400">Powerful intelligence systems working together to build your legal report.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilitiesList.map((cap, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
            <div className="text-3xl mb-4">{cap.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
