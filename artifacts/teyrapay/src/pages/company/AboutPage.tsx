import PageLayout from '@/components/landing/PageLayout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const hero = {
    badge: isAr ? 'الشركة · من نحن' : 'Company · About',
    title: isAr ? 'نبني طبقة المدفوعات\nلمنطقة الشرق الأوسط' : "We're building the payment\nlayer for MENA",
    desc: isAr
      ? 'تأسست TeyraPay عام 2024 في الرياض بمهمة تجعل قبول المدفوعات في الشرق الأوسط بسيطاً وموثوقاً كأي مكان آخر في العالم.'
      : 'Founded in 2024 in Riyadh, TeyraPay is on a mission to make accepting payments in the Middle East as simple and reliable as anywhere else in the world.',
  };

  const mission = {
    title: isAr ? 'لماذا أسسنا TeyraPay' : 'Why we started TeyraPay',
    p1: isAr
      ? 'أمضى مؤسسو TeyraPay سنوات في بناء أنظمة الدفع لبعض أكبر التجار في المملكة العربية السعودية والإمارات. خلال تلك الفترة، اصطدموا بنفس العقبات مراراً: مزودو خدمات متفرقون وتوجيه معطوب وامتثال يستغرق أشهراً وغياب تام للشفافية في الرسوم.'
      : "The founders of TeyraPay spent years building payments for some of the largest merchants in Saudi Arabia and the UAE. In that time, they hit the same walls over and over: fragmented PSPs, broken routing, compliance that took months, and a complete lack of transparency on fees.",
    p2: isAr
      ? 'بنينا TeyraPay لحل هذا — لكل تاجر في المنطقة، من رائد الأعمال الجديد في التجارة الإلكترونية إلى المؤسسة الكبيرة التي تعالج عشرات الملايين شهرياً.'
      : "We built TeyraPay to fix that — for every merchant in the region, from the first-time e-commerce entrepreneur to the large enterprise processing tens of millions per month.",
  };

  const stats = isAr
    ? [{ value: '2024', label: 'تأسست' }, { value: 'الرياض', label: 'المقر الرئيسي' }, { value: '+400', label: 'تجار في قائمة الانتظار' }, { value: '+25', label: 'دولة مدعومة' }]
    : [{ value: '2024', label: 'Founded' }, { value: 'Riyadh', label: 'Headquarters' }, { value: '400+', label: 'Merchants on waitlist' }, { value: '25+', label: 'Countries supported' }];

  const valuesTitle = isAr ? 'ما نؤمن به' : 'What we believe in';
  const VALUES = isAr
    ? [
        { title: 'التاجر أولاً', desc: 'كل قرار منتج يبدأ بما يجعل حياة التجار أسهل وأعمالهم أكثر نجاحاً.' },
        { title: 'الشفافية الكاملة', desc: 'لا رسوم خفية. لا تسعير مربك. لا حروف صغيرة. نقول بالضبط ما تكلفه الأشياء وكيف تعمل.' },
        { title: 'مبني للمنطقة', desc: 'منطقة الشرق الأوسط ليست فكرة لاحقة. فريقنا نشأ هنا. نفهم طرق الدفع واللوائح والفروق الدقيقة التي تهم.' },
        { title: 'موثوقية لا هوادة فيها', desc: 'البنية التحتية للمدفوعات حرجة. نهوس بوقت التشغيل وزمن الاستجابة والدقة — لأن عملك يعتمد عليها.' },
      ]
    : [
        { title: 'Merchant first', desc: "Every product decision starts with what makes merchants' lives easier and their businesses more successful." },
        { title: 'Radical transparency', desc: "No hidden fees. No confusing pricing. No fine print. We say exactly what things cost and exactly how they work." },
        { title: 'Built for the region', desc: "MENA isn't an afterthought. Our team grew up here. We understand the payment methods, regulations, and nuances that matter." },
        { title: 'Relentless reliability', desc: "Payments infrastructure is critical. We obsess over uptime, latency, and correctness — because your business depends on it." },
      ];

  const teamTitle = isAr ? 'الفريق' : 'The team';
  const TEAM = isAr
    ? [
        { name: 'تيرا الراشدي', role: 'الرئيس التنفيذي والمؤسس المشارك', bio: 'نائب رئيس سابق للمدفوعات في SADAD. 12 عاماً في البنية التحتية للتقنية المالية بمنطقة الشرق الأوسط.' },
        { name: 'خالد حسن', role: 'المدير التقني والمؤسس المشارك', bio: 'قائد هندسة سابق في Stripe. بنى بنية تحتية للمدفوعات تعالج أكثر من 10 مليارات دولار سنوياً.' },
        { name: 'سارة المطيري', role: 'مديرة المنتج', bio: 'مديرة المنتج السابقة في PayTabs. خبيرة في تجربة التجار في منطقة الشرق الأوسط.' },
        { name: 'محمد يوسف', role: 'رئيس الامتثال', bio: 'مفتش سابق في SAMA. متخصص في مكافحة غسل الأموال وKYC وتنظيم المدفوعات في دول مجلس التعاون الخليجي.' },
      ]
    : [
        { name: 'Teyra Al-Rashidi', role: 'CEO & Co-founder', bio: 'Former VP Payments at SADAD. 12 years in MENA fintech infrastructure.' },
        { name: 'Khalid Hassan', role: 'CTO & Co-founder', bio: 'Ex-Stripe engineering lead. Built payment infrastructure processing $10B+ annually.' },
        { name: 'Sara Al-Mutairi', role: 'CPO', bio: 'Previously Director of Product at PayTabs. Expert in MENA merchant experience.' },
        { name: 'Mohammed Youssef', role: 'Head of Compliance', bio: 'Former SAMA examiner. Specialist in AML, KYC, and payment regulation across GCC.' },
      ];

  const cta = {
    title: isAr ? 'انضم إلينا في بناء مستقبل مدفوعات الشرق الأوسط' : 'Join us in building the future of MENA payments',
    desc: isAr ? 'نوظّف في الهندسة والمنتج والامتثال.' : "We're hiring across engineering, product, and compliance.",
    btn: isAr ? 'ابدأ الآن' : 'Get Started',
  };

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">{hero.badge}</span>
          <h1 className="font-syne text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 whitespace-pre-line">{hero.title}</h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{hero.desc}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-3xl font-bold text-foreground mb-4">{mission.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{mission.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{mission.p2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-5 text-center">
                  <div className="font-syne text-2xl font-bold text-foreground mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-syne text-3xl font-bold text-foreground text-center mb-12">{valuesTitle}</h2>
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

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-syne text-3xl font-bold text-foreground text-center mb-12">{teamTitle}</h2>
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

      <section className="py-20 bg-[hsl(222,47%,7%)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-3xl font-bold text-white mb-4">{cta.title}</h2>
          <p className="text-white/40 mb-8">{cta.desc}</p>
          <Button size="lg" className="rounded-xl px-10 font-semibold" onClick={() => window.location.href = '/get-started'}>
            {cta.btn} <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
