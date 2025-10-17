"use client"

import { motion, AnimatePresence } from "motion/react"
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
        <AnimatePresence mode="wait">
          <motion.div
            key="hero-content"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2
            }}  
            className="mx-auto mb-6 w-3/4 md:mb-12 md:w-full lg:w-3/4"
          >
            <motion.div
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mx-auto rounded-lg border border-[#27271B] bg-[#C3AA81] px-2 py-2 md:px-4 md:py-4 shadow-2xl backdrop-blur-sm"
            >
              <p
                aria-describedby="hero-heading"
                className="text-center text-xs font-sans font-semibold text-luxury-black md:text-base lg:text-lg"
              >
                Buttery flavor, tender texture, and perfectly dry-aged beef cuts<br className="block max-[394px]:block min-[394px]:hidden" /> from our family to yours.
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile: Stacked buttons, Desktop: Side by side */}
          <nav
            aria-label="Primary navigation"
            className="mb-8 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row md:mb-4 md:gap-6"
          >
            <Link 
              href="/our-ranch"
              aria-describedby="meet-family-description"
              className="inline-block min-h-[48px] w-auto cursor-pointer rounded-lg border border-[#27271B] bg-[#27271B] px-8 py-3 text-base font-semibold text-white text-shadow-sm transition-all duration-300 hover:bg-[#27271B]/80 hover:font-bold hover:scale-105 sm:w-auto md:px-12 md:py-4 md:text-lg"
            >
              Learn More
            </Link>
            <span className="sr-only" id="meet-family-description">
              Learn about the Smith family and their ranching practices
            </span>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  aria-describedby="shop-steaks-description"
                  className="min-h-[48px] w-auto cursor-pointer rounded-lg bg-luxury-burgundy px-8 py-3 text-base font-semibold text-white text-shadow-sm transition-all duration-300 hover:font-bold hover:scale-105 hover:[filter:brightness(1.4)] sm:w-auto md:px-12 md:py-4 md:text-lg"
                >
                  Shop Steaks
                </button>
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
            animate={{ opacity: 1, y: 0 }}
            aria-label="Company logo"
            className="md:-mt-12 -mt-6 flex justify-center"
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
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
        </AnimatePresence>
      </div>
    </section>
  )
}
