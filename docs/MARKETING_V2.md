# CampusCare Marketing V2

## Purpose and architecture

The public website explains CampusCare before asking visitors to explore account creation. It is separate from the operational student and administrator experiences. All four public routes (`/`, `/features`, `/about`, `/contact`) use the `(marketing)` layout, shared public header/footer and scoped `marketing-v2.css` design system.

The student and admin pages remain fictional, interactive previews. Marketing links do not grant or restrict access to them. Real authentication is not implemented, and no localStorage security flag or fake session was introduced. See [the server-enforcement integration contract](AUTH_SECURITY.md#marketing-v2-route-separation-and-prepared-enforcement-contract) for the exact layout, handler and service checks required before real data is connected.

Most sections and all product illustrations are server components. Small client components handle navigation, walkthrough tab selection, existing theme preferences, the existing email-draft form and progressive scroll reveals. The native FAQ needs no JavaScript. Root loading was scoped to student/auth route groups so a global streamed loading fallback cannot hide static marketing content when scripting is disabled. Existing admin loading/error boundaries remain in place.

## Public navigation and branding

- Desktop: Home, Features, How It Works (`/#how-it-works`), About, Contact.
- Actions: Log in and Get started lead to disabled authentication previews.
- Mobile: a native modal drawer with focus containment, focus restoration, Escape dismissal, active links and clearly separated account actions.
- No header search, operational links or theme icon. Theme support lives in the footer and remains available in the application layouts.
- The existing CampusCare shield-and-care mark is preserved in a reusable `CampusCareBrand` component. Header and footer use the same aligned, responsive wordmark. No university logo is used.
- Footer: public discovery links, account-preview links, project source link, privacy/accessibility section link, copyright year and explicit project status. No fabricated legal policy or institutional endorsement.

## Landing-page sections

1. **Hero:** connected-campus headline, registration-preview and feature CTAs, student workspace illustration, orbit gradient and colored annotations.
2. **The problem:** six everyday support questions on an editorial off-white background, without invented statistics.
3. **Our solution:** a lightweight connection diagram and explanations of convenience, clarity and accountability.
4. **Feature showcase:** reporting, tracking, discovery, appointments, emergency guidance, notifications, student dashboard and administrative coordination; each identifies existing preview behavior.
5. **How it works:** five connected steps, explicitly describing the intended live journey after authentication/provider integration.
6. **Designed for students:** six practical benefits and a responsive phone illustration on lavender.
7. **Campus coordination:** future team workflows alongside a fictional admin overview.
8. **Product walkthrough:** keyboard-accessible tabs for student workspace, report tracking, appointments, notifications and team overview.
9. **Our vision:** independent OAU-first context and possible future institution-specific deployments.
10. **Trust, privacy and accessibility:** development principles and explicit current security/data limitations.
11. **FAQ:** eight native disclosures covering purpose, audience, affiliation, use, accounts, pricing, expansion and availability. Pricing and launch timing are undecided.
12. **Final CTA:** registration preview and contact, with a clear independence disclaimer.
13. **Footer:** comprehensive public navigation and project information.

The Features page expands all eight capabilities with separate **In the preview** and **Backend required** descriptions. About explains the project’s origin and principles. Contact preserves the existing validated email-draft flow: the website does not automatically submit or save the message.

## Components and visual system

`src/components/marketing/` contains named section components, `brand.tsx`, reusable `MockupFrame`/`StudentMockup`, report/team/communication mockups and `walkthrough-tabs.tsx`. `src/data/marketing.ts` holds feature and FAQ content. Public navigation is centralized in `src/constants/marketing-navigation.ts`.

The scoped palette uses charcoal `#101712`, lime `#C8FA78`, forest `#304D27` and off-white `#F5F8F0`, with blue `#89BFFF`, lavender `#B9A3FF`, orange `#FFBC80` and teal `#70D6C1`. Sections alternate dark, off-white, lavender and warm neutral treatments. Light-theme tokens remain supported; product illustrations intentionally retain a consistent dark sample interface.

Visual assets are HTML, CSS and existing Lucide icons. No raster downloads, fonts, trackers, runtime dependencies or live service integrations were added. The illustrative figures contain readable sample labels, not working operational buttons. Existing authentication campus artwork remains available.

## Accessibility, responsive behavior and metadata

- One H1 per public page; semantic sections, lists, figures, captions, navigation and footer.
- Skip link, visible focus indicators, labeled drawer controls and native modal behavior with explicit Tab wrapping.
- Walkthrough tabs use roving focus, selected state, linked panels and Left/Right/Home/End keys.
- Native FAQ summary controls support Enter/Space and work without JavaScript.
- Content stays readable without scripting; reveal animations enhance visible server-rendered content.
- System reduced-motion support disables animations; subtle reveals and hover effects otherwise remain brief.
- Responsive stacked sections, reflowing feature cards and timelines, wrapped tabs and mobile navigation; tested at 320, 390, 768 and 1440px widths.
- Public metadata includes descriptive page titles, descriptions and Open Graph/Twitter summaries. Prototype `noindex` remains intentional until a production domain and launch policy are confirmed; no canonical URL or official-organization schema was invented.

## Verification

```sh
npm run typecheck
npm run lint
npm run build
node scripts/verify-scaffold.mjs
node scripts/smoke-phase1.mjs
node scripts/smoke-phase2.mjs
node scripts/smoke-phase3.mjs
node scripts/smoke-phase4.mjs
npm run smoke:marketing
npx playwright install chromium
npm run test:e2e
```

Use `npm run test:marketing` or `npm run test:admin` for a focused suite. On a machine with installed Chrome, set `PLAYWRIGHT_CHANNEL=chrome` before running browser tests. CI installs Chromium and runs both suites.

Marketing smoke checks cover all public pages, account destinations, local links/anchors, all landing sections, FAQ count, and absence of operational workspace links. Browser coverage includes metadata, content, FAQ keyboard behavior, tab navigation, drawer focus/Escape, account CTAs, mobile/tablet/desktop overflow, both themes, reduced motion, skip navigation and no-JavaScript content. Existing admin workflow/browser and Phase 0–4 smoke coverage is retained.

Local verification passed: TypeScript, ESLint, production build, scaffold verification, all Phase 1–4 smoke suites, Marketing V2 smoke checks and **36 browser tests** (18 marketing and 18 admin checks across desktop/mobile projects). The browser suite used installed Chrome. Desktop/mobile screenshots were reviewed for the hero, feature showcase and Contact page. No runtime dependency was added; the production homepage reports approximately 107 kB of first-load JavaScript, comparable to the previous landing page.

The exact successful pushed GitHub Actions run is supplied in the delivery report. Browser checks are not a substitute for a full manual assistive-technology audit.

## Remaining limitations

This is an independent frontend prototype. Account creation, authentication, real submissions, uploads, bookings, notifications, institutional verification and privileged operations require secure backend integration. Workspace routes are still public previews. Emergency contacts are not verified and this website is not an emergency service. No pricing model or launch date is confirmed. Theme preference can be stored locally, but never represents identity or authority.
