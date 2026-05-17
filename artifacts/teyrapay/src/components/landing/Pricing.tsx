import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

const PLAN_DATA = [
  {
    price: '$99', period: '/month', rate: '2.9% + $0.30',
    descEn: 'Perfect for growing merchants and early-stage startups.',
    descAr: 'مثالية للتجار الناشئين والشركات الصغيرة.',
    highlight: false, href: '/get-started',
    features: {
      en: ['Up to $50,000/month volume', '1 PSP integration', 'Basic fraud rules', 'Hosted checkout', 'Invoice builder', 'Payment links', 'Email support', 'Webhook delivery'],
      ar: ['حتى 50,000 دولار شهرياً', 'تكامل مع مزود خدمة واحد', 'قواعد احتيال أساسية', 'صفحة دفع مستضافة', 'منشئ الفواتير', 'روابط الدفع', 'دعم عبر البريد الإلكتروني', 'توصيل الويب هوك'],
    },
  },
  {
    price: '$399', period: '/month', rate: '2.2% + $0.25',
    descEn: 'For established businesses with higher volume and compliance needs.',
    descAr: 'للشركات الراسخة ذات الحجم الأعلى واحتياجات الامتثال.',
    highlight: true, href: '/get-started',
    features: {
      en: ['Up to $500,000/month volume', 'Multi-PSP routing', 'Advanced fraud engine', 'KYC/KYB onboarding', 'Subscriptions & billing', 'PDF invoices + branding', 'Webhook retries & logs', 'Priority support', 'Team management', 'API logs & audit trail'],
      ar: ['حتى 500,000 دولار شهرياً', 'توجيه متعدد المزودين', 'محرك احتيال متقدم', 'تأهيل KYC/KYB', 'الاشتراكات والفواتير', 'فواتير PDF + علامة تجارية', 'إعادة محاولة وسجلات الويب هوك', 'دعم ذو أولوية', 'إدارة الفريق', 'سجلات API وسجل التدقيق'],
    },
  },
  {
    price: 'Custom', period: '', rate: 'Negotiated',
    descEn: 'White-label infrastructure for banks, fintechs, and large platforms.',
    descAr: 'بنية تحتية بيضاء للبنوك وشركات التقنية المالية والمنصات الكبيرة.',
    highlight: false, href: '/contact',
    features: {
      en: ['Unlimited volume', 'Full multi-tenancy', 'White-label branding', 'Custom routing rules', 'Direct acquiring options', 'Dedicated SLA (99.95%)', 'Custom KYC integration', 'On-premise deployment', 'Dedicated account manager', 'Custom contracts & SLAs'],
      ar: ['حجم غير محدود', 'استضافة متعددة للمستأجرين', 'علامة تجارية خاصة', 'قواعد توجيه مخصصة', 'خيارات استحواذ مباشر', 'اتفاقية مستوى خدمة مخصصة (99.95%)', 'تكامل KYC مخصص', 'نشر محلي', 'مدير حساب مخصص', 'عقود واتفاقيات مستوى خدمة مخصصة'],
    },
  },
];

export default function Pricing() {
  const [, setLocation] = useLocation();
  const { t, lang } = useLanguage();

  return (
    <section id="pricing" className="py-28 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">{t.pricing.badge}</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground">{t.pricing.headline}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t.pricing.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLAN_DATA.map((plan, i) => {
            const planT = t.pricing.plans[i]!;
            return (
              <div key={planT.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlight
                    ? 'bg-[hsl(222,47%,8%)] border-primary/30 text-white shadow-2xl shadow-primary/10 scale-105'
                    : 'bg-card border-border'
                }`}>
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Zap className="w-3 h-3" /> {t.pricing.popular}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`font-syne text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>{planT.name}</h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                    {lang === 'ar' ? plan.descAr : plan.descEn}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`font-syne text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-foreground'}`}>{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/40' : 'text-muted-foreground'}`}>{plan.period}</span>
                  </div>
                  <div className={`text-xs mt-1.5 font-medium ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                    {t.pricing.transaction}: {plan.rate}
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {(lang === 'ar' ? plan.features.ar : plan.features.en).map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span className={plan.highlight ? 'text-white/75' : 'text-muted-foreground'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold rounded-xl ${plan.highlight ? 'bg-primary hover:bg-primary/90 text-white' : ''}`}
                  variant={plan.highlight ? 'default' : 'outline'}
                  onClick={() => setLocation(plan.href)}>
                  {planT.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
