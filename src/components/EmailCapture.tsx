"use client"

import { motion } from "motion/react"
import { useId, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const headingId = useId()
  const inputId = useId()
  const descriptionId = useId()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email capture
    console.log("Email signup:", email)
    setEmail("")
  }

  return (
    <section aria-labelledby={headingId} className="bg-luxury-charcoal py-16">
      <div className="mx-auto max-w-[1440px] px-2 text-center md:px-20">
        <header>
          <motion.h2
            className="mb-2 font-bold text-xl leading-tight md:text-2xl text-white"
            id={headingId}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Want first dibs on new cuts?
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-7xl font-sans text-gray-300 text-sm md:text-base text-pretty"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Join to hear about new drops, seasonal availability, and exclusive offers before anyone else.
          </motion.p>
        </header>

        <motion.form
          aria-labelledby="email-signup-heading"
          className="mx-auto max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          onSubmit={handleSubmit}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <fieldset>
            <legend className="sr-only">Email signup form</legend>
            <div className="flex gap-4">
              <label className="sr-only" htmlFor={inputId}>
                Email address for updates
              </label>
              <Input
                aria-describedby={descriptionId}
                className="flex-1 border-luxury-gold/30 bg-white/10 text-white placeholder:text-gray-400 focus:border-luxury-gold"
                id={inputId}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                type="email"
                value={email}
              />
              <Button
                aria-describedby={descriptionId}
                className="cursor-pointer px-8"
                type="submit"
                variant="luxury"
              >
                Get Updates
              </Button>
            </div>
          </fieldset>
        </motion.form>
      </div>
    </section>
  )
}
