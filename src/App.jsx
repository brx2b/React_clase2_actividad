import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Button from './components/Button'
import Hero from './components/Hero'
import Servicios from './pages/Servicios'
import Blog from './pages/Blog'
import Portafolio from './pages/Portafolio'
function App() {
  return (
    <BrowserRouter>
      
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/Portafolio' element={<Portafolio />}></Route>
          </Routes>
        </main>
        <Button/>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
