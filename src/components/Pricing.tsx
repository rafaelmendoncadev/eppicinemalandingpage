
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Shield } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="pricing" className="py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {t('pricing.title')}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        

        
        {/* Área de Promoções de Setembro */}
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-4 items-stretch ${
            language === 'pt' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto'
          }`}>
            {/* Plano Mensal */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 relative flex flex-col">
              {/* Badge OFERTA */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                {t('pricing.monthly.badge')}
              </div>
              
              <div className="text-center pt-4 flex-grow flex flex-col">
                <h4 className="text-lg font-bold text-white mb-3">{t('pricing.monthly.title')}</h4>
                
                {/* Preços */}
                <div className="mb-3">
                  <div className="text-sm text-gray-400 line-through mb-1">
                    {t('pricing.monthly.originalPrice')}
                  </div>
                  <div className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      {t('pricing.monthly.price')}
                    </span>
                  </div>
                  <div className="text-green-400 font-semibold text-sm mt-1">
                    {t('pricing.monthly.savings')}
                  </div>
                </div>
                
                {language === 'pt' && (
                  <p className="text-white/90 text-base font-semibold mb-6">{t('pricing.monthly.description')}</p>
                )}
                
                {language === 'en' && (
                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 mb-4">
                    <p className="text-blue-200 text-sm font-medium">
                      {t('pricing.duoPlan')}
                    </p>
                  </div>
                )}
                
                <div className="space-y-2 mb-5 text-left flex-grow">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">{t('pricing.features.fullAccess')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">{t('pricing.features.noAds')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">{t('pricing.features.hdQuality')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">{t('pricing.features.support')}</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-3 text-base font-bold rounded-xl transition-all duration-300 shadow-lg"
                    onClick={() => window.open(language === 'en' ? 'https://chat.whatsapp.com/HIBmUWCuNeAFfFzmru99MP' : 'https://biolivre.com.br/nuvembr', '_blank')}
                  >
                    {t('promotions.activateNow')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Plano Anual */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg border-2 border-green-400/50 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-400/25 relative flex flex-col">
              {/* Badge MAIS POPULAR */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-400 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {language === 'en' ? 'MOST POPULAR' : 'MAIS POPULAR'}
                </span>
              </div>
              
              <div className="text-center pt-4 flex-grow flex flex-col">
                <h4 className="text-lg font-bold text-white mb-3">{t('pricing.annual.title')}</h4>
                
                {/* Preços */}
                <div className="mb-3">
                  <div className="text-sm text-gray-400 line-through mb-1">
                    {t('pricing.annual.originalPrice')}
                  </div>
                  <div className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      {t('pricing.annual.price')}
                    </span>
                  </div>
                  <div className="text-green-400 font-semibold text-sm mt-1">
                    {t('pricing.annual.savings')}
                  </div>
                </div>
                
                {language === 'en' && (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-4">
                    <p className="text-green-200 text-sm font-medium">
                      {t('pricing.duoPlan')}
                    </p>
                  </div>
                )}
                
                <div className="space-y-2 mb-5 text-left flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">{t('pricing.features.fullAccess')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">{t('pricing.features.support')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">{t('pricing.features.noAds')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">{t('pricing.features.hd4kQuality')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">{t('pricing.features.savings')}</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 text-base font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                    onClick={() => window.open(language === 'en' ? 'https://chat.whatsapp.com/HIBmUWCuNeAFfFzmru99MP' : 'https://biolivre.com.br/nuvembr', '_blank')}
                  >
                    {t('promotions.activateNow')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Recarga Anual NossaTV - Apenas versão portuguesa */}
            {language === 'pt' && (
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg border border-orange-500/30 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 relative flex flex-col">
                {/* Badge RECARGA ANUAL */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  RECARGA ANUAL
                </div>
                
                <div className="text-center pt-4 flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-white mb-3">Recarga Anual NossaTV</h4>
                  
                  {/* Preços */}
                  <div className="mb-3">
                    <div className="text-sm text-gray-400 line-through mb-1">
                      De R$ 310,00
                    </div>
                    <div className="text-2xl font-bold">
                      <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        R$ 241,00
                      </span>
                    </div>
                    <div className="text-green-400 font-semibold text-sm mt-1">
                      💰 Economize R$ 69,00 na sua recarga anual da NossaTV!
                    </div>
                    <div className="text-yellow-400 font-bold text-sm mt-1">
                      💳 2x sem juros
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-5 text-left flex-grow">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Canais nacionais e internacionais</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Qualidade HD/4K</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Suporte Técnico</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/90">Acesso completo por um ano inteiro</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-base font-bold rounded-xl transition-all duration-300 shadow-lg"
                      onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                    >
                      RECARREGAR AGORA
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            
            {/* Combo Anual - Apenas versão portuguesa */}
            {language === 'pt' && (
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-2 border-purple-400/50 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-400/25 relative flex flex-col">
                {/* Badge COMBO EXCLUSIVO */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {t('pricing.combo.badge')}
                  </span>
                </div>
                
                <div className="text-center pt-4 flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-white mb-1">{t('pricing.combo.title')}</h4>
                  <p className="text-purple-200 text-sm font-medium mb-3">{t('pricing.combo.subtitle')}</p>
                  
                  {/* Preços */}
                  <div className="mb-3">
                    <div className="text-sm text-gray-400 line-through mb-1">
                      {t('pricing.combo.originalPrice')}
                    </div>
                    <div className="text-2xl font-bold">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t('pricing.combo.price')}
                      </span>
                    </div>
                    <div className="text-green-400 font-semibold text-sm mt-1">
                      {t('pricing.combo.savings')}
                    </div>
                    <div className="text-yellow-400 font-bold text-sm">
                      {t('pricing.combo.installments')}
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-sm font-medium mb-4">{t('pricing.combo.description')}</p>
                  
                  <div className="space-y-2 mb-5 text-left flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span className="text-white/90">Eppi Cinema Completo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span className="text-white/90">NossaTV Completo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span className="text-white/90">{t('pricing.features.noAds')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span className="text-white/90">{t('pricing.features.hd4kQuality')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span className="text-white/90">{t('pricing.features.support')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-base font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                      onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                    >
                      {t('promotions.activateNow')}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Trust Section */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>{t('pricing.trust.securePayment')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>{t('pricing.trust.instantActivation')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>{t('pricing.trust.satisfaction')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

