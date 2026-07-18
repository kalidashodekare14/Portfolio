# AGENTS.md — Portfolio

## Stack

Next.js 16.1 (App Router) — React 19 — TypeScript 5 — Tailwind v4 — DaisyUI v5 — Motion v12

## Commands

```sh
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (no typecheck step exists)
```

No test framework. No typecheck script (rely on `tsc --noEmit`).

## Project structure

- `app/page.tsx` — single-page home composing all sections (Navbar, Hero, About, Services, Skills, Projects, Contact, Footer)
- `app/projects/[id]/page.tsx` — dynamic project detail page; project data is **hardcoded** in that file
- `components/` — section components; `layout/` — Navbar, Footer
- `@/` path alias maps to root (`./*`)

## Key conventions

- All components are `"use client"` except `app/layout.tsx` and `app/page.tsx`
- Dark mode: toggled via `<html class="dark">`, persisted in `localStorage("theme")` — handled in `layout/Navbar.tsx`
- Animations use `motion` (from `"motion/react"`, not `"framer-motion"`)
- Contact form uses **EmailJS** with hardcoded service/template/publicKey in `components/ContactMe.tsx`
- CSS: `@import "tailwindcss"` + `@plugin "daisyui"` in `app/globals.css`; dark variant via `@custom-variant dark (&:where(.dark, .dark *))`
- Font: Poppins via `next/font/google` in root layout
- Scroll nav uses `react-scroll` (`Link` from `react-scroll`, not `next/link` for same-page nav)
- Project images are external URLs (postimg.cc)
- No `.env` file — EmailJS keys are committed in source
- `next-env.d.ts` is gitignored (auto-generated)


