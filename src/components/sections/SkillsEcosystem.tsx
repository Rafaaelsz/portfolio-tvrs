"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/layout/Section";
import { skillAccents } from "@/data/skills";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { useLanguage } from "@/i18n/LanguageProvider";

const SkillsNetwork = dynamic(
  () => import("@/components/three/SkillsNetwork").then((module) => module.SkillsNetwork),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] w-full animate-pulse rounded-3xl bg-white/[0.02] sm:h-[500px]" />
    ),
  },
);

const accentText = {
  cyan: "text-cyan-200",
  emerald: "text-emerald-200",
  amber: "text-amber-200",
  rose: "text-rose-200",
};

export function SkillsEcosystem() {
  const { dictionary } = useLanguage();
  const text = dictionary.skills;

  return (
    <Section id="skills" className="bg-black/18">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <MotionWrapper>
            <SectionTitle
              eyebrow={text.eyebrow}
              title={text.title}
              description={text.description}
            />
          </MotionWrapper>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {text.groups.map((group, index) => (
              <MotionWrapper key={group.title} delay={index * 0.06}>
                <article className="min-h-56 rounded-2xl border border-white/10 bg-neutral-950/62 p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-white/16">
                  <p
                    className={`text-xs font-semibold uppercase ${accentText[skillAccents[index]]}`}
                  >
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <TechBadge key={item}>{item}</TechBadge>
                    ))}
                  </div>
                </article>
              </MotionWrapper>
            ))}
          </div>
        </div>

        <MotionWrapper delay={0.1}>
          <div className="relative -mx-6 lg:mx-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.12),transparent_52%)]" />
            <SkillsNetwork />
          </div>
        </MotionWrapper>
      </div>
    </Section>
  );
}
