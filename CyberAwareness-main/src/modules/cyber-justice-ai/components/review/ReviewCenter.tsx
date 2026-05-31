import type { ReactNode } from 'react';
import { Download, FileText, Landmark, Scale, ShieldCheck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import type { CyberJusticeFinancialLoss, CyberJusticeSuspect, CyberJusticeVictim } from '../../types/cyberJustice.types';

// Phase 5 submission assistant panels
import { AuthorityRecommendationPanel } from './AuthorityRecommendationPanel';
import { EmergencyActionsPanel } from './EmergencyActionsPanel';
import { ReportingChannelsPanel } from './ReportingChannelsPanel';
import { SubmissionChecklist } from './SubmissionChecklist';
import { SubmissionPackagePreview } from './SubmissionPackagePreview';
import { NextStepsPanel } from './NextStepsPanel';

function csv(values: string[]) {
  return values.join(', ');
}

function fromCsv(value: string) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ReviewCenter() {
  const { t } = useTranslation();
  const {
    caseFile,
    isGeneratingComplaint,
    updateVictim,
    updateSuspect,
    updateFinancialLoss,
    generateComplaint,
  } = useCyberJusticeStore();
  const classification = caseFile.laws.classification;
  const laws = caseFile.laws.mapping;
  const entities = caseFile.evidence.extractedEntities;
  const loss = caseFile.financialLoss ?? {};
  const packet = caseFile.complaint.packet;

  const handleVictim = (patch: Partial<CyberJusticeVictim>) => updateVictim(patch);
  const handleSuspect = (patch: Partial<CyberJusticeSuspect>) => updateSuspect(patch);
  const handleLoss = (patch: CyberJusticeFinancialLoss) => updateFinancialLoss({ ...loss, ...patch });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">{t('cyberJustice.ui.review.title')}</h2>
        <p className="mt-1 text-sm text-slate-400">{t('cyberJustice.ui.review.description')}</p>
      </div>

      <Section icon={<FileText className="h-5 w-5" />} title="Incident summary">
        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-300">
          {caseFile.incident.narrative || t('cyberJustice.ui.review.noNarrative')}
        </p>
      </Section>

      <Section icon={<Scale className="h-5 w-5" />} title="Classification and laws">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{t('cyberJustice.ui.review.classification')}</p>
            <p className="mt-2 text-lg font-semibold text-cyan-200">
              {classification?.primaryCategory?.replace(/_/g, ' ') ?? t('cyberJustice.ui.review.notAnalyzed')}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {t('cyberJustice.ui.review.confidence')}: {classification ? `${(classification.confidence * 100).toFixed(1)}%` : t('cyberJustice.ui.review.pending')}
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{t('cyberJustice.ui.review.mappedSections')}</p>
            <p className="mt-2 text-2xl font-bold text-cyan-200">
              {(laws?.lawMapping.bnsSections.length ?? 0) +
                (laws?.lawMapping.itActSections.length ?? 0) +
                (laws?.lawMapping.ipcSections.length ?? 0)}
            </p>
          </div>
        </div>
      </Section>

      <Section icon={<ShieldCheck className="h-5 w-5" />} title={t('cyberJustice.ui.review.evidenceInventory')}>
        <div className="grid gap-3">
          {caseFile.evidence.vaultItems.map((item) => (
            <div key={item.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{item.type.replace(/_/g, ' ')}</p>
                  <p className="mt-1 font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.description || t('cyberJustice.ui.review.noDescription')}</p>
                </div>
                <span className={`text-xs font-semibold ${item.verified ? 'text-emerald-300' : 'text-amber-300'}`}>
                  {item.verified ? t('cyberJustice.ui.review.verified') : t('cyberJustice.ui.review.pendingReview')}
                </span>
              </div>
            </div>
          ))}
          {!caseFile.evidence.vaultItems.length && <Empty label={t('cyberJustice.ui.review.noEvidenceItems')} /> }
        </div>
      </Section>

      <Section icon={<Landmark className="h-5 w-5" />} title={t('cyberJustice.ui.review.financialLoss')}>
        <div className="grid gap-4 lg:grid-cols-3">
          <TextInput label="Amount" value={loss.amount?.toString() ?? ''} onChange={(value) => handleLoss({ amount: Number(value) || 0 })} />
          <TextInput label="Currency" value={loss.currency ?? 'INR'} onChange={(value) => handleLoss({ currency: value })} />
          <TextInput label="Bank" value={loss.bankName ?? ''} onChange={(value) => handleLoss({ bankName: value })} />
          <TextInput label="Transaction ID" value={loss.transactionId ?? ''} onChange={(value) => handleLoss({ transactionId: value })} />
          <TextInput label="Payment Method" value={loss.paymentMethod ?? ''} onChange={(value) => handleLoss({ paymentMethod: value as CyberJusticeFinancialLoss['paymentMethod'] })} />
          <TextInput label="Recovery Status" value={loss.recoveryStatus ?? ''} onChange={(value) => handleLoss({ recoveryStatus: value as CyberJusticeFinancialLoss['recoveryStatus'] })} />
        </div>
      </Section>

      <Section icon={<Users className="h-5 w-5" />} title="Victim and accused details">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-950 p-4">
            <h3 className="font-semibold text-white">Victim</h3>
            <TextInput label="Name" value={caseFile.victim.name ?? ''} onChange={(value) => handleVictim({ name: value })} />
            <TextInput label="Email" value={caseFile.victim.email ?? ''} onChange={(value) => handleVictim({ email: value })} />
            <TextInput label="Phone" value={caseFile.victim.phone ?? ''} onChange={(value) => handleVictim({ phone: value })} />
            <TextInput label="Address" value={caseFile.victim.address ?? ''} onChange={(value) => handleVictim({ address: value })} />
          </div>
          <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-950 p-4">
            <h3 className="font-semibold text-white">Accused</h3>
            <TextInput label="Name" value={caseFile.suspect.name ?? ''} onChange={(value) => handleSuspect({ name: value })} />
            <TextInput label="Phone Numbers" value={csv(caseFile.suspect.phoneNumbers)} onChange={(value) => handleSuspect({ phoneNumbers: fromCsv(value) })} />
            <TextInput label="Emails" value={csv(caseFile.suspect.emails)} onChange={(value) => handleSuspect({ emails: fromCsv(value) })} />
            <TextInput label="UPI IDs" value={csv(caseFile.suspect.upiIds)} onChange={(value) => handleSuspect({ upiIds: fromCsv(value) })} />
            <TextInput label="Known Details" value={caseFile.suspect.knownDetails ?? ''} onChange={(value) => handleSuspect({ knownDetails: value })} />
          </div>
        </div>
      </Section>

      <Section icon={<FileText className="h-5 w-5" />} title="Timeline">
        <div className="space-y-3">
          {caseFile.timeline.events.map((event) => (
            <div key={event.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{event.source.replace(/_/g, ' ')}</p>
              <p className="mt-1 font-semibold text-white">{event.title}</p>
              <p className="mt-1 text-sm text-slate-400">{event.description}</p>
              <p className="mt-2 text-xs text-slate-500">{event.timestamp}</p>
            </div>
          ))}
          {!caseFile.timeline.events.length && <Empty label="No timeline events added." />}
        </div>
      </Section>

      <Section icon={<ShieldCheck className="h-5 w-5" />} title="Extracted entities">
        <div className="grid gap-3 lg:grid-cols-2">
          <EntityGroup label="UPI IDs" values={entities.upiIds} />
          <EntityGroup label="Phone Numbers" values={entities.phoneNumbers} />
          <EntityGroup label="Emails" values={entities.emails} />
          <EntityGroup label="URLs" values={entities.urls} />
          <EntityGroup label="IFSC" values={entities.ifscCodes} />
          <EntityGroup label="UTR/RRN" values={entities.utrIds} />
          <EntityGroup label="Wallet IDs" values={entities.walletAddresses} />
        </div>
      </Section>

      {/* Phase 5: Submission assistant panels */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <EmergencyActionsPanel />
          <AuthorityRecommendationPanel />
          <ReportingChannelsPanel />
        </div>
        <div className="space-y-4">
          <SubmissionChecklist />
          <SubmissionPackagePreview />
          <NextStepsPanel />
        </div>
      </div>

      <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-cyan-100">Official packet generation</h3>
            <p className="mt-1 text-sm text-cyan-100/75">
              Creates a complaint packet with cover page, annexures, page numbers, and signature block.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={generateComplaint}
              disabled={isGeneratingComplaint || !classification || !laws}
              className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGeneratingComplaint ? 'Generating...' : 'Generate Packet'}
            </button>
            {caseFile.complaint.pdf?.success && caseFile.complaint.pdf.blob && (
              <button
                type="button"
                onClick={() => downloadPacketPdf(caseFile.complaint.pdf?.blob, packet?.packetNumber)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-400/10"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
            )}
          </div>
        </div>
      </div>

      {packet && (
        <Section icon={<FileText className="h-5 w-5" />} title="Export summary">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryStat label="Packet Number" value={packet.exportSummary.packetNumber} />
            <SummaryStat label="Annexures" value={packet.exportSummary.annexureCount.toString()} />
            <SummaryStat label="Evidence Items" value={packet.exportSummary.evidenceCount.toString()} />
            <SummaryStat label="Timeline Events" value={packet.exportSummary.timelineEventCount.toString()} />
            <SummaryStat label="Mapped Laws" value={packet.exportSummary.lawCount.toString()} />
            <SummaryStat label="Financial Loss" value={packet.exportSummary.hasFinancialLoss ? 'Included' : 'Not recorded'} />
            <SummaryStat label="PDF Status" value={packet.exportSummary.pdfReady ? 'Ready' : 'Pending'} />
            <SummaryStat label="Generated" value={packet.exportSummary.generatedAt} />
          </div>
          {caseFile.complaint.pdf?.error && (
            <p className="mt-4 rounded-lg border border-rose-400/20 bg-rose-400/10 p-3 text-sm text-rose-100">
              PDF error: {caseFile.complaint.pdf.error}
            </p>
          )}
        </Section>
      )}

      {packet && (
        <Section icon={<ShieldCheck className="h-5 w-5" />} title="Annexure preview">
          <div className="space-y-3">
            {packet.annexures.map((annexure) => (
              <details key={annexure.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-cyan-100">
                  {annexure.title} ({annexure.itemCount})
                </summary>
                <pre className="mt-3 max-h-[260px] overflow-auto whitespace-pre-wrap text-sm leading-6 text-slate-300">
                  {annexure.content}
                </pre>
              </details>
            ))}
          </div>
        </Section>
      )}

      {caseFile.complaint.previewText && (
        <Section icon={<FileText className="h-5 w-5" />} title="Packet preview">
          <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm leading-6 text-slate-300">
            {caseFile.complaint.previewText}
          </pre>
        </Section>
      )}
    </div>
  );
}

function downloadPacketPdf(blob: Blob | undefined, packetNumber: string | undefined) {
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${packetNumber || 'cyber-justice-complaint-packet'}.pdf`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function Section({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </section>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
      />
    </label>
  );
}

function EntityGroup({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.length ? (
          values.map((value) => (
            <span key={value} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
              {value}
            </span>
          ))
        ) : (
          <span className="text-sm text-slate-500">None found</span>
        )}
      </div>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return <div className="rounded-lg border border-dashed border-slate-700 p-4 text-center text-sm text-slate-500">{label}</div>;
}
