import { useState } from 'react';
import { Search, Filter, Download, X, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_TRANSACTIONS } from '@/lib/mockData';

export default function Transactions() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState<typeof MOCK_TRANSACTIONS[0] | null>(null);

  const txns = MOCK_TRANSACTIONS;

  const filtered = txns.filter(t => {
    const matchSearch = !search ||
      t.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      t.customer_email.toLowerCase().includes(search.toLowerCase()) ||
      t.reference.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-foreground">Transactions</h1>
          <p className="text-muted-foreground text-sm mt-1">{filtered.length} records</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-3.5 h-3.5" /> Refresh
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-3.5 h-3.5" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by name, email, reference..." className="pl-9 h-9 rounded-xl"
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 h-9 rounded-xl">
            <Filter className="w-3.5 h-3.5 mr-1 text-muted-foreground" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="succeeded">Succeeded</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
            <SelectItem value="disputed">Disputed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Reference</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Fee</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Net</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Method</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">PSP</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={9} className="px-6 py-10 text-center text-muted-foreground">No transactions found</td></tr>
              )}
              {filtered.map(txn => (
                <tr key={txn.id}
                  className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer"
                  onClick={() => setSelected(txn)}>
                  <td className="px-6 py-3.5 font-mono text-xs text-muted-foreground">{txn.reference}</td>
                  <td className="px-6 py-3.5">
                    <div className="font-medium text-foreground text-sm">{txn.customer_name}</div>
                    <div className="text-xs text-muted-foreground">{txn.customer_email}</div>
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-foreground">{txn.currency} {txn.amount.toLocaleString()}</td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">{txn.fee ? `${txn.currency} ${txn.fee}` : '—'}</td>
                  <td className="px-6 py-3.5 text-foreground text-xs">{txn.net ? `${txn.currency} ${txn.net}` : '—'}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={txn.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs capitalize">{txn.payment_method.replace('_', ' ')}</td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs capitalize">{txn.psp}</td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">
                    {new Date(txn.created_date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => setSelected(null)} />
          <div className="w-full max-w-md bg-card border-l border-border h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-syne font-bold text-foreground">Transaction Detail</h2>
                <p className="text-xs text-muted-foreground mt-0.5 font-mono">{selected.reference}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-muted/30 rounded-2xl p-5 text-center">
                <div className="text-3xl font-syne font-bold text-foreground mb-1">
                  {selected.currency} {selected.amount.toLocaleString()}
                </div>
                <StatusBadge status={selected.status} />
              </div>
              {[
                { label: 'Customer', value: selected.customer_name },
                { label: 'Email', value: selected.customer_email },
                { label: 'Payment Method', value: selected.payment_method.replace('_', ' ') },
                { label: 'PSP', value: selected.psp },
                { label: 'Fee', value: `${selected.currency} ${selected.fee}` },
                { label: 'Net Amount', value: `${selected.currency} ${selected.net}` },
                { label: 'Date', value: new Date(selected.created_date).toLocaleString() },
              ].map(row => (
                <div key={row.label} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-medium text-foreground capitalize">{row.value}</span>
                </div>
              ))}
              {selected.status === 'succeeded' && (
                <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/5">
                  Issue Refund
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
