@AGENTS.md

# Green Guide — Cross-Tool Context

This file is the shared entry point for every Claude surface working in this repo (Claude Code, Cowork, Claude Design). It imports `AGENTS.md` above for engineering conventions, tech stack, and file structure — keep that file as the single source of truth for those details so Code and Cowork never drift out of sync. This file adds product/business context that AGENTS.md doesn't cover, plus notes on how the tools hand off to each other.

## Product vision

Green Guide is a web-native plant encyclopedia for plant parents of every experience level — from first-time succulent owners to seasoned horticulturists. The core promise: whatever question someone has about keeping a plant alive, the answer is here, presented clearly and without friction.

Current state: marketing landing page + one live species profile (`monstera/deliciosa`). Everything else below is roadmap, not shipped — check `app/` before assuming a feature exists.

## Planned features (from README functional requirements)

- Search and browse a plant glossary (by name, image, category)
- Accounts: saved/favorites, public/private lists (e.g. "Easiest Houseplants for Beginners"), order history, shopping cart
- "Anys" — a generative AI botanist that answers care questions, identifies plants/symptoms from uploaded images, and recommends products (e.g. systemic pesticides for thrips) with links back into the site
- Outdoor landscaping planner — land dimensions, structures, sunlight-by-section, plant/product recommendations
- Indoor layout planner — room dimensions, window orientation, light obstructions, houseplant placement recommendations

## Non-functional priorities

- No account required to browse; fast page loads
- Sponsored/monetized content must read as a genuine recommendation embedded in context (e.g. a fertilizer explainer linking to a product), never an interruptive ad
- TLS, password salting, GDPR compliance, cookie consent for analytics/performance/marketing

## Monetization

Sponsored product placement (contextual, non-intrusive) + subscription tier (member deals, free shipping, etc.).

## Working across Claude tools

- **Claude Code (terminal / VS Code):** Reads this file automatically at session start, which pulls in `AGENTS.md` via the import above. No extra setup needed.
- **Cowork:** This file serves as the project's folder instructions. Cowork also keeps its own project memory (goals, recent decisions, open threads) separate from this file — treat memory as session-to-session working notes, and keep durable facts (stack choices, conventions, roadmap) here or in `AGENTS.md` instead, since memory doesn't travel to Claude Code.
- **Claude Design:** Not wired into this repo automatically. When a design is ready to hand off, use `/design-sync` from Claude Code to pull the existing design system (see AGENTS.md's Styling section — emerald/stone/zinc tokens, large rounded corners, Tailwind v4) into Claude Design, or send a finished Claude Design project to Claude Code to implement against this codebase.
- **Keeping things in sync:** If you change a convention, add a route, or ship a roadmap item in one tool, update `AGENTS.md` (engineering detail) or this file (product/business detail) in the same session so the next tool picks it up automatically.
