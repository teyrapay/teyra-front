import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { Search, Filter, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Transactions() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const { data: txns = [], isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => base44.entities.Transaction.list('-created_date', 100),
  });

  const filtered = txns.filter(t => {
    const matchSearch = !search ||
      t.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
      t.customer_email?.toLowerCase().includes(search.toLowerCase()) ||
      t.reference?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-700 text-foreground">Transactions</h1>
          <p className="text-muted-foreground text-sm mt-1">{filtered.length} records</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-3.5 h-3.5" /> Export
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by name, email, ref..." className="pl-9 h-9 rounded-xl"
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-36 h-9 rounded-xl">
            <Filter className="w-3.5 h-3.5 mr-1" />
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

      {/* Table */}
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
              {isLoading && (
                <tr><td colSpan={9} className="px-6 py-10 text-center text-muted-foreground">Loading...</td></tr>
              )}
              {!isLoading && filtered.length === 0 && (
                <tr><td colSpan={9} className="px-6 py-10 text-center text-muted-foreground">No transactions found</td></tr>
              )}
              {filtered.map(txn => (
                <tr key={txn.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-3.5 font-mono text-xs text-muted-foreground">{txn.reference || txn.id?.slice(0, 8)}</td>
                  <td className="px-6 py-3.5">
                    <div className="font-medium text-foreground">{txn.customer_name || '—'}</div>
                    <div className="text-xs text-muted-foreground">{txn.customer_email}</div>
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-foreground">{txn.currency} {txn.amount?.toLocaleString()}</td>
                  <td className="px-6 py-3.5 text-muted-foreground">{txn.fee ? `${txn.currency} ${txn.fee}` : '—'}</td>
                  <td className="px-6 py-3.5 text-foreground">{txn.net ? `${txn.currency} ${txn.net}` : '—'}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={txn.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground capitalize">{txn.payment_method?.replace('_', ' ')}</td>
                  <td className="px-6 py-3.5 text-muted-foreground capitalize">{txn.psp}</td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">
                    {new Date(txn.created_date).toLocaleDateString()}
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
