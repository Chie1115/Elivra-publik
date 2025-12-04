/**
 * Add Relative Page - Elivra
 * Design: Warm Humanist
 * - Form to add family members
 * - Warm teal accents, cream background
 * - Access level selection with clear descriptions
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function AddRelativePage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    relationship: "daughter",
    mobileNumber: "",
    email: "",
  });
  const [accessLevel, setAccessLevel] = useState("basic");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would normally call API
    setLocation("/dashboard");
  };

  const accessLevels = [
    {
      value: "basic",
      label: "Basic",
      description: "View basic information and receive notifications",
    },
    {
      value: "extended",
      label: "Extended",
      description: "Access to messages, calendar, and activity logs",
    },
    {
      value: "full",
      label: "Full",
      description: "Complete access (requires BankID verification for each request)",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Back Button */}
      <div className="container py-6">
        <Button
          variant="ghost"
          onClick={() => setLocation("/dashboard")}
          className="text-foreground hover:bg-secondary/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tillbaka till instrumentpanel
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Lägg till anhörig
            </h1>
            <p className="text-lg text-foreground/70">
              Bjud in en familjemedlem att ansluta
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
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

            {/* Relationship */}
            <div className="space-y-2">
              <Label htmlFor="relationship" className="text-foreground font-semibold">
                Relation
              </Label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                className="w-full h-11 rounded-lg border border-border/50 bg-white focus:ring-primary px-4 font-medium text-foreground"
              >
                <option value="daughter">Dotter</option>
                <option value="son">Son</option>
                <option value="spouse">Make/Maka</option>
                <option value="sibling">Syskon</option>
                <option value="grandchild">Barnbarn</option>
                <option value="caregiver">Vårdgivare</option>
                <option value="other">Annat</option>
              </select>
            </div>

            {/* Contact Information */}
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

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                E-post
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

            {/* Divider */}
            <div className="border-t border-border/30" />

            {/* Access Level */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground">
                Åtkomstnivå
              </Label>
              <div className="space-y-3">
                {accessLevels.map((level) => (
                  <label
                    key={level.value}
                    className="flex items-start gap-4 p-4 rounded-lg border-2 border-border/30 cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="accessLevel"
                      value={level.value}
                      checked={accessLevel === level.value}
                      onChange={(e) => setAccessLevel(e.target.value)}
                      className="w-5 h-5 accent-primary mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {level.value === "basic" ? "Basåtkomst" : level.value === "extended" ? "Utökad åtkomst" : "Full åtkomst"}
                      </p>
                      <p className="text-sm text-foreground/70">
                        {level.value === "basic" ? "Se grundläggande information och ta emot aviseringar" : level.value === "extended" ? "Åtkomst till meddelanden, kalender och aktivitetsloggar" : "Fullständig åtkomst (kräver BankID-verifiering för varje begäran)"}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
            >
              Skicka medgivandeförfrågan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
