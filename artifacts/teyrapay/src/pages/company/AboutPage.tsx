import PageLayout from '@/components/landing/PageLayout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TEAM = [
  { name: 'Teyra Al-Rashidi', role: 'CEO & Co-founder', bio: 'Former VP Payments at SADAD. 12 years in MENA fintech infrastructure.' },
  { name: 'Khalid Hassan', role: 'CTO & Co-founder', bio: 'Ex-Stripe engineering lead. Built payment infrastructure processing $10B+ annually.' },
  { name: 'Sara Al-Mutairi', role: 'CPO', bio: 'Previously Director of Product at PayTabs. Expert in MENA merchant experience.' },
  { name: 'Mohammed Youssef', role: 'Head of Compliance', bio: 'Former SAMA examiner. Specialist in AML, KYC, and payment regulation across GCC.' },
];

const VALUES = [
  { title: 'Merchant first', desc: 'Every product decision starts with what makes merchants\' lives easier and their businesses more successful.' },
  { title: 'Radical transparency', desc: 'No hidden fees. No confusing pricing. No fine print. We say exactly what things cost and exactly how they work.' },
  { title: 'Built for the region', desc: 'MENA isn\'t an afterthought. Our team grew up here. We understand the payment methods, regulations, and nuances that matter.' },
  { title: 'Relentless reliability', desc: 'Payments infrastructure is critical. We obsess over uptime, latency, and correctness — because your business depends on it.' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[hsl(222,47%,7%)] py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Company · About</span>
          <h1 className="font-syne text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            We're building the payment<br />layer for MENA
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Founded in 2024 in Riyadh, TeyraPay is on a mission to make accepting payments in the Middle East as simple and reliable as anywhere else in the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-3xl font-bold text-foreground mb-4">Why we started TeyraPay</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The founders of TeyraPay spent years building payments for some of the largest merchants in Saudi Arabia and the UAE. In that time, they hit the same walls over and over: fragmented PSPs, broken routing, compliance that took months, and a complete lack of transparency on fees.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built TeyraPay to fix that — for every merchant in the region, from the first-time e-commerce entrepreneur to the large enterprise processing tens of millions per month.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2024', label: 'Founded' },
                { value: 'Riyadh', label: 'Headquarters' },
                { value: '400+', label: 'Merchants on waitlist' },
                { value: '25+', label: 'Countries supported' },
              ].map(s => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-5 text-center">
                  <div className="font-syne text-2xl font-bold text-foreground mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-syne text-3xl font-bold text-foreground text-center mb-12">What we believe in</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map(v => (
              <div key={v.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-syne font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-syne text-3xl font-bold text-foreground text-center mb-12">The team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map(member => (
              <div key={member.name} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-syne font-bold text-sm text-foreground mb-0.5">{member.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(222,47%,7%)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-3xl font-bold text-white mb-4">Join us in building the future of MENA payments</h2>
          <p className="text-white/40 mb-8">We're hiring across engineering, product, and compliance.</p>
          <Button size="lg" className="rounded-xl px-10 font-semibold" onClick={() => window.location.href = '/get-started'}>
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
