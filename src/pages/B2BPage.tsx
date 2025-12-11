// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users, Brain, Heart, Lightbulb, Scale, MessageSquare, BarChart3 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Helper component for section layout
const Section = ({ id, title, children, className = "" }: { id: string, title: React.ReactNode, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.58_0.09_220)]">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// Helper component for card layout
const Card = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
    <Icon className="w-10 h-10 text-[#FF9966] mb-4 shrink-0" />
    <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed break-normal">{description}</p>
  </div>
);

// 1. Hero-sektion
const HeroSection = () => (
  <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 min-h-[500px] md:min-h-[700px] overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="/assets/elderly-care.jpg" 
        alt="Elderly care" 
        className="w-full h-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="container max-w-6xl mx-auto text-center relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white"><span className="block md:whitespace-nowrap">Intelligent trygghetsassistans för hemtjänst,</span><span className="block md:whitespace-nowrap">hemsjukvård och trygghetsboenden</span></h1>


      <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto">
        Elivra kombinerar lokala sensorer, AI och säker röstkommunikation för att upptäcka avvikelser i tid, stödja svaga röster i vården och minska belastningen på personal – utan att röja integriteten.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/contact">
          <Button size="lg" className="bg-[#FF9966] hover:bg-[#FF8844] text-white text-lg px-8 py-6 shadow-lg">
            Boka demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link to="#losning">
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 text-lg px-8 py-6">
            Läs om lösningen
          </Button>
        </Link>
      </div>
      <ul className="mt-12 text-lg text-white space-y-2 md:flex md:justify-center md:space-y-0 md:space-x-8">
        <li className="flex items-center justify-center md:justify-start"><Shield className="w-5 h-5 mr-2 text-green-400" /> Lokalt AI – ingen rådata till molnet</li>
        <li className="flex items-center justify-center md:justify-start"><Zap className="w-5 h-5 mr-2 text-green-400" /> Elivra-hem på plats med radar, mikrofoner och högtalare</li>
        <li className="flex items-center justify-center md:justify-start"><Users className="w-5 h-5 mr-2 text-green-400" /> Stöd för trepartssamtal</li>
      </ul>
    </div>
  </div>
);

// 2. Sektion: Varför – men mer B2B & systemperspektiv
const VarforSection = () => (
  <Section id="varfor" title="Varför Elivra behövs i modern äldreomsorg" className="bg-white">
    <div className="max-w-3xl mx-auto text-center text-lg text-gray-600 space-y-6">
      <p>
        Hemtjänst och hemsjukvård brottas med hög belastning, fragmenterad information och begränsad tid hos brukaren. Samtidigt ökar kraven på dokumentation, kvalitet och transparens gentemot anhöriga.
      </p>
      <p className="font-semibold text-gray-800">
        Elivra är utvecklad tillsammans med vård, omsorg och teknikexperter för att:
      </p>
      <ul className="text-left list-disc list-inside space-y-2 mx-auto max-w-md">
        <li>Tidigt fånga upp avvikande situationer i hemmet</li>
        <li>Ge brukaren en ”kognitiv kamrat” som kan hjälpa till att minnas och förstå</li>
        <li>Minska missförstånd i vårdkontakter genom trepartssamtal och röststöd</li>
        <li>Skapa spårbar, säker och begriplig dokumentation – utan att invadera privatlivet</li>
      </ul>
    </div>
  </Section>
);

