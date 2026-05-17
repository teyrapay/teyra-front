import { useLanguage } from '@/contexts/LanguageContext';

const TESTIMONIALS_EN = [
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

const TESTIMONIALS_AR = [
  {
    quote: "قلّصت TeyraPay معدل التخلي عن الدفع لدينا بنسبة 23% خلال الشهر الأول. التوجيه متعدد المزودين ذكي حقاً — وفّر علينا آلاف الدولارات في المعاملات الفاشلة.",
    name: 'أحمد الراشدي', role: 'مدير التقنية، Gulf Commerce', avatar: 'أ',
  },
  {
    quote: "انتقلنا من الصفر إلى قبول مدى وApple Pay والبطاقات في بعد ظهر واحد. التوثيق واضح، والـ API نظيف، وفريق الدعم يعرف فعلاً ما يفعله.",
    name: 'سارة المطيري', role: 'رئيس المنتج، TechStart Arabia', avatar: 'س',
  },
  {
    quote: "كسوق إلكترونية، احتجنا إلى تقسيم المدفوعات والاحتياطيات المتجددة. TeyraPay كانت المنصة MENA الوحيدة التي تعاملت مع ذلك دون كود مخصص.",
    name: 'خالد حسن', role: 'مؤسس، منصة سوق', avatar: 'خ',
  },
];

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const list = lang === 'ar' ? TESTIMONIALS_AR : TESTIMONIALS_EN;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">{t.testimonials.badge}</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground">{t.testimonials.headline}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((item) => (
            <div key={item.name} className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all">
              <div className="text-3xl text-primary/30 font-serif leading-none mb-4">"</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{item.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
