
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Download, CreditCard, WhatsApp } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('hero')} className={navigationMenuTriggerStyle() + " gap-2"}>
                <Home size={16} />
                Início
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('downloads')} className={navigationMenuTriggerStyle() + " gap-2"}>
                <Download size={16} />
                Download
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('pricing')} className={navigationMenuTriggerStyle() + " gap-2"}>
                <CreditCard size={16} />
                Faça sua Recarga
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="https://api.whatsapp.com/send?phone=5561998519524&text=Desejo%20Suporte%20para%20Eppi%20Cinema" 
                target="_blank" 
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle() + " gap-2"}
              >
                <WhatsApp size={16} />
                Suporte
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
