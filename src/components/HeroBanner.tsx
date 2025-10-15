"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export function HeroBanner() {
  return (
    <section
      aria-label="Hero section introducing Ozark Natural Steak Co."
      className="relative flex h-[90vh] items-center justify-center overflow-hidden py-20 md:h-[100vh] md:py-0"
      role="banner"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          alt="Panoramic view of the Ozark ranch landscape at sunrise, showing rolling hills and natural grasslands where our Wagyu cattle graze"
          className="object-cover object-center"
          fill
          priority
          quality={95}
          sizes="100vw"
          src="/Sunrise.jpg"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto px-2 pt-20 text-center md:px-6 md:pt-32">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          <h1
            className="mb-3 px-1 text-2xl text-white leading-tight tracking-wide md:mb-6 md:text-6xl lg:text-7xl"
            id="hero-heading"
            style={{
              textShadow:
                "1px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            Premium American Wagyu <br /> Raised Here in the Ozarks
          </h1>
          <p
            aria-describedby="hero-heading"
            className="mx-auto mb-6 max-w-5xl text-balance px-4 text-center font-semibold font-serif text-luxury-burgundy text-sm leading-relaxed md:mb-12 md:px-0 md:text-base lg:whitespace-nowrap lg:text-lg"
          >
            Buttery flavor, tender texture, and clean, slow-aged beef, crafted
            by a family who puts animal well-being first.
          </p>

          {/* Mobile: Stacked buttons, Desktop: Side by side */}
          <nav
            aria-label="Primary navigation"
            className="mb-8 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row md:mb-4 md:gap-6"
          >
            <Button
              aria-describedby="meet-family-description"
              asChild
              className="min-h-[48px] w-full cursor-pointer px-8 py-3 text-base text-luxury-black sm:w-auto md:px-12 md:py-4 md:text-lg"
              size="lg"
              variant="meet-family"
            >
              <Link href="/our-ranch">Meet the Family</Link>
            </Button>
            <span className="sr-only" id="meet-family-description">
              Learn about the Smith family and their ranching practices
            </span>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  aria-describedby="shop-steaks-description"
                  className="min-h-[48px] w-full cursor-pointer px-8 py-3 text-base text-shadow-sm text-white sm:w-auto md:px-12 md:py-4 md:text-lg"
                  size="lg"
                  variant="luxury-burgundy"
                >
                  Shop Steaks
                </Button>
              </DialogTrigger>
              <DialogContent
                aria-describedby="shop-dialog-description"
                aria-labelledby="shop-dialog-title"
                className="max-w-md border-luxury-gold/20 bg-luxury-charcoal text-white"
                role="dialog"
              >
                <DialogHeader>
                  <DialogTitle
                    className="text-luxury-gold text-xl"
                    id="shop-dialog-title"
                  >
                    Coming Soon
                  </DialogTitle>
                  <DialogDescription
                    className="text-gray-300 leading-relaxed"
                    id="shop-dialog-description"
                  >
                    We&apos;re working on bringing our premium American Wagyu
                    directly to your table. Stay tuned for updates on our online
                    ordering system.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <span className="sr-only" id="shop-steaks-description">
              Information about online ordering availability
            </span>
          </nav>

          {/* Logo */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            aria-label="Company logo"
            className="md:-mt-12 -mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Image
              alt="Ozark Natural Steak Co. company logo featuring elegant typography and branding"
              className="h-[300px] w-[300px] object-contain md:h-[500px] md:w-[500px]"
              height={400}
              priority
              src="/Ozark_Natural_Steak_Co_Logo_no_Background.png"
              width={400}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
