import { Button } from "@/components/ui/button";
import { Gift, Heart } from "lucide-react";
import { toast } from "sonner";

export default function Pricing() {
  const handleClick = () => {
    toast.info("Feature coming soon");
  };

  return (
    {/* Pricing section temporarily commented out as requested by user.
    <section id="priser" className="py-20 bg-[#FAF7F2]">
      <div className="container">
        <h2 className="text-4xl font-semibold text-primary text-center mb-12">
          Paket & Priser
        </h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Bas Plan */}
          <div className="bg-white border-2 border-primary rounded-xl p-10 text-center hover:shadow-lg transition-shadow flex flex-col">
            <h3 className="text-3xl font-semibold text-primary mb-5">Bas</h3>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">99 kr/mån</span>
            </div>
            <ul className="mb-8 space-y-3 text-left grow">
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Samtal + minnesträning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Livsbok: skapa & spara (text)</span>
              </li>
            </ul>
            <Button
              onClick={handleClick}
              variant="outline"
              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Välj Bas
            </Button>
          </div>

          {/* Familj Plan (Featured) */}
          <div className="bg-white border-2 border-primary rounded-xl p-10 text-center relative shadow-lg flex flex-col">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
              Mest populär
            </span>
            <h3 className="text-3xl font-semibold text-primary mb-5">Familj</h3>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">149kr/mån</span>
            </div>
            <ul className="mb-8 space-y-3 text-left grow">
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Allt i Bas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Meddelanden + veckosammanfattning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Livsbok: röst + delning</span>
              </li>
            </ul>
            <Button
              onClick={handleClick}
              className="w-full bg-secondary text-white hover:bg-secondary/90"
            >
              Välj familj
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white border-2 border-primary rounded-xl p-10 text-center hover:shadow-lg transition-shadow flex flex-col">
            <h3 className="text-3xl font-semibold text-primary mb-5">Premium</h3>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">199 kr/mån</span>
            </div>
            <ul className="mb-8 space-y-3 text-left flex-grow">
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Allt i Familj</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Extra kognitiva övningar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-2">•</span>
                <span className="text-base">Livsbok: bild/ljud + teman & export</span>
              </li>
            </ul>
            <Button
              onClick={handleClick}
              variant="outline"
              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Välj premium
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-16">
          <div className="max-w-4xl mx-auto"> 
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left py-4 px-6 font-semibold">Funktioner</th>
                <th className="text-center py-4 px-6 font-semibold">Bas</th>
                <th className="text-center py-4 px-6 font-semibold">Familj</th>
                <th className="text-center py-4 px-6 font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4 px-6">AI-samtal dygnet runt</td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-4 px-6">Minnesträning</td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6">Min Livsbok (fri åtkomst)</td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-4 px-6">Anhörigapp</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6">Dela minnen och bilder med familj</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-4 px-6">Min Livsbok (Delning med familj)</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6">Hälsoövervakning</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-4 px-6">Notifikationer vid avvikelser</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6">Prioriterad support</td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6"></td>
                <td className="text-center py-4 px-6">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>


{/* CTA */}
<div className="text-center mb-10">
  <p className="text-lg font-semibold mb-2">
    <strong>Köp värdebevis – ge trygghet och minnen</strong>
  </p>
  <div className="mb-1">
    <p>3 månader: 499 kr</p>
    <p>6 månader: 899 kr</p>
    <p>12 månader: 1599 kr</p>
  </div>
</div>


        <div className="flex flex-wrap gap-5 justify-center">
          <Button
            onClick={handleClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-7 py-6 text-base"
          >
            <Gift className="h-5 w-5" />
            Köp värdebevis
          </Button>
          <Button
            onClick={handleClick}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center gap-2 px-7 py-6 text-base"
          >
            <Heart className="h-5 w-5" />
            Prova gratis i 14 dagar
          </Button>
        </div>
      </div>
    </section>
    */}`],path:
  );
}