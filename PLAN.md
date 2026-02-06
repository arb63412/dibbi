# Dibbi — Antique Shop E-Commerce Platform

## Vision

Dibbi is a single-owner online antique shop for selling antiques, vintage items, and collectibles. One admin manages all inventory, orders, and content. The storefront emphasizes provenance, authenticity, and storytelling — because every antique has a story.

---

## 1. Core Concepts

### What Makes Antique E-Commerce Different
- **Provenance matters**: Buyers want to know the history and origin of items
- **Condition grading**: Standardized condition ratings (Mint, Excellent, Good, Fair, Poor)
- **One-of-a-kind inventory**: Most items are unique, not mass-produced
- **Visual-first**: High-quality photography from multiple angles is essential
- **Era/Period categorization**: Victorian, Art Deco, Mid-Century Modern, etc.

---

## 2. User Roles

| Role | Description |
|------|-------------|
| **Customer** | Browse, search, purchase antiques |
| **Admin** | Single shop owner — manages inventory, orders, content, and site settings |

No multi-seller, no seller onboarding. The admin is the only person listing items.

---

## 3. Feature Breakdown

### Phase 1 — MVP (Core Shop)

#### Customer-Facing

**Browsing & Discovery**
- Homepage with featured items, categories, new arrivals
- Browse by category (Furniture, Jewelry, Art, Pottery, Books, Clocks, etc.)
- Browse by era/period (Victorian, Art Deco, Mid-Century Modern, etc.)
- Full-text search with filters (category, era, price range, condition, material)
- Sort by: newest, price low-high, price high-low

**Product Pages**
- Title, description, price
- Condition grade (Mint / Excellent / Good / Fair / Poor)
- Provenance/history
- Era/Period
- Materials, dimensions, weight
- Multiple high-res photos (up to 10) with zoom/gallery
- Related items

**Shopping & Checkout**
- Add to cart
- Wishlist / saved items
- Secure checkout with Stripe
- Shipping cost (flat rate or weight-based)
- Order confirmation email
- Guest checkout option

**Customer Accounts**
- Email/password registration and login
- Order history and tracking
- Wishlist management
- Contact/inquiry form

#### Admin Panel

**Inventory Management**
- Add / edit / delete listings
- Image upload with drag-and-drop reordering
- Set item status: Draft, Active, Sold, Archived
- Mark items as featured
- Bulk actions (archive, delete)

**Category Management**
- Create / edit / delete categories and subcategories
- Category images and descriptions

**Order Management**
- View incoming orders
- Update order status (Processing, Shipped, Delivered)
- Add tracking numbers
- Order history and search

**Site Settings**
- Shop name, description, logo
- About page content
- Shipping rates configuration
- Contact info / social links

**Analytics (basic)**
- Total sales, revenue
- Orders over time
- Popular items / categories
- Inventory count

### Phase 2 — Growth Features

- **Make an Offer**: Customers propose a price, admin accepts/counters/declines
- **Contact about item**: Inquiry form on each listing
- **Collections**: Curated thematic groupings (e.g., "Art Deco Lighting")
- **Blog/Stories**: Write about items, collecting tips, provenance deep-dives
- **Newsletter**: Email signup + integration (e.g., Resend or Mailchimp)
- **Social sharing**: Share listings to social media
- **Recently viewed**: Track and show recently viewed items
- **Advanced filters**: Search by decade, origin country, style, price range sliders
- **Discount codes**: Promotional pricing

### Phase 3 — Scale & Polish

- **AI-powered identification**: Upload a photo, get era/style suggestions (admin tool)
- **SEO structured data**: JSON-LD product markup for Google Shopping
- **Mobile app** (React Native) or PWA
- **International shipping** integration
- **Multi-currency** display
- **Inventory import/export**: CSV bulk upload for listings

---

## 4. Proposed Tech Stack

### Frontend
- **Next.js 14+** (App Router) — React framework with SSR/SSG for SEO
- **TypeScript** — Type safety throughout
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Component library built on Radix UI
- **React Hook Form + Zod** — Form handling and validation

### Backend
- **Next.js API Routes / Server Actions** — API layer
- **Prisma** — ORM for database access
- **PostgreSQL** — Primary database

### Infrastructure & Services
- **Vercel** — Hosting and deployment
- **Supabase** or **Neon** — Managed PostgreSQL
- **Uploadthing** or **Cloudinary** — Image upload and optimization
- **Stripe** — Payment processing (standard Stripe, no Connect needed)
- **Resend** — Transactional emails
- **NextAuth.js (Auth.js)** — Authentication (admin login + customer accounts)

### Testing & Quality
- **Vitest** — Unit testing
- **Playwright** — E2E testing
- **ESLint + Prettier** — Code quality

---

## 5. Data Model (Core Entities)

```
Admin
├── id, email, passwordHash
├── name
└── createdAt

Customer
├── id, email, name, passwordHash?
├── phone?, address?
├── createdAt, updatedAt
└── orders[], wishlistItems[]

Listing
├── id, title, description, price
├── categoryId
├── era, materials[], dimensions, weight
├── condition (MINT, EXCELLENT, GOOD, FAIR, POOR)
├── provenance (text)
├── status (DRAFT, ACTIVE, SOLD, ARCHIVED)
├── featured (boolean)
├── slug (URL-friendly)
├── createdAt, updatedAt
└── images[]

Category
├── id, name, slug, description
├── parentId? (for subcategories)
└── image

Image
├── id, listingId, url, alt
├── position (display order)
└── width, height

Order
├── id, customerId?
├── customerEmail, customerName
├── items[] (OrderItem)
├── status (PENDING, PAID, PROCESSING, SHIPPED, DELIVERED, CANCELLED)
├── totalAmount, shippingCost
├── shippingAddress (JSON)
├── trackingNumber?, trackingUrl?
├── stripePaymentIntentId
├── notes (admin notes)
└── createdAt, updatedAt

OrderItem
├── id, orderId, listingId
├── title (snapshot), price (snapshot)
└── quantity (typically 1 for antiques)

WishlistItem
├── id, customerId, listingId
└── createdAt

SiteSettings (singleton)
├── shopName, shopDescription, logo
├── aboutContent
├── contactEmail, phone
├── socialLinks (JSON)
├── shippingRates (JSON)
└── updatedAt
```

