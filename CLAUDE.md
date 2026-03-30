# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** Next.js (App Router) + React 19 + TypeScript + Tailwind CSS v4

This is a Turkish-language marketing/booking site for **Çınar Kurban**, an Istanbul-based Islamic sacrifice (kurban) service. All UI text and routes are in Turkish.

### Directory Layout

- `src/app/` — App Router pages. Each route folder contains a `page.tsx` (and optionally `layout.tsx`).
- `src/components/` — Feature components (Navbar, Footer, Hero5, SmartWizard, Packages, etc.) and `ui/` for reusable primitives (button, card, accordion, animations).
- `src/lib/utils.ts` — Exports `cn()` (clsx + tailwind-merge) used everywhere for conditional classes.
- `src/data/blogData.ts` — Static blog post data with TypeScript interfaces. No external CMS or API.

### Styling System

Tailwind CSS v4 is configured via `postcss.config.mjs` (`@tailwindcss/postcss`). All design tokens (colors, spacing, typography, shadows, breakpoints) are defined as CSS custom properties in `src/app/globals.css` — not in a `tailwind.config.js`. Key tokens:

- Primary green: `--color-primary: #173b29`
- Accent orange: `--color-accent: #e85f1c`
- Fonts: Outfit (headings), Inter (body) — loaded in `src/app/layout.tsx`

### Path Alias

`@/*` maps to `src/*` — always use this alias for imports.

### Page Composition Pattern

The homepage (`src/app/page.tsx`) and other pages are assembled by stacking section-level components. Components are not lazy-loaded explicitly; they rely on Next.js's default server/client rendering split.

### Client vs Server Components

Components using animations (Framer Motion), browser APIs, or event handlers are marked `"use client"`. Default is server components.
