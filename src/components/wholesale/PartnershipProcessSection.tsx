"use client"

import { motion } from "motion/react"

export function PartnershipProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We'll discuss your needs, volume requirements, and quality specifications.",
    },
    {
      number: "02",
      title: "Product Sampling",
      description:
        "Experience our American Wagyu beef with samples tailored to your menu.",
    },
    {
      number: "03",
      title: "Partnership Agreement",
      description:
        "Establish terms, delivery schedules, and ongoing support structure.",
    },
    {
      number: "04",
      title: "Ongoing Partnership",
      description:
        "Regular deliveries, quality assurance, and continued culinary support.",
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
        <h2 className="mb-6 text-4xl">Partnership Process</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Starting a wholesale partnership with Ozark Natural Steak Co. is
          straightforward and designed to ensure your success.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-luxury-gold font-bold text-2xl text-luxury-black">
              {step.number}
            </div>
            <h3 className="mb-4 text-xl">{step.title}</h3>
            <p className="font-sans text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

