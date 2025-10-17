"use client"

import { Quote, Star } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

const reviews = [
  {
    id: 1,
    text: "This beef outshines anything I've purchased before with richer flavor, better marbling, and unmatched quality in every cut.",
    author: "Aaron Finch",
    location: "Arkansas",
  },
  {
    id: 2,
    text: "The most delicious steak. Cut with a fork tender and every bite melts in your mouth.",
    author: "Jamie Martin",
    location: "Arkansas",
  },
  {
    id: 3,
    text: "Flavorful, tender, best steak around.",
    author: "Jenna Gourd",
    location: "Arkansas",
  },
  {
    id: 4,
    text: "The Denver Steak is the best I've ever had. Very juicy with great flavor.",
    author: "Carol Gulley",
    location: "Arkansas",
  },
  {
    id: 5,
    text: "It's everything I want in a steak!",
    author: "Dale Andrews",
    location: "Arkansas",
  },
]

export function ReviewsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-luxury-black py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 text-center md:px-20">
        <header>
          <motion.h2
            className="mb-8 font-bold text-4xl text-white"
            id="testimonials-heading"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Exceeding Expectations
          </motion.h2>
        </header>

        {/* Family Motto
        <motion.aside
          aria-label="Family motto"
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Quote
            aria-hidden="true"
            className="mx-auto h-8 w-8 text-luxury-gold"
          />
          <blockquote className="mb-4 font-sans text-base text-luxury-gold italic leading-relaxed md:text-lg lg:text-2xl">
            &ldquo;Giving people more than they expect.&rdquo;
          </blockquote>
          <p className="font-sans text-gray-400">— Family Motto</p>
        </motion.aside> */}

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              className="flex"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {reviews.map((review) => (
                <article className="w-full flex-shrink-0 px-8" key={review.id}>
                  {/* Star Rating */}
                  <div
                    aria-label="5 star rating"
                    className="mb-6 flex justify-center"
                    role="img"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        key={i}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, scale: 1 }}
                      >
                        <Star
                          aria-hidden="true"
                          className="h-6 w-6 fill-luxury-gold text-luxury-gold"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="mb-8 font-sans text-lg text-white leading-relaxed md:text-xl">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  <footer className="text-luxury-gold">
                    <cite className="mb-1 font-sans text-lg not-italic">
                      {review.author}
                    </cite>
                    <p className="font-sans text-gray-400 text-sm">
                      {review.location}
                    </p>
                  </footer>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <nav
            aria-label="Testimonial navigation"
            className="mt-8 flex justify-center space-x-2"
          >
            {reviews.map((_, index) => (
              <motion.button
                aria-current={currentIndex === index ? "true" : "false"}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1 w-1 cursor-pointer rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "scale-125 bg-luxury-gold"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
