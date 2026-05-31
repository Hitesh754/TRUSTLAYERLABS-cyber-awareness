// Static next-steps panel — no store access required

export function NextStepsPanel() {
  // Next steps panel currently shows static recommendations.

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <h3 className="font-semibold">Next steps (recommended)</h3>
      </div>

      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
        <li>Preserve all evidence (screenshots, messages, transaction IDs).</li>
        <li>Contact your bank or payment provider if financial loss is present.</li>
        <li>File an online complaint at the National Cyber Crime Portal and note the complaint ID.</li>
        <li>Visit or contact your local cyber crime police station with printed evidence and complaint ID.</li>
        <li>If the incident involves data breach or hacking, also report to CERT-In for technical guidance.</li>
        <li>Keep this packet and avoid sharing sensitive details publicly.</li>
      </ol>

      <div className="mt-4 text-xs text-slate-500">Official guidance only — do not auto-submit or share this packet without reviewing. Use these channels to report; a human-led follow-up is recommended.</div>
    </section>
  );
}
