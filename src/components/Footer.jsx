import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const handleEnviar = (e) => {
    e.preventDefault()
    setEnviando(true)
    setSucesso(false)
    setTimeout(() => {
      setEnviando(false)
      setSucesso(true)
      setNome('')
      setEmail('')
    }, 1500)
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              CADASTRE-SE E RECEBA NOSSAS <span className="text-orange-400">NOVIDADES</span>
            </h3>
            <form
              className="max-w-md mx-auto flex gap-2 flex-col sm:flex-row items-center"
              onSubmit={handleEnviar}
            >
              <Input
                type="text"
                placeholder="Nome"
                className="bg-white text-gray-900"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
                disabled={enviando}
              />
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-white text-gray-900"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={enviando}
              />
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                type="submit"
                disabled={enviando}
              >
                {enviando ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
            {sucesso && (
              <div className="mt-4 text-green-200 font-semibold">
                Cadastro realizado com sucesso!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="bg-teal-500 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
                João XXIII
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Instituto dedicado ao fortalecimento de vínculos para transformação social, 
                trabalhando há mais de 25 anos com crianças e adolescentes em vulnerabilidade social.
              </p>
            </div>

            {/* Links - Conheça */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Conheça</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/conheca/nossa-historia" className="text-gray-300 hover:text-white transition-colors">
                    Nossa História
                  </Link>
                </li>
                <li>
                  <Link to="/conheca/estrutura-equipe" className="text-gray-300 hover:text-white transition-colors">
                    Estrutura e Equipe
                  </Link>
                </li>
                <li>
                  <Link to="/conheca/governanca-transparencia" className="text-gray-300 hover:text-white transition-colors">
                    Governança e Transparência
                  </Link>
                </li>
                <li>
                  <Link to="/conheca/parceiros" className="text-gray-300 hover:text-white transition-colors">
                    Parceiros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links - Ações */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Ações</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/nosso-trabalho" className="text-gray-300 hover:text-white transition-colors">
                    Nosso Trabalho
                  </Link>
                </li>
                <li>
                  <Link to="/doe-agora" className="text-gray-300 hover:text-white transition-colors">
                    Doe Agora
                  </Link>
                </li>
                <li>
                  <Link to="/seja-voluntario" className="text-gray-300 hover:text-white transition-colors">
                    Seja um Voluntário
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-teal-400" />
                  <span className="text-gray-300 text-sm">(42) 3229-1353</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-teal-400" />
                  <span className="text-gray-300 text-sm">perguntas@institutojoaoxxiii.org</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-teal-400 mt-1" />
                  <span className="text-gray-300 text-sm">
                    Ponta Grossa, Paraná<br />
                    Brasil
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3 text-teal-400">Siga-nos</h5>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/institutojoao23" className="text-gray-300 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/piamarta_joao_23/" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white text-sm">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Instituto João XXIII. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Segurança</span>
              <div className="text-gray-400 text-sm">
                Site Seguro - Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
