"use client";

import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { ease, segment } from "@/components/narrative/timeline";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { projectConfigs } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

const lume = projectConfigs[0];
const liveLinks = projectConfigs.filter((project) => project.status && project.demo);

/**
 * Cena 1 da narrativa: o hero fica fixado num trilho de 180vh. Enquanto a página rola,
 * o planeta sobe, o título sai, o anel de diamante acende na borda e entra "O Lume.".
 * As fases viram variáveis CSS (`--rise`, `--ring`, `--out`, `--in2`) lidas no narrative.css.
 */
export function Hero() {
  const { dictionary } = useLanguage();
  const text = dictionary.hero;
  const after = dictionary.narrative.hero;
  const track = useRef<HTMLDivElement>(null);
  const flare = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const rise = useTransform(scrollYProgress, (p) => ease(segment(p, 0, 0.55)));
  const ring = useTransform(scrollYProgress, (p) => Math.sin(segment(p, 0.38, 0.72) * Math.PI));
  const out = useTransform(scrollYProgress, (p) => ease(segment(p, 0.12, 0.42)));
  const handOff = useTransform(
    scrollYProgress,
    (p) => segment(p, 0.6, 0.78) * (1 - segment(p, 0.94, 1)),
  );

  // O reflexo segue o cursor ao longo da borda do eclipse (20% a 80% da largura).
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    flare.current?.style.setProperty("--fx", `${(event.clientX / window.innerWidth) * 60 + 20}%`);
  };

  return (
    <div className="track hero-track" id="top" ref={track}>
      <motion.section
        className="hero"
        onPointerMove={onPointerMove}
        style={{ "--rise": rise, "--ring": ring, "--out": out, "--in2": handOff } as MotionStyle}
      >
        <div className="grid-bg" aria-hidden="true" />
        <div className="sky" aria-hidden="true">
          <div className="eclipse" />
          <div className="flare" ref={flare} />
          <div className="diamond" />
        </div>
        <div className="wrap hero-main">
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
              <a className="btn pri" href="#lume">
                {text.ctas.work}
              </a>
              <a className="btn" href={lume.demo} target="_blank" rel="noopener noreferrer">
                {text.ctas.lume}
              </a>
            </div>
            <a className="skip-scene hero-skip" href="#work">
              {dictionary.narrative.lume.skip}
            </a>
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
        <div className="after" aria-hidden="true">
          <div className="eyebrow">{after.afterEyebrow}</div>
          <p className="after-title">{after.afterTitle}</p>
          <p className="after-text">{after.afterText}</p>
        </div>
        <div className="scrollcue" aria-hidden="true">
          {after.scrollCue}
          <i />
        </div>
      </motion.section>
    </div>
  );
}
