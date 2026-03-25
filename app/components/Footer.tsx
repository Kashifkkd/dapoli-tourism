import Link from "next/link";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-14 md:py-20 px-6 md:px-12 bg-[#0a0f1a] no-line-rule"
    >
      <div className="flex flex-col md:flex-row justify-between items-start w-full pt-10 md:pt-20 max-w-screen-2xl mx-auto gap-12">
        {/* Brand Column */}
        <div className="mb-8 md:mb-0">
          <Link
            href="/"
            className="text-3xl font-headline italic text-tertiary-fixed mb-6 md:mb-8 block"
          >
            Dapoli
          </Link>
          <p className="text-slate-400 max-w-xs mb-6 md:mb-8 font-body normal-case text-sm leading-relaxed">
            Your gateway to the unspoiled beauty of Maharashtra&apos;s Konkan
            coastline — beaches, heritage, and culture curated for the mindful
            traveler.
          </p>
          <div className="flex space-x-6">
            <a
              id="footer-social-1"
              className="text-slate-400 hover:text-white transition-opacity"
              href="#"
              aria-label="Social media"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              id="footer-social-2"
              className="text-slate-400 hover:text-white transition-opacity"
              href="#"
              aria-label="Photo gallery"
            >
              <span className="material-symbols-outlined">camera</span>
            </a>
            <a
              id="footer-social-3"
              className="text-slate-400 hover:text-white transition-opacity"
              href="#"
              aria-label="Email us"
            >
              <span className="material-symbols-outlined">
                alternate_email
              </span>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <h5 className="text-slate-50 font-label text-sm tracking-wide uppercase mb-6 md:mb-8">
              Navigation
            </h5>
            <ul className="space-y-3 md:space-y-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-white transition-opacity font-label text-sm uppercase"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-slate-50 font-label text-sm tracking-wide uppercase mb-6 md:mb-8">
              Legal
            </h5>
            <ul className="space-y-3 md:space-y-4">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-white transition-opacity font-label text-sm uppercase"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-slate-50 font-label text-sm tracking-wide uppercase mb-6 md:mb-8">
              Visit Us
            </h5>
            <p className="text-slate-400 font-label text-sm uppercase leading-loose">
              Dapoli Taluka,
              <br />
              Ratnagiri District,
              <br />
              Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-14 md:mt-20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-slate-500 font-label text-xs tracking-wide uppercase">
          © 2025 Dapoli Tourism. All rights reserved.
        </p>
        <p className="text-slate-600 font-label text-[10px] tracking-widest uppercase">
          The Digital Concierge
        </p>
      </div>
    </footer>
  );
}
