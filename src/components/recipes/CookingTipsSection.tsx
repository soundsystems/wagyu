"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { cookingTips } from "./recipesConstants"

export function CookingTipsSection() {
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
      setCurrentIndex((prev) => (prev + 1) % cookingTips.length)
    }, 4000)

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
        <h2 className="mb-6 text-3xl md:text-4xl">Essential Cooking Tips</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-lg md:text-xl leading-relaxed px-4">
          Master these fundamental techniques to unlock the exceptional flavor
          and texture of American Wagyu beef.
        </p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cookingTips.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <motion.div
                  className="w-full flex-shrink-0 px-6"
                  key={index}
                >
                  <motion.div
                    className="rounded-lg bg-luxury-charcoal/50 p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                      <IconComponent className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <h3 className="mb-3 text-lg text-white">{tip.title}</h3>
                    <p className="font-sans text-gray-300 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

