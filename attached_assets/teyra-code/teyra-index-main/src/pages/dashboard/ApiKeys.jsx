import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Key, Plus, Eye, EyeOff, Copy, Trash2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Button size="sm" variant="ghost" className="h-7 px-2" onClick={copy}>
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
    </Button>
  );
}

export default function ApiKeys() {
  const qc = useQueryClient();
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState('');
  const [revealId, setRevealId] = useState(null);

  const { data: keys = [] } = useQuery({
    queryKey: ['api-keys'],
    queryFn: () => base44.entities.ApiKey.list('-created_date', 50),
  });

  const create = useMutation({
    mutationFn: () => {
      const prefix = 'sk_test_';
      const rand = Math.random().toString(36).slice(2, 18);
      return base44.entities.ApiKey.create({ name, key_prefix: prefix + rand, environment: 'test', is_active: true });
    },
    onSuccess: () => { qc.invalidateQueries(['api-keys']); setShowCreate(false); setName(''); }
  });

  const del = useMutation({
    mutationFn: id => base44.entities.ApiKey.delete(id),
    onSuccess: () => qc.invalidateQueries(['api-keys']),
  });

  const testKeys = keys.filter(k => k.environment === 'test');
  const liveKeys = keys.filter(k => k.environment === 'live');

  const KeyRow = ({ k }) => (
    <div className="flex items-center gap-4 py-4 border-b border-border last:border-0">
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm text-foreground">{k.name}</div>
        <div className="flex items-center gap-2 mt-1">
          <code className="text-xs font-mono text-muted-foreground">
            {revealId === k.id ? k.key_prefix : k.key_prefix?.slice(0, 16) + '••••••••••••'}
          </code>
          <Button size="sm" variant="ghost" className="h-5 px-1" onClick={() => setRevealId(revealId === k.id ? null : k.id)}>
            {revealId === k.id ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          </Button>
          <CopyButton value={k.key_prefix} />
        </div>
      </div>
      <Badge variant={k.is_active ? 'default' : 'secondary'} className="text-xs">
        {k.is_active ? 'Active' : 'Revoked'}
      </Badge>
      <div className="text-xs text-muted-foreground">
        {k.last_used ? `Last used ${k.last_used}` : 'Never used'}
      </div>
      <Button size="sm" variant="ghost" className="h-7 px-2 text-destructive hover:text-destructive"
        onClick={() => del.mutate(k.id)}>
        <Trash2 className="w-3.5 h-3.5" />
      </Button>
    </div>
  );

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-syne text-2xl font-700 text-foreground">API Keys</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your API credentials</p>
        </div>
        <Button onClick={() => setShowCreate(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Create Key
        </Button>
      </div>

      {/* Warning */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-3 text-sm text-yellow-700 flex items-start gap-2">
        <span className="mt-0.5">⚠️</span>
        <span>Keep your API keys secret. Never expose them in client-side code or public repositories.</span>
      </div>

      {/* Test keys */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
          <Key className="w-4 h-4 text-muted-foreground" />
          <h2 className="font-syne font-700 text-sm text-foreground">Test Keys</h2>
          <span className="ml-auto text-xs text-muted-foreground">{testKeys.length} key{testKeys.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="px-6">
          {testKeys.length === 0 && (
            <div className="py-10 text-center text-muted-foreground text-sm">No test keys yet</div>
          )}
          {testKeys.map(k => <KeyRow key={k.id} k={k} />)}
        </div>
      </div>

      {/* Live keys */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
          <Key className="w-4 h-4 text-primary" />
          <h2 className="font-syne font-700 text-sm text-foreground">Live Keys</h2>
          <span className="ml-auto text-xs text-muted-foreground">{liveKeys.length} key{liveKeys.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="px-6">
          {liveKeys.length === 0 && (
            <div className="py-10 text-center text-muted-foreground text-sm">No live keys. Complete KYB to access live mode.</div>
          )}
          {liveKeys.map(k => <KeyRow key={k.id} k={k} />)}
        </div>
      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-sm">
          <DialogHeader><DialogTitle>Create API Key</DialogTitle></DialogHeader>
          <form onSubmit={e => { e.preventDefault(); create.mutate(); }} className="space-y-4">
            <div className="space-y-1">
              <Label>Key Name</Label>
              <Input placeholder="e.g. Production Server" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setShowCreate(false)}>Cancel</Button>
              <Button type="submit" disabled={create.isPending}>{create.isPending ? 'Creating...' : 'Create'}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
