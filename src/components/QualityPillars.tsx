"use client"

import { Clock, Droplets, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const qualityPillars = [
  {
    icon: Droplets,
    title: "Buttery Flavor",
    description:
      "Rich marbling creates an incredibly buttery taste with notes that develop naturally through our careful raising and aging process.",
  },
  {
    icon: Zap,
    title: "Tender Texture",
    description:
      "Naturally achieved tenderness through low-stress handling and patient aging—never rushed, always consistent.",
  },
  {
    icon: Clock,
    title: "Clean & Slow-Aged",
    description:
      "Our patient aging process develops depth and complexity while maintaining the clean, pure flavor of premium Wagyu.",
  },
]

export function QualityPillars() {
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
      setCurrentIndex((prev) => (prev + 1) % qualityPillars.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section
      aria-labelledby="quality-pillars-heading"
      className="bg-luxury-charcoal py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <header className="mb-12 text-center md:mb-16">
          <h2
            className="mb-4 px-4 font-bold text-2xl text-white md:text-3xl"
            id="quality-pillars-heading"
          >
            What Premium Means to Us
          </h2>
        </header>

        {/* Desktop Grid View */}
        <div
          aria-label="Quality pillars defining premium beef"
          className="hidden grid-cols-3 gap-12 md:grid"
          role="list"
        >
          {qualityPillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <article className="text-center" key={index} role="listitem">
                <div className="mb-6 flex justify-center">
                  <div
                    aria-hidden="true"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-luxury-gold/10"
                  >
                    <IconComponent className="h-10 w-10 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl text-luxury-gold">
                  {pillar.title}
                </h3>
                <p className="font-sans text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </article>
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
              {qualityPillars.map((pillar, index) => {
                const IconComponent = pillar.icon
                return (
                  <article
                    className="w-full flex-shrink-0 px-6 text-center"
                    key={index}
                    role="listitem"
                  >
                    <div className="mb-4 flex justify-center">
                      <div
                        aria-hidden="true"
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/10"
                      >
                        <IconComponent className="h-8 w-8 text-luxury-gold" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg text-luxury-gold">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-gray-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
