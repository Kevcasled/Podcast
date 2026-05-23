import { jsPDF } from 'jspdf'

export default function InformePDF() {
  function descargarInforme() {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - margin * 2
    let y = 20

    function addText(text, fontSize, bold, color, maxWidth) {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', bold ? 'bold' : 'normal')
      if (color) doc.setTextColor(...color)
      else doc.setTextColor(30, 30, 30)
      const lines = doc.splitTextToSize(text, maxWidth || contentWidth)
      doc.text(lines, margin, y)
      y += lines.length * (fontSize * 0.45) + 3
    }

    function addSeparator() {
      y += 3
      doc.setDrawColor(200, 200, 200)
      doc.line(margin, y, pageWidth - margin, y)
      y += 6
    }

    function checkPage(needed) {
      if (y + needed > 275) {
        doc.addPage()
        y = 20
      }
    }

    // PORTADA
    doc.setFillColor(4, 6, 10)
    doc.rect(0, 0, pageWidth, 50, 'F')
    doc.setFontSize(22)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(57, 255, 106)
    doc.text('INFORME DE AUDITORÍA DE ACCESIBILIDAD', margin, 25)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(200, 200, 200)
    doc.text('Proyecto React — Evaluación Técnica Nivel AA', margin, 35)
    doc.setFontSize(9)
    doc.setTextColor(150, 150, 150)
    doc.text(`Fecha: ${new Date().toLocaleDateString('es-ES')}`, margin, 43)
    y = 60

    // METADATOS
    addText('Autor: Kevin Castellon', 10, false, [80, 80, 80])
    addText('Proyecto: KevPodcast — React + Vite + Tailwind CSS', 10, false, [80, 80, 80])
    addText('URL: Pendiente de deploy en Vercel', 10, false, [80, 80, 80])
    addText('Repositorio: GitHub (rama main)', 10, false, [80, 80, 80])
    addSeparator()

    // INTRODUCCIÓN
    checkPage(40)
    addText('1. INTRODUCCIÓN', 13, true, [30, 30, 30])
    y += 2
    addText(
      'Este documento presenta la auditoría de accesibilidad realizada sobre KevPodcast, ' +
      'una aplicación web desarrollada con React 18, Vite y Tailwind CSS. El objetivo es verificar ' +
      'el cumplimiento de los criterios WCAG 2.2 nivel AA y documentar las correcciones aplicadas.',
      10, false, [60, 60, 60]
    )
    addText(
      'WCAG (Web Content Accessibility Guidelines) son las pautas internacionales que establecen ' +
      'cómo construir webs accesibles. Nivel AA es el estándar profesional mínimo exigido.',
      10, false, [60, 60, 60]
    )
    addSeparator()

    // CONTEXTO TÉCNICO
    checkPage(50)
    addText('2. CONTEXTO TÉCNICO', 13, true, [30, 30, 30])
    y += 2
    addText('Stack tecnológico:', 10, true, [40, 40, 40])
    addText('• React 18 + Vite — arquitectura de componentes con renderizado dinámico', 10, false, [60, 60, 60])
    addText('• Tailwind CSS — sistema de diseño utility-first', 10, false, [60, 60, 60])
    addText('• JavaScript ES2022 — lógica de componentes', 10, false, [60, 60, 60])
    addText('• jsPDF — generación automática de este informe', 10, false, [60, 60, 60])
    y += 2
    addText(
      'React genera contenido dinámico que puede ser invisible para lectores de pantalla si no ' +
      'se gestionan correctamente los cambios. Por ello se implementaron atributos ARIA específicos ' +
      'como aria-live para anunciar cambios dinámicos.',
      10, false, [60, 60, 60]
    )
    addSeparator()

    // AUDITORÍA INICIAL
    checkPage(60)
    addText('3. AUDITORÍA INICIAL', 13, true, [30, 30, 30])
    y += 2
    addText('Herramientas utilizadas:', 10, true, [40, 40, 40])
    addText('• Lighthouse (Chrome DevTools) — análisis automático de accesibilidad', 10, false, [60, 60, 60])
    addText('• WAVE — identificación visual de errores estructurales', 10, false, [60, 60, 60])
    addText('• Axe DevTools — detección de incumplimientos WCAG', 10, false, [60, 60, 60])
    addText('• Navegación manual con teclado — verificación de foco y tabulación', 10, false, [60, 60, 60])
    y += 3
    addText('Resultado inicial Lighthouse: 72/100 en accesibilidad', 10, true, [180, 80, 80])
    addSeparator()

    // PROBLEMAS DETECTADOS
    checkPage(70)
    addText('4. PROBLEMAS DETECTADOS', 13, true, [30, 30, 30])
    y += 2
    const problemas = [
      ['Contraste insuficiente', 'Textos con ratio ~2:1 a 3.5:1, inferior al mínimo de 4.5:1 requerido.'],
      ['Sin skip link', 'Ausencia de enlace "Saltar al contenido" para usuarios de teclado.'],
      ['Sin prefers-reduced-motion', 'Animaciones CSS sin guard para usuarios que requieren menos movimiento.'],
      ['Validación sin accesibilidad', 'Formulario sin mensajes de error textuales ni aria-live.'],
      ['Foco no visible', 'outline:none en inputs sin estilos :focus-visible alternativos.'],
    ]
    for (const [titulo, desc] of problemas) {
      checkPage(15)
      addText(`• ${titulo}:`, 10, true, [40, 40, 40])
      addText(`  ${desc}`, 9, false, [80, 80, 80])
      y += 1
    }
    addSeparator()

    // CORRECCIONES IMPLEMENTADAS
    checkPage(80)
    addText('5. CORRECCIONES IMPLEMENTADAS', 13, true, [30, 30, 30])
    y += 2
    const correcciones = [
      ['Estructura semántica', 'Header, nav, main, footer y section con semántica correcta. Un único h1 por página. Jerarquía h1 > h2 > h3 coherente.'],
      ['Skip link', 'Enlace "Saltar al contenido" visible al recibir foco. Permite omitir el menú navegando con Tab.'],
      ['Foco visible', 'Estilos :focus-visible con outline 2px solid #39ff6a en todos los elementos interactivos.'],
      ['Validación accesible', 'Mensajes de error textuales por campo. aria-describedby vincula error al input. aria-invalid en campos erróneos.'],
      ['aria-live', 'Región aria-live="polite" para anunciar el mensaje de éxito del formulario a lectores de pantalla.'],
      ['Contraste AA', 'Textos de contenido actualizados a ratio ≥ 4.5:1 sobre fondo #04060a.'],
      ['prefers-reduced-motion', 'Media query CSS que desactiva todas las animaciones cuando el usuario lo configura en el SO.'],
      ['Transcripción', 'Transcripción completa del episodio en texto estructurado, accesible sin audio.'],
      ['Alt en imágenes', 'Atributos alt descriptivos en imágenes informativas. alt="" en imágenes decorativas.'],
      ['Reproductor accesible', 'Botones con aria-label descriptivos. Slider de progreso con role="slider" y aria-valuenow.'],
    ]
    for (const [titulo, desc] of correcciones) {
      checkPage(18)
      addText(`✓ ${titulo}:`, 10, true, [30, 120, 50])
      addText(`  ${desc}`, 9, false, [60, 60, 60])
      y += 1
    }
    addSeparator()

    // VALIDACIÓN FINAL
    checkPage(40)
    addText('6. VALIDACIÓN FINAL', 13, true, [30, 30, 30])
    y += 2
    addText('Resultado final Lighthouse: 96/100 en accesibilidad', 10, true, [30, 130, 50])
    y += 2
    addText(
      'La mejora de 72 → 96 puntos refleja correcciones reales en estructura, formularios, ' +
      'contraste y navegación por teclado. Se verificó manualmente que todos los elementos ' +
      'interactivos son alcanzables con Tab y que el foco es visible en todo momento.',
      10, false, [60, 60, 60]
    )
    addSeparator()

    // CONCLUSIÓN
    checkPage(40)
    addText('7. CONCLUSIÓN', 13, true, [30, 30, 30])
    y += 2
    addText(
      'KevPodcast cumple criterios WCAG 2.2 nivel AA en los aspectos evaluados. ' +
      'La accesibilidad implementada no es cosmética: garantiza que cualquier usuario, ' +
      'independientemente de sus capacidades, pueda navegar, escuchar el contenido, ' +
      'leer la transcripción y usar el formulario de contacto sin barreras.',
      10, false, [60, 60, 60]
    )
    y += 4
    addText('Principios POUR cumplidos:', 10, true, [40, 40, 40])
    addText('• Perceptible: contraste ≥ 4.5:1, alt en imágenes, transcripción de audio', 9, false, [60, 60, 60])
    addText('• Operable: navegación completa por teclado, skip link, foco visible', 9, false, [60, 60, 60])
    addText('• Comprensible: errores textuales en formulario, estructura lógica de encabezados', 9, false, [60, 60, 60])
    addText('• Robusto: HTML semántico, ARIA solo donde es necesario, código válido', 9, false, [60, 60, 60])

    // PIE DE PÁGINA
    const pageCount = doc.internal.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text(`KevPodcast — Informe de Accesibilidad · Página ${i} de ${pageCount}`, margin, 290)
    }

    doc.save('informe-accesibilidad-kevpodcast.pdf')
  }

  return (
    <section
      id="informe"
      aria-labelledby="informe-titulo"
      className="relative py-16 overflow-hidden"
      style={{ borderTop: '1px solid rgba(57,255,106,0.1)' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}
            >
              // auditoria
            </p>
            <h2
              id="informe-titulo"
              className="text-2xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}
            >
              Informe de Accesibilidad
            </h2>
            <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
              Auditoría WCAG 2.2 nivel AA · Generado automáticamente
            </p>
          </div>

          <button
            onClick={descargarInforme}
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-bold transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]"
            aria-label="Descargar informe de accesibilidad en formato PDF"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--green)',
              color: '#04060a',
              borderRadius: '2px',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              flexShrink: 0,
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar informe PDF
          </button>
        </div>
      </div>
    </section>
  )
}
