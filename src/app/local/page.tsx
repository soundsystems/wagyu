import type { Metadata } from "next"
import { FeaturedRestaurantsSection } from "@/components/local/FeaturedRestaurantsSection"
import { FarmersMarketSection } from "@/components/local/FindUsLocallySection"
import { LocalHeroSection } from "@/components/local/LocalHeroSection"
import { LocalPartnersSection } from "@/components/local/LocalPartnersSection"

export const metadata: Metadata = {
  title: "Local Partners & Community",
  description:
    "Discover where to find Ozark Natural Steak Co. premium American Wagyu beef locally. Support our community partners and experience the finest quality beef in Arkansas.",
  keywords: [
    "local beef Arkansas",
    "Ozark beef partners",
    "farm to table restaurants",
    "local meat suppliers",
    "Arkansas Wagyu",
    "community supported agriculture",
    "local food Arkansas",
  ],
  openGraph: {
    title: "Local Partners & Community | Ozark Natural Steak Co.",
    description:
      "Discover where to find Ozark Natural Steak Co. premium American Wagyu beef locally. Support our community partners and experience the finest quality beef in Arkansas.",
    images: [
      {
        url: "/og?title=Local Partners & Community&description=Discover where to find Ozark Natural Steak Co. premium American Wagyu beef locally.&page=local",
        width: 1200,
        height: 630,
        alt: "Ozark Natural Steak Co. Local Partners and Community",
      },
    ],
  },
  twitter: {
    title: "Local Partners & Community | Ozark Natural Steak Co.",
    description:
      "Discover where to find Ozark Natural Steak Co. premium American Wagyu beef locally.",
    images: [
      "/og?title=Local Partners & Community&description=Discover where to find Ozark Natural Steak Co. premium American Wagyu beef locally.&page=local",
    ],
  },
  alternates: {
    canonical: "/local",
  },
}

export default function LocalPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <LocalHeroSection />

      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <FeaturedRestaurantsSection />
        <LocalPartnersSection />
        {/* <CommunityImpactSection /> */}
        {/* <FarmersMarketSection /> */}
        {/* <LocalTestimonialsSection /> */}
        {/* <UpcomingEventsSection /> */}
      </div>
    </div>
  )
}
