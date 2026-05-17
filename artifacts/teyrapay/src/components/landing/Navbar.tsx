import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Zap, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [location] = useLocation();

  const isHome = location === '/';

  const NAV_LINKS = [
    {
      label: t.nav.products,
      children: [
        { label: t.nav.hostedCheckout, desc: t.nav.hostedCheckoutDesc, href: '/hosted-checkout' },
        { label: t.nav.paymentLinks, desc: t.nav.paymentLinksDesc, href: '/payment-links-page' },
        { label: t.nav.invoicing, desc: t.nav.invoicingDesc, href: '/invoicing' },
        { label: t.nav.subscriptions, desc: t.nav.subscriptionsDesc, href: '/subscriptions-page' },
        { label: t.nav.api, desc: t.nav.apiDesc, href: '/docs' },
      ],
    },
    {
      label: t.nav.solutions,
      children: [
        { label: t.nav.ecommerce, desc: t.nav.ecommerceDesc, href: '/ecommerce' },
        { label: t.nav.saas, desc: t.nav.saasDesc, href: '/saas' },
        { label: t.nav.marketplaces, desc: t.nav.marketplacesDesc, href: '/marketplaces' },
        { label: t.nav.enterprise, desc: t.nav.enterpriseDesc, href: '/enterprise' },
      ],
    },
    { label: t.nav.pricing, href: '/#pricing' },
    { label: t.nav.docs, href: '/docs' },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

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

        {/* CTA buttons + Language switcher */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors border border-white/[0.08]"
            title={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <Link href="/signin">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/[0.06] font-medium text-sm h-9 px-4">
              {t.nav.signin}
            </Button>
          </Link>
          <Link href="/get-started">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-5 h-9 rounded-xl shadow-lg shadow-primary/20">
              {t.nav.getStarted}
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
          <p className="text-white/25 text-[11px] uppercase tracking-widest font-semibold px-3 py-2">{t.nav.products}</p>
          {NAV_LINKS[0].children?.map(c => (
            <Link key={c.label} href={c.href}
              className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">
              {c.label}
            </Link>
          ))}
          <p className="text-white/25 text-[11px] uppercase tracking-widest font-semibold px-3 py-2 mt-2">{t.nav.solutions}</p>
          {NAV_LINKS[1].children?.map(c => (
            <Link key={c.label} href={c.href}
              className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">
              {c.label}
            </Link>
          ))}
          <div className="border-t border-white/[0.06] mt-3 pt-3 space-y-1">
            <Link href="/#pricing" className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">{t.nav.pricing}</Link>
            <Link href="/docs" className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors font-medium">{t.nav.docs}</Link>
          </div>
          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="w-full flex items-center justify-center gap-2 py-2 border border-white/10 rounded-xl text-white/50 text-sm hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <Link href="/signin">
              <Button variant="outline" className="w-full border-white/10 text-white/70 hover:text-white">{t.nav.signin}</Button>
            </Link>
            <Link href="/get-started">
              <Button className="w-full bg-primary font-semibold">{t.nav.getStarted}</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
