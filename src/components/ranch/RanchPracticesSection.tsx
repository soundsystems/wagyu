"use client"

import { motion } from "motion/react"
import { ranchPractices } from "./ranchConstants"

export function RanchPracticesSection() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        className="mb-8 text-center md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Our Ranch Practices</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Every aspect of our operation is designed to ensure the highest
          quality beef while maintaining the highest standards of animal welfare
          and environmental stewardship.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {ranchPractices.map((practice, index) => {
          const IconComponent = practice.icon
          return (
            <motion.div
              className="rounded-lg bg-luxury-charcoal/50 p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/10">
                <IconComponent className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="mb-4 text-2xl">{practice.title}</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                {practice.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

