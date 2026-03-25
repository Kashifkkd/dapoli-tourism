export interface BlogPost {
  id: string;
  slug: string;
  edition: string;
  title: string;
  description: string;
  content: string; // Markdown or HTML string in real app
  date: string;
  image: string;
  alt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "coves",
    slug: "coves-of-karde",
    edition: "Edition 12 • Beaches",
    title: "The Hidden Coves of Karde",
    description:
      "Discover Karde's silver sands where the Arabian Sea meets verdant Sahyadri foothills — dolphin-watching, water sports, and a serenity that city life forgets.",
    content:
      "<p>Karde beach offers an expanse of soft, silver sand stretching for miles. In the early morning mist, it presents a spectacular display of colors as the sun rises over the Sahyadri ranges reflecting in the Arabian Sea.</p><p>Unlike many commercial beaches, Karde has retained its pristine charm. It is particularly famous for dolphin boat rides where playful dolphins guide the local fishing vessels early morning.</p>",
    date: "2026-03-24",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFdGeDs32WYQKLG5xIRY2qsVKwJ5injdvoTP3IgC0Tgf0KaUmFpbIh1YMCfQ8tALY5A2_jUwQgksNRMESAcGxt8XWSMzpyvgqIBHoJfpBPPr3xHYcPHtLw3punX_jHM-bf3Qx3JQRM-bnDMKWYx1Wg1q0x4oNQ1bJCakfr5FXPiVESqR1hB5w2xYbO2TN-3FWoamHQMsUsJ4Wx26lXwe7udZOKsj3XfaeeGmwxx-YkludT26DolHdumurcpv4LDENKcu_SrJ7EAtA",
    alt: "Morning mist over Karde beach in Dapoli with gentle waves",
    author: "Dapoli Tourism Team",
  },
  {
    id: "fort",
    slug: "suvarnadurg-fortress",
    edition: "Edition 11 • Heritage",
    title: "Suvarnadurg: Fort on the Sea",
    description:
      "A chronicle of maritime history — the Maratha naval fortress that rose from the Arabian Sea to guard the Konkan coast. Accessible by boat from Harnai Port.",
    content:
      "<p>Built by Chhatrapati Shivaji Maharaj in 1660, Suvarnadurg (the Golden Fort) stands majestically on a small island off the coast of Harnai. It was a key naval base for the Maratha Empire.</p><p>The fort's sturdy walls, built from massive blocks of stone, have withstood centuries of battering waves. Exploring its ruins invokes a deep sense of the region's rich maritime history.</p>",
    date: "2026-02-15",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy_-HWhRiBQ4QFEo4ZFy5pxoFLIDY8GOwiBNWraoXYaGKKHDS9n-xZvNocfeRtMuttTeGdhD1Ei8Dv1Zc389xUNtM_A9HX1rkt9vzwRGMtV9mICb5BT6DyZZksJaCy_v9aaChP5jLTWI0_Or0iu8HjCOziD2VqQKZhEEl0nNKC_-suMgUIKTn6dvM7KUdjL3TU6RgP4fKxw_qbYP6x1gkxVHH6ObfkecS-Ug8PicCExk6pQFLx9tdwJuRJ30IV9pLMhOIa-PhLR5Q",
    alt: "Historic Suvarnadurg fortress viewed from the sea at sunset",
    author: "Heritage Explorer",
  },
  {
    id: "monsoon",
    slug: "monsoon-sahyadris",
    edition: "Edition 10 • Nature",
    title: "The Monsoon Sahyadris",
    description:
      "Experience the Western Ghats in their most dramatic form — roaring waterfalls, waterfilled trails, and the symphony of monsoon at the Unhavare hot springs.",
    content:
      "<p>When the monsoon hits Dapoli, the surrounding Sahyadri hills transform into a vibrant, lush green paradise. The heavy rains bring hundreds of seasonal waterfalls to life.</p><p>Trails near the Unhavare natural hot springs provide stunning views of valleys covered in mist. It's a surreal experience that draws hikers and nature enthusiasts from all over Maharashtra.</p>",
    date: "2025-07-20",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUomBlTtWLkoBCgsUsnFh3uRxh3Jou-h3QnFu4jH2-hqRk1HeGauCebZF6gWtXcAQsVYPYu5fky0FX8wiNngQDYoxgxjUFCNBap6_nztrDIl0dMyALMIkK3rCpJkyT31CRVeu4Ep7RTLexdWs4P9ps0Pq_8W3bRIRZZITxG7GjpDIpf_Ttb3S0XE2VDG4a-G6iwVcgVrSNo6kv3xahIsAgUYRO4cgTsIbA9Sgd9F1LwwYvsX2D6GW3sf-5kJ9imHnYh5YcPQa5X4o",
    alt: "Lush green valley in the Western Ghats near Dapoli during monsoon",
    author: "Nature Trails",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
