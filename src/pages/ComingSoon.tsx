import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // 画面に表示するメッセージ
  const [isError, setIsError] = useState(false); // エラーメッセージ用
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Ange din e-postadress.");
      setIsError(true);
      return;
    }

    setIsSubmitting(true);
    setMessage("");
    setIsError(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage("Tack! Vi meddelar dig när vi är redo.");
      setIsError(false);
      setEmail("");
    } catch (error) {
      setMessage("Registreringen misslyckades. Försök igen.");
      setIsError(true);
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
              onClick={() => navigate("/")} 
              className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            >
              Elivra
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-lg p-4 flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white text-center mb-6 whitespace-normal md:whitespace-nowrap">
            Kommer Snart
          </h1>

          <p className="text-white text-center text-lg md:text-xl mb-6 whitespace-normal md:whitespace-nowrap">
          Ange din e-postadress så kontaktar vi dig när tjänsen är redo。
          </p>


          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-sm sm:max-w-none mb-4">
            <Input
              id="email"
              type="email"
              placeholder="Ange din e-postadress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              className="w-full sm:w-64 py-6 text-base"
            />
            <Button 
              type="submit" 
              className="bg-primary hover:bg-[#FF8844] text-white font-semibold py-6 px-8 text-base" 
            >
              {isSubmitting ? "Skickar..." : "Meddela mig"}
            </Button>
          </form>

          {/* メッセージ表示部分 */}
          {message && (
            <p className={`text-center ${isError ? "text-red-500" : "text-green-400"} text-lg`}>
              {message}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
