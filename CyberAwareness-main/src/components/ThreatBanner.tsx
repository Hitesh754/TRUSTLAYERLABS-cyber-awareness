export default function ThreatBanner() {
  const alerts = [
    'Alert: Surge in UPI Fraud & QR Code Scams — Learn how to protect yourself',
    'Alert: Deepfake scams are rising — Verify before you trust',
    'Alert: New phishing campaigns targeting Aadhaar & PAN card holders',
    'Alert: Fake job portals harvesting personal data — Stay vigilant',
    'Alert: OTP-based SIM swap fraud on the rise — Never share OTPs',
  ];

  const content = [...alerts, ...alerts];

  return (
    <div className="bg-red-950/50 border-y border-red-900/40 py-3 overflow-hidden relative">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-red-500 text-white text-xs font-bold px-4 py-1 z-10 mr-4 whitespace-nowrap hidden sm:block">
          LIVE THREATS
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {content.map((alert, i) => (
              <span key={i} className="text-red-300 text-sm font-medium inline-flex items-center gap-2 flex-shrink-0">
                <span className="text-red-400">⚠</span>
                {alert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
