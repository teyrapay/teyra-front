import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const STATS = [
  { label: 'Processing Volume', value: '$2.4B+' },
  { label: 'Success Rate', value: '99.3%' },
  { label: 'Countries Supported', value: '25+' },
  { label: 'API Uptime', value: '99.95%' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Now accepting early access applications
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne text-5xl md:text-7xl lg:text-8xl font-800 text-white leading-none tracking-tight mb-6">
          Payments built
          <br />
          <span className="text-gradient">for the MENA</span>
          <br />
          <span className="text-white/80">region</span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          White-label payment infrastructure with intelligent PSP routing, fraud prevention, 
          and enterprise compliance — built for Saudi Arabia, UAE, and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl text-base glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Early Access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <a href="#developers" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-base font-medium">
            View API Docs →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-10">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-syne text-2xl md:text-3xl font-700 text-white mb-1">{s.value}</div>
              <div className="text-sm text-white/40 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mt-12 opacity-40">
          {['PCI-DSS Compliant', 'SOC 2 Type II', '3D Secure 2.0', 'SAMA Licensed'].map(badge => (
            <div key={badge} className="flex items-center gap-1.5 text-white/80 text-xs font-medium">
              <Shield className="w-3 h-3" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
