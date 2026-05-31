export function Hero() {
  return (
    <div className="bg-slate-900 border-b border-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          Sentinel Legal AI Command Center
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          AI-Powered <span className="text-cyan-400">Cybercrime</span> Reporting
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transforming cybercrime victims into informed complainants through legal intelligence, 
          structured reporting, and accessible digital justice.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#interview-wizard" className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            Start Complaint Process
          </a>
          <a href="#capabilities" className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700">
            View Capabilities
          </a>
        </div>
      </div>
    </div>
  );
}
