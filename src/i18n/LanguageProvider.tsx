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
    }
  }, []);

  // O SSR sai em PT (layout.tsx); no EN, idioma, título e descrição trocam no cliente.
  useEffect(() => {
    const { meta } = dictionaries[locale];
    const apply = () => {
      document.documentElement.lang = locale;
      if (document.title !== meta.title) document.title = meta.title;
      const description = document.querySelector('meta[name="description"]');
      if (description && description.getAttribute("content") !== meta.description) {
        description.setAttribute("content", meta.description);
      }
    };
    apply();
    // Ao recarregar já em EN, a hidratação do <head> do Next chega depois deste efeito e
    // devolve o título do SSR (PT). O observer reaplica o idioma escolhido.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
    });
    return () => observer.disconnect();
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    dictionary: dictionaries[locale],
    toggleLocale: () => {
      const nextLocale = locale === "pt-BR" ? "en-US" : "pt-BR";
      setLocaleState(nextLocale);
      window.localStorage.setItem(storageKey, nextLocale);
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
