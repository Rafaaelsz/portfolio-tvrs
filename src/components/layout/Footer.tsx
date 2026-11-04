"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { dictionary, toggleLocale } = useLanguage();

  return (
    <footer className="ec-footer">
      <div className="wrap ec-footer-in">
        <span>
          © {new Date().getFullYear()} {dictionary.footer.place}
        </span>
        <button
          type="button"
          className="lang-link"
          onClick={toggleLocale}
          // O nome acessível começa pelo texto visível (WCAG 2.5.3, regra label-content-name-mismatch).
          aria-label={`PT / EN: ${dictionary.header.languageLabel}`}
        >
          PT / EN
        </button>
      </div>
    </footer>
  );
}
