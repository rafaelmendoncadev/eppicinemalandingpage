import React from 'react';
import { Shield, Zap, Headphones, CheckCircle, Clock, Award, Users, Lock, Star, DollarSign } from 'lucide-react';

const WhyBuyHere = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Qualidade Premium",
      description: "Conteúdo em alta definição",
      details: "Filmes e séries com qualidade 4K e áudio surround"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Melhor Preço",
      description: "Preços imbatíveis do mercado",
      details: "Oferecemos os melhores valores com promoções exclusivas"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Garantia Total",
      description: "Pagamento 100% seguro pagamento protegido",
      details: "Transações criptografadas com máxima segurança"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="why-buy-here">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            POR QUE COMPRAR AQUI?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Somos a loja oficial com mais de 50.000 clientes satisfeitos. Sua segurança e satisfação são nossa prioridade.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg border border-gray-600/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-recarga-green-500/25">
                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-recarga-green-500/20 to-recarga-blue-500/20 rounded-full text-recarga-green-400">
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-recarga-green-400 font-semibold mb-2">
                  {benefit.description}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhyBuyHere;