"use client";

import { MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";
import { RoleProvider } from "@/components/role/RoleProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <LanguageProvider>
      <RoleProvider>
        {/* reducedMotion="user": com prefers-reduced-motion, o Framer não anima transform/layout. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </RoleProvider>
    </LanguageProvider>
  );
}
