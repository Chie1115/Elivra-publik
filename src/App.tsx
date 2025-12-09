import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import B2BPage from "./pages/B2BPage";
import ContactPage from "@/pages/ContactPage.tsx";

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

      <Route path="/for-vard-och-omsorg" element={<B2BPage />} />
      <Route path="/contact" element={<ContactPage />} />

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
