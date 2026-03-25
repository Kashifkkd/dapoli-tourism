"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// ── Coastal SVG Icons ─────────────────────────────────────────────────────────
// Each renders at ~20×20 viewBox, gold strokes/fills to match #ffdea5 accent

const PalapaIcon = () => (
  <svg width="22" height="20" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left panel */}
    <path d="M14 4 C9 4 2 8 2 14 L14 14Z" fill="#ffdea5" opacity="0.9" />
    {/* Right panel */}
    <path d="M14 4 C19 4 26 8 26 14 L14 14Z" fill="#e9c176" opacity="0.9" />
    {/* Pole */}
    <line x1="14" y1="13" x2="14" y2="26" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" />
    {/* Base */}
    <line x1="10" y1="26" x2="18" y2="26" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" />
    {/* Fringe ticks */}
    <line x1="6" y1="14" x2="5" y2="16" stroke="#e9c176" strokeWidth="1.2" />
    <line x1="10" y1="14" x2="10" y2="16.5" stroke="#e9c176" strokeWidth="1.2" />
    <line x1="14" y1="14" x2="14" y2="17" stroke="#e9c176" strokeWidth="1.2" />
    <line x1="18" y1="14" x2="18" y2="16.5" stroke="#e9c176" strokeWidth="1.2" />
    <line x1="22" y1="14" x2="23" y2="16" stroke="#e9c176" strokeWidth="1.2" />
  </svg>
);

const CocktailIcon = () => (
  <svg width="18" height="22" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Glass body */}
    <polygon points="2,2 20,2 13,14 9,14" fill="#ffdea5" opacity="0.85" />
    {/* Stem */}
    <line x1="11" y1="14" x2="11" y2="24" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" />
    {/* Base */}
    <line x1="7" y1="24" x2="15" y2="24" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" />
    {/* Straw */}
    <line x1="15" y1="8" x2="21" y2="1" stroke="#e9c176" strokeWidth="1.6" strokeLinecap="round" />
    {/* Cherry */}
    <circle cx="21" cy="1" r="2" fill="#e9c176" />
    {/* Liquid fill */}
    <polygon points="5,8 17,8 13,14 9,14" fill="#e9c176" opacity="0.6" />
  </svg>
);

const SunglassesIcon = () => (
  <svg width="26" height="14" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left lens */}
    <rect x="1" y="2" width="12" height="10" rx="5" stroke="#ffdea5" strokeWidth="1.8" />
    {/* Right lens */}
    <rect x="19" y="2" width="12" height="10" rx="5" stroke="#ffdea5" strokeWidth="1.8" />
    {/* Bridge */}
    <line x1="13" y1="7" x2="19" y2="7" stroke="#ffdea5" strokeWidth="1.8" />
    {/* Arms */}
    <line x1="1" y1="5" x2="-3" y2="3" stroke="#ffdea5" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="31" y1="5" x2="35" y2="3" stroke="#ffdea5" strokeWidth="1.5" strokeLinecap="round" />
    {/* Lens tint */}
    <rect x="2" y="3" width="10" height="8" rx="4" fill="#ffdea5" opacity="0.15" />
    <rect x="20" y="3" width="10" height="8" rx="4" fill="#ffdea5" opacity="0.15" />
  </svg>
);

const PalmTreeIcon = () => (
  <svg width="22" height="26" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trunk */}
    <path d="M14 32 C13 24 11 18 14 10" stroke="#ffdea5" strokeWidth="2" strokeLinecap="round" />
    {/* Left leaf */}
    <path d="M14 10 C10 5 3 6 4 11" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Right leaf */}
    <path d="M14 10 C18 5 25 6 24 11" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Top leaf */}
    <path d="M14 10 C11 3 14 0 17 5" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Lower-left leaf */}
    <path d="M14 13 C9 10 5 12 6 16" stroke="#e9c176" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    {/* Lower-right leaf */}
    <path d="M14 13 C19 10 23 12 22 16" stroke="#e9c176" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    {/* Coconuts */}
    <circle cx="12" cy="9" r="1.5" fill="#e9c176" />
    <circle cx="15" cy="10" r="1.5" fill="#e9c176" />
  </svg>
);

