import {
  ArrowRightLeft, Shield, Globe, FileText, Webhook, BarChart3, Users, Cpu, Lock
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [ArrowRightLeft, Shield, Globe, FileText, Webhook, BarChart3, Users, Cpu, Lock];
const COLORS = [
  { color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { color: 'text-red-500', bg: 'bg-red-500/10' },
  { color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { color: 'text-pink-500', bg: 'bg-pink-500/10' },
  { color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">{t.features.badge}</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {t.features.headline}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((f, i) => {
            const Icon = ICONS[i]!;
            const { color, bg } = COLORS[i]!;
            return (
              <div key={f.title}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-syne font-bold text-base text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
