
import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import LazySection from "@/components/LazySection";

// Lazy load Navbar after hero renders
const Navbar = lazy(() => import("@/components/Navbar"));

// Lazy load components only when visible
const HowItWorks = lazy(() => 
  import("@/components/HowItWorks").then(module => ({ default: module.default }))
);
const Downloads = lazy(() => 
  import("@/components/Downloads").then(module => ({ default: module.default }))
);
const Pricing = lazy(() => 
  import("@/components/Pricing").then(module => ({ default: module.default }))
);
const WhyBuyHere = lazy(() => 
  import("@/components/WhyBuyHere").then(module => ({ default: module.default }))
);
const FloatingWhatsApp = lazy(() => 
  import("@/components/FloatingWhatsApp").then(module => ({ default: module.default }))
);
const Footer = lazy(() => 
  import("@/components/Footer").then(module => ({ default: module.default }))
);

export default function Index() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={
        <nav className="sticky top-0 z-50 w-full h-16 bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-gray-700/50 animate-pulse"></nav>
      }>
        <Navbar />
      </Suspense>
      
      <div id="hero">
        <Hero />
      </div>
      
      <LazySection 
        id="how-it-works"
        rootMargin="100px"
        fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"></div>}
      >
        <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
          <HowItWorks />
        </Suspense>
      </LazySection>
      
      <LazySection 
        id="downloads"
        rootMargin="100px"
        fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"></div>}
      >
        <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
          <Downloads />
        </Suspense>
      </LazySection>
      
      <LazySection 
        id="pricing"
        rootMargin="50px"
        fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"></div>}
      >
        <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
          <Pricing />
        </Suspense>
      </LazySection>
      
      <LazySection 
        id="why-buy-here"
        rootMargin="100px"
        fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"></div>}
      >
        <Suspense fallback={<div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
          <WhyBuyHere />
        </Suspense>
      </LazySection>
      
      {/* FloatingWhatsApp loads after user scrolls */}
      <LazySection 
        rootMargin="200px"
        fallback={<div className="fixed bottom-4 right-4 w-14 h-14 animate-pulse bg-gradient-to-r from-green-200 to-green-300 rounded-full"></div>}
      >
        <Suspense fallback={<div className="fixed bottom-4 right-4 w-14 h-14 animate-pulse bg-gradient-to-r from-green-200 to-green-300 rounded-full"></div>}>
          <FloatingWhatsApp />
        </Suspense>
      </LazySection>
      
      <div className="w-full py-3 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-xs text-center">
            * Pedidos efetuados entre as 22:01 e 07:59, podem ser entregues no proximo horário comercial
          </div>
        </div>
      </div>
      
      <LazySection 
        rootMargin="50px"
        fallback={<div className="h-16 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-4"></div>}
      >
        <Suspense fallback={<div className="h-16 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>}>
          <Footer />
        </Suspense>
      </LazySection>
    </main>
  );
}
