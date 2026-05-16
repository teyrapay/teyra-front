import { CreditCard, Globe, Shield, Zap, Smartphone, BarChart3 } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function HostedCheckout() {
  return (
    <MarketingTemplate
      badge="Product · Hosted Checkout"
      headline={"A checkout page your\ncustomers will actually finish"}
      subheadline="Beautiful, conversion-optimized payment pages hosted by TeyraPay. No code required. Go live in minutes with support for all major payment methods across MENA."
      highlights={['No code required', 'Mobile optimized', '3DS 2.0 built-in', 'PCI compliant by default']}
      features={[
        { icon: CreditCard, title: 'All payment methods', desc: 'Accept Visa, Mastercard, Mada, KNET, Apple Pay, Google Pay, and bank transfers — configured automatically based on the customer\'s country.' },
        { icon: Globe, title: 'Custom domain & branding', desc: 'Use your own domain (pay.yourstore.com), logo, and colors. Customers never know they left your site.' },
        { icon: Shield, title: 'Fraud prevention built-in', desc: 'Every checkout is protected by our ML fraud engine, velocity checks, and 3D Secure 2.0 with device fingerprinting.' },
        { icon: Zap, title: 'One-click setup', desc: 'Create a checkout session via API, redirect the customer. That\'s it. Our checkout handles everything else.' },
        { icon: Smartphone, title: 'Mobile-first design', desc: 'Optimized for every screen. Average mobile conversion rate improvement of 18% vs self-hosted forms.' },
        { icon: BarChart3, title: 'Conversion analytics', desc: 'Track abandonment rate, payment method preference, and success rate per country — all from your dashboard.' },
      ]}
    />
  );
}
