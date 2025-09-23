
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Download, CreditCard, Menu, X, HelpCircle, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-gray-700/50"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center gap-2 mr-4">
            <img 
              src="/eppi-cinema-logo-optimized.webp" 
              alt="Eppi Cinema Logo" 
              className="h-8 w-auto object-contain"
              loading="eager"
              fetchPriority="high"
              width="32"
              height="32"
              decoding="async"
            />
            <img 
              src="/nossa-tv-logo-optimized.webp" 
              alt="NossaTV Logo" 
              className="h-8 w-auto object-contain"
              loading="eager"
              fetchPriority="high"
              width="32"
              height="32"
              decoding="async"
            />
          </div>
          <span className="text-base md:text-lg font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {t('nav.brandName')}
          </span>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10 focus:ring-2 focus:ring-white/20"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-3">
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm focus:ring-2 focus:ring-white/20"
                  aria-label="Ir para início"
                >
                  <Home size={14} />
                  {t('nav.home')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm focus:ring-2 focus:ring-white/20"
                  aria-label="Ver como funciona"
                >
                  <HelpCircle size={14} />
                  {t('nav.features')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm focus:ring-2 focus:ring-white/20"
                  aria-label="Ver preços"
                >
                  <CreditCard size={14} />
                  {t('nav.pricing')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('why-buy-here')} 
                  className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm focus:ring-2 focus:ring-white/20"
                  aria-label="Por que escolher"
                >
                  <Shield size={14} />
                  {t('nav.whyChoose')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('downloads')} 
                  className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm focus:ring-2 focus:ring-white/20"
                  aria-label="Ver downloads"
                >
                  <Download size={14} />
                  {t('nav.download')}
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <LanguageSelector />
          <Button 
            onClick={() => scrollToSection('pricing')}
            className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-bold px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Recarregar agora"
          >
            <Zap size={14} className="mr-1" />
            {language === 'en' ? 'BUY NOW' : 'RECARREGAR AGORA'}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`fixed top-16 left-0 right-0 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 border-b border-gray-700/50 z-50 transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col gap-1 p-4 w-full">
              <NavigationMenuItem className="w-full">
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full justify-start text-base focus:ring-2 focus:ring-white/20"
                  role="menuitem"
                  aria-label="Ir para início"
                >
                  <Home size={16} />
                  {t('nav.home')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full justify-start text-base focus:ring-2 focus:ring-white/20"
                  role="menuitem"
                  aria-label="Ver como funciona"
                >
                  <HelpCircle size={16} />
                  {t('nav.features')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full justify-start text-base focus:ring-2 focus:ring-white/20"
                  role="menuitem"
                  aria-label="Ver preços"
                >
                  <CreditCard size={16} />
                  {t('nav.pricing')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <button 
                  onClick={() => scrollToSection('why-buy-here')} 
                  className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full justify-start text-base focus:ring-2 focus:ring-white/20"
                  role="menuitem"
                  aria-label="Por que escolher"
                >
                  <Shield size={16} />
                  {t('nav.whyChoose')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <button 
                  onClick={() => scrollToSection('downloads')} 
                  className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full justify-start text-base focus:ring-2 focus:ring-white/20"
                  role="menuitem"
                  aria-label="Ver downloads"
                >
                  <Download size={16} />
                  {t('nav.download')}
                </button>
              </NavigationMenuItem>
              
              {/* Language Selector and CTA Button for Mobile */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex justify-center">
                  <LanguageSelector />
                </div>
                <Button 
                  onClick={() => {
                    scrollToSection('pricing');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-bold px-6 py-3 text-base rounded-lg transition-all duration-300 transform hover:scale-105 w-full focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Recarregar agora"
                >
                  <Zap size={16} className="mr-2" />
                  {language === 'en' ? 'BUY NOW' : 'RECARREGAR AGORA'}
                </Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
