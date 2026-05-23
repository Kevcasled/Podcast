import Navbar from './components/Navbar'
import Home from './components/Home'
import Episodios from './components/Episodios'
import VideoPromo from './components/VideoPromo'
import Contacto from './components/Contacto'
import InformePDF from './components/InformePDF'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#080b0f' }}>
      <a href="#contenido-principal" className="skip-link">Saltar al contenido principal</a>
      <Navbar />
      <main id="contenido-principal">
        <Home />
        <Episodios />
        <VideoPromo />
        <Contacto />
        <InformePDF />
      </main>
      <Footer />
    </div>
  )
}

export default App
