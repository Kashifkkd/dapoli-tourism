"use client";

import Image from "next/image";
import { useScrollReveal, revealStyle } from "@/app/hooks/useScrollReveal";
import TiltCard from "@/app/components/TiltCard";

const destinations = [
  {
    id: "beaches",
    label: "Karde • Murud • Ladghar",
    title: "Pristine Beaches",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT1Tts6IxTU2WBnbHQXJJBO4sOJl1GTmx2eG787XY2adug4sf6LNfA7dlunAuEDIlpnqGD25RxuC2J-k3qkeCb-1yN53zzkhPFwnkecBRoLe3zpw6lFxdxiCfYpGPOJBwtnawVQWkKUDy_2icS80xj6iFcByClRIz72KjjaGR_95LApLIuadFYXoJ9xU88vDB4Tnz3PlIcT7WgWibN9dhoDrCVPi6MZohcXF3HXqEtss9WWnd8Jf2dnxE9_nK3KSiMyBTEMzFVx5w",
    alt: "Karde Beach, Dapoli — golden sands with clear turquoise waters perfect for swimming and dolphin spotting",
    colSpan: "md:col-span-8",
  },
  {
    id: "forts",
    label: "Suvarnadurg • Kanakdurg",
    title: "Maratha Forts",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATEiN8llh3xUDYl1Wjbu0FGvNImBOpEty7ChCmQ_fJbmkCzT6nnZrppTSdlTzo6-MQJRcmADnUiCa_IQqHrO9Cs46Wm_67CuHEBlTpybNM6F2hRBBE9L_co4Rk4T0AWmtgNv91oHCa3LwWiGTKUpQmOeAonLR62hmDh5WNxbx2Yudg-Zkdkwr0vM0WcyxMaQhxmuMZ6y3J9NBsiDdGYWTS3eDN3WzjGRASc5HPcRswm4j2iE6SuzRmOT3cjkLrqyuOvPs1cb3Jro8",
    alt: "Suvarnadurg — the golden Maratha sea fort accessible by boat from Harnai Port, Dapoli",
    colSpan: "md:col-span-4",
  },
  {
    id: "caves",
    label: "Panhalekaji • 2nd Century",
    title: "Ancient Caves",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbpCjrF-Gp2bNyVX6YZOZj1z1OIsv1IkmrD2Mbdel5ZKxP3PHcZRLRyMdemC1fsrrOSMhwC4nnT4raATA63WsG1Kg6M1adHzeZkNl37ryjJkhGkRlDub8EhJxEp-XNO2Ab-5ibLNm5ixOHlEDZa7e_fdVMBuxmf8uFItNOWTgHFDvnSpXXLWW_ZTNSQ96QyAi8bdT_cL6A6BP3_aTuZJYVwgX_FhyCOGDjtjPXbAuVCtof6dnGdCy9bsgq92kzfVNGtrF71Z2nIDc",
    alt: "Panhalekaji Caves near Dapoli — 29 ancient rock-cut caves dating to the 2nd–3rd century with Hindu deity idols",
    colSpan: "md:col-span-4",
  },
  {
    id: "nature",
    label: "Sahyadris • Hot Springs",
    title: "Nature & Wellness",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBQ98RnKG11IQBLKwsvY_WCocVobozMyJ71hmUBttqmpq771jNMTbHWYtzRQ4a-7L0GZbHEIfRkSQ3U6HWAJL7vT_37NXUBAH7JLXEDogCwsQ1pkwcBdB2cQszorvKSgnYyDdrBG0o9h3NKW7oi2Q9yK5nOCdgk4QreIN5-F779s7hVfFlsC4n_vp409If7b0UUm39Apw33x6vFo-a-AXqFYFXed6mb2heTKaSDPWE-fCS3ndnPFmRj9pQ8qxkn0U_IShoLl0umGY",
    alt: "Lush Sahyadri Western Ghats near Dapoli with trekking trails and Unhavare therapeutic hot springs",
    colSpan: "md:col-span-8",
  },
];

export default function DestinationsGrid() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="destinations" className="py-20 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8"
        >
          <div className="max-w-xl" style={revealStyle(headerVisible, 0)}>
            <h2 className="font-headline text-4xl md:text-5xl mb-4 md:mb-6 text-primary font-bold">
              Curated Destinations
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              From the golden sands of Karde and Murud to the ancient Suvarnadurg sea
              fortress, Panhalekaji caves, and therapeutic Unhavare hot springs —
              Dapoli's every corner holds a story.
            </p>
          </div>
          <a
            id="destinations-view-all"
            href="#destinations"
            className="text-primary font-label uppercase tracking-widest text-sm pb-1 hover:text-primary-container transition-colors"
            style={{
              borderBottom: "1px solid rgba(0,6,19,0.2)",
              ...revealStyle(headerVisible, 200),
            }}
          >
            View All Destinations
          </a>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[800px]">
          {destinations.map(({ id, label, title, image, alt, colSpan }, index) => (
            <TiltCard
              key={id}
              intensity={7}
              glare
              scale={1.015}
              className={`${colSpan} min-h-[250px] md:min-h-0`}
              style={revealStyle(gridVisible, index * 150)}
            >
              <div
                id={`destination-card-${id}`}
                className="relative overflow-hidden group cursor-pointer w-full h-full"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    colSpan === "md:col-span-8"
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-white">
                  <span className="font-label text-xs uppercase tracking-widest opacity-70 mb-2 block">
                    {label}
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold group-hover:translate-x-1 transition-transform duration-500">
                    {title}
                  </h3>
                </div>
                {/* Gold glow border on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 60px rgba(255,222,165,0.1)" }}
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
