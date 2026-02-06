import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";

interface ListingCardProps {
  slug: string;
  title: string;
  price: number | null;
  priceOnRequest: boolean;
  imageUrl: string;
  condition: string;
  era?: string;
  category: string;
}

export function ListingCard({
  slug,
  title,
  price,
  priceOnRequest,
  imageUrl,
  condition,
  era,
  category,
}: ListingCardProps) {
  return (
    <Link href={`/item/${slug}`} className="group block">
      <div className="aspect-square overflow-hidden rounded-lg bg-cream-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-2">
          {era && <Badge variant="era">{era}</Badge>}
          <Badge variant="condition">{condition}</Badge>
        </div>
        <h3 className="font-serif text-lg font-medium text-dark-brown group-hover:text-warm-brown">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="font-semibold text-dark-brown">
          {priceOnRequest ? "Price on Request" : price ? formatPrice(price) : "—"}
        </p>
      </div>
    </Link>
  );
}
