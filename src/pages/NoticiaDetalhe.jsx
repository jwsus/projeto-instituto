import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mesmas notícias do componente Noticias (em produção isso viria de uma API)
const todasNoticias = [
  {
    id: 0,
    imagens: [
      "img/crianca-scfv.webp",
      "img/crianca2.webp",
      "img/crianca3.webp"
    ],
    titulo: "Crianças do SCFV celebram o Outubro Rosa 💗",
    conteudo:
      "As crianças do SCFV prepararam cartões e flores em homenagem ao Outubro Rosa, um mês dedicado à conscientização e ao cuidado com a saúde.",
    hashtags: ["#institutojoaoxxiii", "#scfv", "#outubrorosa"],
    link: "https://www.instagram.com/p/DQCxwwkgQXC/",
  },
  {
    id: 1,
    imagens: [
      "img/leitao.webp",
    ],
    titulo: "Leitão à Paraguaia 2025 — Um dia de união e alegria 💛",
    conteudo:
      "✨ Alguns registros do nosso Leitão à Paraguaia 2025! Um evento lindo, marcado por união, alegria e muito sabor. Agradecemos de coração a todos que estiveram presentes, aos diretores, voluntários e funcionários que tornaram esse dia possível com tanto empenho e dedicação. 🙏",
    hashtags: ["#leitaoaparaguaia", "#institutojoaoxxiii", "#solidariedade"],
    link: "https://www.instagram.com/p/DPbgUR9jXJ2/",
  },
  {
    id: 2,
    imagens: [
      "img/leitao-paraguaia.webp",
      "img/leitao2.webp",
      "img/leitao3.webp",
      "img/leitao4.webp"
    ],
    titulo: "Leitão à Paraguaia — O grande dia chegou! 🐖",
    conteudo:
      "É hoje! O Leitão à Paraguaia do Instituto João XXIII está acontecendo. Um dia especial de sabor, encontro e solidariedade. 💛",
    hashtags: ["#leitaoaparaguaia", "#joaoxxiii", "#eventosolidario"],
    link: "https://www.instagram.com/p/DPewy87EeT2/",
  },
  {
    id: 3,
    imagens: [
      "img/mulher-empreendedora.jpg",
      "img/mulher-empreendedora2.jpg",
      "img/mulher-empreendedora3.jpg"
    ],
    titulo: "DOAR",
    conteudo:
      "Sua origem vem do latim donatius (dádiva, presente) e donare (doar). O termo também pode a um ato de caridade, como doação de sangue ou de alimentos.Que esse Alimento abençoe a vida de muitas pessoas que precisam 🙏🏻",
    hashtags: [],
    link: "",
  },
]

const NoticiaDetalhe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [noticia, setNoticia] = useState(null)
  const [imagemDestaqueIndex, setImagemDestaqueIndex] = useState(0)
  const [imagemExpandida, setImagemExpandida] = useState(null)
  const [imagemExpandidaIndex, setImagemExpandidaIndex] = useState(0)

  useEffect(() => {
    const noticiaEncontrada = todasNoticias.find(n => n.id === parseInt(id))
    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada)
      setImagemDestaqueIndex(0)
    }
  }, [id])

  // Fechar lightbox com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && imagemExpandida) {
        setImagemExpandida(null)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [imagemExpandida])

  const todasAsImagens = noticia?.imagens || []
  const totalImagens = todasAsImagens.length

  const abrirImagem = (index) => {
    setImagemExpandida(todasAsImagens[index])
    setImagemExpandidaIndex(index)
  }

  const fecharImagem = () => {
    setImagemExpandida(null)
  }

  const proximaImagem = (e) => {
    e.stopPropagation()
    const proximoIndex = (imagemExpandidaIndex + 1) % totalImagens
    setImagemExpandidaIndex(proximoIndex)
    setImagemExpandida(todasAsImagens[proximoIndex])
  }

  const imagemAnterior = (e) => {
    e.stopPropagation()
    const anteriorIndex = (imagemExpandidaIndex - 1 + totalImagens) % totalImagens
    setImagemExpandidaIndex(anteriorIndex)
    setImagemExpandida(todasAsImagens[anteriorIndex])
  }

  if (!noticia) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-teal-900 mb-4">Notícia não encontrada</h1>
          <Button onClick={() => navigate('/noticias')} className="bg-teal-600 hover:bg-teal-700">
            Voltar para Notícias
          </Button>
        </div>
      </section>
    )
  }

  const primeiraImagem = noticia.imagens && noticia.imagens.length > 0 ? noticia.imagens[0] : null
  const outrasImagens = noticia.imagens && noticia.imagens.length > 1 ? noticia.imagens.slice(1) : []

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Botão Voltar */}
        <div className="mb-6">
          <Button
            onClick={() => navigate('/noticias')}
            variant="outline"
            className="border-teal-300 text-teal-700 hover:bg-teal-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Notícias
          </Button>
        </div>

        {/* Cabeçalho da notícia */}
        <header className="mb-10">
          <p className="text-sm text-teal-700 font-semibold uppercase tracking-wide mb-2">
            Notícias • Instituto João XXIII
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
            {noticia.titulo}
          </h1>
        </header>

        {/* Imagem destaque */}
        {primeiraImagem && (
          <div 
            className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-teal-100 bg-white cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => abrirImagem(0)}
          >
            <img
              src={primeiraImagem}
              alt={noticia.titulo}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Texto principal */}
        <article className="prose prose-teal max-w-none prose-p:text-slate-700 prose-headings:text-teal-900">
          <div className="space-y-4">
            {noticia.conteudo.split('\n').map((paragrafo, index) => (
              paragrafo.trim() && (
                <p key={index} className="text-base md:text-lg leading-relaxed">
                  {paragrafo}
                </p>
              )
            ))}
          </div>
        </article>

        {/* Galeria de imagens adicionais */}
        {outrasImagens.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-6">
              Mais registros
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outrasImagens.map((src, i) => {
                const indexOriginal = i + 1 // +1 porque a primeira imagem já está no destaque
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => abrirImagem(indexOriginal)}
                  >
                    <img
                      src={src}
                      alt={`Registro ${i + 1} - ${noticia.titulo}`}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Lightbox para imagens expandidas */}
        {imagemExpandida && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={fecharImagem}
          >
            {/* Botão fechar */}
            <button
              onClick={fecharImagem}
              className="absolute top-4 right-4 text-white hover:text-teal-300 transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navegação - Botão anterior */}
            {totalImagens > 1 && (
              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-teal-300 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Imagem expandida */}
            <div className="max-w-7xl max-h-full relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={imagemExpandida}
                alt={`Imagem ${imagemExpandidaIndex + 1} - ${noticia.titulo}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              
              {/* Indicador de posição */}
              {totalImagens > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {imagemExpandidaIndex + 1} / {totalImagens}
                </div>
              )}
            </div>

            {/* Navegação - Botão próximo */}
            {totalImagens > 1 && (
              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-teal-300 transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </div>
        )}

        {/* Hashtags */}
        {noticia.hashtags && noticia.hashtags.length > 0 && (
          <section className="mt-10">
            <div className="flex flex-wrap gap-2">
              {noticia.hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

export default NoticiaDetalhe
