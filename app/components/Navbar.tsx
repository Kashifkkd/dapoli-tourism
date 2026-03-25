"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent over hero, switches to dark navy frosted glass after scrolling past
  const isAtHero =
    scrollY < (typeof window !== "undefined" ? window.innerHeight * 0.85 : 700);

  return (
    <nav
      id="main-nav"
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={
        isAtHero
          ? {
              background: "transparent",
              boxShadow: "none",
            }
          : {
              background: "rgba(0, 6, 19, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 2px 40px rgba(0,6,19,0.4)",
            }
      }
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="text-xl font-headline font-extrabold tracking-tight text-white transition-opacity duration-300 hover:opacity-80"
        >
          Dapoli Tourism
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-9 items-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              id={`nav-link-${label.toLowerCase()}`}
              href={href}
              className="font-label text-sm font-medium transition-colors duration-300 text-white/70 hover:text-[#ffdea5]"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Plan Visit CTA */}
          <a
            id="nav-cta"
            href="#newsletter"
            className="px-5 py-2 text-xs font-label font-semibold uppercase tracking-widest transition-all duration-300 hidden md:inline-block"
            style={
              isAtHero
                ? {
                    border: "1px solid rgba(255,222,165,0.5)",
                    color: "#ffdea5",
                    background: "transparent",
                  }
                : {
                    border: "1px solid #ffdea5",
                    color: "#261900",
                    background: "#ffdea5",
                  }
            }
          >
            Plan Visit
          </a>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            className="md:hidden material-symbols-outlined text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isMobileMenuOpen ? "400px" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
          background: "rgba(0, 6, 19, 0.97)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block font-label font-semibold text-sm text-white/70 hover:text-[#ffdea5] py-3 transition-colors border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#newsletter"
            className="block text-center mt-5 py-3 text-xs font-label uppercase tracking-widest font-semibold"
            style={{ background: "#ffdea5", color: "#261900" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </nav>
  );
}
