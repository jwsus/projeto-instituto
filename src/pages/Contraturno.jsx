import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, Target, Heart } from 'lucide-react'

// O componente original era Contato, mas o conteúdo é sobre Contraturno (SCFV)
const Contraturno = () => {
  // Conteúdo extraído da página https://institutojoaoxxiii.org/contraturno/

  const heroContent = {
    title: "Serviço de Convivência e Fortalecimento de Vínculos (SCFV)",
    subtitle: "O Mundo da Criança abarca a infância em sua plenitude. Ter infância é direito de toda a criança, direito de brincar, ir à escola, ser cidadã, falar, expor seus pensamentos expressar seus sentimentos.",
    image1: "https://institutojoaoxxiii.org/wp-content/uploads/2024/09/IMG_2259-768x512.jpg", // Imagem 29
    image2: "https://midias.correiobraziliense.com.br/_midias/jpg/2022/10/14/1200x800/1_14102022mf07-26639691.jpg?20221019204316?20221019204316" // Imagem 30
  }

  const objetivoContent = {
    title: "Objetivo",
    paragraphs: [
      "O objetivo é criar um ambiente onde crianças e adolescentes se sintam acolhidos e seguros, estimulando o desenvolvimento de suas habilidades, talentos e potencialidades. Deseja-se proporcionar oportunidades para que ampliem seu conhecimento e vivências culturais, participando de atividades que valorizem a convivência em grupo e o respeito mútuo.",
      "Pretende-se também incentivá-los a serem ativos na sociedade, exercendo sua cidadania e assumindo papéis de protagonismo em suas comunidades. Queremos que as crianças e adolescentes tenham acesso a ferramentas que reforcem a proteção familiar e ajudem a superar desafios no dia a dia, construindo projetos individuais e coletivos que promovam a autoestima e a autonomia.",
      "Eles têm a chance de reconhecer suas próprias forças, limitações e possibilidades de participar de atividades recreativas, esportivas, culturais , artísticas, e assegurar o acesso à documentação civil e ampliação do acesso aos direitos sócio assistenciais necessários. Além disso, é importante que possam expressar suas opiniões, avaliar as atenções recebidas e reivindicar seus direitos, ao mesmo tempo em que conhecem melhor seu território, atribuindo-lhe novos significados e desenvolvendo relações sociais positivas. O fortalecimento dos laços familiares e comunitários será um pilar fundamental neste processo."
    ],
    highlight: "Desenvolver ações socioeducativas para as crianças e adolescentes de 06 a 15 anos e de 15 a 17 anos com foco na defesa e afrimação de direitos e no desenvolvimento da capacidade e potencialidade das crianças e dos adolescentes"
  }

  const quemAtendemos = {
    title: "Quem Atendemos",
    paragraphs: [
      "Nosso trabalho é voltado para crianças, adolescentes e jovens, com especial foco naqueles que se encontram em situações de vulnerabilidade social.",
      "Nosso objetivo é proporcionar apoio e oportunidades para aqueles que, devido a circunstâncias socioeconômicas, têm acesso limitado a recursos e serviços essenciais.",
      "Buscamos oferecer um ambiente acolhedor e inclusivo, onde essas pessoas possam desenvolver habilidades, obter suporte emocional e ter acesso a oportunidades de crescimento pessoal e profissional.",
      "Através de programas educativos, culturais e de apoio psicossocial, queremos capacitar e transformar a vida de jovens que enfrentam desafios em seu cotidiano, ajudando-os a construir um futuro mais promissor."
    ]
  }

  // Cores inspiradas na paleta "viva e lúdica" da página principal:
  // Teal (verde-azulado), Laranja/Amarelo, Cores vibrantes em detalhes.

  // Componente de Destaque para a Missão
  const MissionHighlight = ({ text }) => (
    <div className="bg-orange-500 text-white p-6 md:p-10 rounded-xl shadow-2xl transform hover:scale-[1.01] transition duration-300 relative overflow-hidden">
      <Heart className="absolute -top-4 -right-4 h-20 w-20 opacity-10 rotate-12" />
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 flex items-center">
        <CheckCircle className="inline-block h-8 w-8 mr-3 text-yellow-300" />
        Missão do Programa
      </h2>
      <p className="text-xl leading-relaxed font-semibold">
        {text}
      </p>
    </div>
  )

  // Componente de Imagem com Borda Colorida
  const ImageCard = ({ src, alt, caption, color }) => (
    <Card className={`shadow-xl overflow-hidden border-4 border-${color}-500 transform hover:shadow-2xl transition-all duration-500`}>
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
      <CardContent className="p-4 bg-white text-center">
        <p className="text-sm text-gray-600 font-medium">{caption}</p>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mais vibrante com cores e formas lúdicas */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 md:py-32 relative overflow-hidden">
        {/* Detalhe lúdico: círculos coloridos */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-black mb-4 drop-shadow-lg">
              {heroContent.title.split('E')[0]}
              <span className="text-yellow-300"> E </span>
              {heroContent.title.split('E')[1]}
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-normal font-light">
              {heroContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Destaque e Imagens */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Destaque de Texto */}
            <div className="lg:col-span-2">
              <MissionHighlight text={objetivoContent.highlight} />
            </div>
            {/* Imagem 1 */}
            <ImageCard
              src={heroContent.image1}
              alt="Crianças em atividade de grupo"
              caption="Atividades de convivência e aprendizado."
              color="teal"
            />
          </div>
        </div>
      </section>

      {/* Seção de Objetivo - Estrutura de Cards para mais dinamismo */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nosso <span className="text-teal-600">{objetivoContent.title}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objetivoContent.paragraphs.map((p, index) => (
              <Card key={index} className="shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                <CardHeader className="p-0 mb-4">
                    <Target className="h-8 w-8 text-blue-500" />
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-base text-gray-700 leading-relaxed">
                        {p}
                    </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Quem Atendemos e Imagem 2 - Layout invertido para quebrar a simetria */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Imagem 2 */}
            <div className="order-2 lg:order-1">
                <ImageCard
                    src={heroContent.image2}
                    alt="Crianças em atividade lúdica"
                    caption="Foco no desenvolvimento de habilidades e potencialidades."
                    color="orange"
                />
            </div>

            {/* Texto Quem Atendemos */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                <Users className="inline-block h-8 w-8 text-orange-500 mr-2" />
                <span className="text-orange-500">{quemAtendemos.title.split(' ')[0]}</span> {quemAtendemos.title.split(' ')[1]}
              </h2>
              <div className="space-y-6">
                {quemAtendemos.paragraphs.map((p, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition duration-300 hover:scale-[1.05]">
                Saiba Mais sobre o SCFV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mais direto e colorido */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-black mb-3">Transforme vidas com a gente!</h3>
          <p className="text-xl mb-8">Seja um voluntário ou faça uma doação.</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg" className="bg-yellow-400 text-blue-600 hover:bg-yellow-300 font-bold shadow-xl">
              Seja um Voluntário
            </Button>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-xl">
              Faça uma Doação
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contraturno
