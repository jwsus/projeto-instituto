import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram } from "lucide-react"

const Noticias = () => {
  const noticias = [
    {
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

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Últimas Notícias
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia, idx) => (
          <Card
            key={idx}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col"
          >
            <CarrosselImagens imagens={noticia.imagens || []} />

            <CardHeader className="flex flex-col justify-between flex-1 p-5">
              <CardTitle className="text-lg font-semibold text-gray-800 mb-2">
                {noticia.titulo}
              </CardTitle>
              <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                {noticia.conteudo}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {noticia.hashtags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {noticia.link && noticia.link.trim() !== "" && (
                <a
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium mt-auto"
                >
                  <Instagram className="w-4 h-4 mr-1" /> Ver no Instagram
                </a>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

function CarrosselImagens({ imagens = [] }) {
  const [indice, setIndice] = useState(0)

  if (!imagens.length) return null
  return (
    <div className="relative w-full h-[280px] bg-gray-100 flex items-center justify-center">
      <img
        src={imagens[indice]}
        alt={"imagem notícia " + (indice + 1)}
        className="object-cover w-full h-full rounded-none"
        style={{ transition: 'all 0.4s cubic-bezier(.65,.05,.36,1)' }}
        loading="lazy"
      />
      {imagens.length > 1 && (
        <>
          <button
            onClick={e => {
              e.stopPropagation()
              setIndice(indice === 0 ? imagens.length - 1 : indice - 1)
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 text-white w-9 h-9 flex items-center justify-center hover:bg-teal-500 transition-colors z-10"
            aria-label="Ver imagem anterior"
          >
            &#8592;
          </button>
          <button
            onClick={e => {
              e.stopPropagation()
              setIndice(indice === imagens.length - 1 ? 0 : indice + 1)
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/70 text-white w-9 h-9 flex items-center justify-center hover:bg-teal-500 transition-colors z-10"
            aria-label="Ver próxima imagem"
          >
            &#8594;
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-1">
            {imagens.map((_, i) => (
              <span
                key={i}
                className={`block h-2 w-2 rounded-full ${i === indice ? 'bg-teal-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Noticias
