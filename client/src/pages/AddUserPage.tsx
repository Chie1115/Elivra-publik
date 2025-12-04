/**
 * Add User Page - Elivra
 * Design: Warm Humanist
 * - Form to add primary client (aged person)
 * - Warm teal accents, cream background
 * - Clear form hierarchy with radio buttons for client type
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function AddUserPage() {
  const [, setLocation] = useLocation();
  const [clientType, setClientType] = useState("mobile");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
  });
  const [verification, setVerification] = useState("owner");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
              Lägg till användare (brukare)
            </h1>
            <p className="text-lg text-foreground/70">
              Användaren är den person som Elivra ska stötta
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Type */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground">
                Val av klienttyp
              </Label>
              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 rounded-lg border-2 border-border/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <input
                    type="radio"
                    name="clientType"
                    value="mobile"
                    checked={clientType === "mobile"}
                    onChange={(e) => setClientType(e.target.value)}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="font-semibold text-foreground">
                    Mobilklient (iPhone/Android)
                  </span>
                </label>

                <label className="flex items-center gap-4 p-4 rounded-lg border-2 border-border/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <input
                    type="radio"
                    name="clientType"
                    value="home"
                    checked={clientType === "home"}
                    onChange={(e) => setClientType(e.target.value)}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="font-semibold text-foreground">
                    Elivra-enhet (hemmasystem)
                  </span>
                </label>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/30" />

            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-semibold">
                      Förnamn
                    </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Elsa"
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
              <Label htmlFor="address" className="text-foreground font-semibold">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="Street address, city, postal code"
                value={formData.address}
                onChange={handleInputChange}
                className="h-11 rounded-lg border-border/50 bg-white focus:ring-primary"
                required
              />
            </div>

            {/* Divider */}
            <div className="border-t border-border/30" />

            {/* Verification */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground">
                Vem ska verifiera användaren?
              </Label>
              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 rounded-lg border-2 border-border/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <input
                    type="radio"
                    name="verification"
                    value="owner"
                    checked={verification === "owner"}
                    onChange={(e) => setVerification(e.target.value)}
                    className="w-5 h-5 accent-primary"
                  />                  <span className="font-semibold text-foreground">
                    Användaren verifierar via eget BankID
                  </span>
                </label>

                <label className="flex items-center gap-4 p-4 rounded-lg border-2 border-border/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <input
                    type="radio"
                    name="verification"
                    value="user"
                    checked={verification === "user"}
                    onChange={(e) => setVerification(e.target.value)}
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="font-semibold text-foreground">
                    User verifies themselves via their own BankID
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-11 transition-all duration-300 hover:shadow-lg"
            >
              Skapa användare
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
