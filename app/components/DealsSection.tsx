"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal, revealStyle } from "@/app/hooks/useScrollReveal";
import SpotlightCard from "@/app/components/SpotlightCard";

const deals = [
  {
    id: "weekend-escape",
    badge: "Best Seller",
    badgeColor: "#ffdea5",
    badgeText: "#261900",
    title: "Weekend Beach Escape",
    subtitle: "2 Nights · 3 Days",
    location: "Karde & Murud, Dapoli",
    description:
      "Dolphin spotting at Harnai Port, Suvarnadurg fort boat ride, and authentic Malvani seafood dinner by the shore.",
    highlights: ["Karde Beach", "Suvarnadurg Fort", "Malvani Dinner"],
    originalPrice: "₹8,999",
    discountedPrice: "₹6,499",
    discount: "28% OFF",
    partner: "MakeMyTrip",
    rating: "4.6",
    reviews: "2.1k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT1Tts6IxTU2WBnbHQXJJBO4sOJl1GTmx2eG787XY2adug4sf6LNfA7dlunAuEDIlpnqGD25RxuC2J-k3qkeCb-1yN53zzkhPFwnkecBRoLe3zpw6lFxdxiCfYpGPOJBwtnawVQWkKUDy_2icS80xj6iFcByClRIz72KjjaGR_95LApLIuadFYXoJ9xU88vDB4Tnz3PlIcT7WgWibN9dhoDrCVPi6MZohcXF3HXqEtss9WWnd8Jf2dnxE9_nK3KSiMyBTEMzFVx5w",
    imageAlt: "Karde Beach golden sands at sunset, Dapoli",
  },
  {
    id: "heritage-trail",
    badge: "Popular",
    badgeColor: "#afc8f0",
    badgeText: "#002244",
    title: "Konkan Heritage Trail",
    subtitle: "3 Nights · 4 Days",
    location: "Panhalekaji & Harnai, Dapoli",
    description:
      "Ancient rock-cut caves, Kadyavarcha Ganpati temple, Unhavare hot springs — a deep dive into Konkan's living history.",
    highlights: ["Panhalekaji Caves", "Hot Springs", "Fort Treks"],
    originalPrice: "₹13,499",
    discountedPrice: "₹9,799",
    discount: "27% OFF",
    partner: "Thrillophilia",
    rating: "4.8",
    reviews: "1.4k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATEiN8llh3xUDYl1Wjbu0FGvNImBOpEty7ChCmQ_fJbmkCzT6nnZrppTSdlTzo6-MQJRcmADnUiCa_IQqHrO9Cs46Wm_67CuHEBlTpybNM6F2hRBBE9L_co4Rk4T0AWmtgNv91oHCa3LwWiGTKUpQmOeAonLR62hmDh5WNxbx2Yudg-Zkdkwr0vM0WcyxMaQhxmuMZ6y3J9NBsiDdGYWTS3eDN3WzjGRASc5HPcRswm4j2iE6SuzRmOT3cjkLrqyuOvPs1cb3Jro8",
    imageAlt: "Suvarnadurg sea fortress glimpsed from the boat, Dapoli",
  },
  {
    id: "family-resort",
    badge: "Family Pick",
    badgeColor: "#b5e8c8",
    badgeText: "#1a4a2e",
    title: "Luxury Resort Stay",
    subtitle: "2 Nights · 3 Days",
    location: "Fern Samali & Regenta, Dapoli",
    description:
      "Pool, spa, complimentary breakfast, and guided beach walks at some of Dapoli's finest sea-facing resorts.",
    highlights: ["5-Star Resort", "Pool & Spa", "Beach Walk"],
    originalPrice: "₹18,000",
    discountedPrice: "₹12,999",
    discount: "28% OFF",
    partner: "Booking.com",
    rating: "4.7",
    reviews: "890",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFdGeDs32WYQKLG5xIRY2qsVKwJ5injdvoTP3IgC0Tgf0KaUmFpbIh1YMCfQ8tALY5A2_jUwQgksNRMESAcGxt8XWSMzpyvgqIBHoJfpBPPr3xHYcPHtLw3punX_jHM-bf3Qx3JQRM-bnDMKWYx1Wg1q0x4oNQ1bJCakfr5FXPiVESqR1hB5w2xYbO2TN-3FWoamHQMsUsJ4Wx26lXwe7udZOKsj3XfaeeGmwxx-YkludT26DolHdumurcpv4LDENKcu_SrJ7EAtA",
    imageAlt: "Crystal clear sea at Karde beach, perfect for resort goers",
  },
  {
    id: "adventure-special",
    badge: "Trending",
    badgeColor: "#ffb347",
    badgeText: "#5c2e00",
    title: "Coastal Adventure Pack",
    subtitle: "2 Nights · 3 Days",
    location: "Karde, Kelshi & Ladghar",
    description:
      "Parasailing, jet-skiing, kayaking, snorkeling at Kelshi, and a night under the stars right on the beach.",
    highlights: ["Parasailing", "Kayaking", "Night Camping"],
    originalPrice: "₹10,499",
    discountedPrice: "₹7,299",
    discount: "30% OFF",
    partner: "Yatra",
    rating: "4.5",
    reviews: "670",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUomBlTtWLkoBCgsUsnFh3uRxh3Jou-h3QnFu4jH2-hqRk1HeGauCebZF6gWtXcAQsVYPYu5fky0FX8wiNngQDYoxgxjUFCNBap6_nztrDIl0dMyALMIkK3rCpJkyT31CRVeu4Ep7RTLexdWs4P9ps0Pq_8W3bRIRZZITxG7GjpDIpf_Ttb3S0XE2VDG4a-G6iwVcgVrSNo6kv3xahIsAgUYRO4cgTsIbA9Sgd9F1LwwYvsX2D6GW3sf-5kJ9imHnYh5YcPQa5X4o",
    imageAlt: "Thrilling water sports at Dapoli's coastal adventure beaches",
  },
];

