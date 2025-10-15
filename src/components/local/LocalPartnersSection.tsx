"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { localPartners } from "./localConstants"

export function LocalPartnersSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Find Us Locally</h2>
        <p className="mx-auto max-w-3xl font-sans text-white/80 text-xl">
          Bring home Ozark Natural Steak Co. American Wagyu from select partners
          across Northwest Arkansas. Our community collaborations make it easy
          to pick up premium, ranch-raised beef close to home.
        </p>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {localPartners.map((partner, index) => (
          <motion.div
            className="group overflow-hidden rounded-2xl bg-luxury-charcoal/30 transition-all hover:border-luxury-gold/40"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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
                className="w-full cursor-pointer border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                onClick={() => window.open(partner.website, "_blank")}
                variant="luxury-outline"
              >
                Visit
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
