"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const videos = [
  { title: "Obby Adventure", color: "from-blue-400 to-blue-600" },
  { title: "Tycoon Empire", color: "from-purple-400 to-purple-600" },
  { title: "Battle Royale", color: "from-red-400 to-red-600" },
  { title: "Simulator World", color: "from-green-400 to-green-600" },
  { title: "RPG Quest", color: "from-amber-400 to-amber-600" },
];

export default function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => setActive((a) => (a + 1) % videos.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + videos.length) % videos.length), []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Showcase</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Games Built with <span className="text-primary-600">RoFlow</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Real gameplay from projects created using our AI pipeline.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video max-w-4xl mx-auto">
            <div className={`absolute inset-0 bg-gradient-to-br ${videos[active].color} flex items-center justify-center transition-all duration-500`}>
              {/* Play icon */}
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors hover:scale-110 transform duration-200">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <polygon points="8,5 19,12 8,19" />
                </svg>
              </div>
              <span className="absolute bottom-6 left-6 text-white font-semibold text-lg bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                {videos[active].title}
              </span>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
