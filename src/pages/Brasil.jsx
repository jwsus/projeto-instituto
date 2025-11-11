
import React from 'react'
import SedeDetalheCard from '@/components/SedeDetalheCard' // O card que acabamos de criar
import { MapPin } from 'lucide-react' // Exemplo de ícone para o Hero

// Dados detalhados - baseados nos dados da Home, mas com mais infos
const sedesBrasilData = [
  {
    nome: "São Paulo - Caravaggio",
    descricao: "Paróquia Nossa Senhora de Caravaggio",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ParA³quia-Nossa-Senhora-de-Caravaggio.webp",
    endereco: "Praça N. S. de Caravaggio, s/n - SP",
    telefone: "(11) 1234-5678",
    email: "caravaggio@joaoxxiii.org.br"
  },
  {
    nome: "Fartura",
    descricao: "Instituto João XXIII",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Background-1024x576.png",
    endereco: "Rua das Flores, 123 - Fartura, SP",
    telefone: "(14) 1234-5678",
    email: "fartura@joaoxxiii.org.br"
  },
  {
    nome: "Escola Agrícola",
    descricao: "Escola Agrícola Padre Piamarta",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Escola-AgrA­cola-Padre-Piamarta.jpg",
    endereco: "Estrada do Campo, km 5 - Zona Rural, SP",
    telefone: "(15) 1234-5678",
    email: "agricola@joaoxxiii.org.br"
  }
];

export default function Brasil() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* --- Hero Section (Tema Verde) --- */}
        <section className="py-20 lg:py-28 bg-green-500 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <MapPin className="h-20 w-20 mx-auto mb-6" />
            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Sedes no Brasil
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Conheça em detalhes nossos centros de fé, educação e assistência social
              em terras brasileiras.
            </p>
          </div>
        </section>

        {/* --- Conteúdo dos Cards (Fundo Branco) --- */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sedesBrasilData.map((sede) => (
                <SedeDetalheCard 
                  key={sede.nome} 
                  sede={sede} 
                  cor="green" 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}