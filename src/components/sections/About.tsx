"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { clamp, isPinnedLayout } from "@/components/narrative/timeline";
import { LitParagraph } from "@/components/ui/LitParagraph";
import { Reveal } from "@/components/ui/Reveal";
import { useRole } from "@/components/role/RoleProvider";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Cena 4 da narrativa: no desktop o "Sobre" fica fixado e o parágrafo acende palavra por
 * palavra junto com o trilho. Abaixo de 820 px (ou com reduced motion) não fixa, e o
 * parágrafo usa o próprio progresso na tela, como antes.
 */
export function About() {
  const { dictionary } = useLanguage();
  const { role } = useRole();
  const text = dictionary.about;
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const pinned = useTransform(scrollYProgress, (p) => (isPinnedLayout() ? clamp(p * 1.25) : null));

  return (
    <div className="track about-track" id="about" ref={track}>
      <section className="pin about-pin" aria-labelledby="about-title">
        <div className="wrap">
          <Reveal className="eyebrow" id="about-title">
            {text.eyebrow}
          </Reveal>
          <LitParagraph text={text.paragraph} pinnedProgress={pinned} />
          <Reveal className="skills">
            {text.skills.map((group) => {
              // Com uma área escolhida no seletor, o bloco de stack dela acende.
              const active = role !== "all" && group.areas.includes(role);
              return (
                <div key={group.title} className={active ? "is-active" : undefined}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
