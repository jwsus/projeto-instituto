// src/pages/Angola.jsx

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SedeDetalheCard from '@/components/SedeDetalheCard'
import { MapPin } from 'lucide-react'

// Dados detalhados
const sedesAngolaData = [
  {
    nome: "Luanda",
    descricao: "Centro educacional e social na capital",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg",
    endereco: "Rua da Missão, 100 - Luanda, Angola",
    telefone: "+244 123 456 789",
    email: "luanda@joaoxxiii.org.ao"
  },
  {
    nome: "Benguela",
    descricao: "Apoio comunitário e formação",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/8000-b8b169d1fd74-768x1024.jpg",
    endereco: "Av. da Solidariedade, 200 - Benguela, Angola",
    telefone: "+244 987 654 321",
    email: "benguela@joaoxxiii.org.ao"
  },
  {
    nome: "Huambo",
    descricao: "Projetos educacionais sustentáveis",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/8bd1-39166be16d64-1024x768.jpg",
    endereco: "Largo da Esperança, 300 - Huambo, Angola",
    telefone: "+244 555 555 555",
    email: "huambo@joaoxxiii.org.ao"
  }
];

export default function Angola() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* --- Hero Section (Tema Amarelo) --- */}
        <section className="py-20 lg:py-28 bg-yellow-500 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <MapPin className="h-20 w-20 mx-auto mb-6" />
            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Sedes na Angola
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Descubra nossos núcleos de apoio comunitário e formação
              que transformam vidas no coração da África.
            </p>
          </div>
        </section>

        {/* --- Conteúdo dos Cards (Fundo Amarelo Claro) --- */}
        <section className="bg-yellow-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sedesAngolaData.map((sede) => (
                <SedeDetalheCard 
                  key={sede.nome} 
                  sede={sede} 
                  cor="yellow" 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}