"use client";

import { useRef, type PointerEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { projectConfigs } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

const lume = projectConfigs[0];
const liveLinks = projectConfigs.filter((project) => project.status && project.demo);

export function Hero() {
  const { dictionary } = useLanguage();
  const text = dictionary.hero;
  const flare = useRef<HTMLDivElement>(null);

  // O reflexo segue o cursor ao longo da borda do eclipse (20% a 80% da largura).
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    flare.current?.style.setProperty("--fx", `${(event.clientX / window.innerWidth) * 60 + 20}%`);
  };

  return (
    <section className="hero" id="top" onPointerMove={onPointerMove}>
      <div className="grid-bg" aria-hidden="true" />
      <div className="eclipse" aria-hidden="true" />
      <div className="flare" ref={flare} aria-hidden="true" />
      <div className="wrap">
        <Reveal as="span" className="kicker">
          <b aria-hidden="true" />
          {text.kicker}
        </Reveal>
        <Reveal as="h1" delay={1} className="giant">
          {text.titleTop}
          <br />
          <span className="lit">{text.titleLit}</span>
        </Reveal>
        <Reveal delay={2} className="hero-sub">
          <p>
            <RichText text={text.description} />
          </p>
          <div className="btns">
            <a className="btn pri" href="#work">
              {text.ctas.work}
            </a>
            <a className="btn" href={lume.demo} target="_blank" rel="noopener noreferrer">
              {text.ctas.lume}
            </a>
          </div>
        </Reveal>
      </div>
      <div className="live">
        <div className="wrap">
          <span>{text.liveLabel}</span>
          {liveLinks.map((project) => (
            <a key={project.slug} href={project.demo} target="_blank" rel="noopener noreferrer">
              {new URL(project.demo!).host}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
