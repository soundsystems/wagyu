"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { recipeCategories } from "./recipesConstants"

export function RecipeCategoriesSection() {
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
      setCurrentIndex((prev) => (prev + 1) % recipeCategories.length)
    }, 6000)

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
        <h2 className="mb-6 text-3xl md:text-4xl">Recipe Categories</h2>
        <p className="mx-auto max-w-3xl px-4 font-sans text-gray-300 text-lg leading-relaxed md:text-xl">
          Explore our curated collection of American Wagyu recipes, organized by
          cooking style and occasion.
        </p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="hidden gap-8 md:grid md:grid-cols-2">
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

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {recipeCategories.map((category, index) => (
              <motion.div className="w-full flex-shrink-0 px-6" key={index}>
                <motion.div
                  className="overflow-hidden rounded-2xl bg-luxury-charcoal/30"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="relative h-48">
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
                  <div className="p-6">
                    <h3 className="mb-3 text-xl">{category.title}</h3>
                    <p className="font-sans text-gray-300 text-sm leading-relaxed">
                      {category.description}
                    </p>
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

