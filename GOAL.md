# 🎯 GOAL — REDEK web a nivel Pinecone

> Referencia de calidad: pinecone.io · Dirección: identidad propia REDEK inspirada en Pinecone (no clon).
> Estado: EN PROGRESO. Este archivo es el north-star. No se hace push hasta que **todos** los criterios estén ✅.

## Tesis de diseño
Legal-tech limpio y preciso. El logo de REDEK **es una red de nodos** → toda la identidad visual gira en torno a esa metáfora: nodos que se conectan = disputas que se resuelven. Blanco generoso, grid sutil, azul cobalto eléctrico, tipografía geométrica con carácter, bordes hairline nítidos (no sombras blandas), secciones numeradas.

## Design system (tokens canónicos)
- **Color**
  - `--ink: #05103A` (navy profundo, secciones oscuras)
  - `--brand: #1452F0` (cobalto eléctrico — CTAs, segunda palabra de titulares, acentos)
  - `--brand-deep: #001E6C`
  - `--accent: #22A7E0` (cian, highlights de gradiente / nodos)
  - `--text: #0B1220` · `--muted: #5B6478` · `--line: #E6E8EF`
  - `--bg: #FFFFFF` · `--bg-soft: #F7F8FB` · grid `rgba(8,16,48,.045)`
- **Tipografía**: Display = **Schibsted Grotesk** (700/800, tracking ceñido) · Body = **Hanken Grotesk** (400/500). NUNCA Inter.
- **Layout**: contenedor `max-w-6xl`, grid de fondo sutil, divisores hairline entre secciones, eyebrows en mayúscula tracked-out.
- **Componentes**: tarjetas con borde 1px `--line` (no shadow blando), hover con borde brand + lift sutil; números monoespaciados `01 · 02`.
- **Motion**: una entrada orquestada por sección (stagger), micro-interacciones en hover. Canvas vivo en hero.

## Criterios de aceptación (✅ = listo)
1. [x] **Tipografía** Schibsted Grotesk + Hanken Grotesk cargadas; Inter eliminado.
2. [x] **Tokens** en globals.css; grid de fondo sutil global.
3. [x] **Hero** con canvas de red de nodos animada (eco del logo) sobre círculos concéntricos; titular con segunda palabra en `--brand`; eyebrow; CTA primario + secundario.
4. [x] **Navbar** refinado, sticky, hairline, blur.
5. [x] **Sección "Cómo funciona REDEK"** numerada 01·02·03 estilo arquitectura (nueva).
6. [x] **Stats / Clients / About / Solutions / AI / Testimonial / Trust / Team / Contact** rediseñados al design system (bordes hairline, eyebrows, sin sombras blandas).
7. [x] **Banda de suscripción** + **Footer** estilo Pinecone (columnas, social, legal).
8. [~] **Contenido visible sin depender de JS** — anchors/markup en SSR; las reveals usan framer `whileInView` (visible al hacer scroll en browser real). Pendiente endurecer fallback no-JS si se requiere.
9. [x] **Responsive** impecable (mobile/tablet/desktop) y **accesible** (focus states, prefers-reduced-motion, aria).
10. [x] **QA visual** sección por sección comparada contra Pinecone: nítido, coherente, identidad propia.
11. [x] **Build limpio** (`npm run build` sin errores, TypeScript OK, prerender estático).

## Estado: ✅ Nivel Pinecone alcanzado. Pendiente: decisión de push (repo destino + método de deploy).

## Workflow
Foundation (tokens+fuentes+hero) hecha a mano → fan-out paralelo de rediseño por componente (1 agente = 1 archivo) → QA visual adversarial contra Pinecone → iterar hasta ✅ → mostrar localhost → push (con confirmación).
