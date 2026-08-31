"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollSection({
  pin = false,
  scrub = false,
  className,
  children
}: {
  pin?: boolean;
  scrub?: boolean | number;
  className?: string;
  children: ReactNode;
}) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!pin && !scrub) return;

      gsap.fromTo(
        scope.current,
        { opacity: 0.98 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: scope.current,
            start: "top 80%",
            end: "bottom 20%",
            pin,
            scrub
          }
        }
      );
    },
    { scope, dependencies: [pin, scrub], revertOnUpdate: true }
  );

  return (
    <section ref={scope} className={className} data-scroll-section>
      {children}
    </section>
  );
}
