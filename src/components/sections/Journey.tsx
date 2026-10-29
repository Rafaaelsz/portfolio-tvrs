"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Journey() {
  const { dictionary } = useLanguage();
  const text = dictionary.journey;
  const ref = useRef<HTMLOListElement>(null);
  // A linha de luz desce enquanto a jornada passa pelo meio da tela.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });
  const height = useTransform(scrollYProgress, (value) => `${value * 100}%`);

  return (
    <section className="ec-section" id="journey">
      <div className="wrap">
        <Reveal className="eyebrow">{text.eyebrow}</Reveal>
        <Reveal as="h2" delay={1} className="ec-h2">
          {text.title}
        </Reveal>
        <div className="journey">
          <div className="rail" aria-hidden="true">
            <motion.i style={{ height }} />
          </div>
          <ol ref={ref}>
            {text.steps.map((step) => (
              <li key={step.title} className="step">
                <span className="when">{step.when}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
