import type { Metadata } from "next";
import { Header } from "@/components/storefront/header";
import { Footer } from "@/components/storefront/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dibbi — Curated Antiques & Vintage Treasures",
    template: "%s | Dibbi",
  },
  description:
    "Discover unique antiques, vintage collectibles, and timeless treasures. Every piece has a story. Based in Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
