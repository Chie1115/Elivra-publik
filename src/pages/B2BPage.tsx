import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, Users, Brain, Heart, Lightbulb, Scale, MessageSquare, BarChart3 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Helper component for section layout
const Section = ({ id, title, children, className = "" }: { id: string, title: React.ReactNode, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-12 md:py-16 lg:py-24 ${className}`}>
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-[oklch(0.58_0.09_220)]">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// Helper component for card layout
const Card = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#FF9966] mb-3 md:mb-4 shrink-0" />
    <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-gray-800 line-clamp-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed break-normal">{description}</p>
  </div>
);

// 1. Hero-sektion
const HeroSection = () => (
  <div className="relative min-h-[520px] flex items-center overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="/assets/hero-bg-blue.jpeg" 
        alt="" 
        role="presentation"
        className="w-full h-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-white/30"></div>
    </div>
    <div className="container max-w-6xl mx-auto text-center relative z-10 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black"><span className="block md:whitespace-nowrap">Intelligent trygghetsassistans för hemtjänst,</span><span className="block md:whitespace-nowrap">hemsjukvård och trygghetsboenden</span></h1>


      <p className="text-xl md:text-2xl text-black/90 mb-10 max-w-4xl mx-auto">
        Elivra kombinerar lokala sensorer, AI och säker röstkommunikation för att upptäcka avvikelser i tid, stödja svaga röster i vården och minska belastningen på personal – utan att röja integriteten.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
        <Link 
          to="/contact" 
          className="bg-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.53_0.09_220)] text-white text-base px-8 py-4 font-semibold shadow-lg w-full sm:w-auto rounded-full transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.58_0.09_220)] focus-visible:ring-offset-2"
        >
          Boka rådgivning <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
        </Link>
        <Link 
          to="#losning" 
          className="border-2 border-[oklch(0.58_0.09_220)] text-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.58_0.09_220)] hover:text-white text-base px-8 py-4 font-semibold bg-white w-full sm:w-auto rounded-full transition-colors inline-block text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.58_0.09_220)] focus-visible:ring-offset-2"
        >
          Kontakta oss
        </Link>
      </div>
     <ul className="mt-12 space-y-3 md:flex md:justify-center md:space-y-0 md:space-x-8">
	        <li className="flex items-start md:items-center gap-2 text-base md:text-lg text-black"><Shield className="w-5 h-5 shrink-0 mt-0.5 md:mt-0 text-green-400" /> Lokalt AI – ingen rådata till molnet</li>
        <li className="flex items-start md:items-center gap-2 text-base md:text-lg text-black"><Zap className="w-5 h-5 shrink-0 mt-0.5 md:mt-0 text-green-400" /> Elivra-hem på plats med radar, mikrofoner och högtalare</li>
        <li className="flex items-start md:items-center gap-2 text-base md:text-lg text-black"><Users className="w-5 h-5 shrink-0 mt-0.5 md:mt-0 text-green-400" /> Stöd för trepartssamtal</li>
      </ul>
    </div>
  </div>
);

// 2. Sektion: Varför – men mer B2B & systemperspektiv
const VarforSection = () => (
  <Section id="varfor" title="Varför Elivra behövs i modern äldreomsorg" className="bg-white">
    {/* 親要素に text-center を適用 */}
    <div className="max-w-3xl mx-auto text-center text-lg text-gray-600 space-y-6">
      
      {/* 2つの段落に分ける */}
      <p>
        Hemtjänst och hemsjukvård brottas med hög belastning, fragmenterad information och begränsad tid hos brukaren.
      </p>
      <p>
        Samtidigt ökar kraven på dokumentation, kvalitet och transparens gentemot anhöriga.
      </p>
      
      {/* この段落も中央揃えになる */}
      <p className="font-semibold text-gray-800">
        Elivra är utvecklad tillsammans med vård, omsorg och teknikexperter för att:
      </p>
      
      {/* 箇条書きのブロック - チェックマーク付き */}
      <div className="text-left mx-auto space-y-3">
        {[
          "Tidigt fånga upp avvikande situationer i hemmet",
          "Ge brukaren en \"kognitiv kamrat\" som kan hjälpa till att minnas och förstå",
          "Minska missförstånd i vårdkontakter genom trepartssamtal och röststöd",
          "Skapa spårbar, säker och begriplig dokumentation – utan att invadera privatlivet",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="text-[#e8a020] font-bold text-xl">✓</span>
            <span className="font-semibold text-gray-800">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);


// 3. Sektion: Lösning – nu med låda, kommunikation och analys
const LosningSection = () => (
  <Section id="losning" title="Så fungerar Elivra – från sensorer till stöd i samtalet" className="bg-gray-50">
    <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
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
        <p className="text-gray-600 text-sm">Systemet larmar automatiskt relevanta parter (som hemtjänst, sjuksköterskor eller anhöriga) vid avvikande händelser, till exempel fall. </p>
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

// 5. Sektion: B2B-moduler – "Byggblock" för kommun och vårdgivare
const ModulerSection = () => (
  <Section id="moduler" title="Moduler – välj det som passar er verksamhet" className="bg-gray-50">
    <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
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
        <Link 
          to="/contact"
          className="border-2 border-[oklch(0.58_0.09_220)] text-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.58_0.09_220)] hover:text-white text-base px-8 py-4 font-semibold bg-white rounded-full transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.58_0.09_220)] focus-visible:ring-offset-2"
        >
          Kontakta oss <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
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
      <Header />

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
