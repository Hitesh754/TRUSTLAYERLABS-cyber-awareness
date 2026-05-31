import i18n from '../../../i18n';
import type { GeneratedComplaint } from '../../../sentinel-legal';
import type { ComplaintAnnexure } from '../types/complaintPacket.types';
import type { EvidenceVaultItem, EvidenceType } from '../types/evidenceVault.types';

export function buildEvidenceAnnexureItemCount(items: EvidenceVaultItem[]): number {
  return items.length;
}

export function buildEvidenceAnnexure(items: EvidenceVaultItem[], lang?: string): string {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  const evidenceLabels: Record<EvidenceType, string> = {
    SCREENSHOT: t('complaint.evidenceLabel.screenshots') || 'Screenshots',
    PDF: t('complaint.evidenceLabel.pdfs') || 'PDFs',
    AUDIO: t('complaint.evidenceLabel.audio') || 'Audio',
    VIDEO: t('complaint.evidenceLabel.video') || 'Video',
    CHAT: t('complaint.evidenceLabel.chats') || 'Chats',
    EMAIL: t('complaint.evidenceLabel.emails') || 'Emails',
    BANK_STATEMENT: t('complaint.evidenceLabel.bankStatements') || 'Bank Statements',
  } as Record<EvidenceType, string>;

  function metadataSummary(item: EvidenceVaultItem): string {
    const metadata = item.extractedMetadata;
    const lines = [
      metadata.upiIds.length ? `${t('complaint.evidenceMeta.upiIds') || 'UPI IDs'}: ${metadata.upiIds.join(', ')}` : null,
      metadata.phoneNumbers.length ? `${t('complaint.evidenceMeta.phoneNumbers') || 'Phone Numbers'}: ${metadata.phoneNumbers.join(', ')}` : null,
      metadata.emails.length ? `${t('complaint.evidenceMeta.emails') || 'Emails'}: ${metadata.emails.join(', ')}` : null,
      metadata.urls.length ? `${t('complaint.evidenceMeta.urls') || 'URLs'}: ${metadata.urls.join(', ')}` : null,
      metadata.ifscCodes.length ? `${t('complaint.evidenceMeta.ifsc') || 'IFSC Codes'}: ${metadata.ifscCodes.join(', ')}` : null,
      metadata.utrIds.length ? `${t('complaint.evidenceMeta.utr') || 'UTR/RRN'}: ${metadata.utrIds.join(', ')}` : null,
      metadata.walletAddresses.length ? `${t('complaint.evidenceMeta.wallets') || 'Wallet IDs'}: ${metadata.walletAddresses.join(', ')}` : null,
    ].filter(Boolean);

    return lines.length ? lines.join('\n') : (t('complaint.evidenceMeta.none') || 'No identifiers extracted from this item.');
  }

  if (!items.length) return t('complaint.evidenceNone') || 'No uploaded evidence items were added to the vault.';

  return (Object.keys(evidenceLabels) as EvidenceType[])
    .map((type) => {
      const group = items.filter((item) => item.type === type);
      if (!group.length) return null;

      const itemText = group
        .map(
          (item, index) =>
            `${index + 1}. ${item.name}\n${t('complaint.evidenceMeta.idLabel') || 'Evidence ID'}: ${item.id}\n${t('complaint.evidenceMeta.typeLabel') || 'Type'}: ${item.type.replace(/_/g, ' ')}\n${t('complaint.evidenceMeta.timestampLabel') || 'Timestamp'}: ${item.timestamp}\n${t('complaint.evidenceMeta.statusLabel') || 'Status'}: ${
              item.verified ? (t('complaint.evidenceMeta.verified') || 'Verified') : (t('complaint.evidenceMeta.pending') || 'Pending Review')
            }\n${t('complaint.evidenceMeta.descriptionLabel') || 'Description'}: ${item.description || (t('complaint.evidenceMeta.noDescription') || 'No description provided.')}\n${t('complaint.evidenceMeta.extractedMetadataLabel') || 'Extracted Metadata'}:\n${metadataSummary(item)}`,
        )
        .join('\n\n');

      return `${evidenceLabels[type]}\n${itemText}`;
    })
    .filter(Boolean)
    .join('\n\n');
}

export function buildEvidenceComplaintAnnexure(items: EvidenceVaultItem[], lang?: string): ComplaintAnnexure {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  return {
    id: 'annexure-a-evidence',
    kind: 'EVIDENCE',
    title: `${t('complaint.annexurePrefix') || 'Annexure A'} - ${t('complaint.evidenceAnnexureTitle') || 'Evidence Inventory'}`,
    content: buildEvidenceAnnexure(items, lang),
    itemCount: buildEvidenceAnnexureItemCount(items),
  };
}

export function appendEvidenceAnnexure(complaint: GeneratedComplaint, items: EvidenceVaultItem[], lang?: string): GeneratedComplaint {
  return {
    ...complaint,
    sections: [
      ...complaint.sections,
      {
        heading: (lang ? i18n.getFixedT(lang)('complaint.evidenceAnnexureHeading') : i18n.t('complaint.evidenceAnnexureHeading')) || 'Evidence Annexure',
        content: buildEvidenceAnnexure(items, lang),
      },
    ],
  };
}
