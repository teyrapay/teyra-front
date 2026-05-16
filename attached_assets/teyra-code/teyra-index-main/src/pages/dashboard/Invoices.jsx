import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { Plus, Search, FileText, Trash2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function InvoiceForm({ onClose }) {
  const qc = useQueryClient();
  const [form, setForm] = useState({ customer_name: '', customer_email: '', amount: '', currency: 'SAR', due_date: '', status: 'draft', notes: '' });
  const create = useMutation({
    mutationFn: data => base44.entities.Invoice.create({ ...data, invoice_number: `INV-${Date.now()}`, amount: parseFloat(data.amount) }),
    onSuccess: () => { qc.invalidateQueries(['invoices']); onClose(); }
  });

  return (
    <form onSubmit={e => { e.preventDefault(); create.mutate(form); }} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Customer Name</Label>
          <Input value={form.customer_name} onChange={e => setForm({ ...form, customer_name: e.target.value })} required />
        </div>
        <div className="space-y-1">
          <Label>Customer Email</Label>
          <Input type="email" value={form.customer_email} onChange={e => setForm({ ...form, customer_email: e.target.value })} required />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label>Amount</Label>
          <Input type="number" min="0" step="0.01" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} required />
        </div>
        <div className="space-y-1">
          <Label>Currency</Label>
          <Select value={form.currency} onValueChange={v => setForm({ ...form, currency: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {['SAR', 'AED', 'KWD', 'BHD', 'QAR', 'USD'].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1">
        <Label>Due Date</Label>
        <Input type="date" value={form.due_date} onChange={e => setForm({ ...form, due_date: e.target.value })} />
      </div>
      <div className="space-y-1">
        <Label>Notes</Label>
        <Input value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Optional notes..." />
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit" disabled={create.isPending}>
          {create.isPending ? 'Creating...' : 'Create Invoice'}
        </Button>
      </div>
    </form>
  );
}

export default function Invoices() {
  const [search, setSearch] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const qc = useQueryClient();

  const { data: invoices = [], isLoading } = useQuery({
    queryKey: ['invoices'],
    queryFn: () => base44.entities.Invoice.list('-created_date', 100),
  });

  const del = useMutation({
    mutationFn: id => base44.entities.Invoice.delete(id),
    onSuccess: () => qc.invalidateQueries(['invoices']),
  });

  const markSent = useMutation({
    mutationFn: id => base44.entities.Invoice.update(id, { status: 'sent' }),
    onSuccess: () => qc.invalidateQueries(['invoices']),
  });

  const filtered = invoices.filter(i =>
    !search ||
    i.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
    i.invoice_number?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-700 text-foreground">Invoices</h1>
          <p className="text-muted-foreground text-sm mt-1">{invoices.length} invoices</p>
        </div>
        <Button onClick={() => setShowCreate(true)} className="gap-2">
          <Plus className="w-4 h-4" /> New Invoice
        </Button>
      </div>

      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search invoices..." className="pl-9 h-9 rounded-xl"
          value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Invoice #</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Due Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <tr><td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">Loading...</td></tr>}
              {!isLoading && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">No invoices yet. Create your first one.</p>
                  </td>
                </tr>
              )}
              {filtered.map(inv => (
                <tr key={inv.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-3.5 font-mono text-xs text-muted-foreground">{inv.invoice_number}</td>
                  <td className="px-6 py-3.5">
                    <div className="font-medium text-foreground">{inv.customer_name}</div>
                    <div className="text-xs text-muted-foreground">{inv.customer_email}</div>
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-foreground">{inv.currency} {inv.amount?.toLocaleString()}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={inv.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">{inv.due_date || '—'}</td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2">
                      {inv.status === 'draft' && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-xs gap-1"
                          onClick={() => markSent.mutate(inv.id)}>
                          <Send className="w-3 h-3" /> Send
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                        onClick={() => del.mutate(inv.id)}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Create Invoice</DialogTitle></DialogHeader>
          <InvoiceForm onClose={() => setShowCreate(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
