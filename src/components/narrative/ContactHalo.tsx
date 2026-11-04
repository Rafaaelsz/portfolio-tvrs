"use client";

import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/components/narrative/timeline";

/** Cena 5 da narrativa: o eclipse se põe enquanto o contato entra na tela (`--set` de 0 a 1). */
export function ContactHalo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.1"] });
  const set = useTransform(scrollYProgress, ease);
  return (
    <motion.div
      className="halo"
      ref={ref}
      aria-hidden="true"
      style={{ "--set": set } as MotionStyle}
    />
  );
}
