import { Heart, Truck, Users, Wheat } from "lucide-react"

const trustPillars = [
  {
    icon: Heart,
    title: "Animal Well-Being First",
    description: "Low-stress handling and daily care",
  },
  {
    icon: Wheat,
    title: "Clean Feed & Slow Aging",
    description: "Patient aging for natural depth",
  },
  {
    icon: Users,
    title: "Family-Raised for 15+ Years",
    description: "Two generations of experience",
  },
  {
    icon: Truck,
    title: "Local Roots, Regional Shipping",
    description: "Ozark-raised, shipped fresh",
  },
]

export function TrustValueBar() {
  return (
    <section
      aria-labelledby="trust-pillars-heading"
      className="border-luxury-gold/20 border-y bg-luxury-charcoal py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <h2 className="sr-only" id="trust-pillars-heading">
          Our Core Values and Trust Pillars
        </h2>
        <div
          aria-label="Core value pillars"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <article className="text-center" key={index} role="listitem">
                <div className="mb-4 flex justify-center">
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-luxury-gold/10"
                  >
                    <IconComponent className="h-8 w-8 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="mb-2 font-sans text-lg text-white">
                  {pillar.title}
                </h3>
                <p className="font-sans text-gray-400 text-sm">
                  {pillar.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
