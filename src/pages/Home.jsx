import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Heart, Users, Award, Calendar } from 'lucide-react'

const Home = () => {
  const depoimentos = [
    {
      texto: "A Yasmin está gostando muito, se sente super bem quando está aí, fez novas amizades e se adaptou muito rápido. Fica pedindo para ir todos os dias para o Instituto e está fazendo muito bem porque ela está interagindo muito mais que antes.",
      autor: "Leidiane, mãe da Educanda Yasmin"
    },
    {
      texto: "Obrigada pelo carinho de sempre que vocês têm pela gente, A Equipe do João XXIII é uma família para nós, nesses momentos tão carentes de laços sanguíneos que temos!",
      autor: "Beatriz, tia da Anna Julya"
    },
    {
      texto: "Eu e o João Miguel estamos amando, pois está ajudando bastante no desenvolvimento dele, nas atividades fora e dentro do Instituto, percebi algumas mudanças positivas.",
      autor: "Ana, Mãe do Educando João Miguel"
    }
  ]

  const basesFundamentais = [
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Educação Social",
      description: "Desenvolvimento de capacidades e potencialidades através da educação"
    },
    {
      icon: <Heart className="h-12 w-12 text-white" />,
      title: "SCFV e Acolhimento Psicossocial",
      description: "Serviço de Convivência e Fortalecimento de Vínculos"
    },
    {
      icon: <Award className="h-12 w-12 text-white" />,
      title: "Agenda 2030",
      description: "Compromisso com os Objetivos de Desenvolvimento Sustentável"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Fortalecimento de Vínculos para 
                <span className="text-orange-300"> Transformação Social</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                <strong>Criado em 1999 por seus idealizadores, Norozeti e José Osvaldo Bergi</strong>, 
                o Instituto João XXIII iniciou suas atividades socioassistenciais com a montagem de um coral infantil 
                com residentes de São Benedito, em Vitória (ES).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link to="/doe-agora">Doe Agora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                  <Link to="/seja-voluntario">Seja um Voluntário</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-300 mb-2">25+</div>
                  <div className="text-lg mb-4">Anos de transformação social</div>
                  <div className="text-3xl font-bold text-orange-300 mb-2">5.000+</div>
                  <div className="text-lg">Famílias acolhidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Hoje são mais de <strong>25 anos de transformação social</strong> e mais de <strong>5.000 famílias</strong> em situação de 
            vulnerabilidade e risco social acolhidas, contribuindo diretamente para a defesa e afirmação dos direitos 
            das crianças e dos adolescentes e para o alcance de alternativas emancipatórias por meio da 
            <strong className="text-teal-600"> Educação Social</strong>, do Serviço de Convivência de Fortalecimento de Vínculos e do 
            <strong className="text-teal-600"> Desenvolvimento Comunitário</strong>.
          </p>
        </div>
      </section>

      {/* Bases Fundamentais */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-orange-500">BASES FUNDAMENTAIS</span>
            </h2>
            <h3 className="text-2xl font-semibold text-teal-600">PARA O NOSSO TRABALHO</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basesFundamentais.map((base, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-8 text-center text-white">
                    <div className="mb-4 flex justify-center">
                      {base.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{base.title}</h4>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-center">{base.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Transforme vidas com a gente!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a nós nessa missão de transformação social e faça a diferença na vida de crianças e adolescentes.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/doe-agora">DOE AGORA</Link>
          </Button>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-600 mb-8">DEPOIMENTOS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "{depoimento.texto}"
                  </p>
                  <p className="text-teal-600 font-semibold text-sm">
                    - {depoimento.autor}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-teal-600">História</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1999
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fundação</h4>
              <p className="text-gray-600 text-sm">Criação do Instituto João XXIII com o primeiro coral infantil</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2011
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transição</h4>
              <p className="text-gray-600 text-sm">Adriana Bergi assume a presidência</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2018
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reconhecimento</h4>
              <p className="text-gray-600 text-sm">Conquista do Certificado CEBAS</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2024
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">25 Anos</h4>
              <p className="text-gray-600 text-sm">Celebração de 25 anos de transformação social</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/conheca/nossa-historia">Ver História Completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notícias Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notí<span className="text-teal-600">cias</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  Projeto Tecno Crias
                </h4>
                <p className="text-gray-600 mb-4">
                  Está com inscrições abertas para oficinas de informática básica para jovens de 14 a 25 anos, em Vitória.
                </p>
                <Button variant="outline" size="sm">Saiba Mais</Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  Uma História de Transformação
                </h4>
                <p className="text-gray-600 mb-4">
                  Conheça Maryangela Santana Olmo, educanda do Instituto João XXIII, que foi entrevistada pelo Criança Esperança.
                </p>
                <Button variant="outline" size="sm">Saiba Mais</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/noticias/blog">Ver Todas as Notícias</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
