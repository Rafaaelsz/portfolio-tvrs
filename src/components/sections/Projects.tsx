"use client";

import {
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type FocusEvent } from "react";
import { scrollToY } from "@/components/narrative/SmoothScroll";
import { clamp, isPinnedLayout } from "@/components/narrative/timeline";
import { RoleSelector } from "@/components/ui/RoleSelector";
import { Reveal } from "@/components/ui/Reveal";
import { useRole } from "@/components/role/RoleProvider";
import { trackSpotlight } from "@/components/ui/spotlight";
import { orderForRole, projectConfigs, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary, ProjectCopy } from "@/i18n/types";

/** Cards da fileira; o resto vira a lista do último card. O Lume tem a cena própria. */
const cardCount = 4;
const layoutTransition = { type: "spring", stiffness: 380, damping: 38 } as const;
/** Prints reais dos sites no ar, que fazem pan conforme a fileira anda. */
const previews: Record<string, string> = {
  pilates: "/projects/pilates-giselle-meyer.webp",
  finder: "/projects/finder-vagas-ti.webp",
};
const qaSlug = "mydemoapp";

type Item = { config: Project; copy: ProjectCopy; index: number };

/** Quanto a fileira precisa andar para o último card aparecer inteiro. */
function travel(row: HTMLElement | null) {
  return row ? Math.max(0, row.scrollWidth - window.innerWidth + 40) : 0;
}

/** Site no ar abre primeiro; sem status, o principal é o código. */
function links(config: Project) {
  const primary = config.status ? config.demo : (config.github ?? config.demo);
  const secondary = primary === config.demo ? config.github : config.demo;
  return { primary: primary!, secondary };
}

function StatusTag({ item, text }: { item: Item; text: Dictionary["projects"] }) {
  const { status } = item.config;
  return (
    <span className="tag">
      {status ? (
        <span className="on">
          ● {status === "production" ? text.status.production : text.status.live}
        </span>
      ) : (
        <span>{text.status.code}</span>
      )}
      <span aria-hidden="true">·</span>
      <span>{item.copy.type}</span>
    </span>
  );
}

function SecondaryLink({ href, text }: { href?: string; text: Dictionary["projects"] }) {
  if (!href) return null;
  const label = href.includes("github.com") ? text.githubLabel : new URL(href).host;
  return (
    <a className="card-sub" href={href} target="_blank" rel="noopener noreferrer">
      {label} ↗
    </a>
  );
}

/** Os 4 fluxos de exemplo do My Demo App passam um a um conforme o card entra na tela. */
function QaFlows({ passing, text }: { passing: number; text: Dictionary["projects"]["qa"] }) {
  return (
    <>
      <ul className="tests" aria-label={text.aria}>
        {text.flows.map((flow, index) => (
          <li key={flow} className={index < passing ? "is-ok" : undefined}>
            <i aria-hidden="true">✓</i>
            {flow}
          </li>
        ))}
      </ul>
      <span className="tsum">
        <b>{text.summary.replace("{n}", String(passing))}</b>
      </span>
    </>
  );
}

function ProjectCard({
  item,
  dim,
  text,
  dimmedLabel,
  passing,
}: {
  item: Item;
  dim: boolean;
  text: Dictionary["projects"];
  dimmedLabel: string;
  passing: number;
}) {
  const { primary, secondary } = links(item.config);
  const preview = previews[item.config.slug];
  const isQa = item.config.slug === qaSlug;

  return (
    <motion.article
      layout="position"
      layoutId={item.config.slug}
      transition={layoutTransition}
      className={["card", dim ? "is-dim" : "", isQa ? "is-qa" : ""].filter(Boolean).join(" ")}
      onPointerMove={trackSpotlight}
    >
      {preview && (
        <div className="pv">
          <Image
            src={preview}
            alt={text.previews[item.config.slug] ?? ""}
            width={1440}
            height={900}
            sizes="(max-width: 820px) 92vw, 500px"
          />
        </div>
      )}
      <span className="go" aria-hidden="true">
        →
      </span>
      <StatusTag item={item} text={text} />
      <h3>
        <a className="card-link" href={primary} target="_blank" rel="noopener noreferrer">
          {item.copy.name}
          {dim && <span className="sr-only"> ({dimmedLabel})</span>}
        </a>
      </h3>
      <p>{item.copy.summary}</p>
      {isQa && <QaFlows passing={passing} text={text.qa} />}
      <span className="stack">
        {item.config.stack.join(" · ")}
        <SecondaryLink href={secondary} text={text} />
      </span>
    </motion.article>
  );
}

