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
    <footer className="bg-[#0F3A52] text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* 上部のグリッド内容 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 py-12 md:py-16">
          {/* Elivra セクション */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Elivra</h3>
          </div>

          {/* Kontakt セクション */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Kontakt</h4>
            <div className="space-y-2">
              <p className="text-gray-200 text-sm">
                <span className="font-semibold">Support:</span> 0705545333
              </p>
              <p className="text-gray-200 text-sm">
                <span className="font-semibold">Email:</span> info@elivra.se
              </p>
            </div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mt-6 mb-4">Företag</h4>
            <button 
              onClick={() => goToSection("om-elivra")}
              className="text-gray-200 text-sm hover:text-white transition-colors"
            >
              Om Elivra
            </button>
          </div>

          {/* Produkter セクション */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Produkter</h4>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-white mb-3">Elivra WalkGuard</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-8"
                />
              </div>
              
            </div>
          </div>

          {/* Adress セクション */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Adress</h4>
            <p className="text-gray-200 text-sm">Teknikringen 8D</p>
            <p className="text-gray-200 text-sm">58330 Linköping, Sweden</p>
          </div>
        </div>

        {/* フッター下部のコピーライト */}
        <div className="text-center py-6 border-t border-gray-600">
          <p className="text-gray-300 text-xs">
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
