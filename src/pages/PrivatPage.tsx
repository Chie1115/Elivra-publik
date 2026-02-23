import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PrivatPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1E293B]">
      <Header />

      <main className="flex-1">

        {/* ===== 1. Hero Section ===== */}
        <section className="relative min-h-[340px] flex items-center justify-center overflow-hidden">
          {/* Background: hero-bg-green (teal/green wave) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/hero-bg-green.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/30" />
          </div>

          <div className="container relative z-10 text-center px-6 max-w-2xl py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#1E293B]">
              Du är inte ensam -<br />oavsett var du är
            </h1>
            <p className="text-base md:text-lg text-[#475569] mb-8 font-medium">
              Trygghet direkt i mobilen – för dig eller<br className="hidden sm:block" />
              någon du bryr dig om.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white px-10 py-5 text-base rounded-md font-bold shadow"
                onClick={() => navigate("/coming-soon")}
              >
                Kom igång
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1E293B] text-[#1E293B] px-10 py-5 text-base rounded-md font-bold hover:bg-slate-50"
                onClick={() => navigate("/contact")}
              >
                Kontakta oss
              </Button>
            </div>
          </div>
        </section>

        {/* ===== 2. "Lugnt, Tryggt, Nära." – Product Cards ===== */}
        <section className="py-14 bg-white">
          <div className="container px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#1E293B]">
              Lugnt, Tryggt, Nära.
            </h2>
            <p className="text-center text-[#64748B] mb-10 text-sm">Välj din trygghet.</p>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Card 1: Elivra WalkGuard – dark navy */}
              <div className="bg-[#0F2A4A] rounded-2xl p-8 text-white flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-1">Elivra WalkGuard</h3>
                <p className="text-sky-300 mb-6 text-xs font-semibold uppercase tracking-widest">
                  Trygg ute.
                </p>

                {/* Phone mockup with real app screenshot */}
                <div className="w-[160px] h-[320px] bg-[#0A1628] rounded-[2rem] border-[5px] border-[#1E3A5F] overflow-hidden shadow-2xl mb-6">
                  <img
                    src="/assets/wg-screen-home.jpeg"
                    alt="WalkGuard app"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex gap-3 mt-auto">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-8"
                  />
                </div>
              </div>

              {/* Card 2: Elivra Samtalsvakt – dark navy */}
              <div className="bg-[#0F2A4A] rounded-2xl p-8 text-white flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-1">Elivra Samtalsvakt</h3>
                <p className="text-sky-300 mb-6 text-xs font-semibold uppercase tracking-widest">
                  Trygg i samtal.
                </p>

                {/* "Kommer Snart" placeholder box */}
                <div className="w-[160px] h-[320px] bg-[#0F2A4A] rounded-2xl border-2 border-sky-400/40 flex items-center justify-center mb-6 shadow-xl">
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl leading-tight">
                      Kommer<br />Snart
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto opacity-40 grayscale">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-8"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 3. WalkGuard Detail Section ===== */}
        <section className="py-14 bg-[#F8FAFC] border-t border-slate-100">
          <div className="container px-6 max-w-4xl mx-auto">

            <div className="mb-8">
              <p className="text-sm font-bold text-[#0EA5E9] mb-1">Elivra WalkGuard</p>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">Du går. Du vakar.</h2>
              <p className="text-[#475569] text-sm max-w-lg">
                Delar din väg med någon du litar på.<br />
                Reagerar bara när något händer.
              </p>
            </div>

            {/* 4 app screenshots in a row */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {/* Screenshot 1: Home screen */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[9/19] rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/assets/wg-screen-home.jpeg"
                    alt="Börja gå direkt"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-center text-[#475569] font-medium leading-tight">
                  Börja gå direkt
                </p>
              </div>

              {/* Screenshot 2: Map screen */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[9/19] rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/assets/wg-screen-map.jpeg"
                    alt="Du vet alltid var du är"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-center text-[#475569] font-medium leading-tight">
                  Du vet alltid var du är
                </p>
              </div>

              {/* Screenshot 3: Alert yellow/orange */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[9/19] rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/assets/wg-screen-alert-orange.png"
                    alt="Kontakta någon snabbt"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-center text-[#475569] font-medium leading-tight">
                  Kontakta någon snabbt
                </p>
              </div>

              {/* Screenshot 4: Alert red */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-full aspect-[9/19] rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/assets/wg-screen-alert-red.png"
                    alt="Larma vid behov"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-center text-[#475569] font-medium leading-tight">
                  Larma vid behov<br />
                  <span className="text-[10px] text-slate-400">Du väljer som som kontaktas</span>
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="font-semibold text-[#1E293B]">Börja gå med lugn i fickan</p>
                <p className="text-sm text-[#64748B]">Ladda ner WalkGuard</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xs text-[#64748B] font-medium">Ladda ned på App Store</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. Samtalsvakt Detail Section ===== */}
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="container px-6 max-w-4xl mx-auto">

            <div className="mb-6">
              <p className="text-sm font-bold text-[#0EA5E9] mb-1">Elivra Samtalsvakt</p>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-3">Du pratar. Den lyssnar.</h2>
              <p className="text-[#475569] text-sm">Känner när något inte står rätt till.</p>
              <p className="text-[#475569] text-sm">Reagerar bara när det behövs.</p>
            </div>

            {/* "Kommer Snart" large box */}
            <div className="bg-[#0F2A4A] rounded-2xl flex items-center justify-center py-20 mb-8 shadow-lg">
              <div className="border-2 border-sky-400/40 rounded-xl px-16 py-10">
                <p className="text-white font-bold text-3xl text-center leading-snug">
                  Kommer<br />Snart
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="font-semibold text-[#1E293B]">Börja prata med lugn i örat</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xs text-[#64748B] font-medium">Ladda ned på App Store</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10 opacity-40 grayscale"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
