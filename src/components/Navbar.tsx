
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Download, CreditCard, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img 
            src="https://eppicinemashop.com/wp-content/uploads/2024/08/Eppicinema_Logo-app-1024x1024.png" 
            alt="Eppi Cinema Logo" 
            className="h-8 w-8 md:h-12 md:w-12 mr-2 md:mr-4"
          />
          <span className="text-lg md:text-xl font-bold text-gray-800">Eppi Cinema</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className={`${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-white border-b' : 'hidden'} md:relative md:block md:top-0 md:bg-transparent md:border-none`}>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row gap-2 md:gap-6 p-4 md:p-0">
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('hero')} className={navigationMenuTriggerStyle() + " gap-2 w-full md:w-auto justify-start"}>
                  <Home size={16} />
                  Início
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('downloads')} className={navigationMenuTriggerStyle() + " gap-2 w-full md:w-auto justify-start"}>
                  <Download size={16} />
                  Download
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('pricing')} className={navigationMenuTriggerStyle() + " gap-2 w-full md:w-auto justify-start"}>
                  <CreditCard size={16} />
                  Faça sua Recarga
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
