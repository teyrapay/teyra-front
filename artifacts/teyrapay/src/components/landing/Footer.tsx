import { Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

const LINK_MAP: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: 'Hosted Checkout', href: '/hosted-checkout' },
    { label: 'Payment Links', href: '/payment-links-page' },
    { label: 'Invoicing', href: '/invoicing' },
    { label: 'Subscriptions', href: '/subscriptions-page' },
    { label: 'API', href: '/docs' },
  ],
  Solutions: [
    { label: 'E-commerce', href: '/ecommerce' },
    { label: 'SaaS', href: '/saas' },
    { label: 'Marketplaces', href: '/marketplaces' },
    { label: 'Enterprise', href: '/enterprise' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Status', href: '/status' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'PCI Compliance', href: '/pci' },
    { label: 'AML Policy', href: '/aml' },
  ],
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(222,47%,6%)] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-syne font-bold text-white text-lg">TeyraPay</span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3 mt-6">
              {['PCI', 'SOC2', 'SAMA'].map(badge => (
                <span key={badge} className="text-[10px] font-bold text-white/30 border border-white/10 px-2 py-1 rounded-md">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(LINK_MAP).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-sm mb-4">
                {t.footer.categories[category as keyof typeof t.footer.categories]}
              </h3>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/35 text-sm hover:text-white/70 transition-colors">
                      {t.footer.links[item.label as keyof typeof t.footer.links] ?? item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/20 text-xs hover:text-white/40 transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="text-white/20 text-xs hover:text-white/40 transition-colors">{t.footer.terms}</Link>
            <p className="text-white/25 text-xs">{t.footer.tagline2}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
