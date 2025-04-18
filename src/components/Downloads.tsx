
import { Button } from "@/components/ui/button";
import { Smartphone, Tv } from "lucide-react";

export default function Downloads() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-violet-900">
          Disponível nos dispositivos Fire Stick e Celulares Android!
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 transition-colors">
            <Tv className="w-16 h-16 text-violet-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Fire Stick</h3>
            <Button variant="outline" className="border-violet-500 text-violet-600 hover:bg-violet-50">
              Baixar para Fire Stick
            </Button>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
            <Smartphone className="w-16 h-16 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Android</h3>
            <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
              Baixar para Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
