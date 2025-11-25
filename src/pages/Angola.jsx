import React, { useState } from 'react';
import { MapPin, Calendar, Users, Quote, ArrowRight, Menu, X, Facebook, Instagram, Mail } from 'lucide-react';

// --- Dados (Extraídos e Organizados) ---

const timelineEvents = [
  {
    year: "1991",
    title: "A Semente da Missão",
    description: "Em Julho, durante o Capítulo Geral, é aprovada a proposta de início da 'Missio ad gentes' em África, baseada no relatório do Padre Felice Pistoni."
  },
  {
    year: "1992",
    title: "Chegada a Ndalatando",
    description: "Em 10 de fevereiro, o pedido de Dom Pedro Luis Scarpa é aceito. Em 31 de julho, Padre Felice Pistoni e Padre Vicente Edelto Tavares Leite chegam a Ndalatando."
  },
  {
    year: "1992",
    title: "Início em Lucala",
    description: "Em 20 de agosto, os missionários entram oficialmente na paróquia 'Nossa Senhora da Conceição' de Lucala, acolhidos pelos maristas."
  },
  {
    year: "1993",
    title: "O Sacrifício de Fé",
    description: "Em 12 de janeiro, Padre Felice Pistoni, incansável missionário, entrega sua alma a Deus vítima de malária, tornando-se semente para a igreja local."
  },
  {
    year: "1997",
    title: "A Beatificação",
    description: "Em 12 de outubro, Padre Giovanni Battista Piamarta, o  Papa João Paulo II foi presenteado com o modelo (projeto) do novo trabalho que a Congregação  planejava realizar em Luanda, capital de Angola."
  },
  {
    year: "1998",
    title: "Reabertura",
    description: "Em 18 de Março, a missão de Lucala foi reaberta, – Superior Geral Padre Enzo Turriceni –  a segunda missão Piamartina iniciou-se em Angola, nos arredores da grande metrópole, no distrito  do Kilamba-Kiaxi."
  },
  {
    year: "2009",
    title: "Primeiro Piamartino",
    description: "Padre Higinou Nazário Corentino, um dos dois primeiros  piamartinos de origem angolana, foi responsável pelas atividades desta paróquia."
  },
  {
    year: "2012",
    title: "Escola Primaria Piamartina",
    description: " iniciou-se as suas atividades na Escola Primária Piamartina, Cursos particularmente  populares incluem: confeitaria e culinária, design e mobiliário, forja na área mecânica, eletricidade e  tecnologia da informação. Ultimamente, o “pré-escolar” ou “iniciação ” tem vindo a ser adicionado  para crianças a partir de 4-5 anos, no sistema angolano, que prevê os níveis do Jardim da Infância,  Creche, Iniciação"
  },
  {
    year: "2015",
    title: "Escola Secundaria Piamartina ",
    description: "Receberá o decreto oficial de  reconhecimento em 2015. O realizador é o padre António Tchindjenge. No ano de 2020 inicia-se a  escola Secundaria, começando com duas turmas do sétimo ano."
  }
];

const locationsData = [
  {
    id: 1,
    city: "Lucala",
    country: "Angola",
    title: "Paróquia Nossa Senhora da Conceição",
    image: "/img/lucala.webp", // Imagem do snippet
    description: ""
  }
];

// --- Sub-componentes ---

const TimelineItem = ({ year, title, description, isLast }) => (
  <div className="flex group">
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 font-bold border-4 border-white shadow-md group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 z-10">
        {year.substring(2)}
      </div>
      {!isLast && <div className="w-1 h-full bg-gray-200 my-2 group-hover:bg-amber-200 transition-colors"></div>}
    </div>
    <div className="pb-10">
      <span className="text-sm font-bold text-amber-600 uppercase tracking-wide">{year}</span>
      <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-lg">{description}</p>
    </div>
  </div>
);

// --- Componente Principal ---

export default function AngolaPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Injeção de Fontes */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Fredoka:wght@300;400;500;600&display=swap');
      `}} />

      <main className="flex-grow">
        
        {/* --- Hero Section --- */}
        <section className="relative bg-amber-500 text-white py-24 lg:py-32 overflow-hidden">
          {/* Elemento Decorativo de Fundo */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-sm"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Presença Piamartina <br className="hidden md:block" /> em Angola
            </h1>
            
            <p 
              className="text-lg md:text-2xl max-w-3xl mx-auto text-amber-50 font-medium leading-relaxed"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Desde 1991, levando fé, educação e esperança. Uma história construída com coragem e amor ao próximo nas terras de Lucala.
            </p>
          </div>
        </section>

        {/* --- Seção de História (Timeline) --- */}
        <section id="historia" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Lado Esquerdo: Introdução */}
              <div className="lg:sticky lg:top-24">
                <span className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2 block">Nossa Jornada</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
                  Como tudo começou
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  A missão em Angola nasceu do desejo ardente de expandir a obra Piamartina além-fronteiras. 
                  Foi um chamado respondido com generosidade e sacrifício.
                </p>
                
                {/* Card de Citação (Bishop Quote) */}
                <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-500 relative">
                  <Quote className="absolute top-4 right-4 text-amber-200 h-10 w-10" />
                  <p className="text-gray-800 italic text-lg font-medium mb-4 relative z-10">
                    “Aqui o corpo permaneceu como semente para o futuro desta Igreja local de Ndalatando.”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Bispo de Ndalatando</p>
                      <p className="text-xs text-gray-500">Sobre o Pe. Felice Pistoni</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Timeline */}
              <div className="bg-white lg:pl-10">
                {timelineEvents.map((event, index) => (
                  <TimelineItem 
                    key={index} 
                    {...event} 
                    isLast={index === timelineEvents.length - 1} 
                  />
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- Seção de Locais (Cards Refatorados) --- */}
        <section id="locais" className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
                Nossa Presença Hoje
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationsData.map((sede) => (
                <article key={sede.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100">
                  {/* Imagem com Overlay */}
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={sede.image} 
                      alt={sede.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-1 text-amber-300 text-sm font-bold uppercase tracking-wider mb-1">
                        <MapPin size={14} /> {sede.city}, {sede.country}
                      </div>
                      <h3 className="text-xl font-bold leading-tight">{sede.title}</h3>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-4">
                      {sede.description}
                    </p>
                    
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}