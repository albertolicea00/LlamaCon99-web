# Llama con \*99 — Landing Page

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat&logo=alpinedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Landing page for the [Llama con 99](https://github.com/albertolicea00/LlamaCon99) app, a caller-ID app for Cuba that identifies incoming `*99` (collect calls) with the real contact name. Available on iOS and Android.

[Mira la versión en español](README.es.md)

## Structure

```
├── index.html          landing page (hero, features, setup guide, FAQ, similar apps, notify CTA)
├── privacy.html        privacy policy
├── terms.html          terms & conditions
├── eula.html           end-user license agreement
├── app.js              Alpine.js components (dark mode, mobile menu, notify modal, GitHub stars, subscribe form)
├── api/subscribe.js    Vercel serverless — adds emails to Brevo
├── vercel.json         asset caching config
├── robots.txt          crawl rules (legal pages excluded)
├── sitemap.xml         indexable pages
├── assets/             app icons + similar-apps screenshots
└── api/.env.example    required env vars
```

## Pages

**`index.html`** — single-page landing: hero, four feature cards (contact list, `*99` calling, caller-ID, voice assistant shortcuts), a short "why the name" blurb, a step-by-step iOS/Android caller-ID activation guide (`#caller-id-setup`), FAQ, a cross-promo **Apps similares** section (other apps by the same author), a final notify CTA, and a footer with legal links + community links (GitHub, Telegram, X). Fetches `https://api.github.com/repos/albertolicea00/LlamaCon99` client-side to show a live GitHub star count in the nav.

**`privacy.html` / `terms.html` / `eula.html`** — static legal pages, `noindex, follow` (excluded from search results but still linkable/crawlable), each with its own canonical URL and cross-links to the other two.

## Notify me / subscribe form

`notifyForm()` in `app.js` posts `{ email }` to `POST /api/subscribe` (`api/subscribe.js`, Vercel serverless), which adds the address to a Brevo list — used for "notify when the app hits the App Store". Requires `BREVO_API_KEY` and `BREVO_LIST_ID` (see `api/.env.example`) — **this project needs its own Brevo list**, separate from Qvacell's and Banca Remota's.

## SEO

`index.html` ships a `MobileApplication` JSON-LD block and a `FAQPage` JSON-LD block mirroring the on-page FAQ (eligible for FAQ rich snippets), canonical/OG/Twitter meta, and `robots.txt` + `sitemap.xml` at the root. Legal pages are deliberately kept out of the sitemap and marked `noindex`.

## Local dev

```bash
npx serve .
```

`api/subscribe.js` is a Vercel serverless function — `npx serve` won't run it. Use `vercel dev` to exercise the notify form locally against a real Brevo list.

## Deploy

Push to `main` → Vercel auto-deploys. Add env vars from `api/.env.example` in the Vercel dashboard.

## Colors

| Token            | Hex       |                      |
| ---------------- | --------- | -------------------- |
| `--color-green`  | `#0f0f0f` | Primary (near-black) |
| `--color-accent` | `#2AB78F` | Green highlights     |

Solid colors throughout — no gradients. Backgrounds use `rgb(10,10,10)` for dark mode (not Tailwind's default `gray-950`, to avoid a blue-ish cast).

## More Apps

Other apps by the same author, cross-promoted in the **Apps similares** section:

- Qvacell — USSD launcher for ETECSA operations (balance, packages, transfers). [iOS](https://github.com/albertolicea00/Qvacell-ios) · [Android](https://github.com/albertolicea00/Qvacell-apk).
- [Banca Remota](https://github.com/albertolicea00/BancaRemota) — Unofficial iOS alternative to Cuba's mobile banking apps.
- Casero.cu — Native clients for Cuban lodging hosts to submit guest reports to the official portal. [iOS](https://github.com/albertolicea00/casero.cu-ios) · [Android](https://github.com/albertolicea00/casero.cu-apk).

## Contributing

Issues, PRs, and commit messages should be in English.

---

_Part of the [Llama con 99](https://github.com/albertolicea00/LlamaCon99) project by [Alberto Licea](https://www.linkedin.com/in/albertolicea00)._
