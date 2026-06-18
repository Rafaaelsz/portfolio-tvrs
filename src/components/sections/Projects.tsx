"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectConfigs } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Projects() {
  const { dictionary } = useLanguage();
  const text = dictionary.projects;

  return (
    <Section id="projects">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow={text.eyebrow} title={text.title} description={text.description} />
        <p className="max-w-xs text-sm leading-7 text-neutral-500">{text.aside}</p>
      </div>

      <div className="space-y-5">
        {projectConfigs.map((project, index) => (
          <ProjectCard
            key={text.items[index].name}
            copy={text.items[index]}
            labels={text}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
