
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { handlePurchaseClick, handleDualPurchaseClick } from '../utils/popupUtils';

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

  const handleActivateClick = (url: string) => {
    // Analytics tracking could be added here
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
      aria-labelledby="hero-title"
      role="main"
    >
      {/* Background Pattern - Decorative only */}
      <div className="absolute inset-0 opacity-10 hero-pattern" aria-hidden="true" />
      
      {/* Content - Optimized for LCP */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Main Title - Critical LCP element optimized */}
        <header className="mb-6">
          <h1 
            id="hero-title"
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 text-white leading-tight"
            style={{ 
              background: 'linear-gradient(to right, #ffffff, #dbeafe, #e0e7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              willChange: 'auto'
            }}
          >
            {t('hero.subtitle')}
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-5">
            {t('hero.title')}
          </h2>
        </header>

        {/* Information Cards - Deferred animation for better LCP */}
        <div className="mb-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Did You Know Card */}
            <article 
              className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-lg p-3 md:p-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-500/25"
              role="article"
              aria-labelledby="did-you-know-title"
              style={{ animation: 'fade-in 0.6s ease-out 0.3s both' }}
            >
              <h3 id="did-you-know-title" className="text-lg md:text-xl font-bold text-white mb-2">
                {t('hero.didYouKnow')}
              </h3>
              <p 
                className="text-white/90 text-sm md:text-base leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: t('hero.costComparison') }} 
              />
            </article>

            {/* Our Solution Card */}
            <article 
              className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg border border-green-500/30 rounded-lg p-3 md:p-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25"
              role="article"
              aria-labelledby="our-solution-title"
              style={{ animation: 'fade-in 0.6s ease-out 0.4s both' }}
            >
              <h3 id="our-solution-title" className="text-lg md:text-xl font-bold text-white mb-2">
                {t('hero.ourSolution')}
              </h3>
              <p 
                className="text-white/90 text-sm md:text-base leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: t('hero.appDescription') }} 
              />
            </article>
          </div>
        </div>

        {/* Promotional Plans */}
        <div className="mb-8 max-w-5xl mx-auto">
          <div className={`grid grid-cols-1 gap-4 md:gap-6 ${language === 'pt' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            {/* Monthly Plan */}
            <article 
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-500/30 rounded-lg p-3 md:p-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex flex-col h-full animate-slide-up"
              role="article"
              aria-labelledby="monthly-plan-title"
              style={{ animationDelay: '0.2s' }}
            >
              <h4 id="monthly-plan-title" className="text-lg md:text-xl font-bold text-white mb-2">
                {t('promotions.monthlyTitle')}
              </h4>
              <div className="mb-2">
                <p className="text-white/70 text-sm line-through" aria-label="Preço original">
                  {t('promotions.monthlyOriginalPrice')}
                </p>
                <p className="text-blue-400 text-2xl md:text-3xl font-bold" aria-label="Preço promocional">
                  {t('promotions.monthlyPrice')}
                </p>
              </div>
              <p className="text-white/90 text-sm md:text-base leading-relaxed flex-grow">
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
                onClick={() => handleDualPurchaseClick(
                  language === 'en' ? '' : 'https://biolivre.com.br/nuvembr', 
                  language,
                  language === 'en' ? '/payment-instructions.html' : undefined
                )}
              >
                {t('promotions.activateNow')}
              </button>
            </article>

            {/* Annual Plan */}
            <article 
              className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-lg p-3 md:p-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-red-500/25 flex flex-col h-full animate-slide-up"
              role="article"
              aria-labelledby="annual-plan-title"
              style={{ animationDelay: '0.3s' }}
            >
              <h4 id="annual-plan-title" className="text-lg md:text-xl font-bold text-white mb-2">
                {t('promotions.annualTitle')}
              </h4>
              <div className="mb-2">
                <p className="text-white/70 text-sm line-through" aria-label="Preço original">
                  {t('promotions.annualOriginalPrice')}
                </p>
                <p className="text-red-400 text-2xl md:text-3xl font-bold" aria-label="Preço promocional">
                  {t('promotions.annualPrice')}
                </p>
              </div>
              <p className="text-white/90 text-sm md:text-base leading-relaxed flex-grow">
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
                onClick={() => handleDualPurchaseClick(
                  language === 'en' ? '' : 'https://biolivre.com.br/nuvembr', 
                  language,
                  language === 'en' ? '/payment-instructions.html' : undefined
                )}
              >
                {t('promotions.activateNow')}
              </button>
            </article>

            {/* NossaTV Annual Plan - Portuguese only */}
            {language === 'pt' && (
              <article 
                className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg border border-green-500/30 rounded-lg p-3 md:p-4 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex flex-col h-full animate-slide-up"
                role="article"
                aria-labelledby="nossatv-plan-title"
                style={{ animationDelay: '0.4s' }}
              >
                <h4 id="nossatv-plan-title" className="text-lg md:text-xl font-bold text-white mb-2">
                  Plano Anual NossaTV
                </h4>
                <div className="mb-2">
                  <p className="text-white/70 text-sm line-through" aria-label="Preço original">
                    De R$ 310,00
                  </p>
                  <p className="text-green-400 text-2xl md:text-3xl font-bold" aria-label="Preço promocional">
                    R$ 241,00
                  </p>
                  <p className="text-yellow-400 font-bold text-sm mt-1">
                    💳 2x sem juros
                  </p>
                </div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed flex-grow">
                  💰 Economize R$ 69,00 no plano anual da NossaTV! Acesso completo por 12 meses.
                </p>
                <button 
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 w-full mt-3"
                  onClick={() => handlePurchaseClick('https://biolivre.com.br/nuvembr', language)}
                >
                  RECARREGAR AGORA
                </button>
              </article>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm md:text-base text-gray-300">
            <div className="flex items-center gap-2" role="img" aria-label="Pagamento seguro">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-400" aria-hidden="true" />
              <span>{t('hero.securePayment')}</span>
            </div>
            <div className="flex items-center gap-2" role="img" aria-label="Usuários confiáveis">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-400" aria-hidden="true" />
              <span>{t('hero.trustedUsers')}</span>
            </div>
            <div className="flex items-center gap-2" role="img" aria-label="Ativação instantânea">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" aria-hidden="true" />
              <span>{t('hero.instantActivation')}</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-80 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Ver todos os planos de recarga disponíveis"
          >
            {language === 'en' ? 'VIEW PLANS' : 'VER RECARGAS'}
          </Button>
          
          <Button
            onClick={scrollToDownloads}
            size="lg"
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-80 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Ver downloads disponíveis para TV Box e celular"
          >
            {language === 'en' ? 'Available for TV Box and Mobile' : 'Disponível para TV Box e Celular'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
