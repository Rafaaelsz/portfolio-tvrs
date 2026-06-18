"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timelineAccent } from "@/data/experience";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 35%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { dictionary } = useLanguage();
  const text = dictionary.journey;

  return (
    <Section id="journey" className="bg-black/16">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle eyebrow={text.eyebrow} title={text.title} description={text.description} />

        <div ref={ref} className="relative">
          <div className="absolute left-5 top-3 h-[calc(100%-1.5rem)] w-px bg-white/10" />
          <motion.div
            className={`absolute left-5 top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-gradient-to-b ${timelineAccent}`}
            style={{ scaleY }}
          />
          <div className="space-y-5">
            {text.milestones.map((milestone, index) => (
              <motion.article
                key={milestone.title}
                initial={{ x: 22, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-1 grid size-10 place-items-center rounded-xl border border-white/12 bg-neutral-950 text-xs font-semibold text-white">
                  {milestone.marker}
                </span>
                <div className="rounded-2xl border border-white/10 bg-neutral-950/62 p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-white/16">
                  <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">{milestone.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
