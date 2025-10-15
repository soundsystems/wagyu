import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function FamilyIntroduction() {
  return (
    <section
      aria-labelledby="family-intro-heading"
      className="bg-luxury-black py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Family Photo */}
          <aside>
            <figure className="relative h-[400px] w-full">
              <Image
                alt="The Smith family at their ranch gate - Dustin, Denise, Sawyer, and Kenley, the family behind Ozark Natural Steak Co."
                className="rounded-lg object-cover"
                fill
                priority
                src="/Smith_Family_Gate.jpg"
              />
              <figcaption className="sr-only">
                The Smith family represents over 20 years of cattle ranching
                experience and commitment to animal welfare
              </figcaption>
            </figure>
          </aside>

          {/* Family Story Content */}
          <article>
            <header>
              <h2
                className="mb-8 font-bold text-3xl text-white"
                id="family-intro-heading"
              >
                The Family <br className="md:hidden" />
                Behind the Beef
              </h2>
            </header>

            <div className="space-y-6 font-sans text-gray-300 text-lg leading-relaxed">
              <p>
                For over 20 years, Dustin, Denise, Sawyer, and Kenley Smith have
                put animal well-being first—raising cattle with care to deliver
                steaks that exceed expectations.
              </p>
              <p>
                What started with grit and stewardship has grown into a full
                cattle operation, then a commercial beef business, and
                eventually Ozark Natural Steak Co.
              </p>
              <p>
                We believe great beef starts with stewardship, low-stress
                handling, clean feed, and the patience to do it right. Every
                decision is made with the animals&apos; well-being in mind.
              </p>
              <blockquote className="border-luxury-gold border-l-4 pl-4 text-luxury-warm-beige italic">
                &ldquo;Grateful for the land, the cattle, and the families we
                serve.&rdquo;
              </blockquote>
            </div>

            <footer className="mt-8 text-center md:text-left">
              <Button
                aria-describedby="family-story-description"
                asChild
                className="cursor-pointer px-8 hover:!text-white no-underline"
                size="lg"
                variant="luxury-outline"
              >
                <Link href="/our-ranch" className="no-underline">Our Story</Link>
              </Button>
              <span className="sr-only" id="family-story-description">
                Learn more about the Smith family&apos;s ranching journey and
                values
              </span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  )
}
