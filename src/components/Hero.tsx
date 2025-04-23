
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-primary relative overflow-hidden px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ 
          backgroundImage: `url('https://mejorconsalud.as.com/wp-content/uploads/2021/06/pelicula-familiar.jpg')`,
        }}
      ></div>
      
      <div className="container mx-auto text-center text-white relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 animate-fade-in">
          Eppi Cinema - Seu portal para entretenimento ilimitado!
        </h1>
        <Button 
          onClick={() => scrollToSection('downloads')}
          size="lg"
          className="bg-white text-violet-600 hover:bg-violet-100 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
        >
          <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          Baixe Agora
        </Button>
      </div>
    </section>
  );
}
