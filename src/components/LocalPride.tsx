"use client"

import { useEffect, useState } from "react"
import { ChefHat, MapPin, Store } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function LocalPride() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const landmarks = [
    {
      icon: MapPin,
      title: "Ozark Mountains",
      description: "Where it all began"
    },
    {
      icon: Store,
      title: "Local Markets", 
      description: "Supporting our community"
    },
    {
      icon: ChefHat,
      title: "Regional Restaurants",
      description: "Partners in excellence"
    }
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
      setCurrentIndex((prev) => (prev + 1) % landmarks.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="bg-luxury-charcoal py-16">
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <div className="mb-12 text-center">
          <h2 className="mb-6 font-bold text-3xl md:text-4xl text-white">
            Rooted in Northwest Arkansas
          </h2>
          <p className="mx-auto max-w-7xl font-sans text-gray-300 text-base md:text-lg px-4 text-pretty">
            Proudly raised in the Ozarks, and shipped regionally. We&apos;ll
            always serve local families, restaurants, and community partners
            first.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          {landmarks.map((landmark, index) => {
            const IconComponent = landmark.icon
            return (
              <div key={index} className="rounded-lg bg-luxury-black/50 p-6 text-center">
                <IconComponent className="mx-auto mb-4 h-12 w-12 text-luxury-gold" />
                <h3 className="mb-2 font-sans text-white text-xl">
                  {landmark.title}
                </h3>
                <p className="font-sans text-gray-400">{landmark.description}</p>
              </div>
            )
          })}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden mb-12">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {landmarks.map((landmark, index) => {
                const IconComponent = landmark.icon
                return (
                  <div key={index} className="w-full flex-shrink-0 px-6">
                    <div className="rounded-lg bg-luxury-black/50 p-6 text-center">
                      <IconComponent className="mx-auto mb-4 h-10 w-10 text-luxury-gold" />
                      <h3 className="mb-2 font-sans text-white text-lg">
                        {landmark.title}
                      </h3>
                      <p className="font-sans text-gray-400 text-sm">{landmark.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button
            asChild
            className="hover:!text-white cursor-pointer px-8"
            size="lg"
            variant="luxury-outline"
          >
            <Link href="/local">Find Us Locally</Link>
          </Button>
          <Button
            asChild
            className="hover:!text-white cursor-pointer px-8"
            size="lg"
            variant="luxury-outline"
          >
            <Link href="/wholesale">Wholesale & Restaurants</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
