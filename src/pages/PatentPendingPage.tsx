import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function PatentPendingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
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
            Patent Pending
          </h1>
        </div>
      </header>

      {/* コンテンツ */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Elivra bygger på en egenutvecklad, patenterad metod för integritetsbevarande rids- och
              beståndanalys.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Teknologin innebär revolutionerande tillstrukturerade trafikter – utan lagrarg av idéala
              metoder – en personlig integritet.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Utformad för säkra miljöer möjliggör Elivra adapter och medvetandebaserad analys för kognitiv
              stöd och sällar kommunikation, med full fokus på dataintegritet och förtroendet.
            </p>
            
            <p className="text-gray-700 leading-relaxed font-semibold">
              Patentets övervakning är inte övervakning.
            </p>
            
            <p className="text-gray-700 leading-relaxed font-semibold">
              Det är säker, permanent intelligens.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