// 3. Sektion: Lösning – nu med låda, kommunikation och analys
const LosningSection = () => (
  <Section id="losning" title={<span className="whitespace-nowrap">Så fungerar Elivra – från sensorer till stöd i samtalet</span>} className="bg-gray-50">
    <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
      Elivra kombinerar sensorer, lokalt AI, röstkommunikation och strukturerad analys i en helhetslösning för kommunal och privat äldreomsorg.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 border-2 border-teal-500 rounded-lg bg-white">
        <h3 className="text-lg font-bold text-teal-700 mb-4">Del 1 – Installation av Elivra-Hem</h3>
        <p className="text-gray-600 text-sm">En diskret analysenhet installeras i användarens hem. Den är utrustad med radar för att upptäcka fall och rörelsemönster, mikrofoner för röstinteraktion och högtalare för information.</p>
      </div>
      <div className="p-6 border-2 border-teal-500 rounded-lg bg-white">
        <h3 className="text-lg font-bold text-teal-700 mb-4">Del 2 – Direktkommunikation och trepartssamtal</h3>
        <p className="text-gray-600 text-sm">Elivra integreras med telefoner för att stödja samtal mellan vårdgivare, användare och anhöriga. Systemet hjälper till att förstå och sammanfatta konversationer för att underlätta kommunikationen.</p>
      </div>
      <div className="p-6 border-2 border-teal-500 rounded-lg bg-white">
        <h3 className="text-lg font-bold text-teal-700 mb-4">Del 3 – Larm, avvikelser och triage</h3>
        <p className="text-gray-600 text-sm">Systemet larmar automatiskt relevanta parter (som hemtjänst, sjuksköterskor eller anhöriga) vid avvikande händelser, till exempel fall. Det kan också ge stöd vid nödsamtal till 112.</p>
      </div>
      <div className="p-6 border-2 border-teal-500 rounded-lg bg-white">
        <h3 className="text-lg font-bold text-teal-700 mb-4">Del 4 – Elivra Cognitive Index (ECI) och beslutsstöd</h3>
        <p className="text-gray-600 text-sm">Genom att analysera dagliga konversationer följer systemet långsiktiga trender i kognitiva förmågor som språk och minne. Datan används som ett stöd för vårdplanering, inte som en ersättning för medicinsk bedömning.</p>
      </div>
    </div>
  </Section>
);

// 4. Sektion: För vem – uppdaterad med tydliga B2B-målgrupper
const ForVemSection = () => (
  <Section id="for-vem" title="För vem är Elivra?" className="bg-white">
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
      <Card
        icon={Heart}
        title="Kommunal äldreomsorg"
        description="Stöd för hemtjänst, hemsjukvård och trygghetsboenden som vill öka säkerheten, förbättra arbetsmiljön och skapa transparens mot anhöriga."
      />
      <Card
        icon={Scale}
        title="Privata vård- och omsorgsutförare"
        description="Möjlighet att differentiera sig med hög kvalitet, strukturerad uppföljning och tydligt integritetsskydd för brukare."
      />
      <Card
        icon={Brain}
        title="Regioner & primärvård"
        description="För verksamheter som vill få bättre underlag vid vårdplanering, uppföljning och samverkan runt äldre med komplexa behov."
      />
      <Card
        icon={Lightbulb}
        title="Bostadsbolag & trygghetskoncept"
        description="För trygghetsboenden och seniorbostäder där man vill erbjuda en modern trygghetslösning utan omfattande ombyggnation."
      />
      <Card
        icon={Users}
        title="Anhöriga & närstående"
        description="Genom vår anhörigportal och kommande B2C-tjänster får familjen en bättre bild av vardagen – utan att ta över brukarens integritet."
      />
    </div>
  </Section>
);

// 5. Sektion: B2B-moduler – “Byggblock” för kommun och vårdgivare
const ModulerSection = () => (
  <Section id="moduler" title={<span className="whitespace-nowrap">B2B-moduler – välj det som passar er verksamhet</span>} className="bg-gray-50">
    <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto md:whitespace-nowrap">
      Elivra levereras i moduler som kan kombineras stegvis. Ni kan börja litet och växa vidare.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      <Card
        icon={Shield}
        title="Sensor & lådplattform"
        description="Elivra-hem med lokala sensorer, AI och notifieringar. Grundplattformen för hemtjänst, hemsjukvård och boenden."
      />
      <Card
        icon={MessageSquare}
        title="Kommunikationsmodul"
        description="Stöd för röstinteraktion, trepartssamtal, samtalssammanfattningar och direktkanaler mellan brukare, anhöriga och vårdpersonal."
      />
      <Card
        icon={Users}
        title="Anhörigapp"
        description="“Elivra Friends” – en säker plats där anhöriga kan dela vardagsinformation, födelsedagar, bilder och resor som stärker brukarens minne och trygghet."
      />
      <Card
        icon={Zap}
        title="Avvikelse & larmtriagering"
        description="Struktur för avvikelser, larmprioritering och uppföljning – integreras med befintliga rutiner."
      />
      <Card
        icon={BarChart3}
        title="Analys & ECI"
        description="För verksamheter som vill följa kognitiva mönster över tid och få bättre beslutsunderlag."
      />
      <Card
        icon={Heart}
        title="Elivra Friends"
        description="En social plattform för certifierade användare som värnar om god ton och skapar en trygg, positiv digital miljö."
      />
    </div>
  </Section>
);

