import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isB2BPage = location.pathname === "/for-vard-och-omsorg";
  const isForetagPage = location.pathname === "/foretag";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container px-4">
        {/* Top row: Page selection buttons */}
        <div className="flex justify-start items-center py-2 md:py-3 gap-1 sm:gap-2 md:gap-3">
          <Button 
            className={!isB2BPage && !isForetagPage ? "bg-[#FF9966] hover:bg-[#FF8844] text-white border-0 text-sm md:text-base px-3 md:px-6 py-2 md:py-3" : "bg-transparent hover:bg-gray-100 text-[#FF9966] border-2 border-[#FF9966] text-sm md:text-base px-3 md:px-6 py-2 md:py-3"}
            onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
          >
            Privat
          </Button>
          <Button 
            className={isForetagPage ? "bg-[#FF9966] hover:bg-[#FF8844] text-white border-0 text-sm md:text-base px-3 md:px-6 py-2 md:py-3" : "bg-transparent hover:bg-gray-100 text-[#FF9966] border-2 border-[#FF9966] text-sm md:text-base px-3 md:px-6 py-2 md:py-3"}
            onClick={() => { navigate("/foretag"); window.scrollTo(0, 0); }}
          >
            Företag
          </Button>
          <Button 
            className={isB2BPage ? "bg-[#FF9966] hover:bg-[#FF8844] text-white border-0 text-sm md:text-base px-3 md:px-6 py-2 md:py-3" : "bg-transparent hover:bg-gray-100 text-[#FF9966] border-2 border-[#FF9966] text-sm md:text-base px-3 md:px-6 py-2 md:py-3"}
            onClick={() => { navigate("/for-vard-och-omsorg"); window.scrollTo(0, 0); }}
          >
            vård och omsorg
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Bottom row: Logo and Desktop Nav */}
        <div className="flex justify-between items-center py-3 md:py-4 gap-4 border-t border-gray-200">
          {/* Logo */}
          <h1 className="text-2xl md:text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight cursor-pointer shrink-0" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
            Elivra
          </h1>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex gap-8 flex-1 ml-8">
            <button
              onClick={() => scrollToSection("hem")}
              className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors whitespace-nowrap"
            >
              Hem
            </button>
            <button
              onClick={() => scrollToSection("vad-ar-elivra")}
              className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors whitespace-nowrap"
            >
              Vad är Elivra?
            </button>
            <button
              onClick={() => scrollToSection("min-livsbok")}
              className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors whitespace-nowrap"
            >
              Min Livsbok
            </button>
            <button
              onClick={() => scrollToSection("trygghet")}
              className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors whitespace-nowrap"
            >
              Trygghet
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white border-b border-gray-200 py-5">
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
              onClick={() => scrollToSection("trygghet")}
              className="block w-full text-left py-3 px-4 text-gray-600 hover:text-[oklch(0.58_0.09_220)] border-b border-gray-100"
            >
              Trygghet
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}


