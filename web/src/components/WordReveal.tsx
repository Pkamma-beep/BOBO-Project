"use client";

import { useEffect, useRef } from "react";

type WordRevealProps = {
  segments: string[];
  className?: string;
};

export default function WordReveal({ segments, className }: WordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const spans =
      container.querySelectorAll<HTMLSpanElement>("span[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-[0.15]");
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { rootMargin: "0px 0px -35% 0px", threshold: 0.6 }
    );

    spans.forEach((span) => observer.observe(span));
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={containerRef} className={`word-reveal ${className ?? ""}`}>
      {segments.map((segment, i) => (
        <span
          key={i}
          data-reveal
          className={i === 0 ? "opacity-100" : "opacity-[0.15]"}
        >
          {segment}
        </span>
      ))}
    </p>
  );
}
