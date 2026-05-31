import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Database } from 'lucide-react';
import { ScamType, scamCategories } from '../../data/scamDatabase';

interface ScamCardProps {
  scam: ScamType;
}

const severityColors = {
  low: { bg: 'rgba(74,222,128,0.14)', color: '#4ade80', border: 'rgba(74,222,128,0.3)' },
  medium: { bg: 'rgba(250,204,21,0.14)', color: '#facc15', border: 'rgba(250,204,21,0.3)' },
  high: { bg: 'rgba(249,115,22,0.14)', color: '#f97316', border: 'rgba(249,115,22,0.3)' },
  critical: { bg: 'rgba(239,68,68,0.14)', color: '#ef4444', border: 'rgba(239,68,68,0.3)' }
};

export default function ScamCard({ scam }: ScamCardProps) {
  const severity = severityColors[scam.severity];
  const categoryInfo = scamCategories[scam.category];
  const exampleCount = scam.examples?.length ?? 0;

  return (
    <Link
      to={`/scam-library/${scam.id}`}
      className="group relative block overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-slate-900/80 p-6 shadow-[0_0_45px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_65px_rgba(34,211,238,0.22)] hover:border-cyan-400/30"
    >
      <div className="absolute inset-x-6 top-6 h-px bg-cyan-400/10 blur-sm" />

      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
            {categoryInfo.icon}
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-300/70">Intelligence File</p>
            <p className="text-sm font-semibold text-slate-100">{categoryInfo.name}</p>
          </div>
        </div>

        <span
          className="text-[10px] font-semibold uppercase tracking-[0.35em] rounded-full px-3 py-1"
          style={{ background: severity.bg, color: severity.color, border: `1px solid ${severity.border}` }}
        >
          {scam.severity}
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
          {scam.name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-400 line-clamp-3">
          {scam.description}
        </p>
      </div>

      <div className="mt-5 grid gap-3 text-xs sm:grid-cols-2">
        <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 px-4 py-3">
          <p className="text-slate-400">Indicators</p>
          <p className="mt-2 font-semibold text-white">{scam.commonIndicators.length}</p>
        </div>
        <div className="rounded-3xl border border-cyan-500/10 bg-slate-950/80 px-4 py-3">
          <p className="text-slate-400">Archive Tags</p>
          <p className="mt-2 font-semibold text-white">{categoryInfo.icon} {categoryInfo.name}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/10 bg-cyan-500/5 px-3 py-1">
          <Shield className="h-3 w-3 text-cyan-300" /> Threat classification
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/90 px-3 py-1">
          <Database className="h-3 w-3 text-cyan-300" /> {exampleCount} example{exampleCount === 1 ? '' : 's'}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Launch Archive</span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
          Open file <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}