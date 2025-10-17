"use client"

import { Quote } from "lucide-react"
import { motion } from "motion/react"

export function FamilyMottoSection() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Quote className="mx-auto mb-8 h-12 w-12 text-luxury-gold" />
        <blockquote className="mb-8 text-luxury-gold text-xl italic leading-relaxed md:text-2xl lg:text-4xl">
          &ldquo;Giving people more than they expect.&rdquo;
        </blockquote>
        <p className="font-sans text-gray-400 text-xl">
          — The Smith Family Motto
        </p>

        <motion.div
          className="mt-12 rounded-2xl bg-luxury-charcoal/30 p-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="font-sans text-base text-white/90 leading-relaxed md:text-lg">
            This simple yet powerful motto drives every decision we make on our
            ranch. From the care we give our cattle to the relationships we
            build with our customers, we&apos;re committed to exceeding
            expectations and delivering exceptional quality in everything we do.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

