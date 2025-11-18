// src/pages/Piamarta.jsx

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Feather, Quote } from 'lucide-react';

export default function Piamarta() {
    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-grow">
                {/* Hero Section (Tema Azul Petróleo/Teal) */}
                <section className="py-20 lg:py-28 bg-teal-600 text-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <Feather className="h-20 w-20 mx-auto mb-6" />
                        <h1
                            className="text-6xl md:text-7xl font-bold mb-4"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            São João Piamarta
                        </h1>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                            O Fundador, o Santo, o Pai da Juventude. Conheça a vida
                            e a obra deste grande homem de Deus.
                        </p>
                    </div>
                </section>

                {/* Seção 1: Biografia */}
                <section className="bg-white py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-500">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Giovanni_battista_piamarta.jpg/800px-Giovanni_battista_piamarta.jpg" // Imagem do Santo
                                alt="São João Batista Piamarta"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-6 text-teal-800"
                                style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                            >
                                Um Coração Dedicado aos Jovens
                            </h2>
                            <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                João Batista Piamarta (1841-1913) nasceu em Brescia, Itália. Seu coração ardia em chamas pela juventude
                                abandonada pela revolução industrial, vendo neles o futuro da Igreja e da sociedade.
                            </p>
                            <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                Em 1886, ele fundou o "Instituto Artigianelli" para oferecer educação técnica, moral e religiosa.
                                Este instituto deu origem à Congregação da Sagrada Família de Nazaré e, posteriormente, à Congregação
                                das Irmãs Humildes Servas do Senhor, formando a Família Religiosa Piamartina.
                            </p>
                            <p className="text-lg text-gray-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                Foi canonizado pelo Papa Bento XVI em 21 de outubro de 2012, em reconhecimento à sua vida de santidade e
                                dedicação incansável ao serviço de Deus e do próximo.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-center mb-16 text-teal-800"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            Seu Legado em Palavras
                        </h2>
                        
                        <div className="space-y-12 max-w-4xl mx-auto">
                            <blockquote className="border-l-8 border-teal-500 pl-6 py-4 bg-white shadow-xl rounded-lg">
                                <Quote className="h-8 w-8 text-teal-500 mb-3" />
                                <p className="text-xl italic text-gray-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                    "A maior caridade que se pode fazer é salvar a juventude, educando-a cristianamente."
                                </p>
                                <footer className="text-right font-bold text-teal-600">— São João Piamarta</footer>
                            </blockquote>
                            
                            <blockquote className="border-l-8 border-teal-500 pl-6 py-4 bg-white shadow-xl rounded-lg">
                                <Quote className="h-8 w-8 text-teal-500 mb-3" />
                                <p className="text-xl italic text-gray-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                    "Toda obra de Deus, no princípio, parece impossível."
                                </p>
                                <footer className="text-right font-bold text-teal-600">— São João Piamarta</footer>
                            </blockquote>
                        </div>
                    </div>
                </section>
                
                {/* Call to Action: Obras de Piamarta */}
                <section className="bg-teal-700 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            Conheça Nossas Obras
                        </h3>
                        <p className="text-xl mb-6" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                            O Instituto João XXIII é o braço do carisma Piamartino no mundo.
                        </p>
                        <a
                            href="/" // Volta para a página Home (Sedes) ou uma página de Obras
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                            Ver Sedes Pelo Mundo
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}