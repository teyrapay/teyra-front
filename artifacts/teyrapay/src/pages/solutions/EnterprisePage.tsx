import { Building2, Shield, Globe, Users, Cpu, Banknote } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function EnterprisePage() {
  return (
    <MarketingTemplate
      badge="Solutions · Enterprise"
      headline="White-label payment\ninfrastructure at scale"
      subheadline="Launch your own payment gateway. Full multi-tenancy, custom branding, direct acquiring options, and 99.95% uptime SLA. For banks, fintechs, and large platforms."
      ctaText="Contact Sales"
      ctaHref="/contact"
      highlights={['White-label ready', 'On-premise option', 'Custom SLA', 'Dedicated team']}
      features={[
        { icon: Building2, title: 'Full white-labeling', desc: 'Your brand, your domain, your product. TeyraPay runs entirely behind the scenes. Merchants and customers see only your platform.' },
        { icon: Shield, title: 'Dedicated compliance', desc: 'SAMA licensing support, PCIDSS Level 1 infrastructure, AML/CFT screening, and a dedicated compliance officer for enterprise accounts.' },
        { icon: Globe, title: 'Custom acquiring', desc: 'Access direct acquiring relationships with Visa and Mastercard through TeyraPay\'s principal membership — without your own acquiring license.' },
        { icon: Users, title: 'Multi-tenant architecture', desc: 'Manage thousands of sub-merchants under one umbrella account. Custom fee structures, routing rules, and settlement schedules per tenant.' },
        { icon: Cpu, title: 'On-premise deployment', desc: 'For banks and regulated entities with strict data residency requirements, we offer a fully on-premise deployment within your own infrastructure.' },
        { icon: Banknote, title: 'Custom contracts', desc: 'Volume-based pricing, MSA with custom terms, dedicated account manager, and a 99.95% uptime SLA with financial penalties.' },
      ]}
    />
  );
}
