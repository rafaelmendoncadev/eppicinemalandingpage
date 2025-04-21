
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Home, Download, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/#hero" className={navigationMenuTriggerStyle() + " gap-2"}>
                <Home size={16} />
                Início
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#downloads" className={navigationMenuTriggerStyle() + " gap-2"}>
                <Download size={16} />
                Download
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#pricing" className={navigationMenuTriggerStyle() + " gap-2"}>
                <CreditCard size={16} />
                Faça sua Recarga
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
