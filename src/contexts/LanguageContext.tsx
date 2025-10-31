import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    // Navigation
    'nav.brandName': 'Eppi Cinema',
    'nav.home': 'Início',
    'nav.features': 'Como Funciona',
    'nav.pricing': 'Preços',
    'nav.download': 'Download',
    'nav.whyChoose': 'Por que Aqui?',
    
    // Hero Section
    'hero.title': 'Eppi Cinema + NossaTv',
    'hero.subtitle': 'RECARGA OFICIAL',
    'hero.didYouKnow': 'Você sabia?',
    'hero.costComparison': 'Que manter acesso simultâneo a todos os principais serviços de streaming pode custar <span class="text-red-400 font-bold">R$ 380 por mês</span>? Isso equivale a mais de <span class="text-orange-400 font-bold">R$ 4.500 anuais</span> só para ter acesso a catálogos fragmentados.',
    'hero.ourSolution': 'Nossa Solução',
    'hero.appTitle': 'Eppi Cinema: Tudo em um só lugar.',
    'hero.appDescription': 'Conheça o <span class="text-orange-400 font-bold">Eppi Cinema</span>, o aplicativo que revoluciona sua experiência audiovisual! Chega de alternar entre telas e senhas.',
    'hero.securePayment': 'Pagamento Seguro',
    'hero.trustedUsers': '+50.000 Usuários',
    'hero.instantActivation': 'Ativação instantânea (dentro do horário comercial)*',
    
    // Promotions
    'promotions.title': '🔥 PROMOÇÕES DE SETEMBRO - MÊS DO CLIENTE',
    'promotions.monthlyDiscount': '15% OFF',
    'promotions.monthlyTitle': 'Recarga Mensal Eppi Cinema',
    'promotions.monthlyOriginalPrice': 'De R$ 39,99',
    'promotions.monthlyPrice': 'Por R$ 34,99',
    'promotions.monthlySavings': 'Economize R$ 12,00 na sua recarga mensal do Eppi Cinema!',
    'promotions.annualDiscount': '38% OFF',
    'promotions.annualTitle': 'Recarga Anual Eppi Cinema com 38% OFF',
    'promotions.annualOriginalPrice': 'De R$ 335,88',
    'promotions.annualPrice': 'Por R$ 179,99',
    'promotions.annualSavings': '💰 Economize R$ 168,89 na sua recarga anual do Eppi Cinema e tenha acesso completo por um ano inteiro!',
    'promotions.nossatvDiscount': '22% OFF',
    'promotions.nossatvTitle': 'Recarga Anual NossaTV',
    'promotions.nossatvOriginalPrice': 'De R$ 310,00',
    'promotions.nossatvPrice': 'Por R$ 241,00',
    'promotions.nossatvSavings': '💎 Economize R$ 69,00 na sua recarga anual da NossaTV!',
    'promotions.nossatvInstallments': '2x de R$ 120,50 sem juros',
    'promotions.activateNow': 'RECARREGAR AGORA',
    
    // Trust badges
    'trustBadges.secure': '100% Seguro',
    'trustBadges.customers': '+50.000 Clientes',
    'trustBadges.instantActivation': 'Ativação instantânea (dentro do horário comercial)*',
    'trustBadges.support': 'Suporte Técnico',
    
    // How it works
    'howItWorks.title': 'COMO FUNCIONA?',
    'howItWorks.subtitle': 'Em apenas 3 passos simples você terá acesso completo ao Eppi Cinema',
    'howItWorks.step1.title': 'ESCOLHA',
    'howItWorks.step1.description': 'Selecione o plano ideal para você',
    'howItWorks.step1.details': 'Escolha entre nossos planos mensais ou anuais com os melhores preços do mercado',
    'howItWorks.step2.title': 'PAGUE',
    'howItWorks.step2.description': 'Pagamento 100% seguro',
    'howItWorks.step2.details': 'Realize o pagamento de forma segura através do nosso sistema protegido',
    'howItWorks.step3.title': 'APROVEITE',
    'howItWorks.step3.description': 'Acesso imediato ao conteúdo',
    'howItWorks.step3.details': 'Receba seu código de ativação e comece a assistir imediatamente',
    
    // Pricing
    'pricing.title': 'FAÇA SUA RECARGA',
    'pricing.subtitle': 'Acesso completo ao Eppi Cinema com os melhores preços do mercado',
    'pricing.monthly.badge': '🔥 30% OFF',
    'pricing.monthly.title': 'RECARGA MENSAL EPPI CINEMA',
    'pricing.monthly.originalPrice': 'De R$ 39,99',
    'pricing.monthly.price': 'R$ 34,99',
    'pricing.monthly.description': 'Acesso completo ao Eppi Cinema por 30 dias',
    'pricing.monthly.savings': 'Economize R$ 12,00 (30% OFF)!',
    'pricing.annual.badge': '💎 MELHOR OFERTA',
    'pricing.annual.title': 'RECARGA ANUAL EPPI CINEMA',
    'pricing.annual.originalPrice': 'De R$ 419,88 (12x R$ 34,99)',
    'pricing.annual.price': 'R$ 179,99',
    'pricing.annual.savings': 'Economize R$ 126,89 (38% OFF)!',
    'pricing.annual.installments': '3x de R$ 69,66 sem juros',
    'pricing.combo.badge': '🚀 COMBO EXCLUSIVO',
    'pricing.combo.title': 'COMBO ANUAL',
    'pricing.combo.subtitle': 'Eppi Cinema + NossaTV',
    'pricing.combo.originalPrice': 'De R$ 410,00',
    'pricing.combo.price': 'R$ 345,00',
    'pricing.combo.savings': 'Economize R$ 65,00 (16% OFF)!',
    'pricing.combo.installments': '3x de R$ 115,00 sem juros',
    'pricing.combo.description': 'Acesso completo aos dois melhores apps de streaming',
    'pricing.features.fullAccess': 'Acesso completo',
    'pricing.features.support': 'Suporte Técnico',
    'pricing.features.noAds': 'Sem anúncios',
    'pricing.features.hdQuality': 'Qualidade HD',
    'pricing.features.hd4kQuality': 'Qualidade HD/4K',
    'pricing.features.savings': 'Economia de 50%',
    'pricing.trust.securePayment': 'Pagamento 100% Seguro',
    'pricing.trust.instantActivation': 'Ativação instantânea (dentro do horário comercial)*',
    'pricing.trust.satisfaction': 'Garantia de Satisfação',
    
    // Why buy here
    'whyBuyHere.title': 'POR QUE COMPRAR AQUI?',
    'whyBuyHere.subtitle': 'Somos a loja oficial com mais de 50.000 clientes satisfeitos. Sua segurança e satisfação são nossa prioridade.',
    'whyBuyHere.quality.title': 'Qualidade Premium',
    'whyBuyHere.quality.description': 'Conteúdo em alta definição',
    'whyBuyHere.quality.details': 'Filmes e séries com qualidade 4K e áudio surround',
    'whyBuyHere.price.title': 'Melhor Preço',
    'whyBuyHere.price.description': 'Preços imbatíveis do mercado',
    'whyBuyHere.price.details': 'Oferecemos os melhores valores com promoções exclusivas',
    'whyBuyHere.guarantee.title': 'Garantia Total',
    'whyBuyHere.guarantee.description': 'Pagamento 100% seguro pagamento protegido',
    'whyBuyHere.guarantee.details': 'Transações criptografadas com máxima segurança',
    
    // Downloads
    'downloads.title': 'Disponível no Fire Stick, Tv Box e Celulares Android!',
    'downloads.tvBox': 'TV Stick e TV Box',
    'downloads.android': 'Celular Android',
    
    // Footer
    'footer.brandName': 'Eppi Cinema',
    'footer.navigation': 'Navegação',
    'footer.support': 'Suporte',
    'footer.home': 'Início',
    'footer.pricing': 'Preços',
    'footer.downloads': 'Downloads',
    'footer.supportLink': 'Suporte',
    'footer.helpCenter': 'Central de Ajuda',
    'footer.contact': 'Contato',
    'footer.faq': 'FAQ',
    'footer.description': 'A melhor plataforma de streaming com conteúdo premium em alta qualidade. Acesso completo a filmes, séries e documentários.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contactTitle': 'Contato',
    'footer.chat': 'Chat WhatsApp',
    'footer.copyright': '© 2020 - 2025 eppicinemabr.com.br. Todos os direitos reservados.',
    'footer.disclaimer': '* Pedidos efetuados entre as 22:01 e 07:59, podem ser entregues no proximo horário comercial',
    
    // Not found
    'notFound.message': 'Oops! Página não encontrada',
    'notFound.returnHome': 'Voltar ao Início'
  },
  en: {
    // Navigation
    'nav.brandName': 'NossaTV',
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Plans',
    'nav.download': 'Get App',
    'nav.whyChoose': 'Why NossaTV?',
    
    // Hero Section
    'hero.title': 'NossaTv',
    'hero.subtitle': 'OFFICIAL RECHARGE',
    'hero.didYouKnow': 'Did you know?',
    'hero.costComparison': 'That cable TV subscriptions cost an average of <span class="text-red-400 font-bold">$105.18 per month</span>? That\'s over <span class="text-orange-400 font-bold">$1,262.16 yearly</span> that weighs heavily on your budget, regardless of which country you live in.',
    'hero.ourSolution': 'The Ultimate Solution',
    'hero.appTitle': 'NossaTV: Your Entertainment Universe.',
    'hero.appDescription': 'Discover <span class="text-orange-400 font-bold">NossaTV</span>, the revolutionary alternative to cable TV subscriptions that brings together the world\'s best content in one seamless experience.',
    'hero.securePayment': 'Secure Checkout',
    'hero.trustedUsers': '50K+ Happy Users',
    'hero.instantActivation': 'Instant Access Available*',
    
    // Promotions
    'promotions.title': '🎬 OCTOBER SPECIAL - CINEMA MONTH',
    'promotions.monthlyDiscount': '40% OFF',
    'promotions.monthlyTitle': 'Monthly Access',
    'promotions.monthlyOriginalPrice': 'Regular $25.00 / €20.00',
    'promotions.monthlyPrice': 'Now $15.00 / €13.00',
    'promotions.monthlySavings': 'Save $10.00 / €7.00 on your monthly access!',
    'promotions.annualDiscount': '40% OFF',
    'promotions.annualTitle': 'Annual Premium Access',
    'promotions.annualOriginalPrice': 'Regular $100.00 / €80.00',
    'promotions.annualPrice': 'Now $60.00 / €45.00',
    'promotions.annualSavings': '🎯 Save $40.00 / €35.00 on annual access and enjoy unlimited entertainment!',
    'promotions.activateNow': 'GET ACCESS NOW',
    
    // Trust badges
    'trustBadges.secure': 'Bank-Level Security',
    'trustBadges.customers': '50K+ Satisfied Users',
    'trustBadges.instantActivation': 'Instant activation available*',
    'trustBadges.support': '24/7 Premium Support',
    
    // How it works
    'howItWorks.title': 'HOW DOES IT WORK?',
    'howItWorks.subtitle': 'Get unlimited access to NossaTV in just 3 easy steps',
    'howItWorks.step1.title': 'SELECT',
    'howItWorks.step1.description': 'Choose your perfect plan',
    'howItWorks.step1.details': 'Pick from our flexible monthly or annual plans designed for every entertainment need',
    'howItWorks.step2.title': 'SECURE PAYMENT',
    'howItWorks.step2.description': 'Safe and encrypted checkout',
    'howItWorks.step2.details': 'Complete your purchase using our military-grade secure payment system',
    'howItWorks.step3.title': 'STREAM NOW',
    'howItWorks.step3.description': 'Instant entertainment access',
    'howItWorks.step3.details': 'Get your credentials and start streaming your favorite content immediately',
    
    // Pricing
    'pricing.title': 'CHOOSE YOUR PLAN',
    'pricing.subtitle': 'Unlimited access to NossaTV\'s vast entertainment library',
    'pricing.monthly.badge': '🔥 POPULAR CHOICE',
    'pricing.monthly.title': 'MONTHLY PREMIUM',
    'pricing.monthly.originalPrice': 'Regular $25.00 / €20.00',
    'pricing.monthly.price': '$15.00 / €13.00',
    'pricing.monthly.savings': 'Save $10.00 / €7.00 (40% OFF)!',
    'pricing.annual.badge': '💎 BEST VALUE',
    'pricing.annual.title': 'ANNUAL PREMIUM',
    'pricing.annual.originalPrice': 'Regular $100.00 / €80.00 (12x $8.33 / €6.67)',
    'pricing.annual.price': '$60.00 / €45.00',
    'pricing.annual.savings': 'Save $40.00 / €35.00 (40% OFF)!',
    'pricing.duoPlan': 'Duo Plan - One recharge, two screens. Watch at home and wherever you want, without limits!',
    'pricing.features.fullAccess': 'Complete library access',
    'pricing.features.support': '24/7 Premium Support',
    'pricing.features.noAds': 'Ad-free experience',
    'pricing.features.hdQuality': '4K Ultra HD',
    'pricing.features.hd4kQuality': '4K/8K Quality',
    'pricing.features.savings': 'Maximum savings',
    'pricing.trust.securePayment': 'Military-Grade Security',
    'pricing.trust.instantActivation': 'Instant activation available*',
    'pricing.trust.satisfaction': '30-Day Money Back',
    
    // Why buy here
    'whyBuyHere.title': 'WHY CHOOSE NOSSATV?',
    'whyBuyHere.subtitle': 'Join over 50,000 entertainment enthusiasts who trust NossaTV for their streaming needs. Your satisfaction is our mission.',
    'whyBuyHere.quality.title': 'Cinema-Grade Quality',
    'whyBuyHere.quality.description': 'Ultra HD streaming experience',
    'whyBuyHere.quality.details': 'Enjoy movies and shows in stunning 4K/8K resolution with Dolby Atmos sound',
    'whyBuyHere.price.title': 'Unmatched Value',
    'whyBuyHere.price.description': 'Industry-leading prices',
    'whyBuyHere.price.details': 'Get premium entertainment at a fraction of the cost of traditional services',
    'whyBuyHere.guarantee.title': 'Complete Protection',
    'whyBuyHere.guarantee.description': 'Bank-level security & guarantees',
    'whyBuyHere.guarantee.details': 'Your data and payments are protected with enterprise-grade encryption',
    
    // Downloads
    'downloads.title': 'Available on All Your Favorite Devices!',
    'downloads.tvBox': 'Smart TV & Streaming Devices',
    'downloads.android': 'Mobile & Tablet',
    
    // Footer
    'footer.brandName': 'NossaTv',
    'footer.navigation': 'Navigation',
    'footer.support': 'Customer Care',
    'footer.home': 'Home',
    'footer.pricing': 'Plans',
    'footer.downloads': 'Get App',
    'footer.supportLink': 'Help Center',
    'footer.helpCenter': 'Support Hub',
    'footer.contact': 'Contact Us',
    'footer.faq': 'FAQ',
    'footer.description': 'Nossa TV is an online TV application, offering \n a wide variety of national and international \n channels. \n Nossa TV is compatible with various devices: \n Android TV BOX, Android phones, FireTV/ \n MI TV Stick, Android TV (Haier, JVC, Semp, Sony \n and TCL models and Chromecast 4 with integrated \n Android TV.',
    'footer.quickLinks': 'Navigation',
    'footer.contactTitle': 'Get in Touch',
    'footer.chat': 'Live Chat Support',
    'footer.copyright': '© 2020 - 2025 eppicinemabr.com.br. All rights reserved.',
    'footer.disclaimer': '* Instant activation available during business hours (9 AM - 6 PM EST)',
    
    // Not found
    'notFound.message': 'Oops! This page seems to be missing',
    'notFound.returnHome': 'Back to Home',
    
    'hero.description': 'Stream the world\'s best entertainment in stunning quality',
    'hero.cta': 'Start Streaming',
    
    // Promo
    'promo.september': '🎬 OCTOBER SPECIAL - CINEMA MONTH',
    'promo.monthly': 'Monthly Premium',
    'promo.annual': 'Annual Premium with 40% OFF',
    'promo.save.monthly': 'Save $10.00 on monthly access!',
    'promo.save.annual': '🎯 Save $40.00 on annual access and unlock unlimited entertainment!',
    'promo.activate': 'GET ACCESS NOW',
    
    // Trust
    'trust.secure': 'Bank-Level Security',
    'trust.support': 'Premium Support',
    'trust.users': '50K+ Users',
    'trust.instant': 'Instant Access'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};