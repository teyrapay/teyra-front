import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

const BADGE_LABELS = ['PCI-DSS Compliant', 'SOC 2 Type II', '3D Secure 2.0', 'SAMA Licensed'];

export default function Hero() {
  const { t } = useLanguage();

  const STATS = [
    { label: t.hero.stat1, value: '$2.4B+' },
    { label: t.hero.stat2, value: '99.3%' },
    { label: t.hero.stat3, value: '25+' },
    { label: t.hero.stat4, value: '99.95%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(222,47%,7%)] pt-20">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
          {t.hero.headline1}
          <br />
          <span className="text-gradient">{t.hero.headline2}</span>
          <br />
          <span className="text-white/75">{t.hero.headline3}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/get-started">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl text-base glow transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/25">
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-base font-medium">
              {t.hero.demo}
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-10 mb-12">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-syne text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-white/40 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 opacity-35">
          {BADGE_LABELS.map(badge => (
            <div key={badge} className="flex items-center gap-1.5 text-white text-xs font-medium">
              <Shield className="w-3 h-3" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
