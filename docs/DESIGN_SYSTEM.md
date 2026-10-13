# CampusCare design system

## Foundation
Brand: `campuscare.`. Colors are semantic CSS tokens defined in `src/app/globals.css`.

| Token | Dark | Light |
| --- | --- | --- |
| background | #0d1410 | #f4f8f1 |
| surface | #152019 | #ffffff |
| ink | #f3f8ee | #17291b |
| accent | #c8fa78 | #304e28 |
| border | #344536 | #d6e3d3 |

Use neutral surfaces, strong contrast, accessible focus rings, comfortable 12–18px radii, clear typographic hierarchy, and gentle hover shifts. Reduced-motion preferences disable transitions and animations.

## UI primitives
`src/components/ui/button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, plus shared headings, metric cards, empty states, issue and service cards.

Shadcn-compatible aliases are configured in `components.json`; add official components only as needed. Icons use Lucide React. Prefer semantic HTML elements, keyboard access and honest preview labels.

## Responsive layouts
Desktop marketing hero and grid layouts, collapsible mobile website menu, desktop workspace sidebar and mobile disclosure nav. Refine accessibility and responsive QA in Phase 1.
