import { BarChart3, Download, FileText, TrendingUp, RefreshCw, AlertCircle, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const MONTHLY_DATA = [
  { month: 'Jan', volume: 620000, fees: 17980, payouts: 590000 },
  { month: 'Feb', volume: 710000, fees: 20590, payouts: 672000 },
  { month: 'Mar', volume: 850000, fees: 24650, payouts: 812000 },
  { month: 'Apr', volume: 920000, fees: 26680, payouts: 877000 },
  { month: 'May', volume: 540000, fees: 15660, payouts: 510000 },
];

const REPORTS = [
  { id: 'transaction', title: 'Transaction Report', desc: 'All transactions with full details, fees, and PSP info', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-500/10' },
  { id: 'settlement', title: 'Settlement Report', desc: 'What was paid out and when, by batch', icon: Landmark, color: 'text-emerald-600', bg: 'bg-emerald-500/10' },
  { id: 'fee', title: 'Fee Report', desc: 'Breakdown of platform fees charged per period', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-500/10' },
  { id: 'refund', title: 'Refund Report', desc: 'All refunds issued with reasons and status', icon: RefreshCw, color: 'text-orange-600', bg: 'bg-orange-500/10' },
  { id: 'dispute', title: 'Dispute Report', desc: 'Chargebacks opened, closed, and outcomes', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-500/10' },
  { id: 'pnl', title: 'Revenue Report', desc: 'Platform revenue and growth trends', icon: TrendingUp, color: 'text-cyan-600', bg: 'bg-cyan-500/10' },
];

export default function Reports() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="font-syne text-2xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground text-sm mt-1">Exportable financial reports and analytics</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-syne font-bold text-foreground">Volume by Month (SAR)</h2>
            <p className="text-xs text-muted-foreground mt-0.5">2026 YTD</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={MONTHLY_DATA} barSize={32}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false}
              tickFormatter={v => `${v / 1000}K`} />
            <Tooltip formatter={(v: number, name: string) => [`SAR ${v.toLocaleString()}`, name]}
              contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12, fontSize: 12 }} />
            <Legend />
            <Bar dataKey="volume" name="Volume" fill="hsl(217,91%,50%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="payouts" name="Payouts" fill="hsl(160,60%,45%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="font-syne font-bold text-foreground mb-4">Available Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REPORTS.map(r => {
            const Icon = r.icon;
            return (
              <div key={r.id} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all group">
                <div className={`w-10 h-10 ${r.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${r.color}`} />
                </div>
                <h3 className="font-syne font-bold text-sm text-foreground mb-1">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5 flex-1">
                    <Download className="w-3.5 h-3.5" /> CSV
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5 flex-1">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
