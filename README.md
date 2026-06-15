# Погода в День Рождения
### «Часовой Погоды» — Персональный метеосертификат

Premium storytelling landing page for personalized historical weather certificates.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
pogoda/
├── app/
│   ├── globals.css          # Global styles, fonts, custom utilities
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page — assembles all sections
│
├── components/
│   ├── sections/            # Page sections (in render order)
│   │   ├── Hero.tsx         # S1 — Hero with date/city form
│   │   ├── PreviewGate.tsx  # S2 — Blurred certificate preview (Zeigarnik hook)
│   │   ├── AboutProduct.tsx # S3 — Product pillars + archive authority
│   │   ├── CertificateGallery.tsx  # S4 — Example certificates by season/city
│   │   ├── Pricing.tsx      # S5 — Framed certificate (5990₽)
│   │   ├── SocialProof.tsx  # S6 — Stats, counter, media mentions
│   │   ├── CertificateAnatomy.tsx  # S7 — Annotated certificate breakdown
│   │   ├── OrderForm.tsx    # S8 — Full order form with all fields
│   │   ├── Testimonials.tsx # S9 — Customer review cards
│   │   ├── FAQ.tsx          # S10 — Accordion FAQ
│   │   ├── FinalCTA.tsx     # S11 — Closing CTA with repeat form
│   │   └── Footer.tsx       # S12 — Footer with links and contacts
│   │
│   └── ui/                  # Reusable UI primitives
│       ├── Navigation.tsx   # Sticky nav + mobile hamburger + mobile CTA bar
│       ├── CertificateCard.tsx  # Certificate visual (used in Hero + PreviewGate)
│       ├── OrnamentDivider.tsx  # Decorative gold dividers (3 variants)
│       ├── DecorativeBorder.tsx # Certificate-style border frames (4 variants)
│       └── Button.tsx       # Styled button (primary/secondary/ghost/outline)
│
├── lib/
│   ├── constants.ts         # All copy: pricing, testimonials, FAQ, gallery data
│   └── types.ts             # TypeScript interfaces
│
├── tailwind.config.ts       # Custom design tokens (gold palette, ivory, ink)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Design System

### Colour Palette
| Token | Hex | Usage |
|---|---|---|
| `ivory-200` | `#F5EDD4` | Main background |
| `ivory-100` | `#FAF6E8` | Lighter sections |
| `gold-500` | `#B8922A` | Primary accent, borders |
| `gold-400` | `#D4A843` | Highlights, gradient start |
| `ink-600` | `#1C1810` | Primary text |
| `ink-400` | `#4A4438` | Body text |
| `archive-sepia` | `#8B6948` | Secondary text, labels |

### Typography
- **Display**: Playfair Display — headlines, hero H1
- **Serif**: EB Garamond — body copy, narrative text
- **Body**: Cormorant Garamond — labels, captions, UI

### Key UX Mechanism
The **Preview Gate** (PreviewGate.tsx) is the highest-converting element.
After the user enters a date + city in the Hero form, a blurred certificate appears
showing their city and date — but obscuring the data with a lock overlay.
This creates the Zeigarnik effect (loss aversion) which drives conversion to the order form.

---

## Order Form Fields
- **Name** — required
- **Email** — required
- **Date of birth** — required (min: 1936-01-01)
- **City** — required (dropdown, 50 Russian cities)
- **Occasion** — optional (birthday, anniversary, newborn, etc.)
- **Comment** — optional (free text)

---

## Pricing
| Product | Price | Delivery |
|---|---|---|
| Framed printed certificate (wooden frame, gift packaging) | 5 990 ₽ | Production and shipping: usually 3–7 days |

---

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3**
- **Google Fonts**: Playfair Display, EB Garamond, Cormorant Garamond

## To connect a real backend
Replace the `handleSubmit` mock in `OrderForm.tsx` with a real API call:
```typescript
const res = await fetch('/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```
Create `app/api/orders/route.ts` with your email/payment handler.
