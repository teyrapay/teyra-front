import { motion } from 'framer-motion';
import { Terminal, Book, Package, Webhook } from 'lucide-react';

const CARDS = [
  { icon: Terminal, title: 'REST API', desc: 'Clean, versioned REST API with idempotency, cursor pagination, and consistent error codes.' },
  { icon: Book, title: 'OpenAPI Docs', desc: 'Full OpenAPI 3.0 specification. Interactive docs at api.orpeaks.com/docs.' },
  { icon: Package, title: 'Official SDKs', desc: 'Native SDKs for Node.js, Python, PHP, and mobile (iOS/Android) with type safety.' },
  { icon: Webhook, title: 'Webhooks', desc: 'Reliable event delivery with retries, full payload logging, and signature verification.' },
];

const ENDPOINTS = [
  { method: 'POST', path: '/v1/payment_intents', desc: 'Create payment intent' },
  { method: 'POST', path: '/v1/payment_intents/:id/confirm', desc: 'Confirm & charge' },
  { method: 'POST', path: '/v1/refunds', desc: 'Issue full or partial refund' },
  { method: 'GET', path: '/v1/balance', desc: 'Real-time balance snapshot' },
  { method: 'POST', path: '/v1/invoices', desc: 'Create & send invoice' },
  { method: 'GET', path: '/v1/payouts', desc: 'List settlement payouts' },
];

const methodColor = { GET: 'text-green-400', POST: 'text-blue-400', DELETE: 'text-red-400' };

export default function Developers() {
  return (
    <section id="developers" className="py-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Developers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-syne text-4xl md:text-5xl font-700 text-white">
            Built for engineers,<br />loved by teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 max-w-xl mx-auto">
            A familiar API surface with the MENA-specific features you actually need.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: cards */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {CARDS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div key={c.title}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="p-5 glass rounded-2xl border border-white/10 hover:border-primary/40 transition-all">
                    <Icon className="w-5 h-5 text-primary mb-3" />
                    <div className="text-sm font-semibold text-white mb-1">{c.title}</div>
                    <div className="text-xs text-white/40 leading-relaxed">{c.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: endpoint list */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-white/40 text-xs font-mono">Core Endpoints</span>
              </div>
              <div className="divide-y divide-white/5">
                {ENDPOINTS.map((ep, i) => (
                  <motion.div key={ep.path}
                    initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }}
                    className="px-5 py-3.5 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <span className={`font-mono text-xs font-bold w-12 ${methodColor[ep.method] || 'text-white'}`}>
                      {ep.method}
                    </span>
                    <span className="font-mono text-xs text-white/70 flex-1">{ep.path}</span>
                    <span className="text-xs text-white/30 hidden sm:block">{ep.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-white/30 text-xs mt-4 text-center">50+ endpoints across payments, invoices, subscriptions, and payouts</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
