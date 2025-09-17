import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Eppi Cinema
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              A melhor plataforma de streaming com milhares de filmes e séries em alta qualidade.
            </p>
            <div className="flex space-x-3">
              <a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="mailto:albieroindica@gmail.com" className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Início</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Preços</a></li>
              <li><a href="#downloads" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Downloads</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Suporte</h4>
            <ul className="space-y-1">
              <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Suporte</a></li>
              <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Central de Ajuda</a></li>
              <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Contato</a></li>
              <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">albieroindica@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">+55 (61) 98222-3599</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-purple-400" />
                <a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">Chat 12/5</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2020 - 2025 Eppi Cinema Br. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}