"use client";

import { m, useReducedMotion } from "motion/react";

export type SignatureTraceVariant =
  | "flow"
  | "pulse"
  | "minimal"
  | "converge"
  | "node"
  | "branch";

type TracePath = {
  d: string;
  delay?: number;
};

const tracePaths: Record<SignatureTraceVariant, readonly TracePath[]> = {
  flow: [
    { d: "M4 28 H42 V16 H78 V24 H116 V12 H158 V22 H196" }
  ],
  pulse: [
    { d: "M12 24 H52 L62 12 L76 30 L90 18 L104 24 H188" }
  ],
  minimal: [
    { d: "M72 20 H128" }
  ],
  converge: [
    { d: "M18 12 H92 L124 20 H184" },
    { d: "M18 20 H184", delay: 0.06 },
    { d: "M18 28 H92 L124 20 H184", delay: 0.12 }
  ],
  node: [
    { d: "M20 22 H74 V14 H126 V22 H180" },
    { d: "M66 22a8 8 0 1 0 16 0a8 8 0 1 0 -16 0", delay: 0.08 },
    { d: "M118 14a8 8 0 1 0 16 0a8 8 0 1 0 -16 0", delay: 0.14 }
  ],
  branch: [
    { d: "M16 24 H82" },
    { d: "M82 24 V12 H148 L164 8 H188", delay: 0.06 },
    { d: "M82 24 H188", delay: 0.1 },
    { d: "M82 24 V32 H148 L164 36 H188", delay: 0.14 }
  ]
};

export function SignatureTrace({
  variant,
  className
}: {
  variant: SignatureTraceVariant;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const classes = ["signature-trace", `signature-trace--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <m.svg viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {tracePaths[variant].map((path, index) => (
          <m.path
            key={`${variant}-${index}`}
            d={path.d}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.42}
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 1.05, ease: "easeOut", delay: path.delay ?? index * 0.06 }
            }
          />
        ))}
      </m.svg>
    </div>
  );
}
