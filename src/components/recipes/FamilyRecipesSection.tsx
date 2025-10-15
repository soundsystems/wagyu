"use client"

import { Heart } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

export function FamilyRecipesSection() {
  return (
    <section className="py-20">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <motion.div
          className="relative h-[500px]"
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            alt="Smith family cooking together in their kitchen"
            className="rounded-2xl object-cover"
            fill
            src="/Smith_Family_Dinner.jpg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <Heart className="h-8 w-8 text-luxury-gold" />
            <h2 className="text-4xl">Family Recipes</h2>
          </div>
          <p className="mb-8 font-sans text-lg text-white/80 leading-relaxed">
            These recipes have been passed down through generations of the Smith
            family. Each dish tells a story of tradition, love, and the special
            place that American Wagyu beef holds in our family gatherings.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                <span className="font-bold text-luxury-gold">1</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl">Sunday Pot Roast</h3>
                <p className="font-sans text-gray-300">
                  A slow-cooked masterpiece that brings the family together
                  every Sunday.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                <span className="font-bold text-luxury-gold">2</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl">Grilled Ribeye Feast</h3>
                <p className="font-sans text-gray-300">
                  Our signature celebration dish, perfect for special occasions
                  and holidays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                <span className="font-bold text-luxury-gold">3</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl">Wagyu Burger Tradition</h3>
                <p className="font-sans text-gray-300">
                  The ultimate backyard burger, perfected over years of family
                  cookouts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

