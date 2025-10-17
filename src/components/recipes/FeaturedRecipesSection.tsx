"use client"

import { ChevronLeft, ChevronRight, Clock, Star, Users } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { featuredRecipes } from "./recipesConstants"

const SWIPE_THRESHOLD = 50
const DIFFICULTY_LEVELS = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
} as const
const STARS_COUNT = 3
const ANIMATION_DELAY = 0.1
const CAROUSEL_TRANSLATE_PERCENTAGE = 100

const RecipeCard = ({
  recipe,
  index,
}: {
  recipe: (typeof featuredRecipes)[0]
  index: number
}) => (
  <motion.div
    className="overflow-hidden rounded-2xl bg-luxury-charcoal/30"
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.3, delay: index * ANIMATION_DELAY }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="relative h-64">
      <Image
        alt={recipe.title}
        className="object-cover"
        fill
        src={recipe.image}
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    <div className="p-6">
      <h3 className="mb-4 text-2xl">{recipe.title}</h3>
      <p className="mb-6 font-sans text-gray-300 leading-relaxed">
        {recipe.description}
      </p>

      <div className="mb-4 flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{recipe.cookTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{recipe.serves}</span>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-gray-400 text-sm">Difficulty:</span>
        <div className="flex gap-1">
          {new Array(STARS_COUNT).fill(null).map((_, i) => {
            const difficultyLevel =
              DIFFICULTY_LEVELS[
                recipe.difficulty as keyof typeof DIFFICULTY_LEVELS
              ]
            const isFilled = i < difficultyLevel
            return (
              <Star
                className={`h-4 w-4 ${
                  isFilled
                    ? "fill-luxury-gold text-luxury-gold"
                    : "text-gray-600"
                }`}
                key={`star-${i}-${recipe.slug}`}
              />
            )
          })}
        </div>
        <span className="text-gray-400 text-sm">{recipe.difficulty}</span>
      </div>

      <Link
        className="block w-full cursor-pointer rounded-lg bg-luxury-gold py-3 text-center font-medium text-luxury-black transition-colors hover:bg-luxury-champagne"
        href={`/recipes/${recipe.slug}`}
      >
        View Recipe
      </Link>
    </div>
  </motion.div>
)

export function FeaturedRecipesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredRecipes.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredRecipes.length) % featuredRecipes.length
    )
  }, [])

  // Handle swipe gestures
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) {
      return
    }

    let startX = 0
    let isDragging = false

    const handleStart = (e: TouchEvent | MouseEvent) => {
      isDragging = true
      startX = "touches" in e ? e.touches[0].clientX : e.clientX
    }

    const handleMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) {
        return
      }
      e.preventDefault()
    }

    const handleEnd = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) {
        return
      }
      isDragging = false

      const endX = "touches" in e ? e.changedTouches[0].clientX : e.clientX
      const diff = startX - endX

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    }

    carousel.addEventListener("touchstart", handleStart, { passive: false })
    carousel.addEventListener("touchmove", handleMove, { passive: false })
    carousel.addEventListener("touchend", handleEnd)
    carousel.addEventListener("mousedown", handleStart)
    carousel.addEventListener("mousemove", handleMove)
    carousel.addEventListener("mouseup", handleEnd)
    carousel.addEventListener("mouseleave", handleEnd)

    return () => {
      carousel.removeEventListener("touchstart", handleStart)
      carousel.removeEventListener("touchmove", handleMove)
      carousel.removeEventListener("touchend", handleEnd)
      carousel.removeEventListener("mousedown", handleStart)
      carousel.removeEventListener("mousemove", handleMove)
      carousel.removeEventListener("mouseup", handleEnd)
      carousel.removeEventListener("mouseleave", handleEnd)
    }
  }, [nextSlide, prevSlide])

  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Featured Family Recipes</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          These recipes have been passed down through generations of the Smith
          family, telling stories of tradition, love, and the special place that
          American Wagyu beef holds in our family gatherings.
        </p>
      </motion.div>

      {/* Desktop: 2x2 Grid */}
      <div className="hidden grid-cols-2 gap-8 lg:grid">
        {featuredRecipes.map((recipe, index) => (
          <RecipeCard index={index} key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {/* Mobile: Tabbed Carousel */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            className={`-translate-y-1/2 absolute top-1/2 left-4 z-10 rounded-full bg-luxury-charcoal/80 p-2 text-luxury-gold transition-all duration-300 hover:bg-luxury-charcoal hover:text-luxury-champagne ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={prevSlide}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type="button"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className={`-translate-y-1/2 absolute top-1/2 right-4 z-10 rounded-full bg-luxury-charcoal/80 p-2 text-luxury-gold transition-all duration-300 hover:bg-luxury-charcoal hover:text-luxury-champagne ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            onClick={nextSlide}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type="button"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <section
            aria-label="Recipe carousel"
            className="overflow-hidden"
            ref={carouselRef}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * CAROUSEL_TRANSLATE_PERCENTAGE}%)`,
              }}
            >
              {featuredRecipes.map((recipe, index) => (
                <div className="w-full flex-shrink-0 px-2" key={recipe.slug}>
                  <RecipeCard index={index} recipe={recipe} />
                </div>
              ))}
            </div>
          </section>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {featuredRecipes.map((recipe, index) => (
              <button
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-luxury-gold"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                key={`dot-${recipe.slug}`}
                onClick={() => setCurrentIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

