import React, { useState } from 'react';
import { MapPin, Calendar, Users, Quote, ArrowRight, Menu, X, Facebook, Instagram, Mail } from 'lucide-react';

// --- Dados (Extraídos e Organizados) ---

const timelineEvents = [
  {
    year: "1957",
    title: "Chegada ao Nordeste",
    description: "Os Piamartinos chegaram ao Nordeste do Brasil, a São Bento, no Maranhão, enquanto o Padre Lino Gottardi era Superior Geral. Na década seguinte, a missão chegou a outros Estados, continuando a propor o ideal de vida e o projeto educativo do Padre Piamarta."
  },
  {
    year: "1960 ",
    title: "Escola Padre João Piamarta",
    description: "Em 1960 foi contratada a paróquia de Nossa Senhora de Nazaré no bairro Montese de Fortaleza, no  Ceará, onde logo se iniciou a Escola Padre João Piamarta."
  },
  {
    year: "1972",
    title: "Centro Educacional da Juventude",
    description: " enquanto o Padre Guido  Mantovani era Superior Geral – foi lançado o Centro Educacional da Juventude em Fortaleza, que se estenderia  alguns anos depois, a uma curta distância, com a Casa da Criança “Virgílio Távora” e o Lar Nazaré.  Mais recentemente, foi fundada a Escola Agrícola “Padre Lino Gottardi” em Apodí (Limoeiro do  Norte), no norte do Ceará.."
  },
  {
    year: "1975 ",
    title: "Rumo ao Sul",
    description: "Superior Geral Padre Pier Giordano Cabra – vê os Piamartinos mais ao sul, nas paróquias de  Matelândia e Ramilândia, no Paraná: hoje na paróquia de Nossa Senhora de Caravaggio e na Escola  Piamarta."
  },
  {
    year: "1976",
    title: "Os Campos Gerais",
    description: "O Instituto João XXIII, em Ponta Grossa (PR), e a paróquia de Nossa Senhora da  Saúde foram confiados à congregação."
  },
  {
    year: "1978",
    title: "A casa da União da Vitória",
    description: "Atividades atuais: o Instituto Piamarta, onde  funciona a Escola Estadual e um serviço de acompanhamento educativo para crianças e jovens, além  da pastoral na paróquia de São Sebastião."
  },
  {
    year: "1999",
    title: "Desbravando o Amazonas",
    description: "Sendo Superior Geral o Padre Enzo Turriceni, os religiosos piamartinos chegam à cidade  amazônica de Macapá (Amapá), na Escola Agrícola e na paróquia hoje dedicada a São João Batista  Piamarta."
  },
  {
    year: "2000",
    title: "A última comunidade a surgir no Brasil",
    description: "Em Curitiba, capital do Paraná. A  congregação assumiu a responsabilidade pela grande paróquia de Santa Edwiges, com a intenção de  criar o estudantado de teologia, que de fato surgiu em 2006, para qualificar a preparação de jovens  religiosos brasileiros."
  }
];

const locationsData = [
  {
    id: 1,
    city: "São Bento",
    country: "Maranhão",
    title: "Paróquia de São Bento",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  },
  {
    id: 2,
    city: "Fortaleza",
    country: "Ceará",
    title: "Paróquia Nossa Senhora de Nazaré Colégio Piamarta",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  },
  {
    id: 3,
    city: "Matelãndia ",
    country: "Paraná",
    title: "Paróquia Nossa Senhora de Caravaggio e Escola Padre João Piamarta",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  },
  {
    id: 4,
    city: "Ponta Grossa",
    country: "Paraná",
    title: "Instituto João XXIII",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  },
  {
    id: 5,
    city: "União da Vitória",
    country: "Paraná",
    title: "Paróquia São Sebastião",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  },
  {
    id: 6,
    city: "Macapá",
    country: "Amapá",
    title: "Escola Agricola Padre Piamarta e Paróquia São João Batista Piamarta",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  },
  {
    id: 7,
    city: "Curitiba",
    country: "Paraná",
    title: "Paróquia Santa Edwiges e Seminário Sagrada Família",
    image: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg", // Imagem do snippet
    description: ""
  }
];

// --- Sub-componentes ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Placeholder */}
            <span className="font-bold text-xl text-green-600 tracking-tight" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
              Instituto João XXIII
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition">Sobre</a>
            <a href="#" className="text-green-600 px-3 py-2 rounded-md text-sm font-bold transition">Brasil</a>
            <a href="#" className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-full text-sm font-medium transition shadow-md">Doar Agora</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-green-500" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>Instituto João XXIII</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Transformando vidas através da educação e da fé. Uma presença Piamartina que une continentes.
        </p>
      </div>
      
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-xs">
      © {new Date().getFullYear()} Instituto João XXIII. Todos os direitos reservados.
    </div>
  </footer>
);

const TimelineItem = ({ year, title, description, isLast }) => (
  <div className="flex group">
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold border-4 border-white shadow-md group-hover:bg-green-500 group-hover:text-white transition-colors duration-300 z-10">
        {year.substring(2)}
      </div>
      {!isLast && <div className="w-1 h-full bg-gray-200 my-2 group-hover:bg-green-200 transition-colors"></div>}
    </div>
    <div className="pb-10">
      <span className="text-sm font-bold text-green-600 uppercase tracking-wide">{year}</span>
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
        <section className="relative bg-green-500 text-white py-24 lg:py-32 overflow-hidden">
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
              Presença Piamartina <br className="hidden md:block" /> no Brasil
            </h1>
            
            <p 
              className="text-lg md:text-2xl max-w-3xl mx-auto text-green-50 font-medium leading-relaxed"
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
                <span className="text-green-500 font-bold uppercase tracking-wider text-sm mb-2 block">Nossa Jornada</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
                  Como tudo começou
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  No Brasil foram criadas escolas e locais de acolhimento, oferecendo aos jovens não só aprendizagem intelectual, mas também preparação técnica e profissional, juntamente com a formação humana e cristã. Surgiram vários tipos de acompanhamento e de relação de ajuda para as várias fragilidades dos jovens. As paróquias realizam atividades pastorais para o povo de Deus, com atenção aos jovens.
                </p>
                
                {/* Card de Citação (Bishop Quote) */}
                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500 relative">
                  <Quote className="absolute top-4 right-4 text-green-200 h-10 w-10" />
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
              <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
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
                      <div className="flex items-center gap-1 text-green-300 text-sm font-bold uppercase tracking-wider mb-1">
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