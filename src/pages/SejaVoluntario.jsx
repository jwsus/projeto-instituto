import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Heart, Users, BookOpen, Music, Palette, Camera } from 'lucide-react'

const SejaVoluntario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: '',
    periodo: '',
    disponibilidade: [],
    experiencia: '',
    motivacao: ''
  })

  const areasAtuacao = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Educação",
      description: "Apoio pedagógico e reforço escolar"
    },
    {
      icon: <Music className="h-8 w-8 text-purple-500" />,
      title: "Arte e Cultura",
      description: "Oficinas de música, teatro e dança"
    },
    {
      icon: <Palette className="h-8 w-8 text-orange-500" />,
      title: "Artes Visuais",
      description: "Pintura, desenho e artesanato"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Assistência Social",
      description: "Acompanhamento familiar e social"
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Psicologia",
      description: "Apoio emocional e psicológico"
    },
    {
      icon: <Camera className="h-8 w-8 text-teal-500" />,
      title: "Comunicação",
      description: "Fotografia, vídeo e marketing"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    // Aqui seria implementada a lógica de envio
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Seja um <span className="text-orange-300">Voluntário</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Transforme vidas e seja transformado! Junte-se à nossa equipe de voluntários 
              e faça a diferença na vida de crianças e adolescentes.
            </p>
          </div>
        </div>
      </section>

      {/* Por que ser voluntário */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que ser <span className="text-teal-600">Voluntário?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O voluntariado é uma via de mão dupla: enquanto você contribui para o desenvolvimento 
              de crianças e adolescentes, também cresce pessoal e profissionalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impacto Social</h3>
                <p className="text-gray-600">
                  Contribua diretamente para a transformação social e o desenvolvimento de crianças e adolescentes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Desenvolvimento Pessoal</h3>
                <p className="text-gray-600">
                  Desenvolva novas habilidades, amplie sua rede de contatos e ganhe experiências únicas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aprendizado Contínuo</h3>
                <p className="text-gray-600">
                  Aprenda com as experiências, desafios e conquistas das crianças e adolescentes atendidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Áreas de <span className="text-teal-600">Atuação</span>
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a área que mais combina com seu perfil e experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasAtuacao.map((area, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {area.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{area.title}</h3>
                  </div>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Inscreva-se como <span className="text-teal-600">Voluntário</span>
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e entraremos em contato com você
            </p>
          </div>

          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-teal-600">Formulário de Inscrição</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="area">Área de Interesse *</Label>
                    <Select onValueChange={(value) => handleInputChange('area', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione uma área" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="arte-cultura">Arte e Cultura</SelectItem>
                        <SelectItem value="artes-visuais">Artes Visuais</SelectItem>
                        <SelectItem value="assistencia-social">Assistência Social</SelectItem>
                        <SelectItem value="psicologia">Psicologia</SelectItem>
                        <SelectItem value="comunicacao">Comunicação</SelectItem>
                        <SelectItem value="administracao">Administração</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="periodo">Período de Disponibilidade *</Label>
                  <Select onValueChange={(value) => handleInputChange('periodo', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã</SelectItem>
                      <SelectItem value="tarde">Tarde</SelectItem>
                      <SelectItem value="noite">Noite</SelectItem>
                      <SelectItem value="fins-semana">Fins de semana</SelectItem>
                      <SelectItem value="flexivel">Flexível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Dias da Semana Disponíveis</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                    {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((dia) => (
                      <div key={dia} className="flex items-center space-x-2">
                        <Checkbox id={dia} />
                        <Label htmlFor={dia} className="text-sm">{dia}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experiencia">Experiência Anterior</Label>
                  <Textarea
                    id="experiencia"
                    value={formData.experiencia}
                    onChange={(e) => handleInputChange('experiencia', e.target.value)}
                    placeholder="Conte-nos sobre sua experiência anterior com voluntariado ou trabalho social..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="motivacao">Por que quer ser voluntário? *</Label>
                  <Textarea
                    id="motivacao"
                    value={formData.motivacao}
                    onChange={(e) => handleInputChange('motivacao', e.target.value)}
                    placeholder="Compartilhe sua motivação para ser voluntário no Instituto João XXIII..."
                    className="mt-1"
                    required
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-12">
                    Enviar Inscrição
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Juntos Somos Mais Fortes
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Cada voluntário é uma peça fundamental na nossa missão de transformação social. 
            Sua contribuição, seja qual for, faz a diferença na vida de muitas crianças e adolescentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Fale Conosco
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Conheça Nosso Trabalho
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SejaVoluntario
