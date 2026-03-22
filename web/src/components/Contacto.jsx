import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [fileName, setFileName] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  function handleFile(e) {
    const file = e.target.files[0]
    if (file) setFileName(file.name)
  }

  return (
    <section id="contacto" className="relative px-6 py-24 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-1/2 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">Únete</p>
          <h2 className="text-3xl font-bold text-white">Contacto y Participación</h2>
          <p className="text-gray-400 mt-2">¿Tienes una idea para un episodio o quieres participar?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Formulario */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-green-400/15 transition-all duration-300">
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center text-sm">✉️</span>
              Envía una sugerencia
            </h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold">¡Mensaje recibido!</p>
                <p className="text-gray-400 text-sm mt-1">Te respondo lo antes posible.</p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: '', email: '', mensaje: '' }) }}
                  className="mt-5 text-green-400 text-sm hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-gray-400 text-xs mb-1.5 font-medium uppercase tracking-wide">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400/50 focus:bg-white/8 transition-all text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium uppercase tracking-wide">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tu idea para un episodio..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400/50 focus:bg-white/8 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-gray-950 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-400/15"
                  style={{ background: 'linear-gradient(135deg, #4ade80, #22d3ee)' }}
                >
                  Enviar sugerencia
                </button>
              </form>
            )}
          </div>

          {/* Upload grabación */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-green-400/15 transition-all duration-300">
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center text-sm">🎙️</span>
              Manda tu grabación
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Grábate respondiendo a la pregunta del último episodio y manda el archivo.
              Los mejores audios aparecerán en el próximo programa.
            </p>

            {/* Pregunta del episodio */}
            <div className="bg-green-400/5 border border-green-400/15 rounded-xl p-4 mb-6">
              <p className="text-green-400 text-xs font-mono uppercase tracking-wide mb-1">Pregunta EP.01</p>
              <p className="text-white text-sm leading-relaxed">
                "¿Qué serie o película de tecnología te parece más realista y por qué?"
              </p>
            </div>

            {/* Drop zone */}
            <label className="block cursor-pointer">
              <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                fileName
                  ? 'border-green-400/40 bg-green-400/5'
                  : 'border-white/10 hover:border-green-400/30 hover:bg-white/3'
              }`}>
                {fileName ? (
                  <>
                    <p className="text-green-400 text-2xl mb-2">✓</p>
                    <p className="text-white text-sm font-medium truncate px-4">{fileName}</p>
                    <p className="text-gray-500 text-xs mt-1">Listo para enviar</p>
                  </>
                ) : (
                  <>
                    <p className="text-3xl mb-3">🎵</p>
                    <p className="text-gray-300 text-sm font-medium mb-1">Arrastra tu archivo aquí</p>
                    <p className="text-gray-500 text-xs">o haz clic para seleccionarlo</p>
                    <p className="text-gray-600 text-xs mt-3">MP3 o WAV · Máx. 10 MB</p>
                  </>
                )}
              </div>
              <input type="file" accept="audio/*" className="hidden" onChange={handleFile} />
            </label>

            {fileName && (
              <button
                className="w-full mt-4 py-3 rounded-xl font-semibold text-gray-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #4ade80, #22d3ee)' }}
              >
                Enviar grabación
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
