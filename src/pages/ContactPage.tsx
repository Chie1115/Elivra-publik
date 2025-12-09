import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setFeedback("Vänligen fyll i namn, e-post och meddelande.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      // Placeholder: simulate an async send
      await new Promise((r) => setTimeout(r, 1200));
      setFeedback("Tack! Vi återkommer så snart som möjligt.");
      setForm({ name: "", email: "", organization: "", message: "" });
    } catch (err) {
      setFeedback("Ett fel uppstod. Försök igen senare.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar: logo and För privat button */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="text-4xl font-semibold text-[oklch(0.58_0.09_220)] tracking-tight cursor-pointer">
            Elivra
          </button>

          <div>
            <Button className="bg-[#FF9966] hover:bg-[#FF8844] text-white" onClick={() => navigate('/')}>För privat</Button>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Back arrow in top left of main content */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Tillbaka"
          className="mb-6 p-2 rounded-md hover:bg-gray-100 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
          <span className="text-sm text-gray-700">Tillbaka</span>
        </button>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
          <p className="text-gray-600 mb-6">Fyll i formuläret nedan så återkommer vi inom kort.</p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Namn</Label>
                <Input id="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">E‑post</Label>
                <Input id="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <Label htmlFor="organization">Organisation (valfritt)</Label>
              <Input id="organization" value={form.organization} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="message">Meddelande</Label>
              <Textarea id="message" value={form.message} onChange={handleChange} required />
            </div>

            {feedback && (
              <p className={`text-sm ${feedback.startsWith("Tack") ? "text-green-600" : "text-red-600"}`}>{feedback}</p>
            )}

            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="bg-[#FF9966] hover:bg-[#FF8844] text-white">
                {isSubmitting ? "Skickar..." : "Skicka meddelande"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
