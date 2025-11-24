// Para isto:
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NossaHistoria from './pages/NossaHistoria'
import DoeAgora from './pages/DoeAgora'
import SejaVoluntario from './pages/SejaVoluntario'
import Contato from './pages/Contato'
import Noticias from './pages/Noticias'
import Contraturno from './pages/Contraturno'
import Hortifruti from './pages/Hortifruti'
import Sedes from './pages/Sedes'
import Brasil from './pages/Brasil'
import Angola from './pages/Angola'
import Chile from './pages/Chile'
import Italia from './pages/Italia'
import Parceiros from './pages/Parceiros'
import Congregacao from './pages/Congregacao' 
import Piamarta from './pages/Piamarta'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conheca/nossa-historia" element={<NossaHistoria />} />
            <Route path="/conheca/congregacao" element={<Congregacao />} />
            <Route path="/conheca/sao-joao-de-piamarta" element={<Piamarta />} />
            <Route path="/conheca/estrutura-equipe" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Estrutura e Equipe</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/conheca/parceiros"  element={<Parceiros />} />
            <Route path="/atividades/nossa-historia" element={<NossaHistoria />} />
            <Route path="/nosso-trabalho" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Nosso Trabalho</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/doe-agora" element={<DoeAgora />} />
            <Route path="/seja-voluntario" element={<SejaVoluntario />} />
            <Route path="/noticias/blog" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Blog</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/noticias/na-midia" element={<Noticias/>} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/nosso-trabalho/atividades" element={<Contraturno />} />
            <Route path="/nosso-trabalho/hortifruti" element={<Hortifruti />} />
            <Route path="/sedes" element={<Sedes />} />
            <Route path="/brasil" element={<Brasil />} />
            <Route path="/chile" element={<Chile />} />
            <Route path="/angola" element={<Angola />} />
            <Route path="/italia" element={<Italia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )

}

export default App
