import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  // const scrollToSection = (id: string) => { // <--- 4. scrollToSection関数を削除
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const headerOffset = 80;
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const navigate = useNavigate();

  return (
   <section
  id="hem"
  className="relative aspect-16/7 md:aspect-16/5 flex items-center bg-cover bg-center"
  style={{ backgroundImage: "url(/assets/samla_slakten.jpg)" }}
>

      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/40" />
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Ger trygghet och sällskap 
          </h2>
          <p className="text-lg mb-10 opacity-95">
            En digital följeslagare som pratar, lyssnar och hjälper dig att hålla minnet aktivt – och som låter dig spara livets berättelser i Min Livsbok.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Button
              onClick={() => navigate("/coming-soon")} // <--- 3. 遷移先に変更
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-7 py-6 text-base"
            >
              <Gift className="h-5 w-5" />
              Köp värdebevis
            </Button>
            <Button
              onClick={() => navigate("/coming-soon")} // <--- 3. 遷移先に変更
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
