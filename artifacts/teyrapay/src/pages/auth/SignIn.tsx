import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Zap, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SignIn() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) { setError(t.signin.error); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setLocation('/dashboard'); }, 900);
  };

  const s = t.signin;

  return (
    <div className="min-h-screen bg-[hsl(222,47%,7%)] flex">
      <div className="hidden lg:flex flex-col w-[480px] flex-shrink-0 bg-[hsl(222,47%,5%)] border-r border-white/[0.06] p-12 justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-syne font-bold text-white text-xl tracking-tight">TeyraPay</span>
        </Link>
        <div>
          <blockquote className="text-white/50 text-lg leading-relaxed italic mb-6">
            "TeyraPay cut our checkout abandonment by 23% and the multi-PSP routing is genuinely smart."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">A</span>
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Ahmed Al-Rashidi</div>
              <div className="text-white/40 text-xs">CTO, Gulf Commerce</div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          {['PCI-DSS', 'SOC 2', 'SAMA'].map(b => (
            <span key={b} className="text-[10px] font-bold text-white/30 border border-white/10 px-2.5 py-1 rounded-md">{b}</span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <Link href="/" className="lg:hidden flex items-center gap-2.5 mb-10 justify-center">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-syne font-bold text-white text-lg">TeyraPay</span>
          </Link>

          <div className="mb-8">
            <h1 className="font-syne text-3xl font-bold text-white mb-2">{s.title}</h1>
            <p className="text-white/40">{s.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}
            <div className="space-y-1.5">
              <Label className="text-white/60 text-sm">{s.email}</Label>
              <Input type="email" placeholder={s.emailPh} value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:border-primary focus:bg-white/[0.07] transition-colors" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-white/60 text-sm">{s.password}</Label>
                <a href="#" className="text-xs text-primary hover:underline">{s.forgot}</a>
              </div>
              <div className="relative">
                <Input type={showPw ? 'text' : 'password'} placeholder={s.passwordPh} value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl pr-11 focus:border-primary focus:bg-white/[0.07] transition-colors" />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl font-semibold text-base shadow-lg shadow-primary/20" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {s.signingIn}
                </span>
              ) : (
                <span className="flex items-center gap-2">{s.cta} <ArrowRight className="w-4 h-4 rtl:rotate-180" /></span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-white/30 text-sm">{s.noAccount} </span>
            <Link href="/get-started" className="text-primary text-sm font-medium hover:underline">{s.getStartedLink}</Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/[0.06] text-center">
            <p className="text-white/20 text-xs">
              {s.agree}{' '}
              <Link href="/terms" className="text-white/40 hover:text-white/60">{s.terms}</Link>
              {' '}{s.and}{' '}
              <Link href="/privacy" className="text-white/40 hover:text-white/60">{s.privacyPolicy}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
