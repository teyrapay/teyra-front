import { Zap } from 'lucide-react';
import { Link } from 'wouter';

const LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: 'Hosted Checkout', href: '/hosted-checkout' },
    { label: 'Payment Links', href: '/payment-links-page' },
    { label: 'Invoicing', href: '/invoicing' },
    { label: 'Subscriptions', href: '/subscriptions-page' },
    { label: 'API', href: '/api' },
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
              Modern payment infrastructure for MENA businesses.
            </p>
            <div className="flex gap-3 mt-6">
              {['PCI', 'SOC2', 'SAMA'].map(badge => (
                <span key={badge} className="text-[10px] font-bold text-white/30 border border-white/10 px-2 py-1 rounded-md">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/35 text-sm hover:text-white/70 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">© 2026 TeyraPay. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/20 text-xs hover:text-white/40 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/20 text-xs hover:text-white/40 transition-colors">Terms</Link>
            <p className="text-white/25 text-xs">Built for MENA · Regulated · Secure</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
