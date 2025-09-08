
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
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            RECARGA OFICIAL
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            EPPI CINEMA
          </h2>
        </div>

        {/* Pricing Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-recarga-green-500/20 to-recarga-lime-500/20 backdrop-blur-lg border border-recarga-green-500/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-recarga-green-500/25">
            <h3 className="text-xl font-bold text-white mb-2">Mensal</h3>
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-recarga-green-400 to-recarga-lime-400 bg-clip-text text-transparent">
                R$ 39,99
              </span>
            </div>
            <ul className="text-white/90 space-y-2 text-sm">
              <li>✓ Acesso completo</li>
              <li>✓ Suporte Técnico</li>
              <li>✓ Sem anúncios</li>
              <li>✓ Qualidade HD</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-recarga-red-500/30 to-recarga-orange-500/30 backdrop-blur-lg border-2 border-recarga-red-400/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-recarga-red-400/25 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-recarga-green-400 to-recarga-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              <span className="flex items-center gap-1">
                MAIS POPULAR
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Anual</h3>
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-recarga-red-400 to-recarga-orange-400 bg-clip-text text-transparent">
                R$ 239,99
              </span>
            </div>
            <ul className="text-white/90 space-y-2 text-sm">
              <li>✓ Acesso completo</li>
              <li>✓ Suporte Técnico</li>
              <li>✓ Sem anúncios</li>
              <li>✓ Qualidade HD/4K</li>
                <li>✓ Economia de 50%</li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm">
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
          <Button 
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-recarga-green-500 to-recarga-lime-500 hover:from-recarga-green-600 hover:to-recarga-lime-600 text-black px-12 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            VER PLANOS
          </Button>
          
          <Button 
            onClick={scrollToDownloads}
            size="lg"
            className="bg-gradient-to-r from-recarga-red-500 to-recarga-orange-500 hover:from-recarga-red-600 hover:to-recarga-orange-600 text-white px-12 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            BAIXAR APP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
