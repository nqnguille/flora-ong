# PLAN — Flora ONG v3

**Proyecto:** Flora ONG — Landing page de conversión v3  
**Fecha:** 2026-06-08  
**Approach:** Greenfield (create-next-app limpio, NO fork de flora-ong ni flora-v2)  
**Repo:** nqnguille/flora-ong  
**Stack:** Next.js 14 App Router + Tailwind CSS v4 + Framer Motion  
**Deploy:** Cloudflare Pages  
**Dominio:** flora.ar  

---

## Decisión de approach

**Opción elegida: Greenfield desde cero con create-next-app**

Razón: los repos anteriores (flora-ong, flora-v2) tienen deuda técnica y convenciones que limitarían la calidad del v3. Un greenfield limpio con Tailwind v4 disponible es la decisión correcta para un proyecto de esta escala (9 secciones, landing page de conversión, sin auth ni complejidad backend).

---

## Objetivo único del MVP

Una landing page de conversión. El único outcome que importa: que Mariana, 34 años, que llegó desde Google "cannabis medicinal Neuquén legal", entienda en 10 segundos que esto es para ella y se asocie ese mismo día.

Métrica de éxito: tasa de conversión de visitante a click en CTA de asociación.

---

## Las 9 secciones — Especificación completa

### Sección 1 — Navbar

**Job único:** orientar al usuario e invitar a la acción sin distraer.

