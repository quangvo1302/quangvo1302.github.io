"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";

const PAGE_TRANSITION_EASE = [0.16, 1, 0.3, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  return (
    <m.div
      className="page-transition-shell"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: PAGE_TRANSITION_EASE }}
    >
      {children}
    </m.div>
  );
}
