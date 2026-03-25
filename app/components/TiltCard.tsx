"use client";

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  glare?: boolean;
  scale?: number;
}

/**
 * Aceternity-inspired 3D tilt card.
 * Tracks mouse position relative to card center and applies
 * CSS perspective + rotateX/Y transform in real time.
 */
export default function TiltCard({
  children,
  className = "",
  style: propStyle,
  intensity = 12,
  glare = true,
  scale = 1.02,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("none");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [glareOpacity, setGlareOpacity] = useState(0);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (-mouseY / (rect.height / 2)) * intensity;
    const rotateY = (mouseX / (rect.width / 2)) * intensity;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    );

    // Glare position as % of card
    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
    setGlareOpacity(0.15);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlareOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 100ms ease-out",
        willChange: "transform",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
        ...propStyle,
      }}
    >
      {children}
      {/* Glare overlay */}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.9), transparent 60%)`,
            transition: "opacity 200ms ease",
          }}
        />
      )}
    </div>
  );
}
