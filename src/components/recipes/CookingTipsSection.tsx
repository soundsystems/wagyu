"use client"

import { motion } from "motion/react"
import { cookingTips } from "./recipesConstants"

export function CookingTipsSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Essential Cooking Tips</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Master these fundamental techniques to unlock the exceptional flavor
          and texture of American Wagyu beef.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cookingTips.map((tip, index) => {
          const IconComponent = tip.icon
          return (
            <motion.div
              className="rounded-lg bg-luxury-charcoal/50 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/10">
                <IconComponent className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="mb-4 text-xl">{tip.title}</h3>
              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

