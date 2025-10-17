import type { Metadata } from "next"
import { Alegreya_SC, Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/Footer"
import { Navigation } from "@/components/Navigation"
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const alegreyaSC = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Ozark Natural Steak Co. - Premium American Wagyu Beef",
    template: "%s | Ozark Natural Steak Co.",
  },
  description:
    "Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks. Experience the finest quality beef from our family ranch.",
  keywords: [
    "American Wagyu",
    "premium beef",
    "Ozark Natural Steak Co",
    "Smith family ranch",
    "high-quality beef",
    "Wagyu cattle",
    "Arkansas beef",
    "farm to table",
    "local beef",
    "artisanal meat",
    "grass-fed",
    "grain-finished",
  ],
  authors: [{ name: "Ozark Natural Steak Co." }],
  creator: "Ozark Natural Steak Co.",
  publisher: "Ozark Natural Steak Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ozarknaturalsteak.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ozarknaturalsteak.com",
    siteName: "Ozark Natural Steak Co.",
    title: "Ozark Natural Steak Co. - Premium American Wagyu Beef",
    description:
      "Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks.",
    images: [
      {
        url: "/og?title=Ozark Natural Steak Co. - Premium American Wagyu Beef&description=Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks.&page=home",
        width: 1200,
        height: 630,
        alt: "Ozark Natural Steak Co. - Premium American Wagyu Beef",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozark Natural Steak Co. - Premium American Wagyu Beef",
    description:
      "Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks.",
    images: [
      "/og?title=Ozark Natural Steak Co. - Premium American Wagyu Beef&description=Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks.&page=home",
    ],
    creator: "@ozarknaturalsteak",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  category: "food",
  classification: "Premium Beef Producer",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ozark Natural Steak Co.",
    "application-name": "Ozark Natural Steak Co.",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ozark Natural Steak Co.",
    description:
      "Premium American Wagyu beef raised with care and tradition by the Smith family in the Ozarks.",
    url: "https://ozarknaturalsteak.com",
    logo: "https://ozarknaturalsteak.com/logo.png",
    image: "https://ozarknaturalsteak.com/og-image.png",
    sameAs: [
      "https://www.facebook.com/ozarknaturalsteak",
      "https://www.instagram.com/ozarknaturalsteak",
      "https://twitter.com/ozarknaturalsteak",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Arkansas",
      addressLocality: "Ozark",
    },
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Smith Family",
    },
  }

  return (
    <html className="dark" lang="en">
      <head>
        <meta
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          name="viewport"
        />
        <meta content="#000000" name="theme-color" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-luxury-black antialiased`}
      >
        <PerformanceOptimizations />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className={alegreyaSC.className}>
          <Navigation />
          <main className="pt-20" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
