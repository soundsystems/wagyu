"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { ranchPractices } from "./ranchConstants"

export function RanchPracticesSection() {
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
      setCurrentIndex((prev) => (prev + 1) % ranchPractices.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="py-12 md:py-20">
      <motion.div
        className="mb-8 text-center md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-3xl md:text-4xl">Our Ranch Practices</h2>
        <p className="mx-auto max-w-4xl px-4 font-sans text-base text-gray-300 leading-relaxed md:text-lg lg:text-xl">
          Every aspect of our operation is designed to ensure the highest
          quality beef while maintaining the highest standards of animal welfare
          and environmental stewardship.
        </p>
      </motion.div>

      {/* Desktop Grid View */}
      <div className="hidden gap-6 md:grid md:grid-cols-3 md:gap-8">
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
              <p className="text-pretty font-sans text-gray-300 leading-relaxed">
                {practice.description}
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
            {ranchPractices.map((practice, index) => {
              const IconComponent = practice.icon
              return (
                <div className="w-full flex-shrink-0 px-6" key={index}>
                  <motion.div
                    className="rounded-lg bg-luxury-charcoal/50 p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10">
                      <IconComponent className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <h3 className="mb-3 text-lg text-white">
                      {practice.title}
                    </h3>
                    <p className="text-pretty font-sans text-gray-300 text-sm leading-relaxed">
                      {practice.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}