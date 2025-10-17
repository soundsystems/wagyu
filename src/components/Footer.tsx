import Image from "next/image"
import Link from "next/link"
import { WholesaleButton } from "./WholesaleButton"

export function Footer() {
  return (
    <footer className="border-luxury-gold/20 border-t bg-luxury-black">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 md:py-16">
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

          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-4 md:gap-8">
            {/* Company Info */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-bold text-white text-xl">
                <span className="border-luxury-gold border-b">
                  Ozark Natural Steak Co.
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed md:text-base md:max-w-xs">
                Premium American Wagyu beef raised with love, care, and real respect for the animal.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <Link
                  className="block text-sm text-white transition-colors hover:text-gray-300"
                  href="/our-ranch"
                >
                  Our Ranch
                </Link>
                <Link
                  className="block text-sm text-white transition-colors hover:text-gray-300"
                  href="/recipes"
                >
                  Recipes
                </Link>
                <Link
                  className="block text-sm text-white transition-colors hover:text-gray-300"
                  href="/local"
                >
                  Local Partners
                </Link>
                <div className="md:hidden">
                  <WholesaleButton variant="mobile" />
                </div>
                <div className="hidden md:block">
                  <WholesaleButton variant="footer" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="space-y-2 text-gray-300 text-sm">
                <p className="font-medium text-white">Smith Family Ranch</p>
                <p>The Ozark Mountains, USA</p>
                <p>
                  <a
                    className="transition-colors hover:text-luxury-gold"
                    href="mailto:info@ozarknaturalsteak.com"
                  >
                    info@ozarknaturalsteak.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between border-luxury-gold/20 border-t pt-4 md:mt-12 md:flex-row md:pt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Ozark Natural Steak Co. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              className="text-sm text-white transition-colors hover:text-gray-300"
              href="/policies"
            >
              Policy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
