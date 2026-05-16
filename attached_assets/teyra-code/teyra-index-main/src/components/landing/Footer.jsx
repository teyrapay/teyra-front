import { Zap } from 'lucide-react';

const LINKS = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Status'],
  Developers: ['API Reference', 'SDKs', 'Webhooks', 'Quickstart', 'OpenAPI'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'PCI DSS', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-foreground border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-syne font-700 text-lg text-white">orpeaks</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-48">
              White-label payment infrastructure for the MENA region and beyond.
            </p>
            <div className="flex gap-3 mt-5">
              {['X', 'Li', 'Gh'].map(s => (
                <div key={s} className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/50 hover:text-white text-xs font-mono cursor-pointer transition-colors">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">{group}</div>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© 2025 Orpeaks Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-4 text-white/30 text-xs">
            {['SAMA Licensed', 'PCI-DSS Level 1', 'SOC 2 Type II'].map(b => (
              <span key={b} className="flex items-center gap-1">
                <span className="w-1 h-1 bg-green-500 rounded-full" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
