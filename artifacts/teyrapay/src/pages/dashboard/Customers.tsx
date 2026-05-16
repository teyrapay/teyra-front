import { useState } from 'react';
import { Search, Users, TrendingUp, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MOCK_CUSTOMERS } from '@/lib/mockData';

export default function Customers() {
  const [search, setSearch] = useState('');
  const customers = MOCK_CUSTOMERS;

  const totalRevenue = customers.reduce((s, c) => s + c.total_spend, 0);
  const avgSpend = Math.round(totalRevenue / customers.length);

  const filtered = customers.filter(c =>
    !search ||
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="font-syne text-2xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground text-sm mt-1">{customers.length} customers</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Customers', value: customers.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-500/10' },
          { label: 'Total Revenue', value: `SAR ${totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-500/10' },
          { label: 'Avg. Spend', value: `SAR ${avgSpend.toLocaleString()}`, icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-500/10' },
        ].map(card => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-card border border-border rounded-2xl p-5">
              <div className={`w-9 h-9 ${card.bg} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className={`w-4 h-4 ${card.color}`} />
              </div>
              <div className="text-xl font-syne font-bold text-foreground">{card.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{card.label}</div>
            </div>
          );
        })}
      </div>

      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search by name or email..." className="pl-9 h-9 rounded-xl"
          value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Country</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Total Spend</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Transactions</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Last Transaction</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Member Since</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">{c.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">{c.name}</div>
                        <div className="text-xs text-muted-foreground">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{c.country}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">SAR {c.total_spend.toLocaleString()}</td>
                  <td className="px-6 py-4 text-muted-foreground">{c.transaction_count}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{c.last_transaction}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{c.created_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
