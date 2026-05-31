import type { FinancialLoss } from '../../../sentinel-legal/generators/complaintGenerator';
import type { ComplaintAnnexure } from '../types/complaintPacket.types';
import type { CyberJusticeFinancialLoss } from '../types/cyberJustice.types';

import i18n from '../../../i18n';

export function buildFinancialLoss(loss: CyberJusticeFinancialLoss | null): FinancialLoss | undefined {
  if (!loss || typeof loss.amount !== 'number') return undefined;

  return {
    amount: loss.amount,
    currency: loss.currency || 'INR',
    demandedAmount: loss.demandedAmount,
    transactionId: loss.transactionId,
    bankName: loss.bankName,
  };
}

export function buildFinancialLossSummary(loss: CyberJusticeFinancialLoss | null, lang?: string): string {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  if (!loss) return t('complaint.financial.none') || 'No financial loss details provided.';

  const lines = [
    `${t('complaint.financial.actualLoss') || 'Actual Loss'}: ${loss.currency || 'INR'} ${loss.amount ?? 0}`,
    loss.demandedAmount !== undefined ? `${t('complaint.financial.demandedAmount') || 'Demanded Amount'}: ${loss.currency || 'INR'} ${loss.demandedAmount}` : null,
    loss.transactionId ? `${t('complaint.financial.transactionId') || 'Transaction ID'}: ${loss.transactionId}` : null,
    loss.bankName ? `${t('complaint.financial.bank') || 'Bank'}: ${loss.bankName}` : null,
    loss.paymentMethod ? `${t('complaint.financial.paymentMethod') || 'Payment Method'}: ${loss.paymentMethod.replace(/_/g, ' ')}` : null,
    loss.occurredAt ? `${t('complaint.financial.occurredAt') || 'Occurred At'}: ${loss.occurredAt}` : null,
    loss.recoveryStatus ? `${t('complaint.financial.recoveryStatus') || 'Recovery Status'}: ${loss.recoveryStatus.replace(/_/g, ' ')}` : null,
  ].filter(Boolean);

  return lines.join('\n');
}

export function buildFinancialLossAnnexure(loss: CyberJusticeFinancialLoss | null, lang?: string): string {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  if (!loss) return t('complaint.financial.noneAnnexure') || 'No financial loss was recorded for this case.';

  return [
    `${t('complaint.financial.actualLoss') || 'Actual Loss'}: ${loss.currency || 'INR'} ${loss.amount ?? 0}`,
    loss.demandedAmount !== undefined ? `${t('complaint.financial.demandedAmount') || 'Demanded Amount'}: ${loss.currency || 'INR'} ${loss.demandedAmount}` : null,
    `${t('complaint.financial.transactionIds') || 'Transaction IDs'}: ${loss.transactionId || (t('complaint.notProvided') || 'Not provided')}`,
    `${t('complaint.financial.bank') || 'Bank'}: ${loss.bankName || (t('complaint.notProvided') || 'Not provided')}`,
    `${t('complaint.financial.recoveryStatus') || 'Recovery Status'}: ${loss.recoveryStatus ? loss.recoveryStatus.replace(/_/g, ' ') : (t('complaint.notProvided') || 'Not provided')}`,
    loss.paymentMethod ? `${t('complaint.financial.paymentMethod') || 'Payment Method'}: ${loss.paymentMethod.replace(/_/g, ' ')}` : null,
    loss.occurredAt ? `${t('complaint.financial.occurredAt') || 'Occurred At'}: ${loss.occurredAt}` : null,
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildFinancialLossComplaintAnnexure(loss: CyberJusticeFinancialLoss | null, lang?: string): ComplaintAnnexure {
  const t = lang ? i18n.getFixedT(lang) : i18n.t.bind(i18n);
  return {
    id: 'annexure-c-financial-loss',
    kind: 'FINANCIAL_LOSS',
    title: `${t('complaint.annexurePrefix') || 'Annexure C'} - ${t('complaint.financial.annexureTitle') || 'Financial Loss'}`,
    content: buildFinancialLossAnnexure(loss, lang),
    itemCount: loss ? 1 : 0,
  };
}
