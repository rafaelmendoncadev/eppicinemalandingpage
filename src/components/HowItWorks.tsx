import React from 'react';
import { ShoppingCart, CreditCard, Play, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      number: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      details: t('howItWorks.step1.details')
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      number: "02",
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      details: t('howItWorks.step2.details')
    },
    {
      icon: <Play className="w-8 h-8" />,
      number: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      details: t('howItWorks.step3.details')
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform translate-x-4 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg border border-gray-600/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full text-green-400">
                      <div className="w-8 h-8">{step.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-green-400 font-semibold mb-3 text-sm">
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