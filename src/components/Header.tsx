import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

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
        {/* トップセクション：ロゴと右上ボタン */}
        <div className="flex justify-between items-center py-4">
          {/* ロゴを左端に配置 */}
          <h1 className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight">
            Elivra
          </h1>
          
          {/* 右上のオレンジボタン（デスクトップのみ） */}
          <div className="hidden md:flex space-x-3">
            <Button 
              className="bg-[#FF9966] hover:bg-[#FF8844] text-white border-0"
              onClick={() => setLocation("/for-privat")}
            >
              För privat
            </Button>
            <Button 
              className="bg-[#FF9966] hover:bg-[#FF8844] text-white border-0"
              onClick={() => setLocation("/for-vard-och-omsorg")}
            >
              För vård och omsorg
            </Button>
          </div>
          
          {/* モバイルメニューボタン */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-10 py-4 mb-4">
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
          {/* ナビゲーション右側のボタン */}
          <div className="flex space-x-3 border-l border-gray-300 pl-10">
            <Button variant="outline" className="text-[oklch(0.58_0.09_220)] border-[oklch(0.58_0.09_220)] hover:bg-blue-50">
              Skapa konto som anhörig
            </Button>
            <Button className="bg-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.55_0.09_220)] text-white">
              Logga in
            </Button>
          </div>
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
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)] border-b border-gray-100"
            >
              Trygghet
            </button>
            {/* モバイルメニューのボタン */}
            <div className="flex flex-col space-y-3 pt-4 px-4">
              <Button 
                className="bg-[#FF9966] hover:bg-[#FF8844] text-white border-0 w-full"
                onClick={() => {
                  setLocation("/for-privat");
                  setIsMenuOpen(false);
                }}
              >
                För privat
              </Button>
              <Button 
                className="bg-[#FF9966] hover:bg-[#FF8844] text-white border-0 w-full"
                onClick={() => {
                  setLocation("/for-vard-och-omsorg");
                  setIsMenuOpen(false);
                }}
              >
                För vård och omsorg
              </Button>
              <div className="border-t border-gray-200 pt-3 mt-3 flex flex-col space-y-3">
                <Button variant="outline" className="text-[oklch(0.58_0.09_220)] border-[oklch(0.58_0.09_220)] hover:bg-blue-50">
                  Skapa konto som anhörig
                </Button>
                <Button className="bg-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.55_0.09_220)] text-white">
                  Logga in
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
