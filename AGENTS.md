# Green Guide — Agent Context

## Project Overview

Green Guide is a plant care companion web app. It provides species profiles with care details, vitals, and guided checklists. Currently a home page (hero search, category browsing, and a plant grid backed by the `plants` collection) + live species profiles for every seeded species + a Pests hub/detail library (`pests` collection) cross-linked from each species' Issues tab; more features (AI botanist, collaborative lists, waitlist) are on the roadmap.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS v4 (PostCSS) |
| State | Redux Toolkit + RTK Query |
| i18n | i18next + react-i18next |
| Animation | Framer Motion |
| Utilities | clsx, tailwind-merge (via `app/lib/cn.ts`) |

## Directory Structure

```
app/
  [genus]/
    [species]/
      page.tsx              # Server component — validates genus/species (variety-less doc), renders SpeciesClient
      [variety]/
        page.tsx            # Cultivar variant of the species profile — validates genus/species/variety, renders SpeciesClient
      components/
        SpeciesClient.tsx   # Tab shell (overview / care / issues / getStarted)
        HeaderCard.tsx      # Hero card with images and top-level stats
        Overview.tsx        # Vitals grid, care cadence checklist, daily rhythm, accordion details
        Care.tsx            # Seasonal care timeline
        Issues.tsx          # Pest and symptom troubleshooting
        AccordionItem.tsx   # Reusable expandable row
        ImageCarousel.tsx   # Photo gallery
    page.tsx                # Genus-level page (placeholder)
  pests/
    page.tsx                # Pests hub — server component, fetches pest summaries, renders PestsClient
    types.ts                # PestSummaryData — serializable server→client projection
    [slug]/
      page.tsx              # Pest detail — validates slug against the `pests` collection, notFound() if missing
    components/
      PestsClient.tsx       # Hub shell — search + category chip filtering over fetched pests
      PestCard.tsx          # Pest summary card (category badge, severity meter)
      PestDetail.tsx        # Full pest page (identification, life cycle, treatment, prevention, affected species)
  components/
    GreenCard.tsx           # Shared gradient card wrapper
    VitalMeter.tsx          # Segment/dot meter for 1-5 vitals/severity scores
    Nav.tsx                 # Mobile-only top navigation bar (`sm:hidden`) — search, theme toggle, hamburger
    SideNav.tsx             # Desktop left sidebar (`sm:` and up) — thin wrapper around SideNavContent
    SideNavContent.tsx      # Shared sidebar content (brand, search, Home/Pests nav, appearance) — used by both SideNav and the mobile drawer
    MobileSideNavDrawer.tsx # Mobile slide-out drawer (framer-motion) opened from Nav's hamburger button
    SearchResults.tsx       # Shared matches list/empty-state used by Nav's overlay and the sidebar's dropdown
    SearchOverlay.tsx       # Mobile quick-search dropdown, opened from Nav
    home/
      HomeClient.tsx        # Home page shell — hero search, category cards, filterable plant grid
      PlantCard.tsx         # Plant summary card (image/placeholder + light/care stats)
      categories.ts         # Browse categories derived from plant tags
      types.ts              # PlantCardData — serializable server→client projection
  lang/
    en.json                 # All UI strings (i18next source of truth)
  lib/
    cn.ts                   # clsx + tailwind-merge helper
    i18n.ts                 # i18next initialisation (guards against double-init)
    useThemeMode.ts         # Shared light/dark toggle logic (localStorage + html.dark/light classes)
  providers/
    index.tsx               # Redux Provider wrapper
  globals.css               # Tailwind import, CSS variables, dark-mode tokens
  layout.tsx                # Root layout — fonts, Nav + SideNav, Providers
  page.tsx                  # Home page (server component — fetches plant summaries from MongoDB)
store/
  index.ts                  # Redux store (RTK Query middleware wired)
  api/
    templateApi.ts          # RTK Query API slice (template / starting point)
lib/
  db/
    connect.ts              # Mongoose connection singleton (server-only; hot-reload + serverless safe)
    pests.ts                # Pest summary/detail fetch + mapping helpers, mirrors plantSummaries.ts
    models/
      Plant.ts              # Plant schema/model + exported TS interfaces
      Pest.ts               # Pest schema/model + exported TS interfaces
scripts/
  seed-plants.ts            # Upserts every species in scripts/seed/ (`npm run db:seed`)
  seed-pests.ts             # Upserts the shared pest library, deriving `affects[]` from Plant pestSlug refs (`npm run db:seed:pests`)
  seed/
    *.ts                    # One seed-data module per species (genus-species.ts)
    pests/
      *.ts                  # One seed-data module per shared pest (pest-slug.ts)
public/
  icons/                    # SVG icons used in species vitals
  images/                   # (empty) plant photography moved to Cloudflare R2 — see Image Assets
docs/
  adr/                      # Architecture Decision Records (numbered, e.g. 0001-use-mongodb-for-plant-data.md)
```

