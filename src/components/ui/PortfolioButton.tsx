import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type PortfolioButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "ghost";
    showArrow?: boolean;
  }
>;

export function PortfolioButton({
  children,
  variant = "primary",
  showArrow = false,
  className = "",
  ...props
}: PortfolioButtonProps) {
  const variants = {
    primary: "bg-white text-neutral-950 hover:bg-neutral-200",
    secondary:
      "border border-white/12 bg-white/[0.04] text-white hover:border-white/22 hover:bg-white/[0.07]",
    ghost: "text-neutral-300 hover:bg-white/[0.05] hover:text-white",
  };

  return (
    <a
      className={`group inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
