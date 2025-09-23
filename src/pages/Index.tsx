
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
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Pular para o conteúdo principal"
      >
        Pular para o conteúdo principal
      </a>
      
      <div className="min-h-screen">
        {/* Header with navigation */}
        <header role="banner">
          <Suspense fallback={
            <nav 
              className="sticky top-0 z-50 w-full h-16 bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-gray-700/50 animate-pulse"
              role="navigation"
              aria-label="Navegação principal"
            />
          }>
            <Navbar />
          </Suspense>
        </header>
        
        {/* Main content */}
        <main id="main-content" role="main" className="focus:outline-none" tabIndex={-1}>
          {/* Hero Section */}
          <section 
            id="hero" 
            aria-label="Seção principal com informações sobre recargas"
            role="banner"
          >
            <Hero />
          </section>
          
          {/* How It Works Section */}
          <section 
            id="how-it-works-section" 
            aria-label="Como funciona nosso serviço"
            role="region"
          >
            <LazySection 
              id="how-it-works"
              rootMargin="100px"
              fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"
                  role="img" 
                  aria-label="Carregando seção Como Funciona"
                />
              }
            >
              <Suspense fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"
                  role="img" 
                  aria-label="Carregando conteúdo"
                />
              }>
                <HowItWorks />
              </Suspense>
            </LazySection>
          </section>
          
          {/* Downloads Section */}
          <section 
            id="downloads-section" 
            aria-label="Downloads disponíveis"
            role="region"
          >
            <LazySection 
              id="downloads"
              rootMargin="100px"
              fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"
                  role="img" 
                  aria-label="Carregando seção Downloads"
                />
              }
            >
              <Suspense fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"
                  role="img" 
                  aria-label="Carregando conteúdo"
                />
              }>
                <Downloads />
              </Suspense>
            </LazySection>
          </section>
          
          {/* Pricing Section */}
          <section 
            id="pricing-section" 
            aria-label="Planos e preços"
            role="region"
          >
            <LazySection 
              id="pricing"
              rootMargin="50px"
              fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"
                  role="img" 
                  aria-label="Carregando seção Preços"
                />
              }
            >
              <Suspense fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"
                  role="img" 
                  aria-label="Carregando conteúdo"
                />
              }>
                <Pricing />
              </Suspense>
            </LazySection>
          </section>
          
          {/* Why Buy Here Section */}
          <section 
            id="why-buy-here-section" 
            aria-label="Por que comprar conosco"
            role="region"
          >
            <LazySection 
              id="why-buy-here"
              rootMargin="100px"
              fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-8"
                  role="img" 
                  aria-label="Carregando seção Por que Comprar Aqui"
                />
              }
            >
              <Suspense fallback={
                <div 
                  className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"
                  role="img" 
                  aria-label="Carregando conteúdo"
                />
              }>
                <WhyBuyHere />
              </Suspense>
            </LazySection>
          </section>
          
          {/* Important Notice */}
          <aside 
            className="w-full py-3 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white"
            role="complementary"
            aria-label="Informações importantes sobre horários"
          >
            <div className="container mx-auto px-4">
              <p className="text-xs text-center" role="note">
                * Pedidos efetuados entre as 22:01 e 07:59, podem ser entregues no próximo horário comercial
              </p>
            </div>
          </aside>
        </main>
        
        {/* Footer */}
        <LazySection 
          rootMargin="50px"
          fallback={
            <div 
              className="h-16 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4 my-4"
              role="img" 
              aria-label="Carregando rodapé"
            />
          }
        >
          <Suspense fallback={
            <div 
              className="h-16 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"
              role="img" 
              aria-label="Carregando conteúdo"
            />
          }>
            <Footer />
          </Suspense>
        </LazySection>
        
        {/* FloatingWhatsApp loads after user scrolls */}
        <LazySection 
          rootMargin="200px"
          fallback={
            <div 
              className="fixed bottom-4 right-4 w-14 h-14 animate-pulse bg-gradient-to-r from-green-200 to-green-300 rounded-full"
              role="img" 
              aria-label="Carregando botão WhatsApp"
            />
          }
        >
          <Suspense fallback={
            <div 
              className="fixed bottom-4 right-4 w-14 h-14 animate-pulse bg-gradient-to-r from-green-200 to-green-300 rounded-full"
              role="img" 
              aria-label="Carregando conteúdo"
            />
          }>
            <FloatingWhatsApp />
          </Suspense>
        </LazySection>
      </div>
    </>
  );
}
