# Filipiniana Hotel Calapan — client landing-page presentation

A standalone, responsive hospitality landing page to show a prospective client what Charles’s website service could deliver. The original Eduardo’s Resort app remains separate.

## Preview

Run from this folder:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3001. Dependencies can also resolve from the containing workspace during development.

```sh
npm run typecheck
npm run build
npm start
```

`build` produces a static website in `out/`. `start` serves that export locally on port 3001. Stop the dev server first if that port is already in use. The export can be hosted at the root of a static-hosting domain. No site has been published automatically.

## GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the static export to GitHub Pages. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**. The deployed project site will be available at `https://charlesmanalo.github.io/Filipiniana-Hotel/`.

For a local production build using the project-site path, run `$env:NEXT_PUBLIC_BASE_PATH='/Filipiniana-Hotel'; npm run build` in PowerShell or `NEXT_PUBLIC_BASE_PATH=/Filipiniana-Hotel npm run build` in a POSIX shell.

## What the client sees

- A custom cream, crimson, gold, and forest-green identity with Cormorant Garamond and Manrope.
- A floating glass navigation, full-screen hotel hero, date and guest planner, and mobile call/message/inquire bar.
- Hotel story and facilities, a filterable 12-service collection, room-detail dialogs, dining, weddings, conferences, and celebrations.
- Alternating animated editorial story columns, a planning banner, 12-photo gallery, directions, FAQs, policy information, newsletter preview, and oversized footer wordmark.
- Animated section reveals, keyboard-accessible dialogs, reduced-motion support, responsive image compositions, and useful native contact links.

## Preview boundaries

This is a presentation, not a live reservation platform. The inquiry form validates the plan and creates an email draft or copyable message. **Nothing is sent automatically, booked, or stored.** Newsletter signup demonstrates a success state and explicitly says it does not subscribe anyone. Interaction events are local browser events only; no tracking provider or analytics cookie is installed.

Rates remain unpublished until approved. The supplied PRD’s sample guest reviews are not presented as authentic testimonials. The animated cards contain clearly labeled editorial travel inspiration; the component can render permissioned reviews from `content/hotel.json` later. Room photographs demonstrate the property’s accommodations; reservations must confirm exact category layout and inclusions.

Search indexing is disabled for this sales preview. Before an actual launch, confirm content and image permissions, configure a domain and metadata, add approved reviews and policies, and connect any contracted booking, inquiry, analytics, or newsletter integrations.

## Editing

Sections live in `components/filipiniana/`; shared content is in `content/hotel.json`; design rules and motion are in `app/globals.css`. `HotelProvider.tsx` owns the room, policy, and inquiry dialogs. Each page action stays within the landing page or opens a clearly labeled external contact destination.

## Photography

Property photography was sourced from the hotel’s public website: https://filipinianahotel.my.canva.site/home

`content/image-sources.json` records the original URLs. The selected assets were converted to local WebP files for the presentation. Public availability does not establish a license; obtain owner authorization for a public commercial launch.

| Asset             | Source file |
| ----------------- | ----------- |
| hotel-pool.webp   | 32.jpg      |
| deluxe.webp       | 19.jpg      |
| suite.webp        | 11.jpg      |
| executive.webp    | 22.jpg      |
| suite-living.webp | 36.jpg      |
| terrace.webp      | 02.jpg      |
| restaurant.webp   | 29.jpg      |
| wedding.webp      | 05.jpg      |
| conference.webp   | 07.jpg      |
| celebration.webp  | 25.jpg      |
| lobby.webp        | 16.jpg      |
| entrance.webp     | 39.jpg      |

## Validation

TypeScript and the production build were checked. Browser verification covers desktop and mobile layouts, navigation, category filtering, catalog search, room dialogs, a validated inquiry draft, gallery navigation, and the newsletter demonstration. A certified accessibility audit or Lighthouse score is not claimed.