---

## 6. Key Pages / Routes

```
PUBLIC (Storefront)
/                          — Homepage (hero, featured, categories, new arrivals)
/shop                      — Browse all items with filters
/shop/[category]           — Browse by category
/item/[slug]               — Single item detail page
/search?q=...              — Search results
/about                     — About the shop / owner
/contact                   — Contact form
/cart                      — Shopping cart
/checkout                  — Checkout flow

CUSTOMER ACCOUNT
/account                   — Account overview
/account/orders            — Order history
/account/orders/[id]       — Order detail / tracking
/account/wishlist          — Saved items

AUTH
/login                     — Customer login
/register                  — Customer registration

ADMIN (protected)
/admin                     — Dashboard overview (stats, recent orders)
/admin/listings            — All listings table
/admin/listings/new        — Create new listing
/admin/listings/[id]/edit  — Edit listing
/admin/orders              — Order management
/admin/orders/[id]         — Order detail
/admin/categories          — Category management
/admin/settings            — Site settings (shop info, shipping, etc.)
```

---

## 7. UI/UX Direction

- **Warm, earthy color palette**: Cream, warm brown, muted gold, forest green accents
- **Typography**: Serif headings (classic, trustworthy feel), sans-serif body text
- **Photography-forward**: Large hero images, gallery views with zoom
- **Minimal, clean layout**: Let the items speak for themselves
- **Trust indicators**: Condition grades, provenance highlights, secure checkout badges
- **Responsive**: Mobile-first design

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| cream | `#FAF7F2` | Background |
| warm-brown | `#8B7355` | Primary/accents |
| dark-brown | `#3E2F1C` | Text |
| gold | `#C4A35A` | Highlights, CTAs |
| forest | `#4A6741` | Success states |
| muted-red | `#A85C4A` | Alerts, sold indicators |

---

## 8. Project Structure

```
dibbi/
├── src/
│   ├── app/
│   │   ├── (storefront)/          # Public shop pages
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── shop/              # Browse & category pages
│   │   │   ├── item/[slug]/       # Item detail
│   │   │   ├── search/            # Search results
│   │   │   ├── cart/              # Cart page
│   │   │   ├── checkout/          # Checkout flow
│   │   │   ├── about/             # About page
│   │   │   └── contact/           # Contact page
│   │   ├── (account)/             # Customer account pages
│   │   │   ├── account/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── admin/                 # Admin panel (protected)
│   │   │   ├── page.tsx           # Dashboard
│   │   │   ├── listings/
│   │   │   ├── orders/
│   │   │   ├── categories/
│   │   │   └── settings/
│   │   ├── api/                   # API routes
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── storefront/            # Shop components (header, footer, item card, filters)
│   │   ├── admin/                 # Admin components (tables, forms, charts)
│   │   └── shared/                # Shared components (image gallery, condition badge)
│   ├── lib/
│   │   ├── db.ts                  # Prisma client
│   │   ├── auth.ts                # Auth configuration
│   │   ├── stripe.ts              # Stripe setup
│   │   ├── utils.ts               # Utility functions
│   │   └── validators.ts          # Zod schemas
│   ├── hooks/                     # Custom React hooks
│   └── types/                     # TypeScript types
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── public/
│   └── images/
├── tests/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 9. Implementation Roadmap

### Sprint 1 — Foundation (Week 1-2)
- [ ] Project setup (Next.js, TypeScript, Tailwind, shadcn/ui)
- [ ] Database schema (Prisma + PostgreSQL)
- [ ] Auth setup (admin login + customer accounts)
- [ ] Basic storefront layout (header, footer, navigation)
- [ ] Homepage with placeholder content

### Sprint 2 — Inventory & Browsing (Week 3-4)
- [ ] Admin: create/edit listing form with image upload
- [ ] Admin: listings table with status management
- [ ] Admin: category management
- [ ] Storefront: item detail page
- [ ] Storefront: browse/category pages with filters
- [ ] Storefront: search

### Sprint 3 — Commerce (Week 5-6)
- [ ] Shopping cart (stored in localStorage + DB for logged-in users)
- [ ] Stripe checkout integration
- [ ] Order creation and confirmation emails
- [ ] Admin: order management (view, update status, add tracking)
- [ ] Customer: order history and tracking

### Sprint 4 — Polish & Launch (Week 7-8)
- [ ] About page, contact form
- [ ] Wishlist functionality
- [ ] Admin dashboard with basic analytics
- [ ] SEO (metadata, Open Graph, sitemaps)
- [ ] Performance (image optimization, caching)
- [ ] Mobile responsiveness
- [ ] Testing
- [ ] Launch

---

## 10. Open Questions

1. **Shipping**: Flat rate, weight-based, or per-item defined by admin?
2. **Guest checkout**: Allow purchases without creating an account?
3. **"Price on Request"**: Support this for high-value items?
4. **Contact form**: Simple email form, or integrated messaging?
5. **Payment**: Stripe only, or also PayPal?
