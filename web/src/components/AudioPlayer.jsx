import { useRef, useState } from 'react'

export default function AudioPlayer({ src, title, duration }) {
  const audioRef    = useRef(null)
  const [playing, setPlaying]       = useState(false)
  const [progress, setProgress]     = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [volume, setVolume]         = useState(1)
  const [muted, setMuted]           = useState(false)

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    playing ? audio.pause() : audio.play()
    setPlaying(!playing)
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    if (!audio) return
    const pct  = (audio.currentTime / audio.duration) * 100
    setProgress(isNaN(pct) ? 0 : pct)
    const mins = Math.floor(audio.currentTime / 60)
    const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0')
    setCurrentTime(`${mins}:${secs}`)
  }

  function handleSeek(e) {
    const audio = audioRef.current
    if (!audio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    audio.currentTime = pct * audio.duration
  }

  function handleEnded() {
    setPlaying(false)
    setProgress(0)
    setCurrentTime('0:00')
  }

  function toggleMute() {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !muted
    setMuted(!muted)
  }

  function handleVolume(e) {
    const val = parseFloat(e.target.value)
    if (audioRef.current) audioRef.current.volume = val
    setVolume(val)
    if (val === 0) setMuted(true)
    else if (muted) setMuted(false)
  }

  function skip(secs) {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + secs))
  }

  const BARS   = 16
  const filled = Math.round((progress / 100) * BARS)
  const barStr = '█'.repeat(filled) + '░'.repeat(BARS - filled)

  return (
    <div
      role="region"
      aria-label={`Reproductor: ${title}`}
      className="relative w-full p-4 overflow-hidden"
      style={{
        background: 'rgba(8,12,18,0.95)',
        border: '1px solid rgba(57,255,106,0.15)',
        borderRadius: '4px',
      }}
    >
      <div
        className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
        style={{ borderBottom: '1px solid rgba(57,255,106,0.2)', borderLeft: '1px solid rgba(57,255,106,0.2)' }}
        aria-hidden="true"
      />

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <p
        className="text-xs mb-3 truncate"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.65)' }}
      >
        <span style={{ color: 'var(--green)' }}>$ </span>{title}
      </p>

      <div className="mb-1">
        <div
          className="w-full cursor-pointer py-2"
          onClick={handleSeek}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Progreso del audio"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') skip(5)
            if (e.key === 'ArrowLeft')  skip(-5)
          }}
        >
          <div
            className="relative w-full h-1 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '1px' }}
          >
            <div
              className="absolute inset-y-0 left-0 transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--green), #22d3ee)',
                borderRadius: '1px',
              }}
            />
          </div>
        </div>

        <p
          className="text-xs select-none"
          aria-hidden="true"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(57,255,106,0.5)', letterSpacing: '-0.5px' }}
        >
          [{barStr}]
        </p>

        <div className="flex justify-between mt-1">
          <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}>
            {currentTime}
          </span>
          <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}>
            {duration}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 gap-1 flex-wrap">

        <button
          onClick={() => skip(-15)}
          aria-label="Retroceder 15 segundos"
          className="text-xs px-2 py-1 transition-colors duration-150 rounded"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'rgba(255,255,255,0.65)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
        >
          -15s
        </button>

        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pausar' : 'Reproducir'}
          className="flex items-center gap-2 px-5 py-2 text-xs font-bold transition-all duration-150 hover:scale-105 active:scale-95"
          style={{
            fontFamily: 'var(--font-mono)',
            background: playing ? 'rgba(255,59,59,0.15)' : 'rgba(57,255,106,0.12)',
            color: playing ? 'var(--red)' : 'var(--green)',
            border: `1px solid ${playing ? 'rgba(255,59,59,0.3)' : 'rgba(57,255,106,0.3)'}`,
            borderRadius: '2px',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
          }}
        >
          {playing ? '■ STOP' : '▶ PLAY'}
        </button>

        <button
          onClick={() => skip(15)}
          aria-label="Avanzar 15 segundos"
          className="text-xs px-2 py-1 transition-colors duration-150 rounded"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'rgba(255,255,255,0.65)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
        >
          +15s
        </button>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Activar sonido' : 'Silenciar'}
            className="transition-colors"
            style={{ color: muted ? 'rgba(255,59,59,0.6)' : 'rgba(255,255,255,0.65)' }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {muted || volume === 0
                ? <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                : <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              }
            </svg>
          </button>
          <input
            type="range"
            min="0" max="1" step="0.05"
            value={muted ? 0 : volume}
            onChange={handleVolume}
            aria-label="Volumen"
            className="w-14 cursor-pointer"
            style={{ accentColor: 'var(--green)' }}
          />
        </div>
      </div>
    </div>
  )
}
