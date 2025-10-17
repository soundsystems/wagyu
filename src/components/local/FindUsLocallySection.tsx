"use client"

import { Clock, MapPin, Phone } from "lucide-react"
import { motion } from "motion/react"

export function FarmersMarketSection() {
  const locations = [
    {
      name: "Fayetteville Farmers Market",
      address: "1 E Center St, Fayetteville, AR 72701",
      hours: "Saturday 7:00 AM - 2:00 PM",
      phone: "(479) 575-8260",
      type: "Farmers Market",
      available: "Ground beef, steaks, and specialty cuts",
    },
    {
      name: "Bentonville Farmers Market",
      address: "1001 SE J St, Bentonville, AR 72712",
      hours: "Saturday 7:00 AM - 1:00 PM",
      phone: "(479) 271-6810",
      type: "Farmers Market",
      available: "Full selection of premium cuts",
    },
    {
      name: "Rogers Farmers Market",
      address: "317 W Walnut St, Rogers, AR 72756",
      hours: "Tuesday & Saturday 7:00 AM - 1:00 PM",
      phone: "(479) 631-3555",
      type: "Farmers Market",
      available: "Seasonal availability, call ahead",
    },
  ]

  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Find Us at Local Markets</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Visit us at farmers markets throughout Northwest Arkansas to purchase
          our premium American Wagyu beef directly from the source.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {locations.map((location, index) => (
          <motion.div
            className="rounded-2xl bg-luxury-charcoal/30 p-6"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                <MapPin className="h-6 w-6 text-luxury-gold" />
              </div>
              <div>
                <h3 className="text-white text-xl">{location.name}</h3>
                <span className="text-luxury-gold text-sm">
                  {location.type}
                </span>
              </div>
            </div>

            <p className="mb-4 font-sans text-gray-300">{location.address}</p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-luxury-gold" />
                <span className="font-sans text-gray-300 text-sm">
                  {location.hours}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-luxury-gold" />
                <span className="font-sans text-gray-300 text-sm">
                  {location.phone}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-luxury-black/30 p-4">
              <h4 className="mb-2 text-luxury-gold text-sm">
                Available Products
              </h4>
              <p className="font-sans text-sm text-white/90">
                {location.available}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 rounded-2xl bg-luxury-charcoal/50 p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="mb-4 text-2xl">Can&apos;t Make It to the Market?</h3>
        <p className="mb-6 font-sans text-gray-300">
          Contact us directly to arrange pickup at our ranch or inquire about
          wholesale orders for restaurants and retailers.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="cursor-pointer rounded-lg bg-luxury-gold px-6 py-3 font-medium text-luxury-black transition-colors hover:bg-luxury-champagne">
            Contact Us
          </button>
          <button className="cursor-pointer rounded-lg border border-luxury-gold px-6 py-3 font-medium text-luxury-gold transition-colors hover:bg-luxury-gold hover:text-white">
            Wholesale Inquiry
          </button>
        </div>
      </motion.div>
    </section>
  )
}
