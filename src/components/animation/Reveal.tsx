"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealElement = "div" | "section" | "article";

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article
};

export function Reveal({
  as = "div",
  delay = 0,
  y = 16,
  className,
  children
}: {
  as?: RevealElement;
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motionElements[as];

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