// 6. Sektion: Fördelar – justerad text men samma struktur
const FordelarSection = () => (
  <Section id="fordelar" title="Fördelar i korthet" className="bg-white">
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
      <Card
        icon={Shield}
        title="Integritet först"
        description="All analys sker lokalt. Rådata lämnar inte hemmet/boendet utan godkända skäl. Endast nödvändig textlogg sparas."
      />
      <Card
        icon={Heart}
        title="Stöd i vardagen – inte övervakning"
        description="Elivra är designad som ett stöd för brukaren, anhöriga och personal – inte som ett kontrollsystem."
      />
      <Card
        icon={Users}
        title="Minskad stress för personal"
        description="Färre falsklarm, tydligare larm, bättre avvikelserapporter och stöd i komplexa samtal minskar belastningen på hemtjänst och hemsjukvård."
      />
      <Card
        icon={MessageSquare}
        title="Starkare röst för brukare och anhöriga"
        description="Trepartssamtal, samtalssammanfattningar och anhörigportal gör att den äldre och familjen får bättre kontroll över sin egen information."
      />
      <Card
        icon={Scale}
        title="Skalbar och framtidssäker lösning"
        description="Byggblock som kan utökas med fler sensorer, fler enheter och djupare analys utan att tappa kontrollen över säkerhet och integritet."
      />
    </div>
  </Section>
);

// 7. Kontakt / Boka demo – små justeringar
const KontaktSection = () => (
  <Section id="kontakt" title="Boka en genomgång" className="bg-gray-100">
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <p className="text-center text-xl text-gray-700 mb-8">
        Vill ni se hur Elivra kan passa in i er organisation? Boka en genomgång där vi går igenom:
      </p>
      <ul className="text-left list-disc list-inside text-lg text-gray-600 space-y-2 mx-auto max-w-md mb-8">
        <li className="md:whitespace-nowrap">Er nuvarande vård- eller omsorgsprocess</li>
        <li className="md:whitespace-nowrap">Hur Elivra-hem, sensorerna och kommunikationen kan införas stegvis</li>
        <li className="md:whitespace-nowrap">Tekniska och juridiska frågor kring integritet, GDPR och AI</li>
      </ul>
      <div className="text-center">
        <Link to="/contact">
          <Button size="lg" className="bg-[#FF9966] hover:bg-[#FF8844] text-white text-lg px-8 py-6 shadow-lg">
            Boka demo nu <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        {/* Assuming a contact form component would go here, but for now, just the CTA button */}
      </div>
    </div>
  </Section>
);


export default function B2BPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Custom Header for B2B Page */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <h1 
              className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight cursor-pointer" 
              onClick={() => { navigate("/"); setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0); }}
            >
              Elivra
            </h1>
            <div className="flex space-x-3">
              <Button 
                className="bg-transparent hover:bg-gray-100 text-[#FF9966] border-2 border-[#FF9966] text-lg px-6 py-5"
                onClick={() => { navigate("/"); setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0); }}
              >
                Privat
              </Button>
              <Button 
                className="bg-[#FF9966] hover:bg-[#FF8844] text-white border-0 text-lg px-6 py-5"
                onClick={() => { navigate("/for-vard-och-omsorg"); setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0); }}
              >
                vård och omsorg
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* End Custom Header */}

      <main>
        <HeroSection />
        <VarforSection />
        <LosningSection />
        <ForVemSection />
        <ModulerSection />
        <FordelarSection />
        <KontaktSection />
      </main>
      <Footer />
    </div>
  );
}
