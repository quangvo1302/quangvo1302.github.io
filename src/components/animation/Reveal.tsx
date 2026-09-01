"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealElement = "div" | "section" | "article" | "nav";

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  nav: motion.nav
};

export function Reveal({
  as = "div",
  delay = 0,
  y = 16,
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
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
