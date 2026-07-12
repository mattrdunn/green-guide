# Green Guide

A plant care encyclopedia — species-level guidance on light, water, and soil needs, built from research and real plant-parent experience.

**Live:** [greenguideapp.com](https://www.greenguideapp.com/) · **Stack:** Next.js, TypeScript, MongoDB, Cloudflare R2

---

## Architecture & Key Decisions

Full rationale lives in [`docs/adr`](./docs/adr). Highlights:

- **Next.js App Router** — [ADR-0003](./docs/adr/0003-nextjs-app-router.md): server components query MongoDB directly and render species/pest pages with real data on first response (SEO + fast first paint, no client-side loading shell), file-system routing maps cleanly onto the `/[genus]/[species]/[variety]` hierarchy, and `next/image` handles resizing/format negotiation against the R2-hosted photos — all in one deployable app rather than a separate API + SPA.
- **MongoDB for species data** — [ADR-0001](./docs/adr/0001-use-mongodb-for-plant-data.md): a species profile (vitals, care routines, seasonal watering, issue guides) is one self-contained, deeply-nested aggregate that's always read as a whole, with a schema still evolving per-species — a relational model would either fragment it across a dozen tables or collapse into `jsonb` and forfeit most relational benefits anyway. Reads vastly outnumber writes, so a single indexed `findOne` per page render mattered more than join support.
- **Cloudflare R2 for image storage** — [ADR-0002](./docs/adr/0002-host-plant-images-in-cloudflare-r2.md): zero egress fees vs. S3 (functionally equivalent otherwise), served through a custom domain already on Cloudflare's DNS and optimized at the edge via `next/image`. MongoDB stores object keys, not full URLs, so swapping buckets/domains later is an env-var change, not a data migration.
- **Sourced-image pipeline over stock/generated images** — species photos are pulled from Wikimedia Commons under a license filter (public domain, CC0, CC BY, CC BY-SA only), not scraped indiscriminately or AI-generated. Every image ships with a recorded license, artist credit, and source URL for attribution compliance.

## What's Built

- Search plants by name
- Browse by category (Indoor, Succulents & Cacti, Patio, Garden & Landscape)
- 75 species indexed with light and care-difficulty metadata
- Automated image sourcing pipeline: license-filtered Wikimedia Commons search → manual visual review → upload to R2 → seed module update, with attribution tracked at every step

Planned features and longer-term direction are tracked separately in [`docs/ROADMAP.md`](./docs/ROADMAP.md).

## Getting Started

Install dependencies:

```bash
npm i
```

### Set up MongoDB

Species profile data is served from MongoDB, so you'll need a database user and a local env file before running the app:

1. [DONE] Create a MongoDB deployment (e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster).
2. Create a database user with read/write access (Atlas: **Security > Database Access > Add New Database User**).
3. Copy the env template and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```
4. In `.env.local`, set `MONGODB_URI` to your connection string (Atlas: **Database > Connect > Drivers > Node.js**), substituting your database user's username and password. Keep the database name (`green-guide`) in the URI path — collections are created under it.

`.env.local` holds real credentials and is git-ignored — never commit it.

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Run tests

```bash
npm run test
```

Coverage is deliberately narrow right now: pure logic only — search matching, category predicates, R2 URL/key resolution, and DB query→projection mapping (e.g. `toPlantSummaries`) — colocated as `*.test.ts` next to the module under test. No component/jsdom rendering tests or live-DB integration tests yet.

## Sourcing Plant Images

Species photos are stored in a Cloudflare R2 bucket (see `AGENTS.md`'s Image Assets section for the object-key convention) and referenced by key from each seed module in `scripts/seed/`. Two scripts in `scripts/tools/` automate finding and uploading candidates:

**1. Find candidates** — searches Wikimedia Commons for a species, keeping only results at least 500×500px and under a permissive license (public domain, CC0, CC BY, or CC BY-SA):

```bash
npm run images:find -- <genus> <species> [--query "search terms"] [--limit 20] [--variety slug]
```

Downloads full-resolution originals into `scripts/tools/image-review/<genus>-<species>[-<variety>]/` (git-ignored) along with a `manifest.json` recording each candidate's license, artist/credit, and source URL. Review the images — or delegate the visual quality pass — and note the index numbers of the ones you want.

**2. Upload the picks** — uploads chosen candidates to R2 and writes them into that species' seed module:

```bash
npm run images:upload -- <genus> <species> <candidateIndex...> [--variety slug] [--start N]
```

Example: `npm run images:upload -- begonia rex 3 4 6` uploads candidates 3, 4, and 6 as `plants/begonia/rex/img-1.jpg`, `img-2.jpg`, `img-3.jpg`, then appends those keys to `images` in `scripts/seed/begonia-rex.ts`. New entries land with an empty `alt: ''` — fill in a real description before committing. The script prints an attribution block (license, artist, source URL) to keep on record, since most Commons images require credit.

Uploading requires an R2 API token scoped to **Object Read & Write** on the `green-guide-images` bucket only (Cloudflare dashboard: **R2 > Manage API Tokens > Create API Token**):

```bash
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=green-guide-images
```

## Tech Notes

Built with [Next.js](https://nextjs.org) (App Router) and [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for font optimization.