import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import {
  LayoutDashboard, ArrowLeftRight, FileText, Banknote,
  Key, Settings, Menu, X, Zap, ChevronRight, Bell,
  Link2, Users, RefreshCw, BarChart3, Terminal
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV = [
  { label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Transactions', icon: ArrowLeftRight, path: '/transactions' },
  { label: 'Payment Links', icon: Link2, path: '/payment-links' },
  { label: 'Invoices', icon: FileText, path: '/invoices' },
  { label: 'Subscriptions', icon: RefreshCw, path: '/subscriptions' },
  { label: 'Customers', icon: Users, path: '/customers' },
  { label: 'Payouts', icon: Banknote, path: '/payouts' },
  { label: 'Reports', icon: BarChart3, path: '/reports' },
  { label: 'Developers', icon: Terminal, path: '/developers' },
  { label: 'API Keys', icon: Key, path: '/api-keys' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [location] = useLocation();

  const getDashPath = (path: string) => path;

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={onClose} />}
      <aside className={`
        fixed top-0 left-0 h-full w-60 z-40 flex flex-col
        bg-[hsl(222,47%,8%)] border-r border-white/[0.07]
        transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-white/[0.07]">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-syne font-bold text-white text-lg tracking-tight">TeyraPay</span>
          <button onClick={onClose} className="ml-auto text-white/30 hover:text-white lg:hidden transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 py-3">
          <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-3 py-2">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
            <span className="text-yellow-400 text-xs font-semibold">Test Mode</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-1 space-y-0.5 overflow-y-auto">
          {NAV.map(item => {
            const Icon = item.icon;
            const active = location === getDashPath(item.path);
            return (
              <Link key={item.path} href={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-primary text-white shadow-sm shadow-primary/20'
                    : 'text-white/45 hover:text-white hover:bg-white/[0.07]'
                }`}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
                {active && <ChevronRight className="w-3 h-3 ml-auto opacity-50" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/[0.07]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-xs font-bold">T</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">My Store</div>
              <div className="text-[11px] text-white/30 truncate">merchant@store.sa</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-background border-b border-border flex items-center px-6 gap-4 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary rounded-full" />
          </Button>
          <a href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← Back to site
          </a>
        </header>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
