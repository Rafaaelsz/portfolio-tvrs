"use client";

import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { clamp, ease, segment } from "@/components/narrative/timeline";
import { projectConfigs } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/types";

const lume = projectConfigs[0];
/** Cores das 4 etapas da demonstração (o funil real tem 11). */
const columnColors = ["#8a8f98", "#4cc3ff", "#9aa2ff", "#3ddc97"];
const proposalValue = 2400;
const wonBefore = 2800;
/** Cards parados em cada coluna (o card que anda não conta). */
const counts = [2, 2, 1, 1];

type Slot = { x: number; y: number; width: number };
type View = { beat: number; stage: number; born: boolean; won: number };

const initialView: View = { beat: 0, stage: 0, born: false, won: wonBefore };

function money(value: number, locale: Locale) {
  return `R$ ${value.toLocaleString(locale)}`;
}

/**
 * Cena 2 da narrativa: o Lume se monta sozinho num trilho fixado (`position: sticky`).
 * A rolagem é a linha do tempo, em 4 tempos: um link do Maps vira o card "Padaria Trigo Dourado",
 * o card anda de Novo a Proposta, a proposta em PDF sobe e o card fecha (R$ 2.800 → R$ 5.200).
 *
 * O progresso vem do `useScroll`. O que é contínuo (posição do card, opacidade do PDF) vai
 * direto em variáveis CSS, sem re-render; o que é discreto (tempo atual, etapa, total)
 * vai para o estado, que muda poucas vezes por cena.
 * Com prefers-reduced-motion, nada fica fixado e o quadro aparece no estado final.
 */
