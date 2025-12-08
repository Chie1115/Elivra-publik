import { useNavigate } from "react-router-dom";

export default function DesignedForPeace() {
  const navigate = useNavigate();

  return (
    <section id="utformad-for-sinnesfrid" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Utformad för sinnesfrid
          </h2>
          <p className="text-lg text-gray-text max-w-3xl mx-auto">
            Elivra förbinder äldre, familjer och vårdgivare med tydlig, respektfull kommunikation och betrodda relationer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* För äldre */}
          <div className="bg-pink-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              För äldre
            </h3>
            <p className="text-base text-gray-text leading-relaxed">
              Enkelt, intuitivt gränssnitt utformat med tillgänglighet i åtanke
            </p>
          </div>

          {/* För familjer */}
          <div className="bg-pink-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              För familjer
            </h3>
            <p className="text-base text-gray-text leading-relaxed">
              Stanna informerad och ansluten med dina nära och kära på ett säkert sätt
            </p>
          </div>

          {/* För vårdgivare */}
          <div className="bg-pink-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              För vårdgivare
            </h3>
            <p className="text-base text-gray-text leading-relaxed">
              Hantera värdsamordning med tydlig, organiserad information
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Redo att komma igång?
          </h3>
          <p className="text-base text-gray-text mb-8">
            Skapa ditt Elivra-konto idag och börja bygga säkrare, mer anslutna relationer.
          </p>
          <button 
            onClick={() => navigate("/coming-soon")} // <--- 遷移先に変更
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Skapa konto
          </button>
        </div>
      </div>
    </section>
  );
}
