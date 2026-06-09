import EmailLookup from "../../components/scanner/EmailLookup";
import { useTranslation } from "react-i18next";

export default function EmailLookupPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#0b1020] text-white pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("pages.emailLookup.title")}
          </h1>
          <p className="text-slate-400 text-lg">
            {t("pages.emailLookup.description")}
          </p>
        </div>
        <EmailLookup />
      </div>
    </div>
  );
}
