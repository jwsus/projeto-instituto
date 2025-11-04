// src/pages/Home.jsx

import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Importações adicionadas
import { Link } from "react-router-dom";
// WaveDivider foi REMOVIDO

/* NOTA SOBRE FONTES:
  Lembre-se de importar "Bubblegum Sans" e "Fredoka"
  no seu CSS global e tailwind.config.js para que as fontes
  (font-bubblegum e font-fredoka) funcionem.
*/

// --- SEUS DADOS DAS SEDES (MANTIDOS) ---
const sedesAngola = [
  {
    nome: "Luanda",
    descricao: "Centro educacional e social na capital",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/9430-6db4a29ced09-1024x768.jpg"
  },
  {
    nome: "Benguela",
    descricao: "Apoio comunitário e formação",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/8000-b8b169d1fd74-768x1024.jpg"
  },
  {
    nome: "Huambo",
    descricao: "Projetos educacionais sustentáveis",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/8bd1-39166be16d64-1024x768.jpg"
  }
];

const sedesBrasil = [
  {
    nome: "São Paulo - Caravaggio",
    descricao: "Paróquia Nossa Senhora de Caravaggio",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ParA³quia-Nossa-Senhora-de-Caravaggio.webp"
  },
  {
    nome: "Fartura",
    descricao: "Instituto João XXIII",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Background-1024x576.png"
  },
  {
    nome: "Escola Agrícola",
    descricao: "Escola Agrícola Padre Piamarta",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Escola-AgrA­cola-Padre-Piamarta.jpg"
  }
];

const sedesChile = [
  {
    nome: "Santiago",
    descricao: "Casa Piamarta Central",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Casa-Piamarta-Central-1024x527.jpg"
  },
  {
    nome: "Valparaíso",
    descricao: "Paróquia Rainha dos Apóstolos",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ParA³quia-Rainha-dos-ApA³stolos-1024x657.png"
  },
  {
    nome: "Concepción",
    descricao: "Colégio Juan Piamarta",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ColA©gio-Juan-Piamarta-1024x518.jpg"
  }
];

const sedesItalia = [
  {
    nome: "Brescia",
    descricao: "Editrice Queriniana",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Editrice-Queriniana.jpg"
  },
  {
    nome: "Parma",
    descricao: "Paróquia de Sant'Anna",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/ParA³quia-de-SantAnna-1024x683.jpeg"
  },
  {
    nome: "Cremona",
    descricao: "Instituto Bonsignori",
    imagem: "https://joaoxxiii.org.br/wp-content/uploads/2022/07/Instituto-Bonsignori-1024x575.jpg"
  }
];

// --- 2. CARD REFATORADO ---
// Substituí 'renderSedeCard' por um componente mais limpo
// que usa suas imagens e descrições.

const SedeCard = ({ sede, cardColor }) => (
  <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
    {/* Imagem do seu array de dados */}
    <div className="aspect-video overflow-hidden">
      <img
        src={sede.imagem}
        alt={sede.nome}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    
    {/* Barra de cor */}
    <div className={`h-2 ${cardColor.replace('text-', 'bg-')}`}></div>

    <CardContent className="p-6 flex flex-col flex-grow">
      {/* Título com a fonte 'Fredoka' */}
      <h3
        className={`text-2xl font-bold mb-3 ${cardColor}`}
        style={{ fontFamily: 'Fredoka, sans-serif' }}
      >
        {sede.nome}
      </h3>
      {/* Descrição com a fonte 'Fredoka' */}
      <p 
        className="text-gray-600 mb-5 flex-grow"
        style={{ fontFamily: 'Fredoka, sans-serif' }}
      >
        {sede.descricao}
      </p>
      {/* Link (ainda não aponta para nada) */}
      <Link
        to="#" // Futuramente, link para a página da sede específica
        className={`inline-flex items-center text-sm font-semibold ${cardColor} hover:underline group`}
      >
        Saiba Mais
        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </CardContent>
  </div>
);


// --- 3. SEÇÃO DE PAÍS REUTILIZÁVEL ---
// Componente para criar as seções (brancas ou coloridas)

const SedesSection = ({
  id,
  name,
  description,
  sedes,
  bgColor,
  titleColor,
  cardColor,
  descriptionColor
}) => {

  return (
    // A tag <WaveDivider> foi removida daqui
    <section id={id} className={`${bgColor} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Título com a fonte 'Bubblegum Sans' */}
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${titleColor}`}
            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
          >
            Sedes no {name}
          </h2>
          {/* Descrição com a fonte 'Fredoka' */}
          <p
            className={`text-xl ${descriptionColor}`}
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sedes.map((sede) => (
            <SedeCard
              key={sede.nome}
              sede={sede}
              cardColor={cardColor}
            />
          ))}
        </div>
      </div>
      {/* A tag <WaveDivider> foi removida daqui */}
    </section>
  );
};


// --- 4. COMPONENTE HOME (PRINCIPAL) ---

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* --- Hero Section Refatorada --- */}
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
          {/* A tag <WaveDivider> foi removida daqui */}
        </section>

        {/* --- Seções dos Países Refatoradas --- */}
        
        <SedesSection
          id="brasil"
          name="Brasil"
          description="No Brasil, os Piamartinos atuam em diversas regiões, oferecendo programas de formação e assistência, com foco no fortalecimento da fé e na inclusão social."
          sedes={sedesBrasil}
          bgColor="bg-white"
          titleColor="text-green-700"
          cardColor="text-green-600"
          descriptionColor="text-gray-600"
        />
        
        <SedesSection
          id="angola"
          name="Angola"
          description="Na Angola, nossa congregação se dedica a apoiar comunidades locais através de projetos educacionais e sociais, promovendo esperança e desenvolvimento sustentável."
          sedes={sedesAngola}
          bgColor="bg-yellow-50"
          // waveColor foi removido
          titleColor="text-yellow-800"
          cardColor="text-yellow-600"
          descriptionColor="text-yellow-700"
        />

        <SedesSection
          id="chile"
          name="Chile"
          description="No Chile, nossa missão é promover a solidariedade e o bem-estar das famílias, através de iniciativas que englobam educação, saúde e apoio espiritual."
          sedes={sedesChile}
          bgColor="bg-white"
          titleColor="text-red-700"
          cardColor="text-red-600"
          descriptionColor="text-gray-600"
        />

        <SedesSection
          id="italia"
          name="Itália"
          description="Na Itália, onde nossa história começou, continuamos a expandir nossas obras, focando em inovação e tradição, sempre em prol do crescimento humano e espiritual."
          sedes={sedesItalia}
          bgColor="bg-blue-50"
          // waveColor foi removido
          titleColor="text-blue-800"
          cardColor="text-blue-600"
          descriptionColor="text-blue-700"
        />

        {/* --- Call to Action Final (Refatorado) --- */}
        <section className="relative py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <Heart className="h-16 w-16 mx-auto mb-6 animate-pulse" />
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-8"
              style={{ fontFamily: 'Bubblegum Sans, cursive' }}
            >
              Faça Parte Dessa Missão!
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Sua ajuda transforma vidas em 4 países. Junte-se a nós!
            </p>
            <Link
              to="/doe-agora" // Apontando para a página de doação
              className="inline-block bg-white hover:bg-gray-100 text-purple-600 rounded-full px-12 py-6 text-2xl font-bold transform hover:scale-110 transition-transform shadow-2xl"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              QUERO AJUDAR! ❤️
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}