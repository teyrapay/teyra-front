import PageLayout from '@/components/landing/PageLayout';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const SERVICES = [
  { name: 'Payment Processing', status: 'operational', latency: '48ms' },
  { name: 'Checkout Pages', status: 'operational', latency: '120ms' },
  { name: 'API (REST)', status: 'operational', latency: '22ms' },
  { name: 'Webhook Delivery', status: 'operational', latency: '—' },
  { name: 'Merchant Dashboard', status: 'operational', latency: '95ms' },
  { name: 'Payout Processing', status: 'operational', latency: '—' },
  { name: 'Payment Links', status: 'operational', latency: '65ms' },
  { name: 'Fraud Engine', status: 'degraded', latency: '380ms' },
  { name: 'Reporting', status: 'operational', latency: '210ms' },
];

const INCIDENTS = [
  { date: 'May 12, 2026', title: 'Elevated fraud engine latency', status: 'Monitoring', desc: 'We are investigating elevated response times in the fraud scoring service. Payment processing is unaffected. ETA to full resolution: 2 hours.' },
  { date: 'May 2, 2026', title: 'Partial webhook delivery delays', status: 'Resolved', desc: 'A queue processing issue caused webhook delivery delays of up to 15 minutes for some merchants. All queued events were delivered. Root cause: misconfigured autoscaler threshold.' },
];

const UPTIME = [
  { month: 'Apr 2026', uptime: '99.98%' },
  { month: 'Mar 2026', uptime: '100%' },
  { month: 'Feb 2026', uptime: '99.95%' },
  { month: 'Jan 2026', uptime: '100%' },
];

function StatusIcon({ status }: { status: string }) {
  if (status === 'operational') return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
  if (status === 'degraded') return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
  return <XCircle className="w-4 h-4 text-red-500" />;
}

export default function StatusPage() {
  const allOperational = SERVICES.every(s => s.status === 'operational');
  const hasDegraded = SERVICES.some(s => s.status === 'degraded');

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Company · Status</span>
          <div className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 ${
            hasDegraded ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
          }`}>
            {hasDegraded ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
            {hasDegraded ? 'Partial service disruption' : 'All systems operational'}
          </div>
          <h1 className="font-syne text-5xl font-extrabold text-white mb-4">System Status</h1>
          <p className="text-white/50">Last updated: May 16, 2026 at 11:05 AM UTC+3</p>
        </div>
      </section>

      <section className="py-16 bg-background max-w-4xl mx-auto px-6 space-y-10">
        {/* Services */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/30">
            <h2 className="font-syne font-bold text-foreground">Services</h2>
          </div>
          <div className="divide-y divide-border">
            {SERVICES.map(s => (
              <div key={s.name} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <StatusIcon status={s.status} />
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  {s.latency !== '—' && <span className="text-xs text-muted-foreground font-mono">{s.latency} avg</span>}
                  <span className={`text-xs font-semibold capitalize ${
                    s.status === 'operational' ? 'text-emerald-600' :
                    s.status === 'degraded' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incidents */}
        <div>
          <h2 className="font-syne font-bold text-foreground mb-4">Recent Incidents</h2>
          <div className="space-y-4">
            {INCIDENTS.map(inc => (
              <div key={inc.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-sm text-foreground">{inc.title}</h3>
                  <span className={`text-xs font-semibold flex-shrink-0 ${inc.status === 'Resolved' ? 'text-emerald-600' : 'text-yellow-600'}`}>{inc.status}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{inc.desc}</p>
                <p className="text-xs text-muted-foreground/60">{inc.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime */}
        <div>
          <h2 className="font-syne font-bold text-foreground mb-4">Uptime History</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {UPTIME.map(u => (
              <div key={u.month} className="bg-card border border-border rounded-2xl p-4 text-center">
                <div className="font-syne text-xl font-bold text-emerald-600 mb-1">{u.uptime}</div>
                <div className="text-xs text-muted-foreground">{u.month}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
