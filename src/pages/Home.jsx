'use client'; 

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Heart, Users, Award, MessageSquare } from 'lucide-react'

const Home = () => {
  const depoimentos = [
    {
      texto: "A Yasmin está gostando muito, se sente super bem quando está aí, fez novas amizades e se adaptou muito rápido. Fica pedindo para ir todos os dias!",
      autor: "Leidiane, mãe da Yasmin"
    },
    {
      texto: "Obrigada pelo carinho! A Equipe do João XXIII é uma família para nós, nesses momentos tão carentes de laços que temos!",
      autor: "Beatriz, tia da Anna Julya"
    },
    {
      texto: "Eu e o João Miguel estamos amando, pois está ajudando bastante no desenvolvimento dele. Percebi muitas mudanças positivas!",
      autor: "Ana, Mãe do João Miguel"
    }
  ]

  const basesFundamentais = [
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Educação Divertida",
      description: "Aprender brincando é o nosso lema!"
    },
    {
      icon: <Heart className="h-12 w-12 text-white" />,
      title: "Abraços e Carinho",
      description: "Cuidamos dos laços de amizade e família."
    },
    {
      icon: <Award className="h-12 w-12 text-white" />,
      title: "Cuidando do Planeta",
      description: "Ensinamos a importância de um futuro sustentável."
    }
  ]

  // Imagens vibrantes e lúdicas
 const heroBackgroundImage = 'https://joaoxxiii.org.br/wp-content/uploads/2022/07/Foto-inicial-1-1-1.png';// Crianças brincando com tinta
  const basesBackgroundImage = 'https://joaoxxiii.org.br/wp-content/uploads/2022/07/2022-1.jpg'; // Crianças correndo em um campo
  const depoimentosBackgroundImage = 'https://joaoxxiii.org.br/wp-content/uploads/2022/07/2018-1-768x512.jpg'; // Crianças lendo/escrevendo juntas
  const ctaBackgroundImage ='https://joaoxxiii.org.br/wp-content/uploads/2022/07/Foto-inicial-1-1-1.png'; // Criança sorrindo de perto
  
  // Definimos as cores e a fonte aqui, já que não temos o tailwind.config.js
  const handwritingFont = '"Comic Sans MS", "Chalkduster", "Chalkboard SE", cursive, sans-serif';
  const brandColors = {
    sky: '#38bdf8',
    yellow: '#facc15',
    green: '#4ade80',
    orange: '#fb923c',
    pink: '#f472b6',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-sky-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transform -rotate-1">
              <h1 
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: handwritingFont }}
              >
                Criando um futuro com mais
                <span style={{ color: brandColors.yellow }}> Cor & Alegria</span>
              </h1>
              <p className="font-sans text-xl mb-8 text-sky-100 leading-relaxed">
                Desde 1999, usamos a arte e a educação para pintar sorrisos e construir sonhos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-xl font-bold rounded-full transform hover:scale-105 transition-transform" style={{ fontFamily: handwritingFont, backgroundColor: brandColors.yellow, color: '#854d0e' }}>
                  <Link to="/doe-agora">Doe Agora!</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-xl border-2 border-white bg-white text-[color:var(--brand-sky)] hover:bg-white hover:text-[color:var(--brand-sky)] font-bold rounded-full transform hover:scale-105 transition-transform"
                  style={{ fontFamily: handwritingFont, '--brand-sky': brandColors.sky }}
                >
                  <Link to="/seja-voluntario">Seja um Amigo</Link>
                </Button>

              </div>
            </div>
            <div className="relative hidden lg:block transform rotate-2">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border-4 border-white/50 shadow-lg">
                <div className="text-center" style={{ fontFamily: handwritingFont }}>
                  <div className="text-6xl font-bold mb-2" style={{ color: brandColors.yellow }}>25+</div>
                  <div className="text-2xl mb-4">anos de brincadeira</div>
                  <div className="text-4xl font-bold mb-2" style={{ color: brandColors.yellow }}>5.000+</div>
                  <div className="text-2xl">famílias felizes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bases Fundamentais (Super Poderes) */}
      <section 
        className="relative py-20 bg-cover bg-center" // Adicionado bg-cover bg-center
        style={{ backgroundImage: `url(${basesBackgroundImage})` }} // <== IMAGEM DE FUNDO AQUI
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(74, 222, 128, 0.7)' }}></div> {/* <== OVERLAY VERDE */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: handwritingFont }}>
              Nossos Super Poderes
            </h2>
            <p className="font-sans text-xl text-green-100">O que fazemos de melhor!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basesFundamentais.map((base, index) => (
              <div 
                key={index} 
                className={`transform transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
              >
                <Card className="border-4 border-green-800 bg-white/80 rounded-2xl shadow-lg h-full"> {/* Fundo levemente transparente */}
                  <CardContent className="p-8 text-center text-green-800 flex flex-col items-center h-full">
                    <div className="mb-4 flex justify-center text-white p-4 rounded-full" style={{ backgroundColor: brandColors.green }}>
                      {base.icon}
                    </div>
                    <h4 className="text-3xl font-bold mb-3" style={{ fontFamily: handwritingFont }}>{base.title}</h4>
                    <p className="font-sans text-green-700">{base.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Depoimentos (Recadinhos de Coração) */}
      <section 
        className="relative py-20 bg-cover bg-center" // Adicionado bg-cover bg-center
        style={{ backgroundImage: `url(${depoimentosBackgroundImage})` }} // <== IMAGEM DE FUNDO AQUI
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(244, 114, 182, 0.7)' }}></div> {/* <== OVERLAY ROSA */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white" style={{ fontFamily: handwritingFont }}>
              Recadinhos de Coração
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white/90 p-6 rounded-2xl border-4 shadow-lg relative transform -rotate-1 hover:rotate-1 transition-transform" style={{ borderColor: '#9d174d' }}> {/* Fundo levemente transparente */}
                  <MessageSquare className="absolute -top-5 -left-5 h-16 w-16 fill-white" style={{ color: brandColors.pink }} />
                  <p className="font-sans text-gray-700 mb-4 italic leading-relaxed">
                    "{depoimento.texto}"
                  </p>
                  <p className="font-bold text-xl" style={{ fontFamily: handwritingFont, color: '#9d174d' }}>
                    - {depoimento.autor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackgroundImage})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(251, 146, 60, 0.7)' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: handwritingFont }}>Venha pintar esse futuro com a gente!</h2>
          <Button asChild size="lg" className="text-2xl font-bold rounded-full px-10 py-8 transform hover:scale-110 transition-transform" style={{ fontFamily: handwritingFont, backgroundColor: 'white', color: brandColors.orange }}>
            <Link to="/doe-agora">QUERO AJUDAR!</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home