"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { dictionary } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/8 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Rafael Tavares</span>
        <span>{dictionary.footer.built}</span>
      </div>
    </footer>
  );
}
