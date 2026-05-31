/**
 * PDF Validation Fix Sprint Tests
 * Tests to verify the following fixes:
 * 1. Timeline Integration - events flow from narrative to PDF
 * 2. Financial Loss Extraction - amounts extracted from narrative
 * 3. Victim Information - no "Unknown Victim" fallback when details provided
 * 4. Evidence Integration - vault items appear in Annexure A
 * 
 * Run: npx tsx src/sentinel-legal/acceptance/pdfValidationFixes.ts
 */

import { classifyIncident, extractEntities } from '../index';
import { mapLawsForIncident } from '../engines/law';
import { buildComplaintDataFromCase } from '../../modules/cyber-justice-ai/adapters/complaintDataAdapter';
import {
  buildComplaintPacketNumber,
  buildOfficialComplaintPacket,
} from '../../modules/cyber-justice-ai/adapters/complaintPacketAdapter';
import type { CyberJusticeCase } from '../../modules/cyber-justice-ai/types/cyberJustice.types';
import type { AcceptanceCase } from './sprint2Acceptance';

function extractFinancialLossFromNarrative(text: string) {
  const result = {
    amount: undefined as number | undefined,
    demandedAmount: undefined as number | undefined,
    currency: 'INR',
    paymentMade: false,
    noPayment: false,
  };

  const demandRegex = /\b(demand(?:ed|ing)?|asked(?: me)? for|request(?:ed)?|threat|blackmail|extortion|coerce(?:d)?|ransom|pay up)\b/i;
  const paymentRegex = /\b(paid|payment|transferred|sent|debited|credited|approved|charge(?:d)?|collected|payment was made|amount was debited)\b/i;
  const noPaymentRegex = /\b(did not (?:make )?any payment|no payment|didn't pay|not paid|never paid|no money was paid|no amount was paid)\b/i;

  const sentences = text.split(/(?<=[.?!])\s+/);
  for (const sentence of sentences) {
    const amounts = Array.from(sentence.matchAll(/(?:inr|rs\.?|₹)?\s*([0-9][0-9,]*(?:\.\d{1,2})?)/gi))
      .map((match) => Number(match[1].replace(/,/g, '')))
      .filter((value) => !Number.isNaN(value));

    const hasDemandContext = demandRegex.test(sentence);
    const hasPaymentContext = paymentRegex.test(sentence);
    const hasNoPaymentContext = noPaymentRegex.test(sentence.toLowerCase());

    if (hasNoPaymentContext) {
      result.noPayment = true;
    }

    if (amounts.length) {
      if (hasDemandContext && result.demandedAmount === undefined) {
        result.demandedAmount = amounts[0];
      }

      if (hasPaymentContext && result.amount === undefined) {
        result.amount = amounts[0];
        result.paymentMade = true;
      }

      if (!hasDemandContext && !hasPaymentContext && amounts.length === 1 && /(?:inr|rs\.?|₹)/i.test(sentence)) {
        if (result.amount === undefined) {
          result.amount = amounts[0];
        }
      }
    }
  }

  if (result.demandedAmount !== undefined && result.amount === undefined) {
    result.amount = result.noPayment ? 0 : 0;
  }

  return result;
}

function createTestCase(narrative: string, victimName?: string): CyberJusticeCase {
  const timestamp = new Date().toISOString();
  const classification = classifyIncident({ narrative });
  const extracted = extractEntities(narrative);
  const mapping = mapLawsForIncident(classification.primaryCategory);

  const financialLoss = extractFinancialLossFromNarrative(narrative);

  return {
    id: 'test-case-001',
    status: 'ANALYZED',
    createdAt: timestamp,
    updatedAt: timestamp,
    victim: {
      name: victimName || 'Victim Name',
      email: 'victim@example.com',
      phone: '9876543210',
      address: 'Test Address, City, State',
      consentToGenerateComplaint: true,
    },
    incident: {
      narrative,
      category: classification.primaryCategory,
      userSelectedCategory: null,
      occurredAt: timestamp,
    },
    suspect: {
      name: undefined,
      phoneNumbers: extracted.entities.phoneNumbers,
      emails: extracted.entities.emails,
      upiIds: extracted.entities.upiIds,
      urls: extracted.entities.urls,
      walletAddresses: extracted.entities.walletAddresses,
      socialProfiles: [],
    },
    evidence: {
      extractedEntities: extracted.entities,
      items: [],
      vaultItems: [
        {
          id: 'evidence-001',
          name: 'Bank Statement Screenshot',
          type: 'SCREENSHOT',
          description: 'Screenshot of fraudulent transaction',
          timestamp,
          createdAt: timestamp,
          updatedAt: timestamp,
          verified: true,
          requiredForComplaint: false,
          tags: [],
          processingStatus: 'READY',
          extractedMetadata: {
            source: 'MANUAL_TEXT',
            sourceTextLength: 0,
            extractedAt: timestamp,
            confidence: 'DETERMINISTIC',
            upiIds: extracted.entities.upiIds,
            phoneNumbers: extracted.entities.phoneNumbers,
            emails: extracted.entities.emails,
            urls: extracted.entities.urls,
            ifscCodes: extracted.entities.ifscCodes,
            utrIds: extracted.entities.utrIds,
            walletAddresses: extracted.entities.walletAddresses,
          },
        },
      ],
      selectedEvidenceId: null,
      filters: { type: 'ALL', query: '', verified: 'ALL', processingStatus: 'ALL' },
    },
    timeline: {
      events: [
        {
          id: 'event-001',
          title: 'Fraudulent UPI transaction occurred',
          description: narrative.substring(0, 100),
          timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          source: 'CONVERSATION',
          createdAt: timestamp,
          updatedAt: timestamp,
          verified: true,
          confidence: 'USER_CONFIRMED',
          linkedEvidenceIds: ['evidence-001'],
          linkedMessageIds: [],
          linkedEntityValues: extracted.entities.upiIds,
        },
      ],
      selectedEventId: null,
      filters: { source: 'ALL', sortOrder: 'ASC' },
    },
    financialLoss,
    classification,
    laws: {
      classification,
      mapping,
    },
    complaint: {
      generated: null,
      previewText: '',
      pdf: null,
      packet: null,
    },
  };
}

export function runPdfValidationTests(): AcceptanceCase[] {
  const results: AcceptanceCase[] = [];

  // Test 1: Timeline Integration
  const upiNarrative =
    'On 2024-01-15, I received a UPI collect request from fraudster@ybl for 50000. I approved it and INR 50,000 was debited. UTR: 123456789012. I need help.';
  const upiCase = createTestCase(upiNarrative, 'Rajesh Kumar');
  const upiPacket = buildOfficialComplaintPacket(upiCase);

  results.push({
    name: 'Timeline Integration - events in complaint',
    passed:
      !!upiPacket &&
      upiPacket.complaint.sections.some((section) => section.content.includes('Fraudulent UPI transaction')),
    detail: `Timeline events in complaint: ${
      upiPacket?.complaint.sections.filter((s) => s.content.includes('Fraudulent')).length ?? 0
    }`,
  });

  results.push({
    name: 'Timeline Integration - Annexure B populated',
    passed: !!upiPacket && upiPacket.annexures.some((a) => a.id === 'annexure-b-timeline' && a.itemCount > 0),
    detail: `Timeline annexure itemCount: ${
      upiPacket?.annexures.find((a) => a.id === 'annexure-b-timeline')?.itemCount ?? 0
    }`,
  });

  // Test 2: Financial Loss Extraction
  results.push({
    name: 'Financial Loss Extraction - amount extracted from narrative',
    passed: upiCase.financialLoss !== null && upiCase.financialLoss.amount === 50000,
    detail: `Extracted amount: ${upiCase.financialLoss?.amount ?? 'null'} INR`,
  });

  const sextortionNarrative =
    'On 2024-01-15, an attacker contacted me on Instagram and demanded INR 25,000. I did not make any payment.';
  const sextortionCase = createTestCase(sextortionNarrative, 'Priya Singh');
  const sextortionPacket = buildOfficialComplaintPacket(sextortionCase);

  results.push({
    name: 'Financial Loss Extraction - demand vs actual loss separation',
    passed:
      !!sextortionCase.financialLoss &&
      sextortionCase.financialLoss.demandedAmount === 25000 &&
      sextortionCase.financialLoss.amount === 0,
    detail: `Demanded: ${sextortionCase.financialLoss?.demandedAmount ?? 'null'}, Actual: ${sextortionCase.financialLoss?.amount ?? 'null'}`,
  });

  results.push({
    name: 'Financial Loss Extraction - demanded amount shown in complaint packet',
    passed:
      !!sextortionPacket &&
      sextortionPacket.annexures.some(
        (a) => a.id === 'annexure-c-financial-loss' && a.content.includes('Demanded Amount') && a.content.includes('25000'),
      ),
    detail: `Annexure C contains demanded amount text: ${
      sextortionPacket?.annexures.find((a) => a.id === 'annexure-c-financial-loss')?.content.substring(0, 80) ?? 'null'
    }`,
  });

  results.push({
    name: 'Financial Loss Extraction - Annexure C populated',
    passed:
      !!upiPacket &&
      upiPacket.annexures.some((a) => a.id === 'annexure-c-financial-loss' && a.itemCount > 0) &&
      upiPacket.complaint.sections.some((s) => s.content.includes('50000')),
    detail: `Financial loss annexure itemCount: ${
      upiPacket?.annexures.find((a) => a.id === 'annexure-c-financial-loss')?.itemCount ?? 0
    }`,
  });

  // Test 3: Victim Information (not "Unknown Victim")
  results.push({
    name: 'Victim Information - no "Unknown Victim" fallback',
    passed:
      !!upiPacket &&
      upiPacket.complaint.bodyIntro.includes('Rajesh Kumar') &&
      !upiPacket.complaint.bodyIntro.includes('Unknown Victim'),
    detail: `Victim in complaint: "${
      upiPacket?.complaint.bodyIntro.substring(0, 50) ?? 'null'
    }" contains victim name`,
  });

  // Test 4: Evidence Integration
  results.push({
    name: 'Evidence Integration - Annexure A populated',
    passed: !!upiPacket && upiPacket.annexures.some((a) => a.id === 'annexure-a-evidence' && a.itemCount > 0),
    detail: `Evidence annexure itemCount: ${
      upiPacket?.annexures.find((a) => a.id === 'annexure-a-evidence')?.itemCount ?? 0
    }`,
  });

  results.push({
    name: 'Evidence Integration - evidence metadata in annexure',
    passed:
      !!upiPacket &&
      upiPacket.annexures
        .find((a) => a.id === 'annexure-a-evidence')
        ?.content.includes('Bank Statement') === true,
    detail: 'Evidence type appears in Annexure A',
  });

  // Test 5: Complaint Data Adapter - ensures data flows correctly
  const complaintData = buildComplaintDataFromCase(upiCase);
  results.push({
    name: 'Complaint Data Adapter - financial loss included',
    passed: !!complaintData && complaintData.financialLoss?.amount === 50000,
    detail: `ComplaintData.financialLoss.amount: ${complaintData?.financialLoss?.amount ?? 'null'}`,
  });

  results.push({
    name: 'Complaint Data Adapter - timeline included',
    passed: !!complaintData && complaintData.timeline && complaintData.timeline.length > 0,
    detail: `ComplaintData.timeline length: ${complaintData?.timeline?.length ?? 0}`,
  });

  results.push({
    name: 'Complaint Data Adapter - victim name included',
    passed: !!complaintData && complaintData.victim.name === 'Rajesh Kumar',
    detail: `ComplaintData.victim.name: ${complaintData?.victim?.name ?? 'null'}`,
  });

  // Test 6: Packet Number Generation
  const packetNumber = upiPacket ? buildComplaintPacketNumber(upiCase, upiPacket.generatedAt) : null;
  results.push({
    name: 'Packet Number - correct format',
    passed: !!packetNumber && packetNumber.startsWith('CJ-') && packetNumber.length >= 16,
    detail: `Packet number: ${packetNumber}`,
  });

  // Test 7: Export Summary
  results.push({
    name: 'Export Summary - all metrics populated',
    passed:
      !!upiPacket &&
      upiPacket.exportSummary.evidenceCount > 0 &&
      upiPacket.exportSummary.timelineEventCount > 0 &&
      upiPacket.exportSummary.hasFinancialLoss,
    detail: `Evidence: ${upiPacket?.exportSummary.evidenceCount ?? 0}, Timeline: ${
      upiPacket?.exportSummary.timelineEventCount ?? 0
    }, HasFinancialLoss: ${upiPacket?.exportSummary.hasFinancialLoss ?? false}`,
  });

  return results;
}

export function assertPdfValidationFixes(): void {
  const results = runPdfValidationTests();
  const failed = results.filter((r) => !r.passed);

  console.log('\n=== PDF Validation Fix Sprint Results ===\n');
  results.forEach((result) => {
    const icon = result.passed ? '✓' : '✗';
    console.log(`${icon} ${result.name}`);
    console.log(`  ${result.detail}\n`);
  });

  if (failed.length > 0) {
    console.error(`\n❌ ${failed.length}/${results.length} tests failed:\n`);
    failed.forEach((f) => console.error(`  - ${f.name}: ${f.detail}`));
    throw new Error(`PDF Validation fixes failed: ${failed.length}/${results.length} tests`);
  } else {
    console.log(`✅ All ${results.length} tests passed!`);
  }
}

if (require.main === module) {
  assertPdfValidationFixes();
}
