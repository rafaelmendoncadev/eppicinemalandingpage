
import Hero from "@/components/Hero";
import Downloads from "@/components/Downloads";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";

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
    </main>
  );
}
