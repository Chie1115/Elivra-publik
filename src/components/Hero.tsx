import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
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
    <section
      id="hem"
      className="relative min-h-[509px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/samla_slakten.jpg)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40" />
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Ge trygghet och sällskap i present
          </h2>
          <p className="text-lg mb-10 opacity-95">
            En AI-assistent som pratar, lyssnar och tränar minnet – med Min Livsbok för att spara livets berättelser.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Button
              onClick={() => scrollToSection("priser")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-7 py-6 text-base"
            >
              <Gift className="h-5 w-5" />
              Köp bördebevis
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
      </div>
    </section>
  );
}
