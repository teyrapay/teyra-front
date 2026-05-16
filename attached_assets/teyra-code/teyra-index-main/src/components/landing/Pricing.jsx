import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PLANS = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    desc: 'Perfect for growing merchants and early-stage startups.',
    highlight: false,
    cta: 'Start Free Trial',
    rate: '2.9% + $0.30',
    features: [
      'Up to $50,000/month volume',
      '1 PSP integration',
      'Basic fraud rules',
      'Hosted checkout',
      'Invoice builder',
      'Payment links',
      'Email support',
      'Webhook delivery',
    ],
  },
  {
    name: 'Business',
    price: '$399',
    period: '/month',
    desc: 'For established businesses with higher volume and compliance needs.',
    highlight: true,
    cta: 'Get Early Access',
    rate: '2.2% + $0.25',
    features: [
      'Up to $500,000/month volume',
      'Multi-PSP routing',
      'Advanced fraud engine',
      'KYC/KYB onboarding',
      'Subscriptions & billing',
      'PDF invoices + branding',
      'Webhook retries & logs',
      'Priority support',
      'Team management',
      'API logs & audit trail',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'White-label infrastructure for banks, fintechs, and large platforms.',
    highlight: false,
    cta: 'Contact Sales',
    rate: 'Negotiated',
    features: [
      'Unlimited volume',
      'Full multi-tenancy',
      'White-label branding',
      'Custom routing rules',
      'Direct acquiring options',
      'Dedicated SLA (99.95%)',
      'Custom KYC integration',
      'On-premise deployment',
      'Dedicated account manager',
      'Custom contracts & SLAs',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-syne text-4xl md:text-5xl font-700 text-foreground">
            Transparent, simple pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-lg mx-auto">
            No hidden fees. No setup costs. Scale as you grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-foreground border-foreground text-primary-foreground shadow-2xl scale-105'
                  : 'bg-card border-border'
              }`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-syne text-xl font-700 mb-1 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className={`font-syne text-4xl font-800 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <div className={`text-xs mt-2 font-medium ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                  Transaction fee: {plan.rate}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-primary' : 'text-primary'}`} />
                    <span className={plan.highlight ? 'text-white/80' : 'text-muted-foreground'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold rounded-xl py-3 ${
                  plan.highlight
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'border border-border bg-background hover:bg-secondary text-foreground'
                }`}
                variant={plan.highlight ? 'default' : 'outline'}
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
