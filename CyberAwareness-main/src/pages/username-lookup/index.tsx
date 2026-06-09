import UsernameLookup from "../../components/scanner/UsernameLookup";
import { useTranslation } from "react-i18next";

export default function UsernameLookupPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b1020] dark:text-white pt-28 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            {t("usernameLookup.title", "Username OSINT Search")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t("usernameLookup.description", "Search for usernames across social media and digital platforms.")}
          </p>
        </div>
        
        <UsernameLookup />
      </div>
    </div>
  );
}
