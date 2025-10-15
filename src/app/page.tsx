import { EmailCapture } from "@/components/EmailCapture"
import { FamilyIntroduction } from "@/components/FamilyIntroduction"
import { HeroBanner } from "@/components/HeroBanner"
import { LocalPride } from "@/components/LocalPride"
import { QualityPillars } from "@/components/QualityPillars"
import { ReviewsTestimonials } from "@/components/ReviewsTestimonials"
import { TrustValueBar } from "@/components/TrustValueBar"
import { WhatIsAmericanWagyu } from "@/components/WhatIsAmericanWagyu"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TrustValueBar />
      <WhatIsAmericanWagyu />
      <QualityPillars />
      <FamilyIntroduction />
      <LocalPride />
      <ReviewsTestimonials />
      <EmailCapture />
    </>
  )
}
