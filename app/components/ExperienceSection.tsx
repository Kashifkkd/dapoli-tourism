"use client";

import Image from "next/image";
import { useScrollReveal, revealStyle } from "@/app/hooks/useScrollReveal";

export default function ExperienceSection() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="experiences"
      className="py-20 md:py-32 bg-surface-container-low overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20"
      >
        {/* Image Column */}
        <div className="w-full md:w-1/2 relative" style={revealStyle(isVisible, 0)}>
          <div className="aspect-[4/5] overflow-hidden rounded-lg relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6chGP18X9TN8Yza26jHrb-XMAxO-Prl4i0NveW4wWaUJQ2B9dL63v5747DR9LmQtNvnFuSuM5tXRA5JjY2ST0Zei0hrXX8HQI9lwO_7l5KymEmMLW5yqOOTrucuYqQoYfy04F8YYN6OjRth1syp-NKde0GkrnpG0zcHKxVe_02dP6zAgjWp4lOxdU7Gq4_WO1ULC7WzW5sFiD57LyIUMe5JcVkdmlLx-IhwJ1zZ8EFONzjl9lys-gK_eTMJHIBKjToxQJp8JXfbE"
              alt="Traditional Konkani fisherman's boat docked at Dapoli's harbor at dawn"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Overlapping Secondary Image */}
          <div
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 h-60 md:w-64 md:h-80 hidden lg:block overflow-hidden rounded-lg ambient-shadow group"
            style={revealStyle(isVisible, 400)}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqerZiL_LTiO3Xc2ghZi5XRv8C2_jbOxML0GLHalZLU9WdFAcY5UzBDzXPcr_Cmo9T3edvdFipQomQu96NIbDnHMZl68qkdq9CMTom229jp8Svus4G-o6X9t267AMynQyi4rqr6xYHOCgl4R2jhi01_7Pnd7Jyjr7O4COxERrLrVxx0JW_tTRfjx_s3VZX04gwI2ZUGyW6gTxhovOfZczbxzI62s_D9TE-Ij2POTWJDnv61ugWG0v_4iAlM6eldh5bAEE81smAPA"
              alt="Freshly prepared Konkani Malvani fish curry served with rice"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="256px"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full md:w-1/2">
          <span
            className="text-on-tertiary-fixed-variant font-label tracking-widest uppercase text-xs mb-4 md:mb-6 block"
            style={revealStyle(isVisible, 200)}
          >
            Immersive Experiences
          </span>
          <h2
            className="font-headline text-3xl md:text-5xl mb-6 md:mb-8 text-primary italic leading-tight"
            style={revealStyle(isVisible, 300)}
          >
            Bespoke Journeys Through Konkan Culture
          </h2>
          <p
            className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 md:mb-10"
            style={revealStyle(isVisible, 400)}
          >
            No two travelers seek the same horizon. From dawn fishing with
            Dapoli&apos;s local communities to heritage walks through centuries-old
            Peshwa-era villages, every experience is crafted to reveal the
            soul of the Konkan coast.
          </p>

          {/* Feature List */}
          <ul className="space-y-5 md:space-y-6 mb-10 md:mb-12">
            {[
              {
                icon: "restaurant",
                title: "Malvani Cuisine",
                desc: "Farm-to-table dining featuring legendary Konkani seafood and coconut-rich coastal delicacies.",
                delay: 500,
              },
              {
                icon: "castle",
                title: "Heritage Trails",
                desc: "Walk through the footsteps of the Maratha empire at Suvarnadurg, Kanakdurg, and Panhalekaji caves.",
                delay: 600,
              },
              {
                icon: "water",
                title: "Water Adventures",
                desc: "Snorkeling, dolphin spotting, and kayaking through the pristine waters of Harnai and Ladghar.",
                delay: 700,
              },
            ].map(({ icon, title, desc, delay }) => (
              <li
                key={title}
                className="flex items-start space-x-4 group cursor-default"
                style={revealStyle(isVisible, delay)}
              >
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant mt-1 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <div>
                  <h4 className="font-headline text-lg md:text-xl text-primary group-hover:text-primary-container transition-colors duration-300">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div style={revealStyle(isVisible, 800)}>
            <a
              id="experience-cta"
              href="#newsletter"
              className="inline-block bg-primary text-on-primary px-8 md:px-10 py-4 font-label uppercase tracking-widest text-sm hover:bg-primary-container transition-all hover:shadow-lg hover:shadow-primary/10 active:scale-95 duration-200"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
