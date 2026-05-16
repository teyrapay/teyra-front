import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Globe, Bell, Shield } from 'lucide-react';

function Section({ icon: Icon, title, children }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="font-syne font-700 text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function Settings() {
  const [biz, setBiz] = useState({ name: 'My Store', website: '', country: 'Saudi Arabia', currency: 'SAR' });
  const [saved, setSaved] = useState(false);

  const save = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="font-syne text-2xl font-700 text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account and preferences</p>
      </div>

      {/* Business Info */}
      <Section icon={Building2} title="Business Information">
        <form onSubmit={save} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label>Business Name</Label>
              <Input value={biz.name} onChange={e => setBiz({ ...biz, name: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label>Website</Label>
              <Input type="url" placeholder="https://yourstore.com" value={biz.website} onChange={e => setBiz({ ...biz, website: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label>Country</Label>
              <Select value={biz.country} onValueChange={v => setBiz({ ...biz, country: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {['Saudi Arabia', 'UAE', 'Kuwait', 'Bahrain', 'Qatar', 'Egypt'].map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label>Default Currency</Label>
              <Select value={biz.currency} onValueChange={v => setBiz({ ...biz, currency: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {['SAR', 'AED', 'KWD', 'BHD', 'QAR', 'USD'].map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full sm:w-auto">{saved ? '✓ Saved!' : 'Save Changes'}</Button>
        </form>
      </Section>

      {/* Notifications */}
      <Section icon={Bell} title="Notifications">
        <div className="space-y-4">
          {[
            { label: 'Payment received', desc: 'Get notified when a payment succeeds' },
            { label: 'Payment failed', desc: 'Alert when a payment attempt fails' },
            { label: 'Payout sent', desc: 'Confirm when a settlement is initiated' },
            { label: 'Dispute opened', desc: 'Immediate alert on chargebacks' },
          ].map(item => (
            <label key={item.label} className="flex items-center justify-between cursor-pointer group">
              <div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <div className="relative">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-10 h-6 bg-muted peer-checked:bg-primary rounded-full transition-colors" />
                <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow" />
              </div>
            </label>
          ))}
        </div>
      </Section>

      {/* Security */}
      <Section icon={Shield} title="Security">
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <div className="text-sm font-medium text-foreground">Two-Factor Authentication</div>
              <div className="text-xs text-muted-foreground">Add an extra layer of security</div>
            </div>
            <Button variant="outline" size="sm">Enable 2FA</Button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-foreground">IP Allowlist</div>
              <div className="text-xs text-muted-foreground">Restrict API access to specific IPs</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
