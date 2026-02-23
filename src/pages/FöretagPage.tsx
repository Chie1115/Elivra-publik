import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  UserCheck,
  Target,
  ShieldCheck,
  Activity,
  PhoneOff,
  Plug,
  Headphones,
  Calculator,
  Building2,
  Landmark,
  Lock,
  Phone,
  Send,
} from "lucide-react";

// ─── Hero ────────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative min-h-[520px] flex items-center overflow-hidden">
    {/* Background: hero-bg-green (teal/green wave) */}
    <div className="absolute inset-0 z-0">
      <img
        src="/assets/hero-bg-green.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/30" />
    </div>
    <div className="relative z-10 container max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
        Ett enda samtal kan kosta<br />miljoner.
      </h1>
      <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        AI-genererade röster används redan i riktade företagsattacker.
      </p>
      <p className="text-lg font-bold text-[#1a5fa8] mb-1">
        Enterprise Voice Firewall
      </p>
      <p className="text-base text-gray-700 mb-10">
        Fungerar med er befintliga växel – utan att påverka samtalen.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/contact">
          <button className="bg-[#0d3b6e] hover:bg-[#0a2d55] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">
            Boka teknisk genomgång
          </button>
        </Link>
        <Link to="/contact">
          <button className="border-2 border-[#0d3b6e] text-[#0d3b6e] hover:bg-[#0d3b6e] hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors bg-white/60">
            Kontakta oss
          </button>
        </Link>
      </div>
    </div>
  </section>
);

