# DESIGN DOC — Flora ONG v3

**Proyecto:** Flora ONG — Sitio web v3  
**Fecha:** 2026-06-08  
**Fase:** THINK completada  
**Repo:** nqnguille/flora-ong  
**Dominio:** flora.ar  
**Stack:** Next.js 14  

---

## Lo que realmente se está construyendo

No es el sitio de una ONG. Es la primera puerta de entrada legítima al acceso al cannabis medicinal en Neuquén para personas que ya consumen pero viven en un limbo legal.

El usuario llega conociendo el mercado negro. Sale sabiendo que existe una alternativa legal, de calidad, sin culpa, con información real. El sitio hace una sola cosa: convertir a alguien que compra en negro en un asociado con derechos.

---

## El problema

**El gap que el Estado dejó abierto:**

REPROCANN habilita el autocultivo. No habilita compra ni venta. Para la persona que vive en un departamento, alquila, no tiene tiempo, no tiene conocimiento o simplemente no quiere cultivar, la única alternativa conocida hasta ahora era el mercado negro.

El mercado negro tiene tres problemas concretos:
1. Precio — más caro sin garantía de calidad
2. Información cero — no sabés qué estás fumando, de qué variedad, qué efectos esperar
3. Culpa y riesgo — familia preocupada, exposición legal, sin respaldo

Flora llena exactamente ese gap. Es legal porque opera como club de cultivo colectivo para asociados con REPROCANN. Nadie compra ni vende. El club cultiva, los asociados acceden.

---

## El usuario

Persona que fuma hace años (puede ser con fines medicinales documentados o sin documentar), tiene o puede tramitar REPROCANN, vive en Neuquén, y no puede o no quiere autocultivar. Acaba de enterarse que existe una vía legal. Está curiosa, con escepticismo razonable, y necesita entender si esto es real y cómo entrar.

**Una oración:** Mariana, 34 años, vive en un departamento en Neuquén capital, fuma desde los 22, tiene REPROCANN por ansiedad, compra en negro cada mes y quiere dejar de hacerlo.

---

## El dolor específico

Mariana gastó $40.000 pesos el mes pasado en algo sin etiqueta, sin variedad identificada, que puede o no tener lo que necesita. No sabe si lo que fuma es índica o sativa, ni el contenido de THC/CBD. No puede pedir factura. Y cada vez que lo lleva a casa siente que está haciendo algo mal aunque tenga REPROCANN.

---

## Propuesta de valor

> Flora es el club de cultivo de Neuquén para personas con REPROCANN que no pueden autocultivar. Accedés a cannabis de calidad documentada, con información real sobre cada variedad, a precio justo, dentro del marco legal. Sin mercado negro. Sin culpa.

**El outcome emocional clave:** saber exactamente qué estás fumando y elegirlo.

---

## Momento exacto del trigger

El usuario busca en Google "cannabis medicinal Neuquén legal" o "Flora ONG Neuquén" después de que alguien le contó que existe. Llega al sitio sin saber si esto es real, si es para ella, o si puede entrar. Tiene entre 45 y 90 segundos de atención.

---

## Lo que tiene que pasar para que diga "esto cambió mi vida"

1. Entiende en 10 segundos que esto es legal y es para alguien como ella
2. Ve que puede elegir variedades y saber qué está consumiendo
3. Entiende el proceso de asociación y no le parece complicado
4. Siente que hay personas reales detrás, no un trámite burocrático
5. Se asocia ese mismo día

---

## Scope del MVP

Landing page con un único objetivo de conversión: asociación.

**Secciones obligatorias:**
1. Hero — quiénes son + tagline + CTA principal
2. Para quién es (con REPROCANN, no pueden autocultivar) — no culpar al usuario, abrir la puerta
3. Cómo funciona — 3 pasos simples
4. Las variedades — esto es el diferencial; mostrar que hay información real, no anonimato
5. Legalidad — una sola sección que deje claro el marco jurídico sin abrumar
6. Cómo asociarse — proceso claro, CTA final

**Fuera del scope del MVP:**
- Portal de asociados autenticado
- Catálogo dinámico de variedades
- Blog / contenido
- Tienda o sistema de pedidos

---

## Alternativas de implementación

### Opción A — Landing estática en Next.js (recomendada)
**Descripción:** Página única con scroll, sin CMS, contenido hardcodeado, formulario de asociación que dispara a un webhook (Notion / email / Google Sheets).  
**Esfuerzo:** 3-4 días  
**Por qué:** Máxima velocidad de ship, mínima dependencia, deploy inmediato en Cloudflare Pages desde el repo existente. El contenido no cambia tan seguido como para necesitar CMS en MVP.  
**Riesgo:** Actualizar variedades requiere PR cada vez.

### Opción B — Next.js + Sanity CMS headless
**Descripción:** Igual que A pero las variedades y el equipo se gestionan desde un CMS visual.  
**Esfuerzo:** 6-8 días  
**Por qué:** Permite que el equipo de Flora actualice contenido sin tocar código. Justificado si las variedades rotan frecuente.  
**Riesgo:** Más complejidad de setup, costo de Sanity (aunque tiene free tier).

### Opción C — One-pager HTML puro en Cloudflare Pages
**Descripción:** HTML + CSS + JS vanilla, sin framework.  
**Esfuerzo:** 1-2 días  
**Por qué:** Ship inmediato. Ideal si el objetivo es validar el copy y la estructura antes de invertir en tech.  
**Riesgo:** Difícil de escalar. Si Flora crece a portal de asociados, hay que reescribir todo.

---

## Voz y tono

- Voseo argentino
- Oraciones cortas
- Autoridad tranquila — no panfletario, no corporativo
- Profesionalismo humano — hay personas reales detrás
- Cercanía sin juicio — el usuario viene del mercado negro, no lo juzgamos
- Tono de manifiesto, no de folleto

**Nunca:** "marihuana", framing recreativo, estética ilegal, "cura", "trata", "garantiza"

---

## Identidad visual (existente)

- Paleta: #F7F6EB (fondo crema) / #71CE6A (verde Flora) / #2D4239 (verde oscuro)
- Tipografía: Hanken Grotesk (UI) + EB Garamond (editorial)
- Tagline: "Cultivamos conciencia"
- Estética: flat design, sin gradientes, sin sombras decorativas

---

## Decisiones pendientes para PLAN

- ¿El formulario de asociación es in-page o redirige?
- ¿Necesita sección de testimonios en MVP?
- ¿Hay fotos reales del espacio / equipo disponibles?
- ¿Hay variedades actuales documentadas para mostrar en la landing?
