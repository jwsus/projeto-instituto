import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const informacoesContato = [
    {
      icon: <MapPin className="h-6 w-6 text-teal-500" />,
      title: "Endereço",
      content: [
        "R. Padre João Piamarta, 597",
        "Colonia Dona Luiza",
        "Ponta Grossa - PR, 84046-060"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-500" />,
      title: "Telefone",
      content: [
        "(42) 3229-1353",
        "WhatsApp: (42) 3229-1353"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-500" />,
      title: "E-mail",
      content: [
        "perguntas@institutojoaoxxiii.org"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-500" />,
      title: "Horário de Funcionamento",
      content: [
        "Segunda a Sexta: 8h às 17h",
        "Sábado: 8h às 12h",
        "Domingo: Fechado"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-orange-300">Contato</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ouvir você! Entre em contato conosco para esclarecer dúvidas, 
              fazer sugestões ou conhecer melhor nosso trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {informacoesContato.map((info, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.content.map((item, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário e Mapa */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envie uma <span className="text-teal-600">Mensagem</span>
              </h2>
              
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-600">Formulário de Contato</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
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

                    <div>
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Select onValueChange={(value) => handleInputChange('assunto', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="informacoes">Informações Gerais</SelectItem>
                          <SelectItem value="voluntariado">Voluntariado</SelectItem>
                          <SelectItem value="doacoes">Doações</SelectItem>
                          <SelectItem value="parcerias">Parcerias</SelectItem>
                          <SelectItem value="inscricoes">Inscrições</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        placeholder="Digite sua mensagem aqui..."
                        className="mt-1"
                        required
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Localização e Redes Sociais */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nossa <span className="text-teal-600">Localização</span>
              </h2>
              
              {/* Mapa Placeholder */}
              <Card className="bg-white shadow-xl mb-8">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 flex items-center justify-center rounded-t-lg">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Mapa interativo</p>
                      <p className="text-sm">Ponta Grossa, PR</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Instituto João XXIII</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      R. Padre João Piamarta, 597<br />
                      Colonia Dona Luiza<br />
                      Ponta Grossa - PR, 84046-060
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver no Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Redes Sociais */}
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-teal-600">Siga-nos nas Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <Facebook className="h-6 w-6 text-blue-600 mr-3" />
                      <span className="text-gray-700 font-medium">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                      <Instagram className="h-6 w-6 text-pink-600 mr-3" />
                      <span className="text-gray-700 font-medium">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-6 w-6 text-blue-700 mr-3" />
                      <span className="text-gray-700 font-medium">LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                      <Youtube className="h-6 w-6 text-red-600 mr-3" />
                      <span className="text-gray-700 font-medium">YouTube</span>
                    </a>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-green-500 text-white rounded-full p-2 mr-3">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <p className="text-sm text-gray-600">(27) 99999-9999</p>
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white">
                      Conversar no WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-teal-600">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Encontre respostas para as dúvidas mais comuns sobre nosso trabalho
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Como posso me tornar um voluntário?</h3>
                <p className="text-gray-600">
                  Você pode se inscrever através da nossa página "Seja um Voluntário" ou entrando em contato 
                  conosco diretamente. Realizamos uma entrevista e orientação antes do início das atividades.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Quais são os critérios para inscrição das crianças?</h3>
                <p className="text-gray-600">
                  Atendemos crianças e adolescentes de 6 a 17 anos em situação de vulnerabilidade social. 
                  As famílias interessadas devem procurar nossa sede para avaliação e inscrição.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Como posso fazer uma doação?</h3>
                <p className="text-gray-600">
                  Oferecemos várias formas de doação: PIX, transferência bancária, PayPal e também aceitamos 
                  doações de materiais. Visite nossa página "Doe Agora" para mais informações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
