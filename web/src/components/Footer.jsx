export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 mt-auto">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-green-400 flex items-center justify-center text-gray-950 font-bold text-xs font-mono">KP</span>
            <span className="text-white font-semibold">
              Kev<span className="text-green-400">Podcast</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm text-gray-500">
            {['#home', '#episodios', '#produccion', '#contacto'].map((href) => (
              <a key={href} href={href} className="hover:text-green-400 transition-colors capitalize">
                {href.replace('#', '')}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 KevPodcast. Hecho con React + Tailwind.</p>
          <p>
            Bajo licencia{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-green-400/70 hover:text-green-400 transition-colors">
              CC BY 4.0
            </a>
            {' '}· Música:{' '}
            <a href="https://freemusicarchive.org" target="_blank" rel="noopener noreferrer" className="text-green-400/70 hover:text-green-400 transition-colors">
              Free Music Archive
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
