"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "../ui/badge"

export function LocalHeroSection() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Northwest Arkansas landscape"
          className="object-cover object-center"
          fill
          priority
          src="/WhyFayetteville-InLine-Landscape.jpg"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-luxury-gold px-6 py-2 text-luxury-black">
            Supporting Our Local Community
          </Badge>
          <h1 className="mb-6 text-5xl leading-tight tracking-wide md:text-6xl">
            Rooted in <br />
            <span className="text-luxury-gold">Northwest Arkansas</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
            We&apos;re proud to serve our local community, supporting regional
            restaurants, markets, and families with premium American Wagyu beef.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

