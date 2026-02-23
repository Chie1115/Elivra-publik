import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, MessageCircle, ArrowRight, Smartphone, Bell, Users } from "lucide-react";

export default function PrivatPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1E293B]">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/hero-bg.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
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
              {/* Card 1: Elivra WalkGuard */}
              <div className="bg-[#0EA5E9] rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center shadow-xl transform transition-all hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold mb-2">Elivra WalkGuard</h3>
                <p className="text-sky-100 mb-10 text-sm font-semibold uppercase tracking-wider">Trygg ute.</p>
                
                {/* Phone Mockup for WalkGuard */}
                <div className="w-[260px] h-[520px] bg-[#0F172A] rounded-[3.5rem] border-[8px] border-[#334155] relative overflow-hidden mb-10 shadow-2xl ring-4 ring-black/5">
                   <div className="absolute inset-0 bg-[#0F172A] flex flex-col p-6">
                      <div className="h-6 w-24 bg-[#334155] rounded-full mx-auto mb-8 mt-3 opacity-60"></div>
                      <div className="flex flex-col items-center flex-1">
                         <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center mb-8 border border-sky-500/30">
                            <Shield className="w-10 h-10 text-[#0EA5E9]" />
                         </div>
                         <div className="w-full space-y-4 mb-8">
                            <div className="h-12 bg-[#1E293B] rounded-xl flex items-center px-4 gap-3 border border-white/5">
                               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                               <div className="h-3 bg-white/20 rounded-full w-24"></div>
                            </div>
                            <div className="h-12 bg-[#1E293B] rounded-xl flex items-center px-4 gap-3 border border-white/5">
                               <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                               <div className="h-3 bg-white/20 rounded-full w-32"></div>
                            </div>
                         </div>
                         <div className="mt-auto w-full">
                            <div className="w-20 h-20 rounded-full bg-red-500 mx-auto flex items-center justify-center shadow-lg shadow-red-500/40 border-4 border-red-400/30">
                               <Bell className="w-10 h-10 text-white" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="flex gap-4 mt-auto">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </div>
              </div>

              {/* Card 2: Elivra Samtalsvakt */}
              <div className="bg-[#1E1B4B] rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center shadow-xl transform transition-all hover:translate-y-[-4px]">
                <h3 className="text-2xl font-bold mb-2">Elivra Samtalsvakt</h3>
                <p className="text-indigo-300 mb-10 text-sm font-semibold uppercase tracking-wider">Trygg i samtal.</p>
                
                {/* Visual Mockup for Samtalsvakt */}
                <div className="w-[260px] h-[520px] bg-[#1E1B4B] rounded-[3.5rem] border-[8px] border-indigo-900/50 relative overflow-hidden mb-10 shadow-2xl flex flex-col items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                   <div className="w-full h-full border-2 border-indigo-500/30 rounded-[2.5rem] m-2 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-indigo-200 mb-4">Kommer</div>
                      <div className="text-4xl font-black text-white tracking-widest">SNART</div>
                   </div>
                </div>

                <div className="flex gap-4 mt-auto opacity-50 grayscale">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Detailed Info Section: WalkGuard */}
        <section className="py-24 bg-white border-t border-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
             <div className="mb-16">
                <h2 className="text-xl font-bold text-[#0EA5E9] mb-2">Elivra WalkGuard</h2>
                <h3 className="text-4xl font-bold text-[#1E293B] mb-4">Du går. Du vakar.</h3>
                <p className="text-lg text-[#475569] max-w-2xl">
                   Delar din väg med någon du litar på. Reagerar bara när något händer.
                </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Börja gå direkt", icon: Smartphone, color: "bg-sky-500" },
                  { title: "Du vet alltid var du är", icon: Shield, color: "bg-sky-600" },
                  { title: "Kontakta någon snabbt", icon: Bell, color: "bg-orange-500" },
                  { title: "Larma vid behov", icon: Users, color: "bg-red-500" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`${item.color} w-full aspect-[3/4] rounded-2xl mb-6 flex items-center justify-center shadow-lg overflow-hidden relative group`}>
                       <item.icon className="w-16 h-16 text-white/20 absolute" />
                       <div className="relative z-10 text-white font-bold px-6 text-center">{item.title}</div>
                    </div>
                  </div>
                ))}
             </div>

             <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-slate-50 rounded-[2rem]">
                <div className="text-center md:text-left">
                   <h4 className="text-xl font-bold mb-2">Börja gå med lugn i fickan</h4>
                   <p className="text-slate-600">Ladda ner WalkGuard idag.</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                   <div className="flex flex-col items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase">Ladda ned på App Store</span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 4. Detailed Info Section: Samtalsvakt */}
        <section className="py-24 bg-white border-t border-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
             <div className="mb-16">
                <h2 className="text-xl font-bold text-indigo-600 mb-2">Elivra Samtalsvakt</h2>
                <h3 className="text-4xl font-bold text-[#1E293B] mb-4">Du pratar. Den lyssnar.</h3>
                <p className="text-lg text-[#475569] max-w-2xl">
                   Känner när något inte stämmer. Skyddar dig mot bedrägerier i realtid.
                </p>
             </div>
             
             <div className="relative w-full aspect-[21/9] bg-[#1E1B4B] rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center">
                   <div className="text-6xl md:text-8xl font-black text-white tracking-tighter opacity-20 italic">KOMMER SNART</div>
                </div>
             </div>

             <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-indigo-50/50 rounded-[2rem] border border-indigo-100">
                <div className="text-center md:text-left">
                   <h4 className="text-xl font-bold mb-2 text-indigo-900">Säkra samtal för alla</h4>
                   <p className="text-indigo-700/70">Håll utkik efter lanseringen.</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center opacity-50 grayscale">
                   <div className="flex flex-col items-center gap-2">
                      <span className="text-xs font-bold text-indigo-400 uppercase">Ladda ned på App Store</span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
                   </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
