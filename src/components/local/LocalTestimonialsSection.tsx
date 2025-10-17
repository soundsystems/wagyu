"use client"

import { Quote, Star } from "lucide-react"
import { motion } from "motion/react"

export function LocalTestimonialsSection() {
  const testimonials = [
    {
      name: "Aaron Finch",
      location: "Arkansas",
      role: "Customer",
      text: "This beef outshines anything I've purchased before with richer flavor, better marbling, and unmatched quality in every cut.",
      rating: 5,
      image: "👨",
    },
    {
      name: "Jamie Martin",
      location: "Arkansas",
      role: "Customer",
      text: "The most delicious steak. Cut with a fork tender and every bite melts in your mouth.",
      rating: 5,
      image: "👨",
    },
    {
      name: "Jenna Gourd",
      location: "Arkansas",
      role: "Customer",
      text: "Flavorful, tender, best steak around.",
      rating: 5,
      image: "👩",
    },
    {
      name: "Carol Gulley",
      location: "Arkansas",
      role: "Customer",
      text: "The Denver Steak is the best I've ever had. Very juicy with great flavor.",
      rating: 5,
      image: "👩",
    },
    {
      name: "Dale Andrews",
      location: "Arkansas",
      role: "Customer",
      text: "It's everything I want in a steak!",
      rating: 5,
      image: "👨",
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
        <h2 className="mb-6 text-4xl">What Our Local Community Says</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Hear from families, chefs, and neighbors throughout Northwest Arkansas
          who have experienced the difference that premium American Wagyu makes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="rounded-2xl bg-luxury-charcoal/30 p-8"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="text-4xl">{testimonial.image}</div>
              <div>
                <h3 className="text-white text-xl">{testimonial.name}</h3>
                <p className="text-luxury-gold text-sm">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  className="h-5 w-5 fill-luxury-gold text-luxury-gold"
                  key={i}
                />
              ))}
            </div>

            <div className="relative">
              <Quote className="-top-2 -left-2 absolute h-8 w-8 text-luxury-gold/30" />
              <blockquote className="pl-6 font-sans text-gray-300 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mx-auto max-w-4xl rounded-2xl bg-luxury-gold/10 p-8">
          <h3 className="mb-4 text-2xl">Join Our Community</h3>
          <p className="mb-6 font-sans text-gray-300">
            Experience the difference for yourself. Visit us at local farmers
            markets or contact us to learn more about our premium American Wagyu
            beef.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="cursor-pointer rounded-lg bg-luxury-gold px-6 py-3 font-medium text-luxury-black transition-colors hover:bg-luxury-champagne">
              Find Us at Markets
            </button>
            <button className="cursor-pointer rounded-lg border border-luxury-gold px-6 py-3 font-medium text-luxury-gold transition-colors hover:bg-luxury-gold hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
