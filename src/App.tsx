import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import MainLayout from '@components/layout/MainLayout'
import Home from '@pages/Home'
import Corporativo from '@pages/Corporativo'
import Directivos from '@pages/Directivos'
import Gobierno from '@pages/Gobierno'
import TalentoHumano from '@pages/TalentoHumano'
import Sedes from '@pages/Sedes'
import Proyectos from '@pages/Proyectos'
import Contacto from '@pages/Contacto'
import Calificaciones from '@pages/Calificaciones'
import Noticias from '@pages/Noticias'
import Tecnicas from '@pages/Tecnicas'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="corporativo" element={<Corporativo />} />
            <Route path="directivos" element={<Directivos />} />
            <Route path="gobierno" element={<Gobierno />} />
            <Route path="talentohumano" element={<TalentoHumano />} />
            <Route path="sedes" element={<Sedes />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="calificaciones" element={<Calificaciones />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="tecnicas" element={<Tecnicas />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
