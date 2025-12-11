import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#FFF5F3]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.58_0.09_220)]">
          Vad våra kunder säger
        </h2>
        <p className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Läs vittnesmål från familjer som har upplevt Elivra-skillnaden. Upptäck hur vår omsorgsfulla vård och dedikerade support har haft en positiv inverkan på deras nära och käras liv.
        </p>

        <div className="mb-12">
          <img
            src="/assets/testimonial_1.jpg"
            alt="Nöjda kunder"
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col">
            <Quote className="text-primary h-10 w-10 mb-4 mx-auto" />
            <p className="text-base mb-6 leading-relaxed text-center grow">
              "Elivra har gett min mamma sällskap när hon känner sig ensam. Samtalen är lugna och varma, och hon känner sig tryggare än på länge."
            </p>
            <p className="font-semibold text-foreground text-center mt-auto">Anna S.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col">
            <Quote className="text-primary h-10 w-10 mb-4 mx-auto" />
            <p className="text-base mb-6 leading-relaxed text-center grow">
              "Elivras tjänst är mycket pålitlig. Tack vare de dagliga samtalen och påminnelserna har min pappas vardag blivit betydligt stabilare. Som familj känner vi en mycket större trygghet – vi är väldigt nöjda"
            </p>
            <p className="font-semibold text-foreground text-center mt-auto">Erik L.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col">
            <Quote className="text-primary h-10 w-10 mb-4 mx-auto" />
            <p className="text-base mb-6 leading-relaxed text-center grow">
              "Jag var först osäker på att prata med en AI, men Elivra är så naturlig och lätt att använda. Den ger vänliga påminnelser och stöd när jag behöver det. Idag känner jag mig mer självständig och trygg i min vardag."
            </p>
            <p className="font-semibold text-foreground text-center mt-auto">Margareta K.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
