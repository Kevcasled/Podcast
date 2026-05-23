import AudioPlayer from './AudioPlayer'

export default function Home() {
  return (
    <section
      id="home"
      aria-label="Presentación"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 terminal-grid"
      style={{ overflowX: 'hidden' }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute"
          style={{
            top: '10%', left: '-10%',
            width: '60%', height: '70%',
            background: 'radial-gradient(ellipse, rgba(57,255,106,0.04) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '10%', right: '-5%',
            width: '40%', height: '50%',
            background: 'radial-gradient(ellipse, rgba(255,59,59,0.04) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(57,255,106,0.07) 30%, rgba(57,255,106,0.07) 70%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative w-full" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>

        <div className="anim-fade-up flex items-center gap-3 mb-10">
          <span
            className="w-2 h-2 rounded-full pulse-dot"
            style={{ background: 'var(--green)' }}
            aria-hidden="true"
          />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}
          >
            ./nuevo episodio disponible
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap' }}
          className="home-hero-row">

          <div className="flex-1" style={{ minWidth: 0 }}>

            <h1
              className="anim-delay-1 leading-none tracking-tighter mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              <span style={{ color: '#fff', display: 'block', marginBottom: '0.05em' }}>KEV</span>
              <span
                className="relative inline-block"
                style={{ color: 'var(--green)' }}
              >
                PODCAST
                <span
                  className="absolute -bottom-3 left-0"
                  style={{
                    width: '40%',
                    height: '3px',
                    background: 'var(--red)',
                    display: 'block',
                  }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p
              className="anim-delay-3 mt-8 text-base leading-relaxed max-w-sm"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}
            >
              Tecnología sin filtros. Programación, ciberseguridad y cultura tech
              desde la perspectiva de alguien que todavía está aprendiendo.
            </p>

            <div className="anim-delay-4 flex flex-wrap gap-2 mt-6 mb-10">
              {['Ciberseguridad', 'Series Tech', 'Programación', 'DAW'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 transition-colors duration-200 cursor-default"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255,255,255,0.65)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '2px',
                  }}
                >
                  #{tag.toLowerCase().replace(' ', '-')}
                </span>
              ))}
            </div>

            <div className="anim-delay-5 flex flex-wrap gap-3">
              <a
                href="#episodios"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--green)',
                  color: '#04060a',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
              >
                <span aria-hidden="true">▶</span> escuchar ahora
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm transition-all duration-200 hover:border-green-400/50"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'rgba(255,255,255,0.65)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '2px',
                }}
              >
                $ participar
              </a>
            </div>
          </div>

          <div className="anim-delay-3" style={{ width: '100%', maxWidth: '300px', flexShrink: 0, minWidth: 0 }}>

            <div
              className="relative aspect-square mb-4 overflow-hidden scanlines crt-glow"
              style={{
                background: 'linear-gradient(145deg, #080f08 0%, #0d1f0d 40%, #080d14 100%)',
                border: '1px solid rgba(57,255,106,0.2)',
                borderRadius: '4px',
              }}
              aria-hidden="true"
            >
              <div
                className="absolute left-0 right-0 pointer-events-none z-10"
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(57,255,106,0.4), transparent)',
                  animation: 'scan 3s linear infinite',
                }}
              />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(57,255,106,0.6) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div
                  className="w-20 h-20 flex items-center justify-center mb-4"
                  style={{
                    border: '1px solid rgba(57,255,106,0.4)',
                    background: 'rgba(57,255,106,0.06)',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                >
                  <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="rgba(57,255,106,0.6)" strokeWidth="1" />
                    <path d="M10 8l6 4-6 4V8z" fill="rgba(57,255,106,0.8)" />
                  </svg>
                </div>
                <p
                  className="font-display font-800 text-lg tracking-widest"
                  style={{ fontFamily: 'var(--font-display)', color: 'rgba(57,255,106,0.9)', letterSpacing: '0.15em' }}
                >
                  KEVPODCAST
                </p>
                <p
                  className="text-xs mt-1 tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(57,255,106,0.4)' }}
                >
                  EP_01 · 2026
                </p>

                <div className="absolute top-4 left-4 w-6 h-6" style={{ borderTop: '1px solid rgba(57,255,106,0.4)', borderLeft: '1px solid rgba(57,255,106,0.4)' }} />
                <div className="absolute top-4 right-4 w-6 h-6" style={{ borderTop: '1px solid rgba(57,255,106,0.4)', borderRight: '1px solid rgba(57,255,106,0.4)' }} />
                <div className="absolute bottom-4 left-4 w-6 h-6" style={{ borderBottom: '1px solid rgba(57,255,106,0.4)', borderLeft: '1px solid rgba(57,255,106,0.4)' }} />
                <div className="absolute bottom-4 right-4 w-6 h-6" style={{ borderBottom: '1px solid rgba(57,255,106,0.4)', borderRight: '1px solid rgba(57,255,106,0.4)' }} />
              </div>
            </div>

            <AudioPlayer
              src="/audio/ep01.mp3"
              title="EP.01 — ¿Es Mr. Robot real?"
              duration="9:42"
            />
          </div>
        </div>

        <div
          className="anim-delay-5 mt-16 pt-8 flex flex-wrap gap-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { label: 'episodios', value: '01' },
            { label: 'duración',  value: '9m 42s' },
            { label: 'temporada', value: '2026' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>
                {label}
              </p>
              <p className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.7)' }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>scroll</span>
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(57,255,106,0.3), transparent)' }}
        />
      </div>
    </section>
  )
}