export default function DealsSection() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="deals" className="py-20 md:py-32 px-6 md:px-12 bg-[#f3f3f3]">
      <div className="max-w-screen-2xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          <div style={revealStyle(headerVisible, 0)}>
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3 block">
              Curated Packages
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-3 leading-tight">
              Travel Deals &amp; Packages
            </h2>
            <p className="text-on-surface-variant leading-relaxed max-w-lg">
              Hand-picked holiday packages curated with India&apos;s top travel partners —
              MakeMyTrip, Thrillophilia, Yatra &amp; Booking.com.
            </p>
          </div>
          <div style={revealStyle(headerVisible, 200)}>
            <Link
              href="/deals"
              id="deals-view-all"
              className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity group"
              style={{ color: "#000613", borderBottom: "1px solid rgba(0,6,19,0.25)", paddingBottom: "4px" }}
            >
              View All Packages
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-300">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>

        {/* ── Cards Grid ─────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {deals.map(({
            id, badge, badgeColor, badgeText, title, subtitle, location,
            description, highlights, originalPrice, discountedPrice,
            discount, partner, rating, reviews, image, imageAlt,
          }, index) => (
            <SpotlightCard
              key={id}
              spotlightColor="rgba(255,222,165,0.14)"
              className="flex flex-col group"
              style={revealStyle(gridVisible, index * 90) as React.CSSProperties}
            >
              <Link
                href="/deals"
                id={`deal-card-${id}`}
                className="flex flex-col flex-1 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                {/* ── Hero Image ─── */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,6,19,0) 40%, rgba(0,6,19,0.75) 100%)",
                    }}
                  />

                  {/* Badge — top left */}
                  <span
                    className="absolute top-3 left-3 text-[10px] font-label font-black uppercase tracking-widest px-2.5 py-1"
                    style={{ background: badgeColor, color: badgeText }}
                  >
                    {badge}
                  </span>

                  {/* Duration pill — top right */}
                  <span className="absolute top-3 right-3 text-[10px] font-label font-semibold uppercase tracking-wider px-2.5 py-1 bg-black/50 text-white backdrop-blur-sm">
                    {subtitle}
                  </span>

                  {/* Location overlaid at bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-label uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm text-[#ffdea5]">location_on</span>
                      {location}
                    </div>
                  </div>
                </div>

                {/* ── Card Body ─── */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Stars + rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {[1,2,3,4,5].map((n) => (
                      <span
                        key={n}
                        className="material-symbols-outlined text-sm"
                        style={{ color: parseFloat(rating) >= n ? "#f9a825" : "#e0e0e0", fontSize: "14px" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="font-label font-bold text-xs text-primary ml-1">{rating}</span>
                    <span className="text-on-surface-variant text-[10px] font-label">({reviews})</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline font-bold text-base text-primary leading-snug mb-2 group-hover:text-on-tertiary-fixed-variant transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
                    {description}
                  </p>

                  {/* Highlight pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-label px-2 py-0.5 text-on-surface-variant"
                        style={{ background: "#f3f3f3", border: "1px solid rgba(0,6,19,0.07)" }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* ── Pricing + CTA ─── */}
                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(0,6,19,0.06)" }}
                  >
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <span className="text-on-surface-variant line-through text-xs font-label">
                          {originalPrice}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-headline font-bold text-xl text-primary">
                            {discountedPrice}
                          </span>
                          <span
                            className="text-[10px] font-label font-black px-1.5 py-0.5"
                            style={{ background: "#e8f5e9", color: "#2a7a45" }}
                          >
                            {discount}
                          </span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant font-label">
                          per person
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-label text-on-surface-variant mb-0.5">via</div>
                        <div className="font-label font-bold text-xs text-primary">{partner}</div>
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-center gap-2 py-3 text-xs font-label font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3"
                      style={{
                        background: "linear-gradient(135deg, #000613 0%, #001f3f 100%)",
                        color: "#ffdea5",
                      }}
                    >
                      Book Now
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform duration-300">
                        arrow_right_alt
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SpotlightCard>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <div
          className="text-center mt-12 md:mt-16"
          style={revealStyle(gridVisible, 400)}
        >
          <Link
            href="/deals"
            id="deals-more-btn"
            className="inline-flex items-center gap-3 px-10 py-4 font-label font-bold uppercase tracking-widest text-sm hover:shadow-xl active:scale-95 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #000613 0%, #001f3f 100%)",
              color: "#ffdea5",
            }}
          >
            <span className="material-symbols-outlined text-base">local_offer</span>
            Explore All Deals
          </Link>
        </div>
      </div>
    </section>
  );
}
