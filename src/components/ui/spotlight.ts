import type { PointerEvent } from "react";

/** Holofote dos cards: guarda a posição do cursor em `--mx`/`--my` (o CSS desenha a luz). */
export function trackSpotlight(event: PointerEvent<HTMLElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  target.style.setProperty("--my", `${event.clientY - rect.top}px`);
}
