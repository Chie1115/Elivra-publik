import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();

  // メッセージ管理用
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage("Ange din e-postadress.");
      setMessageType("error");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setMessage("Tack! Vi meddelar dig när vi är redo.");
      setMessageType("success");
      setEmail("");
    } catch (error) {
      setMessage("Registreringen misslyckades. Försök igen.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/coming-soon-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> 

      <header className="relative z-20">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => setLocation("/")} 
              className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            >
              Elivra
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-lg p-4 flex flex-col items-center">
          
<<<<<<< HEAD
          <h1 className="text-7xl md:text-8xl font-bold text-white text-center mb-10 whitespace-nowrap">
            Kommer Snart
          </h1>

          <p className="text-white text-center text-lg md:text-xl mb-8 whitespace-normal md:whitespace-nowrap">
            Ange din e-postadress så kontaktar vi dig när tjänsten är redo.
          </p>

=======
          {/* コマー・スナートのテキスト */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white text-center mb-10 whitespace-nowrap">
          Kommer Snart
          </h1>


          <p className="text-white text-center text-lg md:text-xl mb-8 whitespace-normal md:whitespace-nowrap">
          Ange din e-postadress så kontaktar vi dig när tjänsten är redo.
          </p>



>>>>>>> 914a3fd (change comming soon page)
          {/* フォーム */}
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-row gap-3 justify-center items-center w-full max-w-lg"
          >
            <Input
              id="email"
              type="email"
              placeholder="Ange din e-postadress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
<<<<<<< HEAD
              className="w-full sm:w-64 py-6 text-base"
            />
            <Button 
              type="submit" 
<<<<<<< HEAD
              className="bg-primary hover:bg-[#FF8844] text-white font-semibold py-6 px-8 text-base"
=======
              className="bg-primary hover:bg-[#FF8844] text-white font-semibold py-6 px-8 text-base" // Figmaのデザインに合わせて色と高さを調整
              disabled={isSubmitting}
>>>>>>> 0f712d8 (change button color)
=======
              className="w-full sm:w-64 py-6 text-base" 
            />
            <Button 
              type="submit" 
              className="bg-primary hover:bg-[#FF8844] text-white font-semibold py-6 px-8 text-base" 
>>>>>>> 914a3fd (change comming soon page)
            >
              {isSubmitting ? "Skickar..." : "Meddela mig"}
            </Button>
          </form>

          {/* ▼ メッセージ表示部分 ▼ */}
          {message && (
            <p
              className={`mt-4 text-center text-lg ${
                messageType === "success"
                  ? "text-green-300"
                  : "text-red-300"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
