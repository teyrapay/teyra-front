import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeftRight, DollarSign, TrendingUp, Clock } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { Link } from 'react-router-dom';

const CHART_DATA = [
  { day: 'Mon', volume: 42000 },
  { day: 'Tue', volume: 61000 },
  { day: 'Wed', volume: 55000 },
  { day: 'Thu', volume: 78000 },
  { day: 'Fri', volume: 92000 },
  { day: 'Sat', volume: 48000 },
  { day: 'Sun', volume: 63000 },
];

function fmt(n) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n;
}

export default function Overview() {
  const { data: txns = [] } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => base44.entities.Transaction.list('-created_date', 50),
  });

  const totalVolume = txns.filter(t => t.status === 'succeeded').reduce((s, t) => s + (t.amount || 0), 0);
  const successRate = txns.length ? Math.round((txns.filter(t => t.status === 'succeeded').length / txns.length) * 100) : 0;
  const pending = txns.filter(t => t.status === 'pending').length;

  const recent = txns.slice(0, 8);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="font-syne text-2xl font-700 text-foreground">Overview</h1>
        <p className="text-muted-foreground text-sm mt-1">Last 30 days · Test mode</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Volume" value={`SAR ${fmt(totalVolume)}`} change={12.4} changeLabel="vs last month"
          icon={DollarSign} iconColor="text-green-600" iconBg="bg-green-500/10" />
        <StatCard title="Transactions" value={txns.length} change={8.1} changeLabel="vs last month"
          icon={ArrowLeftRight} iconColor="text-blue-600" iconBg="bg-blue-500/10" />
        <StatCard title="Success Rate" value={`${successRate}%`} change={1.2} changeLabel="vs last month"
          icon={TrendingUp} iconColor="text-purple-600" iconBg="bg-purple-500/10" />
        <StatCard title="Pending" value={pending} icon={Clock} iconColor="text-yellow-600" iconBg="bg-yellow-500/10" />
      </div>

      {/* Chart */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-syne font-700 text-foreground">Payment Volume</h2>
            <p className="text-xs text-muted-foreground mt-0.5">This week (SAR)</p>
          </div>
          <div className="text-2xl font-syne font-700 text-foreground">SAR {fmt(CHART_DATA.reduce((s, d) => s + d.volume, 0))}</div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={CHART_DATA}>
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217 91% 50%)" stopOpacity={0.15} />
                <stop offset="95%" stopColor="hsl(217 91% 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}K`} />
            <Tooltip formatter={v => [`SAR ${v.toLocaleString()}`, 'Volume']}
              contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12, fontSize: 12 }} />
            <Area type="monotone" dataKey="volume" stroke="hsl(217 91% 50%)" strokeWidth={2} fill="url(#colorVolume)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-syne font-700 text-foreground">Recent Transactions</h2>
          <Link to="/dashboard/transactions" className="text-xs text-primary hover:underline font-medium">View all →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Method</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">PSP</th>
              </tr>
            </thead>
            <tbody>
              {recent.length === 0 && (
                <tr><td colSpan={5} className="px-6 py-10 text-center text-muted-foreground text-sm">No transactions yet</td></tr>
              )}
              {recent.map(txn => (
                <tr key={txn.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="font-medium text-foreground">{txn.customer_name || '—'}</div>
                    <div className="text-xs text-muted-foreground">{txn.customer_email || ''}</div>
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-foreground">
                    {txn.currency} {txn.amount?.toLocaleString()}
                  </td>
                  <td className="px-6 py-3.5"><StatusBadge status={txn.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground capitalize">{txn.payment_method?.replace('_', ' ')}</td>
                  <td className="px-6 py-3.5 text-muted-foreground capitalize">{txn.psp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
