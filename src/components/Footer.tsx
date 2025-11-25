import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[oklch(0.97_0.02_80)]">
      <div className="container">
        <h2 className="text-4xl font-semibold text-primary text-center mb-6">
          Elivra – Trygghet och närhet för familjen, idag och i framtiden
        </h2>
        <p className="text-base text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Se över dina alternativ nu! Prova gratis i 14 dagar eller köp ett presentkort för att ge trygghet och sällskap i present. Prova gratis i 14 dagar eller köp ett presentkort för att ge trygghet och sällskap i present.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Button
            onClick={() => scrollToSection("priser")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-7 py-6 text-base"
          >
            <Gift className="h-5 w-5" />
            Köp presentkort
          </Button>
          <Button
            onClick={() => scrollToSection("priser")}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center gap-2 px-7 py-6 text-base"
          >
            <Heart className="h-5 w-5" />
            Prova gratis i 14 dagar
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Adress</h3>
            <p className="text-gray-300">Hantverkaregatan 29/33</p>
            <p className="text-gray-300">Linköping, Sweden</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">070-0000000</p>
            <p className="text-gray-300">info@</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; 2025 Elivra</p>
        </div>
      </div>
    </footer>
  );
}
