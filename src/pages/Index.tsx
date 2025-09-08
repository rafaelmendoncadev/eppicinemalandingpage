
import Hero from "@/components/Hero";
import Downloads from "@/components/Downloads";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="downloads">
        <Downloads />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <FloatingWhatsApp />
      <div className="w-full py-3 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-xs text-center">
            * Pedidos efetuados entre as 22:01 e 07:59, podem ser entregues no proximo horário comercial
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
