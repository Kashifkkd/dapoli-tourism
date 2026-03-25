"use client";

import { useScrollReveal, revealStyle } from "@/app/hooks/useScrollReveal";

export default function NewsletterSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="newsletter"
      className="py-20 md:py-32 bg-primary text-white text-center px-6"
    >
      <div ref={sectionRef} className="max-w-2xl mx-auto">
        <h2
          className="font-headline text-3xl md:text-4xl mb-6 md:mb-8 italic"
          style={revealStyle(isVisible, 0)}
        >
          Stay Inspired
        </h2>
        <p
          className="text-white/60 mb-8 md:mb-12 font-body text-sm md:text-base"
          style={revealStyle(isVisible, 200)}
        >
          Join our circle of coastal explorers. Receive curated stories from
          the Konkan, seasonal travel guides, and early access to exclusive
          Dapoli experiences.
        </p>
        <form
          className="flex flex-col md:flex-row gap-4 items-stretch justify-center"
          onSubmit={(e) => e.preventDefault()}
          style={revealStyle(isVisible, 400)}
        >
          <input
            id="newsletter-email"
            className="bg-transparent border-b border-white/20 focus:border-tertiary-fixed text-center md:text-left px-4 py-4 w-full md:w-80 font-body outline-none transition-colors duration-300 text-white placeholder-white/40"
            placeholder="Email Address"
            type="email"
            required
            aria-label="Email address for newsletter subscription"
          />
          <button
            id="newsletter-subscribe"
            type="submit"
            className="bg-tertiary-fixed text-on-tertiary-fixed px-10 md:px-12 py-4 font-label uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim transition-all active:scale-95 duration-200 hover:shadow-lg hover:shadow-tertiary-fixed/30"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
