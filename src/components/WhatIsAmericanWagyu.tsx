import Image from "next/image"

export function WhatIsAmericanWagyu() {
  return (
    <section
      aria-labelledby="wagyu-explanation-heading"
      className="bg-luxury-black py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <aside className="order-2 lg:order-1">
            <figure className="relative aspect-[4/3]">
              <Image
                alt="American Wagyu cattle grazing in Ozark pastures, showcasing the heritage and quality that defines our premium beef"
                className="rounded-lg object-cover"
                fill
                src="/Black_Red_Wayguy (1).jpg"
              />
              <figcaption className="sr-only">
                American Wagyu cattle representing the blend of Japanese
                heritage and American ranching excellence
              </figcaption>
            </figure>
          </aside>

          {/* Content Section */}
          <article className="order-1 lg:order-2">
            <header>
              <h2
                className="mb-6 font-bold text-3xl text-white"
                id="wagyu-explanation-heading"
              >
                What is American Wagyu?
              </h2>
            </header>

            <div className="space-y-6 font-sans text-gray-300 text-lg leading-relaxed">
              <p>
                American Wagyu is the perfect blend of Japanese heritage and
                American craftsmanship. It comes from cattle bred from Japanese
                Wagyu genetics — prized for their intricate marbling and
                unmatched tenderness — and raised on U.S. ranches with the care,
                space, and natural diet that define American ranching
                traditions.
              </p>

              <p>
                The result is a steak that combines the luxurious texture of
                Japanese Wagyu with the bold, hearty flavor of premium American
                beef. At Ozark Natural Steak Co., our Wagyu is raised locally in
                Arkansas pastures, free from added hormones, and finished on a
                natural feed program to develop its signature marbling and
                buttery richness.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
