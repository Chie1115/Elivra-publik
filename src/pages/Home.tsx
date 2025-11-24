import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsElivra from "@/components/WhatIsElivra";
import MinLivsbok from "@/components/MinLivsbok";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer, { FinalCTA } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIsElivra />
        <MinLivsbok />
        <Pricing />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
