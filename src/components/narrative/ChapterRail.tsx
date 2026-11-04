"use client";

import { motion, useMotionValueEvent, useScroll, type MotionStyle } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const chapters = [
  { id: "top", key: "eclipse" },
  { id: "lume", key: "lume" },
  { id: "work", key: "work" },
  { id: "about", key: "about" },
  { id: "contact", key: "contact" },
] as const;

/**
 * Trilho de capítulos à esquerda (a partir de 1180 px): mostra onde a narrativa está e
 * deixa pular direto para qualquer cena. A linha enche com o progresso da página.
 */
export function ChapterRail() {
  const { dictionary } = useLanguage();
  const text = dictionary.narrative.chapters;
  const { scrollY, scrollYProgress } = useScroll();
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollY, "change", () => {
    let current = 0;
    chapters.forEach((chapter, index) => {
      const el = document.getElementById(chapter.id);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) current = index;
    });
    setActive(current);
  });

  return (
    <nav className="chap" aria-label={text.aria}>
      <motion.span
        className="chap-fill"
        aria-hidden="true"
        style={{ "--pg": scrollYProgress } as MotionStyle}
      />
      <ol>
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className={index === active ? "is-on" : undefined}
              aria-current={index === active ? "location" : undefined}
            >
              <i aria-hidden="true" />
              <span>{text[chapter.key]}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
