import { useState } from 'react'

const segments = [
  {
    id: 'intro',
    time: '0:00',
    label: 'Intro',
    text: 'Bienvenidos a Kev Podcast, el podcast donde hablamos de tecnología sin filtros. Soy Kevin, estudiante de Desarrollo de Aplicaciones Web, y hoy vengo a responder una pregunta que me han hecho más veces de las que debería: ¿Es Mr. Robot realista? Spoiler: más de lo que te gustaría.',
  },
  {
    id: 'bloque1',
    time: '0:30',
    label: '¿Qué es Mr. Robot?',
    text: 'Para los que no la conocéis, Mr. Robot es una serie de USA Network que salió en 2015. Sigue a Elliot Alderson, un ingeniero de ciberseguridad que por la noche es hacker. Nada nuevo en el cine, ¿verdad? Hacker con capucha, pantallas llenas de texto verde... Pero hay algo diferente en esta serie: los creadores contrataron a hackers reales para revisar cada escena técnica. Y se nota. Yo la empecé a ver antes de entrar a DAW y pensé "qué cool". Ahora que llevo un año y pico programando... la veo de otra manera.',
  },
  {
    id: 'bloque2',
    time: '1:30',
    label: 'Lo que sí es real',
    text: 'Vamos al grano. ¿Qué cosas de la serie son reales? Primero: las herramientas. Elliot usa Kali Linux, Metasploit, Wireshark... herramientas que existen, que son gratuitas y que cualquiera puede instalar ahora mismo. De hecho, en algunos módulos de seguridad las usamos en clase. Eso da un poco de vértigo cuando lo ves en pantalla. Segundo: el phishing y la ingeniería social. Una de las cosas que más me sorprendió es que en la serie los hackeos más espectaculares no son técnicos. Son psicológicos. Alguien deja un USB infectado en el suelo de una empresa, alguien llama haciéndose pasar por soporte técnico... Eso es ingeniería social, y es el vector de ataque número uno en el mundo real. No hay firewall que arregle a una persona que hace clic donde no debe. Tercero: las vulnerabilidades. En la serie atacan servidores explotando vulnerabilidades reales que existían en el momento de emisión. Los showrunners tenían la política de no mostrar nada que no hubiera ocurrido ya en el mundo real. Eso es un nivel de rigor técnico que no ves ni en documentales.',
  },
  {
    id: 'bloque3',
    time: '4:30',
    label: 'Lo que NO es tan real',
    text: 'Ahora, siendo honestos, no todo es perfecto. El ritmo. En la serie un hackeo dura lo que dura una escena dramática. En la vida real, un pentest puede llevar semanas de reconocimiento antes de tocar una sola línea de código. No quedaría tan cinematográfico, lo sé. Elliot hace cosas de Dios. Hay momentos donde compromete sistemas enteros en minutos, solo. Eso no es realista. Los grandes ataques son trabajo de equipos, con meses de planificación. El romanticismo del hacker solitario está muy exagerado. La interfaz. Esto me da risa porque lo noto más ahora. A veces salen terminales con animaciones y colores que no existen en ninguna distro de Linux. Es para que el espectador no técnico entienda visualmente lo que está pasando. Tiene sentido, pero te rompe la ilusión.',
  },
  {
    id: 'bloque4',
    time: '6:30',
    label: 'Lo que me enseñó como estudiante',
    text: '¿Y qué saco yo en claro después de verla con ojos de DAW? Que la ciberseguridad no es solo para hackers. Es para cualquiera que construya algo en internet. Cada formulario que hago en clase es un vector de ataque potencial. Cada API que consumo tiene que ser tratada como si la otra parte mintiera. Mr. Robot me hizo entender que aprender a programar bien no es solo saber que el código funcione. Es saber por qué podría fallar. Si no la habéis visto: vedla. Y si ya la visteis: volved a verla después de aprender algo de redes.',
  },
  {
    id: 'cierre',
    time: '8:30',
    label: 'Cierre',
    text: 'Eso es todo por hoy en Kev Podcast. Si te ha gustado el episodio, compártelo con alguien que también esté aprendiendo a programar, seguro que le da una perspectiva nueva. La semana que viene seguimos. Hasta entonces — no hagas clic en links sospechosos.',
  },
]

export default function Transcripcion({ episodeTitle }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="mt-6"
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="transcripcion-content"
        className="w-full flex items-center justify-between px-5 py-4 transition-colors duration-200"
        style={{
          background: open ? 'rgba(57,255,106,0.04)' : 'rgba(255,255,255,0.02)',
          fontFamily: 'var(--font-mono)',
          cursor: 'pointer',
          borderBottom: open ? '1px solid rgba(57,255,106,0.12)' : 'none',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
      >
        <span className="flex items-center gap-3">
          <span style={{ color: 'var(--green)', fontSize: '0.7rem' }}>▶</span>
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Transcripción completa
          </span>
        </span>
        <span
          className="text-xs"
          style={{
            color: 'rgba(57,255,106,0.6)',
            fontFamily: 'var(--font-mono)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            display: 'inline-block',
          }}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {/* Contenido */}
      {open && (
        <article
          id="transcripcion-content"
          aria-label={`Transcripción del episodio: ${episodeTitle}`}
          style={{ padding: '1.5rem' }}
        >
          <p
            className="text-xs mb-6"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.1em',
            }}
          >
            // transcripcion_ep01.txt
          </p>

          <div className="flex flex-col gap-6">
            {segments.map((seg) => (
              <section key={seg.id} aria-label={seg.label}>
                {/* Cabecera del segmento */}
                <div className="flex items-center gap-3 mb-3">
                  <time
                    dateTime={`PT${seg.time.replace(':', 'M')}S`}
                    className="text-xs flex-shrink-0 px-2 py-0.5"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--green)',
                      border: '1px solid rgba(57,255,106,0.2)',
                      borderRadius: '2px',
                      background: 'rgba(57,255,106,0.04)',
                    }}
                  >
                    {seg.time}
                  </time>
                  <h4
                    className="text-xs uppercase tracking-widest"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {seg.label}
                  </h4>
                </div>

                {/* Texto */}
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.55)',
                    paddingLeft: '0.5rem',
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {seg.text}
                </p>
              </section>
            ))}
          </div>

          <p
            className="text-xs mt-8"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.15)',
              textAlign: 'right',
            }}
          >
            fin_de_transcripcion — {segments.length} bloques
          </p>
        </article>
      )}
    </div>
  )
}
