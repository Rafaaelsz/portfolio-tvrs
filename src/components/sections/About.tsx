"use client";

import { LitParagraph } from "@/components/ui/LitParagraph";
import { Reveal } from "@/components/ui/Reveal";
import { useRole } from "@/components/role/RoleProvider";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { dictionary } = useLanguage();
  const { role } = useRole();
  const text = dictionary.about;

  return (
    <section className="ec-section" id="about">
      <div className="wrap">
        <Reveal className="eyebrow">{text.eyebrow}</Reveal>
        <LitParagraph text={text.paragraph} />
        <Reveal className="skills">
          {text.skills.map((group) => {
            // Com uma área escolhida no seletor, o bloco de stack dela acende.
            const active = role !== "all" && group.areas.includes(role);
            return (
              <div key={group.title} className={active ? "is-active" : undefined}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
