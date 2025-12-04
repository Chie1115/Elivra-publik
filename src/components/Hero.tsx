import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegistrationForm from "./RegistrationForm";

export default function Hero() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        id="hem"
        className="relative min-h-[509px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/samla_slakten.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40" />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Elivra — a companion, a support, a link to loved ones
            </h2>
            <p className="text-lg mb-10 opacity-95">
              For seniors, families and caregivers who want safer, more connected daily life.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Button
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-6 text-base font-semibold"
              >
                Create account as responsible party (System Owner)
              </Button>
              <Button
                onClick={() => {
                  // Placeholder for actual login logic
                  console.log("Log in button clicked");
                  // For now, we can open the registration form as a placeholder for a login form
                  setIsRegistrationOpen(true);
                }}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-7 py-6 text-base font-semibold"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </section>
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </>
  );
}
