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
    nome: "Empresa Parceira A",
    imagem: "https://via.placeholder.com/300x150?text=LOGO+A", // Exemplo
    link: "https://google.com"
  },
  {
    id: 2,
    nome: "Fundação Solidária",
    imagem: "https://via.placeholder.com/300x150?text=FUNDACAO",
    link: "https://google.com"
  },
  {
    id: 3,
    nome: "Tech for Good",
    imagem: "https://via.placeholder.com/300x150?text=TECH+LOGO",
    link: "https://google.com"
  },
  {
    id: 4,
    nome: "Supermercados União",
    imagem: "https://via.placeholder.com/300x150?text=MERCADO",
    link: null // Exemplo sem link (o botão não aparecerá)
  },
  {
    id: 5,
    nome: "Banco Comunitário",
    imagem: "https://via.placeholder.com/300x150?text=BANCO",
    link: "https://google.com"
  },
  {
    id: 6,
    nome: "Grupo Educacional",
    imagem: "https://via.placeholder.com/300x150?text=ESCOLA",
    link: "https://google.com"
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

            {/* Mensagem para novos parceiros */}
            <div className="mt-20 text-center bg-white p-10 rounded-3xl shadow-xl max-w-4xl mx-auto">
              <h2 
                className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
                style={{ fontFamily: 'Bubblegum Sans, cursive' }}
              >
                Quer ser um parceiro do Instituto?
              </h2>
              <p 
                className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Sua empresa pode fazer a diferença na vida de milhares de pessoas.
                Entre em contato conosco e saiba como apoiar nossos projetos.
              </p>
              
              <a href='#/contato'>
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}> Fale Conosco  
                </button>
              </a>
              
                
            </div>

          </div>
        </section>
      </main>

    </div>
  )
}