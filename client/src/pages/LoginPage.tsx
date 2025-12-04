/**
 * Login Page - Elivra
 * Design: Warm Humanist
 * - Centered form layout with gentle styling
 * - Warm teal accents, cream background
 * - Clear form hierarchy and validation
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would normally call API
    setLocation("/dashboard");
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
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Välkommen tillbaka
            </h1>
            <p className="text-foreground/70">
              Logga in på ditt Elivra-konto
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                E-postadress
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-semibold">
                Lösenord
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
            >
              Logga in
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-foreground/60">
              eller
            </span>
            </div>
          </div>

          {/* BankID Button */}
          <Button
            variant="outline"
            className="w-full border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold h-11 transition-all duration-300"
          >
            Verifiera med BankID
          </Button>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-foreground/70">
              Har du inget konto?{" "}
              <button
                onClick={() => setLocation("/register")}
                className="text-primary font-semibold hover:underline"
              >
                Skapa ett
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
