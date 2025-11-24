import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Award, Users, Heart } from 'lucide-react'

const NossaHistoria = () => {
  const timeline = [
    {
      year: "1976",
      title: "Fundação",
      description: "Fundado com a missão de proporcionar um ambiente acolhedor e educacional para crianças e adolescentes carentes. A criação do Instituto surgiu da necessidade de um abrigo para menores na cidade de Ponta Grossa.",
      highlight: true
    },
    {
      year: "2003",
      title: "Primeira Sede",
      description: "Aquisição da 1ª sede no bairro Itararé, nomeado Centro de Artes Arco-íris."
    },
    {
      year: "2004",
      title: "Reconhecimentos",
      description: "Reconhecimento de Utilidade Pública Municipal e Federal. Produção do CD 'Sonhar é preciso'."
    },
    {
      year: "2005-2006",
      title: "Expansão Cultural",
      description: "Abertura do show da banda internacional Genroso. Apresentação do musical 'Caixa de Surpresas'. Reconhecimento de Utilidade Pública Estadual."
    },
    {
      year: "2007-2008",
      title: "Participação Social",
      description: "Participação no Conselho Municipal dos Direitos da Criança e do Adolescente de Vitória (CONCAV). Apresentação dos espetáculos 'SerTão' e 'Ritmos e Danças do Brasil'."
    },
    {
      year: "2010",
      title: "Nova Sede",
      description: "Inauguração da sede em Consolação."
    },
    {
      year: "2011",
      title: "Transição de Liderança",
      description: "No dia 09 de abril de 2011 faleceu o nosso fundador Presidente José Osvaldo Bergi, deixando seu legado de amor e afeto pelas famílias atendidas no João XXIII.",
      highlight: true
    },
    {
      year: "2012",
      title: "Nova Presidência",
      description: "Adriana Bergi, atual presidente, assume o cargo. Conquista do prêmio Atitude Sustentável, da TV Gazeta."
    },
    {
      year: "2013-2014",
      title: "Produções Culturais",
      description: "Produção do segundo CD 'CATIVAR' e lançamento do livro de colorir Mixirica & Taruira."
    },
    {
      year: "2015-2016",
      title: "Ampliação de Público",
      description: "Abertura para um público mais amplo, incluindo educação infantil com 'Lugar do Brincar' até terceira idade com 'Risos Grisalhos'."
    },
    {
      year: "2018",
      title: "Certificação CEBAS",
      description: "Conquista do Certificado de Entidades de Assistência Social (CEBAS). Projeto 'Crescer e Conviver' é selecionado pela Unesco para participar do Criança Esperança.",
      highlight: true
    },
    {
      year: "2020-2021",
      title: "Adaptação à Pandemia",
      description: "Apoio às famílias através da distribuição de itens básicos e criação do J.On XXIII, base online. Projeto 'Semeando Flores' seguindo princípios da Pedagogia Waldorf."
    },
    {
      year: "2022-2023",
      title: "Renovação e Formação",
      description: "Renovação do Certificado CEBAS. Formação em Pedagogia da Emergência e do Trauma."
    },
    {
      year: "2024",
      title: "25 Anos de História",
      description: "Aniversário de 25 anos do Instituto João XXIII. Lançamento dos projetos de orquestra de câmara e Tecno Crias.",
      highlight: true
    }
  ]

  const valores = [
    {
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      title: "Empatia",
      description: "Acolher com respeito e gentileza"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Cooperação",
      description: "Juntos para o bem comum"
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: "Confiança",
      description: "Compromisso com a verdade"
    },
    {
      icon: <Calendar className="h-8 w-8 text-teal-600" />,
      title: "Criatividade",
      description: "Estimular ideias e talentos"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossa <span className="text-orange-300">História</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Uma jornada de 25 anos dedicada à transformação social através do fortalecimento de vínculos 
              e do desenvolvimento de crianças e adolescentes em vulnerabilidade social.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`hidden md:flex absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    item.highlight ? 'bg-orange-500' : 'bg-teal-500'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="md:ml-16 w-full">
                    <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                      item.highlight ? 'border-orange-200 bg-orange-50' : 'border-gray-200'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className={`text-2xl font-bold ${
                            item.highlight ? 'text-orange-600' : 'text-teal-600'
                          }`}>
                            {item.year}
                          </h3>
                          <h4 className="text-lg font-semibold text-gray-900 mt-2 md:mt-0">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Missão, <span className="text-teal-600">Visão</span> e Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Estamos ativos, promovendo a preservação da infância por meio da cultura, da arte e do esporte, 
              contribuindo com o desenvolvimento pleno de crianças e jovens em vulnerabilidade social.
            </p>
            <p className="text-lg text-teal-600 font-semibold mt-4">
              Algo que ninguém pode fazer sozinho! Vamos juntas e juntos?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-teal-600 mb-4">MISSÃO</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promover o desenvolvimento pleno de crianças e adolescentes em risco social por meio do 
                  fortalecimento de um ecossistema favorável à proteção da infância.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">VISÃO</h3>
                <p className="text-gray-700 leading-relaxed">
                  Uma sociedade fraterna e consciente à proteção e garantia dos direitos das crianças e adolescentes.
                </p>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">VALORES</h3>
                <p className="text-gray-700 leading-relaxed">
                  Empatia, Cooperação, Confiança, Criatividade e Encantamento - emoção e brilho no olhar.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {valor.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{valor.title}</h4>
                  <p className="text-gray-600 text-sm">{valor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a nós nessa jornada de transformação social e ajude a escrever os próximos capítulos 
            da nossa história de amor e dedicação às crianças e adolescentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Doe Agora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Seja um Voluntário
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NossaHistoria
