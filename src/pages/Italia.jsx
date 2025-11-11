// src/pages/Italia.jsx

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SedeDetalheCard from '@/components/SedeDetalheCard'
import { MapPin } from 'lucide-react'

// Dados detalhados
const sedesItaliaData = [
  {
    nome: "Brescia",
    descricao: "Editrice Queriniana",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Editrice-Queriniana.jpg",
    endereco: "Via della Pace, 1 - Brescia, Italia",
    telefone: "+39 030 123456",
    email: "brescia@joaoxxiii.it"
  },
  {
    nome: "Parma",
    descricao: "Paróquia de Sant'Anna",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ParA³quia-de-SantAnna-1024x683.jpeg",
    endereco: "Piazza Sant'Anna, 2 - Parma, Italia",
    telefone: "+39 0521 123456",
    email: "parma@joaoxxiii.it"
  },
  {
    nome: "Cremona",
    descricao: "Instituto Bonsignori",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Instituto-Bonsignori-1024x575.jpg",
    endereco: "Via Giovanni Piamarta, 10 - Cremona, Italia",
    telefone: "+39 0372 123456",
    email: "cremona@joaoxxiii.it"
  }
];

export default function Italia() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* --- Hero Section (Tema Azul) --- */}
        <section className="py-20 lg:py-28 bg-blue-500 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <MapPin className="h-20 w-20 mx-auto mb-6" />
            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Sedes na Itália
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Onde nossa história começou: conheça as obras que unem
              tradição e inovação na Itália.
            </p>
          </div>
        </section>

        {/* --- Conteúdo dos Cards (Fundo Azul Claro) --- */}
        <section className="bg-blue-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sedesItaliaData.map((sede) => (
                <SedeDetalheCard 
                  key={sede.nome} 
                  sede={sede} 
                  cor="blue" 
                />
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}