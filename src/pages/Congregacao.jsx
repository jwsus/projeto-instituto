// src/pages/Congregacao.jsx

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Church, Target, Eye, HandHelping, Heading4 } from 'lucide-react';

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
                
                {/* Seção 2: Vida e História (Fundo Roxo Claro) */}
                <section className="bg-purple-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-6 text-purple-800"
                            >
                                O que fazem os Padres Piamartinos?
                            </h2>
                            <p className="text-lg text-gray-700 mb-6" >
                               Os religiosos da Congregação “Sagrada Família de Nazaré”, conhecidos como Piamartinos, são irmãos e sacerdotes, inspirados pelo seu fundador: São João Piamarta. Possuem como carisma a educação da juventude pobre para o mundo do trabalho.
                            </p>
                            <p className="text-lg text-gray-700" >
                               Para atingir esse objetivo, desenvolvem sua missão nas escolas profissionais de modo a oferecer aos jovens pobres, além de um aprendizado intelectual, também uma capacitação técnica. As atividades de promoção humana são realizadas nos orfanatos, acolhendo em regime de internato ou semi-internato os mais carentes e necessitados. Esse carisma se manifesta de forma mais efetiva nas paróquias. Nesse sentido, as igrejas desenvolvem atividades de animação pastoral para crianças, adolescentes e jovens, priorizando a educação e a fé.</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/estatua.webp" // Imagem Placeholder
                                alt="Imagem histórica da congregação"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div className="md:col-start-2">
                            <h2 className="text-4xl md:text-3xl font-bold mb-6 text-purple-800">
                                O texto a seguir é uma tradução do texto italiano do site piamarta.org
                            </h2>
                            <p className="text-lg text-gray-700 mb-6" >
                               O texto a seguir é uma tradução do texto italiano do site piamarta.org
                                Nossa aventura começa em Brescia, na noite de 03 de dezembro de 1886, quando o padre Giovanni Piamarta celebra a missa com quatro meninos na igreja do seminário de San Cristo e coleciona seus “artesanatos” em duas casas antigas perto da colina de Santa Giulia, lar de um antigo mosteiro beneditino. Para aqueles meninos, que precisam de tudo, ele quer ser como um ‘pai’, que os treina na fé, em uma boa profissão e em uma vida social pacífica, nos anos difíceis do final do século XIX.
                                Para essas crianças, o padre Piamarta deixou o cargo de pároco em Pavone Mella (BS) e dedicou-se em tempo integral à educação e à construção do novo Instituto nascente.
                                As primeiras vezes foram muito difíceis, mas Piamarta acreditou cegamente na ajuda da Providência de Deus e sabia que ele não poderia realizar o trabalho iniciado com sua própria força… talvez um projeto maior do que suas possibilidades, mas em seu coração ele tinha a certeza de que os sonhos de Deus devem ser realizados: com dedicação, humildade e colaboração de muitos apaixonados pelos mesmos sonhos.
                                Após a morte do Padre Piamarta (25 de abril de 1913), os colaboradores que ele reuniu na “Sociedade Piedosa da Sagrada Família” (1900) continuaram o trabalho, levando-o a algumas cidades italianas (Siena, Latina, Roma). Aprovada posteriormente como a “Congregação da Sagrada Família de Nazaré” (1939), hoje se estende, assim como na Itália, ao Brasil (1957), Chile (1983), Angola (1992) e Moçambique (2001). O padre Giovanni Battista Piamarta foi beatificado pelo papa João Paulo II em 12 de outubro de 1997 e canonizado por Bento XVI em 21 de outubro de 2012.</p>
                        </div>
                        
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div > 
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
                            Onde estão presentes os Padres Piamartinos?
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Os piamartinos estão presentes no centro e norte da Itália, no Brasil (Maranhão, Ceará, Paraná e Amapá), no Chile e em Angola.
                            A congregação Sagrada Família de Nazaré também administra um site cujo endereço é: http://www.piamarta.org/
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/igrejaBresia.jpg" // Imagem Placeholder
                                alt="Imagem histórica da congregação"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
         
            </main>

        </div>
    );
}