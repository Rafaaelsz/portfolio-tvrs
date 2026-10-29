"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const navItems = [
  { href: "#work", key: "work" },
  { href: "#about", key: "about" },
  { href: "#journey", key: "journey" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { dictionary, toggleLocale } = useLanguage();
  const text = dictionary.header;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "ec-header is-scrolled" : "ec-header"}>
      <a className="skip" href="#conteudo">
        {dictionary.meta.skip}
      </a>
      <div className="wrap ec-header-in">
        <a className="mark" href="#top" aria-label={text.home}>
          <i aria-hidden="true" />
          Rafael Tavares
        </a>
        <nav className="ec-nav" aria-label={text.aria}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {text.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="ec-header-actions">
          <button
            type="button"
            className="lang"
            onClick={toggleLocale}
            aria-label={text.languageLabel}
          >
            {text.languageShort}
          </button>
          <a className="cta-s" href="#contact">
            {text.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
