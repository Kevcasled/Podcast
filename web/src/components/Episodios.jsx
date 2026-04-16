import AudioPlayer from './AudioPlayer'
import Transcripcion from './Transcripcion'

const episodes = [
  {
    id: 1,
    title: '¿Es Mr. Robot real?',
    description: 'Analizamos la precisión técnica de Mr. Robot desde la perspectiva de un estudiante de DAW. Spoiler: da miedo lo real que es.',
    date: 'Marzo 2026',
    duration: '9:42',
    src: '/audio/ep01.mp3',
    tags: ['Ciberseguridad', 'Series', 'Hacking'],
  },
]

const steps = [
  { step: '01', title: 'Guion',       desc: 'Investigo el tema y escribo un guion con los puntos principales, estimando unos 8-10 minutos de audio.' },
  { step: '02', title: 'Grabación',   desc: 'Grabo con Audacity usando micrófono externo. Hago varias tomas y me quedo con la mejor.' },
  { step: '03', title: 'Edición',     desc: 'Elimino ruidos de fondo, corto silencios y ajusto el volumen. Aplico Auto Duck para la música.' },
  { step: '04', title: 'Exportación', desc: 'Exporto a MP3 128-192 kbps con FFmpeg para optimizar el tamaño sin perder calidad audible.' },
]

const tools = [
  { name: 'Audacity',           desc: 'Grabación y edición',      sym: 'AU' },
  { name: 'FFmpeg',             desc: 'Optimización de audio',    sym: 'FF' },
  { name: 'Free Music Archive', desc: 'Música libre de derechos', sym: 'MA' },
  { name: 'Vite + React',       desc: 'Frontend web',             sym: 'RC' },
  { name: 'Tailwind CSS',       desc: 'Diseño responsive',        sym: 'TW' },
]

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p
        className="text-xs tracking-[0.2em] uppercase mb-3"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}
      >
        // {eyebrow}
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
    </div>
  )
}

export default function Episodios() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Separador top */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,106,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>

        {/* ── EPISODIOS ── */}
        <div id="episodios" className="mb-28">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader eyebrow="escuchar" title="Episodios" />
            <span
              className="text-xs pb-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
            >
              {episodes.length} ep.
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {episodes.map((ep) => (
              <article
                key={ep.id}
                className="group relative p-6 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(57,255,106,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Línea verde izquierda */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'var(--green)' }}
                  aria-hidden="true"
                />

                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  {/* Número */}
                  <div
                    className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                    style={{
                      border: '1px solid rgba(57,255,106,0.2)',
                      background: 'rgba(57,255,106,0.04)',
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                    }}
                    aria-hidden="true"
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}
                    >
                      0{ep.id}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
                    >
                      {ep.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
                    >
                      {ep.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}
                      >
                        {ep.date}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}
                      >
                        {ep.duration}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                      {ep.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'rgba(57,255,106,0.6)',
                            border: '1px solid rgba(57,255,106,0.15)',
                            borderRadius: '2px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Player */}
                  <div className="w-full lg:w-64 flex-shrink-0 min-w-0">
                    <AudioPlayer src={ep.src} title={ep.title} duration={ep.duration} />
                  </div>
                </div>

                {/* Transcripción */}
                <Transcripcion episodeTitle={ep.title} />
              </article>
            ))}
          </div>
        </div>

        {/* ── PRODUCCIÓN ── */}
        <div id="produccion">
          <SectionHeader eyebrow="detrás del micrófono" title="Cómo se produce" />

          {/* Pasos */}
          <div className="grid md:grid-cols-2 gap-3 mb-14">
            {steps.map((item) => (
              <div
                key={item.step}
                className="group flex gap-5 p-5 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(57,255,106,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <span
                  className="flex-shrink-0 text-4xl font-black leading-none"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(57,255,106,0.2)' }}
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div>
                  <h4
                    className="font-semibold mb-1.5 transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.38)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}
          >
            $ stack --list
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 px-4 py-3 transition-all duration-200 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '4px',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(57,255,106,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <span
                  className="w-7 h-7 flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--green)',
                    border: '1px solid rgba(57,255,106,0.2)',
                    background: 'rgba(57,255,106,0.06)',
                    borderRadius: '2px',
                  }}
                  aria-hidden="true"
                >
                  {tool.sym}
                </span>
                <div>
                  <p className="text-sm font-medium leading-none mb-0.5" style={{ color: '#fff' }}>{tool.name}</p>
                  <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
