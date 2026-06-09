import DomainLookup from "../../components/scanner/DomainLookup";
import { useTranslation } from "react-i18next";

export default function DomainLookupPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#0b1020] text-white pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t("pages.domainLookup.title")}
          </h1>
          <p className="text-slate-400 text-lg">
            {t("pages.domainLookup.description")}
          </p>
        </div>
        <DomainLookup />
      </div>
    </div>
  );
}
