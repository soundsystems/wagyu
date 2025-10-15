import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-luxury-gold/20 border-t bg-luxury-black">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-20 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Logo */}
          <div className="flex flex-shrink-0 justify-center md:justify-start">
            <Link
              aria-label="Ozark Natural Steak Co. home page"
              className="block"
              href="/"
            >
              <Image
                alt="Ozark Natural Steak Co. company logo"
                className="h-24 w-24 object-contain transition-opacity hover:opacity-80 md:h-32 md:w-32"
                height={128}
                src="/Ozark_Natural_Steak_Co_Logo_no_Background.png"
                width={128}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 flex-1">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="border-luxury-gold border-b-2 font-bold text-white text-xl">
                <span className="text-white">Ozark</span>{" "}
                <span className="text-white">Natural</span>{" "}
                <span className="text-white">Steak Co.</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium American Wagyu beef raised with care and tradition by the
                Smith family in the Ozarks.
              </p>
            </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <Link
                className="block text-white text-sm transition-colors hover:text-gray-300"
                href="/our-ranch"
              >
                Our Ranch
              </Link>
              <Link
                className="block text-white text-sm transition-colors hover:text-gray-300"
                href="/recipes"
              >
                Recipes
              </Link>
              <Link
                className="block text-white text-sm transition-colors hover:text-gray-300"
                href="/wholesale"
              >
                Wholesale
              </Link>
              <Link
                className="block text-white text-sm transition-colors hover:text-gray-300"
                href="/local"
              >
                Local Partners
              </Link>
              <Link
                className="block text-white text-sm transition-colors hover:text-gray-300"
                href="/policies"
              >
                Policies
              </Link>
              <Link
                className="block text-white text-sm transition-colors hover:text-gray-300"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="font-medium text-white">Smith Family Ranch</p>
              <p>Ozark Mountains, Arkansas</p>
              <p>info@ozarknaturalsteak.com</p>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between border-luxury-gold/20 border-t pt-4 md:mt-12 md:flex-row md:pt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Ozark Natural Steak Co. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              className="text-white text-sm transition-colors hover:text-gray-300"
              href="/policies"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white text-sm transition-colors hover:text-gray-300"
              href="/policies"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

