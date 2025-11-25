  import { Globe, Heart, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// --- DADOS DAS SEDES (MANTIDOS APENAS COMO REFERÊNCIA DE CORES E DESCRIÇÃO) ---
// Os dados dos cards individuais não são mais usados, mas as informações do país são mantidas.
const countryData = [
  {
    id: "brasil",
    name: "Brasil",
    description: "No Brasil, os Piamartinos atuam em diversas regiões, oferecendo programas de formação e assistência, com foco no fortalecimento da fé e na inclusão social.",
    titleColor: "text-green-700",
    cardColor: "text-green-600",
    linkPath: "/brasil",
    flag: "🇧🇷"
  },
  {
    id: "angola",
    name: "Angola",
    description: "Na Angola, nossa congregação se dedica a apoiar comunidades locais através de projetos educacionais e sociais, promovendo esperança e desenvolvimento sustentável.",
    titleColor: "text-yellow-800",
    cardColor: "text-yellow-600",
    linkPath: "/angola",
    flag: "🇦🇴"
  },
  {
    id: "chile",
    name: "Chile",
    description: "No Chile, nossa missão é promover a solidariedade e o bem-estar das famílias, através de iniciativas que englobam educação, saúde e apoio espiritual.",
    titleColor: "text-red-700",
    cardColor: "text-red-600",
    linkPath: "/chile",
    flag: "🇨🇱"
  },
  {
    id: "italia",
    name: "Itália",
    description: "Na Itália, onde nossa história começou, continuamos a expandir nossas obras, focando em inovação e tradição, sempre em prol do crescimento humano e espiritual.",
    titleColor: "text-blue-800",
    cardColor: "text-blue-600",
    linkPath: "/italia",
    flag: "🇮🇹"
  }
];

// --- 2. COMPONENTE DE SEÇÃO SIMPLIFICADO ---
// Removemos a lógica de mapeamento dos SedeCards.

const SedesSection = ({
  id,
  name,
  description,
  bgColor,
  titleColor,
  cardColor, // Mantido para definir a cor do botão
  linkPath,
  flag
}) => {
  // Lógica de cores do botão mantida
  const buttonBgColor = cardColor.replace('text-', 'bg-');
  const buttonHoverBgColor = buttonBgColor.replace('-600', '-700');
  const finalHoverClass = buttonHoverBgColor.includes('text-') 
    ? buttonHoverBgColor.replace('text-', 'hover:bg-') 
    : `hover:bg-${buttonHoverBgColor.split('-')[1]}-700`; 

  return (
    <section id={id} className={`${bgColor} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        
        {/* CABEÇALHO COM BANDEIRA */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            {/* Bandeira proeminente */}
            <span className="text-6xl md:text-7xl mr-5">{flag}</span>
            <h2
              className={`text-5xl md:text-6xl font-bold ${titleColor}`}
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              {name}
            </h2>
          </div>
          
          <p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            {description}
          </p>
        </div>
        
        {/* O GRID DE CARDS FOI REMOVIDO DAQUI */}

        {/* Botão Saiba Mais por País (Centralizado e Único) */}
        <div className="text-center mt-8">
          <Link
            to={linkPath}
            className={`inline-flex items-center text-lg font-bold px-10 py-4 rounded-full text-white shadow-xl transition-all duration-300 transform hover:scale-105 ${buttonBgColor} ${finalHoverClass}`}
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Conheça as Obras no {name}
            <ArrowRight className="h-5 w-5 ml-3" />
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default function sede() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-500 to-blue-500 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Globe className="h-20 w-20 mx-auto mb-6 animate-bounce" />
            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Onde Estamos
            </h1>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Conheça nossas sedes e o impacto que causamos ao redor do mundo,
              fortalecendo vínculos e transformando vidas em 4 países!
            </p>
          </div>
        </section>

        {/* --- Seções dos Países (Agora apenas o cabeçalho e botão) --- */}
        
        {countryData.map((country, index) => (
          <SedesSection
            key={country.id}
            id={country.id}
            name={country.name}
            description={country.description}
            // Alterna o background (Branco / Cinza Claro)
            bgColor={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            titleColor={country.titleColor}
            cardColor={country.cardColor}
            linkPath={country.linkPath}
            flag={country.flag}
          />
        ))}

      </main>

    </div>
  );
}