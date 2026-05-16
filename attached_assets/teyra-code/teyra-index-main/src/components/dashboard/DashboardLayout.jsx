import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, ArrowLeftRight, FileText, Banknote,
  Key, Settings, Menu, X, Zap, ChevronRight, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV = [
  { label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Transactions', icon: ArrowLeftRight, path: '/dashboard/transactions' },
  { label: 'Invoices', icon: FileText, path: '/dashboard/invoices' },
  { label: 'Payouts', icon: Banknote, path: '/dashboard/payouts' },
  { label: 'API Keys', icon: Key, path: '/dashboard/api-keys' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

function Sidebar({ open, onClose }) {
  const location = useLocation();
  return (
    <>
      {/* Overlay (mobile) */}
      {open && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onClose} />}

      <aside className={`
        fixed top-0 left-0 h-full w-60 bg-foreground border-r border-white/10 z-40 flex flex-col
        transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-white/10">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-syne font-700 text-white text-lg">orpeaks</span>
          <button onClick={onClose} className="ml-auto text-white/40 hover:text-white lg:hidden">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Environment badge */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-2">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
            <span className="text-yellow-400 text-xs font-semibold">Test Mode</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
          {NAV.map(item => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-primary text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/8'
                }`}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
                {active && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: user */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-xs font-bold">M</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">My Store</div>
              <div className="text-xs text-white/30 truncate">merchant@store.sa</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-background border-b border-border flex items-center px-6 gap-4 flex-shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-muted-foreground hover:text-foreground">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary rounded-full" />
          </Button>
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← Back to site
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
