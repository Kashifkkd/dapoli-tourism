import { ImagesScrollingAnimation } from "@/app/components/ui/images-scrolling-animation";
import { MapPin } from "lucide-react";

export default function DapoliGallery() {
  return (
    <section className="bg-surface-container-lowest relative pt-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center pt-10">
        <span className="font-label tracking-widest uppercase text-xs mb-3 md:mb-4 flex items-center justify-center gap-2 text-primary">
          <MapPin size={16} /> Dapoli Sights
        </span>
        <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
          Visual Journey
        </h2>
      </div>
      <ImagesScrollingAnimation />
    </section>
  );
}
