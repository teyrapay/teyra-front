import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-28 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">Early Access</span>
        <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-4">
          Be first to go live
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Join 400+ merchants on the waitlist. Early access includes 3 months free on the Business plan and dedicated onboarding support.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <p className="text-foreground font-semibold">You're on the list! We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 h-12 rounded-xl text-base"
              required
            />
            <Button type="submit" size="lg" className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              Join Waitlist <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}
        <p className="text-xs text-muted-foreground mt-4">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
