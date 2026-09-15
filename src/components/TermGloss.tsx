"use client";

import { useEffect, useId, useRef, useState } from "react";
import { glossary } from "@/data/glossary";

export function TermGloss({ term }: { term: string }) {
  const definition = glossary[term];
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  useEffect(() => {
    if (!definition || !isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handleMouseDown(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [definition, isOpen]);

  if (definition === undefined) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`TermGloss: missing glossary entry for "${term}"`);
    }
    return <>{term}</>;
  }

  return (
    <span ref={wrapperRef} className="term-gloss-wrap">
      <button
        type="button"
        className="term-gloss"
        aria-describedby={tooltipId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {term}
      </button>
      <span
        role="tooltip"
        id={tooltipId}
        className={`term-gloss-popover${isOpen ? " is-open" : ""}`}
      >
        {definition}
      </span>
    </span>
  );
}

