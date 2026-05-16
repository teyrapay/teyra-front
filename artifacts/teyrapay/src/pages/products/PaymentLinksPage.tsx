import { Link2, QrCode, Share2, BarChart3, Clock, Globe } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function PaymentLinksPage() {
  return (
    <MarketingTemplate
      badge="Product · Payment Links"
      headline="Share a link. Get paid.\nNo code, no setup."
      subheadline="Create a payment page in seconds and share it via WhatsApp, email, or social media. Perfect for freelancers, service businesses, and one-time collections."
      highlights={['Create in 30 seconds', 'Share via WhatsApp', 'QR code included', 'Expiry dates supported']}
      features={[
        { icon: Link2, title: 'Instant link generation', desc: 'Name it, set the amount (or let customers choose), add an expiry date. Your payment page is live in under a minute.' },
        { icon: QrCode, title: 'QR code included', desc: 'Every payment link comes with a QR code ready to print, embed, or display at your counter — zero extra steps.' },
        { icon: Share2, title: 'Share anywhere', desc: 'Send via WhatsApp, SMS, email, or Instagram. The link opens a fully hosted, mobile-optimized checkout page.' },
        { icon: BarChart3, title: 'Track conversions', desc: 'See how many people viewed your link, how many paid, and the total collected — all in real time from your dashboard.' },
        { icon: Clock, title: 'Expiry & one-time use', desc: 'Set links to expire after a date or after a single use. Great for invoices, event tickets, and time-limited offers.' },
        { icon: Globe, title: 'Multi-currency', desc: 'Set the currency to SAR, AED, KWD, USD, and more. TeyraPay handles FX display automatically.' },
      ]}
    />
  );
}
