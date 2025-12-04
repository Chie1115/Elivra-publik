import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/for-privat" component={() => (
        <ComingSoon 
          title="För privat"
          description="Du kommer att kunna använda våra tjänster för privatpersoner."
        />
      )} />

      <Route path="/for-vard-och-omsorg" component={() => (
        <ComingSoon 
          title="För vård och omsorg"
          description="Du kommer att kunna använda våra tjänster för vård- och omsorgsverksamheter."
        />
      )} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

