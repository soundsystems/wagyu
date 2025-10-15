import type { Metadata } from "next"
import { FamilyMottoSection } from "@/components/ranch/FamilyMottoSection"
import { FamilyValuesSection } from "@/components/ranch/FamilyValuesSection"
import { OzarkDifferenceSection } from "@/components/ranch/OzarkDifferenceSection"
import { RanchHeroSection } from "@/components/ranch/RanchHeroSection"
import { RanchPracticesSection } from "@/components/ranch/RanchPracticesSection"

export const metadata: Metadata = {
  title: "Our Ranch & Family Story",
  description:
    "Learn about the Smith family's commitment to raising premium American Wagyu beef in the Ozarks. Discover our sustainable ranching practices and family values.",
  keywords: [
    "Smith family ranch",
    "Ozark ranch practices",
    "sustainable beef farming",
    "family owned ranch",
    "Arkansas cattle ranch",
    "Wagyu cattle farming",
    "ranch story",
    "family values",
  ],
  openGraph: {
    title: "Our Ranch & Family Story | Ozark Natural Steak Co.",
    description:
      "Learn about the Smith family's commitment to raising premium American Wagyu beef in the Ozarks.",
    images: [
      {
        url: "/og?title=Our Ranch & Family Story&description=Learn about the Smith family's commitment to raising premium American Wagyu beef in the Ozarks.&page=ranch",
        width: 1200,
        height: 630,
        alt: "Ozark Natural Steak Co. Ranch and Family Story",
      },
    ],
  },
  twitter: {
    title: "Our Ranch & Family Story | Ozark Natural Steak Co.",
    description:
      "Learn about the Smith family's commitment to raising premium American Wagyu beef in the Ozarks.",
    images: [
      "/og?title=Our Ranch & Family Story&description=Learn about the Smith family's commitment to raising premium American Wagyu beef in the Ozarks.&page=ranch",
    ],
  },
  alternates: {
    canonical: "/our-ranch",
  },
}

export default function OurRanchPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <RanchHeroSection />

      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <FamilyValuesSection />
        <RanchPracticesSection />
        <OzarkDifferenceSection />
        <FamilyMottoSection />
      </div>
    </div>
  )
}
