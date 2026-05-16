import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Developers', href: '#developers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-syne font-700 text-xl tracking-tight text-foreground">orpeaks</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign in
          </a>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 font-semibold rounded-lg px-4">
            <a href="#waitlist">Get Early Access</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 pb-6 pt-2 space-y-4">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full bg-primary hover:bg-primary/90 font-semibold">
            <a href="#waitlist">Get Early Access</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
