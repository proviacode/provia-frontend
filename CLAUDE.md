# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Provia Consulting (Spanish-language, `lang="es"`, OG locale `es_CL`). Next.js 15 App Router + React 19 + TypeScript (strict) + Tailwind CSS 3. No backend: the contact form posts directly to Formspree. All user-facing copy is in Spanish (rioplatense voseo in places: "Hablá", "Escribinos") — keep that tone.

## Commands

- `npm run dev` — dev server at localhost:3000
- `npm run build` — production build (also the only type-check; there is no test suite)
- `npm run start` — serve the production build
- `npm run lint` — `next lint` (no ESLint config is committed, so the first run may prompt to create one)

## Architecture

- **Pages**: `app/page.tsx` (single-page home composed of section components) and `app/contacto/page.tsx` (contact page with the form). `app/sitemap.xml/route.ts` is a hand-written route handler; add new pages to its `staticPages` list.
- **SEO lives in two places**: `app/layout.tsx` holds global `metadata` and three JSON-LD blocks (Organization, WebSite, Service); each page overrides `title`/`description`/canonical/OG via its own `metadata` export.
- **Services single source of truth**: `components/servicios.ts` exports `SERVICIOS` / `SERVICIOS_VISIBLES`. It feeds `NuestrosServicios`, the "Qué hacemos" list in `QuienesSomos`, and the Service JSON-LD in the layout. To show/hide a service, flip `visible`; array order = display order. Hidden entries are kept intentionally for later reactivation — don't delete them.
- **Header/Footer `isHomePage` prop**: on the home page nav links are in-page anchors (`#hero`, `#quienes-somos`, `#nuestros-servicios`, `#porque-elegirnos`); on other pages pass `isHomePage={false}` so links become `/#...`. Section components must keep those `id`s.
- **Imperative DOM pattern**: several client components (`ContactForm`, `Header`, `PageCarouselScript`) wire behavior with `document.getElementById` + `addEventListener` inside `useEffect` rather than React state. When editing their markup, keep the element ids they query in sync.
- **Contact form**: `components/ContactForm.tsx` holds `FORMSPREE_ENDPOINT` and handles validation/submit (fields `nombre`, `email`, `telefono`, `mensaje`; see `FORMSPREE_SETUP.md`). `app/contacto/page.tsx` additionally loads the legacy `public/scripts/contact-form.js`, which also attaches a submit handler to `#contactForm` — be aware of the overlap when changing form behavior.
- **Leftovers**: `PageCarouselScript` targets `#servicesCarousel`, which no longer exists in the markup, and `swiper` is a dependency but is not imported anywhere (the README's "carrusel Swiper" note is outdated).
- `CookieConsent` (mounted in the root layout) stores consent in `localStorage` under `provia-cookie-consent`.

## Styling

- Tailwind theme tokens in `tailwind.config.ts`: colors `bg`, `text`, `muted`, `primary` / `primary-strong`, `card`; shadows `shadow-card`, `shadow-primary`.
- Font is Satoshi, loaded from Fontshare in the layout `<head>` and forced globally in `app/globals.css`.
- Pages share the horizontal padding `px-6 sm:px-8 md:px-12 lg:px-[120px]` on `<main>`; heavy use of arbitrary values (`text-[clamp(...)]`, `rounded-[4px]`).
- Static assets are under `public/Images/` (capital I — paths are case-sensitive in production).
- Path alias `@/*` maps to the repo root.
