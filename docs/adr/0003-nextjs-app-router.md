# ADR 0003: Use Next.js (App Router) as the application framework

- **Status:** Accepted
- **Date:** 2025-09-07
- **Deciders:** Matthew Dunn

## Context

Green Guide is a content-heavy, public-facing site: species profiles and
category browsing need to be discoverable by search engines, load fast on
mobile with no account gate, and eventually grow into authenticated
commerce-adjacent features (accounts, saved lists, cart) without a rewrite.
The framework decision had to hold up across that whole span, not just the
initial static-feeling pages.

Key requirements driving the choice:

- **SEO and fast first paint** for glossary/species pages — a client-only SPA
  would ship an empty shell and rely on client-side data fetching, hurting
  both crawlability and the "fast page loads, no account required" priority.
- **A natural place to query MongoDB** (ADR 0001) per request without hand-
  rolling a separate API layer for every page — species/pest data is read
  server-side and rendered directly.
- **File-system routing that mirrors the domain hierarchy** —
  `/[genus]/[species]/[variety]` maps cleanly onto nested dynamic route
  segments instead of a manually maintained router config.
- **Built-in image optimization** for the plant photography pipeline
  (ADR 0002) — resizing/format negotiation without standing up a separate
  image service.
- **A realistic path to the full roadmap** (accounts, planners, an AI
  botanist chat surface) inside one codebase, mixing static/server-rendered
  marketing-style pages with interactive client islands, rather than
  integrating two separate apps.
- **One-person team, pre-revenue.** Deploy simplicity and community/ecosystem
  size matter more than maximum framework flexibility.

## Decision

Build the app on **Next.js with the App Router**, using **React Server
Components as the default** and `'use client'` only where a component needs
hooks, event handlers, or browser APIs (see AGENTS.md's Components
convention).

Key implementation choices:

- Server components fetch directly from MongoDB (via `lib/db/`) and pass
  serializable projections (e.g. `PlantCardData`, `PestSummaryData`) down to
  client components — no internal REST/GraphQL layer for first-party data.
- Dynamic segments (`app/[genus]/[species]/[variety]/page.tsx`) validate
  against the database and call `notFound()` for missing combinations,
  giving every route a real 404 instead of a client-side empty state.
- `next/image` is configured via `images.remotePatterns` (`next.config.ts`)
  against the R2 custom domain, so photos get on-demand resizing/format
  conversion without a separate image CDN integration.
- Redux Toolkit + RTK Query is layered in for client-side/interactive state
  (search UI, future cart/account state) rather than replacing server data
  fetching — the two are complementary, not competing, data layers.
- Turbopack (`next dev --turbopack`) is used for local dev for faster
  iteration; production builds use the standard `next build`.

## Alternatives considered

- **Client-only SPA (Vite/CRA + React Router).** Simpler mental model (one
  rendering mode), but pushes SEO and first-paint work onto a client-side
  data-fetching layer, and would need a separate backend for MongoDB access
  since a browser can't hold DB credentials. Rejected given the content-site
  requirements.
- **Remix.** Comparable server-rendering story and nested routing, but
  smaller ecosystem/hiring pool and less mature image optimization tooling
  at the time of this decision. Not a strong enough differentiator to choose
  over Next.js's broader adoption.
- **Astro.** Excellent for content-first, mostly-static sites, but the
  roadmap's interactive surfaces (auth, planners, AI chat) push well past
  Astro's islands model into "just use a full React framework" territory —
  would likely be outgrown.
- **Separate frontend + backend (e.g. Express/Fastify API + React SPA).**
  More conventional separation of concerns and would suit a larger team, but
  is more infrastructure than a one-person, pre-launch project needs; Next.js
  collapses both into one deployable unit without losing the option to peel
  off a dedicated API later if a mobile client or partner integration needs
  one.

## Consequences

**Positive**

- Species/pest pages are server-rendered with real data on first response —
  good for SEO and perceived performance, no loading-spinner shell.
- No bespoke API layer to design, version, or secure for first-party reads;
  `notFound()` gives real 404s for invalid genus/species/variety combinations.
- `next/image` + R2 remote patterns handle responsive image delivery with
  minimal configuration.
- One deployable app scales from today's read-only content site to future
  authenticated features without a framework migration.

**Negative / risks**

- The server/client component split is a real conceptual overhead new
  contributors have to learn (AGENTS.md's Components convention exists to
  make that call explicit and consistent).
- Coupling to Next.js/Vercel-shaped conventions (file-system routing,
  `next/image`, App Router data-fetching patterns) makes a future framework
  migration expensive — accepted as a low-probability risk given the
  ecosystem's maturity and momentum.
- Server components fetching MongoDB directly means DB access patterns are
  spread across route files rather than centralized behind a single API
  boundary; `lib/db/` helpers (e.g. `plantSummaries.ts`) exist to keep query
  logic testable and out of the components themselves, but discipline is
  still required as the number of routes grows.
