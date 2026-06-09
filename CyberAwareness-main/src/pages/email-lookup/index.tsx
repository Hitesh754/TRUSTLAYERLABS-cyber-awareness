import EmailLookup from "../../components/scanner/EmailLookup";

export default function EmailLookupPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b1020] dark:text-white pt-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            Email Address Lookup
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-lg">
            Verify email deliverability, check for temporary or disposable domains, and audit historical data breaches.
          </p>
        </div>

        <EmailLookup />
      </div>
    </div>
  );
}
