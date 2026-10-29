"use client";

import { createElement, useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "span" | "p" | "h1" | "h2" | "ul" | "form";
  /** Atraso em passos de 80 ms (1 a 3), como no protótipo. */
  delay?: 1 | 2 | 3;
  children?: ReactNode;
};

/**
 * Sobe e desfoca para nítido quando entra na tela.
 * Marca `data-in` (e não uma classe) para o React não apagar a marca ao re-renderizar.
 * Sem JS, o `<noscript>` do layout deixa tudo visível; com reduced motion, o CSS também.
 */
export function Reveal({ as = "div", delay, className, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["rv", delay ? `d${delay}` : "", className ?? ""].filter(Boolean).join(" ");
  return createElement(as, { ...rest, ref, className: classes }, children);
}
