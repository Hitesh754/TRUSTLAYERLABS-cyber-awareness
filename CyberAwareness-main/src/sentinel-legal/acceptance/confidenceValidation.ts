/**
 * Confidence Scoring Post-Fix Validation
 * Tests 6 representative narratives to verify confidence improvements
 */

import { classifyIncident } from '../engines/rules/classifyIncident';
import { extractEntities } from '../engines/rules/entityExtractor';
import type { ClassificationResult } from '../types/classification.types';

interface ValidationResult {
  caseId: string;
  narrative: string;
  category: string;
  confidence: number;
  confidencePercent: string;
  topThreeScores: Array<{ category: string; score: number }>;
  extractedEntities: ReturnType<typeof extractEntities>['entities'];
  appliedBoosts: string[];
  flags: string[];
}

const TEST_NARRATIVES = {
  upi_fraud: `On 2024-01-15, I received a UPI collect request from fraudster@ybl for 50000. 
    I accidentally approved it thinking it was legitimate. INR 50,000 was immediately 
    debited from my account. The transaction reference UTR is 123456789012. I contacted 
    my bank but they said it's already processed. I need help filing a complaint.`,

  sextortion: `An account on Instagram contacted me saying they were interested. After chatting for days, 
    they convinced me to do a private video call. During the call, they secretly recorded me. 
    Later they threatened to share the video on my social media unless I paid them INR 25,000. 
    I was terrified but I did not make any payment. Now they're threatening to contact my family.`,

  phishing: `I received an email saying my bank account needs verification. The email had a link 
    to bankverify-secure.com that looked exactly like my actual bank website. They asked me to 
    enter my username, password, and OTP. I got suspicious and checked the actual bank website 
    URL. I realized this was fake and didn't enter anything. The phishing URL was 
    https://bankverify-secure.com/login.php.`,

  identity_theft: `Someone created a fake Facebook profile using my photos and my name. 
    They're impersonating me and contacting my friends asking them to send money to a UPI ID 
    goldensparrow@okhdfcbank saying it's for an urgent need. My friends started calling me 
    asking if I really needed money. I immediately noticed and deleted the fake account. 
    My real email is john.doe@gmail.com.`,

  deepfake_scam: `A video clip appeared on WhatsApp purporting to show me in a compromising situation. 
    My friends started asking questions. I realized it was a deepfake - my face was manipulated onto 
    someone else's body. The attackers then sent me a message saying they'd share it with my family 
    unless I paid them money. The video was clearly fake (bad quality, unnatural movements) but many 
    people believed it initially. I have the contact number 9876543210 of one of the attackers.`,

  mixed_deepfake_identity_extortion: `Someone created a fake profile impersonating me with a deepfaked video. 
    They're using it to contact my contacts on email (contact@fakeme.com) with the video, claiming 
    to be me and asking them to send money to a wallet address 1A1z7agoat9wP8R8UU5Nh5STiFCKhXzMbm. 
    They sent me a demand for INR 50,000 or they'll publicly share the fake video on all my social 
    media and contact my employer. They mentioned they recorded me on a video call and have leverage. 
    I have not paid anything. The UTR they mentioned for a "test payment" is 999888777666. 
    My phone number is 9123456789.`,
};

function getAppliedBoosts(result: ClassificationResult): string[] {
  const boosts: string[] = [];
  const primary = result.primaryCategory;
  const firstKey = Object.keys(TEST_NARRATIVES)[0] as keyof typeof TEST_NARRATIVES;
  const extracted = extractEntities(TEST_NARRATIVES[firstKey]).entities;

  // Analyze what boosts would have been applied
  if (
    primary === 'UPI_FRAUD' &&
    extracted.upiIds.length > 0 &&
    extracted.utrIds.length > 0
  ) {
    boosts.push('UPI_FRAUD: UPI ID + UTR combination (+1.2)');
  }

  if (primary === 'CRYPTO_FRAUD' && extracted.walletAddresses.length > 0) {
    boosts.push('CRYPTO_FRAUD: Wallet address detected (+1.0)');
  }

  if (
    primary === 'PHISHING' &&
    extracted.urls.length > 0 &&
    extracted.emails.length > 0
  ) {
    boosts.push('PHISHING: URLs + Emails combination (+0.9)');
  }

  if (
    primary === 'SEXTORTION' &&
    extracted.phoneNumbers.length > 0
  ) {
    boosts.push('SEXTORTION: Phone number in threat context (+0.3)');
  }

  if (primary === 'IDENTITY_THEFT' && extracted.emails.length > 0) {
    boosts.push('IDENTITY_THEFT: Impersonation with email indicators');
  }

  if (
    primary === 'DEEPFAKE_IMPERSONATION' &&
    extracted.phoneNumbers.length > 0
  ) {
    boosts.push('DEEPFAKE_IMPERSONATION: Video + contact indicators');
  }

  // Investment scam / crypto wallet
  if (primary === 'INVESTMENT_SCAM' && extracted.walletAddresses.length > 0) {
    boosts.push('INVESTMENT_SCAM: Crypto wallet detected (+0.5)');
  }

  return boosts.length > 0 ? boosts : ['(No category-specific boosts applied)'];
}

