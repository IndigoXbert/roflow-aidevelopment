"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMouseMove(e: MouseEvent) {
      el!.style.setProperty("--mx", `${e.clientX}px`);
      el!.style.setProperty("--my", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        ["--mx" as string]: "-1000px",
        ["--my" as string]: "-1000px",
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.35) 1.5px, transparent 1.5px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.35) 1.5px, transparent 1.5px)
        `,
        backgroundSize: "40px 40px",
        maskImage: `radial-gradient(circle 400px at var(--mx) var(--my), black 0%, black 30%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 400px at var(--mx) var(--my), black 0%, black 30%, transparent 100%)`,
      }}
    />
  );
}
