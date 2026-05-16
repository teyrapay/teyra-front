import { ShoppingCart, ArrowRightLeft, Globe, Shield, Zap, BarChart3 } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function EcommercePage() {
  return (
    <MarketingTemplate
      badge="Solutions · E-commerce"
      headline="The payment layer your\nonline store deserves"
      subheadline="From checkout to refunds to settlements — TeyraPay handles every payment touchpoint for your e-commerce business. Built for high-volume merchants across MENA."
      highlights={['One-click checkout', 'Smart refunds', 'Multi-currency', 'Fraud protection']}
      features={[
        { icon: ShoppingCart, title: 'Optimized checkout', desc: 'Reduce cart abandonment with a fast, mobile-first checkout that remembers returning customers and supports all local payment methods.' },
        { icon: ArrowRightLeft, title: 'Instant refunds', desc: 'Issue full or partial refunds in one click. Funds return to the customer in 2–5 business days, with automatic reconciliation.' },
        { icon: Globe, title: 'Sell across MENA', desc: 'Accept payments in SAR, AED, KWD, BHD, QAR, and USD. Automatically show the right payment methods per country.' },
        { icon: Shield, title: 'Fraud prevention', desc: 'ML-powered fraud scoring, 3DS 2.0, BIN intelligence, and configurable block rules keep chargebacks under 0.1%.' },
        { icon: Zap, title: 'PSP auto-routing', desc: 'Failed on Checkout.com? Automatically retry via PayTabs. Maximize success rate without changing a line of code.' },
        { icon: BarChart3, title: 'Revenue analytics', desc: 'Track GMV, refund rates, success by payment method, and top countries — with daily CSV settlement reports.' },
      ]}
    />
  );
}
