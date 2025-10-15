/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom breakpoints extracted from Next.js config
      screens: {
        xs: "640px", // Mobile large
        sm: "750px", // Tablet
        md: "828px", // Desktop small
        lg: "1080px", // Desktop medium
        xl: "1200px", // Desktop large
        "2xl": "1920px", // Desktop XL
        "3xl": "2048px", // Desktop XXL
        "4xl": "3840px", // Desktop Ultra
      },
      // Custom luxury theme colors
      colors: {
        luxury: {
          black: "#27271B",
          charcoal: "#443D3D",
          gold: "#C3AA81",
          champagne: "#D7C097",
          "warm-beige": "#F5F1E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-alegreya-sc)", "serif"],
      },
    },
  },
  plugins: [],
}
