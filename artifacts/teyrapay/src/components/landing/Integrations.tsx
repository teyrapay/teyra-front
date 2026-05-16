const PSPS = [
  { name: 'Checkout.com', badge: 'Primary', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { name: 'PayTabs', badge: 'Secondary', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { name: 'Tap Payments', badge: 'Active', color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { name: 'Mamo Pay', badge: 'Active', color: 'text-pink-600 bg-pink-50 border-pink-200' },
  { name: 'Network Int.', badge: 'Active', color: 'text-orange-600 bg-orange-50 border-orange-200' },
];

const METHODS = ['Visa', 'Mastercard', 'Mada', 'KNET', 'Apple Pay', 'Google Pay', 'Benefit', 'Amex'];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">Integrations</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground">
            Connected to every<br />major PSP in MENA
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            TeyraPay integrates with all major payment processors and local payment methods across the region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PSPS.map(psp => (
            <div key={psp.name}
              className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 hover:shadow-md hover:border-primary/20 transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{psp.name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{psp.name}</div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${psp.color}`}>{psp.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Supported Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-3">
            {METHODS.map(m => (
              <div key={m}
                className="flex items-center gap-2 bg-secondary/50 border border-border rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-primary/50" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
