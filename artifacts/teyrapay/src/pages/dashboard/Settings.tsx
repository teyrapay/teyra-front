import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Bell, Shield, Users, Palette } from 'lucide-react';

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="font-syne font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Toggle({ label, desc, defaultOn = true }: { label: string; desc: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <label className="flex items-center justify-between cursor-pointer gap-4">
      <div>
        <div className="text-sm font-medium text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
      </div>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${on ? 'bg-primary' : 'bg-muted'}`}
      >
        <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${on ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </label>
  );
}

export default function Settings() {
  const [biz, setBiz] = useState({ name: 'My Store', website: '', country: 'Saudi Arabia', currency: 'SAR', timezone: 'Asia/Riyadh' });
  const [saved, setSaved] = useState(false);

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="font-syne text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account and preferences</p>
      </div>

      <Section icon={Building2} title="Business Information">
        <form onSubmit={save} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Business Name</Label>
              <Input value={biz.name} onChange={e => setBiz({ ...biz, name: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Website</Label>
              <Input type="url" placeholder="https://yourstore.com" value={biz.website} onChange={e => setBiz({ ...biz, website: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Country</Label>
              <Select value={biz.country} onValueChange={v => setBiz({ ...biz, country: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {['Saudi Arabia', 'UAE', 'Kuwait', 'Bahrain', 'Qatar', 'Egypt', 'Jordan'].map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
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

      <Section icon={Palette} title="Branding">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Primary Color</Label>
            <div className="flex items-center gap-3">
              <input type="color" defaultValue="#2563eb" className="w-10 h-10 rounded-lg border border-border cursor-pointer" />
              <Input defaultValue="#2563eb" className="font-mono w-32" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Custom Checkout Domain</Label>
            <Input placeholder="pay.yourstore.com" />
            <p className="text-xs text-muted-foreground">Add a CNAME record pointing to checkout.teyrapay.com</p>
          </div>
        </div>
      </Section>

      <Section icon={Users} title="Team Members">
        <div className="space-y-3">
          {[
            { name: 'Ahmed Al-Rashid', email: 'ahmed@store.sa', role: 'Admin' },
            { name: 'Sara Khalid', email: 'sara@store.sa', role: 'Finance' },
          ].map(m => (
            <div key={m.email} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">{m.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.email}</div>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{m.role}</span>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full mt-2">Invite Team Member</Button>
        </div>
      </Section>

      <Section icon={Bell} title="Notifications">
        <div className="space-y-4">
          <Toggle label="Payment received" desc="Get notified when a payment succeeds" />
          <Toggle label="Payment failed" desc="Alert when a payment attempt fails" />
          <Toggle label="Payout sent" desc="Confirm when a settlement is initiated" />
          <Toggle label="Dispute opened" desc="Immediate alert on chargebacks" defaultOn={false} />
          <Toggle label="Daily summary" desc="End-of-day report delivered to your inbox" />
        </div>
      </Section>

      <Section icon={Shield} title="Security">
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <div className="text-sm font-medium text-foreground">Two-Factor Authentication</div>
              <div className="text-xs text-muted-foreground mt-0.5">Add an extra layer of security to your account</div>
            </div>
            <Button variant="outline" size="sm">Enable 2FA</Button>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <div className="text-sm font-medium text-foreground">IP Allowlist</div>
              <div className="text-xs text-muted-foreground mt-0.5">Restrict API access to specific IP addresses</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-foreground">Active Sessions</div>
              <div className="text-xs text-muted-foreground mt-0.5">1 active session · Last seen now</div>
            </div>
            <Button variant="outline" size="sm" className="text-destructive border-destructive/30">Revoke All</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
