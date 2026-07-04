# ADR 0002: Host plant images in Cloudflare R2

- **Status:** Accepted
- **Date:** 2026-07-04
- **Deciders:** Matthew Dunn

## Context

Plant photography was served from the repo (`public/images/`), which meant
every new species photo required a commit and deploy, bloated the repository
with binaries, and could not scale to a glossary of hundreds of species — let
alone roadmap features that involve user-uploaded images (visual plant/symptom
identification via the Anys AI botanist).

The `plants` documents in MongoDB (see ADR 0001) already store an
`images[].url` string per photo, so the data model was ready for externally
hosted assets; only the hosting and URL-resolution strategy needed deciding.

## Decision

Host image assets in a **Cloudflare R2** bucket (`green-guide-images`),
served publicly through the custom domain **`images.greenguideapp.com`**
(the `greenguideapp.com` zone is registered with Cloudflare).

Key implementation choices:

- **Object keys mirror routes:** `plants/<genus>/<species>/img-<n>.jpeg`,
  matching the lowercase `genus + species` natural key used by both the
  MongoDB collection and the `/[genus]/[species]` routes.
- **MongoDB stores object keys, not full URLs.** `images[].url` holds
  `plants/monstera/deliciosa/img-1.jpeg`; the client resolves it against
  `NEXT_PUBLIC_IMAGE_BASE_URL` via `app/lib/imageUrl.ts`. Swapping buckets,
  domains, or CDNs is an env-var change, never a data migration. The helper
  passes absolute URLs and `/public` paths through untouched, so mixed
  sources keep working.
- **Public access via custom domain only.** The bucket's r2.dev development
  URL stays disabled; the custom domain routes through Cloudflare's cache and
  is the single public hostname. `next.config.ts` allowlists it under
  `images.remotePatterns` so `next/image` optimization keeps working.
- `NEXT_PUBLIC_IMAGE_BASE_URL` lives in `.env.local` (template in
  `.env.example`). It is inlined into the client bundle at build time — a
  change requires a rebuild/dev-server restart, which is acceptable because
  the value changes essentially never.

## Alternatives considered

- **Keep images in `public/` (status quo).** Zero infrastructure, but couples
  content growth to deploys and repo size, and offers no path to
  user-uploaded images. Rejected as a dead end, mirroring the reasoning that
  moved species text content to MongoDB.
- **Store full URLs in MongoDB.** Simpler rendering (no helper), but bakes
  the hostname into every document, turning any future host/domain change
  into a bulk data migration. Rejected.
- **AWS S3 + CloudFront.** Functionally equivalent, but R2 has zero egress
  fees, and the domain is already on Cloudflare — the custom-domain + CDN
  setup is one dashboard step with no extra distribution to manage.
- **Vercel Blob / image hosting via the deploy platform.** Convenient but
  ties assets to the hosting vendor; R2 keeps them portable.

## Consequences

**Positive**

- New species photos are a bucket upload plus a seed entry — no deploy, no
  repo growth; requests are cached at Cloudflare's edge with zero egress cost.
- The key convention keeps bucket layout, database identity, and routing
  aligned, and gives the future upload pipeline an obvious destination.

**Negative / risks**

- The whole bucket is publicly readable through the custom domain — nothing
  private may ever land in `green-guide-images`; user uploads will need a
  separate bucket or access model.
- Images no longer live in git: the bucket is now content infrastructure that
  needs its own backup/versioning story, and local dev depends on network
  access to `images.greenguideapp.com`.
- Seed data and bucket contents can drift (a seeded key with no uploaded
  object 404s silently) — there is no automated check yet.
- `next/image` optimization runs on the app host (with its own fetch/transform
  costs) even though the origin bytes are free to serve; revisit Cloudflare
  Images/Polish if that ever matters.
