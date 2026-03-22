import AudioPlayer from './AudioPlayer'

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
  { step: '01', title: 'Guion', desc: 'Investigo el tema y escribo un guion con los puntos principales, estimando unos 8-10 minutos de audio.' },
  { step: '02', title: 'Grabación', desc: 'Grabo con Audacity usando micrófono externo. Hago varias tomas y me quedo con la mejor.' },
  { step: '03', title: 'Edición', desc: 'Elimino ruidos de fondo, corto silencios y ajusto el volumen. Aplico Auto Duck para la música.' },
  { step: '04', title: 'Exportación', desc: 'Exporto a MP3 128-192 kbps con FFmpeg para optimizar el tamaño sin perder calidad audible.' },
]

const tools = [
  { name: 'Audacity', desc: 'Grabación y edición', icon: '🎚️' },
  { name: 'FFmpeg', desc: 'Optimización de audio', icon: '⚙️' },
  { name: 'Free Music Archive', desc: 'Música libre de derechos', icon: '🎵' },
  { name: 'Vite + React', desc: 'Frontend web', icon: '⚛️' },
  { name: 'Tailwind CSS', desc: 'Diseño responsive', icon: '🎨' },
]

export default function Episodios() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto w-full">

        {/* ── Episodios ── */}
        <div id="episodios" className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">Escuchar</p>
              <h2 className="text-3xl font-bold text-white">Episodios</h2>
            </div>
            <span className="text-gray-600 text-sm font-mono">{episodes.length} episodio{episodes.length !== 1 ? 's' : ''}</span>
          </div>

          <div className="flex flex-col gap-4">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-green-400/25 hover:bg-white/5 transition-all duration-300"
              >
                {/* Brillo al hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(74,222,128,0.04) 0%, transparent 70%)' }}
                />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Número episodio */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                    <span className="text-green-400 font-mono font-bold text-sm">0{ep.id}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-semibold text-lg">{ep.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{ep.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-gray-600 text-xs font-mono">{ep.date}</span>
                      <span className="text-gray-700">·</span>
                      <span className="text-gray-600 text-xs font-mono">{ep.duration}</span>
                      <span className="text-gray-700">·</span>
                      {ep.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Player */}
                  <div className="md:w-72 w-full flex-shrink-0">
                    <AudioPlayer src={ep.src} title={ep.title} duration={ep.duration} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Producción ── */}
        <div id="produccion">
          <div className="mb-10">
            <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">Detrás del micrófono</p>
            <h2 className="text-3xl font-bold text-white">Cómo se produce</h2>
          </div>

          {/* Pasos */}
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className="group flex gap-5 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-green-400/20 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-3xl font-black font-mono"
                    style={{
                      background: 'linear-gradient(135deg, #4ade80, #22d3ee)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Herramientas */}
          <h3 className="text-white font-semibold mb-5">Stack de producción</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 px-4 py-3 bg-white/3 border border-white/8 rounded-xl hover:border-green-400/25 hover:bg-white/5 transition-all cursor-default"
              >
                <span className="text-xl">{tool.icon}</span>
                <div>
                  <p className="text-white text-sm font-medium leading-none mb-0.5">{tool.name}</p>
                  <p className="text-gray-500 text-xs">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
