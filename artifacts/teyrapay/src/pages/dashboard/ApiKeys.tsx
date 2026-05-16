import { useState } from 'react';
import { Key, Plus, Eye, EyeOff, Copy, Trash2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { MOCK_API_KEYS } from '@/lib/mockData';

type ApiKey = typeof MOCK_API_KEYS[0];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button size="sm" variant="ghost" className="h-6 px-1.5"
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
    </Button>
  );
}

function KeyRow({ k }: { k: ApiKey }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="flex items-center gap-4 py-4 border-b border-border last:border-0">
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm text-foreground">{k.name}</div>
        <div className="flex items-center gap-1.5 mt-1">
          <code className="text-xs font-mono text-muted-foreground">
            {revealed ? k.key_prefix : k.key_prefix.slice(0, 16) + '••••••••••••'}
          </code>
          <Button size="sm" variant="ghost" className="h-5 px-1" onClick={() => setRevealed(!revealed)}>
            {revealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          </Button>
          <CopyButton value={k.key_prefix} />
        </div>
      </div>
      <StatusBadge status={k.environment} />
      <StatusBadge status={k.is_active ? 'active' : 'cancelled'} />
      <div className="text-xs text-muted-foreground">{k.last_used ? `Used ${k.last_used}` : 'Never used'}</div>
      <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive">
        <Trash2 className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}

export default function ApiKeys() {
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState('');
  const keys = MOCK_API_KEYS;

  const testKeys = keys.filter(k => k.environment === 'test');
  const liveKeys = keys.filter(k => k.environment === 'live');

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-bold text-foreground">API Keys</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your API credentials</p>
        </div>
        <Button onClick={() => setShowCreate(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Create Key
        </Button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 flex items-start gap-2">
        <span className="mt-0.5">⚠️</span>
        <span>Keep your secret API keys confidential. Never expose them in client-side code or public repositories.</span>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
          <Key className="w-4 h-4 text-primary" />
          <h2 className="font-syne font-bold text-sm text-foreground">Live Keys</h2>
          <span className="ml-auto text-xs text-muted-foreground">{liveKeys.length} key{liveKeys.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="px-6">
          {liveKeys.length === 0
            ? <div className="py-10 text-center text-muted-foreground text-sm">No live keys. Complete KYB verification to access live mode.</div>
            : liveKeys.map(k => <KeyRow key={k.id} k={k} />)
          }
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
          <Key className="w-4 h-4 text-yellow-600" />
          <h2 className="font-syne font-bold text-sm text-foreground">Test Keys</h2>
          <span className="ml-auto text-xs text-muted-foreground">{testKeys.length} key{testKeys.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="px-6">
          {testKeys.map(k => <KeyRow key={k.id} k={k} />)}
        </div>
      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-sm">
          <DialogHeader><DialogTitle>Create API Key</DialogTitle></DialogHeader>
          <form onSubmit={e => { e.preventDefault(); setShowCreate(false); setName(''); }} className="space-y-4">
            <div className="space-y-1.5">
              <Label>Key Name</Label>
              <Input placeholder="e.g. Production Server" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setShowCreate(false)}>Cancel</Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
