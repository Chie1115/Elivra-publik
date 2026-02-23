import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Bell,
  Smartphone,
  MapPin,
  Phone,
  AlertTriangle,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function PrivatPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1E293B]">
      <Header />

      <main className="flex-1">
        {/* ===== 1. Hero Section ===== */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/hero-bg.webp"
              alt="Background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
          </div>

          <div className="container relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-[#1E293B]">
              Du är inte ensam –<br />oavsett var du är
            </h1>
            <p className="text-lg md:text-xl text-[#475569] mb-12 max-w-2xl mx-auto font-medium">
              Trygghet direkt i mobilen – för dig eller någon du bryr dig om.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-12 py-7 text-lg rounded-md font-bold transition-all shadow-lg"
                onClick={() => navigate("/coming-soon")}
              >
                Kom igång
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#CBD5E1] text-[#1E293B] px-12 py-7 text-lg rounded-md font-bold hover:bg-slate-50 transition-all"
                onClick={() => navigate("/contact")}
              >
                Kontakta oss
              </Button>
            </div>
          </div>
        </section>

        {/* ===== 2. "Lugnt, Tryggt, Nära." – Product Cards ===== */}
        <section className="py-24 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1E293B]">
              Lugnt, Tryggt, Nära.
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Card 1: Elivra WalkGuard */}
              <div className="bg-[#0EA5E9] rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-1">Elivra WalkGuard</h3>
                <p className="text-sky-100 mb-10 text-sm font-semibold uppercase tracking-wider">
                  Trygg ute.
                </p>

                {/* Phone mockup */}
                <div className="w-[220px] h-[440px] bg-[#0F172A] rounded-[3rem] border-[8px] border-[#334155] relative overflow-hidden mb-10 shadow-2xl">
                  <div className="absolute inset-0 flex flex-col p-5">
                    <div className="h-5 w-20 bg-[#334155] rounded-full mx-auto mb-6 mt-2 opacity-60" />
                    <div className="flex flex-col items-center flex-1 gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
                        <MapPin className="w-8 h-8 text-[#0EA5E9]" />
                      </div>
                      <div className="w-full space-y-3">
                        {[
                          { color: "bg-green-500", label: "GPS aktiv" },
                          { color: "bg-sky-400", label: "Delar plats" },
                          { color: "bg-yellow-400", label: "Kontakter redo" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="h-11 bg-[#1E293B] rounded-xl flex items-center px-4 gap-3 border border-white/5"
                          >
                            <div className={`w-2 h-2 ${item.color} rounded-full`} />
                            <span className="text-xs text-white/60">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/40 border-4 border-red-400/30">
                          <Bell className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-9"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-9"
                  />
                </div>
              </div>

              {/* Card 2: Elivra Samtalsvakt */}
              <div className="bg-[#1E1B4B] rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-1">Elivra Samtalsvakt</h3>
                <p className="text-indigo-300 mb-10 text-sm font-semibold uppercase tracking-wider">
                  Trygg i samtal.
                </p>

                {/* Phone mockup */}
                <div className="w-[220px] h-[440px] bg-[#1E1B4B] rounded-[3rem] border-[8px] border-indigo-900/50 relative overflow-hidden mb-10 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <MessageCircle className="w-16 h-16 text-indigo-400/50" />
                    <p className="text-indigo-200 font-bold text-lg">Kommer</p>
                    <p className="text-white font-black text-3xl tracking-widest">SNART</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto opacity-40 grayscale">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-9"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. WalkGuard Detail Section ===== */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-bold text-[#0EA5E9] uppercase tracking-widest mb-2">
                Elivra WalkGuard
              </p>
              <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
                Du går. Du vakar.
              </h2>
              <p className="text-lg text-[#475569] max-w-2xl">
                Delar din väg med någon du litar på. Reagerar bara när något händer.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
              {[
                { icon: Smartphone, label: "Börja gå direkt", color: "bg-sky-500" },
                { icon: MapPin, label: "Du vet alltid var du är", color: "bg-sky-600" },
                { icon: Phone, label: "Kontakta någon snabbt", color: "bg-orange-500" },
                { icon: AlertTriangle, label: "Larma vid behov", color: "bg-red-500" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div
                    className={`${item.color} w-full aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-4 shadow-md`}
                  >
                    <item.icon className="w-10 h-10 text-white/80" />
                  </div>
                  <p className="text-sm font-semibold text-center text-[#1E293B]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-white rounded-[2rem] shadow-sm border border-slate-100">
              <div>
                <h4 className="text-xl font-bold mb-1">Börja gå med lugn i fickan</h4>
                <p className="text-slate-500">Ladda ner WalkGuard idag.</p>
              </div>
              <div className="flex gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. Samtalsvakt Detail Section ===== */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">
                Elivra Samtalsvakt
              </p>
              <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
                Du pratar. Den lyssnar.
              </h2>
              <p className="text-lg text-[#475569] max-w-2xl">
                Känner när något inte stämmer. Skyddar dig mot bedrägerier i realtid.
              </p>
            </div>

            <div className="relative w-full aspect-[21/9] bg-[#1E1B4B] rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-2xl mb-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.3)_0%,_transparent_70%)]" />
              <p className="relative z-10 text-6xl md:text-8xl font-black text-white/10 italic tracking-tighter select-none">
                KOMMER SNART
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-indigo-50 rounded-[2rem] border border-indigo-100">
              <div>
                <h4 className="text-xl font-bold mb-1 text-indigo-900">
                  Säkra samtal för alla
                </h4>
                <p className="text-indigo-600/70">Håll utkik efter lanseringen.</p>
              </div>
              <div className="flex gap-3 opacity-40 grayscale">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. Why Elivra – Feature Highlights ===== */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1E293B]">
              Varför Elivra?
            </h2>
            <p className="text-center text-[#475569] mb-16 max-w-xl mx-auto">
              Designad för dig som vill känna trygghet – utan att kompromissa med din frihet.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integritet i fokus",
                  desc: "Din data stannar hos dig. Vi säljer aldrig din information till tredje part.",
                },
                {
                  icon: Bell,
                  title: "Larm när det behövs",
                  desc: "Smarta larm som reagerar på avvikelser – inte på falska larm.",
                },
                {
                  icon: CheckCircle,
                  title: "Enkel att använda",
                  desc: "Inga komplicerade inställningar. Kom igång på under en minut.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. CTA Section ===== */}
        <section className="py-24 bg-[#0F172A] text-white">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redo att ta steget?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Ladda ner appen och börja din resa mot tryggare vardag idag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#FF9966] hover:bg-[#FF8844] text-white px-10 py-6 text-lg font-bold rounded-md shadow-lg"
                onClick={() => navigate("/coming-soon")}
              >
                Kom igång <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-bold rounded-md"
                onClick={() => navigate("/contact")}
              >
                Kontakta oss
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