export function LumeScene() {
  const { dictionary, locale } = useLanguage();
  const text = dictionary.narrative.lume;
  const board = text.board;
  const reduced = useReducedMotion();

  const track = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<Array<HTMLLIElement | null>>([]);
  const slotRefs = useRef<Array<HTMLDivElement | null>>([]);
  const slots = useRef<Slot[]>([]);
  const [view, setView] = useState<View>(initialView);

  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });

  const measure = useCallback(() => {
    const cols = colsRef.current;
    const mover = moverRef.current;
    if (!cols || !mover) return;
    const origin = cols.getBoundingClientRect();
    slots.current = slotRefs.current.map((slot) => {
      const rect = slot!.getBoundingClientRect();
      return { x: rect.left - origin.left, y: rect.top - origin.top, width: rect.width };
    });
    mover.style.setProperty("--mw", `${slots.current[0].width}px`);
  }, []);

  const apply = useCallback((q: number) => {
    const S = slots.current;
    const mover = moverRef.current;
    const cols = colsRef.current;
    const boardEl = boardRef.current;
    if (S.length < 4 || !mover || !cols || !boardEl) return;

    // 4 tempos; a barra do tempo atual enche com a rolagem.
    const beat = Math.min(3, Math.floor(q * 4));
    const local = q * 4 - beat;
    beatRefs.current.forEach((el, i) =>
      el?.style.setProperty("--bp", String(i < beat ? 1 : i === beat ? local : 0)),
    );

    // Tempo 1: o link aparece como texto e se condensa no card em "Novo".
    const link = linkRef.current;
    if (link) {
      const shrink = segment(q, 0.12, 0.2);
      link.style.setProperty("--lo", String(segment(q, 0.02, 0.09) * (1 - segment(q, 0.14, 0.2))));
      link.style.transform = `translate3d(-50%, ${shrink * 40}px, 0) scale(${1 - shrink * 0.35})`;
    }
    const born = ease(segment(q, 0.14, 0.22));

    // Posição contínua do card ao longo das 4 colunas.
    let k = 0;
    if (q >= 0.25) k = ease(segment(q, 0.3, 0.44));
    if (q >= 0.5) k = 1 + ease(segment(q, 0.55, 0.68));
    if (q >= 0.75) k = 2 + ease(segment(q, 0.8, 0.92));
    const from = Math.min(2, Math.floor(k));
    const f = k - from;
    const A = S[from];
    const B = S[Math.min(3, from + 1)];
    const x = A.x + (B.x - A.x) * f;
    const y = A.y + (B.y - A.y) * f + Math.sin(f * Math.PI) * -26;
    mover.style.setProperty("--mx2", `${x}px`);
    mover.style.setProperty("--my2", `${y + (1 - born) * -40}px`);
    mover.style.setProperty("--ms", String(0.9 + born * 0.1 + Math.sin(f * Math.PI) * 0.04));
    mover.style.setProperty("--mo", String(born));

    // Tempo 3: a proposta em PDF sobe e sai quando o card chega em Fechado.
    pdfRef.current?.style.setProperty(
      "--pd",
      String(ease(segment(q, 0.6, 0.7)) * (1 - segment(q, 0.8, 0.86))),
    );

    // No celular o quadro é mais largo que a tela: faz pan para o card ativo ficar à vista.
    const padding = parseFloat(getComputedStyle(boardEl).paddingLeft) * 2;
    const overflow = cols.scrollWidth - (boardEl.clientWidth - padding);
    const viewWidth = boardEl.clientWidth - padding;
    const pan = overflow > 0 ? -clamp(x - viewWidth / 2 + S[0].width / 2, 0, overflow) : 0;
    cols.style.setProperty("--pan", `${pan}px`);

    const next: View = {
      beat,
      stage: Math.round(k),
      born: born > 0.5,
      won: wonBefore + Math.round((proposalValue * ease(segment(q, 0.9, 0.97))) / 100) * 100,
    };
    setView((prev) =>
      prev.beat === next.beat &&
      prev.stage === next.stage &&
      prev.born === next.born &&
      prev.won === next.won
        ? prev
        : next,
    );
  }, []);

  useEffect(() => {
    const sync = () => {
      measure();
      apply(reduced ? 1 : scrollYProgress.get());
    };
    sync();
    const observer = new ResizeObserver(sync);
    if (boardRef.current) observer.observe(boardRef.current);
    document.fonts?.ready.then(sync);
    return () => observer.disconnect();
  }, [apply, measure, reduced, scrollYProgress, locale]);

  useMotionValueEvent(scrollYProgress, "change", (q) => {
    if (!reduced) apply(q);
  });

  const { beat, stage, born, won } = view;
  const open = born && stage < 3 ? 8 : 7;

  return (
    <div className="track lume-track" id="lume" ref={track}>
      <section className="pin lume-pin" aria-labelledby="lume-title">
        <div className="horizon" aria-hidden="true" />
        <div className="wrap stage">
          <div>
            <div className="lume-head">
              <div className="lume-meta">
                <span className="tag">
                  <b>● {dictionary.projects.status.production}</b> · {text.tag}
                </span>
                <a className="skip-scene" href="#work">
                  {text.skip}
                </a>
              </div>
              <h2 id="lume-title">{dictionary.projects.items[0].name}</h2>
            </div>
            <ol className="beats">
              {text.beats.map((item, index) => (
                <li
                  key={item.title}
                  ref={(el) => {
                    beatRefs.current[index] = el;
                  }}
                  className={["beat", index === beat ? "is-on" : "", index < beat ? "is-done" : ""]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <i className="bar" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {index === text.beats.length - 1 && (
                    <a
                      className="btn pri"
                      href={lume.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dictionary.hero.ctas.lume}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="board" ref={boardRef} aria-hidden="true">
            <div className="b-top">
              <div>
                <strong>{board.title}</strong>
                <small>{board.stages}</small>
              </div>
              <div className="b-meta">
                <span>{open}</span> {board.open} · {board.won} <b>{money(won, locale)}</b>
              </div>
            </div>
            <span className="b-demo">{board.demo}</span>
            <div className="band">
              <div className="link" ref={linkRef}>
                <u>maps.app.goo.gl/</u>
                <em>T7rQ9mW</em>
              </div>
            </div>
            <div className="cols-view">
              <div className="cols" ref={colsRef}>
                {board.columns.map((name, index) => {
                  return (
                    <div
                      key={name}
                      className={born && index === stage ? "col is-hot" : "col"}
                      style={{ "--c": columnColors[index] } as React.CSSProperties}
                    >
                      <div className="col-h">
                        <i />
                        {name}
                        <span>{counts[index]}</span>
                      </div>
                      {index === 0 && (
                        <>
                          <div className="k">
                            <b>Pet Shop Patinhas</b>
                            <span className="pl">Biguaçu - SC</span>
                          </div>
                          <div className="k">
                            <b>Ótica Visão Clara</b>
                            <span className="pl">Palhoça - SC</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="k">
                            <b>Escritório Contábil Exato</b>
                            <span className="late">{board.cooling}</span>
                          </div>
                          <div className="k">
                            <b>Barbearia Dom Bigode</b>
                            <span className="pl">Florianópolis - SC</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <div className="k">
                          <b>Oficina Irmãos Vargas</b>
                          <span className="pl">Palhoça - SC</span>
                          <span className="v">
                            <span>nº 0006</span>
                            <span>{money(1900, locale)}</span>
                          </span>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="k">
                          <b>Restaurante Sabor do Mar</b>
                          <span className="pl">Florianópolis - SC</span>
                          <span className="v">
                            <span className="ok">{board.accepted}</span>
                            <span>{money(wonBefore, locale)}</span>
                          </span>
                        </div>
                      )}
                      <div
                        className="slot"
                        ref={(el) => {
                          slotRefs.current[index] = el;
                        }}
                      />
                    </div>
                  );
                })}
                <div className={stage === 3 ? "k mover is-won" : "k mover"} ref={moverRef}>
                  <b>Padaria Trigo Dourado</b>
                  <span className="pl">Palhoça - SC</span>
                  <span className="st">{board.moverStates[stage]}</span>
                </div>
              </div>
            </div>
            <div className="pdf" ref={pdfRef}>
              <small>{board.pdfTitle}</small>
              <b>Padaria Trigo Dourado</b>
              <div className="ln" />
              <div className="ln s" />
              <div className="ln" />
              <div className="tot">
                <span>{board.pdfItem}</span>
                <span>{money(proposalValue, locale)}</span>
              </div>
            </div>
          </div>
          <p className="sr-only">{text.srSummary}</p>
        </div>
      </section>
    </div>
  );
}
