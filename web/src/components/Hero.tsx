"use client";

import { useEffect, useRef } from "react";

const avatarColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("animate-fade-in-up");
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-200/30 rounded-full blur-3xl -z-10" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex -space-x-2">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 font-medium">
            Trusted by <strong className="text-gray-700">100+</strong> Developers
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">
            AI-Powered
          </span>{" "}
          Roblox Studio
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Go from idea to playable Roblox game in minutes. RoFlow handles the
          design, scripting, and deployment — so you can focus on creating.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5">
            Start creating today &rarr;
          </button>
          <button className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 transition-all hover:shadow-md hover:-translate-y-0.5">
            Explore all features
          </button>
        </div>
      </div>
    </section>
  );
}
