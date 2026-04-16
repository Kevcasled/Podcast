export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative py-10 mt-auto"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">

          {/* Logo + prompt */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-7 h-7 flex items-center justify-center text-xs font-bold"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--green)',
                  border: '1px solid var(--green)',
                  background: 'rgba(57,255,106,0.06)',
                  clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))',
                }}
                aria-hidden="true"
              >
                KP
              </div>
              <span
                className="font-bold text-sm"
                style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
              >
                Kev<span style={{ color: 'var(--green)' }}>Podcast</span>
              </span>
            </div>
            <p
              className="text-xs cursor-blink"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}
            >
              kev@podcast:~$
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: '#home',       label: 'inicio' },
              { href: '#episodios',  label: 'episodios' },
              { href: '#produccion', label: 'producción' },
              { href: '#contacto',   label: 'contacto' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs transition-colors duration-150"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >
                ./{label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div
          className="mb-6 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }}
          aria-hidden="true"
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>
            © {year} KevPodcast — React + Vite + Tailwind CSS
          </p>
          <p className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)' }}>
            Bajo licencia{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(57,255,106,0.5)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(57,255,106,0.5)'}
            >
              CC BY 4.0
            </a>
            {' '}· Música:{' '}
            <a
              href="https://freemusicarchive.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(57,255,106,0.5)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(57,255,106,0.5)'}
            >
              Free Music Archive
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