## Code Conventions

### Formatting (.prettierrc)
- 4-space indentation, no tabs
- Single quotes
- Semicolons required
- `prettier-plugin-tailwindcss` sorts Tailwind classes automatically — do not reorder them manually

### TypeScript
- Strict mode via `tsconfig.json`
- Prefer `as const` for union-typed arrays (see `tabs` in `SpeciesClient.tsx`)
- Path alias `@/` maps to the repo root

### Components
- `'use client'` only when the component uses hooks, event handlers, or browser APIs
- Server components are the default in the App Router — keep them server-side when possible
- Shared cross-page components live in `app/components/`; page-scoped components live alongside their page

### Styling
- Tailwind v4 via `@import 'tailwindcss'` in `globals.css` — no `tailwind.config.js` needed
- Dark mode is class-based: `html.dark` / `html.light`; the custom variant is `@custom-variant dark (&:is(.dark *))`
- Use `cn()` (`app/lib/cn.ts`) whenever class names are conditional
- Design tokens: `emerald-*` for brand green, `stone-*` for neutral text/borders, `zinc-*` for dark backgrounds
- Rounded corners are large (`rounded-3xl`, `rounded-[28px]`, `rounded-[32px]`) — keep this aesthetic consistent

### i18n
- All user-visible strings belong in `app/lang/en.json`
- Access via `useTranslation('translation', { keyPrefix: '...' })`
- `returnObjects: true` for array values (e.g. checklist items)
- Add new locale files alongside `en.json` when adding languages

### Data Layer (MongoDB)
- Mongoose models live in `lib/db/models/`; call `connectToDatabase()` from `lib/db/connect.ts` before any query
- Server-side only (server components, route handlers) — never import from client components
- `MONGODB_URI` comes from `.env.local` (template in `.env.example`); database name is part of the URI path
- Atlas network access is `0.0.0.0/0`, so DB credentials are the only line of defense — use a least-privilege DB user and never commit `.env.local` (see `docs/adr/0001-use-mongodb-for-plant-data.md`)
- One `plants` document per species/variety; unique compound index on `genus + species + variety` (all stored lowercase, matching route params). `variety` is optional and omitted entirely on the canonical/no-variety document — use it for cultivars whose care is materially identical to the parent species (e.g. Neon Pothos vs. Golden Pothos under `epipremnum`/`aureum`) so their content lives in its own document and gets its own standalone page rather than being crammed into `commonNames`. A cultivar whose care meaningfully diverges, or that is botanically a different species (e.g. Cebu Blue is `Epipremnum pinnatum`), gets its own top-level `genus`/`species` instead of a `variety`.
- Querying the base species doc always filters `variety: null` (matches both a missing field and an explicit `null`) so it never accidentally resolves to a cultivar when several documents share a `genus + species` pair
- One `pests` document per shared pest entry (`lib/db/models/Pest.ts`), unique index on `slug`; a `Plant`'s `issues.pests[]` entries carry an optional `pestSlug` back-reference — only pests common enough to be worth a shared page get one, the rest stay plain species-specific text (see `Issues.tsx`)
- `Pest.affects[]` (which species show up under "Commonly affects") is computed at seed time from `Plant.issues.pests[].pestSlug`, not hand-maintained — re-run `npm run db:seed` before `npm run db:seed:pests` after adding/changing `pestSlug` references

