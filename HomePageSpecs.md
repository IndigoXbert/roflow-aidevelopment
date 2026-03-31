# RoFlow Homepage — Specifications & Hookup Guide

## Overview

The homepage is a single-page marketing site at `ro-flow.com` built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. All components live under `web/src/components/` and are assembled in `web/src/app/page.tsx`.

## Sections & Components

### 1. Navbar (`Navbar.tsx`)
- Fixed top nav with blur backdrop
- Logo: placeholder lightning bolt icon in blue square — **replace with real RoFlow logo**
- Desktop: Features / Pricing / FAQ anchor links + Log in + "Start Creating" button
- Mobile: hamburger menu with slide-down panel
- **Hookups needed:**
  - [ ] Replace placeholder logo with real brand icon/SVG
  - [ ] Wire "Log in" to auth flow (e.g., NextAuth, Clerk, Supabase Auth)
  - [ ] Wire "Start Creating" to `/dashboard` or project creation page
  - [ ] Add active link highlighting based on scroll position

### 2. Hero (`Hero.tsx`)
- Gradient background with soft blur orb
- Social proof: 5 colored avatar circles + "Trusted by 100+ Developers"
- Headline: "Your AI-Powered Roblox Studio"
- Subtitle with value prop
- Two CTAs: "Start creating today" + "Explore all features"
- Fade-in animation on load
- **Hookups needed:**
  - [ ] Replace colored circles with real user avatars (pull from auth/DB)
  - [ ] Update developer count dynamically from DB
  - [ ] Wire "Start creating today" to project creation flow
  - [ ] Wire "Explore all features" to `#features` anchor (already set)

### 3. Video Carousel (`VideoCarousel.tsx`)
- Auto-rotating carousel (4s interval) with manual nav arrows and dot indicators
- Currently shows colored gradient placeholders with play icon
- Fade-in on scroll via IntersectionObserver
- **Hookups needed:**
  - [ ] Replace gradient placeholders with real gameplay video embeds or `<video>` elements
  - [ ] Add actual game titles and metadata
  - [ ] Consider lazy-loading videos for performance
  - [ ] Optionally link each card to a project showcase page

### 4. Features (`Features.tsx`)
- 6-card grid (3 cols desktop, 2 cols tablet, 1 col mobile)
- Cards: AI Game Design, Luau Code Generation, Roblox-Optimized, Team Collaboration, Save Hours, Smart Review
- Staggered fade-in animation on scroll
- **Hookups needed:**
  - [ ] Finalize feature list and descriptions
  - [ ] Optionally link each card to a detailed feature page or docs section

### 5. Action Cards (`ActionCards.tsx`)
- Two large dashed-border cards side by side
- "Start New Project" (plus icon) — blue highlight on hover
- "Browse Templates" (4-square grid icon) — purple highlight on hover
- **Hookups needed:**
  - [ ] Wire "Start New Project" to project creation page (`/new` or `/dashboard/new`)
  - [ ] Wire "Browse Templates" to template gallery page (`/templates`)
  - [ ] Build the template gallery page itself

### 6. Pricing (`Pricing.tsx`)
- 3 tiers: Free ($0), Pro ($19/mo), Team ($49/mo)
- Pro tier highlighted with "Most Popular" badge and scale effect
- Green checkmark feature lists
- **Hookups needed:**
  - [ ] Finalize pricing amounts and feature lists
  - [ ] Wire CTA buttons to Stripe Checkout or billing flow
  - [ ] Add monthly/annual toggle if needed
  - [ ] Wire "Contact Sales" to contact form or email

### 7. FAQ (`FAQ.tsx`)
- 5 expandable accordion items
- Smooth open/close animation
- Staggered fade-in on scroll
- **Hookups needed:**
  - [ ] Review and finalize Q&A content
  - [ ] Add more questions as product matures
  - [ ] Optionally pull FAQs from a CMS or database

### 8. Footer CTA (`FooterCTA.tsx`)
- Blue gradient card with "AI-Powered" badge
- "Create Your Next Roblox Hit" headline
- "Start creating now" button
- Decorative blur orbs
- **Hookups needed:**
  - [ ] Wire CTA to project creation flow

### 9. Footer (`Footer.tsx`)
- 4-column layout: Brand, Product, Resources, Legal
- Social icons: Twitter/X, GitHub
- Many links marked "(soon)" as placeholders
- **Hookups needed:**
  - [ ] Create and link Privacy Policy page
  - [ ] Create and link Terms of Service page
  - [ ] Create and link Contact page
  - [ ] Add real social media URLs
  - [ ] Create documentation site and link it
  - [ ] Create blog/changelog and link them
  - [ ] Link Templates page when built

## Technical Details

### Styling
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- Custom theme colors defined in `globals.css` under `@theme` block
- Primary palette: blue (`--color-primary-50` through `--color-primary-950`)
- Custom animations: `fadeInUp` keyframes + delay utilities

### Animations
- Hero: CSS `animate-fade-in-up` on mount
- All other sections: IntersectionObserver triggers `opacity` + `translateY` transitions
- Feature cards and FAQ items have staggered delays
- Hover effects: `hover:-translate-y-1`, `hover:shadow-lg`, color transitions

### Responsiveness
- Mobile-first with `md:` and `lg:` breakpoints
- Navbar collapses to hamburger on mobile
- Grid layouts collapse to single column
- Pricing cards stack vertically on mobile

## Files Created

```
web/src/
├── app/
│   ├── globals.css         → Tailwind import + custom theme + animations
│   ├── layout.tsx          → Root layout with Inter font
│   └── page.tsx            → Assembles all homepage sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VideoCarousel.tsx
│   ├── Features.tsx
│   ├── ActionCards.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── FooterCTA.tsx
│   └── Footer.tsx
web/
├── postcss.config.mjs      → Tailwind PostCSS plugin config
```

## Global Hookups Still Needed

- [ ] **Authentication** — Add auth provider (NextAuth / Clerk / Supabase). Wire Log in + Start Creating buttons.
- [ ] **Routing** — Create `/dashboard`, `/new`, `/templates` pages for CTA destinations.
- [ ] **Payments** — Integrate Stripe for pricing tier subscriptions.
- [ ] **CMS** — Optionally pull FAQs, features, testimonials from a headless CMS.
- [ ] **Analytics** — Add Vercel Analytics or Google Analytics.
- [ ] **SEO** — Add Open Graph tags, Twitter cards, structured data in layout.tsx.
- [ ] **Logo** — Replace placeholder icon with real RoFlow brand logo.
- [ ] **Real videos** — Replace carousel placeholders with actual gameplay captures.
- [ ] **Legal pages** — Privacy Policy, Terms of Service.
- [ ] **Social media** — Set up and link Twitter/X, GitHub, Discord.
