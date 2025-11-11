// src/pages/Chile.jsx

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SedeDetalheCard from '@/components/SedeDetalheCard'
import { MapPin } from 'lucide-react'

// Dados detalhados
const sedesChileData = [
  {
    nome: "Santiago",
    descricao: "Casa Piamarta Central",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Casa-Piamarta-Central-1024x527.jpg",
    endereco: "Calle de la Fe, 123 - Santiago, Chile",
    telefone: "+56 2 1234 5678",
    email: "santiago@joaoxxiii.cl"
  },
  {
    nome: "Valparaíso",
    descricao: "Paróquia Rainha dos Apóstolos",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ParA³quia-Rainha-dos-ApA³stolos-1024x657.png",
    endereco: "Av. del Mar, 456 - Valparaíso, Chile",
    telefone: "+56 32 1234 567",
    email: "valparaiso@joaoxxiii.cl"
  },
  {
    nome: "Concepción",
    descricao: "Colégio Juan Piamarta",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ColA©gio-Juan-Piamarta-1024x518.jpg",
    endereco: "Ruta del Bosque, 789 - Concepción, Chile",
    telefone: "+56 41 123 456",
    email: "concepcion@joaoxxiii.cl"
  }
];

export default function Chile() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* --- Hero Section (Tema Vermelho) --- */}
        <section className="py-20 lg:py-28 bg-red-500 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <MapPin className="h-20 w-20 mx-auto mb-6" />
            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Sedes no Chile
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Nossa missão de solidariedade e bem-estar familiar presente em
              diversas comunidades chilenas.
            </p>
          </div>
        </section>

        {/* --- Conteúdo dos Cards (Fundo Branco) --- */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sedesChileData.map((sede) => (
                <SedeDetalheCard 
                  key={sede.nome} 
                  sede={sede} 
                  cor="red" 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}