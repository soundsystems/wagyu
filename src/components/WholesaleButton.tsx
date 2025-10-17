"use client"

import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type WholesaleButtonProps = {
  variant?: "mobile" | "desktop" | "footer"
  className?: string
}

const SCALE_ACTIVE = 1.05

export function WholesaleButton({ variant = "desktop", className = "" }: WholesaleButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === "/wholesale"

  const getButtonClasses = () => {
    const baseClasses = "cursor-pointer rounded transition-all duration-300 hover:scale-110"
    
    switch (variant) {
      case "mobile":
        return `cursor-pointer rounded-none hover:rounded-lg transition-all duration-300 hover:scale-110 border-l border-r border-luxury-gold px-1.5 py-1 text-sm ${
          isActive
            ? "bg-luxury-gold font-bold text-luxury-black"
            : "bg-transparent font-semibold text-luxury-gold hover:bg-luxury-gold hover:!text-luxury-black"
        }`
      case "desktop":
        return `${baseClasses} border-2 border-luxury-gold px-4 py-1 text-base hover:rounded-lg whitespace-nowrap ${
          isActive
            ? "bg-luxury-gold font-bold text-luxury-black"
            : "bg-transparent font-semibold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
        }`
      case "footer":
        return `cursor-pointer rounded-none hover:rounded-lg transition-all duration-300 hover:scale-110 border-l border-r border-luxury-gold px-3 py-1 text-sm whitespace-nowrap ${
          isActive
            ? "bg-luxury-gold font-bold text-luxury-black"
            : "bg-transparent font-semibold text-luxury-gold hover:bg-luxury-gold hover:!text-luxury-black"
        }`
      default:
        return baseClasses
    }
  }

  const getButtonText = () => {
    switch (variant) {
      case "mobile":
        return "Wholesale"
      case "desktop":
        return "Wholesale Orders"
      default:
        return "Wholesale"
    }
  }

  const getAnimationProps = () => ({
    animate: {
      scale: isActive ? SCALE_ACTIVE : 1,
      opacity: 1,
      y: 0,
    },
    exit: { opacity: 0, y: -5, scale: 0.95 },
    initial: { opacity: 0, y: 5, scale: 0.95 },
    style: { willChange: "transform" },
    transition: { duration: 0.15, ease: "easeOut" as const },
  })

  const buttonContent = (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={`${getButtonClasses()} ${className} no-underline`}
      href="/wholesale"
    >
      {getButtonText()}
    </Link>
  )

  const key = `wholesale-${variant}-${isActive}`
  return (
    <AnimatePresence mode="wait">
      <motion.div key={key} {...getAnimationProps()}>
        {buttonContent}
      </motion.div>
    </AnimatePresence>
  )
}
