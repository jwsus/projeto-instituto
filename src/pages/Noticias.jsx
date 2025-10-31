import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram } from "lucide-react"

const Noticias = () => {
  const noticias = [
  {
    imagem:
      "https://scontent.fbfh3-3.fna.fbcdn.net/v/t51.82787-15/567784842_17910918708247215_7213702421355349787_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YgRxk1lMcgsQ7kNvwFZkH8F&_nc_oc=Adl7FLiCjacwXBLWh62pokx8O8VIkqCf_YM_LVUk2rFbFzg8Pe9ZgoQQdA7bi61i4oc&_nc_zt=23&_nc_ht=scontent.fbfh3-3.fna&_nc_gid=JEBd5e87_5Au5v5UI0TaXg&oh=00_AfcieMP4fa3bv01P-S4ldffdgx7N9lFqLJEXlVxNNybNEQ&oe=68FDB1EF",
    titulo: "Crianças do SCFV celebram o Outubro Rosa 💗",
    conteudo:
      "As crianças do SCFV prepararam cartões e flores em homenagem ao Outubro Rosa, um mês dedicado à conscientização e ao cuidado com a saúde.",
    hashtags: ["#institutojoaoxxiii", "#scfv", "#outubrorosa"],
    link: "https://www.instagram.com/p/DQCxwwkgQXC/",
  },
  {
    imagem:
      "https://scontent.fbfh3-3.fna.fbcdn.net/v/t51.82787-15/560422307_17909411688247215_8534535307148269785_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kxfv5UUlhL0Q7kNvwHz-ExJ&_nc_oc=AdnnH9z19Nsmf004-SNH_M4L5NinUkHqUsuR2ii81ZC3lU59PGIrzIf-YIOKR17I8T4&_nc_zt=23&_nc_ht=scontent.fbfh3-3.fna&_nc_gid=e7bYZvsZEtvTwZVdZFI5Jw&oh=00_Affku0Zty-Uffx7RDeukdknfWNxLEey1lfl93h793uuXxA&oe=68FDBE09",
    titulo: "Leitão à Paraguaia 2025 — Um dia de união e alegria 💛",
    conteudo:
      "✨ Alguns registros do nosso Leitão à Paraguaia 2025! Um evento lindo, marcado por união, alegria e muito sabor. Agradecemos de coração a todos que estiveram presentes, aos diretores, voluntários e funcionários que tornaram esse dia possível com tanto empenho e dedicação. 🙏",
    hashtags: ["#leitaoaparaguaia", "#institutojoaoxxiii", "#solidariedade"],
    link: "https://www.instagram.com/p/DPbgUR9jXJ2/",
  },
  {
    imagem:
      "https://scontent.fbfh3-3.fna.fbcdn.net/v/t51.82787-15/560437967_17909270988247215_7953780625900453183_n.webp?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S2TwJ35wj5IQ7kNvwHOvWAX&_nc_oc=Adm0N7tBTkY624tDacVQM26WnSOJUyEn6dD4hxkgixennpAFWWQN1_7GB9WSJJraGoo&_nc_zt=23&_nc_ht=scontent.fbfh3-3.fna&_nc_gid=irIjcq56zNQJfFWWQ5PH2Q&oh=00_AffWQR4juvlW7WFCIl-tVhjtgSpZFOFFZ2xXURJAlMnJxw&oe=68FDB4AE",
    titulo: "Leitão à Paraguaia — O grande dia chegou! 🐖",
    conteudo:
      "É hoje! O Leitão à Paraguaia do Instituto João XXIII está acontecendo. Um dia especial de sabor, encontro e solidariedade. 💛",
    hashtags: ["#leitaoaparaguaia", "#joaoxxiii", "#eventosolidario"],
    link: "https://www.instagram.com/p/DPewy87EeT2/",
  },
]


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Últimas Notícias
      </h1>

      {/* Grade responsiva: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia, idx) => (
          <Card
            key={idx}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col"
          >
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              className="w-full h-[280px] object-cover"
            />

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

              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium mt-auto"
              >
                <Instagram className="w-4 h-4 mr-1" /> Ver no Instagram
              </a>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Noticias
