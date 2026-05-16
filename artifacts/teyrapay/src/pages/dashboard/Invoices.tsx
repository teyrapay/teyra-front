import { useState } from 'react';
import { Plus, Search, FileText, Trash2, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_INVOICES } from '@/lib/mockData';

type Invoice = typeof MOCK_INVOICES[0];

function InvoiceForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ customer_name: '', customer_email: '', amount: '', currency: 'SAR', due_date: '', notes: '' });
  return (
    <form onSubmit={e => { e.preventDefault(); onClose(); }} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Customer Name</Label>
          <Input value={form.customer_name} onChange={e => setForm({ ...form, customer_name: e.target.value })} required />
        </div>
        <div className="space-y-1.5">
          <Label>Customer Email</Label>
          <Input type="email" value={form.customer_email} onChange={e => setForm({ ...form, customer_email: e.target.value })} required />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Amount</Label>
          <Input type="number" min="0" step="0.01" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} required />
        </div>
        <div className="space-y-1.5">
          <Label>Currency</Label>
          <Select value={form.currency} onValueChange={v => setForm({ ...form, currency: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {['SAR', 'AED', 'KWD', 'BHD', 'QAR', 'USD'].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label>Due Date</Label>
        <Input type="date" value={form.due_date} onChange={e => setForm({ ...form, due_date: e.target.value })} />
      </div>
      <div className="space-y-1.5">
        <Label>Notes</Label>
        <Input value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Optional notes..." />
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}

export default function Invoices() {
  const [search, setSearch] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>(MOCK_INVOICES);

  const filtered = invoices.filter(i =>
    !search ||
    i.customer_name.toLowerCase().includes(search.toLowerCase()) ||
    i.invoice_number.toLowerCase().includes(search.toLowerCase())
  );

  const paid = invoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0);
  const pending = invoices.filter(i => i.status === 'sent' || i.status === 'viewed').reduce((s, i) => s + i.amount, 0);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-foreground">Invoices</h1>
          <p className="text-muted-foreground text-sm mt-1">{invoices.length} invoices</p>
        </div>
        <Button onClick={() => setShowCreate(true)} className="gap-2">
          <Plus className="w-4 h-4" /> New Invoice
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Paid', value: `SAR ${paid.toLocaleString()}`, color: 'text-emerald-600 bg-emerald-500/10' },
          { label: 'Awaiting Payment', value: `SAR ${pending.toLocaleString()}`, color: 'text-blue-600 bg-blue-500/10' },
          { label: 'Overdue', value: invoices.filter(i => i.status === 'overdue').length, color: 'text-red-600 bg-red-500/10' },
        ].map(card => (
          <div key={card.label} className="bg-card border border-border rounded-2xl p-5">
            <div className="text-xl font-syne font-bold text-foreground">{card.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{card.label}</div>
          </div>
        ))}
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
              {!filtered.length && (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">No invoices found. Create your first one.</p>
                  </td>
                </tr>
              )}
              {filtered.map(inv => (
                <tr key={inv.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-3.5 font-mono text-xs text-muted-foreground">{inv.invoice_number}</td>
                  <td className="px-6 py-3.5">
                    <div className="font-medium text-foreground text-sm">{inv.customer_name}</div>
                    <div className="text-xs text-muted-foreground">{inv.customer_email}</div>
                  </td>
                  <td className="px-6 py-3.5 font-semibold text-foreground">{inv.currency} {inv.amount.toLocaleString()}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={inv.status} /></td>
                  <td className="px-6 py-3.5 text-muted-foreground text-xs">{inv.due_date || '—'}</td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-1">
                      {inv.status === 'draft' && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-xs gap-1"
                          onClick={() => setInvoices(p => p.map(i => i.id === inv.id ? { ...i, status: 'sent' } : i))}>
                          <Send className="w-3 h-3" /> Send
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="h-7 px-2 gap-1 text-xs">
                        <Download className="w-3 h-3" /> PDF
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
                        onClick={() => setInvoices(p => p.filter(i => i.id !== inv.id))}>
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
