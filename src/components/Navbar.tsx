
import { Home, Download, CreditCard, Menu, X, HelpCircle, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  // Close menu on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: t('nav.home'), icon: Home },
    { id: 'how-it-works', label: t('nav.features'), icon: HelpCircle },
    { id: 'pricing', label: t('nav.pricing'), icon: CreditCard },
    { id: 'why-buy-here', label: t('nav.whyChoose'), icon: Shield },
    { id: 'downloads', label: t('nav.download'), icon: Download },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 lg:h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <img 
                src="/eppi-cinema-logo.png" 
                alt="Eppi Cinema Logo" 
                className="h-10 w-auto object-contain"
                loading="eager"
                width="40"
                height="40"
              />
              <img 
                src="/nossa-tv-logo.png" 
                alt="NossaTV Logo" 
                className="h-10 w-auto object-contain"
                loading="eager"
                width="40"
                height="40"
              />
            </div>
            <span className="text-base lg:text-lg font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent hidden sm:block whitespace-nowrap">
              {t('nav.brandName')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Menu Items */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-1 px-1 lg:px-2 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-xs lg:text-sm font-medium whitespace-nowrap"
                  >
                    <IconComponent size={14} />
                    <span className="hidden lg:block">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Language Selector */}
            <LanguageSelector />

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-bold px-2 lg:px-4 py-2 text-xs lg:text-sm rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              <Zap size={14} className="mr-1" />
              <span className="hidden lg:block">{language === 'en' ? 'BUY NOW' : 'RECARREGAR'}</span>
              <span className="lg:hidden">{language === 'en' ? 'BUY' : 'COMPRAR'}</span>
            </Button>
          </div>

          {/* Mobile Language Selector and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-700/50 mt-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-base"
                >
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            {/* Mobile Language Selector and CTA */}
            <div className="pt-4 border-t border-gray-700/50 space-y-3">
              <Button 
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-bold px-6 py-3 text-base rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap size={20} className="mr-2" />
                {language === 'en' ? 'BUY NOW' : 'RECARREGAR AGORA'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
