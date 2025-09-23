
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Download, CreditCard, Menu, HelpCircle, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex items-center gap-1 mr-2 md:mr-4">
            <img 
              src="/eppi-cinema-logo.png" 
              alt="Eppi Cinema Logo" 
              className="h-6 w-6 md:h-8 md:w-8"
              loading="eager"
              fetchPriority="high"
              width="32"
              height="32"
              decoding="async"
            />
            <img 
              src="/nossa-tv-logo.png" 
              alt="NossaTV Logo" 
              className="h-6 w-auto md:h-8 md:w-auto"
              loading="eager"
              fetchPriority="high"
              width="37"
              height="32"
              decoding="async"
            />
          </div>
          <span className="text-base md:text-lg font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t('nav.brandName')}</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className={`${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 border-b border-gray-700/50' : 'hidden'} md:relative md:block md:top-0 md:bg-transparent md:border-none`}>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row gap-1 md:gap-3 p-4 md:p-0">
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('hero')} className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full md:w-auto justify-start text-sm">
                  <Home size={14} />
                  {t('nav.home')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('how-it-works')} className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full md:w-auto justify-start text-sm">
                  <HelpCircle size={14} />
                  {t('nav.features')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('pricing')} className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full md:w-auto justify-start text-sm">
                  <CreditCard size={14} />
                  {t('nav.pricing')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('why-buy-here')} className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full md:w-auto justify-start text-sm">
                  <Shield size={14} />
                  {t('nav.whyChoose')}
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('downloads')} className="flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full md:w-auto justify-start text-sm">
                  <Download size={14} />
                  {t('nav.download')}
                </button>
              </NavigationMenuItem>
              
              {/* Language Selector and CTA Button for Mobile */}
              <div className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex justify-center">
                  <LanguageSelector />
                </div>
                <Button 
                  onClick={() => {
                    scrollToSection('pricing');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-bold px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <Zap size={14} className="mr-1" />
                  {language === 'en' ? 'BUY NOW' : 'RECARREGAR AGORA'}
                </Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Language Selector and CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <Button 
            onClick={() => scrollToSection('pricing')}
            className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-bold px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Zap size={14} className="mr-1" />
            {language === 'en' ? 'BUY NOW' : 'RECARREGAR AGORA'}
          </Button>
        </div>
      </div>
    </nav>
  );
}
