
import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";

const Downloads = lazy(() => import("@/components/Downloads"));
const Pricing = lazy(() => import("@/components/Pricing"));
const WhyBuyHere = lazy(() => import("@/components/WhyBuyHere"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
        <div id="downloads">
          <Downloads />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
        <div id="pricing">
          <Pricing />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
        <div id="why-buy-here">
          <WhyBuyHere />
        </div>
      </Suspense>
      <Suspense fallback={<div className="fixed bottom-4 right-4 w-14 h-14 animate-pulse bg-gradient-to-r from-green-200 to-green-300 rounded-full"></div>}>
        <FloatingWhatsApp />
      </Suspense>
      <div className="w-full py-3 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-xs text-center">
            * Pedidos efetuados entre as 22:01 e 07:59, podem ser entregues no proximo horário comercial
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="h-16 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
        <Footer />
      </Suspense>
    </main>
  );
}
