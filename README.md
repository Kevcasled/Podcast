# KEV PODCAST

Sitio web de podcast sobre tecnología: ciberseguridad, programación y cultura tech desde la perspectiva de un estudiante de DAW.

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19 + Vite 8 |
| Estilos | Tailwind CSS 4 |
| PDF | jsPDF |
| Audio | Audacity + FFmpeg |
| Música | Free Music Archive |

## Estructura del proyecto

```
Podcast/
├── web/                  # Aplicación React
│   ├── public/           # Favicon e iconos
│   ├── src/
│   │   ├── assets/       # Imágenes estáticas
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx          # Hero + AudioPlayer
│   │   │   ├── Episodios.jsx     # Lista de episodios + proceso de producción
│   │   │   ├── AudioPlayer.jsx   # Reproductor de audio custom
│   │   │   ├── Transcripcion.jsx # Transcripción desplegable
│   │   │   ├── VideoPromo.jsx    # Sección de vídeo promocional
│   │   │   ├── Contacto.jsx      # Formulario + subida de audio
│   │   │   ├── InformePDF.jsx    # Generación de informe en PDF
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── practica/             # Documentos de la práctica (PDFs)
└── audio_task.pdf
```

## Instalación y arranque

```bash
cd web
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`.

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción en web/dist/
npm run preview   # Previsualizar el build de producción
npm run lint      # Linter (ESLint)
```

## Episodios

| # | Título | Duración | Tags |
|---|--------|----------|------|
| 01 | ¿Es Mr. Robot real? | 9:42 | Ciberseguridad, Series, Hacking |

## Proceso de producción

1. **Guion** — investigación del tema + estructura de 8-10 minutos
2. **Grabación** — Audacity con micrófono externo, varias tomas
3. **Edición** — eliminación de ruido, corte de silencios, Auto Duck para música
4. **Exportación** — MP3 128-192 kbps con FFmpeg

## Accesibilidad

- Enlace "saltar al contenido principal" visible al enfocar
- Roles y etiquetas ARIA en formularios y reproductores
- Contraste de color verificado
- Navegación por teclado funcional
