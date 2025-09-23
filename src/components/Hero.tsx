
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  
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
            {t('hero.subtitle')}
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-300 mb-5">
            {t('hero.title')}
          </h2>
        </div>

        {/* Quadros Lado a Lado */}
        <div className="mb-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Primeiro Quadro - Você Sabia? */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-500/25">
              <h3 className="text-lg font-bold text-white mb-2">{t('hero.didYouKnow')}</h3>
              <p className="text-white/90 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('hero.costComparison') }} />
            </div>

            {/* Segundo Quadro - Nossa Solução */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg border border-green-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25">
              <h3 className="text-lg font-bold text-white mb-2">{t('hero.ourSolution')}</h3>
              <p className="text-white/90 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('hero.appDescription') }} />
            </div>
          </div>
        </div>

        {/* Quadros de Promoção */}
        <div className="mb-8 max-w-5xl mx-auto">
          <div className={`grid grid-cols-1 gap-4 ${language === 'pt' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            {/* Promoção Mensal */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex flex-col h-full">
              <h4 className="text-lg font-bold text-white mb-2">{t('promotions.monthlyTitle')}</h4>
              <div className="mb-2">
                <p className="text-white/70 text-sm line-through">{t('promotions.monthlyOriginalPrice')}</p>
                <p className="text-blue-400 text-2xl font-bold">{t('promotions.monthlyPrice')}</p>
              </div>
              <p className="text-white/90 text-sm leading-relaxed flex-grow">
                {t('promotions.monthlySavings')}
              </p>
              {language === 'en' && (
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-2 mt-2 mb-2">
                  <p className="text-blue-200 text-xs font-medium">
                    {t('pricing.duoPlan')}
                  </p>
                </div>
              )}
              <button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 w-full mt-3"
                onClick={() => window.open(language === 'en' ? 'https://chat.whatsapp.com/HIBmUWCuNeAFfFzmru99MP' : 'https://biolivre.com.br/nuvembr', '_blank')}
              >
                {t('promotions.activateNow')}
              </button>
            </div>

            {/* Promoção Anual */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-500/25 flex flex-col h-full">
              <h4 className="text-lg font-bold text-white mb-2">{t('promotions.annualTitle')}</h4>
              <div className="mb-2">
                <p className="text-white/70 text-sm line-through">{t('promotions.annualOriginalPrice')}</p>
                <p className="text-red-400 text-2xl font-bold">{t('promotions.annualPrice')}</p>
              </div>
              <p className="text-white/90 text-sm leading-relaxed flex-grow">
                {t('promotions.annualSavings')}
              </p>
              {language === 'en' && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-2 mt-2 mb-2">
                  <p className="text-red-200 text-xs font-medium">
                    {t('pricing.duoPlan')}
                  </p>
                </div>
              )}
              <button 
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 w-full mt-3"
                onClick={() => window.open(language === 'en' ? 'https://chat.whatsapp.com/HIBmUWCuNeAFfFzmru99MP' : 'https://biolivre.com.br/nuvembr', '_blank')}
              >
                {t('promotions.activateNow')}
              </button>
            </div>

            {/* Plano Anual NossaTV - Apenas versão portuguesa */}
            {language === 'pt' && (
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg border border-green-500/30 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex flex-col h-full">
                <h4 className="text-lg font-bold text-white mb-2">Plano Anual NossaTV</h4>
                <div className="mb-2">
                  <p className="text-white/70 text-sm line-through">De R$ 310,00</p>
                  <p className="text-green-400 text-2xl font-bold">R$ 241,00</p>
                  <p className="text-yellow-400 font-bold text-sm mt-1">
                    💳 2x sem juros
                  </p>
                </div>
                <p className="text-white/90 text-sm leading-relaxed flex-grow">
                  💰 Economize R$ 69,00 no plano anual da NossaTV! Acesso completo por 12 meses.
                </p>
                <button 
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 w-full mt-3"
                  onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                >
                  RECARREGAR AGORA
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>{t('hero.securePayment')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>{t('hero.trustedUsers')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>{t('hero.instantActivation')}</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black px-12 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-80"
          >
            {language === 'en' ? 'VIEW PLANS' : 'VER RECARGAS'}
          </Button>
          
          <Button
            onClick={scrollToDownloads}
            size="lg"
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-80"
          >
            {language === 'en' ? 'Available for TV Box and Mobile' : 'Disponível para TV Box e Celular'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
