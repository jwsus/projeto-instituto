// src/components/SedeDetalheCard.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

// Mapeamento de cores (para facilitar o reuso)
const themeColors = {
  green: {
    text: 'text-green-700',
    bg: 'bg-green-600',
    hover: 'hover:text-green-600',
  },
  yellow: {
    text: 'text-yellow-800',
    bg: 'bg-yellow-600',
    hover: 'hover:text-yellow-700',
  },
  red: {
    text: 'text-red-700',
    bg: 'bg-red-600',
    hover: 'hover:text-red-600',
  },
  blue: {
    text: 'text-blue-800',
    bg: 'bg-blue-600',
    hover: 'hover:text-blue-700',
  },
}

const SedeDetalheCard = ({ sede, cor = 'green' }) => {
  const colors = themeColors[cor] || themeColors.green

  return (
    <Card className="rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105">
      <div className="aspect-video overflow-hidden">
        <img
          src={sede.imagem}
          alt={sede.nome}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Barra de cor */}
      <div className={`h-2 ${colors.bg}`}></div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <h3
          className={`text-3xl font-bold mb-4 ${colors.text}`}
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          {sede.nome}
        </h3>
        <p
          className="text-gray-700 mb-6 flex-grow"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          {sede.descricao}
        </p>
        

        {/* Redes Sociais */}
        <div className="flex space-x-4">
          <Link to="#" className={`text-gray-500 ${colors.hover}`}>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link to="#" className={`text-gray-500 ${colors.hover}`}>
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default SedeDetalheCard