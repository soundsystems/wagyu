"use client"

import { Droplets, Leaf, Mountain } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

export function OzarkDifferenceSection() {
  const ozarkBenefits = [
    {
      icon: Mountain,
      title: "Pure Ozark Water",
      description:
        "Our cattle drink from pristine mountain springs and natural water sources that flow through the Ozark Mountains.",
    },
    {
      icon: Droplets,
      title: "Clean Air Quality",
      description:
        "The fresh mountain air and elevation provide an environment free from industrial pollutants.",
    },
    {
      icon: Leaf,
      title: "Rich Pasture Land",
      description:
        "Our cattle graze on nutrient-rich native grasses that have grown in these valleys for centuries.",
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <motion.div
          className="-mx-4 relative h-[300px] md:mx-0 md:h-[500px]"
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            alt="Cattle grazing in Ozark pastures"
            className="rounded-2xl object-cover"
            fill
            src="/Hay_Sunrise_Cattle (1).jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="mb-6 text-4xl">The Ozark Difference</h2>
          <p className="mb-8 font-sans text-lg text-white/80 leading-relaxed">
            The Ozark Mountains provide a unique environment that creates
            exceptional beef. Our cattle benefit from the region&apos;s natural
            resources, creating a terroir that enhances the quality and flavor
            of our Wagyu.
          </p>
          <div className="space-y-6">
            {ozarkBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  key={index}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                    <IconComponent className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl">{benefit.title}</h3>
                    <p className="font-sans text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

