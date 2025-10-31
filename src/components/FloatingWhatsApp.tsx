
import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5561993077154?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button 
        size="lg"
        className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageSquare className="mr-2" />
        Suporte
      </Button>
    </a>
  );
}
