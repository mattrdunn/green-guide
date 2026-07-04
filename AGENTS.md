# Green Guide — Agent Context

## Project Overview

Green Guide is a plant care companion web app. It provides species profiles with care details, vitals, and guided checklists. Currently a marketing landing page + a single live Monstera deliciosa profile; more species and features (AI botanist, collaborative lists, waitlist) are on the roadmap.

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
      page.tsx              # Server component — validates genus/species, renders SpeciesClient
      components/
        SpeciesClient.tsx   # Tab shell (overview / care / issues / getStarted)
        HeaderCard.tsx      # Hero card with images and top-level stats
        Overview.tsx        # Vitals grid, daily rhythm, accordion details
        Care.tsx            # Seasonal care timeline
        Issues.tsx          # Pest and symptom troubleshooting
        AccordionItem.tsx   # Reusable expandable row
        ImageCarousel.tsx   # Photo gallery
    page.tsx                # Genus-level page (placeholder)
  components/
    GreenCard.tsx           # Shared gradient card wrapper
    Nav.tsx                 # Top navigation bar
  lang/
    en.json                 # All UI strings (i18next source of truth)
  lib/
    cn.ts                   # clsx + tailwind-merge helper
    i18n.ts                 # i18next initialisation (guards against double-init)
  providers/
    index.tsx               # Redux Provider wrapper
  globals.css               # Tailwind import, CSS variables, dark-mode tokens
  layout.tsx                # Root layout — fonts, Nav, Providers
  page.tsx                  # Marketing home page
store/
  index.ts                  # Redux store (RTK Query middleware wired)
  api/
    templateApi.ts          # RTK Query API slice (template / starting point)
lib/
  db/
    connect.ts              # Mongoose connection singleton (server-only; hot-reload + serverless safe)
    models/
      Plant.ts              # Plant schema/model + exported TS interfaces
scripts/
  seed-plants.ts            # Upserts every species in scripts/seed/ (`npm run db:seed`)
  seed/
    *.ts                    # One seed-data module per species (genus-species.ts)
public/
  icons/                    # SVG icons used in species vitals
  images/                   # Plant photography
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
- One `plants` document per species; unique compound index on `genus + species` (both stored lowercase, matching route params)

### State Management
- RTK Query for server data; add new API slices in `store/api/`
- Local UI state (tabs, modals) stays in component-level `useState`
- Import `RootState` / `AppDispatch` types from `store/index.ts`

## Routing

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Marketing landing page |
| `/[genus]` | `app/[genus]/page.tsx` | Genus overview (stub) |
| `/[genus]/[species]` | `app/[genus]/[species]/page.tsx` | Species profile; validated against the `plants` collection — species missing from MongoDB return `notFound()` |

## Common Patterns

### Adding a new species tab
1. Add the key to the `tabs` const in `SpeciesClient.tsx`
2. Add the display string to `app/lang/en.json` under `speciesClient.tabs`
3. Create the tab component in `app/[genus]/[species]/components/`
4. Add the conditional render block in `SpeciesClient.tsx`

### Adding i18n strings
1. Add the key/value to `app/lang/en.json`
2. Reference via `useTranslation` with the appropriate `keyPrefix`

### Adding an RTK Query endpoint
1. Add the endpoint in `store/api/templateApi.ts` (or a new slice)
2. Register any new slice reducer/middleware in `store/index.ts`

## Conventional Commits
Use (Conventional Commits)[https://www.conventionalcommits.org/en/v1.0.0/] when formatting commit messages.