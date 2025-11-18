// src/components/ParceiroCard.jsx

import React from 'react'
import { ExternalLink } from 'lucide-react'

const ParceiroCard = ({ parceiro }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-100 overflow-hidden group">
      
      {/* Área do Logotipo */}
      <div className="h-48 p-6 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-colors duration-300">
        <img
          src={parceiro.imagem}
          alt={`Logo ${parceiro.nome}`}
          className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Área de Informações */}
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 
          className="text-xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          {parceiro.nome}
        </h3>

        {/* Renderiza o botão apenas se houver link */}
        {parceiro.link && (
          <div className="mt-auto">
            <a
              href={parceiro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white font-bold transition-all duration-300"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Visitar Site
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ParceiroCard