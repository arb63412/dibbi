import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Package, ShoppingCart, MessageSquare, Settings, Tag } from "lucide-react";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/login?admin=true&callbackUrl=/admin");
  }

  const cards = [
    {
      title: "Listings",
      description: "Manage your inventory",
      href: "/admin/listings",
      icon: Package,
      count: "—",
    },
    {
      title: "Orders",
      description: "View and manage orders",
      href: "/admin/orders",
      icon: ShoppingCart,
      count: "—",
    },
    {
      title: "Categories",
      description: "Organise your items",
      href: "/admin/categories",
      icon: Tag,
      count: "—",
    },
    {
      title: "Messages",
      description: "Customer enquiries",
      href: "/admin/messages",
      icon: MessageSquare,
      count: "—",
    },
    {
      title: "Settings",
      description: "Shop configuration",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-dark-brown">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back, {session.user.name}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <card.icon className="h-6 w-6 text-warm-brown" />
              <h2 className="font-serif text-xl font-semibold text-dark-brown">
                {card.title}
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {card.description}
            </p>
            {"count" in card && (
              <p className="mt-3 text-2xl font-bold text-dark-brown">
                {card.count}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
