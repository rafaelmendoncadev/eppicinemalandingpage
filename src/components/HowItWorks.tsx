import React from 'react';
import { ShoppingCart, CreditCard, Play, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      number: "01",
      title: "ESCOLHA",
      description: "Selecione o plano ideal para você",
      details: "Escolha entre nossos planos mensais ou anuais com os melhores preços do mercado"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      number: "02",
      title: "PAGUE",
      description: "Pagamento 100% seguro",
      details: "Realize o pagamento de forma segura através do nosso sistema protegido"
    },
    {
      icon: <Play className="w-8 h-8" />,
      number: "03",
      title: "APROVEITE",
      description: "Acesso imediato ao conteúdo",
      details: "Receba seu código de ativação e comece a assistir imediatamente"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            COMO FUNCIONA?
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Em apenas 3 passos simples você terá acesso completo ao Eppi Cinema
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-recarga-green-500 to-recarga-blue-500 transform translate-x-4 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg border border-gray-600/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-recarga-green-500/25 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-recarga-green-500 to-recarga-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-recarga-green-500/20 to-recarga-blue-500/20 rounded-full text-recarga-green-400">
                      <div className="w-8 h-8">{step.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-recarga-green-400 font-semibold mb-3 text-sm">
                    {step.description}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;