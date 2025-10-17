"use client"

import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { motion } from "motion/react"
import { upcomingEvents } from "./localConstants"

export function UpcomingEventsSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-6 text-4xl">Upcoming Events</h2>
        <p className="mx-auto max-w-3xl font-sans text-gray-300 text-xl leading-relaxed">
          Join us at upcoming events throughout Northwest Arkansas. Meet the
          Smith family, sample our premium beef, and learn about our sustainable
          ranching practices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {upcomingEvents.map((event, index) => (
          <motion.div
            className="rounded-2xl bg-luxury-charcoal/30 p-8"
            initial={{ opacity: 0, y: 30 }}
            key={index}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-luxury-gold/10">
                <Calendar className="h-8 w-8 text-luxury-gold" />
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-2xl text-white">{event.title}</h3>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-luxury-gold" />
                    <span className="font-sans text-gray-300">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-luxury-gold" />
                    <span className="font-sans text-gray-300">
                      {event.location}
                    </span>
                  </div>
                </div>

                <p className="mb-6 font-sans text-gray-300 leading-relaxed">
                  {event.description}
                </p>

                <button className="cursor-pointer rounded-lg bg-luxury-gold px-6 py-3 font-medium text-luxury-black transition-colors hover:bg-luxury-champagne">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 rounded-2xl bg-luxury-charcoal/50 p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-luxury-gold" />
          <h3 className="text-2xl">Stay Updated</h3>
        </div>
        <p className="mx-auto mb-6 max-w-2xl font-sans text-gray-300">
          Follow us on social media or sign up for our newsletter to stay
          informed about upcoming events, farmers market appearances, and
          special promotions.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="cursor-pointer rounded-lg bg-luxury-gold px-6 py-3 font-medium text-luxury-black transition-colors hover:bg-luxury-champagne">
            Follow Us
          </button>
          <button className="cursor-pointer rounded-lg border border-luxury-gold px-6 py-3 font-medium text-luxury-gold transition-colors hover:bg-luxury-gold hover:text-white">
            Newsletter Signup
          </button>
        </div>
      </motion.div>
    </section>
  )
}
