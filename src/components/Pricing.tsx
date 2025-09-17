
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Shield } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            ESCOLHA SUA RECARGA
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Acesso completo ao Eppi Cinema com os melhores preços do mercado
          </p>
        </div>
        

        
        {/* Área de Promoções de Setembro */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plano Mensal */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 relative">
              {/* Badge OFERTA */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                🔥 OFERTA ESPECIAL
              </div>
              
              <div className="text-center pt-4">
                <h4 className="text-lg font-bold text-white mb-3">RECARGA MENSAL</h4>
                
                {/* Preços */}
                <div className="mb-3">
                  <div className="text-sm text-gray-400 line-through mb-1">
                    De R$ 39,99
                  </div>
                  <div className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      R$ 27<span className="text-sm text-gray-300 font-normal">,99</span>
                    </span>
                  </div>
                  <div className="text-green-400 font-semibold text-sm mt-1">
                    Economize R$ 12,00!
                  </div>
                </div>
                
                <p className="text-white/90 text-base font-semibold mb-6">Perfeito para começar</p>
                
                <div className="space-y-2 mb-5 text-left">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">Acesso completo Eppi Cinema</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">Filmes e séries ilimitados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">Qualidade HD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">Suporte Técnico</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-3 text-base font-bold rounded-xl transition-all duration-300 shadow-lg"
                  onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                >
                  ATIVAR AGORA
                </Button>
              </div>
            </div>
            
            {/* Plano Anual */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg border-2 border-green-400/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-400/25 relative">
              {/* Badge MAIS POPULAR */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  MAIS POPULAR
                </span>
              </div>
              
              {/* Badge MELHOR OFERTA */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                MELHOR OFERTA
              </div>
              
              <div className="text-center pt-4">
                <h4 className="text-lg font-bold text-white mb-3">RECARGA ANUAL</h4>
                
                {/* Preços */}
                <div className="mb-3">
                  <div className="text-sm text-gray-400 line-through mb-1">
                    De R$ 335,88 (12x R$ 27,99)
                  </div>
                  <div className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      R$ 208<span className="text-sm text-gray-300 font-normal">,99</span>
                    </span>
                  </div>
                  <div className="text-green-400 font-semibold text-sm mt-1">
                    Economize R$ 126,89 (38% OFF)!
                  </div>
                  <div className="text-yellow-400 font-bold text-sm">
                    3x de R$ 69,66 sem juros
                  </div>
                </div>
                
                <div className="space-y-2 mb-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">Acesso completo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">Suporte Técnico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">Sem anúncios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">Qualidade HD/4K</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-white/90">Economia de 50%</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 text-base font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                  onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                >
                  ATIVAR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Section */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Ativação instantânea (dentro do horário comercial)*</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Garantia de Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

