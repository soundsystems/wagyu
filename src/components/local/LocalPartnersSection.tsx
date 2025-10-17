"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { localPartners } from "./localConstants"

const PARTNER_GRID_DELAY = 0.2

export function LocalPartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % localPartners.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-3xl md:text-4xl">Find Us Locally</h2>
        <p className="mx-auto max-w-3xl px-4 font-sans text-lg text-white/80 md:text-xl">
          Bring home Ozark Natural Steak Co. American Wagyu from select partners
          across Northwest Arkansas. Our community collaborations make it easy
          to pick up premium, ranch-raised beef close to home.
        </p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2">
        {localPartners.map((partner, index) => (
          <motion.div
            className="group overflow-hidden rounded-2xl bg-luxury-charcoal/30 transition-all hover:border-luxury-gold/40"
            initial={{ opacity: 0, y: 30 }}
            key={partner.name}
            transition={{ duration: 0.6, delay: index * PARTNER_GRID_DELAY }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image
                alt={partner.image}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                src={
                  partner.name === "Honeywheat"
                    ? "/Honeywheat-Bakery-featured-image.webp"
                    : "/Fairmount_Farm_Market.webp"
                }
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-luxury-gold text-luxury-black">
                  {partner.type}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl text-white">{partner.name}</h3>
              <p className="mb-4 font-sans text-white/80 leading-relaxed">
                {partner.description}
              </p>
              <div className="mb-6 rounded-lg bg-luxury-black/30 p-4">
                <h4 className="mb-2 text-luxury-gold">Community Impact</h4>
                <p className="font-sans text-white/90">{partner.impact}</p>
              </div>
              <Button
                asChild
                className="w-full cursor-pointer border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                variant="luxury-outline"
              >
                <a
                  aria-label={`Visit ${partner.name} website`}
                  href={partner.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {localPartners.map((partner, index) => (
              <motion.div
                className="w-full flex-shrink-0 px-6"
                key={partner.name}
              >
                <motion.div
                  className="group overflow-hidden rounded-2xl bg-luxury-charcoal/30 transition-all hover:border-luxury-gold/40"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: index * PARTNER_GRID_DELAY,
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="relative h-40 overflow-hidden rounded-t-xl">
                    <Image
                      alt={partner.image}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill
                      src={
                        partner.name === "Honeywheat"
                          ? "/Honeywheat-Bakery-featured-image.webp"
                          : "/Fairmount_Farm_Market.webp"
                      }
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-luxury-gold text-luxury-black">
                        {partner.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-white text-xl">{partner.name}</h3>
                    <p className="mb-4 font-sans text-sm text-white/80 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="mb-4 rounded-lg bg-luxury-black/30 p-3">
                      <h4 className="mb-2 text-luxury-gold text-sm">
                        Community Impact
                      </h4>
                      <p className="font-sans text-sm text-white/90">
                        {partner.impact}
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full cursor-pointer border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                      variant="luxury-outline"
                    >
                      <a
                        aria-label={`Visit ${partner.name} website`}
                        href={partner.website}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Visit
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
