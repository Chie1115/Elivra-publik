import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
   <section
  id="hem"
  className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-cover bg-center"
  style={{ backgroundImage: "url(/assets/samla_slakten.jpg)" }}
>

      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/40" />
      <div className="container relative z-10 py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-tight">
            Ger trygghet och sällskap 
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-10 opacity-95 px-2">
            En digital följeslagare som pratar, lyssnar och hjälper dig att hålla minnet aktivt – och som låter dig spara livets berättelser i Min Livsbok.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-5 justify-center px-2">
            <Button
              onClick={() => navigate("/coming-soon")} // <--- 3. 遷移先に変更
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 px-5 md:px-7 py-4 md:py-6 text-sm md:text-base w-auto"
            >
              <Gift className="h-4 w-4 md:h-5 md:w-5" />
              Köp värdebevis
            </Button>
            <Button
              onClick={() => navigate("/coming-soon")} // <--- 3. 遷移先に変更
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center justify-center gap-2 px-5 md:px-7 py-4 md:py-6 text-sm md:text-base w-auto"
            >
              <Heart className="h-4 w-4 md:h-5 md:w-5" />
              Prova gratis i 14 dagar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
