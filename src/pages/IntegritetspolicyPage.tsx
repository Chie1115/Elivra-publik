import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegritetspolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* ヘッダー */}
      <header className="bg-[#7FCBC4] py-12 relative">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tillbaka
        </Button>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Integritetspolicy
          </h1>
        </div>
      </header>

      {/* コンテンツ */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Datalagring och överföring
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All persondata lagras och behandlas på servrar inom Sverige. Ingen persondata överförs till tredje land utanför EU/EES.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Elivra använder egna servrar för all databehandling och är inte beroende av externa molntjänster för kärnfunktionalitet.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
