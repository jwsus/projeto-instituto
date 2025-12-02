// src/pages/Parceiros.jsx

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParceiroCard from '@/components/ParceiroCard'
import { Handshake } from 'lucide-react'

// --- DADOS MOCKADOS (Substitua pelas URLs reais dos seus parceiros) ---
const parceirosData = [
  {
    id: 1,
    nome: "SESC",
    imagem: "/img/sesc.webp", // Exemplo
    link: "https://www.sescpr.com.br/"
  },
  {
    id: 2,
    nome: "UNIASSELV",
    imagem: "/img/UNIASSELV.webp",
    link: "https://portal.uniasselvi.com.br/"
  },
  {
    id: 3,
    nome: "UEPG",
    imagem: "/img/UEPG.webp",
    link: "https://www.uepg.br/"
  },
  {
    id: 4,
    nome: "UTFPR",
    imagem: "/img/utfpr.png",
    link: "https://www.utfpr.edu.br/campus/pontagrossa"
  }
];

export default function Parceiros() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        {/* --- Hero Section (Laranja Vibrante) --- */}
        <section className="py-20 lg:py-28 bg-orange-500 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Handshake className="h-20 w-20 mx-auto mb-6 animate-bounce" />
            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Nossos Parceiros
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Juntos somos mais fortes! Conheça as empresas e instituições que 
              caminham ao nosso lado na missão de transformar vidas.
            </p>
          </div>
        </section>

        {/* --- Lista de Parceiros --- */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Grid Responsivo */}
            {/* sm: 1 col, md: 2 cols, lg: 3 cols, xl: 4 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {parceirosData.map((parceiro) => (
                <ParceiroCard 
                  key={parceiro.id} 
                  parceiro={parceiro} 
                />
              ))}
            </div>
          </div>
      </section>
     

      </main>

    </div>
  )
}