import { RefreshCw, BarChart3, CreditCard, Bell, Users, ArrowRight } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [RefreshCw, BarChart3, CreditCard, Bell, Users, ArrowRight];

const content = {
  en: {
    badge: 'Solutions · SaaS',
    headline: "Subscription infrastructure\nfor MENA SaaS",
    subheadline: "MRR tracking, smart dunning, upgrade/downgrade proration, and a customer portal — everything a SaaS business needs to grow recurring revenue reliably.",
    highlights: ['MRR dashboard', 'Smart retry', 'Proration', 'Self-service portal'],
    features: [
      { title: 'Recurring billing engine', desc: 'Monthly, annual, or custom intervals. TeyraPay auto-charges on renewal, handles failures with smart retries, and updates your MRR in real time.' },
      { title: 'SaaS metrics dashboard', desc: 'MRR, ARR, churn rate, LTV, ARPU — all calculated automatically. Share a read-only view with your investors.' },
      { title: 'Plan upgrades & downgrades', desc: 'Customers upgrade mid-cycle and only pay the prorated difference. Downgrades take effect at period end. All handled automatically.' },
      { title: 'Dunning campaigns', desc: 'Smart email sequences when a card fails. Recovery links, payment method update flows, and final cancellation — all configurable.' },
      { title: 'Customer portal', desc: 'A branded self-service portal where subscribers manage their plan, update payment info, and download invoices without contacting support.' },
      { title: 'Usage-based billing', desc: 'Charge per API call, per seat, or per unit consumed. Report usage via API and TeyraPay calculates the bill at period end.' },
    ],
  },
  ar: {
    badge: 'الحلول · برمجيات SaaS',
    headline: "بنية اشتراكات لـSaaS\nفي منطقة الشرق الأوسط",
    subheadline: "تتبع MRR وتحصيل ذكي وتوزيع نسبي عند الترقية والتخفيض وبوابة عملاء — كل ما يحتاجه عمل SaaS لزيادة الإيرادات المتكررة.",
    highlights: ['لوحة MRR', 'إعادة محاولة ذكية', 'توزيع نسبي', 'بوابة خدمة ذاتية'],
    features: [
      { title: 'محرك الفوترة المتكررة', desc: 'شهري أو سنوي أو فترات مخصصة. TeyraPay تُحصّل تلقائياً عند التجديد وتتعامل مع الفشل بإعادة محاولة ذكية وتحدّث MRR فورياً.' },
      { title: 'لوحة مقاييس SaaS', desc: 'MRR وARR ومعدل الاضطراب وLTV وARPU — تُحسب تلقائياً. شارك عرضاً للقراءة فقط مع مستثمريك.' },
      { title: 'ترقية وتخفيض الخطط', desc: 'يرقّي العملاء في منتصف الدورة ويدفعون الفرق النسبي فقط. التخفيضات تسري عند نهاية الفترة. كل ذلك تلقائياً.' },
      { title: 'حملات التحصيل', desc: 'تسلسلات بريد ذكية عند فشل البطاقة. روابط استرداد وتدفقات تحديث طريقة الدفع والإلغاء النهائي — كل ذلك قابل للتخصيص.' },
      { title: 'بوابة العملاء', desc: 'بوابة بالعلامة التجارية يدير فيها المشتركون خطتهم وتحديث معلومات الدفع وتنزيل الفواتير دون الاتصال بالدعم.' },
      { title: 'الفوترة حسب الاستخدام', desc: 'احصب رسوماً لكل طلب API أو مقعد أو وحدة مستهلكة. أبلّغ عن الاستخدام عبر API وTeyraPay تحسب الفاتورة في نهاية الفترة.' },
    ],
  },
} as const;

export default function SaasPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <MarketingTemplate
      badge={c.badge} headline={c.headline} subheadline={c.subheadline}
      highlights={[...c.highlights]}
      features={c.features.map((f, i) => ({ ...f, icon: ICONS[i] }))}
    />
  );
}
