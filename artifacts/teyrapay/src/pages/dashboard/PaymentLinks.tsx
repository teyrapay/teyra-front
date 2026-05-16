import { useState } from 'react';
import { Plus, Link2, Copy, Check, QrCode, Eye, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_PAYMENT_LINKS } from '@/lib/mockData';

function CopyUrl({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://pay.teyrapay.com/${link}`;
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground font-mono truncate max-w-[180px]">{url}</span>
      <button onClick={() => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}

export default function PaymentLinks() {
  const [showCreate, setShowCreate] = useState(false);
  const [links] = useState(MOCK_PAYMENT_LINKS);

  const totalCollected = links.reduce((s, l) => s + l.total_collected, 0);
  const totalConversions = links.reduce((s, l) => s + l.conversions, 0);
  const activeLinks = links.filter(l => l.status === 'active').length;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-foreground">Payment Links</h1>
          <p className="text-muted-foreground text-sm mt-1">Create and share payment pages instantly</p>
        </div>
        <Button onClick={() => setShowCreate(true)} className="gap-2">
          <Plus className="w-4 h-4" /> New Payment Link
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Collected', value: `SAR ${totalCollected.toLocaleString()}`, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-500/10' },
          { label: 'Total Conversions', value: totalConversions, icon: Check, color: 'text-blue-600', bg: 'bg-blue-500/10' },
          { label: 'Active Links', value: activeLinks, icon: Link2, color: 'text-purple-600', bg: 'bg-purple-500/10' },
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

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Link</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Views</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Conversions</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Collected</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">URL</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {links.map(link => (
                <tr key={link.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground text-sm">{link.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Expires {link.expires_at}</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-foreground">
                    {link.amount === 0 ? 'Customer defined' : `${link.currency} ${link.amount.toLocaleString()}`}
                  </td>
                  <td className="px-6 py-4"><StatusBadge status={link.status} /></td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> {link.views}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-foreground">{link.conversions}</span>
                      <span className="text-xs text-muted-foreground">({link.views > 0 ? Math.round((link.conversions / link.views) * 100) : 0}%)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">
                    {link.total_collected > 0 ? `${link.currency} ${link.total_collected.toLocaleString()}` : '—'}
                  </td>
                  <td className="px-6 py-4">
                    <CopyUrl link={link.id} />
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                      <QrCode className="w-3.5 h-3.5" /> QR
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Create Payment Link</DialogTitle></DialogHeader>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); setShowCreate(false); }}>
            <div className="space-y-1.5">
              <Label>Title / Description</Label>
              <Input placeholder="e.g. Premium Plan - Annual" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Amount (SAR)</Label>
                <Input type="number" placeholder="0 = customer sets" />
              </div>
              <div className="space-y-1.5">
                <Label>Expiry Date</Label>
                <Input type="date" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Redirect URL after payment</Label>
              <Input placeholder="https://yoursite.com/thank-you" />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowCreate(false)}>Cancel</Button>
              <Button type="submit">Create Link</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
