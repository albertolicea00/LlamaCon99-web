# Llama con *99 — Landing Page

![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat&logo=alpinedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Página para [Llama con 99](https://github.com/albertolicea00/LlamaCon99), una app de identificador de llamadas para Cuba que reconoce las llamadas entrantes por cobro revertido (`*99`) mostrando el nombre real del contacto. Disponible en iOS y Android.

[Read English version](README.md)

## Estructura

```
├── index.html          página de destino (hero, funciones, guía de configuración, FAQ, apps similares, CTA de aviso)
├── privacy.html         política de privacidad
├── terms.html            términos y condiciones
├── eula.html              acuerdo de licencia de usuario final
├── app.js                componentes Alpine.js (modo oscuro, menú móvil, modal de aviso, estrellas de GitHub, formulario de suscripción)
├── api/subscribe.js      función serverless de Vercel — añade correos electrónicos a Brevo
├── vercel.json            configuración de caché de assets
├── robots.txt             reglas de rastreo (páginas legales excluidas)
├── sitemap.xml            páginas indexables
├── assets/                iconos de la app + capturas de apps similares
└── api/.env.example      variables de entorno requeridas
```

## Páginas

**`index.html`** — landing de una sola página: hero, cuatro tarjetas de funciones (libreta de contactos, llamada `*99`, identificador de llamadas, atajos de asistente de voz), un breve texto sobre el porqué del nombre, una guía paso a paso para activar el identificador en iOS/Android (`#caller-id-setup`), FAQ, una sección de promoción cruzada **Apps similares** (otras apps del mismo autor), un CTA final de aviso, y un footer con enlaces legales y de comunidad (GitHub, Telegram, X). Realiza una petición en el cliente a `https://api.github.com/repos/albertolicea00/LlamaCon99` para mostrar el conteo de estrellas de GitHub en vivo en la navegación.

**`privacy.html` / `terms.html` / `eula.html`** — páginas legales estáticas, `noindex, follow` (excluidas de resultados de búsqueda pero aún enlazables/rastreables), cada una con su propia URL canónica y enlaces cruzados entre sí.

## Formulario "Avísame" / suscripción

`notifyForm()` en `app.js` envía un `{ email }` mediante `POST /api/subscribe` (`api/subscribe.js`, función serverless de Vercel), la cual añade la dirección a una lista de Brevo — utilizada para "notificar cuando la app llegue a la App Store". Requiere `BREVO_API_KEY` y `BREVO_LIST_ID` (consulta `api/.env.example`) — **este proyecto necesita su propia lista de Brevo**, separada de la de Qvacell y Banca Remota.

## SEO

`index.html` incluye un bloque JSON-LD `MobileApplication` y otro `FAQPage` que refleja el FAQ visible en la página (elegible para rich snippets de preguntas frecuentes), meta canonical/OG/Twitter, y `robots.txt` + `sitemap.xml` en la raíz. Las páginas legales se mantienen deliberadamente fuera del sitemap y marcadas como `noindex`.

## Desarrollo local

```bash
npx serve .
```

`api/subscribe.js` es una función serverless de Vercel — `npx serve` no la ejecutará. Usa `vercel dev` para probar el formulario de aviso localmente contra una lista real de Brevo.

## Despliegue

Push a `main` → Vercel despliega automáticamente. Añade las variables de entorno de `api/.env.example` en el panel de control de Vercel.

## Colores

| Token            | Hex       |                          |
| ---------------- | --------- | ------------------------ |
| `--color-navy`   | `#0f0f0f` | Primario (negro casi puro) |
| `--color-accent` | `#2AB78F` | Destacados en verde       |

Colores sólidos en todo el sitio — sin degradados. Los fondos en modo oscuro usan `rgb(10,10,10)` (no el `gray-950` por defecto de Tailwind, para evitar un tinte azulado).

## Más Aplicaciones

Otras aplicaciones del mismo autor, promocionadas de forma cruzada en la sección **Apps similares**:

- Qvacell — Lanzador de códigos USSD para operaciones de ETECSA (saldo, paquetes, transferencias). [iOS](https://github.com/albertolicea00/Qvacell-ios) · [Android](https://github.com/albertolicea00/Qvacell-apk).
- [Banca Remota](https://github.com/albertolicea00/BancaRemota) — Alternativa no oficial para iOS a las apps bancarias móviles de Cuba.
- Casero.cu — Clientes nativos para arrendadores cubanos que necesitan reportar huéspedes al portal oficial. [iOS](https://github.com/albertolicea00/casero.cu-ios) · [Android](https://github.com/albertolicea00/casero.cu-apk).

## Contribuir

Los issues, PRs y mensajes de commit deben estar en inglés.

---

*Parte del proyecto [Llama con 99](https://github.com/albertolicea00/LlamaCon99) por [Alberto Licea](https://www.linkedin.com/in/albertolicea00).*
