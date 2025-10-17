"use client"

import { MapPin, Star } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { featuredRestaurants } from "./localConstants"

const RESTAURANT_GRID_DELAY = 0.2
const STAR_RATING_COUNT = 5

export function FeaturedRestaurantsSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Where to Find Our Beef</h2>
        <p className="mx-auto max-w-3xl font-sans text-white/80 text-xl">
          Experience our premium American Wagyu at these exceptional Arkansas
          restaurants, each showcasing our beef in their own unique style.
        </p>
      </motion.div>

      <div className="space-y-12">
        {featuredRestaurants.map((restaurant, index) => (
          <motion.div
            className="overflow-hidden rounded-2xl bg-luxury-charcoal/30"
            initial={{ opacity: 0, y: 30 }}
            key={restaurant.name}
            transition={{ duration: 0.6, delay: index * RESTAURANT_GRID_DELAY }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  alt={restaurant.name}
                  className="object-cover"
                  fill
                  src={restaurant.image}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-luxury-gold text-luxury-black">
                    {restaurant.partnership}
                  </Badge>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-3xl">{restaurant.name}</h3>
                    <div className="mb-4 flex items-center gap-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: STAR_RATING_COUNT }, (_, i) => (
                      <Star
                        className="h-5 w-5 fill-luxury-gold text-luxury-gold"
                        key={`star-${restaurant.name}-${i}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mb-6 font-sans text-gray-300 leading-relaxed">
                  {restaurant.cuisine}
                </p>

                <div className="mb-6 rounded-lg bg-luxury-black/30 p-4">
                  <h4 className="mb-2 text-luxury-gold">Signature Dish</h4>
                  <p className="font-medium text-white">
                    {restaurant.signature}
                  </p>
                </div>

                {/* <blockquote className="mb-6 border-luxury-gold border-l-4 pl-4">
                  <p className="mb-2 font-sans text-gray-300 italic">
                    &quot;{restaurant.chefQuote}&quot;
                  </p>
                  <cite className="text-luxury-gold">— {restaurant.chef}</cite>
                </blockquote> */}

                <Button
                  asChild
                  className="cursor-pointer border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                  variant="luxury-outline"
                >
                  <a
                    aria-label={`Visit ${restaurant.name} website`}
                    href={restaurant.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit Restaurant
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

