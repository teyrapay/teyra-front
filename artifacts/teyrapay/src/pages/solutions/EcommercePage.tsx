import { ShoppingCart, ArrowRightLeft, Globe, Shield, Zap, BarChart3 } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [ShoppingCart, ArrowRightLeft, Globe, Shield, Zap, BarChart3];

const content = {
  en: {
    badge: 'Solutions · E-commerce',
    headline: "The payment layer your\nonline store deserves",
    subheadline: "From checkout to refunds to settlements — TeyraPay handles every payment touchpoint for your e-commerce business. Built for high-volume merchants across MENA.",
    highlights: ['One-click checkout', 'Smart refunds', 'Multi-currency', 'Fraud protection'],
    features: [
      { title: 'Optimized checkout', desc: 'Reduce cart abandonment with a fast, mobile-first checkout that remembers returning customers and supports all local payment methods.' },
      { title: 'Instant refunds', desc: 'Issue full or partial refunds in one click. Funds return to the customer in 2–5 business days, with automatic reconciliation.' },
      { title: 'Sell across MENA', desc: 'Accept payments in SAR, AED, KWD, BHD, QAR, and USD. Automatically show the right payment methods per country.' },
      { title: 'Fraud prevention', desc: 'ML-powered fraud scoring, 3DS 2.0, BIN intelligence, and configurable block rules keep chargebacks under 0.1%.' },
      { title: 'PSP auto-routing', desc: 'Failed on Checkout.com? Automatically retry via PayTabs. Maximize success rate without changing a line of code.' },
      { title: 'Revenue analytics', desc: 'Track GMV, refund rates, success by payment method, and top countries — with daily CSV settlement reports.' },
    ],
  },
  ar: {
    badge: 'الحلول · التجارة الإلكترونية',
    headline: "طبقة الدفع التي\nيستحقها متجرك",
    subheadline: "من الدفع إلى الاسترداد إلى التسويات — TeyraPay تتولى كل نقطة تواصل للمدفوعات في تجارتك الإلكترونية. مبنية للتجار ذوي الحجم الكبير في منطقة الشرق الأوسط.",
    highlights: ['دفع بنقرة واحدة', 'استرداد فوري', 'متعدد العملات', 'حماية من الاحتيال'],
    features: [
      { title: 'صفحة دفع محسّنة', desc: 'قلل معدل التخلي عن العربة بصفحة دفع سريعة للجوال أولاً تتذكر العملاء العائدين وتدعم جميع طرق الدفع المحلية.' },
      { title: 'استرداد فوري', desc: 'أصدر استردادات كاملة أو جزئية بنقرة واحدة. تعود الأموال للعميل خلال 2-5 أيام عمل مع تسوية تلقائية.' },
      { title: 'بيع في جميع أنحاء المنطقة', desc: 'اقبل مدفوعات بالريال السعودي والدرهم والدينار الكويتي والبحريني والريال القطري والدولار. أظهر طرق الدفع المناسبة لكل بلد تلقائياً.' },
      { title: 'منع الاحتيال', desc: 'تقييم احتيال بالذكاء الاصطناعي و3DS 2.0 وذكاء BIN وقواعد حجب قابلة للتكوين تبقي النزاعات تحت 0.1%.' },
      { title: 'التوجيه التلقائي بين المزودين', desc: 'فشل على Checkout.com؟ أعد المحاولة تلقائياً عبر PayTabs. زِد معدل النجاح دون تغيير سطر كود.' },
      { title: 'تحليلات الإيرادات', desc: 'تتبع إجمالي المبيعات ومعدلات الاسترداد والنجاح حسب طريقة الدفع — مع تقارير تسوية CSV يومية.' },
    ],
  },
} as const;

export default function EcommercePage() {
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
