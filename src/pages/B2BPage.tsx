import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Users, Smartphone, Bell, TrendingUp, Heart, Shield, MessageSquare, Scale, Brain, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// ─── Hero Section ────────────────────────────────────────────────────────────
const HeroSection = () => (
  <div id="oversikt" className="relative min-h-[520px] flex items-center overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <img
        src="/assets/hero-bg-blue.jpeg"
        alt=""
        role="presentation"
        className="w-full h-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-white/30" />
    </div>
    <div className="container max-w-5xl mx-auto text-center relative z-10 py-20 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">
        Säker vård – dygnet runt
      </h1>
      <p className="text-xl md:text-2xl font-bold text-gray-900 mb-10 max-w-3xl mx-auto leading-snug">
        Patientsäker kommunikation och samarbete i hemmet och på boenden.{" "}
        Trygghetslarm, smart triagering och integritet i fokus.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <Link
          to="/contact"
          className="bg-[#0F3A52] hover:bg-[#0a2d40] text-white text-base px-8 py-4 font-semibold shadow-lg w-full sm:w-auto rounded-full transition-colors inline-flex items-center justify-center"
        >
          Boka rådgivning
        </Link>
        <Link
          to="/contact"
          className="border-2 border-[#0F3A52] text-[#0F3A52] hover:bg-[#0F3A52] hover:text-white text-base px-8 py-4 font-semibold bg-white w-full sm:w-auto rounded-full transition-colors inline-flex items-center justify-center"
        >
          Kontakta oss
        </Link>
      </div>
    </div>
  </div>
);

