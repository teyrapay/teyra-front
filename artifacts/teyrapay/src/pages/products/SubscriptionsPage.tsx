import { RefreshCw, CreditCard, Bell, BarChart3, Settings, Users } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function SubscriptionsPage() {
  return (
    <MarketingTemplate
      badge="Product · Subscriptions"
      headline="Recurring revenue,\nfully automated"
      subheadline="Build subscription products, manage billing cycles, and recover failed payments — all without writing complex billing code. TeyraPay handles the entire lifecycle."
      highlights={['Smart retry logic', 'Dunning management', 'Proration support', 'Customer portal']}
      features={[
        { icon: RefreshCw, title: 'Flexible billing intervals', desc: 'Daily, weekly, monthly, quarterly, or annual billing. Set custom intervals for any billing cycle your business needs.' },
        { icon: CreditCard, title: 'Smart payment retry', desc: 'When a renewal fails, our smart retry engine attempts again at optimal times — recovering up to 40% of failed charges automatically.' },
        { icon: Bell, title: 'Dunning management', desc: 'Automated email sequences when a payment fails. Customers can update their payment method via a secure self-service link.' },
        { icon: BarChart3, title: 'MRR & churn analytics', desc: 'Track Monthly Recurring Revenue, churn rate, lifetime value, and subscriber growth — all in one dashboard.' },
        { icon: Settings, title: 'Proration & upgrades', desc: 'Customers can upgrade or downgrade mid-cycle. TeyraPay calculates the prorated amount and charges or credits automatically.' },
        { icon: Users, title: 'Customer self-service', desc: 'Give subscribers a branded portal to view invoices, update payment info, and manage their plan — without contacting support.' },
      ]}
    />
  );
}