### Image Assets (Cloudflare R2)
- Plant photography lives in the `green-guide-images` R2 bucket, served publicly via `https://images.greenguideapp.com` (custom domain; the r2.dev URL stays disabled) — see `docs/adr/0002-host-plant-images-in-cloudflare-r2.md`
- Object keys mirror routes: `plants/<genus>/<species>/img-<n>.jpeg` or `.png` (lowercase, matching the `plants` collection natural key); the extension is part of the stored key, so nothing in code assumes one format
- Pest photos (`issues.pests[].image`, optional) follow the same convention under a `pests/` subpath: `plants/<genus>/<species>/pests/<pest-slug>.jpeg`; the Issues tab renders a placeholder icon when the field is omitted
- MongoDB stores the object key in `images[].url`, never a full URL; resolve keys with `imageUrl()` from `app/lib/imageUrl.ts` at render time
- The base URL comes from `NEXT_PUBLIC_IMAGE_BASE_URL` (`.env.local`, template in `.env.example`); it is inlined at build time, so restart the dev server after changing it
- The host must be allowlisted in `images.remotePatterns` in `next.config.ts` for `next/image` to accept it
- The bucket is fully public through the custom domain — never store private assets in it
- Adding a species photo: upload to the bucket under the key convention, add the key to the species module in `scripts/seed/`, re-run `npm run db:seed`

### State Management
- RTK Query for server data; add new API slices in `store/api/`
- Local UI state (tabs, modals) stays in component-level `useState`
- Import `RootState` / `AppDispatch` types from `store/index.ts`

### Testing (Vitest)
- `npm test` runs the suite once; `npm run test:watch` for watch mode; config in `vitest.config.ts` (node environment, `@/` alias resolved from `tsconfig.json`)
- Tests are colocated as `*.test.ts` next to the module under test
- Scope: pure logic only (search matching, category predicates, URL/key resolution, DB projections) — no component/jsdom or DB integration tests yet
- Keep DB code testable by separating the query from the mapping (see `toPlantSummaries` vs `fetchPlantSummaries` in `lib/db/plantSummaries.ts`) so the mapping is testable without a connection

## Routing

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home page — hero search + category browse + plant grid from the `plants` collection (client-side filtering; renders a fallback if the DB is unreachable) |
| `/[genus]` | `app/[genus]/page.tsx` | Genus overview (stub) |
| `/[genus]/[species]` | `app/[genus]/[species]/page.tsx` | Species profile; validated against the `plants` collection's variety-less document — species missing from MongoDB return `notFound()` |
| `/[genus]/[species]/[variety]` | `app/[genus]/[species]/[variety]/page.tsx` | Cultivar profile sharing the parent species' page shell; validated against the matching `genus + species + variety` document — missing combinations return `notFound()` |
| `/pests` | `app/pests/page.tsx` | Pests hub — search + category filtering over the `pests` collection (client-side filtering, same pattern as Home) |
| `/pests/[slug]` | `app/pests/[slug]/page.tsx` | Pest detail; validated against the `pests` collection — slugs missing from MongoDB return `notFound()` |

## Common Patterns

### Adding a new species tab
1. Add the key to the `tabs` const in `SpeciesClient.tsx`
2. Add the display string to `app/lang/en.json` under `speciesClient.tabs`
3. Create the tab component in `app/[genus]/[species]/components/`
4. Add the conditional render block in `SpeciesClient.tsx`

### Adding a plant cultivar/variety
1. Create the seed module in `scripts/seed/` with the same `genus`/`species` as the parent plus a `variety` slug (e.g. `epipremnum-aureum-neon.ts` → `variety: 'neon'`), overriding only what genuinely differs (`commonNames`, `images`, `highlights`, and any diverging `vitals`/care copy)
2. Register the export in the `plants` array in `scripts/seed-plants.ts`
3. Upload variety photos to R2 under `plants/<genus>/<species>/<variety>/img-<n>.<ext>` (mirrors the route, per the Image Assets convention)
4. Re-run `npm run db:seed` — it becomes reachable at `/<genus>/<species>/<variety>` automatically

### Adding i18n strings
1. Add the key/value to `app/lang/en.json`
2. Reference via `useTranslation` with the appropriate `keyPrefix`

### Adding an RTK Query endpoint
1. Add the endpoint in `store/api/templateApi.ts` (or a new slice)
2. Register any new slice reducer/middleware in `store/index.ts`

## Conventional Commits
Use (Conventional Commits)[https://www.conventionalcommits.org/en/v1.0.0/] when formatting commit messages.