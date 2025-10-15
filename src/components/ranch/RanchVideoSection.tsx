"use client"

import { motion } from "motion/react"

export function RanchVideoSection() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        className="-mx-4 relative h-[300px] overflow-hidden rounded-2xl md:mx-0 md:h-[500px]"
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/Ranch_Drone_Shot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </section>
  )
}

