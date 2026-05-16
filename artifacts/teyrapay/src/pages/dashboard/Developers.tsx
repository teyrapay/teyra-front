import { useState } from 'react';
import { Plus, Globe, RefreshCw, AlertTriangle, CheckCircle2, Trash2, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_WEBHOOKS } from '@/lib/mockData';

const EVENTS = [
  'payment.created', 'payment.succeeded', 'payment.failed',
  'refund.created', 'payout.sent', 'subscription.renewed',
  'dispute.opened', 'invoice.paid'
];

const API_LOGS = [
  { ts: '2026-05-16 10:45:12', method: 'POST', path: '/api/v1/payments', status: 200, duration: '124ms' },
  { ts: '2026-05-16 10:44:33', method: 'GET', path: '/api/v1/payments?limit=20', status: 200, duration: '45ms' },
  { ts: '2026-05-16 10:43:18', method: 'GET', path: '/api/v1/customers/cus_1', status: 200, duration: '38ms' },
  { ts: '2026-05-16 10:41:55', method: 'POST', path: '/api/v1/refunds', status: 200, duration: '312ms' },
  { ts: '2026-05-16 10:38:22', method: 'GET', path: '/api/v1/invoices/inv_2', status: 404, duration: '12ms' },
  { ts: '2026-05-16 10:35:44', method: 'PATCH', path: '/api/v1/customers/cus_3', status: 200, duration: '89ms' },
];

export default function Developers() {
  const [showAddWebhook, setShowAddWebhook] = useState(false);
  const [webhooks] = useState(MOCK_WEBHOOKS);
  const [activeTab, setActiveTab] = useState<'webhooks' | 'logs'>('webhooks');

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="font-syne text-2xl font-bold text-foreground">Developers</h1>
        <p className="text-muted-foreground text-sm mt-1">Webhooks, event logs, and API request history</p>
      </div>

      <div className="flex gap-1 p-1 bg-muted rounded-xl w-fit">
        {(['webhooks', 'logs'] as const).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
              activeTab === tab ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}>
            {tab === 'webhooks' ? 'Webhooks' : 'API Logs'}
          </button>
        ))}
      </div>

      {activeTab === 'webhooks' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{webhooks.length} endpoint{webhooks.length !== 1 ? 's' : ''} configured</p>
            <Button onClick={() => setShowAddWebhook(true)} className="gap-2" size="sm">
              <Plus className="w-4 h-4" /> Add Endpoint
            </Button>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>Validate webhook signatures using your signing secret. Every request includes an <code className="font-mono text-xs bg-amber-100 px-1 py-0.5 rounded">X-Teyrapay-Signature</code> header.</span>
          </div>

          <div className="space-y-3">
            {webhooks.map(wh => (
              <div key={wh.id} className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      wh.status === 'active' ? 'bg-emerald-500/10' : 'bg-red-500/10'
                    }`}>
                      {wh.status === 'active'
                        ? <Globe className="w-4 h-4 text-emerald-600" />
                        : <AlertTriangle className="w-4 h-4 text-red-600" />
                      }
                    </div>
                    <div>
                      <div className="font-mono text-sm text-foreground">{wh.url}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Last delivery: {new Date(wh.last_delivery).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <StatusBadge status={wh.status} />
                    <Button variant="ghost" size="sm" className="h-7 px-2 gap-1 text-xs">
                      <RefreshCw className="w-3 h-3" /> Replay
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2 text-destructive hover:text-destructive">
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {wh.events.map(e => (
                      <span key={e} className="bg-muted text-muted-foreground text-[11px] font-mono px-2 py-0.5 rounded-md">{e}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="font-medium text-foreground">{wh.success_rate}%</span>
                    <span className="text-muted-foreground">success</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center gap-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <h2 className="font-syne font-bold text-sm text-foreground">API Request Log</h2>
            <span className="ml-auto text-xs text-muted-foreground">Last 24h</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Timestamp</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Method</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Path</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground">Duration</th>
                </tr>
              </thead>
              <tbody>
                {API_LOGS.map((log, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-3 font-mono text-xs text-muted-foreground">{log.ts}</td>
                    <td className="px-6 py-3">
                      <span className={`font-mono text-xs font-bold ${
                        log.method === 'GET' ? 'text-blue-600' :
                        log.method === 'POST' ? 'text-emerald-600' :
                        log.method === 'PATCH' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>{log.method}</span>
                    </td>
                    <td className="px-6 py-3 font-mono text-xs text-foreground">{log.path}</td>
                    <td className="px-6 py-3">
                      <span className={`font-mono text-xs font-bold ${
                        log.status < 300 ? 'text-emerald-600' :
                        log.status < 400 ? 'text-blue-600' :
                        'text-red-600'
                      }`}>{log.status}</span>
                    </td>
                    <td className="px-6 py-3 text-muted-foreground text-xs font-mono">{log.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Dialog open={showAddWebhook} onOpenChange={setShowAddWebhook}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Add Webhook Endpoint</DialogTitle></DialogHeader>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); setShowAddWebhook(false); }}>
            <div className="space-y-1.5">
              <Label>Endpoint URL</Label>
              <Input placeholder="https://yourserver.com/webhooks" type="url" required />
            </div>
            <div className="space-y-1.5">
              <Label>Events to subscribe</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {EVENTS.map(e => (
                  <label key={e} className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded accent-primary" />
                    <span className="font-mono">{e}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowAddWebhook(false)}>Cancel</Button>
              <Button type="submit">Add Endpoint</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
