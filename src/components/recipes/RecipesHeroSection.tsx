"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "../ui/badge"

export function RecipesHeroSection() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Family cooking together in kitchen"
          className="object-cover object-center"
          fill
          priority
          src="/Smith_Family_Dinner.jpg"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-luxury-gold px-6 py-2 text-luxury-black">
            Recipe Collection
          </Badge>
          <h1 className="mb-6 text-3xl leading-tight tracking-wide md:text-6xl">
            From Our Kitchen <br />
            <span className="text-luxury-gold">to Yours</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-base text-white/90 leading-relaxed md:text-lg lg:text-xl">
            Discover the secrets behind cooking premium American Wagyu beef with
            recipes, techniques, and tips from the Smith family kitchen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

