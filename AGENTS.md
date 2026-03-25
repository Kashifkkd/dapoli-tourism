<!-- BEGIN:nextjs-agent-rules -->
# Dapoli Tourism — Project Rules

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Language**: TypeScript (strict mode)
- **Fonts**: Plus Jakarta Sans (headlines) + Inter (body/labels) via `next/font/google`
- **Icons**: Google Material Symbols Outlined

## Design System — "The Digital Concierge"

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#000613` | Deep Navy — immersive backgrounds, high-impact text |
| `primary-container` | `#001f3f` | Navy variant — hover states, CTA gradients |
| `tertiary-fixed` | `#ffdea5` | Gold — CTAs, highlights, signature moments |
| `tertiary-fixed-dim` | `#e9c176` | Gold hover state |
| `surface` | `#f9f9f9` | Main background |
| `surface-container-low` | `#f3f3f3` | Subtle section shifts |
| `on-surface` | `#1a1c1c` | Primary text |
| `on-surface-variant` | `#43474e` | Secondary text |

### Typography
- **Display/Headline**: `font-headline` → Plus Jakarta Sans (extra-bold for modern impact, tracking -0.02em)
- **Body/Label**: `font-body` / `font-label` → Inter (clean, technical, modern)
- Always pair a display heading with a body sub-header

### Core Rules
1. **No 1px borders** for sectioning — use tonal background shifts
2. **Glassmorphism** for floating nav: 80% opacity + 24px backdrop blur
3. **CTA gradient**: `linear-gradient(primary → primary-container)` for depth
4. **Ambient shadows**: `rgba(26,28,28, 0.04)` — never Material Design defaults
5. **Ghost borders**: `outline-variant` at 20% opacity for inputs
6. **Whitespace**: generous — if it feels empty, it's working

## Component Conventions
- All components in `app/components/` as `.tsx` files
- Use `"use client"` only when needed (event handlers, hooks)
- Prefer Tailwind classes over inline styles
- All images use `next/image` with proper `alt` text
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Each interactive element must have a unique `id`

## Code Quality
- No `any` types
- No unused imports
- No console.log in production code
- Prefer `const` over `let`
- Destructure props in function signatures

## SEO
- Descriptive `<title>` and `<meta description>` per page
- Single `<h1>` per page with proper heading hierarchy
- All images must have meaningful `alt` attributes
- Semantic HTML throughout
