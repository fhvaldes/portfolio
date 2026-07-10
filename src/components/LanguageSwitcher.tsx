import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer text-xs font-mono uppercase tracking-wider"
      title={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{language === "es" ? "ES" : "EN"}</span>
    </button>
  );
}
