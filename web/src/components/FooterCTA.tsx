"use client";

import { useEffect, useRef, useState } from "react";

export default function FooterCTA() {
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

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative text-center">
            <span className="inline-block text-sm font-semibold text-primary-200 uppercase tracking-wide bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Your Next Roblox Hit
            </h2>
            <p className="text-primary-100 max-w-lg mx-auto mb-8">
              Join hundreds of developers using AI to build games faster than ever.
              Your next project is one click away.
            </p>
            <button className="px-8 py-3.5 bg-white text-primary-600 font-semibold rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Start creating now &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
