'use client' // Adicione esta linha se estiver usando Next.js App Router

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog'
import { Heart, Gift, Music, Users, BookOpen, Utensils, Copy } from 'lucide-react'

// Objeto para representar a cota de doação selecionada
// Usar interface ou type para melhor tipagem
interface Cota {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
  popular: boolean;
  qrCodeUrl: string; // URL da imagem do QR Code
  pixCopiaECola: string; // Código do PIX Copia e Cola
}

const DoeAgora = () => {
  // --- PASSO 1: Adicionar estado ---
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCota, setSelectedCota] = useState<Cota | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  // --- PASSO 2: Modificar dados para incluir QR Code e PIX ---
  // Usei um placeholder para as imagens de QR Code. Substitua pelas suas URLs reais.
  const cotasDoacao: Cota[] = [
    {
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      title: "Doação Livre",
      value: "Qualquer valor",
      description: "Contribua com o valor que desejar para apoiar nossos projetos",
      color: "pink",
      popular: false,
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=doacao-livre",
      pixCopiaECola: "00020126330014BR.GOV.BCB.PIX01111234567890152040000530398654040.005802BR5913APOIADORLIVRE6009SAOPAULO62070503***6304E7C4"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: "Materiais para Oficina",
      value: "R$ 100,00",
      description: "Ajude a custear materiais necessários para as oficinas educativas",
      color: "blue",
      popular: false,
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=doacao-100",
      pixCopiaECola: "00020126330014BR.GOV.BCB.PIX0111123456789015204000053039865404100.005802BR5913APOIADOR1006009SAOPAULO62070503***6304ABCD"
    },
    {
      icon: <Utensils className="h-12 w-12 text-orange-500" />,
      title: "Lanche",
      value: "R$ 50,00",
      description: "Garanta a alimentação das crianças durante as atividades",
      color: "orange",
      popular: true,
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=doacao-50",
      pixCopiaECola: "00020126330014BR.GOV.BCB.PIX011112345678901520400005303986540450.005802BR5913APOIADOR506009SAOPAULO62070503***63041234"
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Oficina",
      value: "R$ 300,00",
      description: "Patrocine uma oficina completa para um grupo de crianças",
      color: "green",
      popular: false,
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=doacao-300",
      pixCopiaECola: "00020126330014BR.GOV.BCB.PIX0111123456789015204000053039865404300.005802BR5913APOIADOR3006009SAOPAULO62070503***6304EFGH"
    },
    {
      icon: <Music className="h-12 w-12 text-purple-500" />,
      title: "Instrumento Musical",
      value: "R$ 450,00",
      description: "Doe um instrumento musical para nossas atividades culturais",
      color: "purple",
      popular: false,
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=doacao-450",
      pixCopiaECola: "00020126330014BR.GOV.BCB.PIX0111123456789015204000053039865404450.005802BR5913APOIADOR4506009SAOPAULO62070503***6304IJKL"
    },
    {
      icon: <Gift className="h-12 w-12 text-teal-500" />,
      title: "Educando por Mês",
      value: "R$ 600,00",
      description: "Apadrinhe um educando e custeie suas atividades mensais",
      color: "teal",
      popular: true,
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=doacao-600",
      pixCopiaECola: "00020126330014BR.GOV.BCB.PIX0111123456789015204000053039865404600.005802BR5913APOIADOR6006009SAOPAULO62070503***6304MNOP"
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
  
  // --- PASSO 3: Criar a função de clique ---
  const handleDoarClick = (cota: Cota) => {
    setSelectedCota(cota)
    setIsModalOpen(true)
    setIsCopied(false) // Reseta o estado do botão de copiar
  }

  const handleCopyPix = () => {
    if (selectedCota) {
      navigator.clipboard.writeText(selectedCota.pixCopiaECola);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Volta ao estado original após 2 segundos
    }
  }

  const getColorClasses = (color, popular = false) => {
    // ... (código existente)
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
    // ... (código existente)
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
      {/* Hero Section (código existente) */}
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
                    // MODIFICAÇÃO: Adicionar onClick para chamar a função
                    onClick={() => handleDoarClick(cota)}
                  >
                    Doar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outras seções (código existente) ... */}
      {/* ... */}
      
      {/* --- PASSO 4: Implementar o Modal (Dialog) --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedCota && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-center">
                  Doar: {selectedCota.title}
                </DialogTitle>
                <DialogDescription className="text-center">
                  Escaneie o QR Code abaixo com o app do seu banco.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col items-center gap-4 py-4">
                <div className="p-2 bg-white rounded-lg border">
                  <img 
                    src={selectedCota.qrCodeUrl} 
                    alt={`QR Code para ${selectedCota.title}`}
                    width={250}
                    height={250}
                  />
                </div>
                <p className="text-sm text-muted-foreground">Valor: <strong>{selectedCota.value}</strong></p>
                
                <div className="w-full">
                  <label htmlFor="pix-copia-cola" className="text-sm font-medium">Ou use o PIX Copia e Cola:</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input 
                      id="pix-copia-cola"
                      type="text" 
                      readOnly 
                      value={selectedCota.pixCopiaECola} 
                      className="flex-1 p-2 border rounded-md bg-gray-100 text-xs truncate"
                    />
                    <Button variant="outline" size="icon" onClick={handleCopyPix}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  {isCopied && <p className="text-xs text-green-600 mt-1">Código copiado!</p>}
                </div>
              </div>

              <DialogFooter>
                <p className="text-xs text-center text-gray-500 w-full">
                  Sua doação é muito importante para nós. Muito obrigado!
                </p>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default DoeAgora