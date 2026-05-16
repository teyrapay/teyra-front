import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const STATS = [
  { label: 'Processing Volume', value: '$2.4B+' },
  { label: 'Success Rate', value: '99.3%' },
  { label: 'Countries', value: '25+' },
  { label: 'API Uptime', value: '99.95%' },
];

const BADGES = ['PCI-DSS Compliant', 'SOC 2 Type II', '3D Secure 2.0', 'SAMA Licensed'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(222,47%,7%)] pt-20">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Now accepting early access applications
        </div>

        <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
          Payments built
          <br />
          <span className="text-gradient">for the MENA</span>
          <br />
          <span className="text-white/75">region</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          White-label payment infrastructure with intelligent PSP routing, fraud prevention,
          and enterprise compliance — built for Saudi Arabia, UAE, and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/get-started">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl text-base glow transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/25">
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-base font-medium">
              View Dashboard Demo →
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
          {BADGES.map(badge => (
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
