"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#journey", key: "journey" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { dictionary, locale, toggleLocale } = useLanguage();
  const nextLocale = locale === "pt-BR" ? "EN" : "PT";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-white/12 bg-neutral-950/76 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border-white/8 bg-neutral-950/38 backdrop-blur-md"
        }`}
        aria-label={dictionary.header.aria}
      >
        <a href="#" className="group flex items-center gap-3" aria-label={dictionary.header.home}>
          <span className="grid size-8 place-items-center rounded-xl border border-white/12 bg-white/[0.04] text-xs font-semibold text-white">
            RT
          </span>
          <span className="hidden text-sm font-medium text-white sm:block">Rafael Tavares</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-xs font-medium text-neutral-400 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {dictionary.header.nav[item.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={dictionary.header.languageLabel}
            className="grid h-9 min-w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] px-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            {nextLocale}
          </button>
          <a
            href="https://github.com/Rafaaelsz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-tavares-p26/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="#contact"
            aria-label={dictionary.header.nav.contact}
            className="grid size-9 place-items-center rounded-xl bg-white text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
