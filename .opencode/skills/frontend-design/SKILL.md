---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality for Next.js 16, Tailwind v4, shadcn/ui, and Motion v12. Avoid generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick a distinct flavor: refined high-end tech minimalism, dark cyberpunk glow, industrial/utilitarian, or editorial/magazine layout. Maintain absolute intentionality.
- **Constraints**: Next.js 16 (App Router in `src/`), React 19, Tailwind v4, shadcn/ui tokens, next-themes 0.4, and Motion v12 (`motion/react`).
- **Differentiation**: What makes this portfolio UNFORGETTABLE? Focus on premium typography, unexpected spatial compositions, and high-impact motion.

## Frontend Aesthetics & Stack Guidelines

### 1. Typography & Spatial Composition
- **Fonts**: Use `Poppins` via `next/font/google` as the core display and body font. Pair bold, structural headings with spacious, readable body layouts.
- **Layout**: Break predictable grids. Use asymmetrical flex/grid layouts, elegant overlaps, grid-breaking elements, and generous negative space to feel premium.

### 2. Color, Theme & shadcn Integration
- **Theme**: Rely strictly on `next-themes` (v0.4) using the `dark:` variant or Tailwind v4 tokens via shadcn/ui CSS variables.
- **Visual Depth**: Never settle for flat backgrounds. Implement ambient backdrop blurs, subtle noise textures, layered transparencies, dramatic box shadows, custom structural borders, and premium gradient meshes. 

### 3. Motion & Micro-interactions
- **Libraries**: Use `motion` exclusively from `"motion/react"` (not the legacy `framer-motion`).
- **Execution**: Prioritize one well-orchestrated initial page load with staggered reveals (`transition={{ delay: ... }}`) rather than chaotic, jittery hover effects. Use scroll-triggered transitions that surprise the user.

## Critical Guardrails
- NEVER use generic font-families like Inter, Roboto, or standard system sans-serif.
- NEVER fall back to cliché, cookie-cutter purple-on-black crypto/AI landing page gradients.
- ALWAYS make sure client-side state components use the `"use client"` directive explicitly.
- ALWAYS respect the component architecture configured in `components.json` (`@/components/ui/`, `@/components/sections/`).