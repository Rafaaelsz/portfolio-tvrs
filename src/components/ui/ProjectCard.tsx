"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type CSSProperties, type MouseEvent } from "react";
import type { Project } from "@/data/projects";
import type { Dictionary, ProjectCopy } from "@/i18n/types";
import { TechBadge } from "./TechBadge";

const accentClasses = {
  cyan: "from-cyan-400/18 text-cyan-200",
  emerald: "from-emerald-400/18 text-emerald-200",
  amber: "from-amber-400/18 text-amber-200",
  rose: "from-rose-400/18 text-rose-200",
  violet: "from-violet-400/18 text-violet-200",
};

type ProjectCardProps = {
  project: Project;
  copy: ProjectCopy;
  labels: Dictionary["projects"];
  index: number;
};

export function ProjectCard({ project, copy, labels, index }: ProjectCardProps) {
  const [light, setLight] = useState({ x: 50, y: 50 });
  const Icon = project.Icon;

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setLight({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <motion.article
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
      onMouseMove={onMouseMove}
      className="project-card group relative grid overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/68 p-5 shadow-2xl shadow-black/20 backdrop-blur-md transition-colors duration-300 hover:border-white/16 md:grid-cols-[0.9fr_1.1fr] md:p-6"
      style={
        {
          "--x": `${light.x}%`,
          "--y": `${light.y}%`,
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.10),transparent_45%)]" />
      </div>

      <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/8 bg-neutral-900/48 p-4">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentClasses[project.accent]} to-transparent`}
        />
        <div className="relative flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase text-neutral-400">
            {copy.visual.label}
          </span>
          <span className="grid size-9 place-items-center rounded-xl border border-white/12 bg-black/20 text-white">
            <Icon className="size-4" />
          </span>
        </div>

        <div className="relative mt-8 space-y-3">
          {copy.visual.nodes.map((node, nodeIndex) => (
            <div key={node} className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-white/12 bg-black/26 text-[10px] text-white">
                {nodeIndex + 1}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="min-w-28 rounded-xl border border-white/10 bg-black/24 px-3 py-2 text-xs text-neutral-200">
                {node}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-7 grid grid-cols-2 gap-2">
          {copy.visual.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-xl border border-white/8 bg-black/22 px-3 py-2 text-[11px] text-neutral-300"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col p-1 pt-6 md:p-6">
        <p className="text-xs font-semibold uppercase text-neutral-500">{copy.type}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{copy.name}</h3>
        <p className="mt-4 text-sm leading-7 text-neutral-400">{copy.description}</p>
        <div className="mt-6 border-l border-white/12 pl-4">
          <p className="text-xs font-semibold uppercase text-neutral-500">{labels.problemLabel}</p>
          <p className="mt-2 text-sm leading-7 text-neutral-300">{copy.problem}</p>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {copy.features.map((feature) => (
            <span key={feature} className="text-sm text-neutral-300">
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div className="mt-7 flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/12 bg-white/[0.035] px-3 text-sm font-medium text-neutral-200 transition-colors hover:border-white/22 hover:bg-white/[0.06] hover:text-white"
          >
            <Github className="size-4" />
            {labels.githubLabel}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              {labels.demoLabel}
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
