import { Button } from "@/components/ui/button";
import { Smartphone, Tv } from "lucide-react";
export default function Downloads() {
  return <section className="py-12 md:py-20 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-violet-900">
          Disponível nos dispositivos Fire Stick e Celulares Android!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-4 md:p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 transition-colors">
            <Tv className="w-12 h-12 md:w-16 md:h-16 text-violet-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-4">TV Stick ou TV Box</h3>
            <Button variant="outline" className="w-full md:w-auto border-violet-500 text-violet-600 hover:bg-violet-50">Baixar App</Button>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
            <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-emerald-600 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-4">Celular Android</h3>
            <Button variant="outline" className="w-full md:w-auto border-emerald-500 text-emerald-600 hover:bg-emerald-50">Baixar App</Button>
          </div>
        </div>
      </div>
    </section>;
}