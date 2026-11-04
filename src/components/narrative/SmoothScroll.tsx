"use client";

import { cancelFrame, frame } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Rolagem suave da home (Lenis) para a roda do mouse e o trackpad.
 *
 * - O Lenis continua rolando a `window` (scrollTo instantâneo a cada frame), então o
 *   `useScroll` do Framer Motion e o `position: sticky` das cenas leem o scroll nativo
 *   e seguem a posição interpolada sem nenhuma ponte extra.
 * - O `raf` do Lenis roda no mesmo loop de frames do Framer: o scroll é escrito antes
 *   de o Framer ler, sem um segundo requestAnimationFrame competindo.
 * - Touch fica nativo (`syncTouch: false`): no celular, a inércia do sistema já é suave.
 * - Com prefers-reduced-motion, o Lenis nem é criado (e é desligado se a preferência mudar).
 * - Âncoras da página rolam pelo Lenis respeitando o `scroll-margin-top` do destino.
 *   O link "Pular para o conteúdo" (`.skip`) fica nativo, para manter o salto e o foco.
 */

let instance: Lenis | null = null;

/** Rola até `top` pelo Lenis quando ele está ativo; senão, pela window. */
export function scrollToY(top: number, immediate = false) {
  if (instance) instance.scrollTo(top, { immediate, force: true });
  else window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
}

const NAV_KEYS = new Set([" ", "PageDown", "PageUp", "End", "Home", "ArrowDown", "ArrowUp", "Tab"]);

function anchorTop(target: HTMLElement) {
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  return target.getBoundingClientRect().top + window.scrollY - margin;
}

function focusWithoutScroll(target: HTMLElement) {
  if (!target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1");
    target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
  }
  target.focus({ preventScroll: true });
}

function start() {
  const lenis = new Lenis({
    lerp: 0.12,
    smoothWheel: true,
    wheelMultiplier: 1,
    syncTouch: false,
    autoRaf: false,
  });
  instance = lenis;

  const update = ({ timestamp }: { timestamp: number }) => lenis.raf(timestamp);
  frame.update(update, true);

  // Teclado e foco mandam no scroll: cortam a inércia da roda para não brigar com o
  // scroll nativo de Space/PageDown/End/Tab (o Lenis ignoraria esse scroll no meio da animação).
  const halt = () => {
    if (lenis.isScrolling === "smooth") lenis.scrollTo(window.scrollY, { immediate: true, force: true });
  };
  const onKey = (event: KeyboardEvent) => {
    if (NAV_KEYS.has(event.key)) halt();
  };

  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link || link.classList.contains("skip")) return;
    const hash = link.getAttribute("href") ?? "";
    const target = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (!target) return;
    event.preventDefault();
    history.pushState(null, "", hash);
    lenis.scrollTo(anchorTop(target), {
      duration: 1.2,
      force: true,
      onComplete: () => focusWithoutScroll(target),
    });
  };

  window.addEventListener("keydown", onKey, true);
  document.addEventListener("focusin", halt);
  document.addEventListener("click", onClick);

  return () => {
    window.removeEventListener("keydown", onKey, true);
    document.removeEventListener("focusin", halt);
    document.removeEventListener("click", onClick);
    cancelFrame(update);
    lenis.destroy();
    if (instance === lenis) instance = null;
  };
}

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop: (() => void) | null = null;
    const sync = () => {
      if (reduced.matches) {
        stop?.();
        stop = null;
      } else if (!stop) {
        stop = start();
      }
    };
    sync();
    reduced.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      stop?.();
    };
  }, []);

  return null;
}
