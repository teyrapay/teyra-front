import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ahmad Al-Rashidi',
    role: 'CTO, Noon Commerce',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    stars: 5,
    quote: "Orpeaks cut our payment failure rate from 12% to under 2%. The intelligent routing between PSPs is a game-changer for the Saudi market. We went live in under a week.",
  },
  {
    name: 'Fatima Al-Kuwari',
    role: 'Head of Payments, Talabat Gulf',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b75e5b7e?w=80&h=80&fit=crop&crop=face',
    stars: 5,
    quote: "The white-label capability let us launch our own branded checkout experience across UAE, Kuwait, and Qatar. The compliance tooling saved us months of regulatory work.",
  },
  {
    name: 'Omar Hassan',
    role: 'Founder, Manzil Fintech',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    stars: 5,
    quote: "As a fintech startup, we needed PCI-DSS compliance without building it ourselves. Orpeaks gave us that out of the box. The developer API is genuinely a pleasure to use.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Customer Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-syne text-4xl md:text-5xl font-700 text-foreground">
            Trusted by MENA's<br />fastest-growing companies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
