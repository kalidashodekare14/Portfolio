# Spec: Best Folder Structure

## Overview
This feature reorganizes the portfolio's file structure into a more conventional and scalable Next.js project layout. Currently the codebase mixes section components, layout components, and page-level components in flat or inconsistent locations (`src/components/` is flat, `src/layout/` is a separate top-level directory, data is hardcoded in page files, unused files linger). A cleaner grouping by concern (sections, layout, data, hooks, types) makes the codebase easier to navigate and maintain as new sections or features are added.

## Depends on
None — this is the first structural step.

## Routes
No new routes.

## Templates
No new templates.

## Files to change

| File | Change |
|------|--------|
| `src/app/page.tsx` | Update all import paths for section and layout components after moving them |
| `src/app/projects/[id]/page.tsx` | Update import paths; extract hardcoded project data into `src/data/projects.ts` |
| `src/app/projects/page.tsx` | Update import path for `Pages/Projects` component |
| `src/components/ContactMe.tsx` | Move to `src/components/sections/ContactMe.tsx`; update internal imports |
| `src/components/Services.tsx` | Move to `src/components/sections/Services.tsx` |
| `src/components/TechnicalSkill.tsx` | Move to `src/components/sections/TechnicalSkill.tsx` |
| `src/components/Projects.tsx` | Move to `src/components/sections/Projects.tsx`; update any imports |
| `src/components/AboutMe.tsx` | Move to `src/components/sections/AboutMe.tsx` |
| `src/components/HeroSection/HeroSection.tsx` | Move to `src/components/sections/Hero/HeroSection.tsx` |
| `src/components/HeroSection/HeroSection.css` | Move alongside `HeroSection.tsx` or inline styles; remove if unused |
| `src/components/Pages/Projects.tsx` | Move to `src/components/sections/ProjectsPage.tsx` (clearer name) |
| `src/layout/Navbar.tsx` | Move to `src/components/layout/Navbar.tsx` |
| `src/layout/Footer.tsx` | Move to `src/components/layout/Footer.tsx` |

## Files to create

| File | Purpose |
|------|---------|
| `src/data/projects.ts` | Extract hardcoded project array from `src/app/projects/[id]/page.tsx` |
| `src/types/index.ts` | Shared TypeScript types (project, skill, service, etc.) |
| `src/hooks/index.ts` | Custom hooks extracted from components (if any reusable logic exists) |

## Files to delete (cleanup)

| File | Reason |
|------|--------|
| `src/components/Education.tsx` | Unused (already commented out in page.tsx) |
| `src/components/HeroSection1/` | Unused alternative hero variant |
| `src/layout/` (directory) | All contents moved into `src/components/layout/` |
| `src/components/HeroSection/` (directory) | Contents moved to `src/components/sections/Hero/` |
| `src/components/Pages/` (directory) | Contents moved to `src/components/sections/` |

## New dependencies
No new dependencies.

## Rules for implementation
- All components remain `"use client"` except root layout and page files.
- Update every import path in every file that references a moved file. No broken imports.
- The `@/` path alias must be used consistently (e.g. `@/components/sections/Hero`).
- Do not change component logic, props, or JSX — only file locations and import paths.
- Do not change `src/components/ui/` — shadcn primitives stay put.
- Delete unused files and directories only after verifying they are truly unused (grep for imports).
- Keep the same CSS approach (`globals.css` variables, Tailwind utility classes).
- Run `npm run dev` and `npm run build` to verify no errors after the restructure.

## Definition of done
- [ ] `src/layout/` no longer exists — contents are in `src/components/layout/`
- [ ] All section components live under `src/components/sections/`
- [ ] `src/components/HeroSection/`, `src/components/HeroSection1/`, and `src/components/Pages/` no longer exist
- [ ] `src/data/projects.ts` exists and exports the project array; `projects/[id]/page.tsx` imports from it
- [ ] `src/types/index.ts` exists with shared types
- [ ] `src/components/Education.tsx` is deleted
- [ ] `npm run dev` starts without errors; all sections render correctly in browser
- [ ] `npm run build` completes without errors
