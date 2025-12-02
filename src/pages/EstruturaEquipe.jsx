import React, { useState } from 'react'

const imagens = Array.from({length: 17}, (_,i) => `/img/diretoria (${i+1}).webp`)

function EstruturaEquipe() {
  const [fotoExpandida, setFotoExpandida] = useState(null)

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-2">
          Estrutura e Equipe
        </h1>
        <p className="text-center text-lg text-teal-600 mb-12">
          Conheça quem faz parte da gestão do Instituto João XXIII.
        </p>

        {/* Layout Masonry */}
        <div 
          className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6"
          style={{ columnFill: 'balance' }}
        >
          {imagens.map((img, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-teal-500 transition-all group w-full break-inside-avoid-column mb-6 cursor-pointer"
              onClick={() => setFotoExpandida(img)}
            >
              <div className="w-full bg-gray-100 overflow-hidden">
                <img
                  src={img}
                  alt={`Foto diretoria ${i+1}`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 block"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal da imagem expandida */}
        {fotoExpandida && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setFotoExpandida(null)}
          >
            <img 
              src={fotoExpandida} 
              alt="foto ampliada" 
              className="max-w-full max-h-full rounded-xl shadow-2xl" 
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default EstruturaEquipe
