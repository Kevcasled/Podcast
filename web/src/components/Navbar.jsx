import { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Inicio' },
  { href: '#episodios', label: 'Episodios' },
  { href: '#produccion', label: 'Producción' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-green-400 flex items-center justify-center text-gray-950 font-bold text-xs font-mono group-hover:scale-110 transition-transform">
            GL
          </span>
          <span className="text-white font-semibold tracking-tight">
            glitch<span className="text-green-400">.fm</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-green-400/10 text-green-400 font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-gray-300 hover:text-green-400 hover:bg-green-400/5 transition-all text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
