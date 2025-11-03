import { Construction } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <Construction className="w-24 h-24 mx-auto mb-8 text-yellow-400 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Site em Manutenção
        </h1>
        <p className="text-xl text-gray-300">
          Estamos realizando melhorias no sistema. Voltaremos em breve.
        </p>
      </div>
    </div>
  );
}
