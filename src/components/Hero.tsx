
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Shield, Users, Zap } from "lucide-react";

const Hero = () => {
  const scrollToDownloads = () => {
    const downloadsSection = document.getElementById('downloads');
    if (downloadsSection) {
      downloadsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0" style={{
           backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
           backgroundRepeat: 'repeat'
         }} />
       </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            RECARGA OFICIAL
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-300 mb-5">
            EPPI CINEMA
          </h2>
        </div>

        {/* Quadros Lado a Lado */}
        <div className="mb-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Primeiro Quadro - Você Sabia? */}
              <div className="bg-gradient-to-br from-recarga-red-500/20 to-recarga-orange-500/20 backdrop-blur-lg border border-recarga-red-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-recarga-red-500/25">
                <h3 className="text-sm md:text-base font-bold mb-2 text-center">
                  <span className="bg-gradient-to-r from-recarga-red-400 to-recarga-orange-400 bg-clip-text text-transparent">
                    Você sabia?
                  </span>
                </h3>
                <div className="text-center">
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                    Que manter acesso simultâneo a todos os principais serviços de streaming pode custar <span className="text-recarga-red-400 font-bold">R$ 380 por mês</span>? Isso equivale a mais de <span className="text-recarga-orange-400 font-bold">R$ 4.500 anuais</span> só para ter acesso a catálogos fragmentados.
                  </p>
                </div>
              </div>

            {/* Segundo Quadro - Eppi Cinema */}
              <div className="bg-gradient-to-br from-recarga-green-500/20 to-recarga-lime-500/20 backdrop-blur-lg border border-recarga-green-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-recarga-green-500/25">
                <h4 className="text-sm md:text-base font-bold mb-2 text-center">
                  <span className="bg-gradient-to-r from-recarga-green-400 to-recarga-lime-400 bg-clip-text text-transparent">
                    Eppi Cinema: Tudo em um só lugar.
                  </span>
                </h4>
                <div className="text-center">
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                    Conheça o <span className="text-recarga-orange-400 font-bold">Eppi Cinema</span>, o aplicativo que revoluciona sua experiência audiovisual! Chega de alternar entre telas e senhas.
                  </p>
                </div>
              </div>
          </div>
        </div>


        {/* Área de Promoções de Setembro */}
        <div className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-lg md:text-xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-recarga-green-400 to-recarga-lime-400 bg-clip-text text-transparent">
              🔥 PROMOÇÕES DE SETEMBRO - MÊS DO CLIENTE
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Promoção 1 */}
            <div className="bg-gradient-to-br from-recarga-green-500/30 to-recarga-lime-500/30 backdrop-blur-lg border-2 border-recarga-green-400/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-recarga-green-400/25 relative">
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-recarga-red-500 to-recarga-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                 15% OFF
               </div>
               <h4 className="text-lg font-bold text-white mb-3">Recarga Mensal</h4>
               <div className="mb-3">
                 <p className="text-white/70 text-sm line-through">De R$ 39,99</p>
                 <p className="text-recarga-green-400 text-2xl font-bold">Por R$ 27,99</p>
               </div>
               <p className="text-white/90 text-sm mb-4">
                 Economize R$ 12,00 na sua recarga mensal!
               </p>
               <button 
                 className="w-full bg-gradient-to-r from-recarga-green-500 to-recarga-lime-500 hover:from-recarga-green-600 hover:to-recarga-lime-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                 onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
               >
                 ATIVAR AGORA
               </button>
             </div>

            {/* Promoção 2 */}
            <div className="bg-gradient-to-br from-recarga-red-500/30 to-recarga-orange-500/30 backdrop-blur-lg border-2 border-recarga-red-400/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-recarga-red-400/25 relative">
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-recarga-green-500 to-recarga-lime-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                 OFERTA ESPECIAL
               </div>
               <h4 className="text-lg font-bold text-white mb-3">Recarga Anual com 20% OFF</h4>
               <div className="mb-3">
                 <p className="text-white/70 text-sm line-through">De R$ 335,88</p>
                 <p className="text-recarga-red-400 text-2xl font-bold">Por R$ 166,99</p>
               </div>
               <p className="text-white/90 text-sm mb-4">
                 💰 Economize R$ 168,89 na sua recarga anual e tenha acesso completo por um ano inteiro!
               </p>
               <button 
                 className="w-full bg-gradient-to-r from-recarga-red-500 to-recarga-orange-500 hover:from-recarga-red-600 hover:to-recarga-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                 onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
               >
                 ATIVAR AGORA
               </button>
             </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>+50.000 Clientes</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Ativação instantânea (dentro do horário comercial)*</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400" />
            <span>Suporte Técnico</span>
          </div>
        </div>

        {/* Action Buttons - Ajustados com espaçamento */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
          <Button 
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-recarga-green-500 to-recarga-lime-500 hover:from-recarga-green-600 hover:to-recarga-lime-600 text-black px-12 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            VER RECARGAS
          </Button>
          
          <Button 
            onClick={scrollToDownloads}
            size="lg"
            className="bg-gradient-to-r from-recarga-red-500 to-recarga-orange-500 hover:from-recarga-red-600 hover:to-recarga-orange-600 text-white px-8 py-4 text-base font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Disponível para TV Box e Celular
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
