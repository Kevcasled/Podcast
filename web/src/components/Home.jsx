import AudioPlayer from './AudioPlayer'

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Fondo con gradientes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/5 rounded-full blur-3xl" />
        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">

        {/* Texto izquierda */}
        <div className="flex-1 text-left">
          <div className="animate-fade-up flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-green" />
            <span className="text-green-400 font-mono text-xs tracking-widest uppercase">
              Nuevo episodio disponible
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-4">
            <span className="text-white">Kev</span>
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #4ade80, #22d3ee)' }}
            >
              Podcast
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
            Tecnología sin filtros. Programación, ciberseguridad y cultura tech
            desde la perspectiva de alguien que todavía está aprendiendo.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-wrap gap-3 mb-10">
            {['Ciberseguridad', 'Series Tech', 'Programación', 'DAW'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:border-green-400/40 hover:text-green-400 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="animate-fade-up-delay-4 flex gap-3">
            <a
              href="#episodios"
              className="px-6 py-3 bg-green-400 text-gray-950 font-semibold rounded-xl hover:bg-green-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-400/20"
            >
              Escuchar ahora
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Participar
            </a>
          </div>
        </div>

        {/* Cover + reproductor derecha */}
        <div className="flex-1 w-full max-w-sm animate-fade-up-delay-2">
          {/* Cover art */}
          <div className="relative aspect-square rounded-2xl mb-4 overflow-hidden group">
            {/* Fondo con gradiente */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #0a1f0a 0%, #0d2b1d 50%, #0a1520 100%)' }}
            />
            {/* Patrón */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #4ade80 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Círculos decorativos */}
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full border border-green-400/20" />
            <div className="absolute top-12 left-12 w-24 h-24 rounded-full border border-green-400/15" />
            <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full border border-cyan-400/15" />
            {/* Contenido central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <p className="text-white font-bold text-lg tracking-tight">KevPodcast</p>
              <p className="text-gray-500 text-xs font-mono mt-1">EP.01 · 2026</p>
            </div>
            {/* Brillo superior */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
          </div>

          {/* Player */}
          <AudioPlayer
            src="/audio/ep01.mp3"
            title="EP.01 — ¿Es Mr. Robot real?"
            duration="9:42"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-600 text-xs font-mono">scroll</span>
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
