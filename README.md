# Green Guide

## Overview
Green Guide is a web app designed to answer every question a doting plant parent might ask. Whether you’re a complete novice or a seasoned horticulturist, Green Guide offers highly detailed information on a wide range of plant species. The app provides a simple, intuitive user interface to a vast encyclopedia of plant knowledge.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the project dependencies:
```bash
npm i
```

### Set up MongoDB

Species profile data is served from MongoDB, so you'll need a database user and a local env file before running the app:

1. Create a MongoDB deployment (e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster).
2. Create a database user with read/write access (in Atlas: **Security > Database Access > Add New Database User**). Note the username and password.
3. Copy the env template and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```
4. In `.env.local`, set `MONGODB_URI` to your connection string (in Atlas: **Database > Connect > Drivers > Node.js**), substituting your database user's username and password. Keep the database name (`green-guide`) in the URI path — collections are created under it.

`.env.local` holds real credentials and is git-ignored — never commit it.

### Run the dev server

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Under construction: http://localhost:3000/monstera/deliciosa

### Sourcing plant images

Species photos are stored in a Cloudflare R2 bucket (see `AGENTS.md`'s Image Assets section for the object-key convention) and referenced by key from each seed module in `scripts/seed/`. Two scripts in `scripts/tools/` automate finding and uploading candidates:

**1. Find candidates** — searches Wikimedia Commons for a species, keeping only results that are at least 500x500px and under a permissive license (public domain, CC0, CC BY, or CC BY-SA):

```bash
npm run images:find -- <genus> <species> [--query "search terms"] [--limit 20] [--variety slug]
```

This downloads full-resolution originals into `scripts/tools/image-review/<genus>-<species>[-<variety>]/` (git-ignored — nothing here is committed) along with a `manifest.json` recording each candidate's license, artist/credit, and source URL. Review the images in that folder — or ask Claude Code to do the visual quality pass and shortlist a few — and note the index numbers (`[1]`, `[2]`, …) of the ones you want.

Use `--query` for cultivars/varieties that don't search well under the scientific name alone (e.g. a specific cultivar name), and `--variety` to keep the review folder consistent with the seed module's `variety` slug.

**2. Upload the picks** — uploads chosen candidates to R2 and writes them straight into that species' seed module:

```bash
npm run images:upload -- <genus> <species> <candidateIndex...> [--variety slug] [--start N]
```

For example, `npm run images:upload -- begonia rex 3 4 6` uploads candidates 3, 4, and 6 from that species' `manifest.json` as `plants/begonia/rex/img-1.jpg`, `img-2.jpg`, `img-3.jpg`, then appends those keys to the `images` array in `scripts/seed/begonia-rex.ts` and runs Prettier on it. Numbering picks up automatically after whatever images already exist in that array (pass `--start` to override). It requires the seed module to already exist — create it first if you haven't (see AGENTS.md's "Adding a plant cultivar/variety" section for the cultivar case).

The new entries land with an empty `alt: ''` — fill in a real description for each before committing. The script also prints an attribution block (license, artist, source URL) to keep on record, since most Commons images are CC BY or CC BY-SA and require credit.

Uploading requires an R2 API token: in the Cloudflare dashboard, go to **R2 > Manage API Tokens > Create API Token**, scope it to **Object Read & Write** on the `green-guide-images` bucket only (not an account-wide admin token), and set the resulting values in `.env.local`:

```
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=green-guide-images
```


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
npm
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Functional Requirements
The functional requirements for the project define the **features** and **capabilities** provided to users of the site.
- Search plants by name
- Browse a glossary of plants by name, image, category
- Create an account
  - Manage notification preferences, username, email, password, profile picture
  - Saved/Favorites section for plants that a user continually wants to look up.
  - Create Lists (public or private) e.g. "Easiest Houseplants for Beginners"
  - History of products that the user has ordered / wants to reorder.
    - Shopping cart
- Generative AI
  - AI bot named Anys ("bot-anys" as in "botanist" lol)
  - Trained on our (eventaul) enormous database of plant knowledge
  - Able to recognize images uloaded of plants, identify visual symptoms of ailments (if any)
  - Provide links to references within the site
  - Able to recommend products to the user, based on what they want to do.
    - e.g. in response to, "How do I get rid of thrips?", Anys may recommend systemic pesticides along with detailed instructions on how to apply them.
- Interface for mocking up landscaping arrangements
  - Add dimensions of land, outline of home, retaining walls, and plantable areas
  - Location (for zone, daylight hours, etc)
  - Amount of sunlight in each section of the landscape, throughout the day
  - Recommend plants that are suitable for the location and sunlight
  - Recommend products to make caring for the plants simple
    - Soil or ground cover
    - Products for automating irrigation
- Indoor plant layout planner
  - Mock up indoor spaces with windows, cardinal orientation (N/S/E/W), and location.
  - Note any obstructions to sunlight outside the windows
  - Get houseplant placement recommendations based on light needs.


## Non-functional Requirements
The non-functional requirements define the **details** and **constraints** under which the various aspects of the site are provided.
- Accessibility
  - Users may access the site without any account or authentication. We want users to be able easily come through the site without headaches.
  - Quick page loads, fast response time on queries.
  - No obnoxious ads being forced in your face at every turn. If we offer sponsored products, we should present them in a way that feels like an intelligent/personal recommendation, so it's more likely to be appreciated versus cursed (e.g. in information text blocks, adding hyperlinks within explanations of fertilizer that link to certain products).
- Security
  - TLS protocol for client/server connection.
  - Password Salting for storing user account credentials.
  - Compliance with GDPR standards
  - Cookie policy & settings dialogue for analytics, performance, marketing

## Monetization
The site will require a certain amount of funding to be made accessible to a remotely sizeable user base. We should define ways in which funding can be acquired here:
  - Sponsors products contextually recommended to users.
  - Subscription model that offers perks like members-only product deals, free shipping, etc.
