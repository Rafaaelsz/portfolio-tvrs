"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type Word = { text: string; highlight: boolean };

/** Quebra o parágrafo em palavras; o que está entre *asteriscos* acende em azul-gelo. */
function toWords(paragraph: string): Word[] {
  return paragraph.split("*").flatMap((chunk, index) =>
    chunk
      .split(/\s+/)
      .filter(Boolean)
      .map((text) => ({ text, highlight: index % 2 === 1 })),
  );
}

// Apagado em cinza legível (5,19:1 sobre #030304, WCAG AA); aceso em branco ou azul-gelo.
const dim = "#7a808a";
const ink = "#f4f6f8";
const ice = "#bfe3ff";

function LitWord({
  word,
  progress,
  range,
}: {
  word: Word;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(progress, range, [dim, word.highlight ? ice : ink]);
  const glow = useTransform(progress, range, [
    "0 0 24px rgba(140, 200, 255, 0)",
    word.highlight ? "0 0 24px rgba(140, 200, 255, 0.45)" : "0 0 24px rgba(140, 200, 255, 0)",
  ]);

  return (
    <motion.span className={word.highlight ? "w hl" : "w"} style={{ color, textShadow: glow }}>
      {word.text}
    </motion.span>
  );
}

/**
 * Parágrafo do "Sobre" que acende palavra por palavra conforme a rolagem.
 * Com prefers-reduced-motion, o CSS mostra tudo aceso (o estilo inline perde para o !important).
 */
export function LitParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = toWords(text);

  return (
    <p className="lit-para" ref={ref}>
      {words.map((word, index) => (
        <span key={`${index}-${word.text}`}>
          <LitWord
            word={word}
            progress={scrollYProgress}
            range={[index / words.length, (index + 1) / words.length]}
          />{" "}
        </span>
      ))}
    </p>
  );
}
