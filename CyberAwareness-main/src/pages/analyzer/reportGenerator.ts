import { jsPDF } from 'jspdf';
import type { AnalysisResult, CrimeReportData, CrimeContext } from './types';
import { getCrimeContextMeta, getOfficialCrimeCategory } from './crimeContextMap';

function generateRefId(): string {
  // Use crypto.randomUUID if available, otherwise fallback to Math.random
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `CS-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  }
  const hex = Math.random().toString(16).slice(2, 10).toUpperCase();
  return `CS-${hex}`;
}

export function generateCrimeReport(
  reportData: CrimeReportData,
  analysisResult: AnalysisResult,
  crimeContext: CrimeContext,
) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 40;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usableWidth = pageWidth - margin * 2;
  const lineHeight = 16;
  const referenceId = generateRefId();
  const contextMeta = getCrimeContextMeta(crimeContext);
  let y = 0;

  function checkPage(needed = 40) {
    if (y > pageHeight - needed - margin) {
      doc.addPage();
      y = margin + 10;
    }
  }

  function drawHeader() {
    // Top accent line
    doc.setFillColor(0, 150, 200);
    doc.rect(0, 0, pageWidth, 6, 'F');

    y = 42;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(20, 20, 20);
    doc.text('CYBER CRIME COMPLAINT REPORT', margin, y);

    y += 22;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`Reference No: ${referenceId}`, margin, y);
    doc.text(`Generated: ${new Date().toLocaleString('en-IN')}`, pageWidth - margin - 180, y);

    y += 14;
    doc.text(`Crime Type: ${contextMeta.label}`, margin, y);
    y += 14;
    doc.text(`Official Category: ${getOfficialCrimeCategory(crimeContext, reportData.crimeSubCategory)}`, margin, y);

    y += 16;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 16;
  }

  function sectionTitle(title: string) {
    checkPage(60);
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(margin, y - 4, usableWidth, 22, 3, 3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 120, 170);
    doc.text(title, margin + 8, y + 12);
    y += 30;
  }

  function field(label: string, value: string) {
    if (!value || !value.trim()) return;
    checkPage(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(`${label}:`, margin + 8, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 30, 30);
    const lines = doc.splitTextToSize(value, usableWidth - 140);
    doc.text(lines, margin + 140, y);
    y += Math.max(lineHeight, lines.length * lineHeight);
  }

  function paragraph(text: string) {
    if (!text || !text.trim()) return;
    checkPage(40);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    const lines = doc.splitTextToSize(text, usableWidth - 16);
    lines.forEach((line: string) => {
      checkPage(20);
      doc.text(line, margin + 8, y);
      y += lineHeight;
    });
    y += 6;
  }

  function legalField(lawLabel: string, description: string) {
    checkPage(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(160, 40, 40); // Dark red/crimson
    doc.text(lawLabel, margin + 8, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    const labelWidth = 155;
    const lines = doc.splitTextToSize(description, usableWidth - labelWidth - 16);
    doc.text(lines, margin + labelWidth, y);
    y += Math.max(lineHeight, lines.length * lineHeight) + 6;
  }

  function divider() {
    y += 4;
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
  }

  // ──────────────────────────────────────────────────
  // Build the PDF
  // ──────────────────────────────────────────────────

  drawHeader();

  // Section 1: Complaint Summary
  sectionTitle('1. COMPLAINT SUMMARY');
  field('Risk Level', analysisResult.risk);
  field('Risk Score', `${analysisResult.score}/100`);
  field('Confidence', `${analysisResult.confidence}%`);
  field('Category', analysisResult.category);
  field('Crime Type', contextMeta.label);
  divider();

  // Section 2: Victim Details
  sectionTitle('2. VICTIM / COMPLAINANT DETAILS');
  field('Full Name', reportData.victimName);
  field('Phone Number', reportData.victimPhone);
  field('Email Address', reportData.victimEmail);
  field('Address', reportData.victimAddress);
  field('ID Proof Type', reportData.victimIdType);
  field('ID Number', reportData.victimIdNumber);
  field('State', reportData.state);
  field('District', reportData.district);
  divider();

  // Section 3: Incident Details
  sectionTitle('3. INCIDENT DETAILS');
  field('Date of Incident', reportData.incidentDate);
  field('Time of Incident', reportData.incidentTime);
  field('Crime Category', reportData.crimeCategory);
  field('Sub-Category', reportData.crimeSubCategory);
  field('Description', reportData.incidentDescription);
  divider();

  // Section 4: Suspect Details (only if any field filled)
  const hasSuspect =
    reportData.suspectName || reportData.suspectPhone ||
    reportData.suspectEmail || reportData.suspectSocialMedia;
  if (hasSuspect) {
    sectionTitle('4. SUSPECT DETAILS');
    field('Name', reportData.suspectName);
    field('Phone Number', reportData.suspectPhone);
    field('Email', reportData.suspectEmail);
    field('Social Media', reportData.suspectSocialMedia);
    divider();
  }

  // Section 5: Context-specific section
  let sectionNum = hasSuspect ? 5 : 4;
  if (crimeContext === 'financial') {
    sectionTitle(`${sectionNum}. FINANCIAL LOSS DETAILS`);
    field('Amount Lost', reportData.lossAmount ? `₹${reportData.lossAmount}` : '');
    field('Transaction ID', reportData.transactionId);
    field('Bank Name', reportData.bankName);
    field('Payment Method', reportData.paymentMethod);
    field('Suspect Account', reportData.suspectAccountDetails);
    divider();
    sectionNum++;
  } else if (crimeContext === 'harassment') {
    sectionTitle(`${sectionNum}. HARASSMENT & BLACKMAIL DETAILS`);
    field('Type of Harassment', reportData.harassmentType);
    field('Platform Used', reportData.platformUsed);
    field('Relation to Suspect', reportData.relationToSuspect);
    field('Content Description', reportData.contentDescription);
    divider();
    sectionNum++;
  } else if (crimeContext === 'data_theft') {
    sectionTitle(`${sectionNum}. DATA COMPROMISE DETAILS`);
    field('Data Compromised', reportData.dataCompromised);
    field('Access Method', reportData.accessMethod);
    field('Devices Affected', reportData.devicesAffected);
    divider();
    sectionNum++;
  } else if (crimeContext === 'ransomware') {
    sectionTitle(`${sectionNum}. RANSOMWARE DETAILS`);
    field('Ransom Demand', reportData.ransomDemand);
    field('Files Affected', reportData.filesAffected);
    field('Ransom Note', reportData.ransomNote);
    divider();
    sectionNum++;
  }

  // Section: Legal Sections & Terms
  sectionTitle(`${sectionNum}. APPLICABLE LEGAL PROVISIONS & PENALTIES`);
  if (crimeContext === 'financial') {
    legalField('IT Act, 2000 - Sec 43/66', 'Unauthorized access, hacking, and computer systems damage. (Penalty: Up to 3 years imprisonment or fine up to 5 Lakh, or both).');
    legalField('IT Act, 2000 - Sec 66C', 'Identity Theft - fraudulent use of passwords, OTPs, or identity features. (Penalty: Up to 3 years imprisonment and fine up to 1 Lakh).');
    legalField('IT Act, 2000 - Sec 66D', 'Cheating by Personation using communication devices or computer resources. (Penalty: Up to 3 years imprisonment and fine up to 1 Lakh).');
    legalField('BNS, 2023 - Sec 318', 'Cheating and dishonestly inducing delivery of property via digital/online channels. (Penalty: Up to 7 years imprisonment and fine).');
    legalField('IPC - Sec 420 (Legacy)', 'Cheating online, social engineering, and fake investment/payment redirection causing wrongful loss. (Penalty: Up to 7 years imprisonment and fine).');
    legalField('IPC - Sec 468/471', 'Forgery for cheating and presenting forged electronic documents (KYC, payment proofs) as genuine.');
  } else if (crimeContext === 'harassment') {
    legalField('IT Act, 2000 - Sec 66E', 'Privacy violation - capturing, publishing, or transmitting private images without consent. (Penalty: Up to 3 years imprisonment or fine up to 2 Lakh).');
    legalField('IT Act, 2000 - Sec 67/67A', 'Publishing or transmitting obscene or sexually explicit material in electronic form. (Penalty: Up to 3 to 5 years imprisonment and fine).');
    legalField('BNS, 2023 - Sec 351', 'Criminal intimidation, blackmailing, and doxxing threats delivered through chats/emails. (Penalty: Up to 2 years imprisonment or fine).');
    legalField('BNS, 2023 - Sec 78/79', 'Stalking (monitoring digital activity without consent) and insulting modesty of women. (Penalty: Up to 3 years imprisonment).');
    legalField('IPC - Sec 503/506', 'Criminal intimidation and blackmail threats to reputation, body, or family. (Penalty: Up to 2 to 7 years imprisonment).');
    legalField('IPC - Sec 499/500', 'Defamation through harmful publication of false or malicious content online.');
  } else if (crimeContext === 'data_theft') {
    legalField('IT Act, 2000 - Sec 43/66', 'Unauthorized access, downloading/extracting data, and introducing malware/viruses. (Penalty: Up to 3 years imprisonment or fine up to 5 Lakh).');
    legalField('IT Act, 2000 - Sec 66C', 'Identity Theft - unauthorized use of passwords, OTPs, login credentials, or personal details. (Penalty: Up to 3 years imprisonment and fine up to 1 Lakh).');
    legalField('IT Act, 2000 - Sec 66D', 'Cheating by Personation - using fake sites, communication channels, or phishing forms to harvest data. (Penalty: Up to 3 years imprisonment).');
    legalField('BNS, 2023 - Sec 336/340', 'Forgery and creation of false electronic records, including phishing sites, spoofed interfaces, and fake forms.');
    legalField('IPC - Sec 468/471', 'Forgery for cheating and using forged electronic documents as genuine.');
  } else if (crimeContext === 'ransomware') {
    legalField('IT Act, 2000 - Sec 43/66', 'Unauthorized access, damaging or locking files, introducing malware/ransomware, and denial of system access.');
    legalField('IT Act, 2000 - Sec 66F', 'Cyber Terrorism - targeting critical information infrastructure or threatening national security/sovereignty. (Penalty: Imprisonment for life).');
    legalField('BNS, 2023 - Sec 308', 'Extortion - inducing fear of injury/damage to deliver property (cryptocurrency or money) under threat. (Penalty: Up to 7 years imprisonment).');
    legalField('IPC - Sec 384/506', 'Extortion and criminal intimidation - demanding ransom/coercion to release encrypted/locked files. (Penalty: Up to 3 years imprisonment).');
  } else {
    legalField('IT Act, 2000 - Sec 43/66', 'Unauthorized computer access and system integrity compromise.');
    legalField('IT Act, 2000 - Sec 66C/66D', 'Identity theft and cheating by personation using communication resources.');
    legalField('BNS, 2023 - Sec 318', 'Cheating and deceptive online inducement.');
    legalField('IPC - Sec 420 (Legacy)', 'Cheating online and dishonest delivery of property.');
  }
  divider();
  sectionNum++;

  // Section N: Evidence
  sectionTitle(`${sectionNum}. EVIDENCE & ANALYSIS`);
  if (analysisResult.indicators.length > 0) {
    field('Detected Indicators', analysisResult.indicators.join(', '));
  }
  if (analysisResult.suspiciousUrls.length > 0) {
    field('Suspicious URLs', analysisResult.suspiciousUrls.join('\n'));
  }
  field('Evidence Notes', reportData.evidenceDescription);
  field('Screenshot Attached', reportData.screenshotAttached ? 'Yes' : 'No');

  checkPage(50);
  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text('AI Explanation:', margin + 8, y);
  y += lineHeight;
  paragraph(analysisResult.explanation);
  divider();

  // Footer on every page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setDrawColor(0, 150, 200);
    doc.setLineWidth(1);
    doc.line(margin, pageHeight - 30, pageWidth - margin, pageHeight - 30);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `Generated by CyberShield | Ref: ${referenceId} | For official filing at https://cybercrime.gov.in`,
      margin,
      pageHeight - 18,
    );
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 50, pageHeight - 18);
  }

  doc.save(`CyberCrime-Complaint-${referenceId}.pdf`);
  return referenceId;
}
