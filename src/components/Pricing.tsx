import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
export default function Pricing() {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-violet-900">
          Escolha o melhor plano para você!
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-violet-900 mb-4">Mensal</h3>
            <p className="text-4xl font-bold mb-6">
              R$ 30,00
              <span className="text-base font-normal text-gray-600">/mês</span>
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <Check className="text-emerald-500 mr-2" />
                <span>Recarga 30 dias</span>
              </li>
              <li className="flex items-center">
                <Check className="text-emerald-500 mr-2" />
                <span>3x sem juros no cartão</span>
              </li>
            </ul>
            <Button className="w-full bg-violet-600 hover:bg-violet-700">Comprar Recarga</Button>
          </div>
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-white">
            <h3 className="text-2xl font-bold mb-4">Anual</h3>
            <p className="text-4xl font-bold mb-6">
              R$ 180,00
              <span className="text-base font-normal opacity-90">/ano</span>
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <Check className="mr-2" />
                <span>Recarga por 1 Ano</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />
                <span>3x sem juros no cartão</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2" />
                <span>171,00 no  PIX</span>
              </li>
            </ul>
            <Button className="w-full bg-white text-violet-600 hover:bg-violet-100">Comprar Recarga</Button>
          </div>
        </div>
      </div>
    </section>;
}