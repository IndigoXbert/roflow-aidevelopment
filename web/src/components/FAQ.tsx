"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "How does RoFlow generate game code?",
    answer:
      "RoFlow uses Claude AI to understand your game concept, produce a full Game Design Document, and then generate production-ready Luau scripts for Roblox Studio — including server scripts, local scripts, modules, and UI code.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all. RoFlow handles the scripting for you. Just describe your game idea in plain English and the AI takes care of the rest. Advanced users can edit the generated code directly.",
  },
  {
    question: "What types of games can I create?",
    answer:
      "Anything you can build in Roblox — obbies, tycoons, simulators, RPGs, battle royales, horror games, and more. If Roblox supports it, RoFlow can generate it.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer a free tier with 3 projects so you can try RoFlow risk-free. Pro and Team plans unlock unlimited projects, advanced AI features, and collaboration tools. No hidden fees — cancel anytime.",
  },
  {
    question: "Can I export my code to Roblox Studio?",
    answer:
      "Yes. RoFlow generates standard Luau code that you can copy directly into Roblox Studio. We're also building a Roblox Studio plugin for one-click deployment (coming soon).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wide bg-primary-50 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Got <span className="text-primary-600">Questions</span>?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
