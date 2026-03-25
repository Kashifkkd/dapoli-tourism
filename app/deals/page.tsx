import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Deals & Packages — Dapoli Tourism",
  description:
    "Explore the best Dapoli travel packages — weekend beach escapes, heritage trails, luxury resort stays, and coastal adventures. Book now with top travel partners.",
};

const allDeals = [
  {
    id: "weekend-escape",
    badge: "Best Seller",
    badgeColor: "#ffdea5",
    title: "Weekend Beach Escape",
    subtitle: "2 Nights · 3 Days",
    itinerary: [
      "Day 1: Arrive Dapoli, check-in, evening at Murud Beach",
      "Day 2: Ladghar sunrise, dolphin-spotting boat ride, Suvarnadurg fort by boat from Harnai",
      "Day 3: Karde Beach morning swim, Malvani breakfast, departure",
    ],
    includes: ["2N Hotel Stay", "Breakfast Daily", "Boat to Suvarnadurg", "Local Guide"],
    partner: "MakeMyTrip",
    partnerUrl: "https://www.makemytrip.com",
    originalPrice: "₹8,999",
    discountedPrice: "₹6,499",
    discount: "28% OFF",
    rating: "4.6",
    reviews: "2,100",
  },
  {
    id: "heritage-trail",
    badge: "Popular",
    badgeColor: "#afc8f0",
    title: "Konkan Heritage Trail",
    subtitle: "3 Nights · 4 Days",
    itinerary: [
      "Day 1: Panhalekaji Caves (2nd century rock-cut) + Unhavare Hot Springs",
      "Day 2: Kadyavarcha Ganpati temple, Anjarle Turtle Beach",
      "Day 3: Kanakdurg fort trek, Harnai fish auction",
      "Day 4: Kelshi Beach & Kolthare, departure",
    ],
    includes: ["3N Homestay", "All Meals", "Guide", "Temple Entry", "Fort Permits"],
    partner: "Thrillophilia",
    partnerUrl: "https://www.thrillophilia.com",
    originalPrice: "₹13,499",
    discountedPrice: "₹9,799",
    discount: "27% OFF",
    rating: "4.8",
    reviews: "1,400",
  },
  {
    id: "family-resort",
    badge: "Family Pick",
    badgeColor: "#b5e8c8",
    title: "Luxury Resort Stay",
    subtitle: "2 Nights · 3 Days",
    itinerary: [
      "Day 1: Check-in at The Fern Samali Resort / Regenta Waterfront, pool & spa",
      "Day 2: Guided Karde Beach walk, sunset at Ladghar (Tamas Teertha)",
      "Day 3: In-resort breakfast, departure",
    ],
    includes: ["5-Star Resort", "Breakfast Included", "Pool & Spa", "Airport Cab"],
    partner: "Booking.com",
    partnerUrl: "https://www.booking.com",
    originalPrice: "₹18,000",
    discountedPrice: "₹12,999",
    discount: "28% OFF",
    rating: "4.7",
    reviews: "890",
  },
  {
    id: "adventure-special",
    badge: "Trending",
    badgeColor: "#ffb347",
    title: "Coastal Adventure Package",
    subtitle: "2 Nights · 3 Days",
    itinerary: [
      "Day 1: Parasailing & jet-skiing at Karde Beach",
      "Day 2: Kayaking, snorkeling at Kelshi, night beach camping",
      "Day 3: Morning yoga on beach, departure",
    ],
    includes: ["Beach Camp Tent", "All Activities", "Instructor", "Meals"],
    partner: "Yatra",
    partnerUrl: "https://www.yatra.com",
    originalPrice: "₹10,499",
    discountedPrice: "₹7,299",
    discount: "30% OFF",
    rating: "4.5",
    reviews: "670",
  },
  {
    id: "monsoon-magic",
    badge: "Seasonal",
    badgeColor: "#d5e8b5",
    title: "Monsoon Magic Escape",
    subtitle: "2 Nights · 3 Days",
    itinerary: [
      "Day 1: Drive through lush Sahyadri ghats, arrive Dapoli",
      "Day 2: Waterfall trek near Parshuram Bhumi viewpoint",
      "Day 3: Visit Unhavare hot springs, depart",
    ],
    includes: ["Resort Stay", "Breakfast", "Waterfall Trek", "Hot Springs Entry"],
    partner: "Thrillophilia",
    partnerUrl: "https://www.thrillophilia.com",
    originalPrice: "₹9,499",
    discountedPrice: "₹6,999",
    discount: "26% OFF",
    rating: "4.4",
    reviews: "430",
  },
  {
    id: "honeymoon",
    badge: "Romantic",
    badgeColor: "#f5c6d0",
    title: "Romantic Konkan Getaway",
    subtitle: "3 Nights · 4 Days",
    itinerary: [
      "Day 1: Arrive, couple spa at Keys Lite by Lemon Tree",
      "Day 2: Private sunset cruise near Harnai, candle-lit dinner",
      "Day 3: Anjarle beach walk, dolphin watch",
      "Day 4: Departure with packed Malvani meal",
    ],
    includes: ["Luxury Hotel", "Couple Spa", "Sunset Cruise", "Candle Dinner", "Breakfast"],
    partner: "MakeMyTrip",
    partnerUrl: "https://www.makemytrip.com",
    originalPrice: "₹22,999",
    discountedPrice: "₹16,499",
    discount: "28% OFF",
    rating: "4.9",
    reviews: "560",
  },
];

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Banner */}
      <div className="bg-primary text-white px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-screen-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-white/60 hover:text-white text-xs font-label uppercase tracking-widest mb-6 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
          <span className="font-label text-xs uppercase tracking-widest text-[#ffdea5] mb-4 block">
            Exclusive Offers
          </span>
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl mb-4">
            Dapoli Travel Packages
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            Handpicked deals curated with leading travel partners — MakeMyTrip,
            Thrillophilia, Yatra, and Booking.com. Best prices guaranteed.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDeals.map(
            ({
              id,
              badge,
              badgeColor,
              title,
              subtitle,
              itinerary,
              includes,
              partner,
              partnerUrl,
              originalPrice,
              discountedPrice,
              discount,
              rating,
              reviews,
            }) => (
              <div
                key={id}
                id={`deal-page-${id}`}
                className="bg-surface-container-lowest flex flex-col"
              >
                <div className="p-6">
                  <span
                    className="inline-block text-[10px] font-label font-bold uppercase tracking-widest px-2.5 py-1 mb-4"
                    style={{ background: badgeColor, color: "#261900" }}
                  >
                    {badge}
                  </span>
                  <h2 className="font-headline font-bold text-xl text-primary mb-1">{title}</h2>
                  <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider block mb-4">
                    {subtitle}
                  </span>

                  {/* Itinerary */}
                  <ul className="space-y-2 mb-5">
                    {itinerary.map((day, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-[#ffdea5] text-sm mt-0.5 shrink-0">
                          check_circle
                        </span>
                        {day}
                      </li>
                    ))}
                  </ul>

                  {/* Includes */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {includes.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-label px-2 py-0.5 bg-surface-container text-on-surface-variant"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="px-6 py-5 mt-auto"
                  style={{ borderTop: "1px solid rgba(0,6,19,0.06)" }}
                >
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-on-surface-variant line-through text-xs font-label">
                        {originalPrice}
                      </span>
                      <div className="font-headline font-bold text-2xl text-primary">
                        {discountedPrice}
                        <span
                          className="text-xs font-label ml-2 font-bold"
                          style={{ color: "#2a7a45" }}
                        >
                          {discount}
                        </span>
                      </div>
                      <span className="text-[10px] text-on-surface-variant font-label">
                        per person · via {partner}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end font-label font-bold text-sm text-primary">
                        <span className="material-symbols-outlined text-[#f9a825] text-sm">star</span>
                        {rating}
                      </div>
                      <span className="text-[10px] text-on-surface-variant font-label">
                        {reviews} reviews
                      </span>
                    </div>
                  </div>
                  <a
                    href={partnerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`book-${id}`}
                    className="block text-center text-xs font-label font-semibold uppercase tracking-widest py-3 bg-primary text-on-primary hover:bg-primary-container transition-colors duration-300"
                  >
                    Book on {partner}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
