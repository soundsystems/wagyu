"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { recipeCategories } from "./recipesConstants"

export function RecipeCategoriesSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Recipe Categories</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Explore our curated collection of American Wagyu recipes, organized by
          cooking style and occasion.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {recipeCategories.map((category, index) => (
          <motion.div
            className="overflow-hidden rounded-2xl bg-luxury-charcoal/30"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative h-64">
              <Image
                alt={category.title}
                className="object-cover"
                fill
                src={category.image}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-luxury-gold px-3 py-1 font-medium text-luxury-black text-sm">
                  {category.count}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="mb-4 text-2xl">{category.title}</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                {category.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

