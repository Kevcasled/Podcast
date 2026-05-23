import { useState, useEffect } from 'react'

const links = [
  { href: '#home',      label: 'inicio',     cmd: '~/' },
  { href: '#episodios', label: 'episodios',  cmd: 'ep/' },
  { href: '#produccion',label: 'producción', cmd: 'prod/' },
  { href: '#contacto',  label: 'contacto',   cmd: 'msg/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'episodios', 'produccion', 'contacto']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b'
          : ''
      }`}
      style={{
        background: scrolled ? 'rgba(4,6,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderColor: 'rgba(57,255,106,0.1)',
      }}
    >
      <div className="flex items-center justify-between" style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px clamp(1.25rem, 5vw, 3rem)' }}>

        <a href="#home" className="flex items-center gap-3 group" aria-label="KevPodcast — inicio">
          <div
            className="w-8 h-8 flex items-center justify-center text-xs font-bold border"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--green)',
              borderColor: 'var(--green)',
              background: 'rgba(57,255,106,0.06)',
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
            }}
          >
            KP
          </div>
          <span
            className="font-display font-700 tracking-tight text-sm"
            style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
          >
            Kev<span style={{ color: 'var(--green)' }}>Podcast</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
          {links.map(({ href, label, cmd }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                className="group flex items-center gap-1 px-3 py-1.5 text-xs transition-all duration-200 rounded"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: isActive ? 'var(--green)' : 'rgba(255,255,255,0.75)',
                  background: isActive ? 'rgba(57,255,106,0.07)' : 'transparent',
                  border: isActive ? '1px solid rgba(57,255,106,0.2)' : '1px solid transparent',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span style={{ color: isActive ? 'var(--green)' : 'rgba(255,255,255,0.2)' }}>{cmd}</span>
                {label}
              </a>
            )
          })}
        </nav>

        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Menú móvil"
          className="md:hidden px-6 pb-4 flex flex-col gap-1 border-t"
          style={{ borderColor: 'rgba(57,255,106,0.1)', background: 'rgba(4,6,10,0.98)' }}
        >
          {links.map(({ href, label, cmd }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-xs border-b transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(255,255,255,0.05)',
              }}
            >
              <span style={{ color: 'var(--green)' }}>{cmd}</span>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
