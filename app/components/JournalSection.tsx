"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal, revealStyle } from "@/app/hooks/useScrollReveal";
import SpotlightCard from "@/app/components/SpotlightCard";
import { getAllPosts } from "@/app/lib/blog";

export default function JournalSection() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts for the homepage

  return (
    <section id="journal" className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-lowest">
      {/* Section Header */}
      <div ref={headerRef} className="max-w-screen-2xl mx-auto text-center mb-14 md:mb-20">
        <span
          className="font-label tracking-widest uppercase text-xs mb-3 md:mb-4 block text-on-surface-variant"
          style={revealStyle(headerVisible, 0)}
        >
          The Journal
        </span>
        <h2
          className="font-headline text-4xl md:text-5xl text-primary font-bold"
          style={revealStyle(headerVisible, 150)}
        >
          Stories from the Coast
        </h2>
        <p
          className="text-on-surface-variant mt-4 max-w-xl mx-auto"
          style={revealStyle(headerVisible, 250)}
        >
          Dispatches from Dapoli — real accounts from the beach, the fort walls, and the misty Sahyadri trails.
        </p>
      </div>

      {/* Journal Grid */}
      <div ref={gridRef} className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {posts.map((post, index) => (
          <SpotlightCard
            key={post.id}
            className="group cursor-pointer bg-surface-container-lowest"
            spotlightColor="rgba(255,222,165,0.1)"
            style={revealStyle(gridVisible, index * 200) as React.CSSProperties}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <article id={`journal-entry-${post.id}`}>
                <div className="aspect-[16/10] mb-6 overflow-hidden bg-surface-container relative">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-1 pb-6">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">
                    {post.edition}
                  </span>
                  <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 group-hover:text-[#5d4201] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.description}
                  </p>
                  <span
                    className="text-xs font-label font-semibold uppercase tracking-widest pb-1 group-hover:translate-x-1 inline-block transition-all duration-300"
                    style={{
                      borderBottom: "1px solid rgba(0,6,19,0.15)",
                      color: "#000613",
                    }}
                  >
                    Read Story →
                  </span>
                </div>
              </article>
            </Link>
          </SpotlightCard>
        ))}
      </div>

      <div className="max-w-screen-2xl mx-auto mt-16 text-center">
        <Link
          href="/blog"
          className="inline-block px-8 py-4 text-sm font-label font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
          style={{
            border: "1px solid #000613",
            color: "#000613",
            background: "transparent",
          }}
        >
          Explore All Articles
        </Link>
      </div>
    </section>
  );
}
