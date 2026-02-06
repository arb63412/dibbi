# Dibbi — Antique Selling E-Commerce Platform

## Vision

Dibbi is a curated online marketplace for buying and selling antiques, vintage items, and collectibles. It emphasizes provenance, authenticity, and storytelling — because every antique has a story.

---

## 1. Core Concepts

### What Makes Antique E-Commerce Different
- **Provenance matters**: Buyers want to know the history and origin of items
- **Condition grading**: Standardized condition ratings (Mint, Excellent, Good, Fair, Poor)
- **Authenticity**: Verification and trust signals are critical
- **One-of-a-kind inventory**: Most items are unique, not mass-produced
- **Visual-first**: High-quality photography from multiple angles is essential
- **Era/Period categorization**: Victorian, Art Deco, Mid-Century Modern, etc.

---

## 2. User Roles

| Role | Description |
|------|-------------|
| **Buyer** | Browse, search, purchase antiques |
| **Seller** | List items, manage inventory, fulfill orders |
| **Admin** | Moderate listings, manage users, platform settings |

Sellers can also be buyers. Single account with role-based permissions.

---

## 3. Feature Breakdown

### Phase 1 — MVP (Core Marketplace)

#### Authentication & Accounts
- Email/password registration and login
- OAuth (Google, Apple)
- User profiles with avatar, bio, location
- Seller verification flow

#### Product Listings
- Title, description, price
- Category & subcategory (Furniture, Jewelry, Art, Pottery, Books, Clocks, etc.)
- Era/Period tags (Victorian, Art Deco, Mid-Century Modern, Antebellum, etc.)
- Condition grade (Mint / Excellent / Good / Fair / Poor)
- Provenance/history text field
- Dimensions & weight
- Multiple high-res photos (up to 10)
- Materials (wood, brass, porcelain, silver, etc.)

#### Search & Discovery
- Full-text search with filters (category, era, price range, condition, material)
- Browse by category
- Browse by era/period
- Sort by: newest, price low-high, price high-low
- Featured/curated collections on homepage

#### Shopping & Checkout
- Add to cart
- Saved/wishlist items
- Secure checkout with Stripe
- Shipping cost calculation
- Order confirmation emails

#### Seller Dashboard
- List new items
- Manage active listings
- Order management (mark shipped, add tracking)
- Sales analytics (basic)

#### Buyer Experience
- Order history
- Order tracking
- Leave reviews/ratings for sellers

### Phase 2 — Growth Features

- **Make an Offer**: Buyers propose a price, seller accepts/counters/declines
- **Auction mode**: Timed auctions for rare items
- **Favorites & follows**: Follow sellers, get notifications on new listings
- **Messaging**: Buyer-seller direct messaging
- **Advanced search**: Search by decade, origin country, style
- **Collections**: Curated thematic collections (e.g., "Art Deco Lighting")
- **Seller tiers**: Basic, Verified, Premium seller badges
- **Blog/Editorial**: Stories about antiques, collecting guides

### Phase 3 — Scale & Differentiation

- **AI-powered identification**: Upload a photo, get era/style/value estimates
- **Authenticity certificates**: Digital certificates of authenticity
- **Appraisal requests**: Connect with professional appraisers
- **Mobile app** (React Native)
- **International shipping** integration
- **Multi-currency** support
- **Affiliate program** for antique bloggers/influencers

---

## 4. Proposed Tech Stack

### Frontend
- **Next.js 14+** (App Router) — React framework with SSR/SSG for SEO
- **TypeScript** — Type safety throughout
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Component library built on Radix UI
- **Zustand** — Lightweight state management
- **React Hook Form + Zod** — Form handling and validation

### Backend
- **Next.js API Routes / Server Actions** — API layer
- **Prisma** — ORM for database access
- **PostgreSQL** — Primary database
- **Redis** — Caching, session storage, rate limiting

### Infrastructure & Services
- **Vercel** — Hosting and deployment
- **Supabase** or **Neon** — Managed PostgreSQL
- **Uploadthing** or **Cloudinary** — Image upload and optimization
- **Stripe** — Payments and payouts to sellers
- **Resend** — Transactional emails
- **Algolia** or **Meilisearch** — Full-text search (Phase 2)
- **NextAuth.js (Auth.js)** — Authentication

### Testing & Quality
- **Vitest** — Unit testing
- **Playwright** — E2E testing
- **ESLint + Prettier** — Code quality
- **Husky** — Git hooks

---

## 5. Data Model (Core Entities)

```
User
├── id, email, name, avatar, bio, location
├── role (BUYER, SELLER, ADMIN)
├── emailVerified, createdAt, updatedAt
├── sellerProfile? (one-to-one)
└── reviews[], orders[], listings[]

SellerProfile
├── id, userId, shopName, shopDescription
├── verified, verifiedAt
├── stripeAccountId
└── ratings, totalSales

Listing
├── id, sellerId, title, description, price
├── category, subcategory
├── era, materials[], dimensions
├── condition (MINT, EXCELLENT, GOOD, FAIR, POOR)
├── provenance (text)
├── images[] (urls)
├── status (DRAFT, ACTIVE, SOLD, ARCHIVED)
├── featured (boolean)
└── createdAt, updatedAt

Category
├── id, name, slug, description
├── parentId? (for subcategories)
└── image

Order
├── id, buyerId, sellerId
├── items[] (OrderItem)
├── status (PENDING, PAID, SHIPPED, DELIVERED, CANCELLED)
├── totalAmount, shippingCost
├── shippingAddress
├── trackingNumber, trackingUrl
├── stripePaymentId
└── createdAt, updatedAt

OrderItem
├── id, orderId, listingId
├── price (snapshot at time of purchase)
└── listing (reference)

Review
├── id, orderId, buyerId, sellerId
├── rating (1-5), comment
└── createdAt

Image
├── id, listingId, url, alt
├── position (ordering)
└── width, height
```

