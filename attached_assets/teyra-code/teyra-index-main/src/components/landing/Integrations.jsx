import { motion } from 'framer-motion';

const PSPS = [
  { name: 'PayTabs', region: 'MENA', logo: '🔵' },
  { name: 'Checkout.com', region: 'Global', logo: '⬛' },
  { name: 'Moyasar', region: 'Saudi Arabia', logo: '🟢' },
  { name: 'HyperPay', region: 'MENA', logo: '🟣' },
  { name: 'Visa', region: 'Global', logo: '💳' },
  { name: 'Mastercard', region: 'Global', logo: '🔴' },
  { name: 'Mada', region: 'Saudi Arabia', logo: '🇸🇦' },
  { name: 'KNET', region: 'Kuwait', logo: '🇰🇼' },
  { name: 'Apple Pay', region: 'Global', logo: '🍎' },
  { name: 'Google Pay', region: 'Global', logo: '🔍' },
  { name: 'Amex', region: 'Global', logo: '💙' },
  { name: 'stc pay', region: 'Saudi Arabia', logo: '📱' },
];

const CODE = `// Initialize Orpeaks
const orpeaks = new Orpeaks('pk_live_...');

// Create payment intent
const intent = await orpeaks.paymentIntents.create({
  amount: 15000,       // 150 SAR (minor units)
  currency: 'SAR',
  description: 'Order #1042',
});

// Confirm payment
const result = await orpeaks.confirmPayment({
  elements,
  confirmParams: {
    return_url: 'https://yoursite.com/success',
  },
});`;

export default function Integrations() {
  return (
    <section id="integrations" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Integrations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-syne text-4xl md:text-5xl font-700 text-foreground">
            Connected to every<br />payment network
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* PSP Grid */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="grid grid-cols-3 gap-4">
            {PSPS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="group p-4 bg-card border border-border rounded-xl text-center hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-2">{p.logo}</div>
                <div className="font-medium text-xs text-foreground">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{p.region}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Code block */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <h3 className="font-syne text-2xl font-700 text-foreground mb-3">Integrate in minutes</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Our API is designed to feel familiar if you've used Stripe. 
              Clean, consistent, and well-documented — go live faster.
            </p>
            <div className="bg-foreground rounded-2xl overflow-hidden border border-border">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-white/30 text-xs font-mono">checkout.js</span>
              </div>
              <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto">
                <code>
                  {CODE.split('\n').map((line, i) => {
                    const isComment = line.trim().startsWith('//');
                    const isKey = line.includes('pk_live');
                    return (
                      <div key={i}>
                        <span className={isComment ? 'text-white/30' : isKey ? 'text-yellow-300' : 'text-green-300'}>
                          {line}
                        </span>
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
