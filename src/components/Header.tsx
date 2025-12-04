import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールされたら isScrolled を true にする
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // モバイルメニューを閉じる
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container">
        {/* ロゴとボタンを横並びにするためのFlexbox設定 */}
        <div className="flex justify-between items-center py-6 relative">
          {/* ロゴを左端に配置 */}
          <h1 className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight mr-auto">
            Elivra
          </h1>
          
          {/* デスクトップでのみ表示されるボタン群を右端に配置 */}
          <div className="hidden md:flex space-x-3">
            <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
              Skapa konto som anhörig
            </Button>
            <Button>
              Logga in
            </Button>
          </div>
          
          {/* モバイルメニューボタン */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute right-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

       {/* Desktop Navigation (ロゴの下に中央揃えで表示) */}
       <nav className="hidden md:flex justify-center gap-10 py-4 mb-6">
         <button
           onClick={() => scrollToSection("hem")}
           className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors"
         >
           Hem
         </button>
         <button
           onClick={() => scrollToSection("vad-ar-elivra")}
           className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors"
         >
           Vad är Elivra?
         </button>
         <button
           onClick={() => scrollToSection("min-livsbok")}
           className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors"
         >
           Min Livsbok
         </button>
         <button
           onClick={() => scrollToSection("priser")}
           className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors"
         >
           Priser
         </button>
         <button
           onClick={() => scrollToSection("trygghet")}
           className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors"
         >
           Trygghet
         </button>
       </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-b border-gray-200 py-5">
            <button
              onClick={() => scrollToSection("hem")}
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)] border-b border-gray-100"
            >
              Hem
            </button>
            <button
              onClick={() => scrollToSection("vad-ar-elivra")}
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)] border-b border-gray-100"
            >
              Vad är Elivra?
            </button>
            <button
              onClick={() => scrollToSection("min-livsbok")}
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)] border-b border-gray-100"
            >
              Min Livsbok
            </button>
            <button
              onClick={() => scrollToSection("priser")}
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)] border-b border-gray-100"
            >
              Priser
            </button>
            <button
              onClick={() => scrollToSection("trygghet")}
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)]"
            >
              Trygghet
            </button>
            {/* モバイルメニューにもログイン・登録ボタンを追加 */}
            <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                    Skapa konto som anhörig
                </Button>
                <Button>
                    Logga in
                </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
