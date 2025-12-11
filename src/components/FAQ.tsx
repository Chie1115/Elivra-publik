import { useState } from "react";
import { ChevronDown } from "lucide-react"; // lucide-react の矢印アイコン

const faqs = [
  {
    question: "Fungerar det utan smartphone?",
    answer:
      "Ja, det behövs endast wifi och en högtalare kan kopplas in via enheten.",
  },
  {
    question: "Kan flera anhöriga vara med?",
    answer: "Ja, alla kan ladda ner appen.",
  },
  {
    question: "Hur mycket är det?",
    answer: "Månadsvis, vi har inga bindningstider.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="trygghet"
      className="py-20 bg-linear-to-b from-primary/90 to-primary/70"
    >
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          FAQ
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center text-white text-xl font-semibold transition-colors hover:bg-white/20"
                onClick={() => toggleIndex(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-white/90 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
