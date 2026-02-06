import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-dark-brown">
            dibbi
          </span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/shop"
            className="text-sm font-medium text-warm-brown transition-colors hover:text-dark-brown"
          >
            Shop
          </Link>
          <Link
            href="/shop/furniture"
            className="text-sm font-medium text-warm-brown transition-colors hover:text-dark-brown"
          >
            Furniture
          </Link>
          <Link
            href="/shop/art"
            className="text-sm font-medium text-warm-brown transition-colors hover:text-dark-brown"
          >
            Art
          </Link>
          <Link
            href="/shop/jewellery"
            className="text-sm font-medium text-warm-brown transition-colors hover:text-dark-brown"
          >
            Jewellery
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-warm-brown transition-colors hover:text-dark-brown"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
