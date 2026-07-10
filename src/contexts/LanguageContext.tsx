import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Translations } from "../i18n/types";
import { es } from "../i18n/es";
import { en } from "../i18n/en";

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const translations: Record<Language, Translations> = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-language");
    return (saved as Language) || "es";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
