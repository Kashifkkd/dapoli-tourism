"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * CSS style helper for staggered reveal animations.
 * Usage: style={revealStyle(isVisible, delay)}
 */
export function revealStyle(isVisible: boolean, delayMs = 0) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.8s ease-out ${delayMs}ms, transform 0.8s ease-out ${delayMs}ms`,
  };
}
