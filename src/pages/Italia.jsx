import React, { useState } from 'react';
import { MapPin, Calendar, Users, Quote, ArrowRight, Menu, X, Facebook, Instagram, Mail } from 'lucide-react';

// --- Dados (Extraídos e Organizados) ---

const timelineEvents = [
  {
    year: "1902",
    title: "Fundação da Congregação",
    description: "Em 25 de maio de 1902, Padre Piamarta e outros fundam oficialmente a Congregação da Sagrada Família de Nazaré, iniciando a missão que hoje tem presença global."
  },
  {
    year: "1932",
    title: "Instituto em Bréscia",
    description: "O Instituto Piamarta em Bréscia é construído para atender jovens carentes com formação profissional e espiritual."
  },
  {
    year: "1957",
    title: "Centro de Formação de Remedello",
    description: "É fundado o Centro de Formação Profissional em Remedello, dedicado a cursos práticos e educacionais."
  },
  {
    year: "1941",
    title: "Paróquia em Cecchina (Roma)",
    description: "Em Cecchina, nos arredores de Roma, os piamartinos assumem a Paróquia de San Girolamo Emiliani, reforçando a pastoral juvenil."
  },
  {
    year: "1946",
    title: "Paróquia em Pontinia",
    description: "A paróquia de Pontinia é criada, com forte compromisso educativo e social piamartino, inclusive com escola profissional."
  },
  {
    year: "1952",
    title: "Centro Espírtual / Paróquia em Roseto degli Abruzzi",
    description: "Na cidade de Roseto degli Abruzzi (Teramo) é fundada a paróquia do Sagrado Coração, junto a um centro para jovens."
  }
];

const locationsData = [
   {
    id: 1,
    city: "Bréscia",
    country: "Itália",
    title: "Instituto Piamarta – Bréscia",
    image: "img/bresciawebp.webp", // placeholder, trocar se achar imagem real
    description: "Instituto piamartino fundado para formação profissional e espiritual, nascido da visão de São João Piamarta."
  },
  {
    id: 2,
    city: "Remedello",
    country: "Itália",
    title: "Centro de Formação Profissional – Remedello",
    image: "https://institutojoaoxxiii.org/wp-content/uploads/…/remedello.jpg", // placeholder
    description: "Centro de formação profissional criado em 1957 para capacitar jovens em diversas artes e ofícios."
  },
  {
    id: 3,
    city: "Roma (Cecchina)",
    country: "Itália",
    title: "Paróquia San Girolamo Emiliani – Cecchina",
    image: "https://institutojoaoxxiii.org/wp-content/uploads/…/cecchina.jpg", // placeholder
    description: "Paróquia piamartina em Cecchina (periferia de Roma), com forte tradição de oratório e pastoral juvenil."
  },
  {
    id: 4,
    city: "Pontinia (Latina)",
    country: "Itália",
    title: "Paróquia Piamarta – Pontinia",
    image: "https://institutojoaoxxiii.org/wp-content/uploads/…/pontinia.jpg", // placeholder
    description: "Paróquia fundada em 1946, com compromisso social e educativo piamartino."
  },
  {
    id: 5,
    city: "Roseto degli Abruzzi",
    country: "Itália",
    title: "Centro / Paróquia Sagrado Coração – Roseto degli Abruzzi",
    image: "https://institutojoaoxxiii.org/wp-content/uploads/…/roseto.jpg", // placeholder
    description: "Centro espiritual e paróquia piamartina em Roseto degli Abruzzi (Teramo)."
  }
];

// --- Sub-componentes ---

const TimelineItem = ({ year, title, description, isLast }) => (
  <div className="flex group">
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold border-4 border-white shadow-md group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 z-10">
        {year.substring(2)}
      </div>
      {!isLast && <div className="w-1 h-full bg-gray-200 my-2 group-hover:bg-blue-200 transition-colors"></div>}
    </div>
    <div className="pb-10">
      <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">{year}</span>
      <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Fredoka' }}>{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-lg">{description}</p>
    </div>
  </div>
);

// --- Componente Principal ---

export default function BrasilPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Injeção de Fontes */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Fredoka:wght@300;400;500;600&display=swap');
      `}} />

      <main className="flex-grow">
        
        {/* --- Hero Section --- */}
        <section className="relative bg-blue-500 text-white py-24 lg:py-32 overflow-hidden">
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
              Presença Piamartina <br className="hidden md:block" /> na Italia
            </h1>
            
            <p 
              className="text-lg md:text-2xl max-w-3xl mx-auto text-blue-50 font-medium leading-relaxed"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
               De Bréscia ao sul da Itália, construindo comunidades com fé, educação profissional e missão social desde o início do século XX.
             </p>
          </div>
        </section>

        {/* --- Seção de História (Timeline) --- */}
        <section id="historia" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Lado Esquerdo: Introdução */}
              <div className="lg:sticky lg:top-24">
                <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-2 block">Nossa Jornada</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
                  Como tudo começou
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  A obra de São João Batista Piamarta teve início na Itália, com a fundação de escolas, centros de formação e paróquias que até hoje são marcas da missão piamartina.
                </p>
                
                {/* Card de Citação (Bishop Quote) */}
                <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500 relative">
                  <Quote className="absolute top-4 right-4 text-blue-200 h-10 w-10" />
                  <p className="text-gray-800 italic text-lg font-medium mb-4 relative z-10">
                     “Educar para o trabalho é educar para a vida.”  
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">São João Piamarta</p>
                      <p className="text-xs text-gray-500">Fundador da Congregação</p>
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
                Nossa Presença na Italia
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
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
                      <div className="flex items-center gap-1 text-blue-300 text-sm font-bold uppercase tracking-wider mb-1">
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