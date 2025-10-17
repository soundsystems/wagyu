"use client"

import {
  ArrowLeft,
  ChefHat,
  Clock,
  Flame,
  Heart,
  Lightbulb,
  Thermometer,
  Users,
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import type { Recipe } from "@/lib/family-recipes"

// Animation constants
const ANIMATION_DURATION = 0.4
const ANIMATION_STAGGER_DELAY = 0.1
const FOUR_COLUMN_GRID_COUNT = 4

// Icon mapping
const iconMap = {
  Lightbulb,
  Thermometer,
  ChefHat,
  Heart,
  Flame,
}

type RecipeDetailProps = {
  recipe: Recipe
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            alt={recipe.title}
            className="object-cover"
            fill
            priority
            src={recipe.heroImage}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-4xl px-8 text-center">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                className="mb-6 inline-flex items-center gap-2 text-luxury-gold transition-colors hover:text-luxury-champagne"
                href="/recipes"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Recipes
              </Link>
              <h1 className="mb-6 font-bold text-5xl md:text-7xl">
                {recipe.title}
              </h1>
              <p className="mx-auto max-w-2xl text-white/90 text-xl leading-relaxed">
                {recipe.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recipe Info */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="rounded-2xl bg-luxury-charcoal/30 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: ANIMATION_DURATION }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Clock className="mx-auto mb-4 h-8 w-8 text-luxury-gold" />
              <h3 className="mb-2 font-semibold text-xl">Cook Time</h3>
              <p className="text-gray-300">{recipe.cookTime}</p>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-luxury-charcoal/30 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: ANIMATION_STAGGER_DELAY,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Users className="mx-auto mb-4 h-8 w-8 text-luxury-gold" />
              <h3 className="mb-2 font-semibold text-xl">Serves</h3>
              <p className="text-gray-300">{recipe.serves}</p>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-luxury-charcoal/30 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: ANIMATION_STAGGER_DELAY * 2,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ChefHat className="mx-auto mb-4 h-8 w-8 text-luxury-gold" />
              <h3 className="mb-2 font-semibold text-xl">Difficulty</h3>
              <p className="text-gray-300">{recipe.difficulty}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="bg-luxury-charcoal/20 py-16">
        <div className="mx-auto max-w-6xl px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-4xl">Ingredients</h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              High-quality ingredients make all the difference. We use only
              premium American Wagyu beef from our ranch.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            {recipe.ingredientSections ? (
              recipe.ingredientSections.map((section, sectionIndex) => (
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  key={section.title}
                  transition={{
                    duration: ANIMATION_DURATION,
                    delay: sectionIndex * ANIMATION_STAGGER_DELAY,
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="mb-6 font-semibold text-2xl text-luxury-gold">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.ingredients.map((ingredient) => (
                      <div
                        className="flex items-center justify-between rounded-xl bg-luxury-charcoal/30 p-4"
                        key={`${section.title}-${ingredient.name}`}
                      >
                        <span className="text-gray-200">{ingredient.name}</span>
                        <span className="font-semibold text-luxury-gold">
                          {ingredient.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: ANIMATION_DURATION }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {recipe.ingredients.map((ingredient) => (
                  <div
                    className="flex items-center justify-between rounded-xl bg-luxury-charcoal/30 p-4"
                    key={ingredient.name}
                  >
                    <span className="text-gray-200">{ingredient.name}</span>
                    <span className="font-semibold text-luxury-gold">
                      {ingredient.amount}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-4xl">Step-by-Step Guide</h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              Detailed instructions with photos for every cooking method, from
              basic techniques to advanced culinary skills.
            </p>
          </motion.div>

          <div className="space-y-12">
            {recipe.steps.map((step, index) => (
              <motion.div
                className="grid items-center gap-8 md:grid-cols-2"
                initial={{ opacity: 0, y: 30 }}
                key={step.step}
                transition={{
                  duration: ANIMATION_DURATION,
                  delay: index * ANIMATION_STAGGER_DELAY,
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative h-80 overflow-hidden rounded-2xl">
                    <Image
                      alt={step.title}
                      className="object-cover"
                      fill
                      src={step.image}
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold font-bold text-luxury-black text-xl">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temperature Chart */}
      <section className="bg-luxury-charcoal/20 py-16">
        <div className="mx-auto max-w-6xl px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-4xl">Temperature Chart</h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              {recipe.temperatureChartType === "doneness"
                ? "Master the perfect doneness with our comprehensive temperature guides and cooking time recommendations."
                : "Follow these temperature guidelines for perfectly cooked results every time."}
            </p>
          </motion.div>

          {recipe.temperatureChartType === "doneness" ? (
            <motion.div
              className="grid gap-4 md:grid-cols-5"
              initial={{ opacity: 0, y: 30 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: ANIMATION_STAGGER_DELAY * 2,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {recipe.temperatureGuide.map((item) => (
                <div
                  className="rounded-2xl bg-luxury-charcoal/30 p-6 text-center"
                  key={item.doneness}
                >
                  <div
                    className={`mx-auto mb-4 h-8 w-8 rounded-full ${item.color}`}
                  />
                  <h3 className="mb-2 font-semibold text-lg">
                    {item.doneness}
                  </h3>
                  <p className="mb-2 font-bold text-luxury-gold">{item.temp}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: ANIMATION_STAGGER_DELAY * 2,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {recipe.temperatureGuide.map((item) => (
                <div
                  className="rounded-2xl bg-luxury-charcoal/30 p-6"
                  key={item.stage}
                >
                  <h3 className="mb-4 font-semibold text-xl">{item.stage}</h3>
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="font-bold text-2xl text-luxury-gold">
                      {item.temp}
                    </span>
                    {item.time && (
                      <span className="text-gray-400 text-sm">{item.time}</span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Professional Tips */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-4xl">Professional Tips</h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              Learn from our family's years of experience and professional
              cooking techniques that bring out the best in American Wagyu.
            </p>
          </motion.div>

          <div
            className={`grid gap-8 ${recipe.proTips.length === FOUR_COLUMN_GRID_COUNT ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}
          >
            {recipe.proTips.map((tip, index) => {
              const IconComponent = iconMap[tip.icon]
              return (
                <motion.div
                  className="rounded-2xl bg-luxury-charcoal/30 p-8"
                  initial={{ opacity: 0, y: 30 }}
                  key={tip.title}
                  transition={{
                    duration: ANIMATION_DURATION,
                    delay: index * ANIMATION_STAGGER_DELAY,
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="mb-4 text-luxury-gold">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 font-semibold text-xl">{tip.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tip.tip}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

