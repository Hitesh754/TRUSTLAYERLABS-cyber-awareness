/**
 * Sprint 2 acceptance tests — run: npx tsx src/sentinel-legal/acceptance/sprint2Acceptance.ts
 */
import { classifyIncident, extractEntities, AUTO_CLASSIFY_THRESHOLD } from '../index';
import { mapLawsForIncident } from '../engines/law';

export interface AcceptanceCase {
  name: string;
  passed: boolean;
  detail: string;
}

export function runSprint2Acceptance(): AcceptanceCase[] {
  const results: AcceptanceCase[] = [];

  const entitySample =
    'Victim paid 5000 INR to fraudster@ybl via UPI. UTR: 123456789012. Call +91 9876543210. IFSC HDFC0001234. Email scam@fake.com https://evil.example/login Wallet 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
  const entities = extractEntities(entitySample);
  results.push({
    name: 'entityExtractor — UPI, phone, UTR, IFSC, URL, email, wallet',
    passed:
      entities.entities.upiIds.length >= 1 &&
      entities.entities.phoneNumbers.some((p) => p.length === 10) &&
      entities.entities.utrIds.length >= 1 &&
      entities.entities.ifscCodes.includes('HDFC0001234') &&
      entities.entities.urls.length >= 1 &&
      entities.entities.emails.includes('scam@fake.com') &&
      entities.entities.walletAddresses.length >= 1,
    detail: JSON.stringify(entities.entities),
  });

  const upiNarrative =
    'A fraudster sent a collect request on PhonePe. I approved and 25000 was debited to merchant@paytm. UTR 987654321098. I need help.';
  const upiResult = classifyIncident({ narrative: upiNarrative });
  results.push({
    name: 'classification — UPI fraud (auto)',
    passed: upiResult.primaryCategory === 'UPI_FRAUD' && upiResult.locked && upiResult.confidence >= AUTO_CLASSIFY_THRESHOLD,
    detail: `${upiResult.primaryCategory} confidence=${upiResult.confidence.toFixed(2)} path=${upiResult.classificationPath}`,
  });

  const cryptoNarrative =
    'They asked me to connect MetaMask and approve a token. My Ethereum wallet was drained. Transaction hash 0xabc123 not real but seed phrase was stolen.';
  const cryptoResult = classifyIncident({ narrative: cryptoNarrative });
  results.push({
    name: 'classification — crypto fraud',
    passed: cryptoResult.primaryCategory === 'CRYPTO_FRAUD',
    detail: `${cryptoResult.primaryCategory} confidence=${cryptoResult.confidence.toFixed(2)} top3=${cryptoResult.rankedCategories.slice(0, 3).map((r) => r.category).join(',')}`,
  });

  const vagueNarrative = 'xqz mnp qwr';
  const vagueResult = classifyIncident({ narrative: vagueNarrative });
  results.push({
    name: 'classification — low confidence → manual path',
    passed: !vagueResult.locked && vagueResult.classificationPath === 'manual',
    detail: `confidence=${vagueResult.confidence.toFixed(2)} path=${vagueResult.classificationPath}`,
  });

  const manualResult = classifyIncident({
    narrative: vagueNarrative,
    manualCategory: 'PHISHING',
  });
  results.push({
    name: 'classification — manual category override',
    passed: manualResult.primaryCategory === 'PHISHING' && manualResult.classificationPath === 'manual',
    detail: `category=${manualResult.primaryCategory}`,
  });

  results.push({
    name: 'classification — ranks all 15 categories',
    passed: upiResult.rankedCategories.length === 15,
    detail: `ranked=${upiResult.rankedCategories.length}`,
  });

  const laws = mapLawsForIncident('UPI_FRAUD');
  results.push({
    name: 'lawMappingEngine — UPI_FRAUD sections',
    passed:
      laws.lawMapping.ipcSections.length >= 2 &&
      laws.lawMapping.bnsSections.length >= 2 &&
      laws.lawMapping.itActSections.length >= 2 &&
      laws.ipcBnsResolution.pairs.length >= 2,
    detail: `IPC=${laws.lawMapping.ipcSections.map((s) => s.section).join(',')} BNS=${laws.lawMapping.bnsSections.map((s) => s.section).join(',')}`,
  });

  const ipc504Bridge = laws.ipcBnsResolution.pairs.some((p) => p.ipcSection === '419');
  results.push({
    name: 'ipcBnsResolver — IPC→BNS pairs for UPI',
    passed: ipc504Bridge,
    detail: JSON.stringify(laws.ipcBnsResolution.pairs),
  });

  return results;
}

export function assertSprint2Acceptance(): void {
  const results = runSprint2Acceptance();
  const failed = results.filter((r) => !r.passed);
  if (failed.length > 0) {
    throw new Error(
      `Sprint 2 acceptance failed:\n${failed.map((f) => `- ${f.name}: ${f.detail}`).join('\n')}`,
    );
  }
}

if (process.argv[1]?.includes('sprint2Acceptance')) {
  const results = runSprint2Acceptance();
  for (const r of results) {
    console.log(`${r.passed ? 'PASS' : 'FAIL'} — ${r.name}`);
    console.log(`  ${r.detail}\n`);
  }
  const failed = results.filter((r) => !r.passed);
  process.exit(failed.length === 0 ? 0 : 1);
}
