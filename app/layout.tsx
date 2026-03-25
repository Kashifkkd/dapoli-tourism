import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/app/components/SmoothScrollProvider";
import AnimatedCursor from "@/app/components/AnimatedCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dapolitourism.com"), // Example domain or replace with process.env.NEXT_PUBLIC_SITE_URL
  title: {
    default: "Discover Dapoli — Coastal Paradise of Maharashtra",
    template: "%s | Dapoli Tourism",
  },
  description:
    "Explore the untouched beauty of Dapoli — pristine beaches, ancient forts, sacred temples, and lush nature trails. Plan your perfect coastal escape in Maharashtra's hidden gem.",
  keywords: ["Dapoli", "Tourism", "Maharashtra", "Beaches", "Konkan", "Travel"],
  openGraph: {
    title: "Discover Dapoli — Coastal Paradise of Maharashtra",
    description:
      "Explore the untouched beauty of Dapoli — pristine beaches, ancient forts, sacred temples, and lush nature trails.",
    url: "https://dapolitourism.com",
    siteName: "Dapoli Tourism",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to /public
        width: 1200,
        height: 630,
        alt: "Dapoli Tourism Hero Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Dapoli — Coastal Paradise of Maharashtra",
    description:
      "Explore the untouched beauty of Dapoli — pristine beaches, ancient forts, sacred temples, and lush nature trails.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
      style={{ cursor: "none" }}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AnimatedCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