const AnchorIcon = () => (
  <svg width="18" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ring at top */}
    <circle cx="12" cy="5" r="3.5" stroke="#ffdea5" strokeWidth="1.8" />
    {/* Vertical shaft */}
    <line x1="12" y1="8.5" x2="12" y2="26" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" />
    {/* Cross bar */}
    <line x1="5" y1="12" x2="19" y2="12" stroke="#ffdea5" strokeWidth="1.8" strokeLinecap="round" />
    {/* Bottom curve */}
    <path d="M5 26 C5 20 12 18 12 26 C12 18 19 20 19 26" stroke="#ffdea5" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* End dots */}
    <circle cx="5" cy="26" r="1.5" fill="#ffdea5" />
    <circle cx="19" cy="26" r="1.5" fill="#ffdea5" />
  </svg>
);

const ICONS = [PalapaIcon, CocktailIcon, SunglassesIcon, PalmTreeIcon, AnchorIcon];
const ICON_INTERVAL = 2500; // ms per icon

type CursorMode = "default" | "hover" | "link";

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [iconIndex, setIconIndex] = useState(0);
  const [iconFading, setIconFading] = useState(false);

  // Cycle icons
  useEffect(() => {
    const id = setInterval(() => {
      setIconFading(true);
      setTimeout(() => {
        setIconIndex((i) => (i + 1) % ICONS.length);
        setIconFading(false);
      }, 300);
    }, ICON_INTERVAL);
    return () => clearInterval(id);
  }, []);

  // GSAP mouse tracking
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.09;
      ringY += (mouseY - ringY) * 0.09;
      gsap.set(ring, { x: ringX, y: ringY });
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", onMove);

    const selectors = "a, button, [role='button'], input, label, [data-cursor-hover]";

    const onEnter = (e: Event) => {
      const tag = (e.currentTarget as HTMLElement).tagName;
      setMode(tag === "A" || tag === "BUTTON" ? "link" : "hover");
    };
    const onLeave = () => setMode("default");

    const attach = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();

    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(tick);
      mo.disconnect();
    };
  }, []);

  const CurrentIcon = ICONS[iconIndex];
  const isLink = mode === "link";
  const isHover = mode === "hover";

  const ringSize = isLink ? "28px" : isHover ? "48px" : "52px";
  const ringBorder = isLink
    ? "1.5px solid rgba(255,222,165,0.6)"
    : isHover
    ? "1.5px solid #ffdea5"
    : "1.5px solid rgba(0,6,19,0.55)";
  const ringBg = isLink ? "transparent" : isHover ? "rgba(0,6,19,0.75)" : "rgba(0,6,19,0.72)";

  return (
    <>
      {/* ── Dot ─────────────────────────────────────────────── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isLink ? "8px" : "6px",
          height: isLink ? "8px" : "6px",
          background: "#ffdea5",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "opacity 300ms, width 200ms, height 200ms",
          willChange: "transform",
        }}
      />

      {/* ── Icon Ring ───────────────────────────────────────── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          border: ringBorder,
          borderRadius: "50%",
          background: ringBg,
          backdropFilter: "blur(4px)",
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          pointerEvents: "none",
          zIndex: 9998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition:
            "opacity 300ms, width 300ms cubic-bezier(0.34,1.56,0.64,1), height 300ms cubic-bezier(0.34,1.56,0.64,1), border 200ms, background 200ms",
          willChange: "transform",
        }}
      >
        {/* Cycling SVG icon — hidden on links so they don't obstruct click targets */}
        {!isLink && (
          <div
            style={{
              opacity: iconFading ? 0 : 0.95,
              transform: iconFading ? "scale(0.7)" : "scale(1)",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
          >
            <CurrentIcon />
          </div>
        )}
      </div>
    </>
  );
}