function ProjectRow({
  item,
  dim,
  text,
  dimmedLabel,
}: {
  item: Item;
  dim: boolean;
  text: Dictionary["projects"];
  dimmedLabel: string;
}) {
  const { primary, secondary } = links(item.config);

  return (
    <motion.div
      layout="position"
      layoutId={item.config.slug}
      transition={layoutTransition}
      className={dim ? "more-row is-dim" : "more-row"}
    >
      <b>
        <a className="card-link" href={primary} target="_blank" rel="noopener noreferrer">
          {item.copy.name}
          {dim && <span className="sr-only"> ({dimmedLabel})</span>}
        </a>
      </b>
      <span>{item.copy.summary}</span>
      <small>
        {item.config.stack.slice(0, 3).join(" · ")} ↗
        <SecondaryLink href={secondary} text={text} />
      </small>
    </motion.div>
  );
}

/**
 * Cena 3 da narrativa: "Outros trabalhos". No desktop a seção fica fixada e a rolagem vertical
 * move a fileira para o lado (`--hx`); os prints fazem pan (`--cp`). Abaixo de 820 px, ou com
 * prefers-reduced-motion, vira lista vertical sem fixar.
 * O seletor "Contratando para" continua reordenando os cards, como antes.
 */
export function Projects() {
  const { dictionary } = useLanguage();
  const { role } = useRole();
  const text = dictionary.projects;
  const reduced = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const [passing, setPassing] = useState(0);

  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });

  const items: Item[] = projectConfigs.map((config, index) => ({
    config,
    copy: text.items[index],
    index,
  }));
  const ordered = orderForRole(items.slice(1), role);
  const cards = ordered.slice(0, cardCount);
  const rows = ordered.slice(cardCount);

  const apply = useCallback(
    (progress: number) => {
      const el = row.current;
      if (!el) return;
      const pinned = isPinnedLayout();
      el.style.setProperty("--hx", pinned ? `${-progress * travel(el)}px` : "0px");
      el.querySelectorAll<HTMLElement>(".pv").forEach((pv) => {
        const value = pinned
          ? progress
          : clamp(1 - pv.getBoundingClientRect().top / window.innerHeight);
        pv.style.setProperty("--cp", String(reduced ? 0 : value));
      });

      // Os fluxos do My Demo App passam conforme o card entra na tela.
      const qa = el.querySelector<HTMLElement>(".is-qa");
      if (!qa || reduced) {
        setPassing(4);
        return;
      }
      const rect = qa.getBoundingClientRect();
      const seen = pinned
        ? clamp((window.innerWidth * 0.95 - rect.left) / (window.innerWidth * 0.6))
        : clamp((window.innerHeight * 0.9 - rect.top) / (window.innerHeight * 0.5));
      setPassing(Math.min(4, Math.floor(seen * 4.999)));
    },
    [reduced],
  );

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => apply(scrollYProgress.get()));

  useEffect(() => {
    const sync = () => apply(scrollYProgress.get());
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [apply, scrollYProgress, role]);

  // Teclado: o foco num card fora da tela rola a página até a fileira mostrá-lo.
  const onFocus = (event: FocusEvent<HTMLDivElement>) => {
    const el = row.current;
    const trackEl = track.current;
    if (!el || !trackEl || !isPinnedLayout()) return;
    const card = (event.target as HTMLElement).closest<HTMLElement>(".hrow > *");
    const max = travel(el);
    if (!card || max <= 0) return;
    const padding = parseFloat(getComputedStyle(el).paddingLeft);
    const progress = clamp((card.offsetLeft - padding) / max);
    const top = trackEl.getBoundingClientRect().top + window.scrollY;
    scrollToY(top + progress * (trackEl.offsetHeight - window.innerHeight), true);
  };

  return (
    <div className="track work-track" id="work" ref={track}>
      <section className="pin work-pin" aria-labelledby="work-title">
        <div className="wrap">
          <Reveal className="eyebrow">{text.eyebrow}</Reveal>
          <div className="work-head">
            <Reveal as="h2" delay={1} className="ec-h2" id="work-title">
              {text.title} <em>{text.titleMuted}</em>
            </Reveal>
            <Reveal delay={2}>
              <RoleSelector />
            </Reveal>
          </div>
        </div>

        <LayoutGroup>
          <div className="hrow" ref={row} onFocus={onFocus}>
            {cards.map((item) => (
              <ProjectCard
                key={item.config.slug}
                item={item}
                dim={item.dim}
                text={text}
                dimmedLabel={dictionary.roles.dimmed}
                passing={passing}
              />
            ))}
            <div className="more-card">
              <div className="more">
                {rows.map((item) => (
                  <ProjectRow
                    key={item.config.slug}
                    item={item}
                    dim={item.dim}
                    text={text}
                    dimmedLabel={dictionary.roles.dimmed}
                  />
                ))}
              </div>
            </div>
          </div>
        </LayoutGroup>
      </section>
    </div>
  );
}
