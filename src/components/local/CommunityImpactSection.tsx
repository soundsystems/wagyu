"use client"

import { Award, Heart, Leaf, Users } from "lucide-react"
import { motion } from "motion/react"

export function CommunityImpactSection() {
  const impactAreas = [
    {
      icon: Heart,
      title: "Supporting Local Families",
      description:
        "We provide premium beef to local families at fair prices, ensuring everyone can experience the quality of American Wagyu.",
      metric: "500+ Local Families Served",
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description:
        "We work closely with local restaurants, markets, and community organizations to strengthen Northwest Arkansas food culture.",
      metric: "25+ Local Partners",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Our ranching practices protect the Ozark environment while providing premium beef for generations to come.",
      metric: "100% Sustainable Operations",
    },
    {
      icon: Award,
      title: "Local Recognition",
      description:
        "Recognized by local organizations for our commitment to quality, sustainability, and community support.",
      metric: "Multiple Local Awards",
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
        <h2 className="mb-6 text-4xl">Our Community Impact</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          We&apos;re proud to be more than just a ranch—we&apos;re active
          members of the Northwest Arkansas community, supporting local
          families, businesses, and sustainable practices.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {impactAreas.map((area, index) => {
          const IconComponent = area.icon
          return (
            <motion.div
              className="rounded-lg bg-luxury-charcoal/50 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              key={index}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/10">
                <IconComponent className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="mb-4 text-xl">{area.title}</h3>
              <p className="mb-4 font-sans text-gray-300 text-sm leading-relaxed">
                {area.description}
              </p>
              <div className="rounded-lg bg-luxury-gold/10 p-3">
                <p className="font-medium text-luxury-gold text-sm">
                  {area.metric}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
