# Aaranya — Skincare Landing Page

A production-grade skincare e-commerce landing page built with React, CSS Modules, and GSAP.

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar/          # Sticky nav with cart icon + badge, mobile menu
│   ├── Cart/            # Slide-in cart drawer with free gift progress
│   ├── ProductCard/     # Reusable card with GSAP hover
│   └── FreeGiftBar/     # Dynamic free gift progress bar
│
├── sections/
│   ├── Hero/            # Full-viewport hero with GSAP entrance timeline
│   ├── OfferBanner/     # "Save 20%" discount strip
│   ├── BestSellers/     # Filtered product grid with stagger animation
│   ├── ProductHighlight/# Split layout with image reveal + signs list
│   ├── Declaration/     # Brand story with parallax image
│   ├── Community/       # Gallery grid with Instagram-style hover
│   └── Footer/          # Email capture + vibe selector + free gift blob
│
├── data/
│   └── products.js      # Mock product data (id, name, price, image, tag, category)
│
├── hooks/
│   └── useAnimations.js # GSAP hooks: fadeInUp, stagger, imageReveal, parallax, heroEntrance
│
├── context/
│   └── CartContext.jsx  # Cart state: add/remove/updateQty + localStorage + free gift logic
│
└── styles/
    └── global.css       # CSS variables, reset, typography, utility classes
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Dependencies

- **React 18** — UI framework
- **GSAP 3 + ScrollTrigger** — all animations (fade, stagger, clip-path reveal, parallax)
- **CSS Modules** — scoped styles per component, zero Tailwind

## ✨ Features

| Feature          | Implementation                                                 |
| ---------------- | -------------------------------------------------------------- |
| Hero animation   | GSAP timeline: eyebrow → heading → sub → CTA → card            |
| Product hover    | GSAP `scale` on img, `translateY` + `boxShadow` on card        |
| Image reveal     | `clip-path: inset(0 100% 0 0)` → `inset(0 0%)` on scroll       |
| Stagger entrance | `gsap.fromTo` with `stagger: 0.12` on `.stagger-item` children |
| Parallax         | `scrub: true` ScrollTrigger on hero image                      |
| Cart             | Context API reducer + localStorage persistence                 |
| Free Gift        | Dynamic progress bar — triggers at ₹999 cart value             |
| Category filter  | Client-side filter on products array                           |
| Email capture    | Vibe radio selector + submit state                             |

## 🎨 Color System

| Token            | Value     | Use                                |
| ---------------- | --------- | ---------------------------------- |
| `--color-cream`  | `#f7f3ee` | Section backgrounds                |
| `--color-green`  | `#4a7c59` | Primary CTA, tags, accents         |
| `--color-yellow` | `#d4b84a` | Hero CTA, badges, subscribe button |
| `--color-beige`  | `#ede6dc` | Cards, offer banner, footer        |
| `--color-text`   | `#2a2118` | Body text                          |

## 🎯 GSAP Animation Map

```
useHeroEntrance    → Hero section (timeline, no ScrollTrigger — fires on load)
useFadeInUp        → OfferBanner, headings, text blocks
useStaggerFadeIn   → ProductCards (.stagger-item), signs list, gallery items
useImageReveal     → ProductHighlight image, Declaration product image
useParallax        → Hero background image (scrub)
GSAP direct        → ProductCard hover (mouseenter/mouseleave)
```
