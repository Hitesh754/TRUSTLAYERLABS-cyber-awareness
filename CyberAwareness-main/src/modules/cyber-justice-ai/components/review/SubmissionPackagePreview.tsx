// Note: no direct React import required with automatic JSX runtime
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';

export function SubmissionPackagePreview() {
  const { caseFile } = useCyberJusticeStore();
  const packet = caseFile.complaint.packet;

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <h3 className="font-semibold">Submission package preview</h3>
      </div>

      {!packet && (
        <div className="text-sm text-slate-400">No official complaint packet generated yet. Use "Generate Packet" to create an export-ready complaint packet.</div>
      )}

      {packet && (
        <div className="space-y-3">
          <div className="rounded-md border border-slate-800 bg-slate-950 p-3">
            <div className="text-sm font-semibold text-white">Packet number</div>
            <div className="text-xs text-slate-400">{packet.packetNumber}</div>
          </div>
          <div className="rounded-md border border-slate-800 bg-slate-950 p-3">
            <div className="text-sm font-semibold text-white">Annexures</div>
            <div className="text-xs text-slate-400">{packet.annexures.map((a) => a.title).join(', ')}</div>
          </div>
          <div className="rounded-md border border-slate-800 bg-slate-950 p-3">
            <div className="text-sm font-semibold text-white">Summary</div>
            <div className="text-xs text-slate-400">{packet.exportSummary && `${packet.exportSummary.evidenceCount} evidence items • ${packet.exportSummary.timelineEventCount} timeline events`}</div>
          </div>
        </div>
      )}
    </section>
  );
}
