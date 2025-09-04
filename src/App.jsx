// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Fun from './pages/Fun.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'


export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      {/* Routing happens here */}
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}
