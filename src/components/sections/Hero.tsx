"use client";

import dynamic from "next/dynamic";
import { Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { PortfolioButton } from "@/components/ui/PortfolioButton";
import { useLanguage } from "@/i18n/LanguageProvider";

const ArchitectureScene = dynamic(
  () => import("@/components/three/ArchitectureScene").then((module) => module.ArchitectureScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] w-full animate-pulse rounded-3xl bg-white/[0.02] sm:h-[520px]" />
    ),
  },
);

export function Hero() {
  const { dictionary } = useLanguage();
  const text = dictionary.hero;

  return (
    <section className="relative px-6 pb-16 pt-28 sm:pt-36 lg:min-h-screen lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            {text.availability}
          </div>

          <p className="text-sm font-semibold uppercase text-neutral-500">{text.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {text.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-neutral-400 sm:text-lg">
            {text.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <PortfolioButton href="#projects" showArrow>
              {text.ctas.projects}
            </PortfolioButton>
            <PortfolioButton
              href="https://github.com/Rafaaelsz"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <Github className="size-4" />
              GitHub
            </PortfolioButton>
            <PortfolioButton href="#contact" variant="ghost">
              <Mail className="size-4" />
              {text.ctas.contact}
            </PortfolioButton>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025]">
            {text.stats.map((item) => (
              <div key={item.label} className="border-r border-white/8 p-4 last:border-r-0">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mx-6 lg:mx-0"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.16),transparent_48%)]" />
          <ArchitectureScene labels={text.architecture} />
        </motion.div>
      </div>
    </section>
  );
}
