import { useState } from 'react';
import { Plus, RefreshCw, Pause, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_SUBSCRIPTIONS } from '@/lib/mockData';

export default function Subscriptions() {
  const [search, setSearch] = useState('');
  const subs = MOCK_SUBSCRIPTIONS;

  const active = subs.filter(s => s.status === 'active');
  const mrr = active.filter(s => s.interval === 'monthly').reduce((sum, s) => sum + s.amount, 0)
    + active.filter(s => s.interval === 'yearly').reduce((sum, s) => sum + s.amount / 12, 0);

  const filtered = subs.filter(s =>
    !search ||
    s.customer_name.toLowerCase().includes(search.toLowerCase()) ||
    s.plan_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground text-sm mt-1">Recurring billing and subscriber management</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> New Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Monthly Recurring Revenue', value: `$${Math.round(mrr).toLocaleString()}`, sub: 'MRR', color: 'text-emerald-600' },
          { label: 'Active Subscribers', value: active.length, sub: 'subscriptions', color: 'text-blue-600' },
          { label: 'Cancelled (30d)', value: subs.filter(s => s.status === 'cancelled').length, sub: 'churn', color: 'text-red-600' },
        ].map(card => (
          <div key={card.label} className="bg-card border border-border rounded-2xl p-5">
            <div className={`text-2xl font-syne font-bold ${card.color} mb-1`}>{card.value}</div>
            <div className="text-xs text-foreground font-medium">{card.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search subscribers..." className="pl-9 h-9 rounded-xl"
          value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Subscriber</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Plan</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Interval</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Next Billing</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(sub => (
                <tr key={sub.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="font-medium text-foreground text-sm">{sub.customer_name}</div>
                    <div className="text-xs text-muted-foreground">{sub.customer_email}</div>
                  </td>
                  <td className="px-6 py-3.5 text-sm text-foreground">{sub.plan_name}</td>
                  <td className="px-6 py-3.5 font-semibold text-foreground">
                    {sub.currency} {sub.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-3.5 text-muted-foreground capitalize text-xs">{sub.interval}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={sub.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">{sub.next_billing || '—'}</td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-1">
                      {sub.status === 'active' && (
                        <>
                          <Button size="sm" variant="ghost" className="h-7 px-2 gap-1 text-xs">
                            <Pause className="w-3 h-3" /> Pause
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 px-2 gap-1 text-xs text-destructive hover:text-destructive">
                            <X className="w-3 h-3" /> Cancel
                          </Button>
                        </>
                      )}
                      {sub.status === 'cancelled' && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 gap-1 text-xs text-primary">
                          <RefreshCw className="w-3 h-3" /> Reactivate
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
