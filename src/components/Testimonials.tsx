import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-semibold text-primary text-center mb-6">
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
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <Quote className="text-primary h-10 w-10 mb-4" />
            <p className="text-base mb-6 leading-relaxed">
              "Elivra has been a lifesaver for our family. The caregiver is kind, patient, and truly cares about my mother's well-being. I highly recommend their services."
            </p>
            <p className="font-semibold text-foreground">Anna S.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <Quote className="text-primary h-10 w-10 mb-4" />
            <p className="text-base mb-6 leading-relaxed">
              "The team at Elivra is professional, reliable, and compassionate. They go above and beyond to ensure my father receives the best possible care. We are so grateful for their support."
            </p>
            <p className="font-semibold text-foreground">Erik L.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <Quote className="text-primary h-10 w-10 mb-4" />
            <p className="text-base mb-6 leading-relaxed">
              "I was hesitant to seek help at first, but Elivra made the process easy and comfortable. The caregiver is friendly, respectful, and always puts my needs first. I feel much more independent and confident with their support."
            </p>
            <p className="font-semibold text-foreground">Margareta K.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
