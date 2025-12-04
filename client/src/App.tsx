import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SelectPlanPage from "./pages/SelectPlanPage";
import DashboardPage from "./pages/DashboardPage";
import AddUserPage from "./pages/AddUserPage";
import AddRelativePage from "./pages/AddRelativePage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={LandingPage} />
      <Route path={"/login"} component={LoginPage} />
      <Route path={"/register"} component={RegisterPage} />
      <Route path={"/select-plan"} component={SelectPlanPage} />
      <Route path={"/dashboard"} component={DashboardPage} />
      <Route path={"/add-user"} component={AddUserPage} />
      <Route path={"/add-relative"} component={AddRelativePage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
