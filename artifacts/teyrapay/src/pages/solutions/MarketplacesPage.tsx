import { Users, ArrowRightLeft, Shield, Banknote, Globe, BarChart3 } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function MarketplacesPage() {
  return (
    <MarketingTemplate
      badge="Solutions · Marketplaces"
      headline="Multi-party payments\nfor platforms and marketplaces"
      subheadline="Collect from buyers, split with sellers, hold in escrow, and pay out on schedule — all through one API. Built for MENA marketplaces that need compliant money movement."
      highlights={['Split payments', 'Escrow support', 'Seller payouts', 'KYC per seller']}
      features={[
        { icon: Users, title: 'Seller onboarding', desc: 'Each seller completes a streamlined KYC/KYB flow powered by TeyraPay. You set the requirements; we collect and verify the documents.' },
        { icon: ArrowRightLeft, title: 'Payment splitting', desc: 'Automatically split each payment between your platform fee and the seller\'s payout. Configurable percentages or fixed amounts per transaction.' },
        { icon: Shield, title: 'Escrow & release', desc: 'Hold funds in escrow until you trigger a release — after order delivery, dispute resolution, or a custom event via API.' },
        { icon: Banknote, title: 'Automated seller payouts', desc: 'Pay sellers on your schedule — daily, weekly, or per transaction. Direct bank transfer to accounts across MENA, with full audit trail.' },
        { icon: Globe, title: 'Multi-currency settlement', desc: 'Buyers pay in their currency, sellers receive in theirs. TeyraPay handles FX and the settlement across SAR, AED, KWD, and more.' },
        { icon: BarChart3, title: 'Platform revenue analytics', desc: 'Track GMV, platform take rate, seller earnings, and dispute rates in a dedicated analytics dashboard.' },
      ]}
    />
  );
}
