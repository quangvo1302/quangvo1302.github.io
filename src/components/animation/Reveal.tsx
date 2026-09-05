"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";

type RevealElement = "div" | "section" | "article" | "nav";

const motionElements = {
  div: m.div,
  section: m.section,
  article: m.article,
  nav: m.nav
};

export function Reveal({
  as = "div",
  delay = 0,
  y = 22,
  className,
  ariaLabel,
  children
}: {
  as?: RevealElement;
  delay?: number;
  y?: number;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const Component = motionElements[as];

  return (
    <Component
      className={className ? `reveal ${className}` : "reveal"}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
