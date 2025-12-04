/**
 * Landing Page - Elivra
 * Design: Warm Humanist
 * - Asymmetric layout with hero section on left
 * - Warm teal primary color, cream background
 * - Poppins for headings, Inter for body text
 * - Smooth animations and gentle interactions
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";

export default function LandingPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/30 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">Elivra</div>
            <Button
              variant="ghost"
              onClick={() => setLocation("/login")}
              className="text-foreground hover:bg-secondary/50"
            >
              Logga in
            </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            {/* Left: Content */}
            <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Elivra — en kamrat, ett stöd, en trygg länk till nära och kära
            </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                För äldre, anhöriga och vårdgivare som vill skapa tryggare och mer mänsklig omsorg.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-base h-12 px-8 transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => setLocation("/register")}
              >
                Skapa konto som anhörig (Systemansvarig)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold text-base h-12 px-8 transition-all duration-300"
                onClick={() => setLocation("/login")}
              >
                Logga in
              </Button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Omsorg & Kontakt</p>
                    <p className="text-sm text-foreground/60">Stanna nära dina nära och kära</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Familjenätverk</p>
                    <p className="text-sm text-foreground/60">Anslut med vårdgivare</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Säker & Trygg</p>
                    <p className="text-sm text-foreground/60">Din integritet är viktig</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Utformad för sinnesfrid
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Elivra förbinder äldre, familjer och vårdgivare med tydlig, respektfull kommunikation och betrodda relationer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "För äldre",
                description: "Enkelt, intuitivt gränssnitt utformat med tillgänglighet i åtanke",
                icon: "👵"
              },
              {
                title: "För familjer",
                description: "Stanna informerad och ansluten med dina nära och kära på ett säkert sätt",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "För vårdgivare",
                description: "Hantera vårdssamordning med tydlig, organiserad information",
                icon: "🤝"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Redo att komma igång?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Skapa ditt Elivra-konto idag och börja bygga säkrare, mer anslutna relationer.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-base h-12 px-10 transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={() => setLocation("/register")}
          >
            Skapa konto
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-white/50 py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>&copy; 2024 Elivra. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}
