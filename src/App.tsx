import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* 新しいルートを追加 */}
      <Route path="/coming-soon" element={ (
        <ComingSoon 
          title="Kommer Snart"
          description="Tjänsten för Köp värdebevis, Prova gratis i 14 dagar och Skapa konto förbereds just nu. Registrera dig och invänta vårt svar."
        />
      )} />

      <Route path="/for-privat" element={ (
        <ComingSoon 
          title="För privat"
          description="Du kommer att kunna använda våra tjänster för privatpersoner."
        />
      )} />

      <Route path="/for-vard-och-omsorg" element={ (
        <ComingSoon 
          title="För vård och omsorg"
          description="Du kommer att kunna använda våra tjänster för vård- och omsorgsverksamheter."
        />
      )} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
