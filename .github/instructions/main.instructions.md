---
applyTo: "**"
description: "Project map and tech stack guidance for the slick-portfolio-svelte codebase."
---

# Slick Portfolio Svelte: Project Instructions

## Purpose

This repository is a personal portfolio website built with SvelteKit and TypeScript.
It is content-driven: most page content is maintained in TypeScript data modules under `src/lib/data`, then rendered by route pages in `src/routes`.

## Tech Stack

- Framework: Svelte 4 + SvelteKit 1
- Language: TypeScript (strict mode)
- Bundler/dev server: Vite 4
- Styling:
	- UnoCSS (primary utility system, via `uno.config.ts` and `uno.css` import in root layout)
	- Tailwind CSS (also configured and imported through global stylesheet)
	- SCSS (`src/lib/index.scss`)
- Content rendering helpers:
	- Marked / PrismJS / DOMPurify (for markdown + syntax-highlighted content rendering)
- Analytics:
	- `@vercel/analytics`
	- `swetrix`
- Build target: static site generation with `@sveltejs/adapter-static` (fallback `404.html`)

## Runtime and Build Behavior

- Static prerender is enabled in `src/routes/+layout.server.ts` (`export const prerender = true`).
- SvelteKit adapter is static (`svelte.config.js`), so routes must be compatible with prerendering.
- Base path is controlled in `svelte.config.js` (`kit.paths.base`) and currently set to empty string.

## Package Manager and Scripts

Use `pnpm` (repo includes `pnpm-lock.yaml`).

- `pnpm dev` - start local dev server
- `pnpm serve` - dev server on port 3000, host exposed
- `pnpm build` - production build
- `pnpm preview` - preview built site
- `pnpm check` - type and Svelte checks
- `pnpm lint` - Prettier check + ESLint
- `pnpm format` - Prettier write

## Source of Truth: What to Edit

### Main source folders

- `src/routes`: route pages and route-level load logic
- `src/lib/components`: reusable Svelte components
- `src/lib/data`: primary content/data definitions for portfolio sections
- `src/lib/stores`: client-side state (for example theme handling)
- `src/lib/utils`: utility functions
- `src/lib/md`: markdown content files imported as raw text
- `static`: static assets served directly (logos, screenshots, favicon, etc.)

### Generated/derived output (do not edit manually)

- `build/` is generated output from static build and should not be hand-edited for feature/content changes.

## Routing and Data Flow

Top-level sections are represented as routes:

- `/` home
- `/skills`
- `/projects`
- `/experience`
- `/education`
- `/music`
- `/resume`
- `/search`
- `/privacy-policy`

Dynamic detail routes use slug lookups from data modules:

- `src/routes/projects/[slug]/+page.ts` -> `@data/projects`
- `src/routes/experience/[slug]/+page.ts` -> `@data/experience`
- `src/routes/skills/[slug]/+page.ts` -> `@data/skills`

When adding a new detail page item, update the corresponding data array with a unique `slug`; dynamic pages resolve by matching `params.slug`.

## Data Modules Convention

Most editable content is in `src/lib/data/*.ts`.

Important files include:

- `home.ts`: landing content and social links
- `navbar.ts`: nav items
- `projects.ts`: project cards and detail data
- `experience.ts`: experience entries
- `education.ts`: education entries
- `skills.ts` and `skilldescription.ts`: skill catalog and descriptions
- `music.ts`: music entries
- `assets.ts`: logical asset registry used by cards and detail pages

Shared interfaces are defined in `src/lib/types.ts`.

## Styling Conventions

- Root layout (`src/routes/+layout.svelte`) imports `uno.css` and global SCSS (`src/lib/index.scss`).
- Prefer existing utility-class patterns (UnoCSS/Tailwind-style classes) and current SCSS variable system.
- Keep theme compatibility intact (`src/lib/stores/theme.ts` and CSS variables in `src/lib/index.scss`).

## Aliases and Imports

Configured in `svelte.config.js`:

- `$lib` -> `src/lib`
- `@data` -> `src/lib/data`
- `@components` -> `src/lib/components`
- `@md` -> `src/lib/md`
- `@stores` -> `src/lib/stores`
- `@utils` -> `src/lib/utils`

Prefer these aliases over deep relative paths when possible.

## Practical Change Checklist

For content updates:

1. Update the relevant file in `src/lib/data`.
2. Add/update matching asset files in `static/logos` or `static/screenshots` if needed.
3. Ensure slug-based links remain valid and unique.
4. Run `pnpm check` and `pnpm build` to validate.

For code changes:

1. Keep TypeScript strict-safe and consistent with existing interfaces.
2. Preserve static-prerender compatibility (avoid server-only runtime assumptions in pages).
3. Reuse existing components/patterns before creating new abstractions.


