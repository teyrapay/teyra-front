import { motion } from 'framer-motion';
import {
  Zap, Shield, Globe, BarChart3, Repeat, CreditCard,
  Webhook, FileText, Users, Lock, ArrowRightLeft, Cpu
} from 'lucide-react';

const FEATURES = [
  {
    icon: ArrowRightLeft,
    title: 'Intelligent PSP Routing',
    desc: 'Maximize success rates with rule-based routing across PayTabs, Checkout.com, Moyasar, and HyperPay. Automatic fallback keeps payments flowing.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Real-time Fraud Prevention',
    desc: 'ML-powered fraud scoring, velocity checks, BIN intelligence, and customizable rule engine. Block bad actors before they cost you.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: Globe,
    title: 'White-Label Ready',
    desc: 'Full multi-tenancy with custom domains, branding, and fee structures. Launch your own payment gateway in days, not months.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: FileText,
    title: 'Invoices & Subscriptions',
    desc: 'Built-in invoice builder with PDF export, recurring billing, and payment links. Everything your merchants need in one place.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: Webhook,
    title: 'Webhook Delivery Engine',
    desc: 'Reliable event delivery with exponential backoff retries, full payload logging, and one-click replay for every failed event.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: BarChart3,
    title: 'Settlement Automation',
    desc: 'Nightly settlement batches, rolling reserve management, and real-time balance tracking. Payouts automated, reconciliation effortless.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Users,
    title: 'KYC/KYB Onboarding',
    desc: 'Integrated identity verification via Persona and Onfido. AML screening, PEP checks, and a full compliance review queue.',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Cpu,
    title: 'Developer-First API',
    desc: 'Clean REST API modeled after Stripe. Idempotency keys, cursor pagination, SDKs for Node.js, Python, and PHP.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    desc: 'PCI-DSS compliance via VGS vault, AES-256 encryption at rest, TLS 1.3, and row-level tenant isolation at the database.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Platform Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-syne text-4xl md:text-5xl font-700 text-foreground leading-tight">
            Everything you need to<br />accept payments at scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Built from the ground up for the complexity and compliance requirements of MENA markets.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="font-syne font-700 text-base text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