export function runConfidenceValidation(): ValidationResult[] {
  const results: ValidationResult[] = [];

  Object.entries(TEST_NARRATIVES).forEach(([caseId, narrative]) => {
    const classification = classifyIncident({ narrative });
    const extracted = extractEntities(narrative).entities;
    const ranked = classification.rankedCategories;
    const topThree = ranked.slice(0, 3).map((r) => ({
      category: r.category,
      score: parseFloat(r.score.toFixed(4)),
    }));

    const result: ValidationResult = {
      caseId,
      narrative: narrative.substring(0, 100) + '...',
      category: classification.primaryCategory,
      confidence: classification.confidence,
      confidencePercent: (classification.confidence * 100).toFixed(1) + '%',
      topThreeScores: topThree,
      extractedEntities: extracted,
      appliedBoosts: getAppliedBoosts(classification),
      flags: [],
    };

    // Flag cases above 95%
    if (classification.confidence > 0.95) {
      result.flags.push('⚠️ CONFIDENCE ABOVE 95% - Possible inflation');
    }

    // Flag cases with very low confidence on expected strong matches
    if (
      (caseId === 'upi_fraud' || caseId === 'sextortion' || caseId === 'phishing') &&
      classification.confidence < 0.6
    ) {
      result.flags.push('⚠️ CONFIDENCE BELOW 60% - Expected 70%+');
    }

    // Flag cases with unexpected top category
    const expectedCategories: Record<string, string> = {
      upi_fraud: 'UPI_FRAUD',
      sextortion: 'SEXTORTION',
      phishing: 'PHISHING',
      identity_theft: 'IDENTITY_THEFT',
      deepfake_scam: 'DEEPFAKE_IMPERSONATION',
      mixed_deepfake_identity_extortion: 'DEEPFAKE_IMPERSONATION',
    };

    if (
      expectedCategories[caseId] &&
      classification.primaryCategory !== expectedCategories[caseId]
    ) {
      result.flags.push(
        `⚠️ UNEXPECTED CATEGORY - Expected ${expectedCategories[caseId]}, got ${classification.primaryCategory}`,
      );
    }

    results.push(result);
  });

  return results;
}

// Run validation and output results
export function printValidationReport(): void {
  console.log('\n' + '='.repeat(100));
  console.log('CONFIDENCE SCORING POST-FIX VALIDATION REPORT');
  console.log('='.repeat(100) + '\n');

  const results = runConfidenceValidation();

  results.forEach((result, idx) => {
    console.log(`\n📋 TEST CASE ${idx + 1}: ${result.caseId.toUpperCase()}`);
    console.log('-'.repeat(100));
    console.log(`Narrative: ${result.narrative}`);
    console.log(`\n📊 Results:`);
    console.log(`  Primary Category: ${result.category}`);
    console.log(`  Confidence: ${result.confidencePercent}`);
    console.log(`  Locked: ${result.confidence > 0.75 ? 'YES' : 'NO'}`);

    console.log(`\n🎯 Top 3 Category Scores:`);
    result.topThreeScores.forEach((score, i) => {
      console.log(`  ${i + 1}. ${score.category}: ${(score.score * 100).toFixed(1)}%`);
    });

    console.log(`\n🔍 Extracted Entities:`);
    if (result.extractedEntities.upiIds.length > 0) {
      console.log(`  UPI IDs: ${result.extractedEntities.upiIds.join(', ')}`);
    }
    if (result.extractedEntities.utrIds.length > 0) {
      console.log(`  UTR IDs: ${result.extractedEntities.utrIds.join(', ')}`);
    }
    if (result.extractedEntities.emails.length > 0) {
      console.log(`  Emails: ${result.extractedEntities.emails.join(', ')}`);
    }
    if (result.extractedEntities.phoneNumbers.length > 0) {
      console.log(`  Phone Numbers: ${result.extractedEntities.phoneNumbers.join(', ')}`);
    }
    if (result.extractedEntities.urls.length > 0) {
      console.log(`  URLs: ${result.extractedEntities.urls.join(', ')}`);
    }
    if (result.extractedEntities.walletAddresses.length > 0) {
      console.log(`  Wallet Addresses: ${result.extractedEntities.walletAddresses.join(', ')}`);
    }

    console.log(`\n⚡ Applied Boosts:`);
    result.appliedBoosts.forEach((boost) => {
      console.log(`  • ${boost}`);
    });

    if (result.flags.length > 0) {
      console.log(`\n🚩 FLAGS:`);
      result.flags.forEach((flag) => {
        console.log(`  ${flag}`);
      });
    } else {
      console.log(`\n✅ No flags - validation passed`);
    }

    console.log('');
  });

  // Summary
  console.log('\n' + '='.repeat(100));
  console.log('SUMMARY');
  console.log('='.repeat(100));
  console.log(`Total Cases Tested: ${results.length}`);
  console.log(`Cases with Flags: ${results.filter((r) => r.flags.length > 0).length}`);
  console.log(
    `Average Confidence: ${(
      (results.reduce((sum, r) => sum + r.confidence, 0) / results.length) *
      100
    ).toFixed(1)}%`,
  );
  console.log(
    `Confidence Range: ${(Math.min(...results.map((r) => r.confidence)) * 100).toFixed(1)}% - ${(
      Math.max(...results.map((r) => r.confidence)) * 100
    ).toFixed(1)}%`,
  );

  const flaggedAbove95 = results.filter(
    (r) => r.confidence > 0.95 && r.flags.some((f) => f.includes('ABOVE 95%')),
  );
  if (flaggedAbove95.length > 0) {
    console.log(`\n⚠️ CASES ABOVE 95% (Potential Inflation):`);
    flaggedAbove95.forEach((r) => {
      console.log(`   • ${r.caseId}: ${r.confidencePercent}`);
    });
  } else {
    console.log(`\n✅ No cases above 95% threshold`);
  }

  console.log('\n' + '='.repeat(100) + '\n');
}
