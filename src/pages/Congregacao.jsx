// src/pages/Congregacao.jsx

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Church, Target, Eye, HandHelping } from 'lucide-react';

const valueCards = [
    {
        icon: Target,
        title: "Nossa Missão",
        description: "Anunciar o Evangelho e promover a formação integral da juventude e dos menos favorecidos, seguindo o carisma de São João Piamarta.",
        color: "text-purple-600"
    },
    {
        icon: Eye,
        title: "Nossa Visão",
        description: "Ser uma congregação profética, respondendo aos desafios do mundo moderno através da educação, caridade e testemunho de fé.",
        color: "text-indigo-600"
    },
    {
        icon: HandHelping,
        title: "Nossos Valores",
        description: "Solidariedade, humildade, serviço e amor incondicional, pilares que sustentam toda a nossa obra social e religiosa.",
        color: "text-pink-600"
    }
];

export default function Congregacao() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                {/* Hero Section (Tema Roxo/Espiritual) */}
                <section className="py-20 lg:py-28 bg-purple-600 text-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <Church className="h-20 w-20 mx-auto mb-6" />
                        <h1
                            className="text-6xl md:text-7xl font-bold mb-4"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            A Congregação
                        </h1>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                            Conheça a história, o carisma e os pilares de fé que movem
                            a Família Religiosa do Instituto João XXIII no mundo.
                        </p>
                    </div>
                </section>

                {/* Seção 1: Missão, Visão e Valores */}
                <section className="bg-white py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            Nosso Carisma e Propósito
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {valueCards.map((card) => (
                                <div 
                                    key={card.title} 
                                    className="p-8 bg-gray-50 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform duration-300"
                                >
                                    <card.icon className={`h-12 w-12 mx-auto mb-4 ${card.color}`} />
                                    <h3 
                                        className={`text-2xl font-bold mb-3 ${card.color}`}
                                        style={{ fontFamily: 'Fredoka, sans-serif' }}
                                    >
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Seção 2: Vida e História (Fundo Roxo Claro) */}
                <section className="bg-purple-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-6 text-purple-800"
                                style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                            >
                                Uma História de Fé e Serviço
                            </h2>
                            <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                A congregação foi fundada por São João Piamarta com a missão de socorrer a juventude
                                abandonada, oferecendo-lhes não apenas abrigo, mas uma formação completa que incluía 
                                educação profissional e o caminho da fé.
                            </p>
                            <p className="text-lg text-gray-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                Desde o nosso início na Itália, expandimos nosso carisma para o Brasil, Angola e Chile, 
                                adaptando nossas obras às necessidades locais, mas mantendo a essência do amor e da caridade.
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop" // Imagem Placeholder
                                alt="Imagem histórica da congregação"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
                
                {/* Call to Action: Vocação */}
                <section className="bg-purple-700 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            Sente o Chamado?
                        </h3>
                        <p className="text-xl mb-6" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                            Descubra a vida religiosa e ajude a levar o carisma de Piamarta adiante.
                        </p>
                        <a
                            href="/vocacao" // Rota para contato vocacional
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                            Falar com a Equipe Vocacional
                        </a>
                    </div>
                </section>
            </main>

        </div>
    );
}