import React, { useState } from 'react';
import { Trophy, Activity, Users, Sun, MapPin, Menu, X, ArrowRight, Heart, Clock, ShieldCheck } from 'lucide-react';

// --- Dados das Instalações ---

const facilitiesData = [
  {
    id: "quadra",
    title: "Quadra Poliesportiva",
    subtitle: "O Palco dos Grandes Jogos",
    description: "Quadra………..R$ 80,00 a hora",
     image: "/img/quadra.webp", // Placeholder temático
    color: "blue"
  },
  {
    id: "campo",
    title: "Campo de Futebol",
    subtitle: "Espaço de Garra e União",
    description: "Campo……….R$ 120,00 a hora",
    image: "/img/campo.webp", // Placeholder temático
    color: "green"
  }
];

// --- Componente Principal ---

export default function QuadraCampoPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      {/* Injeção de Fontes: Lexend (Esportiva/Moderna) e Inter (Texto) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Lexend:wght@300;400;500;600;700;800&display=swap');
        .font-lexend { font-family: 'Lexend', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}} />

      <main className="flex-grow">
        
        {/* --- Hero Section --- */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Imagem de Fundo com Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe4384d4?q=80&w=2070&auto=format&fit=crop" 
              alt="Esportes no Instituto" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-gray-900/50 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <Trophy size={16} /> Esporte & Cidadania
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-lexend leading-tight">
              Mais que um jogo, <br/> uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">lição de vida</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-inter font-light">
              Agente seu horario no nosso espaco. O valor da quadra e campo sao convertidos para o servico de convivencia do Instituto, dessa forma voce faz um gols dentro e fora de campo
              </p>
          </div>
        </section>

        {/* --- As Instalações (Cards Detalhados) --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm font-lexend">Nossa Infraestrutura</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-lexend">
                Espaços para Vencer
              </h2>              
            </div>

            <div className="text-rigth mb-16">
              <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm font-lexend">Endereço</span>
              <p className="text-lg text-gray-600 mt-2 mb-4 font-inter leading-relaxed">
                  597, R Padre Joao Piamarta Bairro D R
              </p>        
            </div>
             <div className="text-rigth mb-16">
              <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm font-lexend">Horarios</span>
              <p className="text-lg text-gray-600 mt-2 mb-4 font-inter leading-relaxed">
                  Seg-Sex………..18:00 – 22:00 (Quadra)<br/>
                  Sab-Dom……….9:00 – 22:00 (Campo/Quadra)<br/>

                  Consulte horarios devido a realizao de eventos
              </p>        
            </div> 
            <div className="space-y-24">
              {facilitiesData.map((facility, index) => (
                <div key={facility.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Imagem */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className={`absolute -inset-4 rounded-3xl opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50 ${facility.color === 'blue' ? 'bg-blue-400' : 'bg-cyan-400'}`}></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                       {/* Overlay Gradient on Image */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10"></div>
                       <img 
                        src={facility.image} 
                        alt={facility.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-6 left-6 z-20 text-white">
                        <p className="text-sm font-medium opacity-90 mb-1 flex items-center gap-2">
                          <MapPin size={14} /> Instituto João XXIII
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo Textual */}
                  <div className="w-full lg:w-1/2">
                    <h3 className={`text-sm font-bold uppercase tracking-wide mb-2 ${facility.color === 'blue' ? 'text-blue-600' : 'text-cyan-600'}`}>
                      {facility.subtitle}
                    </h3>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 font-lexend leading-tight">
                      {facility.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                      {facility.description}
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}