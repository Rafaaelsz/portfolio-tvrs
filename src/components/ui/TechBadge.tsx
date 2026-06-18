import type { PropsWithChildren } from "react";

export function TechBadge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-neutral-300">
      {children}
    </span>
  );
}
