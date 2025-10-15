"use client"

import { ShoppingCart } from "lucide-react"
import { motion } from "motion/react"
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
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 md:py-2 ${
        isScrolled
          ? "border-luxury-gold/20 border-b bg-luxury-black/90 backdrop-blur-sm py-1"
          : "bg-luxury-black/80 backdrop-blur-sm py-3 md:bg-transparent md:py-2"
      }`}
      role="navigation"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        {/* Mobile Layout */}
        <motion.div 
          className="md:hidden"
          animate={{
            height: isScrolled ? "auto" : "auto",
            minHeight: isScrolled ? "36px" : "80px"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={`flex items-center justify-between ${isScrolled ? 'pt-2 pb-0' : 'py-2'}`}>
            {/* Logo Text */}
            <Link
              aria-label="Ozark Natural Steak Co. home page"
              className="flex-shrink-0"
              href="/"
            >
              <motion.h1 
                className="border-luxury-gold border-b-2 font-bold text-lg text-white transition-colors hover:text-luxury-gold"
              >
                <span className="text-white">Ozark</span>{" "}
                <span className="text-white">Natural</span>{" "}
                <span className="text-white">Steak Co.</span>
              </motion.h1>
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
            aria-label="Mobile navigation menu"
            className="flex items-center justify-center space-x-3 px-2 pb-2"
            role="list"
            animate={{
              height: isScrolled ? 0 : "auto",
              opacity: isScrolled ? 0 : 1,
              marginBottom: isScrolled ? 0 : "0.5rem"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              animate={{
                scale: isActive("/our-ranch") ? 1.05 : 1,
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ willChange: "transform" }}
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
                Our Ranch
              </Link>
            </motion.div>
            <motion.div
              animate={{
                scale: isActive("/recipes") ? 1.05 : 1,
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ willChange: "transform" }}
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
            <motion.div
              animate={{
                scale: isActive("/wholesale") ? 1.05 : 1,
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <Link
                aria-current={isActive("/wholesale") ? "page" : undefined}
                className={`rounded px-2 py-1 text-sm transition-colors duration-150 ${
                  isActive("/wholesale")
                    ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                    : "font-medium text-white no-underline hover:text-luxury-gold"
                }`}
                href="/wholesale"
              >
                Wholesale
              </Link>
            </motion.div>
            <motion.div
              animate={{
                scale: isActive("/local") ? 1.05 : 1,
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ willChange: "transform" }}
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
          </motion.div>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div 
          className="hidden items-center justify-between md:flex"
          animate={{
            height: isScrolled ? "60px" : "80px"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Logo Text */}
          <Link
            aria-label="Ozark Natural Steak Co. home page"
            className="flex-shrink-0"
            href="/"
          >
            <motion.h1 
              className="border-luxury-gold border-b-2 font-bold text-white transition-colors hover:text-luxury-gold"
              animate={{
                fontSize: isScrolled ? "1.5rem" : "1.5rem"
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span className="text-white">Ozark</span>{" "}
              <span className="text-white">Natural</span>{" "}
              <span className="text-white">Steak Co.</span>
            </motion.h1>
          </Link>

          {/* Navigation Menu */}
          <motion.div
            aria-label="Desktop navigation menu"
            className="flex items-center space-x-8"
            role="list"
            animate={{
              opacity: isScrolled ? 0 : 1,
              height: isScrolled ? 0 : "auto"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Link
              aria-current={isActive("/our-ranch") ? "page" : undefined}
              className={`cursor-pointer text-lg transition-all duration-300 hover:scale-110 px-2 py-1 ${
                isActive("/our-ranch")
                  ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                  : "font-medium text-white no-underline hover:text-luxury-gold"
              }`}
              href="/our-ranch"
            >
              Our Ranch
            </Link>
            <Link
              aria-current={isActive("/recipes") ? "page" : undefined}
              className={`cursor-pointer text-lg transition-all duration-300 hover:scale-110 px-2 py-1 ${
                isActive("/recipes")
                  ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                  : "font-medium text-white no-underline hover:text-luxury-gold"
              }`}
              href="/recipes"
            >
              Recipes
            </Link>
            <Link
              aria-current={isActive("/wholesale") ? "page" : undefined}
              className={`cursor-pointer text-lg transition-all duration-300 hover:scale-110 px-2 py-1 ${
                isActive("/wholesale")
                  ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                  : "font-medium text-white no-underline hover:text-luxury-gold"
              }`}
              href="/wholesale"
            >
              Wholesale
            </Link>
            <Link
              aria-current={isActive("/local") ? "page" : undefined}
              className={`cursor-pointer text-lg transition-all duration-300 hover:scale-110 px-2 py-1 ${
                isActive("/local")
                  ? "underline-luxury-gold font-bold text-luxury-gold underline decoration-2"
                  : "font-medium text-white no-underline hover:text-luxury-gold"
              }`}
              href="/local"
            >
              Local
            </Link>
          </motion.div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
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
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
