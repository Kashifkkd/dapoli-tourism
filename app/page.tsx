import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import DestinationsGrid from "@/app/components/DestinationsGrid";
import ExperienceSection from "@/app/components/ExperienceSection";
import DealsSection from "@/app/components/DealsSection";
import DapoliGallery from "@/app/components/DapoliGallery";
import JournalSection from "@/app/components/JournalSection";
import NewsletterSection from "@/app/components/NewsletterSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsGrid />
        {/* <ExperienceSection /> */}
        <DealsSection />
        <DapoliGallery />
        <JournalSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
