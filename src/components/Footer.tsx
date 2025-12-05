import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter"; // <--- useLocationをインポート
import { toast } from "sonner";

export function FinalCTA() {
  const [, setLocation] = useLocation(); // <--- setLocation関数を取得

  // const scrollToSection = (id: string) => { // <--- scrollToSection関数を削除
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

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-semibold text-primary text-center mb-6">
          Trygghet och närhet för familjen, idag och i framtiden
        </h2>
        <p className="text-base text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Utforska dina möjligheter redan nu. Prova gratis i 14 dagar eller köp ett värdebevis och ge trygghet och sällskap i gåva.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <Button
            onClick={() => setLocation("/coming-soon")} // <--- 遷移先に変更
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-7 py-6 text-base"
          >
            <Gift className="h-5 w-5" />
            Köp värdebevis
          </Button>
          <Button
            onClick={() => setLocation("/coming-soon")} // <--- 遷移先に変更
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col justify-between py-12">
        {/* 上部のグリッド内容 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-3">Elivra</h3>
            <p className="text-gray-300 text-base">
              Elivra är en tjänst som hjälper dig att samla dina minnen och din livsberättelse.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Kontakt</h3>
            <p className="text-gray-300 text-base">info@elivra.se</p>
            <p className="text-gray-300 text-base">070-0000000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Adress</h3>
            <p className="text-gray-300 text-base">Teknikringen 8D</p>
            <p className="text-gray-300 text-base">58330 Linköping, Sweden</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Länkar</h3>
            <ul className="space-y-2">
              <li><a href="#hem" className="text-gray-300 hover:text-white transition-colors">Hem</a></li>
              <li><a href="#vad-ar-elivra" className="text-gray-300 hover:text-white transition-colors">Vad är Elivra?</a></li>
              <li><a href="#min-livsbok" className="text-gray-300 hover:text-white transition-colors">Min Livsbok</a></li>
              <li><a href="#trygghet" className="text-gray-300 hover:text-white transition-colors">Trygghet</a></li>
            </ul>
          </div>
        </div>

        {/* フッター下部のコピーライト */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">&copy; 2025 Elivra. Alla rättigheter reserverade.</p>
        </div>
      </div>
    </footer>
  );
}

