
import { Button } from "@/components/ui/button";
import { Smartphone, Tv } from "lucide-react";

export default function Downloads() {
  const handleDownloadAndroid = () => {
    window.open('https://baixeseuapp.com.br', '_blank');
  };

  const handleDownloadTvBox = () => {
    window.open('https://baixeseuapp.com.br', '_blank');
  };

  return (
    <section className="py-12 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-violet-900">
          Disponível no Fire Stick, Tv Box e Celulares Android!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-3 md:p-4 rounded-xl border-2 border-violet-100 hover:border-violet-300 transition-colors">
            <Tv className="w-10 h-10 md:w-12 md:h-12 text-violet-600 mb-3" />
            <Button 
              variant="outline" 
              className="w-full md:w-auto border-violet-500 text-violet-600 hover:bg-violet-50"
              onClick={handleDownloadTvBox}
            >
              TV Stick e TV Box
            </Button>
          </div>
          <div className="flex flex-col items-center p-3 md:p-4 rounded-xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
            <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 mb-3" />
            <Button 
              variant="outline" 
              className="w-full md:w-auto border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              onClick={handleDownloadAndroid}
            >
              Celular Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
