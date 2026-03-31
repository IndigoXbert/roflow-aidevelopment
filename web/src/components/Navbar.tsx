"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="RoFlow" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-900">RoFlow</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-primary-600 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-primary-600 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-primary-600 transition-colors">
            FAQ
          </a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2">
            Log in
          </button>
          <button className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors px-5 py-2.5 rounded-full">
            Start Creating &rarr;
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm text-gray-600 hover:text-primary-600">Features</a>
          <a href="#pricing" className="block text-sm text-gray-600 hover:text-primary-600">Pricing</a>
          <a href="#faq" className="block text-sm text-gray-600 hover:text-primary-600">FAQ</a>
          <hr className="border-gray-100" />
          <button className="block text-sm text-gray-600">Log in</button>
          <button className="block text-sm text-white bg-primary-600 px-5 py-2.5 rounded-full w-full">
            Start Creating &rarr;
          </button>
        </div>
      )}
    </nav>
  );
}
