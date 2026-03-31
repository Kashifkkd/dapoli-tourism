"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import TypingText from "@/app/components/TypingText";

type Slide = {
  type: "image" | "video";
  src: string;
  alt: string;
  tagline: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    type: "video",
    src: "/videos/hero-ocean-waves.mp4",
    alt: "Gentle ocean waves meeting the sandy Dapoli shore",
    tagline: "The Art of Coastal Living",
    title: "Dapoli, Unveiled",
    subtitle:
      "Where the Sahyadris meet the Arabian Sea — a paradise of pristine beaches, ancient forts, and timeless Konkan culture.",
  },
  {
    type: "video",
    src: "/videos/hero-coastal-aerial.mp4",
    alt: "Cinematic aerial view of the Konkan coastline",
    tagline: "Beyond the Horizon",
    title: "Infinite Coastline",
    subtitle:
      "From the lush Sahyadris to the gleaming Arabian Sea — Dapoli's landscape rewards those bold enough to explore.",
  },
  {
    type: "video",
    src: "/videos/hero-ocean-waves.mp4",
    alt: "Waves of the Arabian Sea at Karde beach, Dapoli",
    tagline: "Where Every Wave Tells a Story",
    title: "The Konkan Shore",
    subtitle:
      "Feel the rhythm of the ocean at Karde, Murud, and Ladghar — shores so untouched they feel like a well-kept secret.",
  },
  {
    type: "video",
    src: "/videos/hero-coastal-aerial.mp4",
    alt: "Aerial view of coastal Maharashtra near Dapoli",
    tagline: "Heritage Written in Stone",
    title: "Suvarnadurg Rising",
    subtitle:
      "A Maratha naval fortress born from the sea — centuries of maritime history etched in an island of rock and tide.",
  },
];

const SLIDE_DURATION = 7000;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      setPrevSlide(prev);
      setTextKey((k) => k + 1);
      return next;
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
    setTextKey((k) => k + 1);
  }, [currentSlide]);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center overflow-hidden bg-[#000613]"
    >
      {/* Slides */}
      {slides.map((s, index) => {
        const isActive = index === currentSlide;
        const wasPrev = index === prevSlide;
        return (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{
              zIndex: isActive ? 1 : wasPrev ? 0 : 0,
              opacity: isActive ? 1 : 0,
            }}
          >
            {s.type === "image" ? (
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={95}
                sizes="100vw"
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(1.0)",
                  transition: "transform 8000ms ease-out",
                  filter: "none",
                }}
              />
            ) : (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={s.src}
                autoPlay
                muted
                loop
                playsInline
                preload={index <= 1 ? "auto" : "metadata"}
              />
            )}
          </div>
        );
      })}

      {/* Cinematic gradient — slightly deeper mid to lift warm text */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(0,6,19,0.3) 0%, rgba(0,6,19,0.35) 45%, rgba(0,6,19,0.8) 100%)",
        }}
      />
      {/* Bottom vignette for indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          zIndex: 3,
          background:
            "linear-gradient(to top, rgba(0,6,19,0.8) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative w-full px-6 md:px-20 max-w-screen-xl mx-auto flex flex-col items-center text-center"
        style={{ zIndex: 10 }}
      >
        {/* Tagline */}
        <span
          className="text-[#ffdea5] font-label tracking-[0.28em] uppercase text-xs mb-5 block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 700ms ease-out 200ms",
          }}
        >
          {slide.tagline}
        </span>

        {/* Headline with TypingText */}
        <h1
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 font-extrabold tracking-tight"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 900ms ease-out 350ms",
          }}
        >
          <TypingText
            key={`title-${textKey}`}
            text={slide.title}
            loop={false}
            showCursor
            cursorCharacter="|"
            cursorClassName="bg-[#ffdea5] !w-[3px] !h-[0.85em] translate-y-1"
            typingSpeed={55}
            initialDelay={200}
            className="" style={{ color: "#f5f0e8" }}
          />
        </h1>

        {/* Subtitle — fade in after title appears */}
        <p
          className="font-body text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto"
          key={`sub-${textKey}`}
          style={{
            color: "rgba(245,240,232,0.78)",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 800ms ease-out 900ms, transform 800ms ease-out 900ms",
          }}
        >
          {slide.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 800ms ease-out 1100ms",
          }}
        >
          <a
            id="hero-cta-explore"
            href="#destinations"
            className="px-9 py-4 font-label uppercase tracking-widest text-sm active:scale-95 transition-all duration-200 text-center font-semibold"
            style={{
              background: "#ffdea5",
              color: "#261900",
            }}
          >
            Explore Destinations
          </a>
          <a
            id="hero-cta-story"
            href="#journal"
            className="text-white/85 font-label uppercase tracking-widest text-sm flex items-center group border border-white/20 px-7 py-4 hover:border-white/50 transition-colors duration-300"
          >
            Our Story
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform duration-300 text-base">
              arrow_right_alt
            </span>
          </a>
        </div>
      </div>

      {/* Slide dots + count */}
      <div
        className="absolute bottom-9 left-6 sm:left-20 flex items-center gap-3"
        style={{ zIndex: 20, opacity: isLoaded ? 1 : 0, transition: "opacity 700ms ease-out 1400ms" }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              height: "2px",
              width: currentSlide === index ? "44px" : "18px",
              background: currentSlide === index ? "#ffdea5" : "rgba(255,255,255,0.45)",
              transition: "width 400ms ease, background 400ms ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
        <span
          className="font-label text-xs tracking-[0.15em] ml-1"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 right-6 sm:right-20"
        style={{ zIndex: 20, opacity: isLoaded ? 1 : 0, transition: "opacity 700ms ease-out 1600ms" }}
      >
        <a
          href="#destinations"
          className="flex flex-col items-center group"
          style={{ color: "rgba(255,255,255,0.8)" }}
          aria-label="Scroll to destinations"
        >
          <span className="font-label text-[10px] uppercase tracking-widest mb-1">
            Scroll
          </span>
          <span className="material-symbols-outlined animate-bounce">
            keyboard_arrow_down
          </span>
        </a>
      </div>
    </section>
  );
}
