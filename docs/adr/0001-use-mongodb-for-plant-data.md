# ADR 0001: Use MongoDB for plant species data

- **Status:** Accepted
- **Date:** 2026-07-03
- **Deciders:** Matthew Dunn

## Context

Green Guide serves species profiles (vitals, overview, care routines, issue
troubleshooting) that were previously hard-coded into the React components for
the single live profile (`monstera/deliciosa`). To grow into a plant
encyclopedia, species content has to move out of the codebase and into a data
store that the Next.js App Router can query per request.

The shape of that content drove the decision:

- A species profile is one self-contained, deeply nested aggregate — vitals,
  overview details, care pillars, seasonal watering, routines, pest guides,
  checklists — that is always read as a whole to render one page. There are no
  cross-entity joins today.
- The schema is still evolving. New sections (e.g. propagation, product
  recommendations) will be added per-species as the product grows, and not
  every species will have every section.
- Roadmap features (glossary filtering, the "Anys" AI botanist, landscaping
  recommendations) need structured numeric fields (hardiness zone range,
  temperature range, humidity minimum) alongside display prose, but they query
  the same documents — they don't demand relational modeling yet.
- Reads vastly outnumber writes: content is seeded/edited occasionally and
  served to every visitor. No account required to browse and fast page loads
  are non-functional priorities.
- The app deploys to serverless-style environments, so the data layer must
  tolerate many short-lived instances rather than a long-lived connection pool.

## Decision

Use **MongoDB (Atlas)** as the system of record for species content, accessed
via **Mongoose** from server-side code only.

Key implementation choices:

- One document per species in a `plants` collection, with a unique compound
  index on `genus + species` (both stored lowercase, mirroring the
  `/[genus]/[species]` route params) so a profile page is a single indexed
  `findOne`.
- Mongoose schemas in `lib/db/models/Plant.ts` provide validation and exported
  TypeScript interfaces, recovering some of the type safety a schemaless store
  gives up. Display strings carry numeric companions (`zoneMin`, `minF`,
  `minPct`, …) so future features can query ranges without parsing prose.
- A cached connection singleton (`lib/db/connect.ts`) reuses the connection
  across dev hot reloads and warm serverless invocations, with
  `bufferCommands: false` so queries fail fast when disconnected.
- Content enters the database through seed scripts (`npm run db:seed`, one
  module per species in `scripts/seed/`) that upsert by `genus + species`,
  keeping seeding idempotent.
- Connection details live in `MONGODB_URI` (`.env.local`, template in
  `.env.example`); the database name is part of the URI path.
- Atlas network access is configured as `0.0.0.0/0` (allow from anywhere),
  because serverless deployments don't offer stable egress IPs to allowlist.
  Authentication therefore rests entirely on the database credentials in the
  connection string (over TLS, which Atlas enforces).

## Alternatives considered

- **Keep content in the repo (JSON/MDX per species).** Simplest option and
  version-controlled, but every content change requires a deploy, and roadmap
  features (search, filters, user-generated lists, Anys lookups) need a
  queryable store anyway. Rejected as a dead end we'd migrate off shortly.
- **PostgreSQL (relational).** Strong integrity guarantees and better suited
  to the eventual commerce features (accounts, orders, carts). But a species
  profile would fragment into a dozen tables (or collapse into `jsonb`,
  forfeiting most relational benefits) for data that is always read as one
  aggregate. Nothing prevents adding Postgres later for genuinely relational
  domains; this ADR covers species content only.
- **Headless CMS (e.g. Sanity, Contentful).** Would give editors a UI, but
  adds a vendor dependency and per-seat cost before there is an editorial
  team, and the structured numeric fields would still need custom modeling.
  Revisit if non-developers start authoring species content.

## Consequences

**Positive**

- A species page render is one indexed document read — aligned with the
  fast-page-load priority and cheap on a serverless free/shared tier.
- Adding or reshaping profile sections is a schema edit plus reseed, with no
  migration machinery while the product is pre-launch.
- Atlas provides managed hosting, backups, and TLS out of the box.

**Negative / risks**

- With network access open to `0.0.0.0/0`, database credentials are the single
  line of defense. This raises the stakes on credential hygiene: a strong
  unique password, a least-privilege DB user (read/write on `green-guide`
  only, no admin roles), rotation if a secret ever leaks, and never committing
  `.env.local`. Revisit tighter network controls (Atlas-supported VPC peering,
  private endpoints, or a proxy with a stable egress IP) before handling user
  accounts or payment data.
- Schema discipline lives in application code (Mongoose + TS interfaces), not
  the database; documents written outside the app (e.g. ad-hoc edits in Atlas)
  can drift from the schema silently.
- Cross-document features (comparisons, "plants like this") will need
  aggregation pipelines or denormalization rather than joins.
- Future transactional domains (orders, carts, subscriptions) may justify a
  relational store, leaving the app polyglot; that trade-off is deferred, not
  eliminated.
- Mongoose model registration and connection caching add Next.js-specific
  footguns (hot-reload double registration, connection reuse) that
  `lib/db/connect.ts` and the `models` lookup pattern must guard against.
