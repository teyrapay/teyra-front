import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

const PLANS = [
  {
    name: 'Starter', price: '$99', period: '/month', rate: '2.9% + $0.30',
    desc: 'Perfect for growing merchants and early-stage startups.',
    highlight: false, cta: 'Start Free Trial', href: '/get-started',
    features: ['Up to $50,000/month volume', '1 PSP integration', 'Basic fraud rules', 'Hosted checkout', 'Invoice builder', 'Payment links', 'Email support', 'Webhook delivery'],
  },
  {
    name: 'Business', price: '$399', period: '/month', rate: '2.2% + $0.25',
    desc: 'For established businesses with higher volume and compliance needs.',
    highlight: true, cta: 'Get Early Access', href: '/get-started',
    features: ['Up to $500,000/month volume', 'Multi-PSP routing', 'Advanced fraud engine', 'KYC/KYB onboarding', 'Subscriptions & billing', 'PDF invoices + branding', 'Webhook retries & logs', 'Priority support', 'Team management', 'API logs & audit trail'],
  },
  {
    name: 'Enterprise', price: 'Custom', period: '', rate: 'Negotiated',
    desc: 'White-label infrastructure for banks, fintechs, and large platforms.',
    highlight: false, cta: 'Contact Sales', href: '/contact',
    features: ['Unlimited volume', 'Full multi-tenancy', 'White-label branding', 'Custom routing rules', 'Direct acquiring options', 'Dedicated SLA (99.95%)', 'Custom KYC integration', 'On-premise deployment', 'Dedicated account manager', 'Custom contracts & SLAs'],
  },
];

export default function Pricing() {
  const [, setLocation] = useLocation();
  return (
    <section id="pricing" className="py-28 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">Pricing</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground">Transparent, simple pricing</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">No hidden fees. No setup costs. Scale as you grow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-[hsl(222,47%,8%)] border-primary/30 text-white shadow-2xl shadow-primary/10 scale-105'
                  : 'bg-card border-border'
              }`}>
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Zap className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-syne text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className={`font-syne text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-foreground'}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/40' : 'text-muted-foreground'}`}>{plan.period}</span>
                </div>
                <div className={`text-xs mt-1.5 font-medium ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                  Transaction fee: {plan.rate}
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span className={plan.highlight ? 'text-white/75' : 'text-muted-foreground'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full font-semibold rounded-xl ${
                  plan.highlight ? 'bg-primary hover:bg-primary/90 text-white' : ''
                }`}
                variant={plan.highlight ? 'default' : 'outline'}
                onClick={() => setLocation(plan.href)}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
