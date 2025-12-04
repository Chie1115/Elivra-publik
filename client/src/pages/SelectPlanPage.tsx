/**
 * Select Plan Page - Elivra
 * Design: Warm Humanist
 * - Three plan cards with clear differentiation
 * - Warm teal accents, cream background
 * - Highlight recommended plan
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Check, ArrowLeft } from "lucide-react";

export default function SelectPlanPage() {
  const [, setLocation] = useLocation();

  const plans = [
    {
      name: "Elivra Standard",
      subtitle: "1 user",
      description: "Perfect for getting started",
      price: "99",
      period: "month",
      features: [
        "1 primary user (senior)",
        "Basic relative access",
        "Message & calendar",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Elivra Family",
      subtitle: "up to 3 users",
      description: "Most popular choice",
      price: "199",
      period: "month",
      features: [
        "1 primary user (senior)",
        "Up to 3 relatives",
        "Extended access levels",
        "Message & calendar",
        "Status monitoring",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Elivra Plus",
      subtitle: "More users & features",
      description: "For larger families",
      price: "Custom",
      period: "contact us",
      features: [
        "Multiple primary users",
        "Unlimited relatives",
        "Full access levels",
        "Advanced monitoring",
        "Custom integrations",
        "Dedicated support",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Back Button */}
      <div className="container py-6">
        <Button
          variant="ghost"
          onClick={() => setLocation("/register")}
          className="text-foreground hover:bg-secondary/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tillbaka
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Välj abonnemang
            </h1>
            <p className="text-xl text-foreground/70">
              Välj det abonnemang som passar bäst för din familj
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white shadow-2xl ring-2 ring-primary scale-105 md:scale-100"
                    : "bg-white shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Rekommenderad
                    </div>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4">
                      {plan.subtitle}
                    </p>
                    <p className="text-foreground/70 text-sm mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-primary">
                          {plan.price}
                        </span>
                        {plan.price !== "Custom" && (
                          <span className="text-foreground/60">
                            kr/{plan.period}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                    <Button
                    onClick={() => setLocation("/dashboard")}
                    className={`w-full h-11 rounded-lg font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg"
                        : "border-2 border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    Gå vidare till betalning
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-secondary/30 rounded-2xl p-8 text-center">
            <p className="text-foreground/70">
              Alla abonnemang inkluderar 30 dagars kostnadsfri provperiod. Inget kreditkort krävs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
