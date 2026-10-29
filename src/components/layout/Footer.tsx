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
          aria-label={dictionary.header.languageLabel}
        >
          PT / EN
        </button>
      </div>
    </footer>
  );
}
