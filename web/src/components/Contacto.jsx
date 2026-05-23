import { useState } from 'react'

export default function Contacto() {
  const [form, setForm]       = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent]       = useState(false)
  const [fileName, setFileName] = useState(null)
  const [errors, setErrors]   = useState({})

  function validate() {
    const errs = {}
    if (!form.nombre.trim()) {
      errs.nombre = 'El nombre es obligatorio'
    }
    if (!form.email.trim()) {
      errs.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Introduce un email válido'
    }
    if (!form.mensaje.trim()) {
      errs.mensaje = 'El mensaje no puede estar vacío'
    }
    return errs
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSent(true)
  }

  function handleFile(e) {
    const file = e.target.files[0]
    if (file) setFileName(file.name)
  }

  const inputStyle = {
    background: 'rgba(57,255,106,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '3px',
    color: '#e2e8f0',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    padding: '0.625rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color .2s, background .2s, box-shadow .2s',
  }

  const errorStyle = {
    color: '#ff6b6b',
    fontSize: '0.7rem',
    marginTop: '0.375rem',
    fontFamily: 'var(--font-mono)',
  }

  function onFocus(e) {
    e.target.style.borderColor = 'rgba(57,255,106,0.5)'
    e.target.style.background  = 'rgba(57,255,106,0.05)'
    e.target.style.boxShadow   = '0 0 0 1px rgba(57,255,106,0.15)'
  }
  function onBlur(e) {
    e.target.style.borderColor = 'rgba(255,255,255,0.08)'
    e.target.style.background  = 'rgba(57,255,106,0.03)'
    e.target.style.boxShadow   = 'none'
  }

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="relative py-24 overflow-hidden">
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,106,0.15), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '20%', left: '15%',
          width: '40%', height: '40%',
          background: 'radial-gradient(ellipse, rgba(57,255,106,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}
          >
            // únete
          </p>
          <h2
            id="contacto-title"
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}
          >
            Contacto y Participación
          </h2>
          <p className="mt-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}>
            ¿Tienes una idea para un episodio o quieres participar?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div
            className="p-6 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
            }}
          >
            <h3
              className="text-sm font-semibold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.7)' }}
            >
              <span style={{ color: 'var(--green)' }}>$</span> enviar sugerencia
            </h3>

            <div aria-live="polite" aria-atomic="true">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ border: '1px solid rgba(57,255,106,0.4)', color: 'var(--green)' }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      Mensaje recibido
                    </p>
                    <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}>
                      te respondo lo antes posible
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ nombre: '', email: '', mensaje: '' }); setErrors({}) }}
                    className="text-xs transition-colors"
                    style={{ fontFamily: 'var(--font-mono)', color: 'rgba(57,255,106,0.6)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(57,255,106,0.6)'}
                  >
                    → enviar otro
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {[
                    { name: 'nombre',  label: 'nombre', type: 'text',  placeholder: 'tu nombre' },
                    { name: 'email',   label: 'email',  type: 'email', placeholder: 'tu@email.com' },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label
                        htmlFor={`field-${name}`}
                        className="block text-xs mb-1.5"
                        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}
                      >
                        <span style={{ color: 'var(--green)' }}>{'>'}</span> {label}
                      </label>
                      <input
                        id={`field-${name}`}
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        style={{ ...inputStyle }}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        aria-invalid={!!errors[name]}
                        aria-describedby={errors[name] ? `error-${name}` : undefined}
                      />
                      {errors[name] && (
                        <p id={`error-${name}`} role="alert" style={errorStyle}>
                          {errors[name]}
                        </p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="field-mensaje"
                      className="block text-xs mb-1.5"
                      style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}
                    >
                      <span style={{ color: 'var(--green)' }}>{'>'}</span> mensaje
                    </label>
                    <textarea
                      id="field-mensaje"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="tu idea para un episodio..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      aria-invalid={!!errors.mensaje}
                      aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
                    />
                    {errors.mensaje && (
                      <p id="error-mensaje" role="alert" style={errorStyle}>
                        {errors.mensaje}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 text-sm font-bold transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: 'var(--green)',
                      color: '#04060a',
                      borderRadius: '2px',
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    }}
                  >
                    $ enviar →
                  </button>
                </form>
              )}
            </div>
          </div>

          <div
            className="p-6 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
            }}
          >
            <h3
              className="text-sm font-semibold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.7)' }}
            >
              <span style={{ color: 'var(--green)' }}>$</span> subir grabación
            </h3>

            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.38)' }}>
              Grábate respondiendo a la pregunta del último episodio y manda el archivo.
              Los mejores audios aparecerán en el próximo programa.
            </p>

            <div
              className="p-4 mb-6"
              style={{
                background: 'rgba(57,255,106,0.04)',
                border: '1px solid rgba(57,255,106,0.15)',
                borderLeft: '2px solid var(--green)',
                borderRadius: '2px',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(57,255,106,0.6)' }}
              >
                pregunta EP.01
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                "¿Qué serie o película de tecnología te parece más realista y por qué?"
              </p>
            </div>

            <label className="block cursor-pointer">
              <div
                className="p-8 text-center transition-all duration-300"
                style={{
                  border: `2px dashed ${fileName ? 'rgba(57,255,106,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  background: fileName ? 'rgba(57,255,106,0.04)' : 'transparent',
                  borderRadius: '4px',
                }}
              >
                {fileName ? (
                  <div>
                    <p className="text-xs mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)' }}>
                      ✓ archivo listo
                    </p>
                    <p
                      className="text-sm font-medium truncate px-2"
                      style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.6)' }}
                    >
                      {fileName}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p
                      className="text-xs mb-1"
                      style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}
                    >
                      arrastra tu archivo aquí
                    </p>
                    <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.15)' }}>
                      MP3 · WAV · máx 10 MB
                    </p>
                  </div>
                )}
              </div>
              <input type="file" accept="audio/*" className="sr-only" onChange={handleFile} aria-label="Subir archivo de audio" />
            </label>

            {fileName && (
              <button
                className="w-full mt-4 py-3 text-sm font-bold transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--green)',
                  color: '#04060a',
                  borderRadius: '2px',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
              >
                $ enviar grabación →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
