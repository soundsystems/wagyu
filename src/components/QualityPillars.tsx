import { Clock, Droplets, Zap } from "lucide-react"

const qualityPillars = [
  {
    icon: Droplets,
    title: "Buttery Flavor",
    description:
      "Rich marbling creates an incredibly buttery taste with notes that develop naturally through our careful raising and aging process.",
  },
  {
    icon: Zap,
    title: "Tender Texture",
    description:
      "Naturally achieved tenderness through low-stress handling and patient aging—never rushed, always consistent.",
  },
  {
    icon: Clock,
    title: "Clean & Slow-Aged",
    description:
      "Our patient aging process develops depth and complexity while maintaining the clean, pure flavor of premium Wagyu.",
  },
]

export function QualityPillars() {
  return (
    <section
      aria-labelledby="quality-pillars-heading"
      className="bg-luxury-charcoal py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <header className="mb-16 text-center">
          <h2
            className="mb-4 font-bold text-3xl text-white"
            id="quality-pillars-heading"
          >
            What Premium <br className="md:hidden" />
            Means to Us
          </h2>
        </header>

        <div
          aria-label="Quality pillars defining premium beef"
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3"
          role="list"
        >
          {qualityPillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <article className="text-center" key={index} role="listitem">
                <div className="mb-6 flex justify-center">
                  <div
                    aria-hidden="true"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-luxury-gold/10"
                  >
                    <IconComponent className="h-10 w-10 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl text-luxury-gold">
                  {pillar.title}
                </h3>
                <p className="font-sans text-gray-300 leading-relaxed">
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
