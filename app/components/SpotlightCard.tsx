"use client";

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spotlightColor?: string;
}

/**
 * Aceternity-inspired spotlight card.
 * A radial spotlight follows the cursor inside the card boundary.
 * Fades in on mouse-enter, fades out on leave. Gold spotlightColor by default.
 */
export default function SpotlightCard({
  children,
  className = "",
  style: propStyle,
  spotlightColor = "rgba(255, 222, 165, 0.12)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden", ...propStyle }}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x}% ${spotlight.y}%, ${spotlightColor}, transparent 70%)`,
          transition: "opacity 300ms ease",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
