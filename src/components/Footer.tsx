import { Gift, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export function FinalCTA() {
  const navigate = useNavigate();

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
    <section className="py-12 md:py-20">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-[oklch(0.58_0.09_220)]">
          Trygghet och närhet för familjen, idag och i framtiden
        </h2>
        <p className="text-sm md:text-base text-center max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
          Utforska dina möjligheter redan nu. Prova gratis i 14 dagar eller köp ett värdebevis och ge trygghet och sällskap i gåva.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 justify-center px-4">
          <Button
            onClick={() => navigate("/coming-soon")} // <--- 遷移先に変更
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 px-6 md:px-7 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
          >
            <Gift className="h-4 w-4 md:h-5 md:w-5" />
            Köp värdebevis
          </Button>
          <Button
            onClick={() => navigate("/coming-soon")} // <--- 遷移先に変更
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center justify-center gap-2 px-6 md:px-7 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
          >
            <Heart className="h-4 w-4 md:h-5 md:w-5" />
            Prova gratis i 14 dagar
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const goToSection = (id: string) => {
    // If already on home, just scroll
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    // Navigate to home then scroll after navigation has settled
    navigate("/");
    // small delay to allow DOM to update
    setTimeout(() => scrollToSection(id), 50);
  };
  return (
    <footer className="bg-gray-900 text-white relative">
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
           
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Adress</h3>
            <p className="text-gray-300 text-base">Teknikringen 8D</p>
            <p className="text-gray-300 text-base">58330 Linköping, Sweden</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Länkar</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => goToSection("hem")} className="text-gray-300 hover:text-white transition-colors">Hem</button>
              </li>
              <li>
                <button onClick={() => goToSection("vad-ar-elivra")} className="text-gray-300 hover:text-white transition-colors">Vad är Elivra?</button>
              </li>
              <li>
                <button onClick={() => goToSection("min-livsbok")} className="text-gray-300 hover:text-white transition-colors">Min Livsbok</button>
              </li>
              <li>
                <button onClick={() => goToSection("trygghet")} className="text-gray-300 hover:text-white transition-colors">Trygghet</button>
              </li>
            </ul>
          </div>
        </div>

        {/* フッター下部のコピーライト */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-3">
            &copy; 2026 Elivra AB |{" "}
            <a href="/integritetspolicy" className="hover:text-white transition-colors">
              Integritetspolicy
            </a>
            {" | "}
            <a href="/villkor" className="hover:text-white transition-colors">
              Villkor
            </a>
            {" | "}
            <a href="/patent-pending" className="hover:text-white transition-colors">
              Patent Pending
            </a>
          </p>
        </div>
      </div>

      {/* トップに戻るボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.53_0.09_220)] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="トップに戻る"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </footer>
  );
}
