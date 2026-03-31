"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const IMAGE_URLS = [
  "https://images.unsplash.com/photo-1536935338773-84642228f980?w=600&auto=format&fit=crop", // Cocktail
  "https://images.unsplash.com/photo-1508296695146-257a8bf40ebc?w=600&auto=format&fit=crop", // Sunglasses
  "https://images.unsplash.com/photo-1506544777-64cfbeaeb56b?w=600&auto=format&fit=crop", // Palm tree
  "https://images.unsplash.com/photo-1563220494-0ea5c1b5a5c6?w=600&auto=format&fit=crop", // Anchor
  "https://images.unsplash.com/photo-1515003197203-2415c9287c80?w=600&auto=format&fit=crop"  // Seashell
];

const ICON_INTERVAL = 3000; // ms per image

type CursorMode = "default" | "hover" | "link";

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [iconIndex, setIconIndex] = useState(0);
  const [iconFading, setIconFading] = useState(false);

  // Cycle images
  useEffect(() => {
    const id = setInterval(() => {
      setIconFading(true);
      setTimeout(() => {
        setIconIndex((i) => (i + 1) % IMAGE_URLS.length);
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

  const currentImage = IMAGE_URLS[iconIndex];
  const isLink = mode === "link";
  const isHover = mode === "hover";

  const ringSize = isLink ? "28px" : isHover ? "48px" : "64px";
  const ringBorder = isLink
    ? "1.5px solid rgba(255,222,165,0.6)"
    : isHover
    ? "1.5px solid #ffdea5"
    : "1.5px solid rgba(0,6,19,0.55)";
  const ringBg = isLink ? "transparent" : isHover ? "rgba(0,6,19,0.75)" : "rgba(0,6,19,0.72)";

  return (
    <>
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
          backdropFilter: isLink ? "none" : "blur(4px)",
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
          overflow: "hidden",
        }}
      >
        {!isLink && !isHover && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              opacity: iconFading ? 0 : 0.95,
              transform: iconFading ? "scale(0.7)" : "scale(1)",
              transition: "opacity 300ms ease, transform 300ms ease",
            }}
          >
            <img 
              src={currentImage} 
              alt="Cursor content" 
              className="object-cover w-full h-full pointer-events-none select-none" 
            />
          </div>
        )}
      </div>
    </>
  );
}
