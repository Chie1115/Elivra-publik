import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function VillkorPage() {
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
            Våra Villkor
          </h1>
        </div>
      </header>

      {/* コンテンツ */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Allmänna villkor för Elivra
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dessa allmänna villkor gäller för användning av Elivras tjänster.
              Genom att använda våra tjänster accepterar du dessa villkor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              1. Tjänstebeskrivning
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Elivra är en digital plattform som hjälper användare att dokumentera och dela sina
              livsberättelser, minnen och erfarenheter. Tjänsten inkluderar verktyg för att skapa,
              organisera och dela personligt innehåll i form av text, bilder och ljud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              2. Konto och registrering
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              För att använda Elivra måste du:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Vara minst 18 år gammal eller ha vårdnadshavares samtycke</li>
              <li>Tillhandahålla korrekta och fullständiga uppgifter vid registrering</li>
              <li>Hålla dina inloggningsuppgifter säkra och konfidentiella</li>
              <li>Meddela oss omedelbart om obehörig användning av ditt konto</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Du är ansvarig för all aktivitet som sker under ditt konto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              3. Användarbeteende och innehåll
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Du förbinder dig att inte:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Ladda upp olagligt, skadligt eller kränkande innehåll</li>
              <li>Bryta mot andras upphovsrätt eller immateriella rättigheter</li>
              <li>Använda tjänsten för kommersiella ändamål utan vårt godkännande</li>
              <li>Försöka få obehörig åtkomst till våra system</li>
              <li>Störa eller avbryta tjänstens funktion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vi förbehåller oss rätten att ta bort innehåll som bryter mot dessa villkor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              4. Immateriella rättigheter
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Du behåller alla rättigheter till det innehåll du skapar och laddar upp till Elivra.
              Genom att använda våra tjänster ger du oss en begränsad licens att lagra, behandla
              och visa ditt innehåll i syfte att tillhandahålla tjänsten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Elivras varumärken, logotyper och tjänstens design ägs av Elivra AB och får inte
              användas utan vårt skriftliga godkännande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              5. Betalning och prenumeration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vissa funktioner i Elivra kräver betalning. Betalningsvillkor:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Priser anges i svenska kronor (SEK) inklusive moms</li>
              <li>Prenumerationer förnyas automatiskt om inte uppsägning görs</li>
              <li>Uppsägning kan göras när som helst via ditt konto</li>
              <li>Återbetalning sker enligt svensk konsumentlagstiftning</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              6. Ansvarsbegränsning
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Elivra tillhandahålls "i befintligt skick". Vi ansvarar inte för:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Avbrott i tjänsten på grund av underhåll eller tekniska problem</li>
              <li>Förlust av data till följd av tekniska fel (vi rekommenderar regelbundna säkerhetskopior)</li>
              <li>Indirekt skada eller förlorad vinst</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vi gör vårt bästa för att säkerställa tjänstens tillgänglighet och säkerhet, men kan
              inte garantera att den alltid kommer att vara felfri eller tillgänglig.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              7. Uppsägning
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Du kan när som helst avsluta ditt konto via inställningarna i tjänsten. Vi förbehåller
              oss rätten att suspendera eller avsluta konton som bryter mot dessa villkor. Vid
              uppsägning raderas dina uppgifter enligt vår integritetspolicy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              8. Ändringar av villkoren
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan komma att uppdatera dessa villkor från tid till annan. Vid väsentliga ändringar
              kommer vi att meddela dig via e-post eller i tjänsten. Fortsatt användning efter
              ändringar innebär att du accepterar de nya villkoren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              9. Tillämplig lag och tvister
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dessa villkor regleras av svensk lag. Eventuella tvister ska i första hand lösas genom
              dialog mellan parterna. Om överenskommelse inte kan nås hänskjuts tvisten till svensk
              domstol.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Kontakta oss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Om du har frågor om dessa villkor, kontakta oss:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Elivra AB</strong><br />
              Teknikringen 8D<br />
              58330 Linköping, Sweden<br />
              E-post: info@elivra.se
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 italic">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
