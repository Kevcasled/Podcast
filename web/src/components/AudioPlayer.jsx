import { useRef, useState } from 'react'

export default function AudioPlayer({ src, title, duration }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    if (!audio) return
    const pct = (audio.currentTime / audio.duration) * 100
    setProgress(isNaN(pct) ? 0 : pct)
    const mins = Math.floor(audio.currentTime / 60)
    const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0')
    setCurrentTime(`${mins}:${secs}`)
  }

  function handleSeek(e) {
    const audio = audioRef.current
    if (!audio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
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
    setMuted(val === 0)
  }

  function skip(secs) {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + secs))
  }

  return (
    <div className="relative bg-gray-900/80 backdrop-blur border border-white/10 rounded-2xl p-5 w-full overflow-hidden group hover:border-green-400/20 transition-all duration-300">
      {/* Brillo top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Título */}
      <p className="text-white text-sm font-medium mb-4 truncate pr-2">{title}</p>

      {/* Barra de progreso */}
      <div className="mb-4">
        <div
          className="w-full h-1 bg-white/10 rounded-full cursor-pointer relative group/bar"
          onClick={handleSeek}
        >
          {/* Track relleno */}
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #4ade80, #22d3ee)',
            }}
          />
          {/* Thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
          {/* Hover expanded */}
          <div className="absolute inset-0 -top-1 -bottom-1 cursor-pointer" onClick={handleSeek} />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-gray-500 text-xs font-mono">{currentTime}</span>
          <span className="text-gray-500 text-xs font-mono">{duration}</span>
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between">
        {/* Skip back */}
        <button
          onClick={() => skip(-15)}
          className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
          title="-15s"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            <text x="8.5" y="14" fontSize="5" fill="currentColor" fontFamily="monospace">15</text>
          </svg>
        </button>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-400/20"
          style={{ background: 'linear-gradient(135deg, #4ade80, #22d3ee)' }}
        >
          {playing ? (
            <svg className="w-5 h-5 text-gray-950" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-950 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Skip forward */}
        <button
          onClick={() => skip(15)}
          className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
          title="+15s"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
            <text x="8.5" y="14" fontSize="5" fill="currentColor" fontFamily="monospace">15</text>
          </svg>
        </button>

        {/* Volumen */}
        <div className="flex items-center gap-2">
          <button onClick={toggleMute} className="text-gray-500 hover:text-white transition-colors">
            {muted || volume === 0 ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={muted ? 0 : volume}
            onChange={handleVolume}
            className="w-16 accent-green-400 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
