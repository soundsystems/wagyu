import { ChefHat, MapPin, Store } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function LocalPride() {
  return (
    <section className="bg-luxury-charcoal py-16">
      <div className="mx-auto max-w-[1440px] px-20">
        <div className="mb-12 text-center">
          <h2 className="mb-6 font-bold text-4xl text-white">
            Rooted in Northwest Arkansas
          </h2>
          <p className="mx-auto max-w-5xl font-sans text-gray-300 text-lg leading-relaxed">
            Proudly raised in the Ozarks, and shipped regionally. We&apos;ll
            always serve local families, restaurants, and community partners
            first.
          </p>
        </div>

        {/* Local Landmarks Strip */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-luxury-black/50 p-6 text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-luxury-gold" />
            <h3 className="mb-2 font-sans text-white text-xl">
              Ozark Mountains
            </h3>
            <p className="font-sans text-gray-400">Where it all began</p>
          </div>

          <div className="rounded-lg bg-luxury-black/50 p-6 text-center">
            <Store className="mx-auto mb-4 h-12 w-12 text-luxury-gold" />
            <h3 className="mb-2 font-sans text-white text-xl">Local Markets</h3>
            <p className="font-sans text-gray-400">Supporting our community</p>
          </div>

          <div className="rounded-lg bg-luxury-black/50 p-6 text-center">
            <ChefHat className="mx-auto mb-4 h-12 w-12 text-luxury-gold" />
            <h3 className="mb-2 font-sans text-white text-xl">
              Regional Restaurants
            </h3>
            <p className="font-sans text-gray-400">Partners in excellence</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button
            asChild
            className="cursor-pointer px-8 hover:!text-white"
            size="lg"
            variant="luxury-outline"
          >
            <Link href="/local">Find Us Locally</Link>
          </Button>
          <Button
            asChild
            className="cursor-pointer px-8 hover:!text-white"
            size="lg"
            variant="luxury-outline"
          >
            <Link href="/wholesale">Wholesale & Restaurants</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
