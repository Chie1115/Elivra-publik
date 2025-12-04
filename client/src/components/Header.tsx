import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // 常にホームページに戻ってからスクロールする修正を適用
    if (location !== "/") {
      setLocation("/");
    }
    
    // ページ遷移後にスクロールを実行
    setTimeout(() => {
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
      setIsMenuOpen(false);
    }, location !== "/" ? 100 : 0); // ページ遷移があった場合のみ遅延
  };

  const navItems = [
    { id: "hem", label: "Hem" },
    { id: "vad-ar-elivra", label: "Vad är Elivra?" },
    { id: "min-livsbok", label: "Min Livsbok" },
    { id: "trygghet", label: "Trygghet" },
  ];

  return (
    <header
      className={`border-b border-border/30 bg-white/50 backdrop-blur-sm sticky top-0 z-50 transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => setLocation("/")}>
            Elivra
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* Action Buttons (For Privat / For Vård och Omsorg) - Based on old main branch */}
            <Button 
              variant="ghost"
              onClick={() => setLocation("/for-privat")}
              className="text-foreground hover:bg-secondary/50"
            >
              För privat
            </Button>
            <Button 
              variant="ghost"
              onClick={() => setLocation("/for-vard-och-omsorg")}
              className="text-foreground hover:bg-secondary/50"
            >
              För vård och omsorg
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocation("/login")}
              className="text-foreground hover:bg-secondary/50"
            >
              Logga in
            </Button>
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4 absolute w-full left-0 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-foreground/70 hover:bg-secondary/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-2 p-4 border-t mt-2">
                <Button 
                  variant="ghost"
                  onClick={() => setLocation("/for-privat")}
                  className="w-full justify-start text-foreground hover:bg-secondary/50"
                >
                  För privat
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => setLocation("/for-vard-och-omsorg")}
                  className="w-full justify-start text-foreground hover:bg-secondary/50"
                >
                  För vård och omsorg
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setLocation("/login")}
                  className="w-full justify-start text-foreground hover:bg-secondary/50"
                >
                  Logga in
                </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
