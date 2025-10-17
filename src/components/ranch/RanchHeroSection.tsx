"use client"

import { motion } from "motion/react"

export function RanchHeroSection() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          className="h-full w-full object-cover object-center"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/Ranch_Drone_Shot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Badge className="mb-6 bg-luxury-gold px-6 py-2 text-luxury-black">
            Our Story
          </Badge> */}
          <h1 className="mt-6 mb-6 text-3xl leading-tight tracking-wide md:mt-2 md:text-6xl">
            Two Generations of <br />
            <span className="text-luxury-gold">Ozark Heritage</span>
          </h1>
          <p className="mx-auto mb-8 max-w-7xl font-sans text-base text-white/90 leading-relaxed md:text-lg lg:text-xl">
            From our family to yours, we&apos;ve been raising premium American
            Wagyu cattle with love, integrity, and respect for the land that
            sustains us.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

