# Phase 1 — Complete marketing and authentication frontend

**Status:** Implemented in React/Next.js and validated in GitHub Actions. Auth remains preview-only.

## Design reference and visual language

The frontend translates the generated CampusCare charcoal-and-lime concepts into responsive **real UI components**, rather than placing a giant screenshot behind buttons. The campus artwork in the hero and sign-in visual panel is an original decorative SVG, **not an authentic photo of an OAU building**.

CSS is divided into:
- `src/app/globals.css`: Phase 0 tokens and shared workspace styles;
- `src/app/phase1.css`: header, navigation, marketing pages, cards, responsive motion and footer;
- `src/app/phase1-auth.css`: split-screen authentication experience, input and validation states.

## Marketing deliverables (4)

| Route | Features |
| --- | --- |
| `/` | Hero, original campus illustration, coded dashboard mockup, feature ribbon, how-it-works, values, trust note and CTA |
| `/features` | Six feature cards with navigation, security/design principles, feedback CTA |
| `/about` | Origin story, principles, OAU-first vision, collaboration CTA |
| `/contact` | Contact methods, email-draft form with input validation, GitHub link and safe-channel notice |

**Contact form behavior:** The browser opens a `mailto:` draft for the user's email application. No submission to a backend, message delivery or message storage is claimed.

**Search behavior:** The website header suggests matching CampusCare destinations. It is a **page navigator**, not a search over genuine university records or uploaded documents.

## Authentication deliverables (4)

`/auth/login`, `/auth/signup`, `/auth/forgot-password`, `/auth/reset-password` all include:
- Branded split-screen campus illustration and benefit cards;
- Semantic labels, password show/hide buttons, focus rings and validation;
- Password-strength feedback and confirmation where appropriate;
- Mobile stacked layout; clear alternative-navigation links;
- Notice explaining that **no credentials are verified or stored, no account is created, and no email is sent**.

Do not ask a user to enter their actual password in a preview. Real authentication starts in the backend phase after Auth.js sessions, verification and permissions are implemented.

## Interaction and mobile support

- Keyboard-accessible nav links, buttons and disclosure controls; Escape closes mobile navigation.
- Collapsible mobile navigation and responsive public/authorization layouts.
- Reusable buttons, cards, navigation, badge colors, header and footer.
- Persistent dark/light preference stored only in browser localStorage.
- Scroll reveal and hover transitions disabled when users prefer reduced motion.
- Search suggestions link to actual local routes.

## Security and accuracy

The app is not an official OAU platform. Campus names, contact details, issue status records, admissions, and availability are not presented as verified facts. Admin and student workspace views still use Phase 0 labeled sample fixtures. We don't publish invented official emergency phone numbers.

## QA

CI runs `npm run typecheck`, `npm run lint`, `npm run build`, `node scripts/verify-scaffold.mjs`, and `node scripts/smoke-phase1.mjs`. The smoke test boots the compiled Next.js app and checks all 8 Phase 1 routes plus that the real registration endpoint still responds HTTP 501.

A browser visual review across multiple screen widths is still recommended before production deployment.
