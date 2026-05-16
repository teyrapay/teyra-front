import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    company_name: '',
    country: '',
    monthly_volume: '',
    use_case: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) return;
    setLoading(true);
    await base44.entities.WaitlistSignup.create({ ...form, status: 'pending' });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.4 }}>
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="font-syne text-2xl font-700 text-white mb-2">You're on the list!</h3>
        <p className="text-white/50 text-sm max-w-sm mx-auto">
          We'll reach out to <strong className="text-white">{form.email}</strong> as soon as your account is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {step === 1 ? (
        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <Input
            type="email"
            placeholder="Work email address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:border-primary"
          />
          <Input
            placeholder="Company name"
            value={form.company_name}
            onChange={e => setForm({ ...form, company_name: e.target.value })}
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:border-primary"
          />
          <Button type="button" onClick={() => form.email && setStep(2)}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl text-base transition-all hover:scale-[1.02]">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      ) : (
        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <Select onValueChange={v => setForm({ ...form, country: v })}>
            <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {['Saudi Arabia', 'UAE', 'Kuwait', 'Bahrain', 'Qatar', 'Egypt', 'Jordan', 'Other'].map(c => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={v => setForm({ ...form, monthly_volume: v })}>
            <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
              <SelectValue placeholder="Monthly processing volume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_10k">Under $10,000</SelectItem>
              <SelectItem value="10k_100k">$10,000 – $100,000</SelectItem>
              <SelectItem value="100k_1m">$100,000 – $1,000,000</SelectItem>
              <SelectItem value="over_1m">Over $1,000,000</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={v => setForm({ ...form, use_case: v })}>
            <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
              <SelectValue placeholder="Primary use case" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="saas">SaaS / Software</SelectItem>
              <SelectItem value="marketplace">Marketplace</SelectItem>
              <SelectItem value="fintech">Fintech / Banking</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" disabled={loading}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl text-base transition-all hover:scale-[1.02]">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Request Early Access <ArrowRight className="w-4 h-4 ml-2" /></>}
          </Button>
          <button type="button" onClick={() => setStep(1)} className="text-sm text-white/40 hover:text-white/70 transition-colors w-full text-center">
            ← Back
          </button>
        </motion.div>
      )}
    </form>
  );
}
