import React, { useState } from 'react';
import { MapPin, Calendar, Users, Quote, ArrowRight, Menu, X, Facebook, Instagram, Mail } from 'lucide-react';

// --- Dados (Extraídos e Organizados) ---

const timelineEvents = [
  {
    year: "1983",
    title: "Chegada dos Piamartinos ao Chile",
    description: "Em 23 de março de 1983, a Congregação Piamartina chega ao Chile com a assunção da paróquia Nossa Senhora de Fátima, nos arredores de Talca."
  },
  {
    year: "1984",
    title: "Colégio Carolina Llona – Maipú",
    description: "Em 1 de outubro de 1984, assumem o Colégio Parroquial N° 325 Carolina Llona de Cuevas em Maipú, Santiago."
  },
  {
    year: "1990",
    title: "Abrigo Educativo Beata Laura Vicuña",
    description: "É fundado o abrigo piamartino “Beata Laura Vicuña” para acolher jovens após a escola."
  },
  {
    year: "1992",
    title: "Colegio Juan Piamarta – Talca",
    description: "Em 1992 é aberto o Colegio Piamarta em Estación Central, e em 1994 a escola Juan Piamarta em Talca pela Fundación Juan Piamarta."
  },
  {
    year: "2014",
    title: "Centro de Espiritualidade Artigianelli",
    description: "É criado o Centro de Espiritualidade Piamartino Artigianelli voltado à formação pastoral, vocacional e social."
  }
];

const locationsData = [
//  {
//     year: "1983",
//     title: "Chegada dos Piamartinos ao Chile",
//     description: "Em 23 de março de 1983, a Congregação Piamartina chega ao Chile com a assunção da paróquia Nossa Senhora de Fátima, nos arredores de Talca."
//   },
  {
    year: "1984",
    title: "Colégio Carolina Llona – Maipú",
    description: "Em 1 de outubro de 1984, assumem o Colégio Parroquial N° 325 Carolina Llona de Cuevas em Maipú, Santiago.",
    image: "/img/maipu.webp"
  },
  // {
  //   year: "1990",
  //   title: "Abrigo Educativo Beata Laura Vicuña",
  //   description: "É fundado o abrigo piamartino “Beata Laura Vicuña” para acolher jovens após a escola."
  // },
  {
    year: "1992",
    title: "Colegio Juan Piamarta – Talca",
    description: "Em 1992 é aberto o Colegio Piamarta em Estación Central, e em 1994 a escola Juan Piamarta em Talca pela Fundación Juan Piamarta.",
    image: "/img/talca.webp"
  },
  // {
  //   year: "2014",
  //   title: "Centro de Espiritualidade Artigianelli",
  //   description: "É criado o Centro de Espiritualidade Piamartino Artigianelli voltado à formação pastoral, vocacional e social."
  // }

];

// --- Sub-componentes ---

const TimelineItem = ({ year, title, description, isLast }) => (
  <div className="flex group">
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold border-4 border-white shadow-md group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 z-10">
        {year.substring(2)}
      </div>
      {!isLast && <div className="w-1 h-full bg-gray-200 my-2 group-hover:bg-red-200 transition-colors"></div>}
    </div>
    <div className="pb-10">
      <span className="text-sm font-bold text-red-600 uppercase tracking-wide">{year}</span>
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
        <section className="relative bg-red-500 text-white py-24 lg:py-32 overflow-hidden">
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
              Presença Piamartina <br className="hidden md:block" /> no Chile
            </h1>
            
            <p 
              className="text-lg md:text-2xl max-w-3xl mx-auto text-red-50 font-medium leading-relaxed"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
               Desde 1983, formando jovens através da fé, educação técnica e acolhimento social nas comunidades chilenas.
            </p>
          </div>
        </section>

        {/* --- Seção de História (Timeline) --- */}
        <section id="historia" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Lado Esquerdo: Introdução */}
              <div className="lg:sticky lg:top-24">
                <span className="text-red-500 font-bold uppercase tracking-wider text-sm mb-2 block">Nossa Jornada</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
                  Como tudo começou
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  A missão piamartina no Chile nasceu com um chamado educativo e social. Com escolas, centros de acolhimento e formação, o legado de São João Batista Piamarta floresceu nas comunidades chilenas.
                 </p>
                
                {/* Card de Citação (Bishop Quote) */}
                <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500 relative">
                  <Quote className="absolute top-4 right-4 text-red-200 h-10 w-10" />
                  <p className="text-gray-800 italic text-lg font-medium mb-4 relative z-10">
                   “A missão no Chile tem sido um sinal vivo de esperança para jovens vulneráveis, onde a educação e a fé constroem pontes.”  
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Comunidade Piamartina</p>
                      <p className="text-xs text-gray-500">Inspirada na tradição de São João Piamarta</p>
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
                Nossas Sedes no Chile
              </h2>
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
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
                      <div className="flex items-center gap-1 text-red-300 text-sm font-bold uppercase tracking-wider mb-1">
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