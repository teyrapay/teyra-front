import { Terminal, Code, Webhook, Key, RefreshCw, Shield } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

const CODE = `// Install the SDK
npm install @teyrapay/node

// Create a payment
const teyrapay = new TeyraPay('sk_live_...');
const payment = await teyrapay.payments.create({
  amount: 4500,          // SAR 45.00
  currency: 'SAR',
  customer_email: 'customer@example.com',
  description: 'Order #4892',
});

console.log(payment.checkout_url);
// → https://checkout.teyrapay.com/pay/cs_...`;

export default function ApiPage() {
  return (
    <MarketingTemplate
      badge="Product · API & Developers"
      headline="An API you'll\nactually enjoy using"
      subheadline="Clean REST API modeled after the best in the industry. Idempotency keys, webhook retries, comprehensive logs, and SDKs for Node.js, Python, and PHP."
      highlights={['REST & webhooks', 'Node, Python, PHP SDKs', 'Idempotency keys', 'Sandbox included']}
      features={[
        { icon: Terminal, title: 'Clean REST API', desc: 'Every resource is consistent, predictable, and well-documented. If you\'ve used Stripe, you\'ll feel right at home.' },
        { icon: Code, title: 'Official SDKs', desc: 'Node.js, Python, and PHP SDKs with full TypeScript types. Installable via npm, pip, or composer.' },
        { icon: Webhook, title: 'Reliable webhooks', desc: 'Signed webhook delivery with exponential backoff retries, full event history, and one-click replay — all visible in the dashboard.' },
        { icon: Key, title: 'Sandbox environment', desc: 'Test with real payment method simulations — success, decline, fraud, 3DS challenge — without touching live money.' },
        { icon: RefreshCw, title: 'Idempotency keys', desc: 'Every mutating request supports idempotency keys. Safely retry failed requests without duplicating charges.' },
        { icon: Shield, title: 'Webhook signatures', desc: 'Every webhook payload is signed with HMAC-SHA256. Verify authenticity in one line using our SDK.' },
      ]}
      body={
        <section className="py-16 bg-secondary/20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-syne text-2xl font-bold text-foreground text-center mb-8">Get up and running in minutes</h2>
            <div className="bg-[hsl(222,47%,8%)] border border-white/[0.08] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.08]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-white/30 text-xs font-mono ml-2">quickstart.js</span>
              </div>
              <pre className="p-6 text-sm font-mono text-white/70 leading-relaxed overflow-x-auto"><code>{CODE}</code></pre>
            </div>
          </div>
        </section>
      }
    />
  );
}
