"use client";

import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { RoleSelector } from "@/components/ui/RoleSelector";
import { Reveal } from "@/components/ui/Reveal";
import { useRole } from "@/components/role/RoleProvider";
import { trackSpotlight } from "@/components/ui/spotlight";
import { orderForRole, projectConfigs, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary, ProjectCopy } from "@/i18n/types";

/** Cards ao lado e abaixo da Lume; o resto vira a lista. */
const cardCount = 4;
/** Alturas das 11 barras do funil de luz; a 5ª é o lead "esfriando". */
const funnel = [92, 84, 77, 70, 64, 57, 50, 43, 36, 28, 20];
const coldBar = 4;
const layoutTransition = { type: "spring", stiffness: 380, damping: 38 } as const;

type Item = { config: Project; copy: ProjectCopy; index: number };

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

function LumeCard({ item, text }: { item: Item; text: Dictionary["projects"] }) {
  const { primary } = links(item.config);

  return (
    <article className="card lume" onPointerMove={trackSpotlight}>
      <span className="go" aria-hidden="true">
        →
      </span>
      <div className="lume-in">
        <div className="lume-copy">
          <StatusTag item={item} text={text} />
          <h3>
            <a className="card-link" href={primary} target="_blank" rel="noopener noreferrer">
              {item.copy.name}
            </a>
          </h3>
          <p>{item.copy.description}</p>
        </div>
        <ul className="lume-list">
          {item.copy.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <span className="stack">{item.config.stack.join(" · ")}</span>
      <div className="lume-visual">
        <div className="funnel" aria-hidden="true">
          <span className="funnel-label">{text.lume.funnelLabel}</span>
          {funnel.map((height, index) => (
            <i
              key={height}
              className={index === coldBar ? "cold" : undefined}
              style={{ height: `${height}%` }}
            >
              {index === coldBar && <span className="cold-label">{text.lume.coolingLabel}</span>}
            </i>
          ))}
        </div>
        <div className="lume-shot">
          <Image
            src="/projects/lume-landing-hero.webp"
            alt={text.lume.shotAlt}
            fill
            sizes="(max-width: 620px) 92vw, (max-width: 980px) 90vw, 760px"
          />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  item,
  dim,
  wide,
  text,
  dimmedLabel,
}: {
  item: Item;
  dim: boolean;
  wide: boolean;
  text: Dictionary["projects"];
  dimmedLabel: string;
}) {
  const { primary, secondary } = links(item.config);

  return (
    <motion.article
      layout="position"
      layoutId={item.config.slug}
      transition={layoutTransition}
      className={["card", wide ? "wide" : "", dim ? "is-dim" : ""].filter(Boolean).join(" ")}
      onPointerMove={trackSpotlight}
    >
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

export function Projects() {
  const { dictionary } = useLanguage();
  const { role } = useRole();
  const text = dictionary.projects;

  const items: Item[] = projectConfigs.map((config, index) => ({
    config,
    copy: text.items[index],
    index,
  }));
  const [lume, ...rest] = items;
  const ordered = orderForRole(rest, role);
  const cards = ordered.slice(0, cardCount);
  const rows = ordered.slice(cardCount);

  return (
    <section className="ec-section" id="work">
      <div className="wrap">
        <Reveal className="eyebrow">{text.eyebrow}</Reveal>
        <div className="work-head">
          <Reveal as="h2" delay={1} className="ec-h2">
            {text.title} <em>{text.titleMuted}</em>
          </Reveal>
          <Reveal delay={2}>
            <RoleSelector />
          </Reveal>
        </div>

        <LayoutGroup>
          <Reveal className="bento">
            <LumeCard item={lume} text={text} />
            {cards.map((item, index) => (
              <ProjectCard
                key={item.config.slug}
                item={item}
                dim={item.dim}
                wide={index >= 2}
                text={text}
                dimmedLabel={dictionary.roles.dimmed}
              />
            ))}
          </Reveal>

          <Reveal className="more">
            {rows.map((item) => (
              <ProjectRow
                key={item.config.slug}
                item={item}
                dim={item.dim}
                text={text}
                dimmedLabel={dictionary.roles.dimmed}
              />
            ))}
          </Reveal>
        </LayoutGroup>
      </div>
    </section>
  );
}
