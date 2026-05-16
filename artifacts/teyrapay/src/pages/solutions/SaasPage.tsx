import { RefreshCw, BarChart3, CreditCard, Bell, Users, ArrowRight } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function SaasPage() {
  return (
    <MarketingTemplate
      badge="Solutions · SaaS"
      headline="Subscription infrastructure\nfor MENA SaaS"
      subheadline="MRR tracking, smart dunning, upgrade/downgrade proration, and a customer portal — everything a SaaS business needs to grow recurring revenue reliably."
      highlights={['MRR dashboard', 'Smart retry', 'Proration', 'Self-service portal']}
      features={[
        { icon: RefreshCw, title: 'Recurring billing engine', desc: 'Monthly, annual, or custom intervals. TeyraPay auto-charges on renewal, handles failures with smart retries, and updates your MRR in real time.' },
        { icon: BarChart3, title: 'SaaS metrics dashboard', desc: 'MRR, ARR, churn rate, LTV, ARPU — all calculated automatically. Share a read-only view with your investors.' },
        { icon: CreditCard, title: 'Plan upgrades & downgrades', desc: 'Customers upgrade mid-cycle and only pay the prorated difference. Downgrades take effect at period end. All handled automatically.' },
        { icon: Bell, title: 'Dunning campaigns', desc: 'Smart email sequences when a card fails. Recovery links, payment method update flows, and final cancellation — all configurable.' },
        { icon: Users, title: 'Customer portal', desc: 'A branded self-service portal where subscribers manage their plan, update payment info, and download invoices without contacting support.' },
        { icon: ArrowRight, title: 'Usage-based billing', desc: 'Charge per API call, per seat, or per unit consumed. Report usage via API and TeyraPay calculates the bill at period end.' },
      ]}
    />
  );
}
