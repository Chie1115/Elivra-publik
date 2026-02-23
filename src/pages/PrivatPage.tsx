import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, MessageCircle, ArrowRight } from "lucide-react";

export default function PrivatPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1E293B]">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Figmaのデザインに合わせた、柔らかい背景画像 */}
            <img 
              src="https://images.unsplash.com/photo-1516307362428-37436224a183?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/60"></div>
          </div>
          
          <div className="container relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-[#1E293B]">
              Du är inte ensam -<br />oavsett var du är
            </h1>
            <p className="text-lg md:text-xl text-[#475569] mb-12 max-w-2xl mx-auto font-medium">
              Trygghet direkt i mobilen - för dig eller någon du bryr dig om.
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

        {/* 2. "Lugnt, Tryggt, Nära." Section */}
        <section className="py-24 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1E293B]">
              Lugnt, Tryggt, Nära.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Card 1: Elivra WalkGuard (Sky Blue) */}
              <div className="bg-[#0EA5E9] rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center shadow-xl transform transition-all hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold mb-2">Elivra WalkGuard</h3>
                <p className="text-sky-100 mb-10 text-sm font-semibold uppercase tracking-wider">Trygg ute.</p>
                
                {/* Phone Mockup for WalkGuard */}
                <div className="w-[260px] h-[520px] bg-[#0F172A] rounded-[3.5rem] border-[8px] border-[#334155] relative overflow-hidden mb-10 shadow-2xl ring-4 ring-black/5">
                   <div className="absolute inset-0 bg-[#F8FAFC] flex flex-col">
                      <div className="h-6 w-24 bg-[#E2E8F0] rounded-full mx-auto mb-8 mt-3 opacity-60"></div>
                      <div className="px-6 flex flex-col items-center flex-1">
                         <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-12">
                            <Shield className="w-8 h-8 text-[#0EA5E9]" />
                         </div>
                         <div className="w-full h-48 bg-[#E2E8F0] rounded-2xl mb-8 flex items-center justify-center">
                            <Shield className="w-16 h-16 text-white" />
                         </div>
                         <div className="w-full space-y-3">
                            <div className="h-4 bg-[#E2E8F0] rounded-full w-3/4 mx-auto"></div>
                            <div className="h-3 bg-[#E2E8F0] rounded-full w-1/2 mx-auto opacity-60"></div>
                         </div>
                      </div>
                      <div className="p-6 mt-auto">
                         <div className="w-full h-12 bg-[#0F172A] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                            Aktiv
                         </div>
                      </div>
                   </div>
                </div>

                <div className="flex gap-4 mt-auto">
                   <div className="px-6 py-2 bg-black/20 backdrop-blur-sm rounded-lg text-xs font-bold border border-white/10">App Store</div>
                   <div className="px-6 py-2 bg-black/20 backdrop-blur-sm rounded-lg text-xs font-bold border border-white/10">Google Play</div>
                </div>
              </div>

              {/* Card 2: Elivra Samtalsvakt (Navy Blue) */}
              <div className="bg-[#1E1B4B] rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center shadow-xl transform transition-all hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold mb-2">Elivra Samtalsvakt</h3>
                <p className="text-indigo-300 mb-10 text-sm font-semibold uppercase tracking-wider">Kommer snart</p>
                
                {/* Visual Mockup for Samtalsvakt */}
                <div className="w-full aspect-[4/5] bg-[#312E81] rounded-[2.5rem] flex flex-col items-center justify-center border border-indigo-500/30 mb-10 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                   <div className="w-24 h-24 rounded-full bg-indigo-500/20 flex items-center justify-center mb-8 relative z-10 ring-8 ring-indigo-500/5">
                      <MessageCircle className="w-12 h-12 text-indigo-300" />
                   </div>
                   <div className="px-8 py-3 bg-indigo-900/60 backdrop-blur-md rounded-full border border-indigo-400/30 relative z-10 shadow-lg">
                      <span className="text-2xl font-extrabold text-white tracking-tight italic">Kommer Snart</span>
                   </div>
                   <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="mt-auto">
                   <Button variant="link" className="text-indigo-200 hover:text-white font-bold text-lg flex items-center gap-2 group">
                      Läs mer om Samtalsvakt <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Detailed Info Section: WalkGuard */}
        <section className="py-32 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                   <h2 className="text-xl font-bold text-[#0EA5E9] mb-4 uppercase tracking-widest">Elivra WalkGuard</h2>
                   <h3 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-8 leading-tight">Du går. Du vakar.</h3>
                   <p className="text-lg text-[#475569] mb-10 leading-relaxed max-w-lg">
                      Känn dig trygg på din promenad. Med Elivra WalkGuard har du alltid en digital följeslagare som vakar över dig. Om något händer är hjälpen bara ett tryck bort.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      <button className="h-14 w-44 bg-[#0F172A] rounded-xl flex items-center justify-center text-white text-sm font-bold hover:bg-[#1E293B] transition-all shadow-md">App Store</button>
                      <button className="h-14 w-44 bg-[#0F172A] rounded-xl flex items-center justify-center text-white text-sm font-bold hover:bg-[#1E293B] transition-all shadow-md">Google Play</button>
                   </div>
                </div>
                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                   <div className="absolute inset-0 bg-sky-500/5 rounded-full blur-3xl"></div>
                   <div className="relative grid grid-cols-2 gap-8">
                      <div className="w-[180px] h-[360px] bg-[#F1F5F9] rounded-[2.5rem] shadow-2xl border border-slate-200 transform -rotate-6 translate-y-6"></div>
                      <div className="w-[180px] h-[360px] bg-[#F1F5F9] rounded-[2.5rem] shadow-2xl border border-slate-200 transform rotate-6 translate-y-[-6px]"></div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 4. Detailed Info Section: Samtalsvakt */}
        <section className="py-32 bg-[#F8FAFC] border-t border-slate-100">
           <div className="container px-4 max-w-5xl mx-auto text-center">
              <h2 className="text-xl font-bold text-indigo-600 mb-4 uppercase tracking-widest">Elivra Samtalsvakt</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-8">Du pratar. Den lyssnar.</h3>
              <p className="text-xl text-[#64748B] mb-20 max-w-2xl mx-auto font-medium">
                 Vår kommande tjänst för säkrare telefonsamtal. Intelligent analys som skyddar dig i realtid.
              </p>
              
              <div className="relative max-w-4xl mx-auto">
                 <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-3xl opacity-50"></div>
                 <div className="relative w-full aspect-video bg-[#1E1B4B] rounded-[3rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-indigo-400/20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50"></div>
                    <MessageCircle className="w-24 h-24 text-indigo-400/20 mb-8" />
                    <span className="text-5xl md:text-7xl font-black text-white/10 tracking-tighter uppercase italic select-none">Kommer Snart</span>
                 </div>
              </div>
              
              <div className="mt-20 flex justify-center">
                 <div className="px-10 py-4 bg-white border border-slate-200 rounded-full text-[#64748B] text-sm font-bold flex items-center gap-3 shadow-sm">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                    Håll utkik på App Store & Google Play
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