// ─── Översikt Section ────────────────────────────────────────────────────────
const OversiktSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="space-y-4 mb-10">
        {[
          "Tidigt fånga upp avvikande situationer i hemmet",
          "Ge brukaren en kognitiv kamrat som kan hjälpa till att minnas och förstå",
          "Minska missförstånd i vårdkontakter genom trepartssamtal och röststöd",
          "Skapa spårbar, säker och begriplig dokumentation – utan att invadera privatlivet",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="text-[#e8a020] font-bold text-xl mt-0.5">✓</span>
            <span className="text-gray-800 text-lg">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-lg font-bold text-gray-800 mt-10">
        Elivra är en helhetslösning som kombinerar diskreta sensorer, röststöd och säker analys för att ge trygghet i vardagen.
      </p>
    </div>
  </section>
);

// ─── Säkerhet Section (01–04) ─────────────────────────────────────────────────
const SakerhetSection = () => (
  <section id="sakerhet" className="py-16 md:py-24 bg-gray-50">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 01 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-extrabold text-[oklch(0.58_0.09_220)]">01</span>
            <div className="flex-1 h-1 rounded bg-[oklch(0.90_0.05_220)]" />
          </div>
          <p className="text-gray-800">
            En diskret enhet installeras i bostaden.<br />
            Den kan upptäcka fall, förstå tal och ge stöd i vardagen.
          </p>
        </div>
        {/* 02 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-extrabold text-[oklch(0.58_0.09_220)]">02</span>
            <span className="text-[oklch(0.58_0.09_220)] font-semibold text-lg">I samtalet</span>
            <div className="flex-1 h-1 rounded bg-[oklch(0.90_0.05_220)]" />
          </div>
          <p className="text-gray-800">
            Elivra stödjer kommunikationen mellan brukare, personal och anhöriga.<br />
            Systemet hjälper till att tydliggöra och sammanfatta viktiga delar.
          </p>
        </div>
        {/* 03 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-extrabold text-[oklch(0.58_0.09_220)]">03</span>
            <span className="text-[oklch(0.58_0.09_220)] font-semibold text-lg">Som beslutsstöd</span>
            <div className="flex-1 h-1 rounded bg-[oklch(0.90_0.05_220)]" />
          </div>
          <p className="text-gray-800">
            Vid avvikelser – exempelvis fall – informeras rätt person direkt. Färre falsklarm, tydligare prioritering.
          </p>
        </div>
        {/* 04 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-extrabold text-[oklch(0.58_0.09_220)]">04</span>
            <span className="text-[oklch(0.58_0.09_220)] font-semibold text-lg">Vid händelser</span>
            <div className="flex-1 h-1 rounded bg-[oklch(0.90_0.05_220)]" />
          </div>
          <p className="text-gray-800">
            Över tid kan förändringar i minne och språk uppmärksammas.<br />
            Används som stöd i planering – aldrig som medicinsk diagnos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ─── För vem är Elivra? ───────────────────────────────────────────────────────
const ForVemSection = () => {
  const cards = [
    {
      icon: Building2,
      title: "Kommunal äldreomsorg",
      desc: "För hemtjänst, hemsjukvård och särskilda boenden. Ökar säkerheten, minskar personalens belastning och ger anhöriga bättre insyn.",
    },
    {
      icon: Scale,
      title: "Privata vård- och omsorgsutförare",
      desc: "Synliggör kvaliteten i er omsorg och stärk ert erbjudande. Hög kvalitet, strukturerad uppföljning och starkt integritetsskydd i samma lösning.",
    },
    {
      icon: Brain,
      title: "Regioner & primärvård",
      desc: "Ger bättre underlag för vård av äldre med komplexa behov. Enklare vårdplanering, uppföljning och samverkan mellan professioner.",
    },
    {
      icon: Building2,
      title: "Bostadsbolag & trygghetsboenden",
      desc: "Inför en modern trygghetslösning utan omfattande ombyggnation. Perfekt för seniorboenden och trygghetskoncept.",
    },
    {
      icon: Users,
      title: "Anhöriga & närstående",
      desc: "Via anhörigportalen får familjen en tydligare bild av vardagen. Trygg uppföljning utan att kompromissa med brukarens integritet.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#EEF6FB]">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[oklch(0.58_0.09_220)] mb-12">
          För vem är Elivra?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
              <Icon className="w-8 h-8 text-[#FF7A45]" />
              <h3 className="font-bold text-gray-900 text-sm leading-snug">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Moduler ──────────────────────────────────────────────────────────────────
const ModulerSection = () => {
  const modules = [
    {
      icon: Target,
      title: "Sensor & lådplattform",
      desc: "Elivra-hem med lokala sensorer, AI och notifieringar. Grundplattformen för hemtjänst, hemsjukvård och boenden.",
    },
    {
      icon: Users,
      title: "Anhörigapp",
      desc: '"Elivra Friends" – en säker plats där anhöriga kan dela vardagsinformation, födelsedagar, bilder och resor som stärker brukarens minne och trygghet.',
    },
    {
      icon: Smartphone,
      title: "Kommunikationsmodul",
      desc: "Stöd för röstinteraktion, trepartssamtal, samtalssammanfattningar och direktkanaler mellan brukare, anhöriga och vårdpersonal.",
    },
    {
      icon: Bell,
      title: "Avvikelse & larmtriagering",
      desc: "Struktur för avvikelser, larmprioritering och uppföljning – integreras med befintliga rutiner.",
    },
    {
      icon: TrendingUp,
      title: "Analys & ECI",
      desc: "För verksamheter som vill följa kognitiva mönster över tid och få bättre beslutsunderlag.",
    },
    {
      icon: Heart,
      title: "Elivra Friends",
      desc: "En social plattform för certifierade användare som värnar om god ton och skapar en trygg, positiv digital miljö.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[oklch(0.58_0.09_220)] mb-4">
          Moduler
        </h2>
        <p className="text-center font-semibold text-gray-800 mb-12 max-w-xl mx-auto">
          Elivra består av flexibla moduler som kan kombineras efter behov.<br />
          Börja enkelt och bygg ut i takt med verksamheten.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <Icon className="w-8 h-8 text-[#FF7A45]" />
              <h3 className="font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Fördelar i korthet ───────────────────────────────────────────────────────
const FordelarSection = () => {
  const cards = [
    {
      icon: Shield,
      title: "Integritet först",
      items: [
        "All analys sker lokalt i hemmet.",
        "Ingen rådata lämnar bostaden utan godkända skäl — endast nödvändig textlogg sparas.",
        "Trygg teknik utan att kännas övervakande.",
      ],
    },
    {
      icon: Heart,
      title: "Stöd i vardagen – inte övervakning",
      items: [
        "Elivra fungerar som ett stöd för: brukaren, anhöriga, personal.",
        "Systemet hjälper människor – det kontrollerar dem inte.",
      ],
    },
    {
      icon: Users,
      title: "Minskad stress för personal",
      items: [
        "Färre falsklarm",
        "Tydligare larmorsaker",
        "Bättre avvikelserapporter",
        "Stöd i svåra samtal",
        "Resultat: mindre belastning för hemtjänst och hemsjukvård.",
      ],
    },
    {
      icon: MessageSquare,
      title: "Starkare röst för brukare och anhöriga",
      items: [
        "Trepartssamtal",
        "Automatiska samtalssammanfattningar",
        "Anhörigportal",
        "Den äldre och familjen får kontroll över sin egen information.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Skalbar och framtidssäker",
      items: [
        "Bygg ut efter behov: fler sensorer, fler enheter, djupare analys.",
        "Utan att kompromissa med säkerhet eller integritet.",
      ],
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#F5F9FC]">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[oklch(0.58_0.09_220)] mb-12">
          Fördelar i korthet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {cards.map(({ icon: Icon, title, items }) => (
            <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
              <Icon className="w-8 h-8 text-[#FF7A45]" />
              <h3 className="font-bold text-gray-900 text-sm leading-snug">{title}</h3>
              <ul className="text-gray-600 text-sm leading-relaxed space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center font-bold text-gray-800">
          Elivra skapar trygghet genom förståelse – inte övervakning.
        </p>
      </div>
    </section>
  );
};

// ─── Boka en genomgång (Contact Form) ────────────────────────────────────────
const KontaktSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-white">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[oklch(0.58_0.09_220)] mb-10">
          Boka en genomgång
        </h2>
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">För- och efternamn</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Namn"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.09_220)] bg-white"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="07x-xxx xx xx"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.09_220)] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.09_220)] bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Skriv här..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.09_220)] bg-white resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-[#0F3A52] hover:bg-[#0a2d40] text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Skicka <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Vi använder era uppgifter enbart för att hantera denna förfrågan.<br />
          Inga automatiska utskick. Ingen försäljning utan samtycke.
        </p>
      </div>
    </section>
  );
};

// ─── Om oss Section ───────────────────────────────────────────────────────────
const OmOssSection = () => (
  <section id="om-oss" className="py-16 md:py-24 bg-[#EEF6FB]">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.58_0.09_220)] mb-6">
        Om Elivra
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Elivra är ett svenskt teknikbolag med fokus på trygg och patientsäker vård i hemmet. Vi utvecklar lösningar som stärker kommunikationen mellan brukare, personal och anhöriga – med integritet och säkerhet i centrum.
      </p>
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function B2BPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OversiktSection />
        <SakerhetSection />
        <ForVemSection />
        <ModulerSection />
        <FordelarSection />
        <OmOssSection />
        <KontaktSection />
      </main>
      <Footer />
    </div>
  );
}
