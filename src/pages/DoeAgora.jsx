import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Gift, Music, Users, BookOpen, Utensils } from 'lucide-react'

const DoeAgora = () => {
  const cotasDoacao = [
    {
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      title: "Doação Livre",
      value: "Qualquer valor",
      description: "Contribua com o valor que desejar para apoiar nossos projetos",
      color: "pink",
      popular: false
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: "Materiais para Oficina",
      value: "R$ 100,00",
      description: "Ajude a custear materiais necessários para as oficinas educativas",
      color: "blue",
      popular: false
    },
    {
      icon: <Utensils className="h-12 w-12 text-orange-500" />,
      title: "Lanche",
      value: "R$ 50,00",
      description: "Garanta a alimentação das crianças durante as atividades",
      color: "orange",
      popular: true
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Oficina",
      value: "R$ 300,00",
      description: "Patrocine uma oficina completa para um grupo de crianças",
      color: "green",
      popular: false
    },
    {
      icon: <Music className="h-12 w-12 text-purple-500" />,
      title: "Instrumento Musical",
      value: "R$ 450,00",
      description: "Doe um instrumento musical para nossas atividades culturais",
      color: "purple",
      popular: false
    },
    {
      icon: <Gift className="h-12 w-12 text-teal-500" />,
      title: "Educando por Mês",
      value: "R$ 600,00",
      description: "Apadrinhe um educando e custeie suas atividades mensais",
      color: "teal",
      popular: true
    }
  ]

  const projetos = [
    {
      title: "Reconstruindo o Viver - 2024",
      subtitle: "Lei de incentivo à Cultura (Rouanet)",
      details: [
        "Pronac: 230416",
        "Número Da Proposta: 373489",
        "Nome Do Projeto: Projeto Reconstruindo o Viver",
        "DOU publicado em: 19 de janeiro de 2023 Edição: 14 | Seção: 1 | Página: 57",
        "DOU publicado em: 4 de janeiro de 2024 | Edição: 3 | Seção: 1 | Página: 23"
      ],
      contact: "presidencia@joaoxxiii.org.br"
    },
    {
      title: "Esporte Esperança 2024",
      subtitle: "Lei de incentivo ao esporte",
      details: [
        "Registro: 2304455",
        "Processo: 71000.084430/2023-19",
        "Nome Projeto: Projeto Esporte Esperança",
        "DOU publicado em: 20 de dezembro de 2023 Seção: 1 | Página: 78"
      ],
      contact: "presidencia@joaoxxiii.org.br"
    }
  ]

  const getColorClasses = (color, popular = false) => {
    const colors = {
      pink: popular ? 'border-pink-300 bg-pink-50' : 'border-pink-200 hover:border-pink-300',
      blue: popular ? 'border-blue-300 bg-blue-50' : 'border-blue-200 hover:border-blue-300',
      orange: popular ? 'border-orange-300 bg-orange-50' : 'border-orange-200 hover:border-orange-300',
      green: popular ? 'border-green-300 bg-green-50' : 'border-green-200 hover:border-green-300',
      purple: popular ? 'border-purple-300 bg-purple-50' : 'border-purple-200 hover:border-purple-300',
      teal: popular ? 'border-teal-300 bg-teal-50' : 'border-teal-200 hover:border-teal-300'
    }
    return colors[color] || colors.blue
  }

  const getButtonColor = (color) => {
    const colors = {
      pink: 'bg-pink-500 hover:bg-pink-600',
      blue: 'bg-blue-500 hover:bg-blue-600',
      orange: 'bg-orange-500 hover:bg-orange-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      teal: 'bg-teal-500 hover:bg-teal-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-300">Cotas</span> de <span className="text-orange-300">Doação</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Sua contribuição faz a diferença na vida de crianças e adolescentes. 
              Escolha a forma que mais se adequa ao seu perfil de doação.
            </p>
          </div>
        </div>
      </section>

      {/* Cotas de Doação */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cotasDoacao.map((cota, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  getColorClasses(cota.color, cota.popular)
                }`}
              >
                {cota.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {cota.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {cota.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-gray-900">
                    {cota.value}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cota.description}
                  </p>
                  <Button 
                    className={`w-full text-white ${getButtonColor(cota.color)}`}
                    size="lg"
                  >
                    Doar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Métodos de Pagamento */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Formas de Pagamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">PIX</h3>
                <p className="text-gray-600 mb-4">
                  Forma mais rápida e segura de doar. Transferência instantânea.
                </p>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Doar via PIX
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">PayPal</h3>
                <p className="text-gray-600 mb-4">
                  Pagamento seguro com cartão de crédito ou conta PayPal.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Doar via PayPal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos com Lei de Incentivo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projetos com <span className="text-teal-600">Lei de Incentivo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invista em nossos projetos aprovados em leis de incentivo e tenha benefícios fiscais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projetos.map((projeto, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-teal-600 mb-2">
                    {projeto.title}
                  </CardTitle>
                  <p className="text-lg font-semibold text-orange-600">
                    {projeto.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Identificação</h4>
                    <div className="space-y-2">
                      {projeto.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700">
                      <strong>Interessado em investir?</strong><br />
                      Entre em contato conosco pelo email: 
                      <a href={`mailto:${projeto.contact}`} className="text-blue-600 hover:underline ml-1">
                        {projeto.contact}
                      </a>
                    </p>
                  </div>
                  
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cada Doação Transforma uma Vida
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Sua contribuição, independente do valor, faz a diferença na vida de crianças e adolescentes 
            que precisam de oportunidades para crescer e se desenvolver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Fazer Doação Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Conhecer Nosso Trabalho
            </Button>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparência Total</h2>
          <p className="text-lg text-gray-600 mb-8">
            Somos certificados pelo CEBAS e prestamos contas de todas as nossas atividades. 
            Você pode acompanhar como sua doação está sendo utilizada.
          </p>
          <Button variant="outline" size="lg">
            Ver Relatórios de Transparência
          </Button>
        </div>
      </section>
    </div>
  )
}

export default DoeAgora
