import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigation = [
    {
      name: 'Conheça',
      href: '#',
      dropdown: [
        { name: 'Nossa História', href: '/conheca/nossa-historia'},   
        { name: 'Estrutura e Equipe', href: '/conheca/estrutura-equipe' },
        { name: 'Congregação', href: '/conheca/congregacao' },
        { name: 'São João de Piamarta', href: '/conheca/sao-joao-de-piamarta' },
        { name: 'Parceiros', href: '/conheca/parceiros' }
      ]
    },
    { name: 'Nosso Trabalho', href: '/nosso-trabalho', 
      dropdown: [
        { name: 'Hortifruti', href: '/nosso-trabalho/hortifruti'},   
        { name: 'Quadra/Campo', href: '/nosso-trabalho/quadra-campo' },
        { name: 'Convivência', href: '/nosso-trabalho/atividades' },
      ] },
    { name: 'Sedes', href: '/sedes'},
    { name: 'Seja um Voluntário', href: '/seja-voluntario' },
    {
      name: 'Notícias',
      href: '#',
      dropdown: [
        { name: 'Blog', href: '/noticias/blog' },
        { name: 'Na Mídia', href: '/noticias/na-midia' }
      ]
    },
    { name: 'Contato', href: '/contato' }
  ]

  const isActive = (href) => location.pathname === href

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
              João XXIII
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'bg-teal-100 text-teal-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-teal-100 text-teal-700'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Doe Agora Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              asChild
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2"
            >
              <Link to="/doe-agora">Doe Agora</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === index && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-teal-100 text-teal-700'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'bg-teal-100 text-teal-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  asChild
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Link to="/doe-agora" onClick={() => setIsMenuOpen(false)}>
                    Doe Agora
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
