"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export function WholesaleHeroSection() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Premium American Wagyu cattle"
          className="object-cover object-center"
          fill
          priority
          src="/Waygu_Cattle_Side_by_Side.png"
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
            Wholesale Partnership
          </Badge>
          <h1 className="mb-6 text-5xl leading-tight tracking-wide md:text-6xl">
            Partner With <br />
            <span className="text-luxury-gold">Premium Quality</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-base text-white/90 leading-relaxed md:text-lg lg:text-xl">
            Join restaurants, retailers, and culinary professionals who trust
            Ozark Natural Steak Co. for consistently exceptional American Wagyu
            beef.
          </p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              className="bg-luxury-gold text-luxury-black hover:bg-luxury-champagne transition-colors duration-300 px-8 py-3 text-lg font-semibold cursor-pointer"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

