import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Smartphone, ShieldCheck, MessageCircle, Play } from "lucide-react";

export default function PrivatPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516307362428-37436224a183?auto=format&fit=crop&q=80&w=2000" 
              alt="Elderly woman smiling with ocean background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40"></div>
          </div>
          
          <div className="container relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E293B] mb-6 leading-[1.1]">
              Du är inte ensam -<br />oavsett var du är
            </h1>
            <p className="text-lg md:text-xl text-[#475569] mb-10 max-w-2xl mx-auto font-medium">
              Trygghet direkt i mobilen - för dig eller någon du bryr dig om.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white px-10 py-7 text-lg rounded-md font-bold transition-all"
                onClick={() => navigate("/coming-soon")}
              >
                Kom igång
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#CBD5E1] text-[#1E293B] px-10 py-7 text-lg rounded-md font-bold hover:bg-white/50 transition-all"
                onClick={() => navigate("/contact")}
              >
                Kontakta oss
              </Button>
            </div>
          </div>
        </section>

        {/* Lugnt, Tryggt, Nära. Section */}
        <section className="py-24 bg-white">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E293B] mb-16">
              Lugnt, Tryggt, Nära.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Card 1: Elivra WalkGuard */}
              <div className="bg-[#0284C7] rounded-[2rem] p-10 text-white flex flex-col items-center text-center shadow-2xl transform transition-hover hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-2">Elivra WalkGuard</h3>
                <p className="text-sky-100 mb-10 text-sm font-medium">Trygg ute.</p>
                
                {/* Phone Mockup */}
                <div className="w-[240px] h-[480px] bg-[#0F172A] rounded-[3rem] border-[6px] border-[#334155] relative overflow-hidden mb-10 shadow-2xl ring-4 ring-black/5">
                   {/* Phone Screen Content */}
                   <div className="absolute inset-0 bg-[#F8FAFC] flex flex-col p-4">
                      <div className="h-6 w-24 bg-[#E2E8F0] rounded-full mx-auto mb-6 mt-2 opacity-50"></div>
                      <div className="flex items-center justify-between mb-8 px-2">
                         <div className="w-8 h-8 rounded-full bg-sky-500/20"></div>
                         <div className="text-[#0284C7] font-bold text-sm">Elivra</div>
                         <div className="w-8 h-8 rounded-full bg-sky-500/20"></div>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center">
                         <div className="w-32 h-32 rounded-full border-4 border-[#0284C7] flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-[#0284C7] flex items-center justify-center shadow-lg">
                               <ShieldCheck className="w-12 h-12 text-white" />
                            </div>
                         </div>
                         <div className="text-[#1E293B] font-bold text-lg mb-1">Aktiv</div>
                         <div className="text-[#64748B] text-xs">Skyddet är igång</div>
                      </div>
                      <div className="mt-auto mb-6 w-full h-12 bg-[#1E293B] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                         Hjälp nu
                      </div>
                   </div>
                </div>

                <div className="flex gap-3 mt-auto">
                   <div className="w-32 h-10 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-[11px] font-bold border border-white/10">App Store</div>
                   <div className="w-32 h-10 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-[11px] font-bold border border-white/10">Google Play</div>
                </div>
              </div>

              {/* Card 2: Elivra Samtalsvakt */}
              <div className="bg-[#1E1B4B] rounded-[2rem] p-10 text-white flex flex-col items-center text-center shadow-2xl transform transition-hover hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-2">Elivra Samtalsvakt</h3>
                <p className="text-indigo-300 mb-10 text-sm font-medium">Kommer snart</p>
                
                {/* Visual Representation */}
                <div className="w-full aspect-[4/5] bg-[#312E81] rounded-[2rem] flex flex-col items-center justify-center border border-indigo-500/30 mb-10 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                   <div className="w-24 h-24 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 relative z-10">
                      <MessageCircle className="w-12 h-12 text-indigo-300" />
                   </div>
                   <div className="px-6 py-2 bg-indigo-900/50 backdrop-blur-md rounded-full border border-indigo-400/30 relative z-10">
                      <span className="text-xl font-bold text-white tracking-wide">Kommer Snart</span>
                   </div>
                   {/* Decorative Elements */}
                   <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="mt-auto">
                   <Button variant="link" className="text-indigo-200 hover:text-white font-semibold flex items-center gap-2">
                      Läs mer om Samtalsvakt <Play className="w-3 h-3 fill-current" />
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Info: WalkGuard */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container px-4 max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                   <div className="inline-block px-4 py-1 bg-sky-100 text-[#0284C7] rounded-full text-xs font-bold mb-6 uppercase tracking-wider">Elivra WalkGuard</div>
                   <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">Du går. Du vakar.</h2>
                   <p className="text-lg text-[#475569] mb-10 leading-relaxed max-w-lg">
                      Känn dig trygg på din promenad. Med Elivra WalkGuard har du alltid en digital följeslagare i fickan. Med ett enkelt tryck kan du signalera att du behöver stöd eller kontakt.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      <button className="h-12 w-40 bg-black rounded-xl flex items-center justify-center text-white text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg">App Store</button>
                      <button className="h-12 w-40 bg-black rounded-xl flex items-center justify-center text-white text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg">Google Play</button>
                   </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                   <div className="absolute -inset-10 bg-sky-500/5 rounded-full blur-3xl"></div>
                   <div className="relative grid grid-cols-2 gap-6">
                      <div className="aspect-[9/16] bg-[#F1F5F9] rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden transform -rotate-3">
                         <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                            <Smartphone className="w-12 h-12 text-sky-400 opacity-50" />
                         </div>
                      </div>
                      <div className="aspect-[9/16] bg-[#F1F5F9] rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden transform rotate-3 translate-y-12">
                         <div className="w-full h-full bg-gradient-to-br from-sky-200 to-sky-100 flex items-center justify-center">
                            <ShieldCheck className="w-12 h-12 text-sky-500 opacity-50" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Detailed Info: Samtalsvakt */}
        <section className="py-32 bg-[#F8FAFC] border-t border-slate-100">
           <div className="container px-4 max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">Elivra Samtalsvakt</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">Du pratar. Den lyssnar.</h2>
              <p className="text-xl text-[#64748B] mb-16 max-w-2xl mx-auto">Vår kommande tjänst som ger trygghet i dina telefonsamtal genom intelligent analys och stöd.</p>
              
              <div className="relative max-w-3xl mx-auto group">
                 <div className="absolute -inset-4 bg-indigo-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                 <div className="relative w-full aspect-video bg-[#1E1B4B] rounded-[2rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-indigo-400/20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <MessageCircle className="w-20 h-20 text-indigo-400/30 mb-6" />
                    <span className="text-4xl md:text-5xl font-extrabold text-white/20 tracking-tighter uppercase italic">Kommer Snart</span>
                 </div>
              </div>
              
              <div className="mt-16 flex justify-center">
                 <div className="px-8 py-3 bg-slate-200 rounded-full text-slate-500 text-sm font-bold flex items-center gap-3">
                    <Smartphone className="w-4 h-4" /> Snart på Google Play & App Store
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
