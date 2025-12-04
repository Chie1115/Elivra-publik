/**
 * SA Dashboard - Elivra
 * Design: Warm Humanist
 * - System Owner dashboard with main action buttons
 * - Warm teal accents, cream background
 * - Clear card-based layout for actions and users
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import {
  Plus,
  BarChart3,
  Link2,
  LogOut,
  ChevronRight,
  User,
  AlertCircle,
} from "lucide-react";

export default function DashboardPage() {
  const [, setLocation] = useLocation();
  const [users, setUsers] = useState([
    { id: 1, name: "Elsa", status: "active", type: "primary" },
    { id: 2, name: "Sam", status: "invited", type: "primary" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Elivra</h1>
          </div>
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="text-foreground hover:bg-secondary/50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logga ut
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Välkommen, Maria
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Din roll: Systemansvarig
          </p>
        </div>

        {/* No Users State */}
        {users.length === 0 && (
          <div className="bg-secondary/30 rounded-2xl p-12 text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Du har ännu inga användare registrerade
            </h3>
            <p className="text-foreground/70 mb-8">
              Börja med att lägga till en primär användare (den person Elivra ska stötta)
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={() => setLocation("/add-user")}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-left hover:scale-105 transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Lägg till användare
            </h3>
            <p className="text-foreground/70">
              Lägg till den person Elivra ska stötta
            </p>
          </button>

          <button
            onClick={() => setLocation("/add-relative")}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-left hover:scale-105 transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Plus className="w-6 h-6 text-accent" />
              </div>
              <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Lägg till anhörig
            </h3>
            <p className="text-foreground/70">
              Bjud in familjemedlemmar att ansluta
            </p>
          </button>

          <button
            onClick={() => setLocation("/billing")}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-left hover:scale-105 transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Statistik & fakturering
            </h3>
            <p className="text-foreground/70">
              Hantera ditt abonnemang och visa användning
            </p>
          </button>

          <button
            onClick={() => setLocation("/relationships")}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-left hover:scale-105 transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Link2 className="w-6 h-6 text-accent" />
              </div>
              <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Relationer & medgivanden
            </h3>
            <p className="text-foreground/70">
              Hantera åtkomst och godkännanden
            </p>
          </button>
        </div>

        {/* Users Section */}
        {users.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Användare</h3>
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{user.name}</p>
                      <p className="text-sm text-foreground/60 capitalize">
                        {user.type === "primary" ? "Primär" : user.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {user.status === "invited" && (
                      <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        <AlertCircle className="w-4 h-4" />
                        Väntar på BankID
                      </div>
                    )}
                    {user.status === "active" && (
                      <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        Aktiv
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
