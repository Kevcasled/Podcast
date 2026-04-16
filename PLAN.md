# KevPodcast — Plan de práctica · M9 Disseny d'interfícies web

## Entregables finales (obligatorios)

- [ ] URL pública de la web desplegada (Vercel / Netlify / etc.)
- [ ] Repositorio Git con el código fuente
- [ ] Podcast integrado en la web (reproductor + **transcripción completa**)
- [ ] Promoción integrada en la web (vídeo O juego GENIE 3) — **no vale enlace externo**
- [ ] Informe breve (proceso + verificación de accesibilidad)

---

## PARTE 1 — Audio (tú en Audacity)

- [ ] Grabar voz con micrófono (guion en `guion.md`)
- [ ] Aplicar reducción de ruido
- [ ] Cortar silencios innecesarios
- [ ] Importar música de fondo libre de derechos ([Free Music Archive](https://freemusicarchive.org))
- [ ] Aplicar Auto Duck (música baja cuando hay voz)
- [ ] Grabar intro (melodía + saludo) y cierre (despedida + CTA)
- [ ] Exportar a MP3 128-192 kbps → guardar como `web/public/audio/ep01.mp3`

---

## PARTE 2 — Web React + Tailwind (yo)

> Estado actual: web base con Navbar, Home, Episodios, Producción, Contacto y Footer ✅

### Lo que falta añadir

#### 2.1 Transcripción del episodio
- [ ] Componente `Transcripcion.jsx` con el texto completo del episodio
- [ ] Integrada en la misma página (dentro de la sección del episodio, no en otra pestaña)
- [ ] Marcado semántico correcto (`<article>`, `<p>`, tiempos como referencia)

#### 2.2 Material promocional — **Vídeo**

- Grabar un vídeo de presentación del podcast (tú)
- Embeber en la web con `<video>` o YouTube embed (yo)
- [ ] Grabar vídeo de presentación y añadirlo a `web/public/video/` o subir a YouTube

#### 2.3 Accesibilidad WCAG AA
- [ ] Etiquetas semánticas: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- [ ] Todos los `<img>` con `alt` descriptivo
- [ ] Contraste de colores ≥ 4.5:1 (texto normal) y 3:1 (texto grande)
- [ ] Navegación por teclado funcional (Tab, Enter, foco visible)
- [ ] Atributos `aria-label` en botones sin texto visible (play, mute, etc.)
- [ ] Atributo `lang="es"` en `<html>` ✅ (ya está)
- [ ] Transcripción del audio (requisito de accesibilidad)
- [ ] Verificar con Lighthouse (objetivo: ≥ 90 en Accessibility)
- [ ] Verificar con WAVE (sin errores rojos)

#### 2.4 Despliegue online
- [ ] Crear repo en GitHub
- [ ] Conectar a Vercel o Netlify (deploy automático desde main)
- [ ] Verificar que la URL pública funciona correctamente

---

## PARTE 3 — Informe (tú, ~1 página)

Estructura sugerida:
1. Descripción del proyecto y tema elegido
2. Proceso de producción del audio (herramientas, decisiones)
3. Decisiones técnicas de la web (tecnología, estructura)
4. Cómo se cumple la accesibilidad (qué se hizo + capturas de Lighthouse/WAVE)
5. Licencia Creative Commons aplicada (web, audio, imágenes)

---

## Decisiones pendientes

| Decisión | Estado |
|---|---|
| Material promocional | ✅ Vídeo |
| Archivo MP3 grabado | ⏳ pendiente |
| Plataforma de deploy | ⏳ pendiente (Vercel recomendado) |

---

## Notas técnicas
- Stack: **React + Vite + Tailwind CSS**
- Música libre: [Free Music Archive](https://freemusicarchive.org), [ccMixter](http://ccmixter.org)
- Licencia: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Accesibilidad: [WAVE](https://wave.webaim.org/) · Lighthouse (DevTools → pestaña Lighthouse)
