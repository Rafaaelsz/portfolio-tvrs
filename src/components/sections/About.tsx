"use client";

import { Database, GitBranch, Route, Workflow } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/i18n/LanguageProvider";

const flowIcons = [Route, Database, Workflow, GitBranch];

export function About() {
  const { dictionary } = useLanguage();
  const text = dictionary.about;

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <MotionWrapper>
          <SectionTitle eyebrow={text.eyebrow} title={text.title} description={text.description} />
        </MotionWrapper>

        <div className="grid gap-4 sm:grid-cols-2">
          {text.flow.map(({ label, detail }, index) => {
            const Icon = flowIcons[index];

            return (
              <MotionWrapper key={label} delay={index * 0.08}>
                <article className="relative min-h-48 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/64 p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-white/16">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase text-neutral-500">
                        {text.stepLabel} {index + 1}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{label}</h3>
                    </div>
                    <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-200">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-neutral-400">{detail}</p>
                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="size-1.5 bg-emerald-300" />
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </div>

      <MotionWrapper delay={0.12}>
        <div className="mt-14 grid gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5 md:grid-cols-3">
          {text.highlights.map((item) => (
            <p key={item} className="text-sm leading-7 text-neutral-300">
              {item}
            </p>
          ))}
        </div>
      </MotionWrapper>
    </Section>
  );
}
