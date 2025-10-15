"use client"

import { Clock, Star, Users } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import { featuredRecipes } from "./recipesConstants"

export function FeaturedRecipesSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Featured Recipes</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Start your culinary journey with these tried-and-true favorites from
          the Smith family kitchen.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {featuredRecipes.map((recipe, index) => (
          <motion.div
            className="overflow-hidden rounded-2xl bg-luxury-charcoal/30"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  {[...Array(3)].map((_, i) => (
                    <Star
                      className={`h-4 w-4 ${
                        i <
                        (
                          recipe.difficulty === "Easy"
                            ? 1
                            : recipe.difficulty === "Medium"
                              ? 2
                              : 3
                        )
                          ? "fill-luxury-gold text-luxury-gold"
                          : "text-gray-600"
                      }`}
                      key={i}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  {recipe.difficulty}
                </span>
              </div>

              <button className="w-full cursor-pointer rounded-lg bg-luxury-gold py-3 font-medium text-luxury-black transition-colors hover:bg-luxury-champagne">
                View Recipe
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

