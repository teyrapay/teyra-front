const TESTIMONIALS = [
  {
    quote: "TeyraPay cut our checkout abandonment rate by 23% within the first month. The multi-PSP routing is genuinely smart — it saved us thousands in failed transactions.",
    name: 'Ahmed Al-Rashidi', role: 'CTO, Gulf Commerce', avatar: 'A',
  },
  {
    quote: "We went from zero to accepting Mada, Apple Pay, and cards in one afternoon. The docs are clear, the API is clean, and the support team actually knows their stuff.",
    name: 'Sara Al-Mutairi', role: 'Head of Product, TechStart Arabia', avatar: 'S',
  },
  {
    quote: "As a marketplace, we needed split payments and rolling reserves. TeyraPay was the only MENA-native platform that actually handled it without custom code.",
    name: 'Khalid Hassan', role: 'Founder, Suuq Platform', avatar: 'K',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">Customer Stories</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground">Trusted by merchants<br />across the region</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all">
              <div className="text-3xl text-primary/30 font-serif leading-none mb-4">"</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
