import { CreditCard, Globe, Shield, Zap, Smartphone, BarChart3 } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [CreditCard, Globe, Shield, Zap, Smartphone, BarChart3];

const content = {
  en: {
    badge: 'Product · Hosted Checkout',
    headline: "A checkout page your\ncustomers will actually finish",
    subheadline: "Beautiful, conversion-optimized payment pages hosted by TeyraPay. No code required. Go live in minutes with support for all major payment methods across MENA.",
    highlights: ['No code required', 'Mobile optimized', '3DS 2.0 built-in', 'PCI compliant by default'],
    features: [
      { title: 'All payment methods', desc: "Accept Visa, Mastercard, Mada, KNET, Apple Pay, Google Pay, and bank transfers — configured automatically based on the customer's country." },
      { title: 'Custom domain & branding', desc: "Use your own domain (pay.yourstore.com), logo, and colors. Customers never know they left your site." },
      { title: 'Fraud prevention built-in', desc: "Every checkout is protected by our ML fraud engine, velocity checks, and 3D Secure 2.0 with device fingerprinting." },
      { title: 'One-click setup', desc: "Create a checkout session via API, redirect the customer. That's it. Our checkout handles everything else." },
      { title: 'Mobile-first design', desc: "Optimized for every screen. Average mobile conversion rate improvement of 18% vs self-hosted forms." },
      { title: 'Conversion analytics', desc: "Track abandonment rate, payment method preference, and success rate per country — all from your dashboard." },
    ],
  },
  ar: {
    badge: 'المنتج · صفحة الدفع المستضافة',
    headline: "صفحة دفع ستُكملها\nعملاؤك فعلاً",
    subheadline: "صفحات دفع جميلة ومُحسَّنة للتحويل، تستضيفها TeyraPay. لا حاجة للكود. انطلق في دقائق مع دعم جميع طرق الدفع الرئيسية في منطقة الشرق الأوسط.",
    highlights: ['لا كود مطلوب', 'محسّنة للجوال', '3DS 2.0 مدمج', 'امتثال PCI افتراضياً'],
    features: [
      { title: 'جميع طرق الدفع', desc: 'اقبل Visa وMastercard ومدى وKNET وApple Pay وGoogle Pay والتحويلات البنكية — يتم الضبط تلقائياً بناءً على بلد العميل.' },
      { title: 'نطاق وعلامة تجارية مخصصة', desc: 'استخدم نطاقك الخاص وشعارك وألوانك. لن يعرف العملاء أنهم غادروا موقعك.' },
      { title: 'منع الاحتيال مدمج', desc: 'كل عملية دفع محمية بمحرك الاحتيال بالذكاء الاصطناعي وفحوصات السرعة و3D Secure 2.0 مع بصمة الجهاز.' },
      { title: 'إعداد بنقرة واحدة', desc: 'أنشئ جلسة دفع عبر API وأعد توجيه العميل. هذا كل شيء. صفحة الدفع لدينا تتولى الباقي.' },
      { title: 'تصميم للجوال أولاً', desc: 'محسّنة لكل الشاشات. متوسط تحسين معدل التحويل على الجوال 18% مقارنة بالنماذج المستضافة ذاتياً.' },
      { title: 'تحليلات التحويل', desc: 'تتبع معدل التخلي وتفضيل طريقة الدفع ومعدل النجاح لكل بلد — كل ذلك من لوحة التحكم.' },
    ],
  },
} as const;

export default function HostedCheckout() {
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
