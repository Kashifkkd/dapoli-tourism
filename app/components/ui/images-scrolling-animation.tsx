"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Murud Beach",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop",
  },
  {
    title: "Suvarnadurg",
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Panhalekaji Caves",
    src: "https://images.unsplash.com/photo-1627885474720-6dc7dd91ec4d?q=80&w=2805&auto=format&fit=crop",
  },
  {
    title: "Harnai Port",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Coastal Life",
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2940&auto=format&fit=crop",
  },
]

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  src: string
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15 + 200}px)`,
        }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-[2rem] relative -top-1/4 flex origin-top flex-col overflow-hidden
                   h-[200px] w-[280px] 
                   sm:h-[240px] sm:w-[360px] 
                   md:h-[400px] md:w-[600px] 
                   lg:h-[500px] lg:w-[800px] shadow-2xl"
      >
        <Image src={src} alt={title} fill className="object-cover" />
      </motion.div>
    </div>
  )
}

const ImagesScrollingAnimation = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div
      ref={container}
      className="relative flex w-full flex-col items-center justify-center 
                                   pb-[50vh] pt-[5vh] 
                                   sm:pb-[60vh] sm:pt-[8vh] 
                                   lg:pb-[70vh] lg:pt-[10vh]"
    >
      {projects.map((project, i) => {
        const targetScale = Math.max(0.6, 1 - (projects.length - i - 1) * 0.08)
        return (
          <StickyCard_001
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}

export { ImagesScrollingAnimation, StickyCard_001 }
