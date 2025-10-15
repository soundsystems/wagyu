"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

export function ContactWholesaleSection() {
  return (
    <section aria-labelledby="contact-heading" className="py-20" id="contact-form">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="mb-6 text-4xl" id="contact-heading">
            Ready to Partner With Us?
          </h2>
          <p className="mb-8 font-sans text-lg text-white/80 leading-relaxed">
            Contact our wholesale team to discuss your needs and learn how we
            can support your business with premium American Wagyu beef.
          </p>

          <div
            aria-label="Contact information"
            className="space-y-6"
            role="list"
          >
            <div className="flex items-center gap-4" role="listitem">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10"
              >
                <Mail className="h-6 w-6 text-luxury-gold" />
              </div>
              <div>
                <h3 className="mb-1 text-xl">Email Us</h3>
                <p className="font-sans text-gray-300">
                  <a
                    aria-label="Send email to wholesale team"
                    className="rounded transition-colors hover:text-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-luxury-black"
                    href="mailto:wholesale@ozarknaturalsteak.com"
                  >
                    wholesale@ozarknaturalsteak.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" role="listitem">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10"
              >
                <Phone className="h-6 w-6 text-luxury-gold" />
              </div>
              <div>
                <h3 className="mb-1 text-xl">Call Us</h3>
                <p className="font-sans text-gray-300">
                  <a
                    aria-label="Call our wholesale team"
                    className="rounded transition-colors hover:text-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-luxury-black"
                    href="tel:+15551234567"
                  >
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4" role="listitem">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-luxury-gold/10"
              >
                <MapPin className="h-6 w-6 text-luxury-gold" />
              </div>
              <div>
                <h3 className="mb-1 text-xl">Visit Us</h3>
                <p className="font-sans text-gray-300">
                  Ozark Mountains, Arkansas
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-luxury-charcoal/50 p-6 text-center md:p-8 md:text-left"
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="mb-6 text-2xl">Get Started Today</h3>
          <div aria-label="Action buttons" className="space-y-4" role="group">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  aria-describedby="request-info-description"
                  className="w-full cursor-pointer"
                  size="lg"
                  variant="luxury"
                >
                  Request Information
                </Button>
              </DialogTrigger>
              <DialogContent
                aria-describedby="request-dialog-description"
                aria-labelledby="request-dialog-title"
                className="max-w-md border-luxury-gold/20 bg-luxury-charcoal text-white"
                role="dialog"
              >
                <DialogHeader>
                  <DialogTitle
                    className="text-luxury-gold text-xl"
                    id="request-dialog-title"
                  >
                    Request Information
                  </DialogTitle>
                  <DialogDescription
                    className="text-gray-300 leading-relaxed"
                    id="request-dialog-description"
                  >
                    Contact us at{" "}
                    <a
                      className="rounded text-luxury-gold hover:underline focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      href="mailto:wholesale@ozarknaturalsteak.com"
                    >
                      wholesale@ozarknaturalsteak.com
                    </a>{" "}
                    or call{" "}
                    <a
                      className="rounded text-luxury-gold hover:underline focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      href="tel:+15551234567"
                    >
                      (555) 123-4567
                    </a>{" "}
                    to discuss your wholesale needs. We&apos;ll provide detailed
                    information about our products, pricing, and partnership
                    opportunities.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <span className="sr-only" id="request-info-description">
              Opens dialog with contact information for requesting wholesale
              details
            </span>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  aria-describedby="consultation-description"
                  className="w-full cursor-pointer"
                  size="lg"
                  variant="luxury-outline"
                >
                  Schedule Consultation
                </Button>
              </DialogTrigger>
              <DialogContent
                aria-describedby="consultation-dialog-description"
                aria-labelledby="consultation-dialog-title"
                className="max-w-md border-luxury-gold/20 bg-luxury-charcoal text-white"
                role="dialog"
              >
                <DialogHeader>
                  <DialogTitle
                    className="text-luxury-gold text-xl"
                    id="consultation-dialog-title"
                  >
                    Schedule Consultation
                  </DialogTitle>
                  <DialogDescription
                    className="text-gray-300 leading-relaxed"
                    id="consultation-dialog-description"
                  >
                    Let&apos;s discuss how Ozark Natural Steak Co. can support
                    your business. Contact us at{" "}
                    <a
                      className="rounded text-luxury-gold hover:underline focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      href="mailto:wholesale@ozarknaturalsteak.com"
                    >
                      wholesale@ozarknaturalsteak.com
                    </a>{" "}
                    or{" "}
                    <a
                      className="rounded text-luxury-gold hover:underline focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      href="tel:+15551234567"
                    >
                      (555) 123-4567
                    </a>{" "}
                    to schedule a consultation and learn about our partnership
                    opportunities.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <span className="sr-only" id="consultation-description">
              Opens dialog with contact information for scheduling a
              consultation
            </span>
          </div>
          <p className="mt-6 text-center font-sans text-gray-400 text-sm">
            We typically respond within 24 hours to all wholesale inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

