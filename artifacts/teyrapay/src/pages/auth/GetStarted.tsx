import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Zap, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GetStarted() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', password: '',
    business: '', country: 'Saudi Arabia', monthly_volume: '',
  });

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 1) { setStep(s => s + 1); return; }
    setLoading(true);
    try {
      await fetch('/api/email/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          country: form.country,
          monthly_volume: form.monthly_volume,
        }),
      });
    } catch {}
    setLoading(false);
    setStep(2);
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-[hsl(222,47%,7%)] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-syne text-3xl font-bold text-white mb-3">{t.getStarted.successTitle}</h1>
          <p className="text-white/50 text-lg mb-8">{t.getStarted.successDesc}</p>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mb-8 text-left space-y-3">
            {t.getStarted.checks.map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-white/60 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Button className="w-full h-12 rounded-xl font-semibold" onClick={() => setLocation('/dashboard')}>
            {t.getStarted.enterDashboard} <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
          </Button>
          <p className="text-white/20 text-xs mt-4">
            {t.getStarted.questions} <span className="text-white/40">onboarding@teyrapay.com</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(222,47%,7%)] flex">
      <div className="hidden lg:flex flex-col w-[420px] flex-shrink-0 bg-[hsl(222,47%,5%)] border-r border-white/[0.06] p-12 justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-syne font-bold text-white text-xl tracking-tight">TeyraPay</span>
        </Link>
        <div className="space-y-6">
          {t.getStarted.perks.map(item => (
            <div key={item.title} className="flex gap-3">
              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold mb-0.5">{item.title}</div>
                <div className="text-white/35 text-xs leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-white/20 text-xs">{t.getStarted.trust}</div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Link href="/" className="lg:hidden flex items-center gap-2.5 mb-10 justify-center">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-syne font-bold text-white text-lg">TeyraPay</span>
          </Link>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {t.getStarted.steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  i < step ? 'bg-primary text-white' :
                  i === step ? 'bg-primary/20 border border-primary text-primary' :
                  'bg-white/[0.05] text-white/25'
                }`}>
                  {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className={`text-xs font-medium ${i <= step ? 'text-white/60' : 'text-white/20'}`}>{s}</span>
                {i < t.getStarted.steps.length - 1 && <div className={`flex-1 h-px ${i < step ? 'bg-primary/40' : 'bg-white/[0.06]'}`} />}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h1 className="font-syne text-2xl font-bold text-white mb-1">
              {step === 0 ? t.getStarted.step0Title : t.getStarted.step1Title}
            </h1>
            <p className="text-white/35 text-sm">
              {step === 0 ? t.getStarted.step0Sub : t.getStarted.step1Sub}
            </p>
          </div>

          <form onSubmit={handleNext} className="space-y-4">
            {step === 0 && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-white/60 text-sm">{t.getStarted.name}</Label>
                  <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={t.getStarted.namePh} required
                    className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl focus:border-primary transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/60 text-sm">{t.getStarted.email}</Label>
                  <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder={t.getStarted.emailPh} required
                    className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl focus:border-primary transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/60 text-sm">{t.getStarted.password}</Label>
                  <Input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder={t.getStarted.passwordPh} required minLength={8}
                    className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl focus:border-primary transition-colors" />
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div className="space-y-1.5">
                  <Label className="text-white/60 text-sm">{t.getStarted.business}</Label>
                  <Input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })}
                    placeholder={t.getStarted.businessPh} required
                    className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl focus:border-primary transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/60 text-sm">{t.getStarted.country}</Label>
                  <Select value={form.country} onValueChange={v => setForm({ ...form, country: v })}>
                    <SelectTrigger className="bg-white/[0.05] border-white/10 text-white h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {['Saudi Arabia', 'UAE', 'Kuwait', 'Bahrain', 'Qatar', 'Egypt', 'Jordan'].map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/60 text-sm">{t.getStarted.volume}</Label>
                  <Select value={form.monthly_volume} onValueChange={v => setForm({ ...form, monthly_volume: v })}>
                    <SelectTrigger className="bg-white/[0.05] border-white/10 text-white h-11 rounded-xl">
                      <SelectValue placeholder={t.getStarted.volumePh} />
                    </SelectTrigger>
                    <SelectContent>
                      {['Under $10K', '$10K – $50K', '$50K – $200K', '$200K – $1M', 'Over $1M'].map(v => (
                        <SelectItem key={v} value={v}>{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            <Button type="submit" className="w-full h-12 rounded-xl font-semibold mt-2 shadow-lg shadow-primary/20" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t.getStarted.submitting}
                </span>
              ) : step < 1 ? (
                <span className="flex items-center gap-2">{t.getStarted.continue} <ArrowRight className="w-4 h-4 rtl:rotate-180" /></span>
              ) : (
                <span className="flex items-center gap-2">{t.getStarted.submit} <ArrowRight className="w-4 h-4 rtl:rotate-180" /></span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-white/30 text-sm">{t.getStarted.haveAccount} </span>
            <Link href="/signin" className="text-primary text-sm font-medium hover:underline">{t.getStarted.signinLink}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
