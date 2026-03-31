"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal, revealStyle } from "@/app/hooks/useScrollReveal";
import { ImagesScrollingAnimation } from "@/app/components/ui/images-scrolling-animation";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop", // Beach wide
  "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2940&auto=format&fit=crop", // Fort/Coast
  "https://images.unsplash.com/photo-1627885474720-6dc7dd91ec4d?q=80&w=2805&auto=format&fit=crop", // Caves/Nature
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop", // Fishermen/Sunset
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2940&auto=format&fit=crop", // Coastal house
];

export default function DesktopImageGrid() {
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="hidden md:block py-28 bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-4xl text-primary font-bold mb-4">
              Glimpses of Dapoli
            </h2>
            <p className="text-on-surface-variant max-w-lg">
              A curated collection of visual moments from the untouched Konkan coastline.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-primary font-label uppercase tracking-widest text-sm pb-1 hover:text-primary-container transition-colors"
            style={{ borderBottom: "1px solid rgba(0,6,19,0.2)" }}
          >
            View More Images
          </Link>
        </div>

        {/* Framer Motion Scrolling Animation */}
        <ImagesScrollingAnimation />
      </div>
    </section>
  );
}
