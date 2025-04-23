
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-12 md:py-20 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-violet-900">
          Escolha o melhor plano para você!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-violet-900 mb-4">Mensal</h3>
            <p className="text-3xl md:text-4xl font-bold mb-6">
              R$ 30,00
              <span className="text-sm md:text-base font-normal text-gray-600">/mês</span>
            </p>
            <ul className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              <li className="flex items-center">
                <Check className="text-emerald-500 mr-2 h-5 w-5" />
                <span>Recarga 30 dias</span>
              </li>
              <li className="flex items-center">
                <Check className="text-emerald-500 mr-2 h-5 w-5" />
                <span>3x sem juros no cartão</span>
              </li>
            </ul>
            <Button 
              onClick={() => window.open('https://recargaoriginal.lojavirtualnuvem.com.br/produtos/recarga-eppi-cinema-antigo-mfc-30-dias/', '_blank')}
              className="w-full bg-violet-600 hover:bg-violet-700"
            >
              Comprar Recarga
            </Button>
          </div>
          <div className="bg-gradient-primary p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Anual</h3>
            <p className="text-3xl md:text-4xl font-bold mb-6">
              R$ 180,00
              <span className="text-sm md:text-base font-normal opacity-90">/ano</span>
            </p>
            <ul className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              <li className="flex items-center">
                <Check className="mr-2 h-5 w-5" />
                <span>Recarga por 1 Ano</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-5 w-5" />
                <span>3x sem juros no cartão</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-5 w-5" />
                <span>171,00 no PIX</span>
              </li>
            </ul>
            <Button 
              onClick={() => window.open('https://recargaoriginal.lojavirtualnuvem.com.br/produtos/recarga-my-family-cinema-mfc-365-dias/', '_blank')}
              className="w-full bg-white text-violet-600 hover:bg-violet-100"
            >
              Comprar Recarga
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

