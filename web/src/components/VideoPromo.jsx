export default function VideoPromo() {
  // Cuando tengas el vídeo, pon la ruta aquí:
  // opción A — archivo local: src="/video/promo.mp4"
  // opción B — YouTube: cambia <video> por el iframe de abajo
  const localVideo = '/video/promo.mp4'
  const hasVideo = false // cambia a true cuando subas el archivo

  return (
    <section
      id="promo"
      className="relative py-24 overflow-hidden"
      aria-labelledby="promo-heading"
    >
      {/* Separador top */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,106,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>

        {/* Cabecera */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}
          >
            // presentacion
          </p>
          <h2
            id="promo-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}
          >
            Vídeo de presentación
          </h2>
        </div>

        {/* Contenedor del vídeo */}
        <div
          className="relative w-full"
          style={{
            border: '1px solid rgba(57,255,106,0.15)',
            borderRadius: '4px',
            overflow: 'hidden',
            background: 'rgba(0,0,0,0.4)',
            aspectRatio: '16/9',
          }}
        >
          {hasVideo ? (
            /* ── Opción A: vídeo local ── */
            <video
              controls
              preload="metadata"
              className="w-full h-full"
              style={{ display: 'block' }}
              aria-label="Vídeo de presentación del podcast Kev Podcast"
            >
              <source src={localVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de vídeo.
            </video>

            /* ── Opción B: YouTube embed (descomenta esto y comenta el bloque anterior) ──
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/TU_VIDEO_ID?rel=0"
              title="Vídeo de presentación del podcast Kev Podcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 'none', display: 'block' }}
            />
            */
          ) : (
            /* Placeholder hasta grabar el vídeo */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              role="img"
              aria-label="Espacio reservado para el vídeo de presentación"
            >
              {/* Icono */}
              <div
                className="w-16 h-16 flex items-center justify-center"
                style={{
                  border: '1px solid rgba(57,255,106,0.25)',
                  background: 'rgba(57,255,106,0.05)',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                }}
                aria-hidden="true"
              >
                <span style={{ fontSize: '1.5rem', color: 'rgba(57,255,106,0.5)' }}>▶</span>
              </div>

              <div className="text-center">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.5)' }}
                >
                  Vídeo próximamente
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
                >
                  {/* status: PENDING_RECORDING */}
                </p>
              </div>

              {/* Grid decorativo de fondo */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(57,255,106,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,106,0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* Descripción */}
        <p
          className="mt-5 text-sm leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)', maxWidth: '640px' }}
        >
          Una presentación breve del podcast: de qué va, por qué Mr. Robot, y qué puedes esperar de los próximos episodios.
        </p>

      </div>
    </section>
  )
}