// ─── Röstbaserade attacker ────────────────────────────────────────────────────
const AttackerSection = () => (
  <section className="py-16 bg-white">
    <div className="container max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a5fa8] mb-6">
        Röstbaserade attacker ökar snabbt
      </h2>
      <p className="text-gray-700 mb-2">
        En ekonomiansvarig får ett samtal från sin VD.
      </p>
      <p className="text-gray-700 mb-2">
        Situationen är brådskande. En betalning måste genomföras direkt.
      </p>
      <p className="text-gray-700 mb-8">
        Rösten stämmer — men är syntetisk.
      </p>
      <p className="font-semibold text-gray-800 mb-8">
        Organisationer utsätts idag för:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: AlertTriangle, label: "VD-bedrägerier" },
          { icon: UserCheck, label: "Bedrägerförsök med AI-röster" },
          { icon: Target, label: "Riktade attacker mot ekonomi och support" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="border border-[#1a5fa8] rounded-2xl p-8 flex flex-col items-center gap-4"
          >
            <Icon className="w-10 h-10 text-[#1a5fa8]" />
            <p className="font-semibold text-gray-800 text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Säkerhetslager ───────────────────────────────────────────────────────────
const SakerhetslagerSection = () => (
  <section className="py-16 bg-[#eef4fb]">
    <div className="container max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b6e] mb-3">
        Ett säkerhetslager för affärskritiska samtal
      </h2>
      <p className="font-semibold text-gray-700 mb-10">
        Elivra analyserar rösttrafik i realtid utan att störa kommunikationen.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {[
          { icon: ShieldCheck, label: "Upptäcker syntetiska röster och deepfakes" },
          { icon: Activity, label: "Identifierar manipulation och avvikande beteenden" },
          { icon: PhoneOff, label: "Stoppar automatiserade samtal" },
          { icon: Plug, label: "Full kompatibilitet med befintlig telefoni" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="border border-[#1a5fa8] rounded-2xl p-6 flex flex-col items-center gap-4 bg-white"
          >
            <Icon className="w-8 h-8 text-[#1a5fa8]" />
            <p className="text-sm text-gray-700 text-center">{label}</p>
          </div>
        ))}
      </div>
      <p className="font-bold text-gray-800">
        Ni behåller er infrastruktur. Vi tillför säkerhet.
      </p>
    </div>
  </section>
);

// ─── Hur det fungerar ─────────────────────────────────────────────────────────
const HurDetFungerarSection = () => (
  <section className="py-16 bg-white">
    <div className="container max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b6e] mb-3">
        Hur det fungerar
      </h2>
      <p className="font-semibold text-gray-700 mb-12">
        Elivra analyserar rösttrafik utanför samtalsströmmen.
      </p>

      {/* Flow diagram */}
      <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <Phone className="w-12 h-12 text-[#0d3b6e]" />
          <span className="text-sm font-medium text-gray-700">Samtal</span>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#1a5fa8] min-w-[40px] max-w-[80px]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-[#0d3b6e] rounded-full flex items-center justify-center">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm font-bold text-[#0d3b6e]">Elivra Analys</span>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#1a5fa8] min-w-[40px] max-w-[80px]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <UserCheck className="w-7 h-7 text-gray-500" />
          </div>
          <span className="text-sm font-medium text-gray-700">Oförändrad<br />Användare</span>
        </div>
      </div>

      <div className="text-left max-w-sm mx-auto space-y-3 mb-8">
        {[
          "Ingen fördröjning.",
          "Ingen påverkan på samtalskvalitet.",
          "Ingen förändring för användare.",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="text-[#e8a020] font-bold text-xl">✓</span>
            <span className="font-semibold text-gray-800">{item}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-700 mb-6">
        Ger risknivå i realtid till operatör eller säkerhetssystem.
      </p>

      <div className="flex items-start gap-4 max-w-md mx-auto bg-gray-50 rounded-xl p-5 mb-8">
        <Lock className="w-10 h-10 text-[#0d3b6e] shrink-0 mt-1" />
        <p className="text-gray-700 text-left">
          Bygger på en egenutvecklad metod för integritetbevarande analys.
        </p>
      </div>

      <p className="text-[#e8a020] font-bold text-lg">
        Vi lagrar inte samtal — vi analyserar risk.
      </p>
    </div>
  </section>
);

// ─── För vem ──────────────────────────────────────────────────────────────────
const ForVemSection = () => (
  <section className="py-16 bg-[#eef4fb]">
    <div className="container max-w-3xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
        För verksamheter där samtalet är{" "}
        <span className="text-[#1a9fa8]">affärskritiskt</span>
      </h2>
      <div className="mt-10 space-y-6">
        {[
          { icon: Headphones, label: "Kundtjänst och support" },
          { icon: Calculator, label: "Ekonomifunktioner" },
          { icon: Building2, label: "Banker och finans" },
          { icon: Landmark, label: "Offentlig sektor" },
          { icon: Lock, label: "Organisationer med känsliga transaktioner" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-5">
            <div className="w-12 h-12 bg-[#0d3b6e] rounded-lg flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-800 font-medium text-lg">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-10 text-gray-600 text-sm">
        När rösten används för beslut eller betalningsgodkännanden krävs skydd.
      </p>
    </div>
  </section>
);

// ─── Svenskutvecklad ──────────────────────────────────────────────────────────
const SvenskutveckladSection = () => (
  <section className="py-16 bg-white">
    <div className="container max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        Svenskutvecklad.{" "}
        <span className="text-[#1a9fa8]">Anpassad för Europa.</span>
      </h2>
      <div className="text-left max-w-sm mx-auto space-y-4 mb-8">
        {[
          "GDPR-anpassad",
          "Förberedd för EU AI Act",
          "Tydlig säkerhetsarkitektur",
          "Möjlighet till on-prem-deployment",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="text-[#e8a020] font-bold text-xl">✓</span>
            <span className="font-semibold text-gray-800">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-[#e8a020] font-bold text-lg">
        Vi lagrar inte samtal. Vi analyserar risk.
      </p>
    </div>
  </section>
);

// ─── Dataplacering ────────────────────────────────────────────────────────────
const DataplaceringSection = () => (
  <section className="py-16 bg-[#eef4fb]">
    <div className="container max-w-4xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
        Dataplacering och datahantering
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border border-[#1a9fa8] rounded-2xl p-8 bg-white">
          <h3 className="font-bold text-gray-900 mb-4">Data stannar i Sverige</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            All persondata behandlas och lagras uteslutande på servrar inom Sverige. Ingen data överförs till tredje land utanför EU/EES.
          </p>
        </div>
        <div className="border border-[#1a9fa8] rounded-2xl p-8 bg-white">
          <h3 className="font-bold text-gray-900 mb-4">Egen serverinfrastruktur</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Elivra driver sin egen serverinfrastruktur och är inte beroende av externa molntjänster för kärnfunktionalitet. Det ger full kontroll över drift, åtkomst och dataskydd.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/contact">
          <button className="bg-[#0d3b6e] hover:bg-[#0a2d55] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">
            Boka teknisk genomgång
          </button>
        </Link>
        <Link to="/contact">
          <button className="border-2 border-[#0d3b6e] text-[#0d3b6e] hover:bg-[#0d3b6e] hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors bg-white">
            Kontakta oss
          </button>
        </Link>
      </div>
    </div>
  </section>
);

// ─── Kontaktformulär ──────────────────────────────────────────────────────────
const KontaktSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    type: "info",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a9fa8] mb-3">
          Se hur det fungerar i er miljö
        </h2>
        <p className="text-gray-700 mb-2">
          Boka en kort teknisk genomgång<br />eller begär mer information om Elivra Voice Firewall.
        </p>
        <p className="text-gray-600 mb-10">
          Enkel och säker start — all hantering sker manuellt av säkerhetsskäl.
        </p>

        {sent ? (
          <div className="bg-green-50 border border-green-300 rounded-2xl p-10 text-green-800 font-semibold text-lg">
            Tack! Vi återkommer till er inom kort.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 rounded-2xl p-8 text-left space-y-5 bg-white shadow-sm"
          >
            <div>
              <label className="block text-sm text-gray-600 mb-1">För- och efternamn</label>
              <input
                type="text"
                placeholder="Namn"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5fa8]"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Telefonnummer</label>
                <input
                  type="tel"
                  placeholder="07x-xxx xx xx"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5fa8]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5fa8]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Företagsnamn</label>
              <input
                type="text"
                placeholder="Företagsnamn"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5fa8]"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="demo"
                  checked={form.type === "demo"}
                  onChange={() => setForm({ ...form, type: "demo" })}
                  className="w-5 h-5 accent-[#0d3b6e]"
                />
                <span className="text-sm text-gray-700">Boka demo</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="info"
                  checked={form.type === "info"}
                  onChange={() => setForm({ ...form, type: "info" })}
                  className="w-5 h-5 accent-[#0d3b6e]"
                />
                <span className="text-sm text-gray-700">Få mer information</span>
              </label>
              <p className="text-xs text-gray-500">Valet hjälper oss att skicka rätt information till er.</p>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Meddelande</label>
              <textarea
                placeholder="Skriv här..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#0d3b6e] hover:bg-[#0a2d55] text-white font-semibold px-10 py-4 rounded-full text-base transition-colors inline-flex items-center gap-2"
              >
                Skicka <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        <p className="mt-8 text-sm text-gray-500">
          Vi använder era uppgifter enbart för att hantera denna förfrågan.<br />
          Inga automatiska utskick. Ingen försäljning utan samtycke.
        </p>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FöretagPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AttackerSection />
        <SakerhetslagerSection />
        <HurDetFungerarSection />
        <ForVemSection />
        <SvenskutveckladSection />
        <DataplaceringSection />
        <KontaktSection />
      </main>
      <Footer />
    </div>
  );
}
