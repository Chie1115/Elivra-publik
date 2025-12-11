import { Button } from "@/components/ui/button";

const ElivraFriendsSection = () => (
  <section id="elivra-friends" className="py-20 bg-gray-50">
    <div className="container">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.58_0.09_220)]">
        Elivra Friends – Din trygga sociala plattform
      </h2>
      <div className="max-w-3xl mx-auto text-center text-lg text-gray-600 space-y-6">
        <p>
          Elivra Friends är en exklusiv social plattform skapad för dig och dina närmaste. Här kan certifierade användare dela minnen, bilder och vardagsinformation i en trygg och positiv digital miljö. Vi värnar om god ton och skapar en plats där du kan känna dig helt säker.
        </p>
        <ul className="text-left list-disc list-outside space-y-2 mx-auto max-w-md pl-8">
          <li>Certifierade användare för en trygg miljö</li>
          <li>Dela bilder och minnen med familjen</li>
          <li>Skapa en positiv och god ton i alla interaktioner</li>
          <li>Helt integrerat med Min Livsbok</li>
        </ul>
      </div>
    </div>
  </section>
);

export default function MinLivsbok() {
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
      {/* Om Min Livsbok Section */}
      <section id="min-livsbok" className="py-20 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/assets/testimonial_2.jpg"
                alt="Par som tittar på Min Livsbok"
                className=" shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.58_0.09_220)]">
                Om Min Livsbok
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Samla minnen, bilder och berättelser – stora som små.
              </p>
              <p className="mb-4 text-base leading-relaxed">
                Elivra hjälper dig att lägga allt på rätt plats: barndomen, ungdomen, arbetslivet, familjen och alla fina ögonblick däremellan.
              </p>
              <p className="mb-6 text-base leading-relaxed">
                Dela tryggt med familjen – eller behåll för dig själv.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-3 leading-none">•</span>
                  <span>Spela in röster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-3 leading-none">•</span>
                  <span>Lägg till bilder och ljud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-3 leading-none">•</span>
                  <span>Automatisk tidslinje</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-3 leading-none">•</span>
                  <span>Dela säkert med dina närmaste</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* Min Livsbok - Din unika livsberättelse Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.58_0.09_220)]">
            Min Livsbok – din historia, bevarad för framtiden
          </h2>
          <p className="text-base text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            Alla människor har en livsberättelse värd att sparas.
            Med Elivra samlas dina minnen på ett ställe – så att barn och barnbarn kan ta del av dem även i framtiden.
          </p>
          <div className="mb-6">
            <img
              src="/assets/images/min_livsbok_memory.jpg"
              alt="En person som håller i en inramad bild"
              className="rounded-xl shadow-lg w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Hur skapas den? Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.58_0.09_220)]">
            Hur skapas den?
          </h2>
          <p className="text-base text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            Med några enkla steg kan du börna att skapa din livbok. Allt du behöver är att prata med Elivra, och hon hjälper dig att organisera dina minnen i tidslinjen. Du kan även lägga till foton, ljud och andra viktiga detaljer som gör din berättelse komplett. Sedan kan du dela den med de du älskar, eller behålla den privat – valet är ditt. Här är vad som ingår:
          </p>
          <ul className="max-w-2xl mx-auto space-y-3 text-left">
            <li className="flex items-start">
              <span className="text-primary text-2xl mr-3 leading-none">•</span>
              <span>Samtal med Elivra för att skapa minnen</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary text-2xl mr-3 leading-none">•</span>
              <span>Automatisk organisering i teman och tidslinjer</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary text-2xl mr-3 leading-none">•</span>
              <span>Lägg till foton, ljud och anteckningar</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary text-2xl mr-3 leading-none">•</span>
              <span>Dela säkert med familjen eller behåll privat</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary text-2xl mr-3 leading-none">•</span>
              <span>Tillgänglig när som helst, var som helst</span>
            </li>
          </ul>
        </div>
	      </section>

	      {/* Elivra Friends Section */}
	      <ElivraFriendsSection />
	    </>
	  );
	}
