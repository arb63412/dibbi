import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark-brown text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-bold">dibbi</span>
            <p className="mt-3 text-sm text-cream-dark">
              Curated antiques and vintage treasures. Every piece has a story.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Shop
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/shop" className="text-sm text-cream-dark hover:text-cream">
                  All Items
                </Link>
              </li>
              <li>
                <Link href="/shop/furniture" className="text-sm text-cream-dark hover:text-cream">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/shop/art" className="text-sm text-cream-dark hover:text-cream">
                  Art
                </Link>
              </li>
              <li>
                <Link href="/shop/jewellery" className="text-sm text-cream-dark hover:text-cream">
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Information
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-cream-dark hover:text-cream">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cream-dark hover:text-cream">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-cream-dark hover:text-cream">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm text-cream-dark">
              Have a question about an item?
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-sm font-medium text-gold hover:text-gold-light"
            >
              Send us a message &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-warm-brown pt-6">
          <p className="text-center text-xs text-warm-brown">
            &copy; {new Date().getFullYear()} Dibbi. All rights reserved. ABN pending.
          </p>
        </div>
      </div>
    </footer>
  );
}
