/**
 * Funções da linha do tempo da narrativa no scroll (direção A).
 * O progresso de cada cena vem do `useScroll` do Framer Motion (0 a 1 ao longo do trilho fixado);
 * estas funções recortam esse progresso em trechos e suavizam.
 */

export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

/** easeInOutCubic */
export const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Progresso de 0 a 1 dentro do trecho [start, end] da cena. */
export const segment = (progress: number, start: number, end: number) =>
  clamp((progress - start) / (end - start));

/** Abaixo desta largura, a fileira de trabalhos e o "Sobre" deixam de fixar (ver narrative.css). */
export const unpinBelow = 820;

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** No servidor (sem `window`) conta como não fixado; o cliente recalcula na primeira rolagem. */
export function isPinnedLayout() {
  if (typeof window === "undefined") return false;
  return window.innerWidth > unpinBelow && !prefersReducedMotion();
}