---

## 6. Key Pages / Routes

```
/                          — Homepage (featured, categories, new arrivals)
/browse                    — Browse all listings with filters
/browse/[category]         — Browse by category
/item/[id]                 — Single listing detail page
/search?q=...              — Search results

/auth/login                — Login page
/auth/register             — Registration page

/account                   — Account settings
/account/orders            — Order history
/account/wishlist          — Saved items

/sell                      — Seller onboarding / CTA
/dashboard                 — Seller dashboard
/dashboard/listings        — Manage listings
/dashboard/listings/new    — Create new listing
/dashboard/listings/[id]   — Edit listing
/dashboard/orders          — Seller order management
/dashboard/analytics       — Sales analytics

/admin                     — Admin panel
/admin/users               — User management
/admin/listings            — Listing moderation
/admin/categories          — Category management
```

---

## 7. UI/UX Direction

- **Warm, earthy color palette**: Cream, warm brown, muted gold, forest green accents
- **Typography**: Serif headings (classic, trustworthy feel), sans-serif body text
- **Photography-forward**: Large hero images, gallery views
- **Minimal, clean layout**: Let the items speak for themselves
- **Trust indicators**: Verified seller badges, condition grades, provenance highlights
- **Responsive**: Mobile-first design, works beautifully on all screen sizes

### Color Palette (suggestion)
| Token | Hex | Usage |
|-------|-----|-------|
| cream | `#FAF7F2` | Background |
| warm-brown | `#8B7355` | Primary/accents |
| dark-brown | `#3E2F1C` | Text |
| gold | `#C4A35A` | Highlights, CTAs |
| forest | `#4A6741` | Success, verified badges |
| muted-red | `#A85C4A` | Alerts, sale indicators |

---

## 8. Project Structure

```
dibbi/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/             # Auth route group
│   │   ├── (main)/             # Public-facing pages
│   │   ├── dashboard/          # Seller dashboard
│   │   ├── admin/              # Admin panel
│   │   ├── api/                # API routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Header, Footer, Sidebar
│   │   ├── listings/           # Listing card, gallery, filters
│   │   ├── checkout/           # Cart, checkout flow
│   │   └── dashboard/          # Seller dashboard components
│   ├── lib/
│   │   ├── db.ts               # Prisma client
│   │   ├── auth.ts             # Auth configuration
│   │   ├── stripe.ts           # Stripe setup
│   │   ├── utils.ts            # Utility functions
│   │   └── validators/         # Zod schemas
│   ├── hooks/                  # Custom React hooks
│   ├── stores/                 # Zustand stores
│   └── types/                  # TypeScript types
├── prisma/
│   ├── schema.prisma           # Database schema
│   ├── seed.ts                 # Seed data
│   └── migrations/
├── public/
│   └── images/
├── tests/
│   ├── unit/
│   └── e2e/
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
- [ ] Authentication (NextAuth.js)
- [ ] Basic layout (header, footer, navigation)
- [ ] Homepage skeleton

### Sprint 2 — Listings (Week 3-4)
- [ ] Create listing form (seller)
- [ ] Image upload
- [ ] Listing detail page
- [ ] Browse/category pages
- [ ] Search with filters

### Sprint 3 — Commerce (Week 5-6)
- [ ] Shopping cart
- [ ] Stripe checkout integration
- [ ] Order creation and confirmation
- [ ] Seller order management
- [ ] Email notifications (order confirmation, shipping updates)

### Sprint 4 — Seller Experience (Week 7-8)
- [ ] Seller dashboard
- [ ] Listing management (edit, archive, relist)
- [ ] Sales analytics
- [ ] Seller profiles and public shop pages
- [ ] Reviews and ratings

### Sprint 5 — Polish & Launch (Week 9-10)
- [ ] SEO optimization (metadata, structured data, sitemaps)
- [ ] Performance optimization (image optimization, caching)
- [ ] Mobile responsiveness audit
- [ ] Error handling and edge cases
- [ ] Testing (unit + E2E)
- [ ] Launch checklist

---

## 10. Revenue Model

- **Commission**: X% per sale (e.g., 8-12%)
- **Listing fees**: Optional premium placement / featured listings
- **Seller subscriptions**: Free tier + paid tiers with lower commission rates
- **Promoted listings**: Sellers pay to boost visibility

---

## 11. Open Questions / Decisions Needed

1. **Marketplace vs. single-seller?** — Plan assumes multi-seller marketplace
2. **Shipping**: Flat rate, calculated, or seller-defined?
3. **International scope**: US-only initially, or global from day one?
4. **Content moderation**: Manual review of listings, or trust-based with reporting?
5. **Escrow/disputes**: How to handle buyer protection and disputes?
6. **Seller payouts**: Immediate via Stripe Connect, or batched?
7. **Categories**: Start with a fixed set, or let sellers create custom categories?
8. **Pricing**: Support "Price on Request" for high-value items?
