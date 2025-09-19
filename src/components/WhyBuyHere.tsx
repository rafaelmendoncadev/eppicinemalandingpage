import React from 'react';
import { Shield, Zap, Headphones, CheckCircle, Clock, Award, Users, Lock, Star, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyBuyHere = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: <Star className="w-8 h-8" />,
      title: t('whyBuyHere.quality.title'),
      description: t('whyBuyHere.quality.description'),
      details: t('whyBuyHere.quality.details')
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t('whyBuyHere.price.title'),
      description: t('whyBuyHere.price.description'),
      details: t('whyBuyHere.price.details')
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t('whyBuyHere.guarantee.title'),
      description: t('whyBuyHere.guarantee.description'),
      details: t('whyBuyHere.guarantee.details')
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="why-buy-here">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {t('whyBuyHere.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('whyBuyHere.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg border border-gray-600/30 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25">
                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full text-green-400">
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-green-400 font-semibold mb-2">
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