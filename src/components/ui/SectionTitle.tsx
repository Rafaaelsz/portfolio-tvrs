import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-8 text-neutral-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
