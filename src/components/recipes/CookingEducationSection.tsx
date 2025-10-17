"use client"

import { useEffect, useState } from "react"
import { Award, BookOpen, ChefHat } from "lucide-react"
import { motion } from "motion/react"

export function CookingEducationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const educationFeatures = [
    {
      icon: BookOpen,
      title: "Step-by-Step Guides",
      description:
        "Detailed instructions with photos for every cooking method, from basic techniques to advanced culinary skills.",
    },
    {
      icon: ChefHat,
      title: "Professional Tips",
      description:
        "Learn from our family's years of experience and professional cooking techniques that bring out the best in American Wagyu.",
    },
    {
      icon: Award,
      title: "Temperature Charts",
      description:
        "Master the perfect doneness with our comprehensive temperature guides and cooking time recommendations.",
    },
  ]

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
      setCurrentIndex((prev) => (prev + 1) % educationFeatures.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="py-10">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-4 text-2xl md:text-3xl">Master the Art of Cooking Wagyu</h2>
        <p className="mx-auto max-w-3xl px-4 font-sans text-base leading-relaxed text-gray-300 md:text-lg">
          Premium beef deserves premium cooking techniques. Our educational
          content will help you unlock the full potential of American Wagyu in
          your kitchen.
        </p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="hidden gap-4 md:grid md:grid-cols-3">
        {educationFeatures.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              className="rounded-lg bg-luxury-charcoal/50 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                <IconComponent className="h-6 w-6 text-luxury-gold" />
              </div>
              <h3 className="mb-3 text-xl">{feature.title}</h3>
              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                {feature.description}
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
            {educationFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  className="w-full flex-shrink-0 px-4"
                  key={index}
                >
                  <motion.div
                    className="rounded-lg bg-luxury-charcoal/50 p-4 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-luxury-gold/10">
                      <IconComponent className="h-5 w-5 text-luxury-gold" />
                    </div>
                    <h3 className="mb-2 text-base text-white">{feature.title}</h3>
                    <p className="font-sans text-gray-300 text-xs leading-relaxed">
                      {feature.description}
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

