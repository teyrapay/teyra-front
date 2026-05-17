import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CODE_EXAMPLE = `// Create a payment with TeyraPay API
const payment = await teyrapay.payments.create({
  amount: 4500,
  currency: 'SAR',
  payment_method: {
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 12,
      exp_year: 2027,
      cvc: '123',
    },
  },
  customer: {
    email: 'customer@example.com',
    name: 'Ahmed Al-Rashid',
  },
  metadata: {
    order_id: 'ORD-2026-4892',
  },
});

console.log(payment.status); // 'succeeded'
console.log(payment.id);     // 'pay_1a2b3c4d5e6f'`;

export default function Developers() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CODE_EXAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="py-28 bg-[hsl(222,47%,7%)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">{t.developers.badge}</span>
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-6 whitespace-pre-line">
              {t.developers.headline}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              {t.developers.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {t.developers.cards.map(item => (
                <div key={item.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                  <div className="font-syne font-bold text-white text-sm mb-0.5">{item.label}</div>
                  <div className="text-white/40 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
            <a href="/docs" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              <Terminal className="w-4 h-4" />
              {t.developers.docsLink}
            </a>
          </div>

          <div className="bg-[hsl(222,47%,5%)] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-white/30 text-xs font-mono ml-2">create-payment.js</span>
              </div>
              <button onClick={copy} className="text-white/30 hover:text-white/70 transition-colors">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <pre className="p-5 text-xs font-mono text-white/70 leading-relaxed overflow-x-auto">
              <code>{CODE_EXAMPLE}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
