import PageLayout from '@/components/landing/PageLayout';
import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react';

const REQUIREMENTS = [
  { num: '1', title: 'Secure network', desc: 'Firewall and network segmentation isolate cardholder data from all other network segments and the internet.' },
  { num: '2', title: 'Protect cardholder data', desc: 'Cardholder data is tokenized via VGS before reaching TeyraPay servers. Raw PANs never touch our infrastructure.' },
  { num: '3', title: 'Vulnerability management', desc: 'Daily automated scans, monthly internal penetration tests, and annual third-party pen tests by a QSA-certified firm.' },
  { num: '4', title: 'Access control', desc: 'Role-based access control, MFA on all administrative interfaces, and least-privilege principles throughout.' },
  { num: '5', title: 'Monitoring and testing', desc: 'Centralized log aggregation, SIEM alerts, and automated anomaly detection on all cardholder data access.' },
  { num: '6', title: 'Information security policy', desc: 'Formal information security policy reviewed annually, with mandatory security training for all employees.' },
];

export default function PciPage() {
  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Legal · PCI Compliance</span>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4" /> PCI-DSS Level 1 Certified
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">PCI-DSS Compliance</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">TeyraPay maintains PCI-DSS Level 1 compliance — the highest standard in the payment industry — validated annually by an independent Qualified Security Assessor.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: 'PCI-DSS Level 1', desc: 'Validated annually by a QSA (Qualified Security Assessor). Covers all 12 PCI-DSS requirements.', color: 'text-blue-600 bg-blue-500/10' },
              { icon: Lock, title: 'VGS Tokenization', desc: 'Card data is tokenized before reaching TeyraPay. We never store, process, or transmit raw PANs.', color: 'text-purple-600 bg-purple-500/10' },
              { icon: Server, title: 'TLS 1.3', desc: 'All data in transit is encrypted using TLS 1.3 with AES-256 cipher suites. TLS 1.0 and 1.1 are disabled.', color: 'text-emerald-600 bg-emerald-500/10' },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-syne font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="font-syne text-2xl font-bold text-foreground mb-6">The 6 PCI-DSS Goals — How We Meet Them</h2>
            <div className="space-y-4">
              {REQUIREMENTS.map(r => (
                <div key={r.num} className="flex gap-4 bg-card border border-border rounded-2xl p-5">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm font-bold">{r.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="font-syne text-xl font-bold text-foreground mb-3">Merchant PCI scope</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              By using TeyraPay's hosted checkout or JavaScript tokenization library, merchants can significantly reduce their PCI-DSS scope. Card data never passes through your servers — it goes directly from the customer's browser to TeyraPay's VGS vault. In most cases, merchants using our hosted solutions qualify for the simplest PCI assessment level (SAQ A).
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We provide a Letter of Compliance and our most recent AOC (Attestation of Compliance) to merchants on request. Contact <span className="text-primary">compliance@teyrapay.com</span> for documentation.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
