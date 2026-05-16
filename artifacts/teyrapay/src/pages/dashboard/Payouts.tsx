import { Banknote, Clock, CheckCircle2, ArrowDownToLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_PAYOUTS } from '@/lib/mockData';

export default function Payouts() {
  const payouts = MOCK_PAYOUTS;
  const total = payouts.filter(p => p.status === 'paid').reduce((s, p) => s + p.amount, 0);
  const inTransit = payouts.filter(p => p.status === 'in_transit').reduce((s, p) => s + p.amount, 0);
  const pending = payouts.filter(p => p.status === 'pending').reduce((s, p) => s + p.amount, 0);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-foreground">Payouts</h1>
          <p className="text-muted-foreground text-sm mt-1">Settlement history and upcoming payouts</p>
        </div>
        <Button className="gap-2">
          <Banknote className="w-4 h-4" /> Request Payout
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Available Balance', value: `SAR ${(45200).toLocaleString()}`, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-500/10', sub: 'Ready to withdraw' },
          { label: 'In Transit', value: `SAR ${inTransit.toLocaleString()}`, icon: ArrowDownToLine, color: 'text-blue-600', bg: 'bg-blue-500/10', sub: 'Expected within 2 days' },
          { label: 'Pending', value: `SAR ${pending.toLocaleString()}`, icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-500/10', sub: 'Not yet settled' },
        ].map(card => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-card border border-border rounded-2xl p-5">
              <div className={`w-9 h-9 ${card.bg} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className={`w-4 h-4 ${card.color}`} />
              </div>
              <div className="text-xl font-syne font-bold text-foreground">{card.value}</div>
              <div className="text-xs text-foreground font-medium mt-0.5">{card.label}</div>
              <div className="text-xs text-muted-foreground">{card.sub}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-syne font-bold text-foreground">Payout History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Bank</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Account</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Arrival Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              {payouts.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <Banknote className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">No payouts yet. Payouts are processed nightly.</p>
                  </td>
                </tr>
              )}
              {payouts.map(p => (
                <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-3.5 font-semibold text-foreground">{p.currency} {p.amount.toLocaleString()}</td>
                  <td className="px-6 py-3.5 text-muted-foreground text-sm">{p.bank_name}</td>
                  <td className="px-6 py-3.5 text-muted-foreground font-mono text-xs">••••{p.account_last4}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={p.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">{p.arrival_date}</td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
