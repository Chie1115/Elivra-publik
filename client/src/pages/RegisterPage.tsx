/**
 * Registration Page - Elivra
 * Design: Warm Humanist
 * - Multi-step form with clear progression
 * - Warm teal accents, cream background
 * - Accessible form fields with validation
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    personalId: "",
    mobileNumber: "",
    email: "",
    billingAddress: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would normally call API
    setStep(4); // Success step
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Back Button */}
      <div className="container py-6">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="text-foreground hover:bg-secondary/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tillbaka
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-2xl">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step >= num
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground/50"
                    }`}
                  >
                    {step > num ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      num
                    )}
                  </div>
                  {num < 3 && (
                    <div
                      className={`h-1 w-8 transition-all duration-300 ${
                        step > num ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground/70 text-sm">
              Steg {step} av 3
            </p>
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Skapa ditt Elivra-konto
              </h1>
              <p className="text-foreground/70">
                Låt oss börja med din grundläggande information
              </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-semibold">
                      Förnamn
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Maria"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-semibold">
                      Efternamn
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Andersson"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personalId" className="text-foreground font-semibold">
                    Personnummer
                  </Label>
                  <Input
                    id="personalId"
                    name="personalId"
                    placeholder="YYYYMMDD-XXXX"
                    value={formData.personalId}
                    onChange={handleInputChange}
                    className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-foreground font-semibold">
                    Mobilnummer
                  </Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="+46 70 123 45 67"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
                >
                  Fortsätt
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Kontaktinformation
              </h1>
              <p className="text-foreground/70">
                Hur ska vi nå dig?
              </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
                    E-postadress
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="maria@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="billingAddress" className="text-foreground font-semibold">
                    Fakturaadress
                  </Label>
                  <Input
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Street address, city, postal code"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold h-11"
                  >
                    Tillbaka
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
                  >
                    Fortsätt
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Verification */}
          {step === 3 && (
            <div className="space-y-8">
              <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Verifiera din identitet
              </h1>
              <p className="text-foreground/70">
                För säkerhet måste vi verifiera vem du är
              </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-4">
                    Verifiera med BankID
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Använd ditt BankID för att säkert verifiera din identitet
                  </p>
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
                  >
                    Verifiera med BankID
                  </Button>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold h-11"
                  >
                    Tillbaka
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
              </div>

              <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Välkommen till Elivra!
              </h1>
              <p className="text-foreground/70 text-lg">
                Ditt konto har skapats framgångsrikt.
              </p>
              </div>

              <Button
                onClick={() => setLocation("/select-plan")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
              >
                Välj ditt abonnemang
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
