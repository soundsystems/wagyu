// Breakpoint constants for consistent use across the app
export const BREAKPOINTS = {
  MOBILE_LARGE: 640,
  TABLET: 750,
  DESKTOP_SMALL: 828,
  DESKTOP_MEDIUM: 1080,
  DESKTOP_LARGE: 1200,
  DESKTOP_XL: 1920,
  DESKTOP_XXL: 2048,
  DESKTOP_ULTRA: 3840,
} as const

// Image size constants
export const IMAGE_SIZES = {
  ICON_SMALL: 16,
  ICON_MEDIUM: 32,
  ICON_LARGE: 48,
  AVATAR_SMALL: 64,
  AVATAR_MEDIUM: 96,
  AVATAR_LARGE: 128,
  THUMBNAIL_SMALL: 256,
  THUMBNAIL_MEDIUM: 384,
} as const

// Cache TTL constants
export const CACHE_TTL = {
  ONE_YEAR: 31_536_000, // 1 year in seconds
  ONE_DAY: 86_400, // 1 day in seconds
  ONE_HOUR: 3600, // 1 hour in seconds
} as const

// Device sizes array for Next.js Image optimization
export const DEVICE_SIZES = Object.values(BREAKPOINTS)

// Image sizes array for Next.js Image optimization
export const IMAGE_SIZE_ARRAY = Object.values(IMAGE_SIZES)
