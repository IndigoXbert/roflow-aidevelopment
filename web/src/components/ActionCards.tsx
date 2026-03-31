"use client";

import { useEffect, useRef, useState } from "react";

export default function ActionCards() {
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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="text-primary-600">Build</span>?
          </h2>
          <p className="text-gray-500 mt-3">Jump in with a blank canvas or start from a template.</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Start New Project */}
          <button className="group relative p-10 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary-400 bg-gray-50/50 hover:bg-primary-50/50 transition-all duration-300 text-left hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mb-5 transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start New Project</h3>
            <p className="text-sm text-gray-500">
              Describe your game idea and let AI build it from scratch.
            </p>
          </button>

          {/* Browse Templates */}
          <button className="group relative p-10 rounded-2xl border-2 border-dashed border-gray-200 hover:border-purple-400 bg-gray-50/50 hover:bg-purple-50/50 transition-all duration-300 text-left hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center mb-5 transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Templates</h3>
            <p className="text-sm text-gray-500">
              Pick a proven game template and customize it your way.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
