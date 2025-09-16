
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Shield } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            ESCOLHA SUA RECARGA
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Acesso completo ao Eppi Cinema com os melhores preços do mercado
          </p>
        </div>
        

        
        {/* Área de Promoções de Setembro */}
        <div className="max-w-4xl mx-auto">

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Promoção 1 */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">RECARGA MENSAL</h4>
                <div className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    R$ 39<span className="text-lg text-gray-300 font-normal">,99</span>
                  </span>
                </div>
                <p className="text-white/90 text-lg font-semibold mb-6">Descubra o Eppi Cinema</p>
                
                <div className="space-y-3 mb-6 text-left">
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
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg"
                  onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                >
                  ATIVAR AGORA
                </Button>
              </div>
            </div>
            
            {/* Promoção 2 */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg border-2 border-green-400/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-400/25 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  MAIS POPULAR
                </span>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">RECARGA ANUAL</h4>
                <p className="text-yellow-400 text-xl font-bold mb-4">5x SEM JUROS!!!</p>
                <div className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    R$ 239<span className="text-lg text-gray-300 font-normal">,99</span>
                  </span>
                </div>
                
                <div className="space-y-3 mb-6 text-left">
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
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                  onClick={() => window.open('https://biolivre.com.br/nuvembr', '_blank')}
                >
                  ATIVAR AGORA
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Section */}
        <div className="text-center mt-16">
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

