"use client";

import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import { defaultLocale, dictionaries } from "./dictionaries";
import type { Dictionary, Locale } from "./types";

const storageKey = "portfolio-locale";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "pt-BR" || value === "en-US";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
      return;
    }

    document.documentElement.lang = defaultLocale;
  }, []);

  const value: LanguageContextValue = {
    locale,
    dictionary: dictionaries[locale],
    toggleLocale: () => {
      const nextLocale = locale === "pt-BR" ? "en-US" : "pt-BR";
      setLocaleState(nextLocale);
      window.localStorage.setItem(storageKey, nextLocale);
      document.documentElement.lang = nextLocale;
    },
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
