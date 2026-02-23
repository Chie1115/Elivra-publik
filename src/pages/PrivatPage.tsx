import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PrivatPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/60"></div>
          </div>
          
          <div className="container relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Du är inte ensam -<br />oavsett var du är
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
              Trygghet direkt i mobilen - för dig eller någon du bryr dig om.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[oklch(0.58_0.09_220)] hover:bg-[oklch(0.48_0.09_220)] text-white px-10 py-6 text-lg rounded-md"
                onClick={() => navigate("/coming-soon")}
              >
                Kom igång
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 px-10 py-6 text-lg rounded-md hover:bg-gray-50"
                onClick={() => navigate("/contact")}
              >
                Kontakta oss
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Teasers */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Lugnt, Tryggt, Nära.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* WalkGuard */}
              <div className="bg-[oklch(0.58_0.09_220)] rounded-2xl p-8 text-white flex flex-col items-center text-center shadow-xl">
                <h3 className="text-xl font-bold mb-4">Elivra WalkGuard</h3>
                <p className="text-blue-100 mb-8 text-sm">Trygg ute.</p>
                <div className="w-48 h-80 bg-gray-800 rounded-[2.5rem] border-4 border-gray-700 relative overflow-hidden mb-6 shadow-2xl">
                   <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20">
                      <div className="w-12 h-12 rounded-full bg-blue-500/50 animate-pulse"></div>
                   </div>
                </div>
                <div className="flex gap-2 mt-auto">
                   <div className="w-24 h-8 bg-black/20 rounded flex items-center justify-center text-[10px] font-bold">App Store</div>
                   <div className="w-24 h-8 bg-black/20 rounded flex items-center justify-center text-[10px] font-bold">Google Play</div>
                </div>
              </div>

              {/* Samtalsvakt */}
              <div className="bg-blue-900 rounded-2xl p-8 text-white flex flex-col items-center text-center shadow-xl">
                <h3 className="text-xl font-bold mb-4">Elivra Samtalsvakt</h3>
                <p className="text-blue-200 mb-8 text-sm">Kommer snart</p>
                <div className="w-full aspect-video bg-blue-950/50 rounded-xl flex items-center justify-center border border-blue-800/50 mb-6">
                   <span className="text-2xl font-bold opacity-50">Kommer Snart</span>
                </div>
                <div className="mt-auto">
                   <Button variant="link" className="text-white/70 hover:text-white">Läs mer om Samtalsvakt</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold text-gray-900 mb-6">Elivra WalkGuard</h2>
                   <h3 className="text-xl font-semibold text-gray-700 mb-4">Du går. Du vakar.</h3>
                   <p className="text-gray-600 mb-6 leading-relaxed">
                      Känn dig trygg på din promenad. Med ett enkelt tryck har du kontakt med oss om något händer.
                   </p>
                   <div className="flex gap-4">
                      <div className="w-32 h-10 bg-black rounded flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-gray-900 transition-colors">App Store</div>
                      <div className="w-32 h-10 bg-black rounded flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-gray-900 transition-colors">Google Play</div>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-[3/4] bg-blue-100 rounded-lg"></div>
                   <div className="aspect-[3/4] bg-blue-50 rounded-lg mt-8"></div>
                </div>
             </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-t border-gray-100">
           <div className="container px-4 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Elivra Samtalsvakt</h2>
              <p className="text-xl text-gray-600 mb-12">Du pratar. Den lyssnar.</p>
              <div className="w-full aspect-video bg-blue-900 rounded-2xl shadow-2xl flex items-center justify-center mb-8">
                 <span className="text-4xl font-bold text-white/20">Kommer Snart</span>
              </div>
              <div className="flex justify-center gap-4">
                 <div className="w-32 h-10 bg-black/10 rounded flex items-center justify-center text-gray-400 text-xs font-bold">Google Play</div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
