import { Building2, Shield, Globe, Users, Cpu, Banknote } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [Building2, Shield, Globe, Users, Cpu, Banknote];

const content = {
  en: {
    badge: 'Solutions · Enterprise',
    headline: "White-label payment\ninfrastructure at scale",
    subheadline: "Launch your own payment gateway. Full multi-tenancy, custom branding, direct acquiring options, and 99.95% uptime SLA. For banks, fintechs, and large platforms.",
    ctaText: 'Contact Sales',
    ctaHref: '/contact',
    highlights: ['White-label ready', 'On-premise option', 'Custom SLA', 'Dedicated team'],
    features: [
      { title: 'Full white-labeling', desc: "Your brand, your domain, your product. TeyraPay runs entirely behind the scenes. Merchants and customers see only your platform." },
      { title: 'Dedicated compliance', desc: "SAMA licensing support, PCIDSS Level 1 infrastructure, AML/CFT screening, and a dedicated compliance officer for enterprise accounts." },
      { title: 'Custom acquiring', desc: "Access direct acquiring relationships with Visa and Mastercard through TeyraPay's principal membership — without your own acquiring license." },
      { title: 'Multi-tenant architecture', desc: "Manage thousands of sub-merchants under one umbrella account. Custom fee structures, routing rules, and settlement schedules per tenant." },
      { title: 'On-premise deployment', desc: "For banks and regulated entities with strict data residency requirements, we offer a fully on-premise deployment within your own infrastructure." },
      { title: 'Custom contracts', desc: "Volume-based pricing, MSA with custom terms, dedicated account manager, and a 99.95% uptime SLA with financial penalties." },
    ],
  },
  ar: {
    badge: 'الحلول · المؤسسات',
    headline: "بنية تحتية بيضاء\nللمدفوعات على نطاق واسع",
    subheadline: "أطلق بوابة الدفع الخاصة بك. استضافة متعددة الكاملة للمستأجرين وعلامة تجارية خاصة وخيارات استحواذ مباشر واتفاقية مستوى خدمة 99.95%. للبنوك وشركات التقنية المالية والمنصات الكبيرة.",
    ctaText: 'تواصل مع المبيعات',
    ctaHref: '/contact',
    highlights: ['جاهز للعلامة التجارية الخاصة', 'خيار نشر محلي', 'اتفاقية مستوى خدمة مخصصة', 'فريق مخصص'],
    features: [
      { title: 'علامة تجارية خاصة كاملة', desc: 'علامتك التجارية ونطاقك ومنتجك. TeyraPay تعمل خلف الكواليس. التجار والعملاء يرون منصتك فقط.' },
      { title: 'امتثال مخصص', desc: 'دعم ترخيص SAMA وبنية PCIDSS المستوى 1 وفحص AML/CFT ومسؤول امتثال مخصص لحسابات المؤسسات.' },
      { title: 'استحواذ مخصص', desc: 'وصّل إلى علاقات استحواذ مباشر مع Visa وMastercard من خلال عضوية TeyraPay الرئيسية دون الحاجة لترخيص استحواذ خاص بك.' },
      { title: 'بنية متعددة المستأجرين', desc: 'أدر آلاف التجار الفرعيين تحت حساب مظلة واحد. هياكل رسوم وقواعد توجيه وجداول تسوية مخصصة لكل مستأجر.' },
      { title: 'نشر محلي', desc: 'للبنوك والكيانات المنظمة ذات متطلبات إقامة البيانات الصارمة، نقدم نشراً محلياً كاملاً ضمن بنيتك الخاصة.' },
      { title: 'عقود مخصصة', desc: 'تسعير حسب الحجم واتفاقية خدمات رئيسية بشروط مخصصة ومدير حساب مخصص واتفاقية مستوى خدمة 99.95% مع عقوبات مالية.' },
    ],
  },
} as const;

export default function EnterprisePage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <MarketingTemplate
      badge={c.badge} headline={c.headline} subheadline={c.subheadline}
      ctaText={c.ctaText} ctaHref={c.ctaHref}
      highlights={[...c.highlights]}
      features={c.features.map((f, i) => ({ ...f, icon: ICONS[i] }))}
    />
  );
}
