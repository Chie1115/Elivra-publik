import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLocation } from "wouter"; // useLocationをインポート

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation(); // setLocationを取得

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Ange din e-postadress.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // フォーム送信のシミュレーション
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Tack! Vi meddelar dig när vi är redo.");
      setEmail("");
    } catch (error) {
      toast.error("Registreringen misslyckades. Försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // min-h-screenで画面全体を覆い、背景画像を設定
    <div 
      className="min-h-screen flex flex-col relative bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/coming-soon-bg.jpg')` }}
    >
      {/* 不透明度60%の黒いオーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-60"></div> 

      {/* ロゴとリンク */}
      <header className="relative z-20">
        <div className="container">
          <div className="flex justify-between items-center py-4">
        <button 
          onClick={() => setLocation("/")} 
          className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        >
          Elivra
        </button>
          </div>
        </div>
      </header>

      {/* メインコンテンツ (中央寄せ) */}
      <main className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-lg p-4 flex flex-col items-center">
          
          {/* コマー・スナートのテキスト */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white text-center mb-10">
            Kommer Snart
          </h1>

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full max-w-sm sm:max-w-none">
            <Input
              id="email"
              type="email"
              placeholder="Ange din e-postadress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              className="w-full sm:w-64 py-6 text-base"
            />
            <Button 
              type="submit" 
              className="bg-primary hover:bg-[#FF8844] text-white font-semibold py-6 px-8 text-base" // Figmaのデザインに合わせて色と高さを調整
              disabled={isSubmitting}
            >
              {isSubmitting ? "Skickar..." : "Meddela mig"}
            </Button>
          </form>
          
          {/* 説明文 (今回は非表示) */}
          {/* <p className="text-center text-sm text-white mt-6">
            {description}
          </p> */}
        </div>
      </main>
      
      {/* フッターは削除 */}
    </div>
  );
}
