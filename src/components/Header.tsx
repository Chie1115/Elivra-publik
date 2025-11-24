import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container">
        <div className="flex justify-center items-center py-6 relative">
          <h1 className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight">
            Elivra
          </h1>
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-10 py-4 border-t border-b border-gray-200">
          <button
            onClick={() => scrollToSection("hem")}
            className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors relative group"
          >
            Hem
            <span className="absolute bottom-[-17px] left-0 w-0 h-0.5 bg-[oklch(0.58_0.09_220)] group-hover:w-full transition-all" />
          </button>
          <button
            onClick={() => scrollToSection("vad-ar-elivra")}
            className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors relative group"
          >
            Vad är Elivra?
            <span className="absolute bottom-[-17px] left-0 w-0 h-0.5 bg-[oklch(0.58_0.09_220)] group-hover:w-full transition-all" />
          </button>
          <button
            onClick={() => scrollToSection("min-livsbok")}
            className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors relative group"
          >
            Min Livsbok
            <span className="absolute bottom-[-17px] left-0 w-0 h-0.5 bg-[oklch(0.58_0.09_220)] group-hover:w-full transition-all" />
          </button>
          <button
            onClick={() => scrollToSection("priser")}
            className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors relative group"
          >
            Priser
            <span className="absolute bottom-[-17px] left-0 w-0 h-0.5 bg-[oklch(0.58_0.09_220)] group-hover:w-full transition-all" />
          </button>
          <button
            onClick={() => scrollToSection("trygghet")}
            className="text-gray-600 hover:text-[oklch(0.58_0.09_220)] transition-colors relative group"
          >
            Trygghet
            <span className="absolute bottom-[-17px] left-0 w-0 h-0.5 bg-[oklch(0.58_0.09_220)] group-hover:w-full transition-all" />
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
          </nav>
        )}
      </div>
    </header>
  );
}
