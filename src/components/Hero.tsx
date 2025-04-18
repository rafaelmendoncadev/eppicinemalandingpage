
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Adicionando imagem de fundo com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04')`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in">
          Eppi Cinema - Seu portal para entretenimento ilimitado!
        </h1>
        <Button 
          size="lg"
          className="bg-white text-violet-600 hover:bg-violet-100 transition-all duration-300 text-lg px-8 py-6"
        >
          <Download className="mr-2 h-5 w-5" />
          Baixe Agora
        </Button>
      </div>
    </section>
  );
}
