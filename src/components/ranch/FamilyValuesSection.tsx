"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { familyValues, imageUrls } from "./ranchConstants"

export function FamilyValuesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="mb-6 text-4xl">Our Family Values</h2>
          <p className="mb-8 font-sans text-lg text-white/80 leading-relaxed">
            The Smith family has been rooted in the Ozark Mountains for
            generations. Our commitment to faith, family, and the land guides
            everything we do. We believe in raising our cattle with the same
            care and attention we give our own children.
          </p>
          <div className="space-y-4">
            {familyValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  key={index}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <IconComponent className="h-6 w-6 text-luxury-gold" />
                  <span className="font-sans text-lg">{value.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          className="-mx-4 relative h-[300px] md:mx-0 md:h-[450px]"
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            alt="Smith family horseback riding on the ranch"
            className="rounded-2xl object-cover"
            fill
            src={imageUrls.familyWorking}
          />
        </motion.div>
      </div>
    </section>
  )
}

