"use client"

import { useEffect } from "react"

export function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/Ozark_Natural_Steak_Co_Logo_no_Background.png",
        "/Sunrise.png",
        "/Smith_Family_Gate.jpg",
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Intersection Observer for lazy loading
    const setupLazyLoading = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute("data-src")
                observer.unobserve(img)
              }
            }
          })
        })

        // Observe all images with data-src attribute
        document.querySelectorAll("img[data-src]").forEach((img) => {
          imageObserver.observe(img)
        })
      }
    }

    // Setup performance optimizations
    preloadCriticalResources()
    setupLazyLoading()

    // Performance monitoring
    if ("performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType(
            "navigation"
          )[0] as PerformanceNavigationTiming
          const paint = performance.getEntriesByType("paint")

          console.log("Performance Metrics:", {
            "DOM Content Loaded":
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            "First Paint": paint.find((p) => p.name === "first-paint")
              ?.startTime,
            "First Contentful Paint": paint.find(
              (p) => p.name === "first-contentful-paint"
            )?.startTime,
            "Load Time": navigation.loadEventEnd - navigation.loadEventStart,
          })
        }, 0)
      })
    }
  }, [])

  return null
}
