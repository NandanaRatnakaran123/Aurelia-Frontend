# CLAUDE.md – Aurelia-Frontend

Frontend web application for Aurelia. <!-- TODO: one-line description of what Aurelia is and the main pages/features (e.g. public site, customer area, booking, payments). -->

## Stack
<!-- TODO: confirm. Assumed to match AM-Transport-Frontend. -->
Next.js (App Router), React, Tailwind CSS, Redux Toolkit (auth/UI/draft state), TanStack Query (server data). Deployed via GitHub Actions (target: TBD).

## Structure (src/)
- app/(public) – public pages; app/(customer) – protected account pages.
- components/ui, layout, sections – reusable UI.
- features/<name> – slices, query hooks, API calls per feature.
- store – Redux store + providers. lib – API client, query client, SEO helpers.

## Conventions
- Server data via TanStack Query; Redux only for client state. Do not duplicate.
- Public pages are server components with `generateMetadata`, sitemap, robots, JSON-LD for SEO.
- Mobile-first Tailwind. All API calls through `lib/api`.
- Env vars: see `.env.example` (NEXT_PUBLIC_ prefix for client).

## Commands
- `npm install` – install dependencies
- `npm run dev` – dev server at http://localhost:3000
- `npm run build` / `npm start` – production build and serve
- `npm run lint` – ESLint
- `npm run typecheck` – TypeScript check
- Setup: copy `.env.example` to `.env.local` and fill in values.

## Branch workflow
- `main`: stable, deployable. Merge only via pull request.
- `dev-tony`, `dev-nandana`: personal development branches. Work and commit here, then open a PR into `main`.
- Never commit `.env` files; update `.env.example` when adding variables.

## Ticket workflow (project management tool: Sync-N-Track, project "Aurelia")
Work is tracked as tickets in Sync-N-Track, so the team can update the board in step with the work. Every ticket announcement must state **three things: ticket name, module, and sprint/cycle**. If any of them is unknown, ask before starting.
- **Before starting any ticket**, announce it in the chat in this format:
  `STARTED: <ticket name> | Module: <module> | Sprint/Cycle: <cycle name>` plus one line on what will be done.
- Work on **one ticket at a time**. Do not mix in work from other tickets.
- **When the ticket is finished** (built, tested, committed and pushed to the developer's own dev branch), announce:
  `DONE: <ticket name> | Module: <module> | Sprint/Cycle: <cycle name>. Moving to next ticket: <next ticket name> (Module: <module>, Sprint/Cycle: <cycle name>)`
  with a short summary of what changed and anything left open.
- If a ticket is blocked, say so clearly (`BLOCKED: <ticket name> | Module | Sprint/Cycle, reason`) instead of silently moving on.
- Commit messages should reference the ticket id or name when one exists.
