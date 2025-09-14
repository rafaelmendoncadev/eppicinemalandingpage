
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Shield } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-500 mb-6">
            ESCOLHA SUA RECARGA
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Acesso completo ao Eppi Cinema com os melhores preços do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <div className="bg-gradient-to-br from-recarga-green-500/20 to-recarga-lime-500/20 backdrop-blur-lg border border-recarga-green-500/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-recarga-green-500/25 flex flex-col h-full">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">MENSAL</h3>
              <div className="text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-recarga-green-400 to-recarga-lime-400 bg-clip-text text-transparent">
                  R$ 39
                  <span className="text-lg text-gray-300 font-normal">,99</span>
                </span>
              </div>
              <p className="text-gray-300">Descubra o Eppi Cinema</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Acesso completo Eppi Cinema</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Filmes e séries ilimitados</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Qualidade HD</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Suporte Técnico</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-gradient-to-r from-recarga-green-500 to-recarga-lime-500 hover:from-recarga-green-600 hover:to-recarga-lime-600 text-black py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg"
              onClick={() => window.open('https://mpago.li/2P5EzAg', '_blank')}
            >
              COMPRAR AGORA
            </Button>
          </div>
          
          {/* Plano Anual - MAIS POPULAR */}
          <div className="bg-gradient-to-br from-recarga-red-500/30 to-recarga-orange-500/30 backdrop-blur-lg border-2 border-recarga-red-400/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-recarga-red-400/25 relative flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-recarga-green-400 to-recarga-lime-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                MAIS POPULAR
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">ANUAL</h3>
              <div className="text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-recarga-red-400 to-recarga-orange-400 bg-clip-text text-transparent">
                  R$ 239
                  <span className="text-lg text-gray-300 font-normal">,99</span>
                </span>
              </div>
              <p className="text-green-300 font-semibold">Economize 50%</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Acesso completo Eppi Cinema</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Filmes e séries ilimitados</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Qualidade HD/4K</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Suporte Técnico</span>
              </li>
              <li className="flex items-center text-white">
                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>2x no cartão (sem juros)</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-gradient-to-r from-recarga-red-500 to-recarga-orange-500 hover:from-recarga-red-600 hover:to-recarga-orange-600 text-white py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
              onClick={() => window.open('https://mpago.li/2QeoXLr', '_blank')}
            >
              COMPRAR AGORA
            </Button>
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

