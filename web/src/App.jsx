import Navbar from './components/Navbar'
import Home from './components/Home'
import Episodios from './components/Episodios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#080b0f' }}>
      <Navbar />
      <main>
        <Home />
        <Episodios />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