**Contenido:**
- Logo Flora (texto o SVG, verde oscuro #2D4239) — izquierda
- Links: "Cómo funciona" / "Membresías" / "Legalidad" — centro, Hanken Grotesk 15px, #2D4239
- CTA: "Asociarse por WhatsApp" — botón #71CE6A, texto #2D4239, Hanken Grotesk 14px bold, sin border-radius excesivo (4-6px máximo)

**Comportamiento:**
- Sticky en scroll
- Background: #F7F6EB con border-bottom 1px #2D4239/10 al hacer scroll
- Mobile: hamburger menu, links en columna, CTA debajo de los links
- Links activos: underline en #71CE6A
- Sin shadows decorativos

---

### Sección 2 — Hero

**Job único:** convencer en 10 segundos que esto existe, es legal, y es para alguien como Mariana.

**Jerarquía de información (F1 → F4):**
1. F1 — Headline: **"Cultivamos conciencia."** — EB Garamond 72px (desktop) / 48px (mobile), #2D4239, sin bold (la fuerza viene del peso editorial del serif), line-height 1.0
2. F2 — Subheadline: "El primer club de cultivo de Neuquén para personas con REPROCANN. Cannabis de calidad documentada, dentro del marco legal." — Hanken Grotesk 20px (desktop) / 16px (mobile), #2D4239/70, max-width 560px
3. F3 — CTAs: Botón primario "Quiero asociarme" (#71CE6A, #2D4239 text, 48px height) + Botón secundario "Ver membresías" (outline #2D4239, same height). Gap entre botones: 12px. Alineación: izquierda (no centrado).
4. F4 — Stats row: 4 cifras en una fila. Cada stat: número grande (EB Garamond 36px, #71CE6A) + label (Hanken Grotesk 13px, #2D4239/60). Stats: "200+ asociados" / "Todo el país" / "2 años activos" / "100% legal".

**Layout:**
- Full-bleed, fondo #F7F6EB
- Foto: imagen naturaleza/cultivo como elemento de fondo parcial (lado derecho, desktop) o encima del texto (mobile). Clip-path o máscara para que no compita con el texto. NO imagen con texto encima.
- Mobile: columna, texto primero, imagen debajo, stats en 2x2 grid

**NO hacer:**
- Centrar el texto del hero (es lo más genérico que existe)
- Poner texto sobre imagen oscurecida
- Usar íconos junto a los stats

**Interacción:**
- CTAs: hover → escala 1.02, transición 150ms ease-out. No sombras.
- Stats: entrada con Framer Motion (stagger 0.1s desde izquierda, fade-in)

---

### Sección 3 — Cómo funciona

**Job único:** desmitificar el proceso. 3 pasos, pero NO el 3-column grid de íconos (patrón AI slop #2).

**Tratamiento anti-slop:**
En lugar de 3 cards con íconos de colores en círculos, usar una línea de tiempo horizontal con numeración tipográfica:
- Números grandes en EB Garamond: "01 / 02 / 03" en #71CE6A/40 (semitransparente, decorativo)
- Título del paso: Hanken Grotesk 18px bold, #2D4239
- Descripción: Hanken Grotesk 15px, #2D4239/70, max 2 líneas
- Conector visual entre pasos: línea horizontal simple de 1px #2D4239/20 (no flechas decorativas)

**Los 3 pasos:**
1. "Tramitás tu REPROCANN" — Si no tenés, te explicamos cómo. Si ya tenés, empezamos.
2. "Elegís tu membresía" — Tres opciones de acceso mensual. Sin contratos.
3. "Accedés a tu parte del cultivo" — Cannabis de variedad documentada, calidad verificada.

**Mobile:** columna, numeración arriba de cada paso, sin conector lateral

---

### Sección 4 — Por qué Flora

**Job único:** construir confianza con argumentos, no con diseño.

**Tratamiento anti-slop:**
En lugar de grid 5 cards simétricas con íconos, usar layout asimétrico:
- Headline sección: EB Garamond 48px "Sabés lo que fumás." — claim, no descripción
- 5 valores en lista de dos columnas (desktop) o una (mobile), separados por líneas horizontales finas
- Cada valor: título Hanken Grotesk 16px bold (uppercase, letter-spacing 0.05em) + descripción 14px 
- Sin íconos. Sin color de fondo por valor. La jerarquía viene de la tipografía.

**Los 5 valores:**
- **Documentado** — Cada variedad tiene nombre, porcentaje de cannabinoides, y efecto esperado. Sin sorpresas.
- **Legal** — Operamos bajo REPROCANN. Vos sos asociado, no comprador.
- **Calidad verificada** — Cultivo controlado, sin pesticidas, análisis de laboratorio disponibles.
- **Acompañamiento** — Equipo disponible por WhatsApp. Preguntas respondidas, sin juicio.
- **Comunidad** — Más de 200 personas en Neuquén que eligieron esta vía.

---

### Sección 5 — Membresías

**Job único:** hacer evidente cuál membresía es para quién, facilitar la decisión.

**Tratamiento anti-slop:**
Las 3 pricing cards son el layout más genérico de SaaS. Diferenciación:
- Fondo de sección: #2D4239 (oscuro) — quiebra el ritmo visual de la página
- Cards: fondo #F7F6EB (invierten el contraste de la sección)
- NO centradas. Layout offset: la card del medio levemente más alta (8px) — diferenciación sutil
- Precios: EB Garamond 48px para el número, Hanken Grotesk 13px para "/mes"

**Las 3 membresías (sin precios — D2 resuelta):**

| Nombre | Acceso mensual | Para quién |
|--------|---------------|------------|
| Semilla | 10g | Empezás, probás, conocés |
| Raíz | 20g | Uso regular, variedad garantizada |
| Cosecha | 40g | Uso intensivo, máxima flexibilidad |

- Sin precios en las cards. Los precios se consultan por WhatsApp.
- Badge en Raíz: "El más elegido" (Hanken Grotesk 11px uppercase)
- CTA por card: "Consultar por WhatsApp" → abre WhatsApp con mensaje pre-cargado específico por plan
- Texto final: "Podés cambiar de membresía en cualquier momento."

**Mobile:** columna, card "Raíz" primero (invertir el orden natural para destacar el recomendado)

---

### Sección 6 — Comunidad

**Job único:** hacer que el usuario sienta que hay personas reales, que el club existe, que no está solo.

**Contenido:**
- Foto real del espacio o del equipo (si existe) — horizontal, full-width, sin overlay
- Si no hay foto real: usar Higgsfield para generar imagen documental del cultivo
- Texto al lado (desktop) o debajo (mobile): quote editorial en EB Garamond italic 24px
  > "Ya no compro sin saber qué es. Eso cambia todo."
  — María, asociada desde 2024, Neuquén Capital
- Nombre y año en Hanken Grotesk 13px uppercase

**Anti-slop:** No testimonios en cards. No estrellas de rating. Un único quote con peso editorial.

---

### Sección 7 — Educación

**Job único:** demostrar que Flora tiene conocimiento real. No vender, informar.

**Tratamiento anti-slop:**
En lugar de 3 cards de blog idénticas, usar un layout editorial:
- Headline: Hanken Grotesk 13px uppercase "De nuestra guía" + EB Garamond 40px "Lo que querés saber antes de empezar."
- 3 artículos en fila pero con jerarquía: el primero tiene imagen y texto largo (2/3 del ancho), los dos siguientes son más compactos (1/3 del ancho)
- Títulos: EB Garamond 22px
- Fecha + tiempo de lectura: Hanken Grotesk 12px uppercase #2D4239/50

**Los 3 artículos:**
1. "Los mitos sobre el cannabis medicinal que frenan tu tratamiento" (con imagen)
2. "Guía completa para tramitar el REPROCANN"
3. "Índica vs Sativa: cómo elegir según tus objetivos"

**Mobile:** columna, los 3 artículos iguales

---

### Sección 8 — Legalidad

**Job único:** dejar claro el marco jurídico sin generar ansiedad. Responder antes de que lo pregunten.

**Contenido:**
- Badge REPROCANN: logo oficial (o representación textual si no hay SVG) + "Operamos bajo el marco del Decreto 883/2020"
- 4 afirmaciones legales en layout 2x2:
  1. "Ley 27.350 de cannabis medicinal vigente"
  2. "Asociados con REPROCANN válido"
  3. "Sin compraventa — acceso como socio"
  4. "Supervisión constante del marco regulatorio"
- Cada afirmación: checkmark tipográfico (no ícono) + Hanken Grotesk 15px
- Texto de cierre: "Si tenés dudas sobre tu situación legal, escribinos. Te explicamos sin compromiso."

**Anti-slop:** Sin icons en círculos de color. Sin cards. Layout en texto.

---

### Sección 9 — Footer

**Job único:** cerrar con dignidad, dar contacto, links legales.

**Contenido:**
- Fondo: #2D4239
- Texto: #F7F6EB
- Logo Flora — izquierda arriba
- Tagline: EB Garamond italic "Cultivamos conciencia." 
- Columna de contacto: WhatsApp + Instagram + Email
- Links legales: Aviso legal / Política de privacidad / Estatuto ONG
- Copyright: "© 2026 Flora ONG — Neuquén, Patagonia"
- Sin social media icons, solo texto con links

---

## Especificación del design system

### Tipografía (niveles explícitos)

| Nivel | Tipografía | Tamaño desktop | Tamaño mobile | Peso | Color |
|-------|-----------|----------------|---------------|------|-------|
| Display | EB Garamond | 72px | 48px | Regular (400) | #2D4239 |
| H2 sección | EB Garamond | 48px | 32px | Regular | #2D4239 |
| H3 artículo | EB Garamond | 22px | 20px | Regular | #2D4239 |
| Quote | EB Garamond Italic | 24px | 20px | Italic | #2D4239 |
| UI heading | Hanken Grotesk | 18px | 16px | Bold (700) | #2D4239 |
| Body | Hanken Grotesk | 16px | 15px | Regular (400) | #2D4239/70 |
| Label | Hanken Grotesk | 13px | 12px | Semibold (600), uppercase | #2D4239/60 |
| Micro | Hanken Grotesk | 12px | 11px | Regular | #2D4239/50 |

### Paleta (CSS variables)

```css
--color-bg: #F7F6EB;
--color-accent: #71CE6A;
--color-dark: #2D4239;
--color-dark-70: #2D4239B3;
--color-dark-60: #2D423999;
--color-dark-50: #2D423980;
--color-dark-20: #2D423933;
--color-dark-10: #2D42391A;
```

### Botones

| Tipo | Fondo | Texto | Border | Hover |
|------|-------|-------|--------|-------|
| Primario | #71CE6A | #2D4239 | none | scale(1.02), 150ms |
| Secundario | transparent | #2D4239 | 1.5px #2D4239 | background #2D4239/5 |
| Footer | transparent | #F7F6EB | 1.5px #F7F6EB | background #F7F6EB/10 |

Todos: border-radius 4px, height 48px (desktop) / 44px (mobile), padding 0 24px, font Hanken Grotesk 14px bold.

### Espaciado entre secciones

- Desktop: 96px padding vertical por sección
- Mobile: 64px padding vertical por sección
- Contenedor máximo: 1200px, padding horizontal 24px (mobile) / 80px (desktop)

### Animaciones (Framer Motion)

Solo 3 animaciones, ninguna decorativa:
1. **Entrada de secciones:** fade-in + translateY(20px → 0) en scroll, duración 0.4s, ease-out
2. **Stagger de stats:** delay 0.1s entre cada stat en el hero
3. **Hover en CTAs:** scale 1.02, 150ms ease-out (solo botones primarios)

**No usar:** parallax, rotaciones, keyframes complejos, animaciones en loop.

---

## Estados de interacción

| Elemento | Loading | Hover | Active/Pressed | Disabled | Error | Success |
|---------|---------|-------|----------------|----------|-------|---------|
| Botón CTA WhatsApp | — | scale 1.02 | scale 0.98 | opacity 0.5, cursor not-allowed | — | — |
| Links navbar | — | underline #71CE6A | — | — | — | — |
| Card membresía | — | border-color #71CE6A, 200ms | — | — | — | — |
| Formulario (si aplica) | spinner en botón | — | — | opacity 0.7 | border-red-500, mensaje debajo | checkmark verde, mensaje |

---

## Journey del usuario — Mapa emocional

| Paso | Usuario hace | Emoción objetivo | Qué elemento lo soporta |
|------|-------------|-----------------|-------------------------|
| 1 | Llega al sitio | "¿Esto es real?" | Hero: headline directo, sin hype |
| 2 | Lee el hero | "Esto habla de mí" | Subheadline menciona REPROCANN, departamento, sin autocultivar |
| 3 | Ve los stats | "Ya hay gente acá" | "200+ asociados", "2 años" |
| 4 | Lee Cómo funciona | "No parece complicado" | 3 pasos simples, sin jerga |
| 5 | Ve Por qué Flora | "Eso que siempre me molestó del mercado negro" | "Documentado" primero |
| 6 | Ve Membresías | "Puedo elegir" | 3 opciones claras, precios visibles |
| 7 | Lee Comunidad | "Hay personas reales" | Quote real, nombre real |
| 8 | Lee Legalidad | "Estoy protegida" | Marco legal claro, sin ansiedad |
| 9 | Llega al Footer | "¿Cómo arranco?" | WhatsApp visible, proceso claro |

---

## Diseño responsive

### Mobile (< 768px)

- Navbar: logo + hamburger. Menu: overlay sobre la página, fondo #2D4239, links en blanco
- Hero: columna. Texto primero (top), imagen debajo, stats en 2x2 grid
- Cómo funciona: columna, números grandes como separadores
- Por qué Flora: lista de 1 columna, separadores horizontales
- Membresías: columna, "Raíz" primero
- Comunidad: imagen arriba, quote abajo
- Educación: 3 artículos iguales en columna
- Legalidad: 2x2 grid de afirmaciones
- Footer: columna, centrado

### Tablet (768px - 1024px)

- Navbar: links visibles (sin hamburger)
- Hero: texto izquierda 55%, imagen derecha 45%
- Membresías: fila de 3 cards (ancho reducido)
- Educación: 1 artículo grande + 2 pequeños

### Desktop (> 1024px)

- Layout estándar como especificado por sección

---

## Accesibilidad

- Contraste mínimo: 4.5:1 para body text. #2D4239 sobre #F7F6EB = ~12:1. OK.
- Touch targets: mínimo 44x44px en todos los elementos clicables
- Navegación por teclado: focus-visible outline 2px #71CE6A en todos los elementos
- Imágenes: alt descriptivo en todas (no vacío)
- Landmark ARIA: `<header>`, `<main>`, `<footer>`, `<nav>` correctos
- Links del nav: `aria-current="page"` en la sección activa
- CTA de WhatsApp: aria-label "Contactar por WhatsApp para asociarse"

---

## Arquitectura técnica

### Stack completo

```
Next.js 14 App Router
├── Tailwind CSS v4 (utility-first, sin CSS custom salvo variables de design token)
├── Framer Motion (animaciones declarativas, solo 3 patrones)
├── TypeScript strict mode
└── next/font (Hanken Grotesk + EB Garamond desde Google Fonts, display=swap)
```

### Estructura de carpetas

```
/src
  /app
    layout.tsx          # RootLayout con fonts, metadata global
    page.tsx            # Página principal — ensambla las 9 secciones
    globals.css         # Variables CSS de design tokens
  /components
    /sections
      Navbar.tsx
      Hero.tsx
      ComoFunciona.tsx
      PorQueFlora.tsx
      Membresias.tsx
      Comunidad.tsx
      Educacion.tsx
      Legalidad.tsx
      Footer.tsx
    /ui
      Button.tsx        # Componente botón con variantes (primario/secundario/footer)
      SectionWrapper.tsx # Container + padding + scroll animation
  /lib
    constants.ts        # Copy, precios, stats — nunca hardcodeado en componentes
    types.ts
  /public
    /images             # Imágenes optimizadas en WebP
```

### Flujo de datos

```
page.tsx
    └── ensambla secciones en orden
    └── no hay fetch en MVP (todo es estático)
    └── CTAs de WhatsApp → window.open con URL pre-construida

WhatsApp URL format:
wa.me/5492994000000?text=Hola%20Flora%2C%20quiero%20información%20sobre%20membresías
```

### SEO (obligatorio)

```typescript
// app/layout.tsx
export const metadata = {
  title: 'Flora ONG — Club de cultivo medicinal en Neuquén',
  description: 'Primera ONG de cannabis medicinal en Neuquén. Accedé a cannabis de calidad documentada dentro del marco legal REPROCANN.',
  openGraph: { /* completo */ },
  twitter: { /* completo */ },
  robots: 'index, follow',
}
```

- Schema.org JSON-LD: Organization + LocalBusiness
- sitemap.xml generado por next-sitemap
- robots.txt
- Canonical URL

### Deploy — Cloudflare Pages

```bash
# Configuración wrangler.toml
name = "flora-ong"
compatibility_date = "2026-06-01"
pages_build_output_dir = ".next"

# Build command: next build
# Output directory: .next
# Node version: 20
```

El repo nqnguille/flora-ong ya existe. El greenfield se inicializa en la carpeta local y se pushea a ese repo.

---

## Diagrama ASCII — Flujo de datos completo

```
Browser
   │
   ▼
Cloudflare Pages CDN
   │
   ▼
Next.js 14 Static Export (SSG)
   │
   ├── / (página principal)
   │    └── 9 secciones como componentes React
   │         └── Todo el contenido en constants.ts
   │              (copy, precios, stats, steps)
   │
   └── /api (no hay en MVP)

CTAs de asociación:
   Browser click → wa.me URL → WhatsApp app/web
   (no hay backend, no hay formulario en MVP)
```

---

## Casos borde

| Escenario | Comportamiento esperado | Implementación |
|-----------|------------------------|----------------|
| WhatsApp no instalado (desktop) | Abre web.whatsapp.com | `target="_blank"` en `wa.me` link — WhatsApp lo maneja |
| Imagen de hero no carga | Fondo crema sólido + texto igual de legible | Alt text, sin dependencia visual del texto en la imagen |
| Font EB Garamond no carga | Font-display: swap → sistema serif como fallback | `next/font` con `display: 'swap'` |
| JavaScript deshabilitado | Sitio completamente legible | SSG, no hay contenido JS-only. Animaciones: no esenciales |
| Pantalla muy ancha (>1600px) | Contenido centrado, no se estira | `max-width: 1200px; margin: 0 auto` en SectionWrapper |
| Precio en ARS se desactualiza | Copy desactualizado visible | Precios en constants.ts para actualización fácil |

---

## Superficie de error — Qué puede romper en producción

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| URL de WhatsApp incorrecta (número equivocado) | Media | Alto — el CTA principal falla | Constante `WHATSAPP_NUMBER` en constants.ts, testear antes del deploy |
| Imagen de hero muy pesada → LCP alto | Alta | Medio — SEO y UX | next/image con width/height explícitos, formato WebP, lazy loading |
| EB Garamond no disponible en next/font | Baja | Bajo — fallback a serif | Testear con throttling de red |
| Precios en ARS desactualizados | Alta (con tiempo) | Medio — loss of trust | Solo en constants.ts, cambio en 2 líneas |
| Deploy Cloudflare Pages falla silenciosamente | Baja | Alto | Verificar URL pública después de cada deploy |

---

## Matriz de tests

| Test | Tipo | Qué verifica |
|------|------|-------------|
| Renderizado de las 9 secciones | Visual (QA manual) | Todas las secciones presentes en DOM |
| CTA WhatsApp funciona | Manual | URL wa.me se abre correctamente |
| Responsive 375px | Visual (QA) | Navbar hamburger, texto legible, no overflow |
| Responsive 768px | Visual (QA) | Layout tablet correcto |
| LCP < 2.5s | Lighthouse | Core Web Vitals |
| CLS < 0.1 | Lighthouse | Estabilidad visual con fonts |
| Contraste AA | Axe / Lighthouse | Accesibilidad |
| Alt text presente | Axe | Accesibilidad |
| metadata SEO | Revisión manual del `<head>` | title, description, OG tags |
| Links del nav funcionan | Manual | Smooth scroll a secciones |

---

## Decisiones resueltas — 2026-06-08

### D1 — Formulario de asociación

**RESUELTO: WhatsApp directo.**

Todos los CTAs de "Hacete socio" o "Asociarse" abren WhatsApp directo al número de Flora. No hay formulario en el MVP. URL: `https://wa.me/5492996375723`

Mensaje pre-cargado por CTA:
- Navbar/Hero: `Hola Flora, quiero información para asociarme.`
- Card Semilla: `Hola Flora, me interesa la membresía Semilla (10g/mes). ¿Cómo me asocio?`
- Card Raíz: `Hola Flora, me interesa la membresía Raíz (20g/mes). ¿Cómo me asocio?`
- Card Cosecha: `Hola Flora, me interesa la membresía Cosecha (40g/mes). ¿Cómo me asocio?`

### D1b — Alcance del servicio

**RESUELTO: Alcance NACIONAL con envío gratis a todo el país.**

El hero y el copy general deben reflejar que Flora llega a todo Argentina, no solo a Neuquén. La stat de alcance cambia de localismo a nacional. El subheadline no menciona únicamente Neuquén.

### D2 — Precios en la sección de membresías

**RESUELTO: La sección Membresías NO muestra precios. CTA a WhatsApp para consultar.**

- Las 3 opciones (10g / 20g / 40g) se muestran con nombre y descripción
- Sin precios en las cards de membresías
- CTA de cada card: "Consultar por WhatsApp" → abre WA con mensaje pre-cargado
- Los precios SÍ se muestran para productos derivados (aceites, cremas) si hay una sección dedicada en el futuro. No en este MVP.

### D3 — Fotos

**RESUELTO: Fotos de Pexels (URLs directas). El usuario sube las fotos reales después del MVP.**

Usar `next/image` con URLs de Pexels. Seleccionar imágenes de cultivo documentales, naturaleza verde, comunidad — nunca estética de cannabis brand recreativa.

### D4 — Número de WhatsApp

**RESUELTO: +54 9 299 6375723**

URL de WhatsApp en todo el sitio: `https://wa.me/5492996375723`
Contacto de email: `hola@floraong.org`

---

## NOT in scope (Flora v3 MVP)

| Item | Razón del defer |
|------|----------------|
| Portal de asociados autenticado | Complejidad de auth innecesaria en MVP de conversión |
| Catálogo dinámico de variedades | No hay datos suficientes, CMS innecesario |
| Página de variedades separada | Out of scope del MVP, mencionado en DESIGN_DOC |
| Blog / contenido editorial | La sección Educación es suficiente para MVP |
| Sistema de pedidos o tienda | Modelo es club, no tienda. Legalmente incorrecto. |
| Internacionalización | Neuquén-first, en castellano. |
| Analytics avanzados (eventos de conversión) | Placeholder GA4, setup completo post-launch |
| Tests automatizados E2E | QA manual en MVP, E2E para v4 |
| CMS (Sanity/Contentful) | Opción B del DESIGN_DOC, deferred para cuando el equipo quiera editar sin PR |

---

## Qué ya existe y reusar

- **Identidad visual:** definida en DESIGN_DOC.md — paleta, tipografía, voz
- **Repo:** nqnguille/flora-ong existe en GitHub, usar como destino del push
- **Cloudflare Pages:** ya configurado en la cuenta, asociar al repo existente
- **Dominio:** flora.ar (verificar configuración DNS en Cloudflare)
- **Componentes 21st.dev:** usar para navbar, pricing cards, footer — adaptar a la identidad de Flora

---

## TODOS deferred

| Todo | Prioridad | Por qué defer |
|------|-----------|--------------|
| DESIGN.md — crear sistema de diseño formal | Media | El PLAN.md tiene especificación suficiente para MVP |
| E2E tests con Playwright | Baja | Manual QA suficiente en MVP |
| CMS para precios y variedades | Media | Actualizar constants.ts es viable en corto plazo |
| Analytics eventos de conversión (click CTA) | Alta | Implementar en semana 2 post-launch |
| Página /asociarse con formulario completo | Media | Tras validar conversión por WhatsApp |

---

## Estimación de esfuerzo

| Fase | Tarea | Esfuerzo humano | Con CC+gstack |
|------|-------|----------------|---------------|
| BUILD 3a | create-next-app + setup Tailwind v4 + fonts | 30min | 5min |
| BUILD 3b | Navbar + Hero | 1 día | 20min |
| BUILD 3b | ComoFunciona + PorQueFlora + Legalidad | 1 día | 20min |
| BUILD 3b | Membresías + Comunidad + Educación + Footer | 1 día | 20min |
| BUILD 3b | Responsive + Framer Motion | 1 día | 15min |
| BUILD 3b | SEO + metadata + schema.org | 2h | 10min |
| BUILD 3c | Higgsfield assets (si no hay fotos reales) | 1h | 30min |
| TEST | QA manual + Lighthouse | 2h | 15min |
| SHIP | Deploy Cloudflare Pages + DNS | 1h | 10min |
| **TOTAL** | | **~5-6 días** | **~2h con CC** |

---

## Checklist antes de buildear

- [x] D1 resuelta: WhatsApp directo → wa.me/5492996375723
- [x] D1b resuelta: alcance nacional, envío gratis a todo el país
- [x] D2 resuelta: Membresías sin precio, productos derivados con precio
- [x] D3 resuelta: fotos de Pexels (URLs directas), fotos reales post-MVP
- [x] D4 resuelta: +5492996375723 → https://wa.me/5492996375723
- [x] PLAN.md aprobado por Guillermo

---

## GSTACK REVIEW REPORT

| Review | Trigger | Por qué | Runs | Status | Findings |
|--------|---------|---------|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & estrategia | 1 | CLEAR | Greenfield aprobado, scope MVP confirmado |
| Design Review | `/plan-design-review` | Gaps UI/UX | 1 | CLEAR (PLAN) | score: 4/10 → 9/10, 12 decisiones de diseño añadidas |
| Eng Review | `/plan-eng-review` | Arquitectura & tests (required) | 1 | CLEAR (PLAN) | 0 issues críticos, 5 casos borde documentados, superficie de error mapeada |
| Codex Review | `/codex review` | Segunda opinión independiente | 0 | — | — |
| DX Review | `/plan-devex-review` | Developer experience | 0 | — | — |

**UNRESOLVED:** 4 decisiones pendientes (D1-D4) — requieren respuesta antes de BUILD

**VERDICT:** CEO + DESIGN + ENG CLEARED — 4 decisiones pendientes antes de iniciar BUILD
