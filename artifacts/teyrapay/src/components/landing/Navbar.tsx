import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Zap, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  {
    label: 'Products',
    children: [
      { label: 'Hosted Checkout', desc: 'Beautiful payment pages, zero code', href: '/hosted-checkout' },
      { label: 'Payment Links', desc: 'Share links, collect payments instantly', href: '/payment-links-page' },
      { label: 'Invoicing', desc: 'Create and send professional invoices', href: '/invoicing' },
      { label: 'Subscriptions', desc: 'Recurring billing made simple', href: '/subscriptions-page' },
      { label: 'API', desc: 'Full REST API with SDKs', href: '/api' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'E-commerce', desc: 'Accept payments on your online store', href: '/ecommerce' },
      { label: 'SaaS', desc: 'Recurring revenue infrastructure', href: '/saas' },
      { label: 'Marketplaces', desc: 'Multi-party payment flows', href: '/marketplaces' },
      { label: 'Enterprise', desc: 'White-label & custom contracts', href: '/enterprise' },
    ],
  },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/api' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [location] = useLocation();

  const isHome = location === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome
        ? 'bg-[hsl(222,47%,8%)]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-syne font-bold text-white text-lg tracking-tight">TeyraPay</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          {NAV_LINKS.map(link => (
            <div key={link.label} className="relative group"
              onMouseEnter={() => link.children && setOpenMenu(link.label)}
              onMouseLeave={() => setOpenMenu(null)}>
              <Link href={link.href || '#'}
                className="flex items-center gap-1 px-3 py-2 text-sm text-white/60 hover:text-white transition-colors font-medium rounded-lg hover:bg-white/[0.06]">
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && openMenu === link.label && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-[hsl(222,47%,10%)] border border-white/[0.08] rounded-2xl p-2 shadow-2xl">
                    {link.children.map(child => (
                      <Link key={child.label} href={child.href}
                        className="block px-4 py-3 rounded-xl hover:bg-white/[0.06] transition-colors group/item">
                        <div className="text-sm font-medium text-white group-hover/item:text-primary transition-colors">{child.label}</div>
                        <div className="text-xs text-white/40 mt-0.5">{child.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link href="/signin">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/[0.06] font-medium text-sm h-9 px-4">
              Sign In
            </Button>
          </Link>
          <Link href="/get-started">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-5 h-9 rounded-xl shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden ml-auto text-white/60 hover:text-white transition-colors">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(222,47%,8%)] border-t border-white/[0.08] px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <p className="text-white/25 text-[11px] uppercase tracking-widest font-semibold px-3 py-2">Products</p>
          {NAV_LINKS[0].children?.map(c => (
            <Link key={c.label} href={c.href}
              className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">
              {c.label}
            </Link>
          ))}
          <p className="text-white/25 text-[11px] uppercase tracking-widest font-semibold px-3 py-2 mt-2">Solutions</p>
          {NAV_LINKS[1].children?.map(c => (
            <Link key={c.label} href={c.href}
              className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">
              {c.label}
            </Link>
          ))}
          <div className="border-t border-white/[0.06] mt-3 pt-3 space-y-1">
            <Link href="/pricing" className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">Pricing</Link>
            <Link href="/api" className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">Docs</Link>
          </div>
          <div className="pt-4 flex flex-col gap-2">
            <Link href="/signin">
              <Button variant="outline" className="w-full border-white/10 text-white/70 hover:text-white">Sign In</Button>
            </Link>
            <Link href="/get-started">
              <Button className="w-full bg-primary font-semibold">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
