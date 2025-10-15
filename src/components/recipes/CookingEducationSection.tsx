"use client"

import { Award, BookOpen, ChefHat } from "lucide-react"
import { motion } from "motion/react"

export function CookingEducationSection() {
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

  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-2xl">Master the Art of Cooking Wagyu</h2>
        <p className="mx-auto max-w-5xl font-sans text-base text-gray-300 leading-relaxed">
          Premium beef deserves premium cooking techniques. Our educational
          content will help you unlock tshe full potential of American Wagyu in
          your kitchen.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {educationFeatures.map((feature, index) => {
          const IconComponent = feature.icon
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
              <h3 className="mb-4 text-2xl">{feature.title}</h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

