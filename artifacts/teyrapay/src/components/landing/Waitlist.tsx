import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Waitlist() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/email/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-28 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">{t.waitlist.badge}</span>
        <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t.waitlist.headline}
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          {t.waitlist.subtitle}
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <p className="text-foreground font-semibold">{t.waitlist.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t.waitlist.placeholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 h-12 rounded-xl text-base"
              required
            />
            <Button type="submit" size="lg" disabled={loading} className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              {t.waitlist.cta} <ArrowRight className="w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0 rtl:rotate-180" />
            </Button>
          </form>
        )}
        <p className="text-xs text-muted-foreground mt-4">{t.waitlist.fine}</p>
      </div>
    </section>
  );
}
