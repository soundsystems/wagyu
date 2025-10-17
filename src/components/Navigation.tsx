"use client"

import { ShoppingCart } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { WholesaleButton } from "./WholesaleButton"

const SCALE_ACTIVE = 1.05

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <motion.nav
      animate={{ opacity: 1 }}
      aria-label="Main navigation"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 md:py-2 ${
        isScrolled
          ? "border-luxury-gold/20 border-b bg-luxury-black/90 py-1 backdrop-blur-sm"
          : "bg-luxury-black/80 py-3 backdrop-blur-sm md:bg-transparent md:py-2"
      }`}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        {/* Mobile Layout */}
        <motion.div
          animate={{
            height: isScrolled ? "auto" : "auto",
            minHeight: isScrolled ? "36px" : "80px",
            opacity: 1,
            y: 0,
          }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="md:hidden"
        >
          <div
            className={`flex items-center justify-between ${isScrolled ? "pt-2 pb-0" : "py-2"}`}
          >
            {/* Logo Text */}
            <Link
              aria-label="Ozark Natural Steak Co. home page"
              className="flex-shrink-0"
              href="/"
            >
              <h1 className="border-luxury-gold border-b-2 font-bold text-lg text-white transition-colors hover:text-luxury-gold">
                <span className="text-white">Ozark</span>{" "}
                <span className="text-white">Natural</span>{" "}
                <span className="text-white">Steak Co.</span>
              </h1>
            </Link>

            {/* Cart Button */}
            <div className="flex items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    aria-label="Shopping cart - coming soon"
                    className="cursor-pointer text-white hover:text-luxury-gold"
                    size="icon"
                    variant="ghost"
                  >
                    <ShoppingCart aria-hidden="true" className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-luxury-gold/20 bg-luxury-charcoal text-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-luxury-gold">
                      Coming Soon: Direct Farm-to-Table Ordering
                    </DialogTitle>
                    <DialogDescription className="text-gray-300 text-lg leading-relaxed">
                      We&apos;re thrilled to announce that our premium American
                      Wagyu beef will soon be available for direct purchase from
                      our Ozark ranch! Experience the convenience of ordering
                      our exceptional cuts directly from the source, with the
                      same quality and care that has made us a trusted name in
                      premium beef. Stay tuned for our exclusive online
                      marketplace launch, where you&apos;ll have first access to
                      our finest selections before anyone else.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              y: isScrolled ? -20 : 0,
              height: isScrolled ? 0 : "auto",
              marginBottom: isScrolled ? 0 : "0.5rem",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Mobile navigation menu"
            className="flex items-center justify-center space-x-2 px-1 pb-2"
            role="list"
            style={{ overflow: "hidden" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                animate={{
                  scale: isActive("/our-ranch") ? SCALE_ACTIVE : 1,
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                key={`mobile-our-ranch-${isActive("/our-ranch")}`}
                style={{ willChange: "transform" }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <Link
                  aria-current={isActive("/our-ranch") ? "page" : undefined}
                  className={`rounded px-2 py-1 text-sm transition-colors duration-150 ${
                    isActive("/our-ranch")
                      ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                      : "font-medium text-white no-underline hover:text-luxury-gold"
                  }`}
                  href="/our-ranch"
                >
                  Ranch
                </Link>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                animate={{
                  scale: isActive("/recipes") ? SCALE_ACTIVE : 1,
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                key={`mobile-recipes-${isActive("/recipes")}`}
                style={{ willChange: "transform" }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <Link
                  aria-current={isActive("/recipes") ? "page" : undefined}
                  className={`rounded px-2 py-1 text-sm transition-colors duration-150 ${
                    isActive("/recipes")
                      ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                      : "font-medium text-white no-underline hover:text-luxury-gold"
                  }`}
                  href="/recipes"
                >
                  Recipes
                </Link>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                animate={{
                  scale: isActive("/local") ? SCALE_ACTIVE : 1,
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                key={`mobile-local-${isActive("/local")}`}
                style={{ willChange: "transform" }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <Link
                  aria-current={isActive("/local") ? "page" : undefined}
                  className={`rounded px-2 py-1 text-sm transition-colors duration-150 ${
                    isActive("/local")
                      ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                      : "font-medium text-white no-underline hover:text-luxury-gold"
                  }`}
                  href="/local"
                >
                  Local
                </Link>
              </motion.div>
            </AnimatePresence>
            <WholesaleButton variant="mobile" />
          </motion.div>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden items-center justify-between md:flex">
          {/* Logo Text */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              aria-label="Ozark Natural Steak Co. home page"
              className="flex-shrink-0"
              href="/"
            >
              <h1 className="border-b-2 border-luxury-gold font-bold text-xl text-white transition-all duration-300 hover:scale-105 hover:text-luxury-gold">
                <span className="text-white">Ozark</span>{" "}
                <span className="text-white">Natural</span>{" "}
                <span className="text-white">Steak Co.</span>
              </h1>
            </Link>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              y: isScrolled ? -20 : 0,
              height: isScrolled ? 0 : "auto",
            }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            aria-label="Desktop navigation menu"
            className="flex items-center space-x-8"
            role="list"
            style={{ overflow: "hidden" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                initial={{ opacity: 0, y: -10 }}
                key={`our-ranch-${isActive("/our-ranch")}`}
                transition={{ duration: 0.2 }}
              >
                <Link
                  aria-current={isActive("/our-ranch") ? "page" : undefined}
                  className={`cursor-pointer px-2 py-1 text-sm transition-all duration-300 hover:scale-110 md:text-base lg:text-lg ${
                    isActive("/our-ranch")
                      ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                      : "font-medium text-white no-underline hover:text-luxury-gold"
                  }`}
                  href="/our-ranch"
                >
                  Our Ranch
                </Link>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                initial={{ opacity: 0, y: -10 }}
                key={`recipes-${isActive("/recipes")}`}
                transition={{ duration: 0.2 }}
              >
                <Link
                  aria-current={isActive("/recipes") ? "page" : undefined}
                  className={`cursor-pointer px-2 py-1 text-sm transition-all duration-300 hover:scale-110 md:text-base lg:text-lg ${
                    isActive("/recipes")
                      ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                      : "font-medium text-white no-underline hover:text-luxury-gold"
                  }`}
                  href="/recipes"
                >
                  Recipes
                </Link>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                initial={{ opacity: 0, y: -10 }}
                key={`local-${isActive("/local")}`}
                transition={{ duration: 0.2 }}
              >
                <Link
                  aria-current={isActive("/local") ? "page" : undefined}
                  className={`cursor-pointer px-2 py-1 text-sm transition-all duration-300 hover:scale-110 md:text-base lg:text-lg ${
                    isActive("/local")
                      ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                      : "font-medium text-white no-underline hover:text-luxury-gold"
                  }`}
                  href="/local"
                >
                  Local Partners
                </Link>
              </motion.div>
            </AnimatePresence>
            <WholesaleButton variant="desktop" />
          </motion.div>

          {/* Cart Button */}
          <motion.div 
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="flex items-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  aria-label="Shopping cart - coming soon"
                  className="cursor-pointer text-white hover:text-luxury-gold"
                  size="icon"
                  variant="ghost"
                >
                  <ShoppingCart aria-hidden="true" className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md border-luxury-gold/20 bg-luxury-charcoal text-white">
                <DialogHeader>
                  <DialogTitle className="text-luxury-gold text-xl">
                    Coming Soon
                  </DialogTitle>
                  <DialogDescription className="text-gray-300 leading-relaxed">
                    We&apos;re working on bringing our premium American Wagyu
                    directly to your table. Stay tuned for updates on our online
                    ordering system.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
