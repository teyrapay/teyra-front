import { RefreshCw, CreditCard, Bell, BarChart3, Settings, Users } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [RefreshCw, CreditCard, Bell, BarChart3, Settings, Users];

const content = {
  en: {
    badge: 'Product · Subscriptions',
    headline: "Recurring revenue,\nfully automated",
    subheadline: "Build subscription products, manage billing cycles, and recover failed payments — all without writing complex billing code. TeyraPay handles the entire lifecycle.",
    highlights: ['Smart retry logic', 'Dunning management', 'Proration support', 'Customer portal'],
    features: [
      { title: 'Flexible billing intervals', desc: "Daily, weekly, monthly, quarterly, or annual billing. Set custom intervals for any billing cycle your business needs." },
      { title: 'Smart payment retry', desc: "When a renewal fails, our smart retry engine attempts again at optimal times — recovering up to 40% of failed charges automatically." },
      { title: 'Dunning management', desc: "Automated email sequences when a payment fails. Customers can update their payment method via a secure self-service link." },
      { title: 'MRR & churn analytics', desc: "Track Monthly Recurring Revenue, churn rate, lifetime value, and subscriber growth — all in one dashboard." },
      { title: 'Proration & upgrades', desc: "Customers can upgrade or downgrade mid-cycle. TeyraPay calculates the prorated amount and charges or credits automatically." },
      { title: 'Customer self-service', desc: "Give subscribers a branded portal to view invoices, update payment info, and manage their plan — without contacting support." },
    ],
  },
  ar: {
    badge: 'المنتج · الاشتراكات',
    headline: "إيرادات متكررة\nمؤتمتة بالكامل",
    subheadline: "ابنِ منتجات اشتراك وأدر دورات الفوترة واسترد المدفوعات الفاشلة — كل ذلك دون كتابة كود فوترة معقد. TeyraPay تدير الدورة الكاملة.",
    highlights: ['إعادة المحاولة الذكية', 'إدارة التحصيل', 'دعم التوزيع النسبي', 'بوابة العملاء'],
    features: [
      { title: 'فترات فوترة مرنة', desc: 'يومية أو أسبوعية أو شهرية أو ربع سنوية أو سنوية. حدد فترات مخصصة لأي دورة يحتاجها عملك.' },
      { title: 'إعادة محاولة ذكية', desc: 'عند فشل تجديد، يحاول المحرك في أوقات مثلى — يسترد تلقائياً ما يصل إلى 40% من الرسوم الفاشلة.' },
      { title: 'إدارة التحصيل', desc: 'تسلسلات بريد إلكتروني تلقائية عند فشل الدفع. يمكن للعملاء تحديث طريقة الدفع عبر رابط خدمة ذاتية آمن.' },
      { title: 'تحليلات MRR والاضطراب', desc: 'تتبع الإيرادات الشهرية المتكررة ومعدل الاضطراب وقيمة العمر والنمو — كل ذلك في لوحة واحدة.' },
      { title: 'التوزيع النسبي والترقيات', desc: 'يمكن للعملاء الترقية أو التخفيض في منتصف الدورة. TeyraPay تحسب المبلغ النسبي وتحصّله أو تُضيفه تلقائياً.' },
      { title: 'خدمة ذاتية للعملاء', desc: 'امنح المشتركين بوابة بالعلامة التجارية لعرض الفواتير وتحديث معلومات الدفع وإدارة خطتهم.' },
    ],
  },
} as const;

export default function SubscriptionsPage() {
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
