import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NossaHistoria from './pages/NossaHistoria'
import DoeAgora from './pages/DoeAgora'
import SejaVoluntario from './pages/SejaVoluntario'
import Contato from './pages/Contato'
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
            <Route path="/conheca/estrutura-equipe" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Estrutura e Equipe</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/conheca/governanca-transparencia" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Governança e Transparência</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/conheca/parceiros" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Parceiros</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/nosso-trabalho" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Nosso Trabalho</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/fique-por-dentro" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Fique por Dentro</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/doe-agora" element={<DoeAgora />} />
            <Route path="/seja-voluntario" element={<SejaVoluntario />} />
            <Route path="/noticias/blog" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Blog</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/noticias/na-midia" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold text-teal-600">Na Mídia</h1><p className="text-gray-600 mt-4">Página em desenvolvimento</p></div>} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
