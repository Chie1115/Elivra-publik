import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("名前とメールアドレスを入力してください");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // ここでバックエンドにデータを送信する処理を追加
      // 例: await fetch("/api/register", { method: "POST", body: JSON.stringify({ email, name }) })
      
      // デモ用に2秒待機
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("登録ありがとうございます。折り返しご連絡いたします。");
      setEmail("");
      setName("");
    } catch (error) {
      toast.error("登録に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* タイトル */}
            <h1 className="text-3xl font-bold text-center mb-2 text-[oklch(0.58_0.09_220)]">
              {title}
            </h1>
            
            {/* メッセージ */}
            <p className="text-center text-gray-600 mb-8">
              現在準備中です。折り返し連絡するので登録して待っていてください。
            </p>

            {/* 登録フォーム */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">名前</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="お名前"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "登録中..." : "登録する"}
              </Button>
            </form>

            {/* 説明文 */}
            <p className="text-center text-sm text-gray-500 mt-6">
              {description}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
