import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ListingCard } from "@/components/storefront/listing-card";

// Placeholder data — will be replaced by database queries
const featuredItems = [
  {
    slug: "victorian-mahogany-writing-desk",
    title: "Victorian Mahogany Writing Desk",
    price: 285000,
    priceOnRequest: false,
    imageUrl: "https://placehold.co/600x600/8B7355/FAF7F2?text=Writing+Desk",
    condition: "Excellent",
    era: "Victorian",
    category: "Furniture",
  },
  {
    slug: "art-deco-bronze-lamp",
    title: "Art Deco Bronze Table Lamp",
    price: 95000,
    priceOnRequest: false,
    imageUrl: "https://placehold.co/600x600/C4A35A/3E2F1C?text=Bronze+Lamp",
    condition: "Good",
    era: "Art Deco",
    category: "Lighting",
  },
  {
    slug: "mid-century-teak-sideboard",
    title: "Mid-Century Teak Sideboard",
    price: 420000,
    priceOnRequest: false,
    imageUrl: "https://placehold.co/600x600/4A6741/FAF7F2?text=Teak+Sideboard",
    condition: "Excellent",
    era: "Mid-Century",
    category: "Furniture",
  },
  {
    slug: "edwardian-silver-tea-set",
    title: "Edwardian Sterling Silver Tea Set",
    price: null,
    priceOnRequest: true,
    imageUrl: "https://placehold.co/600x600/3E2F1C/C4A35A?text=Silver+Tea+Set",
    condition: "Mint",
    era: "Edwardian",
    category: "Silverware",
  },
];

const categories = [
  { name: "Furniture", slug: "furniture", count: 24 },
  { name: "Art", slug: "art", count: 18 },
  { name: "Jewellery", slug: "jewellery", count: 31 },
  { name: "Pottery & Ceramics", slug: "pottery-ceramics", count: 15 },
  { name: "Silverware", slug: "silverware", count: 12 },
  { name: "Books & Maps", slug: "books-maps", count: 9 },
  { name: "Clocks & Watches", slug: "clocks-watches", count: 7 },
  { name: "Lighting", slug: "lighting", count: 11 },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-dark-brown px-4 py-24 text-cream sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Every antique
              <br />
              tells a story
            </h1>
            <p className="mt-6 text-lg text-cream-dark">
              Discover carefully curated antiques and vintage treasures, each
              with its own provenance and history. Based in Australia, shipping
              nationwide.
            </p>
            <div className="mt-8 flex gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/shop">
                  Browse Collection
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-warm-brown text-cream hover:bg-warm-brown/20 hover:text-cream"
                asChild
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-dark-brown">
                Featured Pieces
              </h2>
              <p className="mt-2 text-muted-foreground">
                Hand-picked treasures from our collection
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-medium text-warm-brown hover:text-dark-brown sm:flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item) => (
              <ListingCard key={item.slug} {...item} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/shop">View All Items</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream-dark px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-bold text-dark-brown">
            Browse by Category
          </h2>
          <p className="mt-2 text-muted-foreground">
            Find exactly what you&apos;re looking for
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-md"
              >
                <h3 className="font-serif text-lg font-semibold text-dark-brown group-hover:text-warm-brown">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cat.count} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Provenance CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-dark-brown px-8 py-12 text-center text-cream sm:px-16">
            <h2 className="font-serif text-3xl font-bold">
              Authenticity Guaranteed
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream-dark">
              Every item in our collection comes with detailed provenance and
              condition information. We stand behind the authenticity of every
              piece we sell.
            </p>
            <Button variant="accent" size="lg" className="mt-8" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
