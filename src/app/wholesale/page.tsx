import type { Metadata } from "next"
import { ContactInquirySection } from "@/components/wholesale/ContactInquirySection"
import { PartnershipProcessSection } from "@/components/wholesale/PartnershipProcessSection"
import { WholesaleBenefitsSection } from "@/components/wholesale/WholesaleBenefitsSection"
import { WholesaleHeroSection } from "@/components/wholesale/WholesaleHeroSection"

export const metadata: Metadata = {
  title: "Wholesale Partnership Opportunities",
  description:
    "Partner with Ozark Natural Steak Co. for premium American Wagyu beef wholesale. Join restaurants, retailers, and distributors in offering the finest quality beef.",
  keywords: [
    "Wagyu beef wholesale",
    "restaurant meat supplier",
    "premium beef distributor",
    "wholesale partnership",
    "restaurant quality beef",
    "meat wholesale Arkansas",
    "B2B beef supplier",
    "commercial meat sales",
  ],
  openGraph: {
    title: "Wholesale Partnership Opportunities | Ozark Natural Steak Co.",
    description:
      "Partner with Ozark Natural Steak Co. for premium American Wagyu beef wholesale opportunities.",
    images: [
      {
        url: "/og?title=Wholesale Partnership Opportunities&description=Partner with Ozark Natural Steak Co. for premium American Wagyu beef wholesale opportunities.&page=wholesale",
        width: 1200,
        height: 630,
        alt: "Ozark Natural Steak Co. Wholesale Partnership Opportunities",
      },
    ],
  },
  twitter: {
    title: "Wholesale Partnership Opportunities | Ozark Natural Steak Co.",
    description:
      "Partner with Ozark Natural Steak Co. for premium American Wagyu beef wholesale opportunities.",
    images: [
      "/og?title=Wholesale Partnership Opportunities&description=Partner with Ozark Natural Steak Co. for premium American Wagyu beef wholesale opportunities.&page=wholesale",
    ],
  },
  alternates: {
    canonical: "/wholesale",
  },
}

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <WholesaleHeroSection />

      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <WholesaleBenefitsSection />
        <PartnershipProcessSection />
        <div className="flex min-h-[80vh] items-center justify-center md:min-h-0 md:items-start">
          <ContactInquirySection />
        </div>
      </div>
    </div>
  )
}
